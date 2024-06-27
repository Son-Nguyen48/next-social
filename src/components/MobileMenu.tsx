'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div
                className='flex flex-col gap-[4.5px] cursor-pointer'
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ${
                        isMenuOpen ? 'rotate-45' : ''
                    } origin-left ease-in-out duration-500`}
                ></div>
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ${
                        isMenuOpen ? 'opacity-0' : ''
                    } ease-in-out duration-500`}
                ></div>
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ${
                        isMenuOpen ? '-rotate-45' : ''
                    } origin-left ease-in-out duration-500`}
                ></div>
            </div>
            {isMenuOpen && (
                <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Friend</Link>
                    <Link href='/'>Group</Link>
                    <Link href='/'>Stories</Link>
                    <Link href='/'>Login</Link>
                </div>
            )}
        </div>
    )
}

export default MobileMenu
