export default {
    namespace: 'app',  //被connect时的key
    state: {
        list: [{
            id: "1", 
            name: '面板',
            router: '/dashboard'
        }, {
            id: "2",
            name: '视频管理',
            router: '/videoManagement',
        }, {
            id: "3",
            name: '用户管理',
            router: '/userManagement',
        }],
        current: "1",
    },
    effects:{

    },
    reducers: {
        menuChange (state, {payload}) {
            
            return {...state, current: payload}
        }
    }
}