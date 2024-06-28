import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequests = () => {
    return (
        <div className='flex flex-col gap-5 p-4 bg-white rounded-lg shadow-md'>
            <div className='flex items-center justify-between'>
                <p className='text-gray-500'>Friend Requests</p>
                <Link
                    href='/see-all-friend-requests'
                    className='text-blue-400 text-xs'
                >
                    See all
                </Link>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <Image
                        src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/01/23/42cab7c4-d5a3-4a6f-ae18-d56111c973cb_cd03545b.jpg?itok=S6nAv316&v=1705986486'
                        alt='Profile'
                        height={40}
                        width={40}
                        className='h-10 w-10 rounded-full object-cover cursor-pointer'
                    />
                    <span className='font-medium'>Shin Hye Sun</span>
                    <div className='ml-auto flex items-center gap-4'>
                        <Image
                            src='/accept.png'
                            alt='Profile'
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                        <Image
                            src='/reject.png'
                            alt='Profile'
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <Image
                        src='https://images.pexels.com/photos/25945658/pexels-photo-25945658/free-photo-of-k-ngh-n-c-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt='Profile'
                        height={40}
                        width={40}
                        className='h-10 w-10 rounded-full object-cover cursor-pointer'
                    />
                    <span className='font-medium'>Park Jun Kyo</span>
                    <div className='ml-auto flex items-center gap-4'>
                        <Image
                            src='/accept.png'
                            alt='Profile'
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                        <Image
                            src='/reject.png'
                            alt='Profile'
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <Image
                        src='https://images.pexels.com/photos/26725674/pexels-photo-26725674/free-photo-of-g-chim-thu-v-t-d-ng-v-t.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt='Profile'
                        height={40}
                        width={40}
                        className='h-10 w-10 rounded-full object-cover cursor-pointer'
                    />
                    <span className='font-medium'>Cho Sam Dal</span>
                    <div className='ml-auto flex items-center gap-4'>
                        <Image
                            src='/accept.png'
                            alt='Profile'
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                        <Image
                            src='/reject.png'
                            alt='Profile'
                            height={20}
                            width={20}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendRequests
