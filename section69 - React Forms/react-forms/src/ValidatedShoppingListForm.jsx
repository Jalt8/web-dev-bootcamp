import { useState } from 'react';

function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ name: '', qty: '' });
    const [productIsValid, setProductIsValid] = useState(false);

    function validate(name) {
        if (!name) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }

    function handleChange(evt) {
        if (evt.target.name === 'name'){
            validate(evt.target.value);
        }
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData({
            ...formData,
            [changedField]: newValue
        });
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formData);
        if (productIsValid) {
            console.log('submitted');
            setFormData({ name: '', qty: '' });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Shopping List Form: Name is {formData.name} and Qty is {formData.qty}</h1>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="name" value={formData.name} onChange={handleChange} id='name' name='name' />
            {!productIsValid && <p style={{ color: 'red' }}>Product name can not be empty</p>}
            <label htmlFor="qty">Quantity</label>
            <input type="number" placeholder="quantity" value={formData.qty} onChange={handleChange} id='qty' name='qty' />
            <button onClick={() => addItem(formData)}>Submit</button>
        </form>
    )
}

export default ValidatedShoppingListForm;