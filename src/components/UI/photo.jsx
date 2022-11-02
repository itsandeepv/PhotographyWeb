import React from 'react'
 import "./home.css"
import "./photo.css"
import logo from "../assets/service/logo.png"
import img1 from "../assets/01.jpg"
import img3 from "../assets/02.jpg"
import img2 from "../assets/SP-Trading-Post-Trail-South-Afton-MN-24.jpg"
import img4 from "../assets/SP-08.jpg"
import img5 from "../assets/01.jpg"





function Photo() {
    return (
        <div>
            <section className=''>
                <div className='row mt-4'>
                    <div className='col text-center d-flex justify-content-center'>
                        <div className='head_line'>
                            Everything you need to
                            sell your listings.
                        </div>

                    </div>

                    <div className=''>
                        <div className='img_section_main'>


                            <div className='img_div'>

                                <div className="img_box">

                                    <img src={img1}></img>
                                </div>
                                <div className="img_box">

                                    <img src={img3}></img>

                                </div>


                            </div>




                            <div className='img_div'>
                                <div className='img_box2'>
                                    <img src={img2}></img>


                                </div>

                                <div className='img_box2'>
                                    <img src={img3} className="img3"></img>


                                </div>

                            </div>












                            <div className='img_div'>

                                <img src={img4} className="img_center2"></img>

                            </div>









                            <div className='img_div'>
                                <div className="img_box">

                                    <img src={img1}></img>
                                </div>
                                <div className="img_box">

                                    <img src={img3}></img>
                                </div>


                            </div>
                            <div className='img_div'>
                                <div className='img_box2'>

                                    <img src={img2} className="img3"></img>
                                </div>

                                <div className='img_box2'>

                                    <img src={img2}></img>
                                </div>

                            </div>



                        </div>




                    </div>






                </div>


            </section>


        </div>
    )
}

export default Photo