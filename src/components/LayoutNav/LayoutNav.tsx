import React, { Component, FC } from 'react'
import {Link} from 'react-router-dom'
import {Layout, Image, Input, Button} from 'antd'
import 'antd/dist/antd.css'
import '../LayoutNav/styles.scss'
import ImagemStock from '../../assets/stockImage1.svg'
const { Header } = Layout;

interface IProps{

  title?: String;
  children?: String;
  //btn?: JSX.Element | Component | Element | React.FC;
  isBtn?: boolean;
}

//export const LayoutNav: React.FC = (props) => {

//export default function LayoutNav(props : IProps): JSX.Element {

export const LayoutNav = (props : IProps) : JSX.Element => {

  return (
    <>
    <Header className="headerFormat" >
      <div className="divNav">
      <Image alt="Logo da empresa" src={ImagemStock} height= '50px' width= '50px' preview={false} > </Image>
      <h1 style={{color: 'white'}}> {props.title} </h1>
      {props.isBtn && <Link to="/"> <Button style={{position: 'absolute', left: 0, bottom: 0, backgroundColor: "#1f4e75"}}> Go Back </Button> </Link> }
      </div>
    </Header>
    </>
  )
}
