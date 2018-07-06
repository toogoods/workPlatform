import React from 'react'
import {Form, Modal, Input, Dropdown, Icon} from 'antd'
import City from './City'
const FormItem = Form.Item

const modal = ({
    item = {}, 
    dispatch, 
    form:{getFieldDecorator},
    ...modalProps
}) => {

    console.log(modalProps)

    return (<Modal {...modalProps}>
        <Form layout="horizontal">
            <FormItem label="姓名" hasFeedback>
                {getFieldDecorator('name', {
                    initialValue: item.name,
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Input />)}
            </FormItem>
            <FormItem label="年龄" hasFeedback>
                {getFieldDecorator('age', {
                    initialValue: item.age,
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Input />)}
            </FormItem>
            <FormItem label="爱好" hasFeedback>
                {getFieldDecorator('hobby', {
                    initialValue: item.hobby,
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Input />)}
            </FormItem>
            {/* <FormItem label="地址" hasFeedback>
                {getFieldDecorator('addr', {
                    initialValue: item.addr,
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Dropdown overlay={City}>地址 <Icon type="down"/></Dropdown>)}
            </FormItem> */}
        </Form>
    </Modal>)
}

export default Form.create()(modal);