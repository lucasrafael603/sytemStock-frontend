import React from 'react'
import {Layout, Input, Button} from 'antd'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import '../LayoutContent/stylestest.scss'
import ImagemStock from '../../assets/stockImage1.svg'
import {FiUser} from 'react-icons/fi'
const { Header, Content, Footer } = Layout;

interface IProps{

  title?: String;
  children?: String;
  isForm?: boolean;
}


//export const LayoutNav = (props : IProps) : JSX.Element => {
export const LayoutContent = (props : IProps) : JSX.Element => {

  return (

    <>
      <div className='divFormat'>
       <FiUser className="imagemFormat"/>
          {/* <span className='textFormat'> USER </span> */}
          <Input placeholder='USER' className='inputFormat' type='text' maxLength={8} size='small' />
          {/* <span className='textFormat'> PASSWORD </span> */}
          <Input placeholder='PASSWORD' className='inputFormat' type='password' maxLength={8} size='small'/> 
        <div className="divButtons">
         <Link to="/user"> <Button> Login </Button> </Link>
         <Link to="/signIn"> <Button> Sign up </Button> </Link>
        </div>  
      </div>
    </>

  )
}
