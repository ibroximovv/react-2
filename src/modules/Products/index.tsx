import CursorIcon from "../../assets/icons/icon-components/CursorIcon"
import LoveIcon from "../../assets/icons/icon-components/LoveIcon"
import NimadirIcon from "../../assets/icons/icon-components/NimadirIcon"
import TimeIcon from "../../assets/icons/icon-components/TimeIcon"
import { MainCardType } from "../../assets/types/MainCardType"
import Button from "../../components/Button"
import MenuCard from "../../components/MenuCard"
import { ProductsSectionStyle } from "./styles"

const Products = () => {

    const mainCard: MainCardType[] = [
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
        <ProductsSectionStyle >
            <div className="containers">
                <div className="products">
                    <div >
                        <h2>Product  was Built Specifically for You</h2>
                    </div>
                    <ul>
                        {mainCard.map((item, index) => <MenuCard icon={item.icon} title={item.title} desc={item.desc} key={index}/>)}
                    </ul>
                    <Button type="button" title="SIGN UP NOW"/>
                </div>
            </div>
        </ProductsSectionStyle>
    )
}

export default Products