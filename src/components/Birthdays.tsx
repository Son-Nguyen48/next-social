import Image from 'next/image'
import Link from 'next/link'

const Birthdays = () => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md'>
            <p className='text-gray-500 font-medium'>Birthdays</p>
            <div>
                <div className='flex items-center gap-4'>
                    <Image
                        src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/01/23/42cab7c4-d5a3-4a6f-ae18-d56111c973cb_cd03545b.jpg?itok=S6nAv316&v=1705986486'
                        alt='Profile'
                        height={40}
                        width={40}
                        className='h-10 w-10 rounded-full object-cover cursor-pointer'
                    />
                    <span className='font-medium'>Shin Hye Sun</span>
                    <button className='ml-auto bg-blue-500 p-2 rounded-md text-white text-sm'>
                        Celebrate
                    </button>
                </div>
            </div>
            <div className='gap-4 p-4 bg-slate-100 rounded-lg shadow-md flex items-center'>
                <Image
                    src='/gift.png'
                    alt='gift'
                    height={32}
                    width={32}
                    className='h-8 w-8 cursor-pointer'
                />
                <div>
                    <p>Upcoming Birthdays</p>
                    <Link className='text-gray-400' href='/'>
                        See other 16 have upcoming birthdays
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Birthdays
