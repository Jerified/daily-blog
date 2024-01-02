import React from 'react'
// import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'


export const revalidate = 1

const page = async () => {
    const tagsQuery = `*[_type == "tag"] {
        name,    
        _id,
        slug,
        "postCount": count(*[_type == "post" && references("tags", ^._id)])} | order(postCount desc)`
    const data = await client.fetch(tagsQuery)
    console.log(data);

    return (
        <section className='max-w-5xl mx-auto'>
            <h1 className='text-center  py-4 text-[#73AB84] text-4xl font-semibold'>TAGS</h1>
            <div className='border-b border-[#575F51] dark:border-gray-300 mt-4 mb-8 w-full flex flex-col gap-4'></div>
            {data.map((tag: any) => (
                <Link href={`/tag/${tag.slug.current}`} className='flex gap-1 mb-4 p-2 border border-gray-300 hover:bg-[#73937E]' key={tag._id}>
                    <p className=''>#{tag.name}</p>
                    <p>({tag.postCount})</p>
                </Link>
            ))}
        </section>
    )
}

export default page