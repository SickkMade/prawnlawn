
import { useState, useEffect } from 'react';
import '../css/flashingbg.css'

function FlashingBg({ flashSpeed }) {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [borderColor, setBorderColor] = useState(null);
    const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

    useEffect(() => {
        setInterval(() => {
            setBackgroundColor(getRandomColor());
            setBorderColor(getRandomColor());
        }, flashSpeed)
    }, [])
  return (
    <section className="flashingbg" style={{'--background-color': backgroundColor, '--border-color': borderColor}}></section>
  )
}

export default FlashingBg