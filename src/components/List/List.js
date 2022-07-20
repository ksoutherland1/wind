import { Link } from 'react-router-dom';
import locationData from './locations.json';

function List({ data, setData}) {
    let list = locationData.map(item => {
        return (
            <div 
                className='locationName' 
                key={item.name}>
                <p>{item.name}</p>
                
            </div>        
        );
    });
    return <div>{list}</div>
}

export default List;