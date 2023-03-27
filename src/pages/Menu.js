import React from "react"
import { MenuList } from "../helper/MenuList"
import MenuItem from "../Components/MenuItem"
import { Link } from "react-router-dom"
import "../styles/Menu.css"



function Menu() {
  return (
    <div className='menu'>
      <div className='menuTitle'>Our Menu</div>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return (
            <Link to= {`menu/${menuItem.id}`}>
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
