import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SponsoredAds = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md'>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500 font-medium'>Sponsored Ads</p>
                <Image
                    src='/more.png'
                    alt='more'
                    height={42}
                    width={42}
                    className='cursor-pointer rounded-full p-3 hover:bg-slate-100'
                />
            </div>
            <div
                className={`flex flex-col ${size === 'sm' ? 'gap-2' : 'gap-4'}`}
            >
                <div
                    className={`w-full ${
                        size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'
                    } flex items-center gap-4 relative`}
                >
                    <Image
                        src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/01/23/42cab7c4-d5a3-4a6f-ae18-d56111c973cb_cd03545b.jpg?itok=S6nAv316&v=1705986486'
                        alt='Profile'
                        fill
                        className='rounded-lg object-cover'
                    />
                </div>
            </div>
            <div className='gap-4 flex flex-col'>
                <div className='flex gap-4 items-center'>
                    <Image
                        src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/01/23/42cab7c4-d5a3-4a6f-ae18-d56111c973cb_cd03545b.jpg?itok=S6nAv316&v=1705986486'
                        alt='gift'
                        height={32}
                        width={32}
                        className='h-8 w-8 cursor-pointer rounded-full'
                    />
                    <p className='text-blue-400'>BigChef Lounge</p>
                </div>
                <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
                    {size === 'sm'
                        ? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                        : size === 'md'
                        ? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Veniam architecto ducimus beatae'
                        : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Veniam architecto ducimus beatae labore recusandae deseruntesse natus et explicabo fuga'}
                </p>
                <button className='w-full text-center p-2 rounded-lg bg-slate-100'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default SponsoredAds
