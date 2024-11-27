import React from 'react'
// import nikhil from './assests/nikhil.jpg';
import nikhil from '../assets/nikhil.jpg';

const Hero = () => {
  return (
    <>
      <div className='bg-[#212E40] text-white h-[39rem]' id='hero'>
        <div className="img flex justify-center "> 
            <img src={nikhil} alt="" className='rounded-full border-[#84DAFF] border-4 mt-10 h-52 w-52' />
        </div>

        <div className="heading  mt-5">
            <h1 className='text-[2em]'>Hello I'm <b className='text-[#84DAFF]'> NIkhil Waghade,</b> <br />
            Full-Stack Developer</h1>

            <div className="paragrap lg:w-[30rem] l-[33rem] mt-5 text-lg lg:ml-[33rem]">
            <p className='text-[#8EA1AE]'> I am a Full Stack Developer With extensive Knowledge and Proficiency In Javascript , Javascript rest Framework Restful Api, React js, Redux, Html, Css and Strong Skill Ability in Writing Clean And Efficient Codding.</p>
        </div>

        </div>
       
      </div>
    </>
  )
}

export default Hero ;