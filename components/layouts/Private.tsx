import React, { useState, useEffect, createContext, ReactNode } from "react"
import { useRouter } from 'next/router'
import { User } from "../../interfaces/index"
import { getCurrentUser } from "../../lib/api/auth"

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

export const Private = ({ children }: { children: ReactNode }) => {
const [loading, setLoading] = useState<boolean>(true)
const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
const [currentUser, setCurrentUser] = useState<User | undefined>()
const router = useRouter()
// 認証済みのユーザーがいるかどうかチェック
// 確認できた場合はそのユーザーの情報を取得
const handleGetCurrentUser = async () => {
  try {
    const res = await getCurrentUser()
    if (res?.data.isLogin === true) {
      
      setIsSignedIn(true)
      setCurrentUser(res?.data.data)
      console.log(currentUser)
    } else {
      router.push('/signin')
    }
  } catch (err) {
    console.log(err)
  }
  setLoading(false)
}
useEffect(() => {
  handleGetCurrentUser()
}, [setCurrentUser])
return(
  !loading ? (
    isSignedIn ? (
    <AuthContext.Provider value={ {loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser } }>
      {children}
    </AuthContext.Provider>)
    :
    <div>サインインしてください</div>
    )
  :
  <p>loading</p>
)
}
