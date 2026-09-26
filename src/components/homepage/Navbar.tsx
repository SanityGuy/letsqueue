import { useState } from 'react'
import { Menu, X, ForkKnifeCrossed } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { US, ID } from 'country-flag-icons/react/3x2'
import { Link } from 'react-router-dom'

import icon from '/letsqueue_icon.png'
import logo from '/letsqueue_logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id')
    }

    return (
        <header className="sticky top-0 z-50 border-b border-light-border bg-light-surface/95 backdrop-blur dark:border-dark-border dark:bg-dark-bg/95">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
            <a
            href="#"
            className="font-extrabold tracking-tight text-brand-primary flex flex-row items-center"
            >
            <img src={icon} alt="LetsQueue!" className="h-16 p-2 w-auto" />
            <img src={logo} alt="LetsQueue!" className="w-auto h-10 p-2" />
            </a>

            <div className="hidden items-center gap-8 md:flex">
            <a
                href="#how-it-works"
                className="text-sm font-medium text-light-text transition hover:text-brand-primary dark:text-dark-text"
            >
                {t('nav.howItWorks')}
            </a>

            <a
                href="#restaurants"
                className="text-sm font-medium text-light-text transition hover:text-brand-primary dark:text-dark-text"
            >
                {t('nav.forRestaurants')}
            </a>

            <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex gap-2 rounded-lg border border-light-border px-3 py-2 text-sm font-semibold text-light-text transition hover:border-brand-primary hover:text-brand-primary dark:border-dark-border dark:text-dark-text"
            >
                {i18n.language === 'id' ? <ID className="h-4 w-6" /> : <US className="h-4 w-6" />}
                {i18n.language === 'id' ? 'ID' : 'EN'}
            </button>

            <Link
                to="/listings"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl text-sm bg-brand-primary px-4 py-2 text-center font-semibold text-white"
                >
                {t('nav.findFood')}
                <ForkKnifeCrossed size={20} className="ml-1 shrink-0 inline-flex text-white" />
            </Link>
            </div>

            <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg p-2 text-light-text transition hover:bg-light-bg md:hidden dark:text-dark-text dark:hover:bg-dark-surface"
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>

        {isOpen && (
            <div className="border-t border-light-border bg-light-surface px-4 py-4 md:hidden dark:border-dark-border dark:bg-dark-bg">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
                <a
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-light-text hover:bg-light-bg dark:text-dark-text dark:hover:bg-dark-surface"
                >
                {t('nav.howItWorks')}
                </a>

                <a
                href="#restaurants"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-light-text hover:bg-light-bg dark:text-dark-text dark:hover:bg-dark-surface"
                >
                {t('nav.forRestaurants')}
                </a>

                <button
                type="button"
                onClick={toggleLanguage}
                className="rounded-lg px-3 py-3 text-left font-medium text-light-text hover:bg-light-bg dark:text-dark-text dark:hover:bg-dark-surface"
                >
                {i18n.language === 'en' ? 'Bahasa Indonesia' : 'English'}
                </button>

                <Link
                to="/listings"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl text-sm bg-brand-primary px-4 py-2 text-center font-semibold text-white"
                >
                {t('nav.findFood')}
                <ForkKnifeCrossed size={20} className="ml-1 shrink-0 inline-flex text-white" />
                </Link>

            </div>
            </div>
        )}
        </header>
    )
}