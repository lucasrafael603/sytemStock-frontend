import React from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css'
import '../LayoutFooter/styles.scss'
const { Footer } = Layout;



export const LayoutFooter: React.FC = ({children}) => {

  return (

    <>
    <div className="divFooterFormat">
    <Footer > {children} </Footer>
    </div>
    </>

  )
}
