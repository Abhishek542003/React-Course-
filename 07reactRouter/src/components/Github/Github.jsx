import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-slate-600 text-white text-3xl p-4'>Github Id:{data.id}
      <img src={data.avatar_url} width={300} alt='Git Picture'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>
    {
        const response  = await fetch('https://api.github.com/users/abhishekpandey')
        return response.json();
    }