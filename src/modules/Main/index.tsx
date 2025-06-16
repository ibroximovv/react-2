import amicoImage from '../../assets/images/amico.svg'
import { MediaIconPlay } from '../../assets/icons'

import './main.scss'

const Main = () => {
    return (
        <section className='hero-section'>
            <div className="containers">
                <div className='hero'>
                    <div className="hero__content-wrapper">
                        <strong className='hero__title'> Work at the speed of thought </strong>
                        <p className='hero__desc'>
                            Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
                        </p>
                        <div className='hero__btn-wrapper btns'>
                            {/* <Button title='Get started' type='button' />
                        <Button extraClass='' title='Watch the Video' type='button' /> */}
                            <button className='btns__btn-started'>Get started</button>
                            <button className='btns__btn-watch'><MediaIconPlay /><span>Watch the Video</span></button>
                        </div>
                    </div>
                    <img src={amicoImage} alt="Hero illustration" className='' />
                </div>
            </div>
        </section>
    )
}

export default Main
