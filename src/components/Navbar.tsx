import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24'>
            {/* LEFT  */}
            <div>
                <Link className='font-bold text-xl text-blue-500' href='/'>
                    SOCIAL
                </Link>
            </div>
            {/* CENTER  */}
            <div className='hidden md:flex'>
                {/* LINK  */}
                <Link href='/' className='flex gap-2'>
                    <Image
                        src='./home.png'
                        alt='homepage'
                        width={16}
                        height={16}
                    />
                </Link>
            </div>
            {/* RIGHT  */}
            <div>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar
