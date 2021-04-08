import React from 'react'
import {Layout, Image, Input, Button} from 'antd'
import 'antd/dist/antd.css'
import '../LayoutHome/styles.scss'
import ImagemStock from '../../assets/stockImage1.svg'
import {FiUser} from 'react-icons/fi'
const { Header, Content, Footer } = Layout;

export const LayoutHome: React.FC = () => {

  return (

    <>
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="divNav">
      <Image alt="Logo da empresa" src={ImagemStock} height= '50px' width= '50px' preview={false} > </Image>
      <h1 style={{color: 'white'}}> Stock System </h1>
      </div>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <div className='divFormat'>
       <FiUser className="imagemFormat"/>
          {/* <span className='textFormat'> USER </span> */}
          <Input placeholder='USER' className='inputFormat' type='text' maxLength={8} size='small' />
          {/* <span className='textFormat'> PASSWORD </span> */}
          <Input placeholder='PASSWORD' className='inputFormat' type='password' maxLength={8} size='small'/> 
        <div className="divButtons">
          <Button> Login </Button>
          <Button> Sign up </Button>
        </div>  
        </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> ©2021 Created by Santloth </Footer>
  </Layout>,


    </>

  )
}

//export default LayoutPage 