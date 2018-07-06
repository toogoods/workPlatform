import React from 'react'
import city from  '../../utils/city'
import SubMenu from 'antd/lib/menu/SubMenu';
import { Menu } from 'antd';
const City = () => {
    const getCityMenu = (city) => {
        return city.map((item) => {
            if (item.children) {
                return (<SubMenu
                    key={item.id}
                    title={item.name}
                >
                    {getCityMenu(item.children)}
                </SubMenu>)
            } else {
                return (<Menu.Item
                    key={item.id}
                >
                    {item.name}
                </Menu.Item>)
            }
        })
    }

    const menu = getCityMenu(city)

    return (<Menu>
        {menu}
    </Menu>)
}

export default City;