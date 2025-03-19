import React from 'react';
import { useEffect, useState } from 'react';
import "../App.css"

const API_URL = "https://api.adviceslip.com/advice";

const Advice = () => {
    const [advice, setAdvice] = useState("");

    const fetchAdvice = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAdvice(data.slip.advice);
    }

    useEffect(() => {
        fetchAdvice();
    }, []);


    return (
        <div className="advice">
            <span className="text">{advice}</span>
            <button className="button" onClick={fetchAdvice}>
                <span>GET ADVICE</span>
            </button>
        </div>
    );
};

export default Advice;