import { ModeIcon } from '../assets/icons'
import LogoItem from '../assets/images/logo.svg'
import Button from '../components/Button'
import NavItem from '../components/NavItem'

const Header = () => {
    const navList = ['Product', 'Customers', 'Pricing', 'Resources'];
    const handleModeIconClick = () => document.body.classList.toggle('mode')
    return (
        <header className="py-[18px]">
            <div className="containers flex items-center justify-between">
                <a className='flex items-center gap-[16px]' href="#">
                    <img src={LogoItem} alt="Site logo" width={40} height={36} />
                    <strong className='text-[var(--color-text)] text-[30px] leading-[28px]'>Product</strong>
                </a>
                <div className='flex items-center gap-[24px]'>
                    <ul className='flex justify-center gap-[20px]'>{navList.map((item, index) => (<NavItem key={index} title={item} />))}</ul>
                    <Button extraClass='!bg-transparent !border-[#BCD0E5] !text-[var(--color-text)]' type='button' title='Sign In' />
                    <Button type='button' title='Sign Up' />
                    <button onClick={handleModeIconClick} className='bg-[#F3F3F3] p-[4px] rounded-full text-[var(--color-gr)] cursor-pointer'> <ModeIcon /> </button>
                </div>
            </div>
        </header>
    )
}

export default Header