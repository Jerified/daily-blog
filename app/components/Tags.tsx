import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import React from 'react'

const Tags = async() => {
    const tagsQuery = `*[_type == "tag"] {
        _id,
        name
      }`
    const data = await client.fetch(tagsQuery)
    console.log(data);
    
  return (
    <div className="max-w-3xl mx-auto">
        <div className='flex flex-wrap gap-5 mt-8 justify-center'>
            {data.map((tag: any) => {
                return (
                    <Link href={tag.name} className=' px-4 py-3 rounded-[13px] border border-gray-300 bg-[#A6B695]' key={tag.id}>
                        <h1>{tag.name}</h1>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Tags
