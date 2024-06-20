import { useEffect, useState } from 'react';

const RANDOM_QUOTE_API = 'https://api.quotable.io/random';

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_API);
        const data = await response.json();
        console.log(data);
        setQuote(data.content);
        setAuthor(data.author);
        setIsLoading(false)
    }
    useEffect(() => {
        fetchQuote();
    }, []);
    
    return (
        <div>
            {/* { isLoading && <p className='Loader'>Loading...</p> } */}
            <p className='Loader' style={{opacity: isLoading ? 1 : 0}}>Loading...</p>
            <h1>Random Quote</h1>
            { quote && <p>{quote} - {author}</p> }
        </div>
    );
}