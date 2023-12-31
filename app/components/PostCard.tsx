import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'


const PostCard = async ({ data }: any) => {

    return (
        <section className="w-full">
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full'>
                {data.map((post: any) => {
                    console.log(post.author.authorUrl)
                    return (
                        <div key={post._id} className='lg:h-[25vh] h-[20vh] w-full relative rounded-md overflow-hidden'>
                            <Image
                                className={`w-full h-full object-cover`}
                                quality={100}
                                src={post.mainImage}
                                width={350}
                                height={350}
                                alt='' />
                                <p className='text-[0.8rem] md:text-sm absolute bottom-[3.2rem] left-3 font-semibold'>{post.title}</p>
                                <div>
                                    <div className='absolute bottom-4 flex gap-2 items-center left-3 text-gray-300 text-xs z-10'>
                                    <Image
                                    className={`xl:h-[3vh] h-[3vh] object-cover rounded-full overflow-hidden `}
                                    quality={100}
                                    src={post.author.authorUrl}
                                    width={25}
                                    height={25}
                                    alt='' />
                                    <p className=''>{post.author.name}</p>
                                </div>
                                <p className=''>{post.publishedAt}</p>
                                </div>
                        </div>
                        
                    )
                })}
            </div>
        </section>
    )
}

export default PostCard