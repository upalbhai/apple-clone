import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
const Hero = () => {
    const [videoSrc,setVideoSrc]=useState(
        window.innerWidth<720 ? smallHeroVideo :heroVideo
    )
    const handleSetVideoSrc = ()=>{
        if(window.innerWidth<760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',handleSetVideoSrc);
        return ()=>{
            window.removeEventListener('resize',
                handleSetVideoSrc
            )
        }
    },[])
    useGSAP(()=>{
        gsap.to('#hero',{opacity:1,delay:2})
        gsap.to('#cta',{opacity:1,delay:2,y:-50})
    },[])
  return (
    <section className='w-full nav-height bg-black'>
      <div className='h-5/6 w-full flex-center flex-col ' >
        <p id="hero" className='hero-title' >iPhone 15 Pro</p>
      
      <div className="md:w-10/12 w-9/12" >
        <video autoPlay muted playsInline={true} key={heroVideo}>
            <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
      <div id="cta" 
      className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="bg-blue p-1 rounded-lg" >Buy</a>
        <p className="fonst-normal text-xl" >From ₹1,50,000</p>
      </div>
      </div>
    </section>
  )
}

export default Hero
