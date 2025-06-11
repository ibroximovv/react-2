// import { MediaIconPlay } from '../assets/icons'
import amicoImage from '../assets/images/amico.svg'
import Button from '../components/Button'

const Main = () => {
  return (
    <main className='containers flex items-center gap-[40px] pt-[25px]'>
        <section className='flex flex-col gap-[18px] w-[518px]'>
            <strong className='text-[40px] leading-[60px] font-bold text-[var(--color-text)]'>Work at the speed of thought</strong>
            <p className='w-[458px] text-[18px] text-[var(--color-text)] leading-[28px] font-normal pb-[45px]'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>

            <div className='flex gap-[30px]'>
                <Button title='Get started' type='button'/>
                <Button extraClass='!bg-transparent !text-[var(--color-gr)] text-decoration-line: underline !border-none' title='Watch the Video' type='button'/>
            </div>
        </section>
        <img src={amicoImage} alt="" width={600} height={555.7240600585938}/>
    </main>
  )
}

export default Main