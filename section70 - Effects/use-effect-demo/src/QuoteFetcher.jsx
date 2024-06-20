import { useEffect, useState } from 'react';

const RANDOM_QUOTE_API = 'https://api.quotable.io/random';

export default function QuoteFetcher() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_API);
        const data = await response.json();
        console.log(data);
        setQuote(data.content);
        setAuthor(data.author);
    }
    useEffect(() => {
        fetchQuote();
    }, []);
    
    return (
        <div>
            <h1>Random Quote</h1>
            { quote && <p>{quote} - {author}</p> }
            <button onClick={fetchQuote}>Fetch Quote</button>
        </div>
    );
}