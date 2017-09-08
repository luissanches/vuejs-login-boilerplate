import {date} from '../../common/utils'
import {MAIN_FILTER} from '../mutations-types'

export default mainFilter = {
    namespaced: true,
    state: {
        searchedDate: {
            start: date.getCurrentFormatedDate(),
            end: date.getCurrentFormatedDate()
        }
    },
    mutations: {
        [MAIN_FILTER.CHANGE_RANGE](state, payload){
            state.searchedDate = payload
        }
    },
    actions: {},
    getters: {}
}
