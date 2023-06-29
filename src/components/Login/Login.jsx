import { GoogleButton } from 'react-google-button'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext';
import { auth } from '../../firebase';
import OtpInput from 'otp-input-react'
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber} from "firebase/auth";


const Login = () => {


    const navigate = useNavigate();
    const [otp, setOtp] = useState();
    const [ph, setph] = useState();
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const {googleSignIn, user ,setUser} = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/');
        }
    }, [user]);


    function onCaptchVerify(e) {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignUp()
                },
                'expired-callback': () => {

                }
            }, auth);
        }
    }

    const onOTPVerify = () => {
        setLoading(true)
        console.log("onOTPVerify");
            setLoading(false);
            navigate('/');
       
       
    };

    function onSignUp(e) {
        e.preventDefault();
        setLoading(true)
        onCaptchVerify()

        const formatPh = '+' + ph
        const appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
               
                setLoading(false)
                setShowOTP(true)
            }).catch((error) => {
                console.log(error);
                setLoading(false)
            });
    }


    return (
        <>
            <section className="h-100 mt-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div id="recaptcha-container"></div>
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid"
                                alt="Phone image"
                            />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form >

                                {
                                    showOTP ? (
                                        <>
                                            <div className='text-emerald-500 w-fit p-4 mx-auto  rounded-full'>
                                                <BsFillShieldLockFill size={30} />
                                            </div>
                                            <label htmlFor='otp' className=' font-bold text-2xl  text-center mb-4'>Enter your OTP</label>
                                            <OtpInput onChange={setOtp} value={otp} OTPLength={6} otpType="number" disabled={false} autoFocus={true}></OtpInput>
                                            <button
                                                onClick={onOTPVerify}
                                                className="btn btn-primary btn-lg btn-block mt-4"
                                            >
                                                {loading && <div className="spinner-border spinner-grow-sm me-2" role="status"></div>}
                                                Verify OTP
                                            </button>

                                        </>
                                    )
                                        :
                                        (
                                            <>
                                                <div className='text-emerald-500 w-fit mb-2 mx-auto  rounded-full'>
                                                    <BsTelephoneFill className='bg-primary p-2 rounded-5 text-white' size={30} />
                                                </div>
                                                <label htmlFor='ph' className=' font-bold text-2xl  text-center mb-4'>Verify your phone number</label>

                                                <PhoneInput country={"in"} value={ph} onChange={setph} />

                                                <button
                                                    onClick={onSignUp}
                                                    className="btn btn-primary btn-lg btn-block mt-4 d-flex justify-content-center align-items-center"
                                                >
                                                    {loading && <div className="spinner-border spinner-grow-sm me-2" role="status"></div>}
                                                    Send code via SMS
                                                </button>

                                            </>
                                        )
                                }





                                <div className="divider d-flex align-items-center my-4 mt-5 mb-5">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <GoogleButton onClick={handleGoogleSignIn} />
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

