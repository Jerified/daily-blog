import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'


const PostCard = async ({ data }: any) => {

    return (
        <section className="">
            <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {data.map((post: any) => {
                    const mainImage = post.body[1].main
                    return (
                        <div key={post._id} className='h-[33vh] rounded-md overflow-hidden'>
                            <Image
                                className={`w-full h-full `}
                                quality={100}
                                src={mainImage}
                                width={200}
                                height={200}
                                alt='' />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PostCard