import {createStore} from 'vuex'

const state = {
    cartList: [],
    checkedList: [],
    selectAll: false,
    isIndeterminate: false
}
const store = createStore({
    state,
})
export default store
