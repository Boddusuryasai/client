import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between py-5 items-center shadow-xl bg-sky-700' >
        <h3 className='font-bold text-white px-3 text-xl'>MY BLOG</h3>
        <div className='font-semibold text-white px-3 text-xl'>Logout</div>
    </div>
  )
}

export default Header