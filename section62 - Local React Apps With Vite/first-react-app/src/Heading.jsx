export default function Heading({color = 'olive', text = 'Default Heading'}) {
    return (
        <div>
            <h1 style={{color: color}}>{text}</h1>
        </div>
    )
}