import React from 'react'
import AppHeader from '../organisms/AppHeader'

export default function Default(props) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">        
    <AppHeader />

    {props.children}
    </div>
    </div>
  )
}
