import { ParallaxProvider } from "react-scroll-parallax"
import Blog from "../components/Blog"
import CTA from "../components/CTA"
import Features from "../components/Features"
import HeroPage from "../components/HeroPage"
import HeroSection from "../components/HeroPageTwo"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"


const Home = () => {
    return (
        <div>
            <HeroPage />
            <ParallaxProvider>            <Services />
</ParallaxProvider>
            <HeroSection />
            <Testimonials />
            <Features />
            <Blog />
            <CTA />

        </div>
    )
}

export default Home
