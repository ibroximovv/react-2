import { FC } from 'react'

const NavItem: FC<{title: string}> = ({title}) => {
  return (
    <li>
        <a href="#" className='hover:text-[var(--color-gr)] duration-300 font-normal text-[16px] leading-[24px] text-[var(--color-text)]'>{title}</a>
    </li>
  )
}

export default NavItem