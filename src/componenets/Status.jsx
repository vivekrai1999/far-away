export default function Stats({items}){
    const totalItems = items.length
    const packItems = items.filter(item=>item.packed===true).length
    return <footer className="stats">
      <em>
      💼You have {totalItems} items on your list and you already packed {packItems} ({parseInt((packItems/totalItems)*100)}%)
      </em>
    </footer>
}