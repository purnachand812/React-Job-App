import React from 'react'

const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shandow-md`}>
        {children}
    </div>
  )
}

export default Card