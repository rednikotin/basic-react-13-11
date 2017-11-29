import { RANGE_FILTER } from '../constants'

export default (range = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case RANGE_FILTER:
            return payload.range
    }

    return range
}