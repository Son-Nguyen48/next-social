import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import SponsoredAds from './SponsoredAds'

const RightMenu = ({ userId }: { userId?: string }) => {
    return (
        <div className='flex flex-col gap-6'>
            {/* FRIEND REQUESTS  */}
            <FriendRequests />
            {/* BIRTHDAYS  */}
            <Birthdays />
            {/* SPONSORED ADS  */}
            <SponsoredAds size='md' />
        </div>
    )
}

export default RightMenu
