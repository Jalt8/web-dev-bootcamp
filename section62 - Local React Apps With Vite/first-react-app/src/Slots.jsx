export default function Slots({s1, s2, s3}){
    const winner = (s1 === s2) && (s2 === s3)
    return (
        <div>
            <h1>Slot Machines!</h1>
            <h2>{s1} {s2} {s3}</h2>
            <h3 style={ winner ? {color: 'green'} : {color: 'red'}}>{winner ? "Winner!" : "Loser!"}</h3>
            { winner && <h4>Congrats!!!</h4>}
        </div>
    )
}