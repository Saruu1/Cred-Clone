import React, { useState } from 'react'
import "./mobileScroll.css";
import ScreenText from './ScreenText';
const MobileScroll = () => {
    const scrollData = [
        {
            heading:"we've got your back.",
            description:"gain complete control over your credit card with CRED Protect. recieve category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time",
            mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png"
        },
        {
            heading:"begin your winning streak.",
            description:"use your CRED coins to participate in games and raffles to win the most exclusive awards and cashbacks on CRED. good luck.",
            mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png"
        },
        {
            heading:"for your eclectic taste.",
            description:"get access to the CRED Store. a member-exclusive selection of products and experiences at special prices that compliment your taste. this is the good life they speak of. ",
            mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png"
        },
        {
            heading:"more cash in your pockets.",
            description:"switch to CRED Rentpay and start paying rent with your credit card. this way you get upto 45 days of credit free period, more reward points and a happy landlord",
            mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png"
        }
    ]
    const [currentImg, setcurrentImg] = useState(0)
  return (
    <div className="max-width flex mobile-scroll">
        <div className="scroll-full-screen-wrapper">
            {scrollData.map((screen, i)=>(
            <div className="scroll-full-screen">
                <ScreenText screen={screen} i={i} setcurrentImg={setcurrentImg}/>
            </div>
            ))}
        </div>
        <div className="mobile-mockup-wrapper non-mobile">
            <div className="mobile-mockup">
                <div className="mobile-mockup-screen felx absolute-center">
                 <img src={scrollData[currentImg].mobile_img} alt="" className="mobile-screen-img slide-left"
                 key={scrollData[currentImg].mobile_img} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileScroll