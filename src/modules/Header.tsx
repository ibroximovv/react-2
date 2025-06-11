import { useState } from 'react'
import { MenuIcon, ModeIcon } from '../assets/icons'
import LogoItem from '../assets/images/logo.svg'
import Button from '../components/Button'
import Modal from '../components/Modal'
import NavItem from '../components/NavItem'

const Header = () => {
    const [mode, setMode] = useState<boolean>(false)
    const navList = ['Product', 'Customers', 'Pricing', 'Resources'];
    const handleModeIconClick = () => document.body.classList.toggle('mode')
    return (
        <header className="py-[17px] sm:py-[18px]">
            <div className="containers flex items-center justify-between">
                <a className='flex items-center gap-[16px]' href="#">
                    <img src={LogoItem} alt="Site logo" width={40} height={36} />
                    <strong className='text-[var(--color-text)] text-[30px] leading-[28px]'>Product</strong>
                </a>
                <div className='flex items-center gap-[24px]'>
                    <ul className='hidden lg:flex justify-center gap-[20px]'>{navList.map((item, index) => (<NavItem key={index} title={item} />))}</ul>
                    <Button extraClass='!bg-transparent !border-[#BCD0E5] !text-[var(--color-text)]' type='button' title='Sign In' />
                    <Button type='button' title='Sign Up' />
                    <button onClick={handleModeIconClick} className='hidden sm:block bg-[#F3F3F3] p-[4px] rounded-full text-[var(--color-gr)] cursor-pointer'> <ModeIcon /> </button>
                    <button onClick={() => setMode(true)} className='lg:hidden text-[var(--color-text)]'> <MenuIcon /> </button>
                </div>
            </div>
            <Modal mode={mode} setMode={setMode}/>
        </header>
    )
}

export default Header