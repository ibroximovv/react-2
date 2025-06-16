
import img1 from '../../assets/images/img1.svg'
import LittleContent from '../../components/LittleContent'
import { ManagementContentWrapper } from './styles'

const Management = () => {
    const data = [
        {
            title: 'Accessory makers',
            desc: 'While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun'
        },
        {
            title: 'Alterationists',
            desc: 'If you are looking for a new way to promote your business that won’t cost you more money, '
        }
    ]

    return (
        <ManagementContentWrapper className='containers'>
            <div className='management-content'>
                <div>
                    <h6>Effortless Validation for</h6>
                    <h4>Management</h4>
                </div>
                <div className='little-content'>
                    {data.map((item, index) => <LittleContent key={index} title={item.title} desc={item.desc} />)}
                </div>
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
        </ManagementContentWrapper>
    )
}

export default Management