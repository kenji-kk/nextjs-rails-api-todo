import type { NextPage } from 'next'
import React, { useContext } from "react"
import CommonLayout from '../components/layouts/CommonLayout'
import { Private } from '../components/layouts/Private'
import {AuthContext} from "../components/layouts/Private"
import { Example } from '../components/organisms/Example'



const Home: NextPage = () => {
  return (
    <Private>
      <CommonLayout>
        <Example />
      </CommonLayout>
    </Private>
  )
}

export default Home
