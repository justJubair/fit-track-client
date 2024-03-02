'use client'
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Tooltip } from '@mui/material';
const FooterIcons = () => {
    return (
        <div className='space-x-4'>
            
            <Tooltip title="Youtube" arrow>
            <SubscriptionsRoundedIcon className='lg:text-3xl hover:cursor-pointer' />
            </Tooltip>
            <Tooltip title="Instragram" arrow>

            <InstagramIcon className='lg:text-3xl hover:cursor-pointer' />
            </Tooltip>
            <Tooltip title="Twitter" arrow>

            <TwitterIcon className='lg:text-3xl hover:cursor-pointer' />
            </Tooltip>
        </div>
    );
};

export default FooterIcons;