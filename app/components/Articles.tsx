import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import React from 'react'
import PostCard from './PostCard'

const Articles = async({data}: any) => {
    
  return (
    <section className="max-w-5xl mx-auto pt-16">
        <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-bold text-[#73AB84] '>Featured Articles</h1>
            <p className='pt-2 pb-8 text-gray-300'>Discover the most outstanding articles in all topics</p>
            <PostCard data={data} />
        </div>
    </section>
  )
}

export default Articles