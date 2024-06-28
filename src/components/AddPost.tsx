import Image from 'next/image'

const AddPost = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm'>
            {/* AVATAR  */}
            <Image
                src='https://images.pexels.com/photos/15876210/pexels-photo-15876210/free-photo-of-bi-n-chau-uc-b-bi-n-vang-ch-p-nh-tren-khong.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt=''
                width={48}
                height={48}
                className='w-12 h-12 object-cover rounded-full'
            />
            {/* POST  */}
            <div className='flex-1'>
                {/* TEXT INPUT  */}
                <div className='flex gap-4'>
                    <textarea
                        name=''
                        id=''
                        placeholder='Whats on your mind?'
                        className='flex-1 p-2 bg-slate-100 rounded-lg'
                    ></textarea>
                    <Image
                        src='/emoji.png'
                        alt=''
                        width={20}
                        height={20}
                        className='w-5 h-5 cursor-pointer self-end'
                    />
                </div>
                {/* POST OPTION  */}
                <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src='/addimage.png'
                            alt='addimage'
                            width={20}
                            height={20}
                            className='w-5 h-5'
                        />
                        Photo
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src='/addVideo.png'
                            alt='addVideo'
                            width={20}
                            height={20}
                            className='w-5 h-5'
                        />
                        Video
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src='/addevent.png'
                            alt='addevent'
                            width={20}
                            height={20}
                            className='w-5 h-5'
                        />
                        Event
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src='/poll.png'
                            alt='addevent'
                            width={20}
                            height={20}
                            className='w-5 h-5'
                        />
                        Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost
