import CTA from '../components/CTA'
import FeaturedListings from '../components/FeaturedListings'
import ForRestaurants from '../components/ForRestaurants'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Impact from '../components/Impact'

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedListings />
            <HowItWorks />
            <ForRestaurants />
            <Impact />
            <CTA />
        </>
    )
}