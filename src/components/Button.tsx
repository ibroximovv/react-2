import { FC } from 'react'
import { ButtonType } from '../assets/types/ButtonType'

const Button:FC<ButtonType> = ({type, title, extraClass}) => {
  return (
    <button className={`${extraClass} hidden sm:block border-[1px] border-[var(--color-gr)] cursor-pointer py-[10px] px-[24px] rounded-[4px] bg-[var(--color-gr)] text-white font-semibold text-[16px]`} type={type}>{title}</button>
  )
}

export default Button