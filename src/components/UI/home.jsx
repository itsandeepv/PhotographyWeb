import React from 'react'
import "./home.css"
import logo from "../assets/service/logo.png"
import img1 from "../assets/01.jpg"
import img3 from "../assets/02.jpg"
import img2 from "../assets/SP-Trading-Post-Trail-South-Afton-MN-24.jpg"
import img4 from "../assets/SP-08.jpg"
import img5 from "../assets/01.jpg"
import Photo from './photo'
import Section3 from './section3'
import Footer from './footer/Footer'
import Login from "./Login/Login"
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import "./Login/login.css"
import cross from "../assets/close_icon.webp"
import Shedule from "./Login/Login"

function Home() {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const toggelFun = () => {

        let element = document.querySelector("#toggele");

        element.classList.toggle("tooggelClass");
        console.log("class lagii ")
    }





    return (
        <div>
            <div className="nav_bar  text-light">
                <div className='container '>
                    <div className='pt-2 '>


                        <div className='toggle_btn' onClick={() => toggelFun()}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" /></svg>
                            </span>
                        </div>


                        <div className="img_sizeB">
                            <img src={logo} alt="logo" />
                        </div>

                        <div id="toggele" className='row nav_div d-flex justify-content-between align-items-center'>




                            <div className='col-lg-1  mobile_padd'>
                                <div className="img_size">
                                    <img src={logo} alt="logo" />
                                </div>




                            </div>






                            <Dialog open={open} onClose={handleClose} className="form_box m-1 p-6">


                                <div className="row m-3 px-5 shadow_cus">
                                    <div className="col p-2 d-flex justify-content-center">
                                        <div className=" text-center p-2">
                                            <button onClick={handleClose} className="close_btn">
                                                <img src={cross} alt="close" />
                                            </button>

                                            <h2 className='mb-2'>Log In</h2>

                                            <form method='dialog' className='form-group'>

                                                <input type="text" className="form_input mt-3" placeholder="Enter Your Username&Email" required />

                                                <input type="text" className=" form_input my-3" placeholder="Enter Password" required />

                                                <div className='my-2 d-flex justify-content-end'> Forgot Password  </div>
                                                <button onClick={handleClose} className="sub_btn mt-2">
                                                    LOG IN TO ACCOUNT
                                                </button>



                                                <div className='mt-4 d-flex justify-content-center signup'> DON't HAVE AN ACCOUNT ? <a href="#">SIGN UP</a>  </div>







                                            </form>



                                        </div>
                                    </div>

                                </div>





                            </Dialog>














                            <div className="col-lg-7  p-1  menu_mobile ">

                                <div className=' menu_item '>
                                    <ul className='list-unstyled d-flex '>
                                        <li><a href="#">Photography  </a>    </li>
                                        <li> <a href="#">Interactive 3D </a>     </li>
                                        <li> <a href="#">Drone  </a>    </li>
                                        <li> <a href="#">Gellery  </a>    </li>
                                        <li> <a href="#">Pricing  </a>    </li>
                                        <li> <a href="#">Schedule  Now </a>     </li>


                                    </ul>

                                </div>



                            </div>


                            <div className='col-lg-4 col-sm-6 pt-2  mdScrenn menu_mobile'>

                                <ul className='list-unstyled  d-flex link_item'>



                                    <li className='ip_add after_ip  '>
                                        <a href='#'> 651.764.8710  <sapn className="pl-2">|</sapn></a>
                                    </li>

                                    <li className='ip_add'>
                                        <a href='#'> Contact Us </a>
                                    </li>

                                    <li className='btn_a'>
                                        <button className='btn_log text-decoration-none' onClick={handleClickOpen}>LOGIN</button>
                                    </li>

                                </ul>



                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <section className='back_img'>

                <div className='container'>

                    <div className='box_sizing'>
                        <div className='row hero-data'>
                            <div className='col'>
                                <p>Elevate your listings
                                    with the highest quality
                                    professional real estate photography.</p>
                            </div>

                        </div>

                    </div>
                </div>




            </section>

            <Photo />
            <div className='row'>

                <div className='col d-flex justify-content-center'>
                    <button className='btn_gellery'>BROWSER GELLERY</button>

                </div>
            </div>




            <Section3 />

            <Footer />



























        </div >
    )
}

export default Home
