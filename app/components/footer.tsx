'use client'

import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const route = useRouter()
  return (
    <div className='flex gap-2 justify-center my-10'>

          <Button label='Menu' className='text-lg bg-white text-black px-10 py-3 rounded-none hover:bg-slate-200'
          onClick={()=>route.replace('/menu')}
          
          >Menu</Button>
           <Button label='Contact' className='text-lg bg-white text-black px-10 py-3 rounded-none hover:bg-slate-200'
           
           onClick={()=>route.replace('/about')}
           >
            Contact
           </Button>
    </div>
  )
}

export default Footer