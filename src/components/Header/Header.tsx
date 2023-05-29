import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import './Header.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 486,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4
};

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [haveAccount, setHaveAccount] = React.useState(true)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAccount = () => {
        setHaveAccount((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <header className='header'>
            <div className="header-bar d-f jc-sb align-center">
                <div className="header-bar-nav d-f align-center">
                    <div className="header-logo">
                        <Link to='/'><img src="images/logo.png" alt="logo" /></Link>
                    </div>
                    <nav>
                        <ul className="header-nav-list d-f">
                            <li className="nav-list-item"><Link to="about">About us</Link></li>
                            <li className="nav-list-item"><Link to="courses">Courses</Link></li>
                            <li className="nav-list-item"><Link to="events">Events</Link></li>
                            <li className="nav-list-item"><Link to="blog">Blog</Link></li>
                            <li className="nav-list-item"><Link to="contacts">Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-bar-actions d-f">
                    <button className="bar-actions-consultation">Get consultation</button>
                    <button className="bar-actions-login" onClick={handleOpen}>Log in / Register</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <button className='sign-close-btn' onClick={handleClose}><img src="images/cross.png" alt="cross" /></button>
                            <h3 className="sign-title">{haveAccount ? "Sign in" : "Sign up"}</h3>
                            <div className="sign-subtitle">
                                {haveAccount ? "Sign in to your account using email and password provided during registration."
                                    : "Registration takes less than a minute but gives you full control over your studying."
                                }
                            </div>
                            <form action="" className='sign-fm'>
                                <div className={haveAccount ? "d-n" : "input-bl"}>
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" name='userName' id= "userName" placeholder='Your full name' />
                                </div>
                                <div className="input-bl">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder='Your working email' />
                                </div>
                                <div className="input-bl">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder='************' />
                                </div>
                                <div className={haveAccount ? "d-n" : "input-bl"}>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder='************' />
                                </div>
                                <div className='d-f jc-sb align-center'>
                                    <div className="keep-bl d-f align-center">
                                        <input type="checkbox" name="keep" id="keep" />
                                        <label htmlFor="keep">{haveAccount ? "Keep me signed in" : "Remember me"} </label>
                                    </div>
                                    <button className='forgot-btn'>Forgot password?</button>
                                </div>
                                <button className='sign-fm-btn'>{haveAccount ? "Sign in" : "Sign up"}</button>
                            </form>
                            <div className="sign-account d-f">
                                <div className="sign-account-title">
                                    {haveAccount ? "Don't have an account?" : "Already have an account?"}  
                                </div>
                                <button className="sign-account-btn" onClick={handleAccount}>{haveAccount ? "Sign in" : "Sign up"}</button>
                            </div>
                            <div className="sign-social">
                                <div className="sign-social-title">Or sign in with</div>
                                <div className="sign-social-box d-f align-center">
                                    <div><img src="images/social1.png" alt="social1" /></div>
                                    <div><img src="images/social7.png" alt="social7" /></div>
                                    <div><img src="images/social4.png" alt="social4" /></div>
                                    <div><img src="images/social6.png" alt="social1" /></div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </header>
    )
}

export default Header