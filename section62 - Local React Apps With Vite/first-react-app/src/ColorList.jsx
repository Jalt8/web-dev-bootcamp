export default function ColorList({colors}){
    return (
        <div>
            <h1>Color List</h1>
            <ul>{colors.map(c => <li style={{color: c}}>{c}</li>)}</ul>
        </div>
    )
}