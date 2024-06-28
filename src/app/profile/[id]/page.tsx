import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
    return (
        <div className='flex gap-6 pt-6'>
            {/* LEFT */}
            <div className='hidden xl:block xl:w-[20%]'>
                <LeftMenu type='profile' />
            </div>
            {/* CENTER */}
            <div className='w-full lg:w-[70%] xl:w-[50%]'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-6 items-center justify-center bg-white rounded-md'>
                        <div className='w-full h-64 relative '>
                            <Image
                                src='https://images.pexels.com/photos/26600378/pexels-photo-26600378/free-photo-of-bi-n-phong-c-nh-b-bi-n-k-ngh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                alt='wall profile'
                                fill
                                className='object-cover rounded-md'
                            />
                            <Image
                                src='https://images.pexels.com/photos/14263515/pexels-photo-14263515.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                alt='Avatar'
                                height={128}
                                width={128}
                                className='w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white rounded-full'
                            />
                        </div>
                        <div className='mt-10 mb-4 text-center'>
                            <span className='text-2xl font-medium'>
                                Son Nguyen The
                            </span>
                            <div className='flex items-center justify-center gap-12 mb-4'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-medium'>12.3k</span>
                                    <span className='text-sm'>Posts</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-medium'>1k3</span>
                                    <span className='text-sm'>Followers</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-medium'>2k3</span>
                                    <span className='text-sm'>Followings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Feed />
                </div>
            </div>
            {/* RIGHT */}
            <div className='hidden lg:block w-[30%]'>
                <RightMenu userId='test' />
            </div>
        </div>
    )
}

export default ProfilePage
