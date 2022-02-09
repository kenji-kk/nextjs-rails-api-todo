import type { NextPage } from 'next'
import React from "react"
import CommonLayout from '../components/layouts/CommonLayout'
import { Private } from '../components/layouts/Private'



const Home: NextPage = () => {

  return (
    <Private>
      <CommonLayout>
        <div>aaaa</div>
      </CommonLayout>
    </Private>
  )
}

export default Home
