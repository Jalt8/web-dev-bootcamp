import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(item => (
                //<ShoppingListItem key={item.id} {...item} />
                <ShoppingListItem key={item.id} item={item.item} quantity={item.qty} completed={item.completed} />
            ))}
        </ul>
    );
}

export default ShoppingList;