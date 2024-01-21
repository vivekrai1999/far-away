import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState([])
  function handleAddItem(item){
    setItems((items)=>[...items, item])
  }
  function handleDelete(id){
    setItems((items)=>items.filter(item=>item.id!==id))
  }
  function handleChecked(id){
    setItems((items)=>items.map(item=>item.id===id?{...item, packed: !item.packed}: item))
  }
  return <div className="app">
    <Logo/>
    <Form onAddItem={handleAddItem}/>
    <PackingList items={items} onDelete={handleDelete} onChecked={handleChecked}/>
    <Stats items={items}/>
  </div>
}

function Logo(){
  return <h1>🌴Far Away💼</h1>
}

function Form({onAddItem}){
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleDescriptiion(value){
    setDescription(value);
  }
  function handleQuantity(value){
    setQuantity(Number(value))
  }
  function handleSubmit(e){
    e.preventDefault()
    if(!description) return
    const newItem = {
      id: crypto.randomUUID(),
      description: description,
      quantity: quantity,
      packed: false,
    }
    onAddItem(newItem)
    setDescription("")
    setQuantity(1)
  }
  return <div className="add-form">
    <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip</h3>
    <select value={quantity} onChange={(e)=>handleQuantity(e.target.value)}>
      {Array.from({length: 20},(_,i)=>i+1).map(num=><option value={num} key={num}>{num}</option>)}
    </select>
    <input value={description} onChange={(e)=>handleDescriptiion(e.target.value)} type="text" placeholder="Item..."/>
    <button>Add</button>
    </form>
  </div>
}

function PackingList({items, onDelete, onChecked}){
  return <div className="list">
  <ul>
    {items.map(item=><Item key={item.id} item={item} onDelete={onDelete} onChecked={onChecked}/>)}
  </ul>
  </div>
}

function Item({item, onDelete, onChecked}){
  return <li>
    <input type="checkbox" onChange={()=>{onChecked(item.id)}}/>
    <span style={item.packed?{textDecoration: 'line-through'}:{}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={()=>onDelete(item.id)}>❌</button>
  </li>
}

function Stats({items}){
  const totalItems = items.length
  const packItems = items.filter(item=>item.packed===true).length
  return <footer className="stats">
    <em>
    💼You have {totalItems} items on your list and you already packed {packItems} ({parseInt((packItems/totalItems)*100)}%)
    </em>
  </footer>
}

export default App
