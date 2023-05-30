'use client'

import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import Darkmode from './Darkmode'
const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl  sm:mx-auto items-center p-3'>
      <Link href={'/'} className='flex items-center justify-between '>
        <AiFillHome size={30} className='mr-3' />

        <BsFillInfoSquareFill size={30} />
      </Link>

      <div className='flex items-center justify-between'>
        <Darkmode />
        <span className='bg-amber-500 rounded-lg px-2 py-1 mr-3'>IMDB</span>
        <h1 className='text-xl hidden sm:inline'>Clone</h1>
      </div>
    </div>
  )
}

export default Header
