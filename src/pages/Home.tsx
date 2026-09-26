import Navbar from '../components/homepage/Navbar'
import CTA from '../components/homepage/CTA'
import FeaturedListings from '../components/homepage/FeaturedListings'
import ForRestaurants from '../components/homepage/ForRestaurants'
import Hero from '../components/homepage/Hero'
import HowItWorks from '../components/homepage/HowItWorks'
import Impact from '../components/homepage/Impact'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedListings />
            <HowItWorks />
            <ForRestaurants />
            <Impact />
            <CTA />
        </>
    )
}