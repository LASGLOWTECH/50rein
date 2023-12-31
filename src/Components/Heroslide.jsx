
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Creatives from './creative';
import { useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';




const CarouselList = () => {

  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>


      <Carousel responsive={responsive}
        customTransition="all .5s"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}

      >


        {Creatives.map((creative, index) => {
          return (
<div className="-z-50">
<div className=' bg-cover h-[100vh]   bg-center' key={index} data-aos-duration="1500" data-aos="fade-down-right"
              style=
              {{ zIndex:"-999",
                backgroundImage: `url(${creative.Picture})`,
              
              }}>

              <div className='overlay relative w-full h-full backdrop-brightness-50   flex justify-center items-center flex-col '>
                <div className='w-[100px] mb-6 rounded-lg h-[3px] bg-orangeRed' data-aos="slide-right" />
                <h1 className='text-4xl md:text-7xl  max-width-lg text-center shadow-md font-bold tracking-wider text-white ' data-aos-duration="1500" data-aos="zoom-in-down">{creative.Title}</h1>
                <p className='px-2 pt-6 text-[18px] max-w-2xl text-white text-center shadow-sm font-normal ' data-aos-duration="1500" data-aos="slide-down">{creative.Subtext}</p>
              <a href="/About" >  <button className='bg-orangeRed px-6  mt-6 py-3 rounded-md  hover:bg-lightBlue transition duration-500 ease-in-out text-white   text-base text-lighter ' >Read More</button></a>
         
              </div>

             

            </div>
</div>
            


          )

        })}




      </Carousel>






    </>
  )
}

export default CarouselList;