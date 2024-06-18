//COMMON PATTERNS FOR UPDATING ARRAYS IN STATE

const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 5.99 },
    { id: 2, product: "Keyboard", price: 25.99 },
    { id: 3, product: "Monitor", price: 199.99 },
    { id: 4, product: "Mouse", price: 9.99 },
    { id: 5, product: "Webcam", price: 49.99 }]

// ADDING TO AND ARRAY
[...shoppingCart, { id: 6, product: "Microphone", price: 99.99 }]

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