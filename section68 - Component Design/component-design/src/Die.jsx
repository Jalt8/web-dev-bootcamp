
function Die({ die, i, color }) {
    return (
        <div key={i} className="Lucky7-die" style={{backgroundColor: color}}>
            {die}
        </div>
    )
}

export default Die