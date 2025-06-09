import React from 'react'
import Container from './container'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='font-bold flex flex-col items-center'>
         <h1 className='font-extrabold text-xl'>Heritage</h1>
         <p className='text-xs'>Trust Bank</p>
    </Link>
  )
}