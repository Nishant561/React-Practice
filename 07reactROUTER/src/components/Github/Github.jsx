import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState({})
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then((res)=> res.json())
    //     .then((datas) => setData(datas))

    // },[])

  return (
    <>
        <div className='w-full flex items-center justify-center'>
            Followers: {data.followers}
            <img src={data.avatar_url} alt='hitesh' />
        </div>

    </>
  )
}

export default Github

export const loader = async ()=>{
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)

    return response.json()
}