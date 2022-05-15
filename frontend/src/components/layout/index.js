import React, { useEffect } from 'react'
import { Header } from './header'
import { useDispatch } from 'react-redux'

import { fetchMyBoard } from "../../service/user.service"
import { updateMyBoard } from "../../features/user/userSlice"

export const Layout = (props) => {
  const dispatch = useDispatch()

  async function fetchBoard() {
    const board = await fetchMyBoard(1)
    dispatch(updateMyBoard(board.data))
  }

  useEffect(() => {
    fetchBoard()

    return () => {
      fetchBoard()
    }
  }, [])

  return (
    <div>
      <Header />
      <div className='container mt-5'>
        {props.children}
      </div>
    </div>
  )
}