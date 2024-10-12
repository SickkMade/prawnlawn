import FlashingBg from "./FlashingBg"
import FlyingPrawn from "./FlyingPrawn"

function MainSection() {
  return (
    <section id="main">
        <FlashingBg flashSpeed={500} />
        <FlyingPrawn prawnCount={15} />
        <img className="prawn" src="prawn.webp" />
    </section>
  )
}

export default MainSection