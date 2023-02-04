import Link from 'next/link'
import React from 'react'

function SigninButton() {
  return (
    <Link href='/auth/sigin' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300'>
      Sign In
    </Link>
  )
}

export default SigninButton
