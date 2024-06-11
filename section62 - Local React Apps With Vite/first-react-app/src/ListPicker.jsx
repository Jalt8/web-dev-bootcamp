export default function ListPicker({arr}){
    const randomElement = arr[Math.floor(Math.random() * arr.length)];    
    return (
        <div>
            <h1>Choice: {randomElement}</h1>
        </div>
    )
}