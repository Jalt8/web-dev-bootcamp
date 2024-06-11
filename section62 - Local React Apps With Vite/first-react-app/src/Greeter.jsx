export default function Greeter({name = "everyone", from = "Jon Snow"}){
    return ( 
    <>
        <h1>Hello World, {name}</h1>
        <h2>From {from}</h2>
    </>
    )
}