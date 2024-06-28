import Image from 'next/image'

const ProfileCard = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image
                    src='https://images.pexels.com/photos/26600378/pexels-photo-26600378/free-photo-of-bi-n-phong-c-nh-b-bi-n-k-ngh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    alt='wall picture'
                    fill
                    className='rounded-md object-cover'
                />
                <Image
                    src='https://images.pexels.com/photos/26115852/pexels-photo-26115852/free-photo-of-thanh-ph-th-i-trang-nh-ng-ng-i-dan-ba.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    alt='wall picture'
                    width={48}
                    height={48}
                    className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10'
                />
            </div>

            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'>Nguyen The Son</span>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                        <Image
                            src='https://images.pexels.com/photos/26115852/pexels-photo-26115852/free-photo-of-thanh-ph-th-i-trang-nh-ng-ng-i-dan-ba.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt='wall picture'
                            width={16}
                            height={16}
                            className='rounded-full object-cover w-4 h-4  left-0 right-0 m-auto -bottom-6 ring-white z-10'
                        />
                        <Image
                            src='https://images.pexels.com/photos/25184998/pexels-photo-25184998/free-photo-of-vay-th-i-trang-ph-ng-phap-dong.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt='wall picture'
                            width={16}
                            height={16}
                            className='rounded-full object-cover w-4 h-4  left-0 right-0 m-auto -bottom-6 ring-white z-10'
                        />
                        <Image
                            src='https://images.pexels.com/photos/20852624/pexels-photo-20852624/free-photo-of-l-nh-dan-ba-lang-chai.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt='wall picture'
                            width={16}
                            height={16}
                            className='rounded-full object-cover w-4 h-4  left-0 right-0 m-auto -bottom-6 ring-white z-10'
                        />
                    </div>
                    <span className='text-xs text-gray-500'>500 Follower</span>
                </div>
                <button className='bg-blue-400 text-white text-xs p-2 rounded-md'>
                    My Profile
                </button>
            </div>
        </div>
    )
}

export default ProfileCard
