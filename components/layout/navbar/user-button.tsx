import Link from 'next/link'
import React from 'react'

const UserButton = () => {
  return (
    <div className='flex items-center gap-2'>
     <Link href='/register' className='bg-blue-800 text-white text-sm px-4 py-3 font-semibold rounded-full'>
        Open Account
     </Link>
    </div>
  )
}

export default UserButton
