import Service from "./Servicelist";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    return (

        <>

        
        <div className="flex py-20 bg-gray-50 flex-col items-center h-[200px] justify-center ">


<h3 className="text-4xl font-bold text-gray-600 ">Our Services</h3>
<div className="border-2 mt-2  border-orangeRed   mx-auto rounded-md w-[100px] "></div>

</div>







<section className=" bg-gray-50 rounded-tr-[200px]">
            <div className="  container py-6 mx-auto grid  gap-t-3  grid-cols-1    md:grid-cols-2 ">
                <div className=" bg-white   rounded-bl-[50px] " data-aos="fade-out">
                    <div className="left px-6 pt-6 md:pt-10 hover:scale-100 transition  duration-500  ">
                            <h4 className="text-darkBlue  py-3 text-3xl md:text-left text-center font-bold">What We Do</h4>


                        <p className="text-[18px]  text-center md:text-left pb-6 text-greyBlack leading-loose  font-md  ">
                        In a world where excellence is the standard, we rise above and beyond. Our mission is to transform your aspirations into reality, delivering unparalleled solutions that exceed expectations. With unwavering dedication and a commitment to innovation, we're here to guide you on your journey towards success. 
                        Explore our services and experience a new dimension of excellence today.  </p>



                    </div>



                </div>


                <div className="  ">
                    <img src="/ourservices.jpg" alt="vita" className="w-full mt-4 md:mt-0 rounded-tr-[100px] " data-aos="slide-up" />





                </div>


            </div>


        </section>



            {/* About Hero */}
            {/* bg-gradient-to-r from-lightBlue to-darkBlue  */}
{/* 
            <div className="   py-4 w-100 " >
                <div className=" container py-2 mx-auto px-6" >
                    <div className="   grid  gap-3 grid-cols-1    md:grid-cols-2 pt-4 items-center   ">

                        <div className="left py-2  " data-aos="slide-right">

                            <h2 className="text-greyBlack font-bold pb-6 text-4xl"> What We Do
                            </h2>

                            <p className="text-[18px]  border-orangeRed rounded-md border-l-2  text-greyBlack  ps-3  font-md pt-4  ">In a world where excellence is the standard, we rise above and beyond. Our mission is to transform your aspirations into reality, delivering unparalleled solutions that exceed expectations. With unwavering dedication and a commitment to innovation, we're here to guide you on your journey towards success. Explore our services and experience a new dimension of excellence today</p>
                            <div className="border-2  mt-2   w-[150px] "></div>


                        </div>

                        <div className="borderst right  ">
                            <img src="/ourservices.jpg" alt="vita" data-aos="zoom-slide-up" className="w-100 scale-130  md:scale-160   md:py-20 " />




                        </div>



                    </div>






                </div>


            </div> */}





            <section className="">
                <div className="  container py-6 md:pt-0 md:pb-6 mx-auto  ">


                    <div className=" rounded-md grid py-3 gap-5 grid-cols-1    md:grid-cols-2">
                        {Service.map((items, index) => {
                            return (
                                <div className="left p-6 hover:scale-105 transition md:hover:bg-white   duration-500 hover:bg-blue-50  bg-white" key={index} >
                                    <span className="flex flex-row justify-center p-3  items-center md:bg-blue-100  md:justify-start "><img src={items.pics} alt="icon" className=" w-[70px] h-[70px] p-2  bg-white shadow-lg rounded-[100%] " />
                                        <h4 className="text-darkBlue text-l ps-3 font-bold">{items.Title}</h4></span>


                                    <p className=" text-greyBlack text-[18px] text-center text-truncate font-md pt-6 md:text-left">{items.Info}
                                    </p>



                                </div>

                            )
                        })}


                    </div>



                </div>


            </section>



            

        </>
    )
}


export default Services;