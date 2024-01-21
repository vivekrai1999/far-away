import { useState } from "react";
export default function Form({onAddItem}){
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