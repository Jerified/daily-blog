import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiArrowRightFill } from "react-icons/ri";


const RecentPost = async ({ data }: any) => {

    return (
        <section className="max-w-5xl mx-auto pt-12 w-full">
            <div className='flex flex-col items-start'>
                <h1 className='text-4xl font-bold text-[#73AB84] '>Recent posts</h1>
                <p className='pt-2 pb-8 dark:text-gray-300'>Dont miss the latest trends</p>
                <div className="pt-10 grid lg:grid-cols-2 gap-8">
                    {data.map((post: any) => {
                        return (
                            <div className="flex gap-3 h-full w-full " key={post._id}>
                                <Image className=' w-[30%] h-[12vh] object-cover rounded-lg overflow-hidden fle' src={post.mainImage} alt={post.alt} width={100} height={100} objectFit='cover' />
                                <div className='text-start flex flex-col flex-wrap items-start w-[70%]'  >
                                    <Link href={`/blog/${post.slug.current}`} className="text-md md:text-lg font-bold leading-4 md:leading-normal">{post.title}</Link>
                                    <p className="text-xs leading-[0.85rem] md:leading-normal sm:text-[0.8rem] dark:text-gray-300">{post.excerpt}</p>
                                    {post.publishedAt && <p className="flex items-center gap-1 pt-4 text-xs dark:text-gray-300"><IoCalendarClearOutline />{new Date(post.publishedAt).toDateString()}</p>}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <button className="my-10 font-semibold text-sm bg-[#73AB84] rounded-full p-4 flex gap-2 items-center">Show More Post <RiArrowRightFill /></button>
                {/* <PostCard data={data} /> */}
            </div>
        </section>
    )
}

export default RecentPost