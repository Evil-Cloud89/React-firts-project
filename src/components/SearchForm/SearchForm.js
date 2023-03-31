import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const [searchString, setSearchString] = useState('');
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      dispatch(updateSearchString(searchString));
      setSearchString('');
    };

    useEffect(() => {dispatch(updateSearchString(''));}, [dispatch]); // Służy do resetowania stanu - useEfect renderuje w nieskończoność - dispatch part a [dispatch] to zatrzymuje

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search…" type="text" value={searchString} onChange={(e => setSearchString(e.target.value))} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;