import { LANG } from '../constants'

export default (lang = 'en', action) => {
    const { type } = action

    switch (type) {
        case LANG:
            return lang === 'en' ? 'ru' : 'en'
    }

    return lang
}