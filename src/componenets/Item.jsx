export default function Item({item, onDelete, onChecked}){
    return <li>
      <input type="checkbox" onChange={()=>{onChecked(item.id)}}/>
      <span style={item.packed?{textDecoration: 'line-through'}:{}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDelete(item.id)}>❌</button>
    </li>
  }
  