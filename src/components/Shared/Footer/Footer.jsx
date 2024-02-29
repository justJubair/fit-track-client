import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="px-4 lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 lg:grid-cols-5 space-y-4 md:space-y-0">
        <div className="space-y-3">
          <Typography
            component="h1"
            className="text-[14px] font-semibold hover:cursor-pointer hover:underline "
          >
            GIFT CARDS
          </Typography>
          <Typography
            component="p"
            className="text-[14px] font-semibold hover:cursor-pointer hover:underline"
          >
            FIND A STORE
          </Typography>
          <Typography
            component="p"
            className="text-[14px] font-semibold hover:cursor-pointer hover:underline"
          >
            BECOME A MEMBER
          </Typography>
          <Typography
            component="p"
            className="text-[14px] font-semibold hover:cursor-pointer hover:underline"
          >
            FitTrack X NBA
          </Typography>
          <Typography
            component="p"
            className="text-[14px] font-semibold hover:cursor-pointer hover:underline"
          >
            FitTrack JOURNAL
          </Typography>
          <Typography
            component="p"
            className="text-[14px] font-semibold hover:cursor-pointer hover:underline"
          >
            SEND US FEEDBACK
          </Typography>
        </div>
        {/* for Large device */}
        <div className="space-y-3 hidden md:block">
          <Typography component="h1" className="text-[14px] font-semibold">
            GET HELP
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Order Status
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Shipping and Delivery
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Returns
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Order Cancellation
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Payment Options
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Gift Card Balance
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Contact Us
          </Typography>
        </div>
        {/* for mobile */}
        <div className="space-y-3  block md:hidden">
          <Accordion
            className="border"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-[14px] font-semibold"
            >
              GET HELP
            </AccordionSummary>
            <AccordionDetails className="space-y-4">
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Order Status
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Shipping and Delivery
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold "
              >
                Returns
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Order Cancellation
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Payment Options
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Gift Card Balance
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Contact Us
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* For Large Device */}
        <div className="space-y-3  hidden md:block">
          <Typography component="h1" className="text-[14px] font-semibold">
            ABOUT FIT-TRACK
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            News
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            {" "}
            Careers
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Investors
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Purpose
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Sustainability
          </Typography>
        </div>
        {/* For Mobile */}
        <div className="space-y-3  block md:hidden">
          <Accordion
            className="border"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-[14px] font-semibold"
            >
              ABOUT FIT-TRACK
            </AccordionSummary>
            <AccordionDetails className="space-y-4">
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                News
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                {" "}
                Careers
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Investors
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Purpose
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Sustainability
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* For Large Device */}
        <div className="space-y-3  hidden md:block">
          <Typography component="h1" className="text-[14px] font-semibold">
            PROMOTIONS & DISCOUNTS
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Student
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            {" "}
            Military
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Teacher
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            First Responders & Medical Professionals
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Birthday
          </Typography>
        </div>
        {/* For Mobile */}
        <div className="space-y-3  block md:hidden">
          <Accordion
            className="border"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-[14px] font-semibold"
            >
              PROMOTIONS & DISCOUNTS
            </AccordionSummary>
            <AccordionDetails className="space-y-4">
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Student
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                {" "}
                Military
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Teacher
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                First Responders & Medical Professionals
              </Typography>
              <Typography
                component="p"
                className="text-[12px] text-[#7e7e7e] font-semibold"
              >
                Birthday
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="space-y-3 py-4 md:py-0 lg:text-center">
          <FooterIcons />
        </div>
      </div>
      <div className="px-4 lg:w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row gap-7 justify-end py-4">
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Guides
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            {" "}
            Terms of Sale
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            Terms of Use
          </Typography>
          <Typography
            component="p"
            className="text-[12px] text-[#7e7e7e] font-semibold hover:cursor-pointer hover:underline"
          >
            FitTrack Privacy Policy
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex gap-4 items-center">
            <Typography component="h1" className="text-[14px] font-semibold">
              Bangladesh
            </Typography>
            <Typography
              component="p"
              className="text-[12px] text-[#7e7e7e] font-semibold"
            >
              © 2024 Fit-Track, All Rights Reserved
            </Typography>
          </div>
          <div>
            <Typography
              component="p"
              className="text-[12px] text-[#7e7e7e] font-semibold"
            >
              CA Supply Chains Act
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
