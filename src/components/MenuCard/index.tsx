import React, { FC } from 'react'
import { MainCardType } from '../../assets/types/MainCardType'
import { MenuCardWrapper } from './styles'

const MenuCard:FC<MainCardType> = ({icon, title, desc}) => {
  return (
    <MenuCardWrapper>
        <div>{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </MenuCardWrapper>
  )
}

export default MenuCard