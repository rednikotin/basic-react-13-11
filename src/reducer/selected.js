import { IDS_FILTER } from '../constants'

export default (ids = [], action) => {
    const { type, payload } = action

    switch (type) {
        case IDS_FILTER:
            return payload.ids
    }

    return ids
}