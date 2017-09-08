const b64 = require('js-base64').Base64
import moment from 'moment'

export const date = {
    toDate(value, format = 'DD/MM/YYYY') {
        return moment(value, format)
    },
    getCurrentFormatedDate(format = 'DD/MM/YYYY') {
        return moment().format(format)
    }
}

export const encode = {
    toBase64(value) {
        return b64.encode(value)
    },
    fromBase64(value) {
        return b64.decode(value)
    }
}
