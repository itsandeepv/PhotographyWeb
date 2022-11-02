import React from 'react'
import "./home.css"
import icon1 from "../assets/service/360_icon.webp"
import icon2 from "../assets/service/photo_icon.png"
import icon3 from "../assets/service/sold_icon.webp"
import img from "../assets/EastoaksPhotography.jpg"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import "./Login/login.css"
import cross from "../assets/close_icon.webp"

const data = [
  {
    name: "Kristen-Killer Williams",
    img: require("../assets/EastoaksPhotography.jpg"),
    review: "Jonathan is a true professional and really did an excellent job in a stressful situation with a home that wasn't quite ready for photos. I appreciate his dedication to taking great photos. THANK YOU!"
  },
  {
    name: "Kristen-Killer Williams",
    img: require("../assets/Untitleddesign.png"),
    review: "Jonathan is a true professional and really did an excellent job in a stressful situation with a home that wasn't quite ready for photos. I appreciate his dedication to taking great photos. THANK YOU!"
  },
  {
    name: "Nikki-RE/MAX Advantage Plus",
    img: require("../assets/Nikki_Ritter_6220_PRINTSIZE.jpg"),
    review: "I won't use anyone else other than 8710 for real estate photography!  The service and product provided is 100%, 100% of the time!"



  }



]



console.log(data);










function Section3() {
  



  const [open, setOpen] = React.useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  

  return (
    <div className='container my-1'>
      <div className='row shadow-sm my-4'>


        <div className='col-lg-4 border'>
          <div className="text-center service_item">
            <img src={icon2} alt="service_img" />
            <p className='ser_heading'>
              The highest quality Perfected HDR Photos
            </p>
            <p className='ser_price'>Prices starting at $119*</p>
            <button className='service_btn' > Learn More</button>
          </div>


        </div>

        <div className='col-lg-4 border'>
          <div className="text-center service_item">
            <img src={icon3} alt="service_img" />
            <p className='ser_heading'>
              Interactive 3D Tours
              powered by Matterport
            </p>
            <p className='ser_price'>Prices starting at $179*</p>
            <button className='service_btn' > Learn More
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M14 12l-4 4V8z" fill='#176969' /></svg>

            </button>

            <br />
            <button className='service_btn2' onClick={showModal} > SCHEDULE NOW</button>

          </div>


        </div>

        <div className='col-lg-4 border'>
          <div className="text-center service_item">
            <img src={icon1} alt="service_img" />
            <p className='ser_heading'>
              Drone HDR Perfected Photos
              and Video
            </p>
            <p className='ser_price'>Prices starting at $189*</p>
            <button className='service_btn' > Learn More</button>
          </div>


        </div>

        <div className='row d-flex  my-3 justify-content-center'>
          <div className="col-lg-10">
            <div className='row pt-3'>
              <div className='col-lg-4 text-center'>
                <div className='ser_line'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill='#176969' /></svg>
                  </span>
                  Easy, online scheduling

                </div>

              </div>
              <div className='col-lg-4 text-center'>
                <div className='ser_line'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill='#176969' /></svg>
                  </span>
                  Contact-less photo shoot
                </div>

              </div>
              <div className='col-lg-4 text-center'>
                <div className='ser_line'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill='#176969' /></svg>
                  </span>
                  24 hour turnaround
                </div>

              </div>

            </div>

          </div>


        </div>





        <div className='row my-2'>

          <div className='col d-flex justify-content-center align-items-center text-center'>
            <p style={{ fontSize: "14px", fontWeight: "300" }}>
              *Pricing is based on selected areas and subject to change
            </p>

          </div>
        </div>








      </div>








      <div className='row my-5'>
      
        <Slider {...settings}>
              {data.map((item, index) =>
        


          <div className='col-lg-4 p-1 d-flex' key={index}>
            <div className='shadow p-3'>

              <div className='name_data  d-flex align-items-center'>
                <div className="name_img " >
                  <img src={item.img} alt="img" />
                </div>
                <h5 className='pl-2'>
                  {item.name}
                </h5>

              </div>
              <div className='star_icon p-1'>

                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" fill="rgba(50,152,219,1)" /></svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" fill="rgba(50,152,219,1)" /></svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" fill="rgba(50,152,219,1)" /></svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" fill="rgba(50,152,219,1)" /></svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" fill="rgba(50,152,219,1)" /></svg>
                </span>
              </div>







              <div className="descr_text">
                {
                  item.review
                }


              </div>


            </div>



          </div>




          
          )}
          </Slider>

        
        </div>





      <Dialog open={open} onClose={handleClose} className="form_box m-1 p-6">


        <div className="row m-3 px-5 shadow_cus">
          <div className="col p-2 d-flex justify-content-center">
            <div className=" text-center p-2">
              <button onClick={handleClose} className="close_btn">
                <img src={cross} alt="close" />
              </button>

              <h2 className='mb-2'>New Order</h2>

              <form method='dialog' className='form-group'>
                <div  className='d-flex justify-content-start he_text '>PROPERTY ADDRESS</div>
                <input type="text" className="form_input my-3" placeholder="Enter Address" required />
                <div className='d-flex justify-content-start he_text'>SQUARE FEET (ADD UNFINISHED SQ FT IF INCLUDED IN SHOOT)</div>

                <select type="text" className=" form_input" required>
                  <option className='form_input' value="Choose square footage">Choose square footage</option>

                </select>

                <div className='my-2 d-flex justify-content-end'>  </div>
                <button onClick={handleClose} className="sub_btn mt-2">
                  GET PRICING & OPTIONS
                </button>



                <div className='mt-4 d-flex justify-content-center signup'> DON't HAVE AN ACCOUNT ? <a href="#">SIGN UP</a>  </div>

              </form>



            </div>
          </div>

        </div>





      </Dialog>






    </div>
  )
}

export default Section3
