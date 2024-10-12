import FlashingBg from "./FlashingBg"
import FlyingPrawn from "./FlyingPrawn"

function MainSection() {
  return (
    <section id="main">
        <FlashingBg flashSpeed={500} />
        <FlyingPrawn prawnCount={5} />
        <img className="prawn" src="prawn.gif" />
    </section>
  )
}

export default MainSection