import { useState } from "react";
import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

function ValidatedShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), name: 'Milk', qty: 2 },
        { id: uuid(), name: 'Bread', qty: 1 },
    ]);
    function addItem(item) {
        if(!item.name || !item.qty) return alert('Please enter both name and quantity');
        setItems(items => [...items, { ...item, id: uuid() }]);
    }
    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} - {item.qty}</li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem}/>
        </div>
    );
}

export default ValidatedShoppingList;