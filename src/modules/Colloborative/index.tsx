import LittleContent from "../../components/LittleContent"
import img3 from '../../assets/images/img3.svg'
import { ColloborativeWrapper } from "./styles"

const Colloborative = () => {
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
        <ColloborativeWrapper className="containers">
            <div className='colloborative-content'>
                <div>
                    <h6>Optimisation for</h6>
                    <h4>Collaborative</h4>
                </div>
                <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                {data.map((item, index) => <LittleContent title={item.title} desc={item.desc} key={index} />)}
            </div>
            <div>
                <img src={img3} alt="img3" />
            </div>
        </ColloborativeWrapper>
    )
}

export default Colloborative