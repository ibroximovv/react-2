// import { MediaIconPlay } from '../assets/icons'
import CursorIcon from '../assets/icons/icon-components/CursorIcon'
import LoveIcon from '../assets/icons/icon-components/LoveIcon'
import NimadirIcon from '../assets/icons/icon-components/NimadirIcon'
import TimeIcon from '../assets/icons/icon-components/TimeIcon'
import amicoImage from '../assets/images/amico.svg'
import Button from '../components/Button'
import { MainCardType } from '../assets/types/MainCardType'

const Main = () => {
    const menuCard: MainCardType[] = [
        {
            icon: <CursorIcon />,
            title: 'First click tests',
            desc: 'While most people enjoy casino gambling,'
        },
        {
            icon: <NimadirIcon />,
            title: 'Design surveys',
            desc: 'Sports betting, lottery and bingo playing for the fun'
        },
        {
            icon: <LoveIcon />,
            title: 'Preference tests',
            desc: 'The Myspace page defines the individual.'
        },
        {
            icon: <TimeIcon />,
            title: 'Five second tests',
            desc: 'Personal choices and the overall personality of the person. '
        }
    ]

    return (
        <main className='containers '>
            <section className='flex flex-col lg:flex-row items-center justify-center gap-[40px] pt-[25px] px-4'>
                <div className='flex flex-col gap-[18px] w-full max-w-[518px]'>
                    <strong className='text-[32px] sm:text-[40px] leading-[48px] sm:leading-[60px] font-bold text-[var(--color-text)]'> Work at the speed of thought </strong>
                    <p className='w-full max-w-[458px] text-[16px] sm:text-[18px] text-[var(--color-text)] leading-[24px] sm:leading-[28px] font-normal pb-[45px]'>
                        Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-[15px] sm:gap-[30px]'>
                        <Button title='Get started' type='button' />
                        <Button extraClass='!bg-transparent !text-[var(--color-gr)] underline !border-none' title='Watch the Video' type='button' />
                    </div>
                </div>
                <div className='w-full max-w-[600px]'>
                    <img src={amicoImage} alt="Hero illustration" className='w-full h-auto'/>
                </div>
            </section>

            <section>
                <strong className='text-[var()]'>Product  was Built Specifically for You</strong>
                {/* cardlarni qilayotgan joyimda toxtadim menuCard ni props qilib alohida comp ochib berib yuboriush kk */}
            </section>
        </main>
    )
}

export default Main