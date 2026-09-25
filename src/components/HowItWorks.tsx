import { Check, Search, Store } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
    const { t } = useTranslation()

    const steps = [
        {
            icon: Search,
            title: t('howItWorks.steps.discover.title'),
            description: t('howItWorks.steps.discover.description'),
        },
        {
            icon: Check,
            title: t('howItWorks.steps.reserve.title'),
            description: t('howItWorks.steps.reserve.description'),
        },
        {
            icon: Store,
            title: t('howItWorks.steps.pickup.title'),
            description: t('howItWorks.steps.pickup.description'),
        },
    ]

    return (
        <section
            id="how-it-works"
            className="py-16 sm:py-20 lg:py-28"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="font-semibold text-brand-primary">
                        {t('howItWorks.eyebrow')}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-light-text sm:text-4xl">
                        {t('howItWorks.title')}
                    </h2>

                    <p className="mt-4 text-light-muted">
                        {t('howItWorks.description')}
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {steps.map(({ icon: Icon, title, description }, index) => (
                        <div
                            key={title}
                            className="relative text-center rounded-lg bg-light-surface border border-light-border p-6 shadow-sm sm:p-8 hover:border-brand-primary hover:text-brand-primary transition duration-200"
                        >
                            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                                <Icon size={28} />
                            </div>

                            <span className="mt-5 block text-sm font-bold text-brand-accent">
                                0{index + 1}
                            </span>

                            <h3 className="mt-2 text-xl font-bold text-light-text">
                                {title}
                            </h3>

                            <p className="mt-3 leading-7 text-light-muted">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}