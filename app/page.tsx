import Nav from "../components/Nav"
import Hero from "../components/sections/Hero"
import BenefitStrip from "../components/sections/BenefitStrip"
import Story from "../components/sections/Story"
import Menu from "../components/sections/Menu"
import Offers from "../components/sections/Offers"
import Services from "../components/sections/Services"
import Reviews from "../components/sections/Reviews"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BenefitStrip />
        <Story />
        <Menu />
        <Offers />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
