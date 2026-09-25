import { useTranslation } from 'react-i18next'
import { Search, MapPin } from 'lucide-react'

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className="flex min-h-[90vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
            <p className="mb-4 font-semibold text-brand-primary">
                {t('hero.eyebrow')}
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-light-text sm:text-6xl lg:text-7xl">
                {t('hero.title')}
                <br />
                <span className="text-brand-primary">
                {t('hero.titleAccent')}
                </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-light-muted sm:text-xl">
                {t('hero.description')}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-primary/90">
                <Search size={24} className="mr-2 shrink-0 inline" />
                {t('hero.findFood')}
                </button>

                <button className="rounded-xl border border-light-border bg-light-surface px-6 py-3 font-semibold text-light-text transition hover:bg-light-bg hover:border-brand-primary">
                <MapPin size={24} className="mr-2 shrink-0 inline" /> 
                {t('hero.listFood')}
                </button>
            </div>
            </div>
        </div>
        </section>
    )
}