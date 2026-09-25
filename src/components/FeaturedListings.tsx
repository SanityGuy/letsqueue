import { Clock, MapPin, Tag } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const listings = [
    {
        id: 1,
        name: 'Fresh Chicken Rice',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjNshqi1QaYwggprJ4vj90P8z9u-dT2Kw-6b9KQxrTcqqRQ8rbMN8Z9VY&s=10',
        restaurant: 'Example Restaurant',
        location: '0.8 km',
        quantity: '5',
        price: 'Rp15.000',
        originalPrice: 'Rp30.000',
    },
    {
        id: 2,
        name: 'Assorted Pastries',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0EBd6bo9xNwLBZ7neLRd2c5PWxp3TAKDUwYVexvK3YorGv1f9TotTgk&s=10',
        restaurant: 'Morning Bakery',
        location: '1.2 km',
        quantity: '8',
        price: 'Rp10.000',
        originalPrice: 'Rp25.000',
    },
    {
        id: 3,
        name: 'Vegetable Bento',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4V_eGC2_C7bCGcYUivUo2CmxTHm6rlWyzkWZBeB01euZjXS23kChgyhUV&s=10',
        restaurant: 'Green Kitchen',
        location: '1.6 km',
        quantity: '3',
        price: '',
        originalPrice: '',
    },
]

export default function FeaturedListings() {
    const { t } = useTranslation()

    return (
        <section
            id="find-food"
            className="border-y border-light-border bg-light-surface py-16 sm:py-20 lg:py-28"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="font-semibold text-brand-primary">
                            {t('listings.eyebrow')}
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-light-text sm:text-4xl">
                            {t('listings.title')}
                        </h2>

                        <p className="mt-3 max-w-2xl text-light-muted">
                            {t('listings.description')}
                        </p>
                    </div>

                    <button className="self-start rounded-xl border border-light-border px-4 py-2.5 font-semibold text-light-text transition hover:border-brand-primary hover:text-brand-primary sm:self-auto">
                        {t('listings.viewAll')}
                    </button>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {listings.map((listing) => (
                        <article
                            key={listing.id}
                            className="overflow-hidden rounded-2xl border border-light-border bg-light-bg transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <img
                            src={listing.image}
                            alt={listing.name} 
                            className="flex aspect-[16/10] items-center justify-center bg-brand-primary/10 text-5xl" />

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-light-text">
                                            {listing.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-light-muted">
                                            {listing.restaurant}
                                        </p>
                                    </div>

                                    <span className="shrink-0 rounded-lg bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
                                        {listing.price}
                                    </span>
                                </div>

                                <div className="mt-5 space-y-2 text-sm text-light-muted">
                                    <p className="flex items-center">
                                        <div className="flex items-center gap-2 mr-1">
                                            <MapPin size={16} />
                                            <span className="font-semibold">
                                                {listing.location}
                                            </span>
                                        </div>
                                        {t('listings.distance')}
                                    </p>

                                    <p className="flex items-center">
                                        <div className="flex items-center gap-2 mr-1">
                                            <Clock size={16} />
                                            <span className="font-semibold">
                                                {listing.quantity}
                                            </span>
                                        </div>
                                        {t('listings.quantity')}
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <Tag size={16} />
                                        {listing.originalPrice && (
                                            <span className="line-through">
                                                {listing.originalPrice}
                                            </span>
                                        )}
                                        <span className="font-semibold text-brand-primary">
                                            {listing.price || t('listings.free')}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}