import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-[70px] bg-[#02203c] flex justify-between relative items-center'>
        <div className=' font-medium text-3xl text-white align-middle ml-6 '>
            Task Manager
        </div>
        <div className='absolute right-12 font-medium text-xl text-white align-middle mr-6 items-center '>
            Profile
        </div>
    </div>
  )
}

export default Navbar