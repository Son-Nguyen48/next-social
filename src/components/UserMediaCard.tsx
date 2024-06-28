import Image from 'next/image'
import Link from 'next/link'

const UserMediaCard = ({ userId }: { userId: string }) => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm '>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Media</span>
                <Link href='/' className='text-blue-400 text-xs'>
                    See all
                </Link>
            </div>
            <div className='flex gap-4 justify-between flex-wrap'>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/14713994/pexels-photo-14713994.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/24609534/pexels-photo-24609534/free-photo-of-g-binh-minh-cafein-ca-phe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/26652842/pexels-photo-26652842/free-photo-of-g-anh-sang-d-ng-ph-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/18160123/pexels-photo-18160123/free-photo-of-dan-ba-mo-hinh-ch-p-nh-th-i-trang-ng-i-gi-n-n.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/25568891/pexels-photo-25568891/free-photo-of-th-i-trang-nh-ng-ng-i-dan-ba-t-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/26737199/pexels-photo-26737199/free-photo-of-thanh-ph-m-c-n-c-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/17152053/pexels-photo-17152053/free-photo-of-thanh-ph-m-c-con-song-du-l-ch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image
                        src='https://images.pexels.com/photos/25922360/pexels-photo-25922360/free-photo-of-bi-n-phong-c-nh-b-bi-n-n-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard
