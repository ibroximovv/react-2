import { FC } from 'react'
import { LittleContentWrapper } from './styles'

const LittleContent:FC<{title: string, desc:string}> = ({title, desc}) => {
  return (
    <LittleContentWrapper>
        <h5>{title}</h5>
        <p>{desc}</p>
    </LittleContentWrapper>
  )
}

export default LittleContent