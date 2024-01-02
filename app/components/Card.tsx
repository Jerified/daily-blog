import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ post }: any) => {
    return (
        <section>
            <div className=''>
                <Link href={`/blog/${post.slug.current}`} key={post._id} className='w-full '>
                    <div className='border dark:border-gray-300 border-[#73AB84] hover:bg-[#73AB84] rounded-[0.5rem] p-2 w-full h-full transition duration-200 ease-in-out'>
                        <Image
                            className={`w-full lg:h-[vh] h-[30vh] object-cover  rounded-[0.5rem] overflow-hidden`}
                            quality={100}
                            src={post.mainImage}
                            width={350}
                            height={350}
                            alt='' />
                        <div className='py-3'>
                            <p className='text-xs'>#{post.tags[0]?.name}</p>
                            <h1 className='text-[1rem] font-bold leading-[1.2rem] capitalize pt-2 h-[3rem]'>{post.title}</h1>
                            <p className='text-[0.8rem] md:text-sm pt-2 h-[6rem]'>{post.excerpt}</p>
                            <div className=' flex gap-2 pt-5 items-center text-gray-300 text-xs'>
                                <Image
                                    className={` object-cover rounded-full overflow-hidden `}
                                    // quality={100}
                                    src={post.author.authorUrl}
                                    width={30}
                                    height={30}
                                    alt='' />
                                <div className='flex flex-col text-black'>
                                    <p className='font-semibold'>{post.author.name}</p>
                                    {post.publishedAt && <p className="">{new Date(post.publishedAt).toDateString()}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Card