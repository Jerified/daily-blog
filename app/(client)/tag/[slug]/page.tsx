import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@/app/components/Card'

export const revalidate = 1

interface Params {
    params: {
        slug: string
    }
}


const page = async ({ params }: Params) => {
    const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${params.slug}"]._id)]
    {
        _id,
        title, 
        slug,
        publishedAt,
        excerpt,
        mainImage,
        author-> {
          _id, 
          name,
          authorUrl,
          bio
        },
        tags[]-> {
          _id,
        //   slug,
          name
        }
    }`

    const posts = await client.fetch(query)
    // const posts = await getPostByTag(params.slug)
    // console.log(posts)

    
    return (
        <section className="lg:max-w-5xl md:max-w-2x mx-auto w-full">
            <h1 className='text-4xl font-bold capitalize'>{params?.slug}</h1>
            <div className='border-b border-[#575F51] dark:border-gray-300 mt-4 mb-8 flex w-full' />
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full'>
                {posts.length > 0 && posts?.map((post: any) => {
                    return (
                        <div key={post._id} className='w-full'>
                            <Card post={post} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default page