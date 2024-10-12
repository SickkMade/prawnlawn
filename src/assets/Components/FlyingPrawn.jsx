import { useState, useEffect} from "react"



function FlyingPrawn({ prawnCount }) {
    const [prawns, setPrawns] = useState(null);
    useEffect(() => {
        let arr = []
        for(let i = 0; i < prawnCount; i++){
            arr.push({
                opacity: Math.random()*100,
                speed: Math.random()*25,
                height: Math.random() * 100,
                direction: Math.floor(Math.random()*2 - 1)
                })
        }
        setPrawns(arr);
    }, [])
   
  return (
    prawns.map(obj => {
        <img className="flying-prawn" src="prawn.webp"
        style={{
            '--opacity': obj.opacity,
            '--speed': obj.speed,
            '--height': obj.height,
            '--direction': obj.direction,
        }}></img>
    })
  )
}

export default FlyingPrawn