import { useState } from "react";
import Form from "./componenets/Form";
import Logo from "./componenets/Logo";
import PackingList from "./componenets/PackingList";
import Stats from "./componenets/Status";


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
  function handleClear(){
    const confirmend = window.confirm("Delete all items?")
    if(confirmend) setItems([])
  }
  return <div className="app">
    <Logo/>
    <Form onAddItem={handleAddItem}/>
    <PackingList items={items} onDelete={handleDelete} onChecked={handleChecked} onClear={handleClear}/>
    <Stats items={items}/>
  </div>
}

export default App
