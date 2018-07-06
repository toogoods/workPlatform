import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import styles from  './menu.css';
const {SubMenu} = Menu;

const Menus = ({list, current, dispatch}) => {

    const getMenuList = (list) => {
        return list.map((item) => {
            if (item.children) {
                return (<SubMenu
                    key={item.id}
                    title={<span>
                        {item.name}
                    </span>}>
                    {getMenuList(item.children)}
                </SubMenu>)
            } else {
                return (
                    <Menu.Item 
                        key={item.id}>
                        {<Link to={item.router || "#"} >
                            {item.name}
                        </Link>}
                    </Menu.Item>
                )
            }
        })
    }

    const menuList = getMenuList(list)

    const handleClick = (e) => {
        dispatch({
            type: 'app/menuChange',
            payload: e.key,
        })
    }

    return (<Menu 
        className={styles.menuStyle}
        mode = "vertical"
        theme = "dark"
        selectedKeys = {[current]}
        onClick = {handleClick}
        >
        {menuList}
    </Menu>)
}

export default Menus;