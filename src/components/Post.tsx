import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER  */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image
                        src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/01/23/42cab7c4-d5a3-4a6f-ae18-d56111c973cb_cd03545b.jpg?itok=S6nAv316&v=1705986486'
                        alt='Profile'
                        height={40}
                        width={40}
                        className='h-10 w-10 rounded-full object-cover cursor-pointer'
                    />
                    <span>Shin Hye Sun</span>
                </div>
                <Image
                    src='/more.png'
                    alt='more'
                    height={36}
                    width={36}
                    className='h-9 w-9 p-2 rounded-full hover:bg-slate-100 cursor-pointer'
                />
            </div>
            {/* DESC */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image
                        src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/01/23/42cab7c4-d5a3-4a6f-ae18-d56111c973cb_cd03545b.jpg?itok=S6nAv316&v=1705986486'
                        alt='Profile'
                        fill
                        className='rounded-md object-cover'
                    />
                </div>
                <p>
                    Shin Hye-sun is a South Korean actress. She made her debut
                    in the television series School 2013. In 2017, Shin played
                    her first leading role and became well known in the weekend
                    drama, My Golden Life, which garnered more than 8 million
                    viewers. Wikipedia
                </p>
            </div>
            {/* INTERACTION  */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                        <Image
                            src='/like.png'
                            alt='like'
                            width={20}
                            height={20}
                            className='h-5 w-5 cursor-pointer'
                        />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>
                            123<span className='hidden md:inline'> Likes</span>
                        </span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                        <Image
                            src='/comment.png'
                            alt='comment'
                            width={20}
                            height={20}
                            className='h-5 w-5 cursor-pointer'
                        />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>
                            123
                            <span className='hidden md:inline'> Comments</span>
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                        <Image
                            src='/share.png'
                            alt='share'
                            width={20}
                            height={20}
                            className='h-5 w-5 cursor-pointer'
                        />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>
                            123
                            <span className='hidden md:inline'> Shares</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post
