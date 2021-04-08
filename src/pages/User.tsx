import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from '../store'
import {increment, decrement} from '../store/Stock/stock.actions'
import {LayoutNav} from '../components/LayoutNav/LayoutNav'
import {LayoutContent} from '../components/LayoutContent/LayoutContent'
import {LayoutFooter} from '../components/LayoutFooter'

const User: React.FC = () => {

  //const dispatch = useDispatch()
  //const stock = useSelector<RootState>(state => state.stock)

return (

  <>

    <h1> User </h1>  
  
  </>
)


}

export default User