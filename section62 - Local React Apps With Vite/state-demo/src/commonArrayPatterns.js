//COMMON PATTERNS FOR UPDATING ARRAYS IN STATE

const updatedCart = [...shoppingCart, { id: 6, product: "Microphone", price: 99.99 }]

// REMOVING FROM AN ARRAY
shoppingCart.filter(item => item.id !== 2)

// UPDATING ALL ITEMS IN AN ARRAY
shoppingCart.map(item => {
    return { ...item, price: item.price * 2 }
})

// UPDATING A SINGLE ITEM IN AN ARRAY
shoppingCart.map(item => {
    return item.id === 3 ? { ...item, price: item.price * 2 } : item
})

//SORTING AN ARRAY
const sortedCart = [...shoppingCart].sort()