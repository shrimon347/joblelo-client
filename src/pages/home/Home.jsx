import Explore from "../../components/shared/Explore"
import Footer from "../../components/shared/Footer"
import Navbar from "../../components/shared/Navbar"
import TabJob from "../job/TabJob"
import Catagories from "./Catagories"
import GetJob from "./GetJob"
import Hero from "./Hero"
import Jobnumber from "./Jobnumber"
import Million from "./Million"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Catagories />
        <Million />
        <TabJob />
        <GetJob />
        <Jobnumber />
        <div className="max-w-7xl mx-auto">
        <Explore />
        </div>
        <Footer />
    </div>
  )
}

export default Home