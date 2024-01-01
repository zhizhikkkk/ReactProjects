import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
function App(props) {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();

    }, []);

    const fetchAdvice =()=>{
        axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                const newAdvice =response.data.slip.advice;
                setAdvice(newAdvice);
                console.log(advice);
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    return (
        <div className='app'>
            <div className="card">
                <h1 className='heading'>{advice} </h1>
                <button className='button' onClick={()=>fetchAdvice()}>
                    <span>
                        GIVE ME ADVICE!
                    </span>
                </button>
            </div>
        </div>
    );
}

export default App;