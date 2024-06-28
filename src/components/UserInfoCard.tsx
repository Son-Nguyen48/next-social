import Image from 'next/image'
import Link from 'next/link'

const UserInfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm '>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Information</span>
                <Link href='/' className='text-blue-400 text-xs'>
                    See all
                </Link>
            </div>
            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                    <span className='text-lg text-black'>The Son Nguyen</span>
                    <span className='text-sm'>@ntsdev</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit voluptates eius fuga voluptatibus.
                </p>
                <div className='flex gap-2'>
                    <Image src='/map.png' alt='local' height={20} width={20} />
                    <span>
                        Living in <b>VietNam</b>
                    </span>
                </div>
                <div className='flex gap-2'>
                    <Image
                        src='/school.png'
                        alt='school'
                        height={20}
                        width={20}
                    />
                    <span>
                        Went to <b>Vinh Bao High School</b>
                    </span>
                </div>
                <div className='flex gap-2'>
                    <Image src='/work.png' alt='work' height={20} width={20} />
                    <span>
                        Work at <b>VMO Holding</b>
                    </span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Image
                            src='/link.png'
                            alt='link'
                            height={16}
                            width={16}
                        />
                        <Link
                            className='text-blue-400 text-xs'
                            href='https://finding-treasure-2.vercel.app/'
                        >
                            nts.dev
                        </Link>
                    </div>
                    <div className='flex gap-2'>
                        <Image
                            src='/date.png'
                            alt='date'
                            height={16}
                            width={16}
                        />
                        <span className='text-xs'>Joined November 2024</span>
                    </div>
                </div>
                <button className='bg-blue-400 text-white text-xs py-2 px-3 rounded-md'>
                    Following
                </button>
                <span className='text-red-300 self-end text-xs cursor-pointer'>
                    Block User
                </span>
            </div>
        </div>
    )
}

export default UserInfoCard
