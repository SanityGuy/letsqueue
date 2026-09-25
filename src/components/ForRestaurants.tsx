import { ArrowRight, PackageCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ForRestaurants() {
    const { t } = useTranslation()

    return (
        <section
            id="restaurants"
            className="bg-light-bg py-16 sm:py-20 lg:py-28"
        >
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:gap-16 lg:px-8">
                <div>
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                        <PackageCheck size={28} />
                    </div>

                    <p className="mt-6 font-semibold text-brand-secondary">
                        {t('restaurants.eyebrow')}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-light-text sm:text-4xl">
                        {t('restaurants.title')}
                    </h2>

                    <p className="mt-5 max-w-xl leading-7 text-light-muted">
                        {t('restaurants.description')}
                    </p>

                    <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-secondary px-6 py-3.5 font-semibold text-white transition hover:bg-brand-secondary/90">
                        {t('restaurants.button')}
                        <ArrowRight size={18} />
                    </button>
                </div>

                <div className="rounded-3xl bg-light-surface p-6 shadow-sm sm:p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-brand-primary/10 p-5">
                            <p className="text-3xl font-bold text-brand-primary">
                                24
                            </p>
                            <p className="mt-1 text-sm text-light-muted">
                                {t('restaurants.stats.foodSaved')}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-brand-accent/10 p-5">
                            <p className="text-3xl font-bold text-brand-accent">
                                18
                            </p>
                            <p className="mt-1 text-sm text-light-muted">
                                {t('restaurants.stats.orders')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}