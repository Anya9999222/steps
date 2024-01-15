import './TableItem.css'
import { Training } from '../../models/Training';

interface Props {
    item: Training,
    deleteItem: (id: number) => void
}
const TableItem = ({item,  deleteItem}: Props) => {
    const date = new Date(item.date).toLocaleDateString('ru-RU'); 
    
    return (
        <div className='table_item'>
            <div className="date">
                {date}
            </div>
            <div className="distance">
                {item.distance}
            </div>
            <div className="actions">
                <div className="edit" >✎</div>
                <div className="delete" onClick={deleteItem}>✘</div>
            </div>
        </div>
    )
}

export default TableItem