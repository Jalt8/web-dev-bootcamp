export default function Die({face}){
    const randomFace = Math.floor(Math.random() * face) + 1
    return (
        <div>
            <h1>Die Roll: {randomFace}</h1>
        </div>
    )
}