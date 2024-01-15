'use client'
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const FooterIcons = () => {
    return (
        <div className='space-x-4'>
            <FacebookRoundedIcon className='lg:text-3xl hover:cursor-pointer' />
            <SubscriptionsRoundedIcon className='lg:text-3xl hover:cursor-pointer' />
            <InstagramIcon className='lg:text-3xl hover:cursor-pointer' />
            <TwitterIcon className='lg:text-3xl hover:cursor-pointer' />
        </div>
    );
};

export default FooterIcons;