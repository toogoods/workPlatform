import React from 'react'
import {Table, Menu, Dropdown, Icon, Button} from 'antd'
import { connect } from 'dva'
import Modal from './Modal'


const UserManagement = ({dispatch, user}) => {

    const {dataSource, modalType, currentItem, modalVisible} = user


    const menu = [
        {key: '1', name: '修改'}, 
        {key: '2', name: '删除'}
    ].map(item => <Menu.Item key={item.key}>{item.name}</Menu.Item>)

    const handleMenuClick = (record, e) => {
        if (e.key === '1') {
            dispatch({
                type: 'user/showModal',
                payload: {
                    item: record,
                    modalVisible: true,
                },
            })
        }
    }

    console.log(modalVisible)

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '爱好',
            dataIndex: 'hobby',
            key: 'hobby',
        }, {
            title: '地址',
            dataIndex: 'addr',
            key: 'addr',
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text,record) => {
                return <Dropdown overlay={(<Menu onClick={e => handleMenuClick(record, e)}>{menu}</Menu>)}>
                    <Button>
                    <Icon style={{ marginRight: 2 }} type="bars" />
                    <Icon type="down"/>
                    </Button>
                </Dropdown>
            }
        }
    ]

    const modalProps = {
        item: modalType === 'create' ? {} : currentItem,
        wrapClassName:"vertical-center-modal",
        visible: modalVisible,
    }

    return (<div>
        <Table
            bordered={true}
            dataSource={dataSource}
            columns={columns}
            rowKey={record => record.id}
        />
        <Modal {...modalProps}/>
    </div>)
}

export default connect(({user}) => ({user}))(UserManagement);