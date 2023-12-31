import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiArrowRightFill } from "react-icons/ri";

const getPost = async () => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
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

export const revalidate = 1;

const RecentPost = async () => {
     const data = await getPost()
    console.log(data)
    return (
        <section className="max-w-5xl mx-auto pt-12 w-full">
            <div className='flex flex-col items-start'>
                <h1 className='text-4xl font-bold pb-4 text-[#73AB84] '>Recent posts</h1>
                <div className='border-b border-gray-300 my-4 w-full'></div>
                <div className="pt-6 grid lg:grid-cols-2 gap-8">
                    {data.map((post: any) => {
                        return (
                            <div className="flex gap-3 h-full w-full " key={post._id}>
                                <Image className=' w-[30%] h-[12vh] object-cover rounded-lg overflow-hidden fle' src={post.mainImage} alt={post.alt} width={100} height={100} objectFit='cover' />
                                <div className='text-start flex flex-col flex-wrap items-start w-[70%]'  >
                                    <Link href={`/blog/${post.slug.current}`} className="text-md md:text-lg font-bold leading-4 md:leading-normal">{post.title}</Link>
                                    <p className="text-xs pt-1 leading-[0.85rem] md:leading-normal sm:text-[0.8rem] dark:text-gray-300">{post.excerpt}</p>
                                    {post.publishedAt && <p className="flex items-center gap-1 pt-4 text-xs dark:text-gray-300"><IoCalendarClearOutline />{new Date(post.publishedAt).toDateString()}</p>}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default RecentPost