import Breadcrumb from '@/components/ui/breadcrumb'
import Contact from '@/components/ui/contact'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100">
      <div className="pt-40 pb-10">
        <Breadcrumb />
      </div>
      <Contact />
    </div>
  )
}

export default page
