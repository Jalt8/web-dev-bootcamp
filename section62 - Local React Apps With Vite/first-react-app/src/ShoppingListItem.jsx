function ShoppingListItem({item, quantity, completed}) {
    return (
        <li style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? "grey" : "red"
            }}>
            {item} - {quantity}
        </li>
    );
}

export default ShoppingListItem;
