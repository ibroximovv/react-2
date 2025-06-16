import { BlueIcon, OrangeIcon, RedIcon } from '../../assets/icons'
import img2 from '../../assets/images/img2.svg'
import CustomerSupport from '../../components/CutomerSupport'
import { CustomerWrapper } from './styles'

const Customer = () => {
    const data = [
        {
            icon: <OrangeIcon />,
            desc: 'Never worry about overpaying for your energy again. '
        },
        {
            icon: <RedIcon />,
            desc: 'We will only switch you to energy companies that we trust and will treat you right'
        },
        {
            icon: <BlueIcon />,
            desc: 'We track the markets daily and know where the savings are.'
        }
    ]
    return (
        <CustomerWrapper className='containers'>
            <div>
                <img src={img2} alt="img2" />
            </div>
            <div className='customer-content'>
                <div>
                    <h6>Easier decision making for</h6>
                    <h4>Customer Support</h4>
                </div>
                <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                <ul>
                    {data.map((item, index) => <CustomerSupport icon={item.icon} desc={item.desc} key={index} />)}
                </ul>
            </div>
        </CustomerWrapper>
    )
}

export default Customer