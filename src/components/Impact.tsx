import { Leaf, Utensils, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Impact() {
    const { t } = useTranslation()

    const stats = [
        {
            icon: Utensils,
            value: '—',
            label: t('impact.food'),
        },
        {
            icon: Users,
            value: '—',
            label: t('impact.people'),
        },
        {
            icon: Leaf,
            value: '—',
            label: t('impact.waste'),
        },
    ]

    return (
        <section className="py-16 sm:py-20 lg:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-brand-primary px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
                    <div className="max-w-2xl">
                        <p className="font-semibold text-white/80">
                            {t('impact.eyebrow')}
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            {t('impact.title')}
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-3">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="rounded-2xl bg-white/10 p-5"
                            >
                                <Icon size={24} />

                                <p className="mt-5 text-3xl font-bold">
                                    {value}
                                </p>

                                <p className="mt-1 text-sm text-white/80">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}