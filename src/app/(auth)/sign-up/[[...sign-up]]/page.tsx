import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage= () => {
  return (
      <main className='flex min-h-screen w-screen items-center justify-center'>
            <SignUp/>
        </main>
  )
}

export default SignUpPage