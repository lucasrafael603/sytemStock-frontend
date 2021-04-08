import React from 'react'
import {Layout, Image, Input, Button} from 'antd'
import 'antd/dist/antd.css'
import '../LayoutNav/styles.scss'
import ImagemStock from '../../assets/stockImage1.svg'
const { Header } = Layout;

export const LayoutNav: React.FC = () => {

  return (
    <>
    <Header className="headerFormat" >
      <div className="divNav">
      <Image alt="Logo da empresa" src={ImagemStock} height= '50px' width= '50px' preview={false} > </Image>
      <h1 style={{color: 'white'}}> Stock System </h1>
      </div>
    </Header>
    </>
  )
}
