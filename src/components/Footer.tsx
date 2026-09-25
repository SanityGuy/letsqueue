import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-light-border bg-light-surface dark:border-dark-border dark:bg-dark-bg">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
                    {/* Brand */}
                    <div className="max-w-md">
                        <a
                            href="#"
                            className="text-2xl font-extrabold tracking-tight text-brand-primary"
                        >
                            LetsQueue!
                        </a>

                        <p className="mt-3 font-semibold text-light-text dark:text-dark-text">
                            {t('footer.tagline')}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-light-muted dark:text-dark-muted">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text">
                            {t('footer.product')}
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="#how-it-works"
                                    className="text-sm text-light-muted transition hover:text-brand-primary dark:text-dark-muted"
                                >
                                    {t('footer.howItWorks')}
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#restaurants"
                                    className="text-sm text-light-muted transition hover:text-brand-primary dark:text-dark-muted"
                                >
                                    {t('footer.forRestaurants')}
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#find-food"
                                    className="text-sm text-light-muted transition hover:text-brand-primary dark:text-dark-muted"
                                >
                                    {t('footer.findFood')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text">
                            {t('footer.legal')}
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="/privacy"
                                    className="text-sm text-light-muted transition hover:text-brand-primary dark:text-dark-muted"
                                >
                                    {t('footer.privacy')}
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/terms"
                                    className="text-sm text-light-muted transition hover:text-brand-primary dark:text-dark-muted"
                                >
                                    {t('footer.terms')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-light-border pt-6 text-sm text-light-muted sm:flex-row sm:items-center sm:justify-between dark:border-dark-border dark:text-dark-muted">
                    <p>
                        {t('footer.copyright', { year })}
                    </p>

                    <p>
                        {t('footer.builtBy')}
                    </p>
                </div>
            </div>
        </footer>
    )
}