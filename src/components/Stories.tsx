import Image from 'next/image'

const Stories = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs no-scrollbar'>
            <div className='flex gap-8 w-max'>
                {/* STORIES  */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/25677021/pexels-photo-25677021/free-photo-of-phong-c-nh-nui-lang-r-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/25742723/pexels-photo-25742723/free-photo-of-bi-n-phong-c-nh-b-bi-n-n-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/25255053/pexels-photo-25255053/free-photo-of-thanh-ph-d-ng-ph-thu-v-t-d-ng-v-t.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/19149588/pexels-photo-19149588/free-photo-of-dan-ong-lau-dai-c-i-voi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/26600378/pexels-photo-26600378/free-photo-of-bi-n-phong-c-nh-b-bi-n-k-ngh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/26548185/pexels-photo-26548185/free-photo-of-bi-n-b-bi-n-dan-ba-d-i-d-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/25819452/pexels-photo-25819452/free-photo-of-m-c-n-c-h-ki-n-truc.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/19203181/pexels-photo-19203181/free-photo-of-chi-nhanh-t-i-cay-trang-tri.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src='https://images.pexels.com/photos/19962749/pexels-photo-19962749/free-photo-of-bang-gh-c-cong-vien-la.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={80}
                        height={80}
                        className='rounded-full ring-2 h-20 w-20'
                    />
                    <span className='font-medium'>Rick</span>
                </div>
            </div>
        </div>
    )
}

export default Stories
