import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import id from './locales/id'

i18n
    .use(initReactI18next)
    .init({
        resources: {
        en,
        id,
        },
        lng: 'id',
        fallbackLng: 'id',
        interpolation: {
        escapeValue: false,
        },
    })

export default i18n