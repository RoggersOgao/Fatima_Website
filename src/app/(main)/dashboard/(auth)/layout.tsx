import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen grid place-items-center">{children}</div>
  )
}

export default AuthLayout
