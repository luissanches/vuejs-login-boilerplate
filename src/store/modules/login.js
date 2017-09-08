import { LOGIN } from '../mutations-types'

const login = {
    namespaced: true,
    state: {
        user: {
            login: '',
            pws: '',
            name: '',
            rule: ''
        }
    },
    mutations: {
        [LOGIN.CHECK_IN](state, payload) {
            state.user = payload
        },
        [LOGIN.CHECK_OUT](state) {
            state.user = {
                login: '',
                pws: '',
                name: '',
                rule: ''
            }
        }
    },
    actions: {
    },
    getters: {
        getCurrentLogin: state => {
            return state.user
        }
    }
}

export default login
