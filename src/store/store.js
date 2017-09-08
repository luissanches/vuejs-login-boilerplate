import login from './modules/login'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

const store = new Vuex.Store({
    modules: {
        login
    },
    plugins: [
        // createPersistedState({ storage: window.sessionStorage })
    ]
})

export default store
