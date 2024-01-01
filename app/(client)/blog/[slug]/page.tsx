import React from 'react'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { IoCalendarClearOutline } from 'react-icons/io5'


interface Params {
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

const Blog = async ({ params }: Params) => {
    const post = await getPost(params?.slug)
    console.log(post.body)
    return (
        <main className="max-w-3xl mx-auto">
            <h1 className='text-3xl font-bold mx-aut'>{post.title}</h1>
            <div className="flex gap-4 items-center py-4 ">
                <div className=' flex gap-2 items-center text-gray-300 text-xs '>
                    <Image
                        className={`xl:h-[3vh h-[3vh object-cover rounded-full overflow-hidden `}
                        quality={100}
                        src={post.author.authorUrl}
                        width={25}
                        height={25}
                        alt='' />
                    <p className=''>{post.author.name}</p>
                </div>
                {post.publishedAt && <p className="flex items-center gap-1 text-xs dark:text-gray-300"><IoCalendarClearOutline />{new Date(post.publishedAt).toDateString()}</p>}
            </div>
            <div className="my- mx-auto prose-headings:text-xl prose-headings:text-black prose-headings:font-semibold prose-headings:py-4 prose-li:list-disc prose-li:text-x prose-li:leading-7 prose-a:text-blue-600 prose-img:py-4 overflow-hidden w-full">
                <PortableText value={post?.body} components={portableTextComponents} />
            </div>

        </main>
    )
}

export default Blog

const portableTextComponents = {
    types: {
        urlImg: ({ value }: any) => {
            // const url = urlForImage(value[0])
            // console.log(url)
            const { url, alt } = value
            return (
                <Image src={url} alt={alt} width={700} height={700} className='rounded-lg w-full h-[40vh] object-cover overflow-hidden ' />
            )
        }
    }
}