import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import cross from "../../assets/close_icon.webp"

const App = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (

        <Dialog open={open} onClose={handleClose} className="form_box m-1 p-6">


            <div className="row m-3 px-5 shadow_cus">
                <div className="col p-2 d-flex justify-content-center">
                    <div className=" text-center p-2">
                        <button onClick={handleClose} className="close_btn">
                            <img src={cross} alt="close" />
                        </button>

                        <h2 className='mb-2'>New Order</h2>

                        <form method='dialog' className='form-group'>
                            <label>PROPERTY ADDRESS</label>
                            <input type="text" className="form_input my-3" placeholder="Enter Address" required />
                            <label>SQUARE FEET (ADD UNFINISHED SQ FT IF INCLUDED IN SHOOT)</label>

                            <select type="text" className=" form_input" required>
                                <option value="Choose square footage">Choose square footage</option>
                            
                            </select>

                            <div className='my-2 d-flex justify-content-end'> Forgot Password  </div>
                            <button onClick={handleClose} className="sub_btn mt-2">
                                GET PRICING & OPTIONS
                            </button>



                            <div className='mt-4 d-flex justify-content-center signup'> DON't HAVE AN ACCOUNT ? <a href="#">SIGN UP</a>  </div>

          </form>



                    </div>
                </div>

            </div>


            <DialogActions>

            </DialogActions>




        </Dialog>



    );
}

export default App;


