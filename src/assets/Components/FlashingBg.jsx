
import { useState, useEffect } from 'react';
import '../css/flashingbg.css'

function FlashingBg({ flashSpeed }) {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [borderColor, setBorderColor] = useState(null);
    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    useEffect(() => {
        setInterval(() => {
            setBackgroundColor(getRandomColor());
            setBorderColor(getRandomColor());
        }, flashSpeed)
    }, [])
  return (
    <section className="flashingbg" style={{'--background-color': backgroundColor, '--border-color': borderColor}}>
        <a target="_blank" href="https://sickkmade.github.io" className="flashingbg--text">
            <img width="50px"  src="/duckfound!.png"></img>
        </a>
    </section>
  )
}

export default FlashingBg