import { FC } from "react"
import { CustomerSupportWrapper } from "./styles"

const CustomerSupport:FC<{icon:any, desc: string}> = ({icon, desc}) => {
  return (
    <CustomerSupportWrapper><div>{icon}</div><p>{desc}</p></CustomerSupportWrapper>
  )
}

export default CustomerSupport