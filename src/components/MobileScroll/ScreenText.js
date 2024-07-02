import React from 'react'
import { useEffect, useState, useRef } from 'react'

const ScreenText = ({screen, setcurrentImg, i}) => {
    const [showAnimation, setshowAnimation] = useState(false)
    const ref = useRef(null)
    const toggleAnimation = (e)=>{
        if(e[0].isIntersecting){
            setshowAnimation(true)
            setcurrentImg(i)
        }
    }
    const options = {
        root : null,
        rootMargin:"0px",
        threshold:0.6
    }
    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options)
        
            if(ref.current){
                observer.observe(ref.current);
            }
        
        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        }
    })
    
  return (
    <div className={`screen-text ${showAnimation? "text-visible" :""}`} ref={ref}>
        <div className="screen-heading">{screen.heading}</div>
        <div className="mobile-mockup-wrapper only-mobile">
            <div className="mobile-mockup">
                <div className="mobile-mockup-screen felx absolute-center">
                 <img src={screen.mobile_img} alt="" className="mobile-screen-img" />
                </div>
            </div>
        </div>
        <div className="screen-description">{screen.description}</div>
    </div>
  )
}

export default ScreenText