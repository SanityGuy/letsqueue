import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CTA() {
    const { t } = useTranslation()

    return (
        <section className="pb-16 sm:pb-20 lg:pb-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-light-border bg-light-surface px-6 py-12 text-center sm:px-10 lg:py-16">
                    <h2 className="text-3xl font-bold tracking-tight text-light-text sm:text-4xl">
                        {t('cta.title')}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-light-muted">
                        {t('cta.description')}
                    </p>

                    <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 font-semibold text-white transition hover:bg-brand-primary/90">
                        {t('cta.button')}
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    )
}