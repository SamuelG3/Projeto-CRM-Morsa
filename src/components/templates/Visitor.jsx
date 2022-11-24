import React from "react"
import HomeHeader from '../organisms/HomeHeader'
import HomeFooter from "../organisms/HomeFooter"


export default function Visitor(props) {
  return (
    <div>
        <HomeHeader />
        {props.children}
        <HomeFooter />
    </div>
  )
}
