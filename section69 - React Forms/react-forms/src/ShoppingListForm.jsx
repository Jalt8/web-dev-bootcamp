import {useState} from 'react';

function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({name: '', qty: ''});
    function handleChange(evt){
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData({
            ...formData,
            [changedField]: newValue
        });
    }
    function handleSubmit(evt){
        evt.preventDefault();
        console.log(formData);
        console.log('submitted');
        if(!formData.name || !formData.qty) return alert('Please enter both name and quantity');
        setFormData({name: '', qty: ''});
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Shopping List Form: Name is {formData.name} and Qty is {formData.qty}</h1>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="name" value={formData.name} onChange={handleChange} id='name' name='name' />
            <label htmlFor="qty">Quantity</label>
            <input type="number" placeholder="quantity" value={formData.qty} onChange={handleChange} id='qty' name='qty' />
            <button onClick={() => addItem(formData)}>Submit</button>
        </form>
    )
}

export default ShoppingListForm;