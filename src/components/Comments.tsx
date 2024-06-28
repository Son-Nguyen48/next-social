import Image from 'next/image'

const Comments = () => {
    return (
        <div>
            {/* WRITE  */}
            <div className='flex items-center gap-4'>
                <Image
                    src='https://images.pexels.com/photos/19718703/pexels-photo-19718703/free-photo-of-dan-ba-sa-m-c-ng-i-mo-hinh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    alt='profile'
                    height={32}
                    width={32}
                    className='w-8 h-8 rounded-full object-cover'
                />
                <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                    <input
                        type='text'
                        placeholder='Write a comment'
                        className='bg-transparent outline-none p-2 rounded-xl flex-1'
                    />
                    <Image
                        src='/emoji.png'
                        alt='emoji'
                        height={16}
                        width={16}
                        className='cursor-pointer'
                    />
                </div>
            </div>
            {/* COMMENTS  */}
            <div className='flex items-center mt-4 gap-4'>
                <div className='self-start'>
                    <Image
                        src='https://images.pexels.com/photos/19718703/pexels-photo-19718703/free-photo-of-dan-ba-sa-m-c-ng-i-mo-hinh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt='profile'
                        height={32}
                        width={32}
                        className='w-8 h-8 rounded-full object-cover cursor-pointer'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium cursor-pointer'>
                        Shin Hye Sun Fans
                    </p>
                    <p>Love the queen so much!</p>
                    <div>
                        <div className='flex gap-8 mt-2'>
                            <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                                <Image
                                    src='/like.png'
                                    alt='like'
                                    width={20}
                                    height={20}
                                    className='h-5 w-5 cursor-pointer'
                                />
                                <span className='text-gray-300'>|</span>
                                <span className='text-gray-500 flex gap-1'>
                                    123
                                    <span className='hidden md:inline'>
                                        {' '}
                                        Likes
                                    </span>
                                </span>
                                <span className='text-gray-300'>|</span>
                                <span className='text-blue-400 cursor-pointer'>
                                    Reply
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
                                <span className='text-gray-500 flex gap-1'>
                                    12
                                    <span className='hidden md:inline'>
                                        {' '}
                                        Comments
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-auto self-start hover:bg-slate-100 p-2 rounded-full'>
                    <Image
                        src='/more.png'
                        alt='profile'
                        height={16}
                        width={16}
                        className='cursor-pointer h-4 w-4'
                    />
                </div>
            </div>
            <div className='flex items-center mt-4 gap-4'>
                <div className='self-start'>
                    <Image
                        src='https://images.pexels.com/photos/26691585/pexels-photo-26691585/free-photo-of-g-d-ng-phong-c-nh-n-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt='profile'
                        height={32}
                        width={32}
                        className='w-8 h-8 rounded-full object-cover cursor-pointer'
                    />
                </div>
                <div className='flex-1 flex flex-col gap-2'>
                    <p className='font-medium cursor-pointer'>Satoh Nolan</p>
                    <p>
                        Love the queen so much!Firstly, I would like to say
                        Thank You for the chance to send this lovely letter and
                        I hope that you will get my letter. I am from Myanmar
                        and a fan of you. I want to say about how much I love
                        you and am a big fan.
                    </p>
                    <div>
                        <div className='flex gap-8 mt-2'>
                            <div className='flex items-center gap-4 bg-slate-50 rounded-xl p-2'>
                                <Image
                                    src='/like.png'
                                    alt='like'
                                    width={20}
                                    height={20}
                                    className='h-5 w-5 cursor-pointer'
                                />
                                <span className='text-gray-300'>|</span>
                                <span className='text-gray-500 flex gap-1'>
                                    123
                                    <span className='hidden md:inline'>
                                        {' '}
                                        Likes
                                    </span>
                                </span>
                                <span className='text-gray-300'>|</span>
                                <span className='text-blue-400 cursor-pointer'>
                                    Reply
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
                                <span className='text-gray-500 flex gap-1'>
                                    123
                                    <span className='hidden md:inline'>
                                        {' '}
                                        Comments
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-auto self-start hover:bg-slate-100 p-2 rounded-full'>
                    <Image
                        src='/more.png'
                        alt='profile'
                        height={16}
                        width={16}
                        className='cursor-pointer h-4 w-4'
                    />
                </div>
            </div>
        </div>
    )
}

export default Comments
