import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex min-h-screen w-screen items-center justify-center'>
        <SignIn/>
    </main>
  )
}

export default SignInPage