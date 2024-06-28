import Link from 'next/link'
import ProfileCard from './ProfileCard'
import Image from 'next/image'
import SponsoredAds from './SponsoredAds'

const LeftMenu = ({ type }: { type: 'home' | 'profile' }) => {
    return (
        <div className='flex flex-col gap-6'>
            {type === 'home' && <ProfileCard />}
            <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
                <Link
                    href='/mypost'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/posts.png'
                        alt='posts'
                        height={20}
                        width={20}
                    />
                    <span>My Posts</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/activity'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/activity.png'
                        alt='activity'
                        height={20}
                        width={20}
                    />
                    <span>Activity</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/marketplace'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/market.png'
                        alt='market'
                        height={20}
                        width={20}
                    />
                    <span>Marketplace</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/events'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/events.png'
                        alt='events'
                        height={20}
                        width={20}
                    />
                    <span>Events</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/albums'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/albums.png'
                        alt='albums'
                        height={20}
                        width={20}
                    />
                    <span>Albums</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/videos'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/videos.png'
                        alt='videos'
                        height={20}
                        width={20}
                    />
                    <span>Videos</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/news'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image src='/news.png' alt='news' height={20} width={20} />
                    <span>News</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/courses'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/courses.png'
                        alt='courses'
                        height={20}
                        width={20}
                    />
                    <span>Courses</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/lists'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/lists.png'
                        alt='lists'
                        height={20}
                        width={20}
                    />
                    <span>Lists</span>
                </Link>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                <Link
                    href='/settings'
                    className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'
                >
                    <Image
                        src='/settings.png'
                        alt='settings'
                        height={20}
                        width={20}
                    />
                    <span>Settings</span>
                </Link>
            </div>
            <SponsoredAds size='sm' />
        </div>
    )
}

export default LeftMenu
