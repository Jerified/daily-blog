'use client'

import { headerData } from '@/Data/headerData'
import Image from 'next/image'
import Link from 'next/link'
import ToggleThemeBtn from './ToggleThemeBtn'
import { useState } from 'react'
import MobileNav from './MobileNav'

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    return (
        <header className='py-5'>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-3">
                        <Link href={'/'}>
                            <h1 className="text-2xl font-bold">Daily<span className='text-[#73AB84] dark:text-[#73AB84]'>BLOG</span></h1>
                        </Link>

                    </div>
                    <nav className="hidden lg:block col-span-6">
                        <div className=" w-full flex items-center justify-center gap-10">
                            {headerData.map((item: any, index: number) => (
                                <div key={index}>
                                    <Link
                                        href={item.link}
                                        className="link link-hover text-base text-base-content/80 hover:text-primary transition hover:duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </nav>
                    <div className="flex items-center justify-end lg:justify-center gap-10 col-span-9 lg:col-span-3">
                        {/* Search Block */}
                        <div className="dark:bg-whit px-4 py-4 rounded-xl hidden sm:fle items-center gap-4">
                            <input
                                type="text"
                                className="outline-none rounded-lg px-4 dark:bg-white w-36 dark:text-black placeholder:text-xs"
                                placeholder="Search"
                            />
                            <div>
                                <svg
                                    className="cursor-pointer text-2xl dark:text-[#73AB84]"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                        stroke="#52525B"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10.5715 10.5716L14 14"
                                        stroke="#52525B"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <ToggleThemeBtn />
                        <svg
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="cursor-pointer w-8 h-8 lg:hidden text-base-content"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <MobileNav
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>

        </header>
    )
}
