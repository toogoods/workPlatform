export default {
    namespace: 'user',
    state: {
        dataSource: [
            {
                id: 1,
                name: '张三',
                addr: '浙江省宁波市',
                age: 18,
                hobby: '教育',          
            },
            {
                id: 2,
                name: '李四',
                addr: '浙江省杭州市',
                age: 18,
                hobby: '动漫',          
            },
        ],
        currentItem: {

        },
        modalVisible: false,
        modalType: "edit",
    },
    effects: {

    },
    reducers: {
        showModal(state, {payload}) {
            return {...state, modalVisible: payload.modalVisible, currentItem: payload.item}
        }
    },
}