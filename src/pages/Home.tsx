import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from '../store'
import {increment, decrement} from '../store/Stock/stock.actions'
import {LayoutNav} from '../components/LayoutNav/LayoutNav'
import {LayoutContent} from '../components/LayoutContent/LayoutContent'
import {LayoutFooter} from '../components/LayoutFooter'

const Home: React.FC = () => {

  //const dispatch = useDispatch()
  //const stock = useSelector<RootState>(state => state.stock)

return (

  <>
    
    <LayoutNav />
    <LayoutContent/>
    <LayoutFooter children="©2021 Created by Santloth"/>
    {/* {stock}
    <Button onClick={() => dispatch(increment())}> Somar </Button>
    <Button onClick={() => dispatch(decrement())}> Subtrair </Button> */}
  

  </>
)


}

export default Home