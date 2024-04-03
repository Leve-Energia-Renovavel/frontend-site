"use client"
import dynamic from 'next/dynamic';
import ProfileBanner from '../../pages/components/banners/profile-banner/ProfileBanner';
const ProfileMain = dynamic(() => import('../../pages/components/profile/ProfileMain'), { ssr: false });

export default function Profile() {
    return (
        <>
            <ProfileBanner />
            <ProfileMain />
        </>
    );
}