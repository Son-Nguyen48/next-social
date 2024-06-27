import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24'>
            {/* LEFT  */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link className='font-bold text-xl text-blue-500' href='/'>
                    SOCIAL
                </Link>
            </div>
            {/* CENTER  */}
            <div className='hidden md:flex w-[50%] text-sm'>
                {/* LINK  */}
                <div className='flex gap-6 text-gray-600'>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image
                            src={'/home.png'}
                            alt='homepage'
                            width={16}
                            height={16}
                            className='w-4 h-4'
                        />
                        <span>HomePage</span>
                    </Link>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image
                            src={'/friends.png'}
                            alt='Friends'
                            width={16}
                            height={16}
                            className='w-4 h-4'
                        />
                        <span>Friends</span>
                    </Link>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image
                            src={'/stories.png'}
                            alt='stories'
                            width={16}
                            height={16}
                            className='w-4 h-4'
                        />
                        <span>Stories</span>
                    </Link>
                </div>
            </div>
            {/* RIGHT  */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
                <ClerkLoading>
                    <div
                        className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
                        role='status'
                    >
                        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                            Loading...
                        </span>
                    </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className='cursor-pointer flex items-center gap-6 text-sm'>
                            <Image
                                src='/people.png'
                                alt='people'
                                width={20}
                                height={20}
                            />
                            <Image
                                src='/messages.png'
                                alt='messages'
                                width={20}
                                height={20}
                            />
                            <Image
                                src='/notifications.png'
                                alt='notifications'
                                width={20}
                                height={20}
                            />
                            <UserButton />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <div className='flex items-center gap-2 text-sm'>
                            <Image
                                src='/noAvatar.png'
                                alt='noAvatar'
                                width={20}
                                height={20}
                            />
                            <Link href='/sign-in'>Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar
