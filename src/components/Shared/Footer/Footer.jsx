
import { Typography } from '@mui/material';
import FooterIcons from './FooterIcons';


const Footer = () => {

    return (
        <div className='bg-black text-white py-10'>
            <div className='w-4/5 mx-auto grid grid-cols-5'>
                <div className='space-y-3'>
                    <Typography component="h1" className='text-[14px] font-semibold' >GIFT CARDS</Typography>
                    <Typography component="p" className='text-[14px] font-semibold' >FIND A STORE</Typography>
                    <Typography component="p" className='text-[14px] font-semibold'>BECOME A MEMBER</Typography>
                    <Typography component="p" className='text-[14px] font-semibold'>NIKE X NBA</Typography>
                    <Typography component="p" className='text-[14px] font-semibold'>NIKE JOURNAL</Typography>
                    <Typography component="p" className='text-[14px] font-semibold'>SEND US FEEDBACK</Typography>
                </div>
                <div className='space-y-3'>
                    <Typography component="h1" className='text-[14px] font-semibold' >GET HELP</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold' >Order Status</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Shipping and Delivery</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Returns</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Order Cancellation</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Payment Options</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Gift Card Balance</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Contact Us</Typography>
                </div>
                <div className='space-y-3'>
                    <Typography component="h1" className='text-[14px] font-semibold' >ABOUT FIT-TRACK</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold' >News</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'> Careers</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Investors</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Purpose</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Sustainability</Typography>
                </div>
                <div className='space-y-3'>
                    <Typography component="h1" className='text-[14px] font-semibold' >PROMOTIONS & DISCOUNTS</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold' >Student</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'> Military</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Teacher</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>First Responders & Medical Professionals</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Birthday</Typography>
                </div>
                <div className='space-y-3  text-center'>
                    <FooterIcons />
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
                <div className='flex gap-7 justify-end py-4'>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold' >Guides</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'> Terms of Sale</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Terms of Use</Typography>
                    <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>Nike Privacy Policy</Typography>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4 items-center'>
                        <Typography component="h1" className='text-[14px] font-semibold' >Bangladesh</Typography>
                        <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>© 2024 Fit-Track,  All Rights Reserved</Typography>
                    </div>
                    <div>
                        <Typography component="p" className='text-[12px] text-[#7e7e7e] font-semibold'>CA Supply Chains Act</Typography>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;