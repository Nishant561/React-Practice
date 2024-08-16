import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
   <>
    <div className='w-full flex items-center justify-center'>
                    user:{userId}
    </div>
   </>
  )
}

export default User
