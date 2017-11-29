import {INCREMENT} from '../constants'

export default (counter = 0, action) => {
    return action.type === INCREMENT ? counter + 1 : counter
}