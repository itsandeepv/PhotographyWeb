import React from "react"
// import react from "React"
import logo from "../../assets/service/logo.png"
import "./footer.css"

function Footer() {
    return (
        <>



            <div className="footer">

                <div className="container py-4">
                    <div className="row p-2">

                        <div className="col-lg-1 footer_logo">
                            <div className="footer_logo pt-3">
                                <img src={logo} alt="logo" />

                            </div>

                        </div>
                        <div className="col-lg-2 col-md-6 ">
                            <div className="footer_link p-2">
                                <ul className="list-unstyled">
                                    <li>  <a href="#">PHOTOGRAPHY</a>  </li>
                                    <li>  <a href="#">INTERACTION 3D</a>  </li>
                                    <li>  <a href="#">DRONE</a>  </li>
                                    <li>  <a href="#">PRICING</a>  </li>

                                </ul>
                            </div>

                        </div>


                        <div className="col-lg-2 col-md-6">
                            <div className="footer_link p-2">
                                <ul className="list-unstyled">
                                    <li>  <a href="#">SCHEDULE NOW</a>  </li>
                                    <li>  <a href="#">FAQS </a>  </li>
                                    <li>  <a href="#">ABOUT US</a>  </li>
                                    <li>  <a href="#">CUSTOMER SERVICE</a>  </li>

                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-7  d-flex social_icon">
                            <div className="footer_social p-2">

                                <ul className="list-unstyled d-flex gap-1">
                                    <li>  <a href="#">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z" /><path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z" fill="rgba(255,255,255,1)" /></svg>                                    </a>  </li>
                                    <li>  <a href="#">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="rgba(255,255,255,1)" /></svg>

                                    </a>  </li>
                                    <li>  <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" fill="rgba(255,255,255,1)" /></svg>                                    </a>  </li>
                                    <li>  <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z" /><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" fill="rgba(255,255,255,1)" /></svg>                                    </a>  </li>



                                    <li>  <a href="#">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z" /><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="rgba(255,255,255,1)" /></svg>

                                    </a> </li>
                                    <li>  <a href="#">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.739 3.739 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.861 2.861 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.988 9.988 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903z" fill="rgba(255,255,255,1)" /></svg>
                                    </a> </li>



                                </ul>



                            </div>

                        </div>
                        <div className="row py-4  d-flex justify-content-center">

                            <div className="col-lg-10 p-2 ">
                                <p className="copyright_text">© 2018-2021 8710 photography. All Right Reserved &nbsp; l &nbsp; <a routerlinkactive="active">Terms &amp; Conditions</a></p>
                            </div>


                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}





export default Footer