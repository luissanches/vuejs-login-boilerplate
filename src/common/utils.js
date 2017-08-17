const b64 = require('js-base64').Base64
import moment from 'moment'

export default {
    fn: {
        toDate(value, format = 'DD/MM/YYYY') {
            return moment(value, format)
        },
        toBase64(value) {
            return b64.encode(value)
        },
        fromBase64(value) {
            return b64.decode(value)
        }
    }
}
