function ShoppingListItem({item, quantity, completed}) {
    return (
        <li style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? "grey" : "red"
            }}>
            {quantity} {item}
        </li>
    );
}

export default ShoppingListItem;
