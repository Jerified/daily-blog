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
            <div className="grid xl:grid-cols-12 gap-6 flex-row">
                {data.map((post: any, index: number) => {
                    const mainImage = post.body[1].main
                    console.log(mainImage)
                    return (
                        <div key={post._id} className={`${index === 0 && 'col-span-6 row-span-2 h-[calc(50vh+1.5rem)]'} ${index === 1 || index === 2 ? 'col-span-3 h-[25vh]' : ''} ${index === 3 && 'col-span-6 h-[25vh] inline-block '} w-full relative`}>
                            <Image
                                className={`w-full h-full ${index === 3 && 'object-cover'} `}
                                quality={100}
                                src={mainImage}
                                width={200}
                                height={200}
                                alt='' />
                            {post.tags?.map((tag: any) => {
                                console.log(tag)
                                return (
                                    <div className='absolute top-3 right-3 text-xs flex overflow-hidden rounded-sm bg-green-400/50 px-2 py-1' key={tag._id}>
                                        <p>{tag?.name}</p>
                                    </div>
                                )
                            })}
                            <p className='absolute bottom-4 left-3'>{post.title}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    </section>
)

export default Headlines