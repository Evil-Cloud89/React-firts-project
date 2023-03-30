import styles from './ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId, isFavorite: props.isFavorite }));
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span><TextInput value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <span>Icon:</span><TextInput value={icon} placeholder="Icon" onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;