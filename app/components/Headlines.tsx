import Image from 'next/image'
import React from 'react'

// interface Post {
//     body: {
//       main: string
//     }[]
//   }

//   interface Props {
//     posts: Post[] 
//   }

const Headlines = ({ data }: any) => (
    <section className="max-w-5xl mx-auto">
        <div className=" mt-8 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-4 flex-row">
                {data.slice(1,5).map((post: any, index: number) => {
                    const mainImage = post
                    console.log(mainImage)
                    return (
                        <div key={post._id} className={`${index === 0 && 'xl:col-span-6 xl:row-span-2 xl:h-[calc(50vh+1.5rem)]'} ${index === 1 || index === 2 ? 'xl:col-span-3 xl:h-[25vh]' : ''} ${index === 3 && 'xl:col-span-6 xl:h-[25vh] inline-block '} w-full relative`}>
                            <Image
                                className={`w-full rounded-lg h-[40vh] md:h-[40vh] xl:h-full ${index === 3 && 'object-cover'}  ${index === 0 && 'object-cover'} `}
                                quality={100}
                                src={post.mainImage}
                                width={200}
                                height={200}
                                alt='' />
                            {post.tags?.map((tag: any) => {
                                console.log(tag)
                                return (
                                    <div className='absolute top-3 right-3 text-xs flex flex-wrap overflow-hidden rounded-sm bg-green-400/50 px-2 py-1' key={tag._id}>
                                        <p className=''>{tag.name}</p>
                                    </div>
                                )
                            })}
                            <p className='absolute bottom-4 left-3 font-semibold hover:underline text-xs md:text-sm hover:underline-offset-4 dark:hover:text-gray-300 text-start cursor-pointer'>{post.title}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    </section>
)

export default Headlines
                