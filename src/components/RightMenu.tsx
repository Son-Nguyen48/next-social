import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import SponsoredAds from './SponsoredAds'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

const RightMenu = ({ userId }: { userId?: string }) => {
    return (
        <div className='flex flex-col gap-6'>
            {userId ? (
                <>
                    <UserInfoCard userId={userId} />
                    <UserMediaCard userId={userId} />
                </>
            ) : null}
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
