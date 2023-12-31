import React from 'react'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'


interface Params  {
    params: {
        slug: string
    }
}

const getPost = async (slug: string) => {
    const query = `*[_type == "post" && slug.current == "${slug}"] [0]  {
        _id,
        title, 
        slug,
        publishedAt,
        excerpt,
        mainImage,
        body[],
        author-> {
          _id, 
          name,
          authorUrl,
          bio
        },
        tags[]-> {
          _id,
          name
        }
      } `
    const data = await client.fetch(query)
    console.log(data)
    return data
} 

const Blog = async ({params}: Params) => {
    const post= await getPost(params?.slug)
    console.log(post)
  return (
    <main className="max-w-3xl mx-auto">
        <h1 className='text-3xl font-bold mx-auto flex justify-center items-center'>{post.title}</h1>
        <div className="mt-14 mx-auto prose-heading:text-2xl prose-li:list-disc prose-li:text-xl prose-li:leading-7">
            <PortableText value={post?.body} components={portableTextComponents} />
        </div>
        .
    </main>
  )
}

export default Blog

const portableTextComponents = {
    types: {
        image: ({ value }: any) => (
            <Image src={urlForImage(value).} alt={value.alt} width={700} height={700} />
        )
    }
}