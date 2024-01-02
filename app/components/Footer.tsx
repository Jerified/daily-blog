import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { RiArrowRightFill } from "react-icons/ri";

const Footer = async () => {
    const tagsQuery = `*[_type == "tag"] {
        _id,
        name
      }`
    const data = await client.fetch(tagsQuery)
    return (
        <section className='max-w-6xl mx-auto mt-12 '>
            <div className='bg-[#73AB84] rounded-[2.5rem] p-16 grid grid-cols-1 lg:grid-cols-3 lg:justify-items-center justify-center gap-12 border border-gray-200'>
                <div className=''>
                    <Link href={'/'}>
                        <h1 className="text-2xl font-bold">Daily<span className='text-[#73AB84dark:text-'>BLOG</span></h1>
                    </Link>
                    <p className='text-[0.9rem] pt-4 text-gray-200'>When an unknown pmoto sans took a gallery and scambled it to make specimen book not only five. When an unknown pmoto sans took a gallery and scrambled it to five centurie</p>
                    <div className="pt-4">
                        <h3 className="font-semibold text-lg">Address</h3>
                        <p className="text-gray-200 text-[0.9rem]">123 Main Street</p>
                        <p className="text-gray-200 text-[0.9rem]">New York, NY 10001</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold text-lg">Categories</h1>
                    <div className="pt-4 grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-4">
                        {data.map((tag: any) => {
                            return (
                                <Link href={`/tag/${tag.name}`} className='' key={tag.id}>
                                    <h1 className='text-gray-200 text-[0.9rem]'>{tag.name}</h1>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                <h1 className="font-semibold text-lg">Newsletter</h1>
                <p className="pt-4 text-[0.9rem] text-gray-200">Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.</p>
                <form action="" className="mt-4">
                    <input type="text" className="w-full border-b pb-2 placeholder:text-[0.9rem] border-gray-20 bord outline-none bg-inherit placeholder:text-gray-200 " placeholder='Your name'/>
                    <input type="text" className="w-full border-b pb-2 placeholder:text-[0.9rem] border-gray-20 bord outline-none bg-inherit placeholder:text-gray-200 mt-2 " placeholder='Email address'/>
                    <button className="my-10 font-semibold tracking-[0.2rem] text-sm bg-[#00B25A] rounded-lg p-4 flex gap-2 items-center">Subscribe <RiArrowRightFill /></button>
                </form>
                </div>
            </div>

        </section>
    )
}

export default Footer