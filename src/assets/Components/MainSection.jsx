import FlashingBg from "./FlashingBg"


function MainSection() {
  return (
    <section id="main">
        <FlashingBg flashSpeed={500} />
        <img className="prawn" src="prawn.webp" />
    </section>
  )
}

export default MainSection