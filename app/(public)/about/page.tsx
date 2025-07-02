import About from '@/components/ui/about'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100">
      <div className="pt-40 pb-10">
        <Breadcrumb />
      </div>
      <About />
    </div>
  )
}

export default page
