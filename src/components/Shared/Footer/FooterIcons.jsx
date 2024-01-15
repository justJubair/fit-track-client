'use client'
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const FooterIcons = () => {
    return (
        <div className='space-x-4'>
            <FacebookRoundedIcon className='text-4xl' />
            <SubscriptionsRoundedIcon className='text-4xl' />
            <InstagramIcon className='text-4xl' />
            <TwitterIcon className='text-4xl' />
        </div>
    );
};

export default FooterIcons;