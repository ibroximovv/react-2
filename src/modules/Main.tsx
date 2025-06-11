// import { MediaIconPlay } from '../assets/icons'
import { FC } from 'react'
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
            <section className='flex items-center gap-[40px] pt-[25px]'>
                <div className='flex flex-col gap-[18px] w-[518px]'>
                    <strong className='text-[40px] leading-[60px] font-bold text-[var(--color-text)]'>Work at the speed of thought</strong>
                    <p className='w-[458px] text-[18px] text-[var(--color-text)] leading-[28px] font-normal pb-[45px]'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>

                    <div className='flex gap-[30px]'>
                        <Button title='Get started' type='button' />
                        <Button extraClass='!bg-transparent !text-[var(--color-gr)] text-decoration-line: underline !border-none' title='Watch the Video' type='button' />
                    </div>
                </div>
                <img src={amicoImage} alt="" width={600} height={555.7240600585938} />
            </section>

            <section>
                <strong className='text-[var()]'>Product  was Built Specifically for You</strong>

            </section>
        </main>
    )
}

export default Main