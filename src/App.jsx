import { useRef, useState } from "react"
import MainSection from "./assets/Components/MainSection";
import clsx from "clsx";

function App() {
  const audioRef = useRef(null);
  const [isStart, setIsStart] = useState(false);
  const playAudio = () => {
    audioRef.current.play();
    setIsStart(true);
  }


  return (
    <>
    <button onClick={playAudio} className={clsx({"invisible": isStart})}>Do You Trust Me?</button>
    <audio autoPlay loop ref={audioRef}>
        <source src="konga.mp3" type="audio/mp3"></source>
    </audio>
    {isStart && <MainSection />}
    
    </>
  )
}

export default App