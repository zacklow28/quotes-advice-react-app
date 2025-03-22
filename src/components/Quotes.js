import React from 'react';
import { useState, useEffect } from 'react';
import "../App.css"

const API_URL = process.env.REACT_APP_QUOTE_URL;

const Quotes = () => {
    const [quotes, setQuotes] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuotes = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setQuotes(data.text);
        setAuthor(data.author);
    }

    useEffect(() => {
        fetchQuotes();
    }, []);


    return (
        <div className="quotes">
            <span className="text">{quotes}<br/>- {author}</span>
            <button className="button" onClick={fetchQuotes}>
                <span>GET QUOTES</span>
            </button>
        </div>
    );
};

export default Quotes;