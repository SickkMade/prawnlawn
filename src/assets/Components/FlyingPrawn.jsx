import { useState, useEffect} from "react"

function FlyingPrawn({ prawnCount }) {
    const [prawns, setPrawns] = useState(null);
    useEffect(() => {
        let arr = []
        for(let i = 0; i < prawnCount; i++){
            arr.push({
                opacity: Math.random() + 0.25,
                speed: Math.random()*5 + 2 + "s",
                scale: Math.random()*60 + 20 + "%",
                height: Math.random() * 100 + "%",
                direction: Math.random() > 0.5 ? 1 : -1,
                id: i,
                })
        }
        setPrawns(arr);
    }, [])
   
  return (
    <>
    {prawns && prawns.map(obj => (
        <img key={obj.id} className={`flying-prawn ${obj.direction > 0 ? "flyby-left" : 'flyby-right'}`} src="prawn.webp"
        style={{
            '--opacity': obj.opacity,
            '--speed': obj.speed,
            '--height': obj.height,
            '--direction': obj.direction,
            transform: `translateY(-50%) scale(${obj.scale}) scaleX(${obj.direction})`,
        }}></img>
    ))
    }
    </>
  )
}

export default FlyingPrawn