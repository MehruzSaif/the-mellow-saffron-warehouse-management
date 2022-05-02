
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';


const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    
    }

    return (
        <div className='register-form'>
            <h1 style={{ textAlign: 'center' }} className='my-5 register-title'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />

                <input type="email" name="email" id="1" placeholder='Email Address' required />

                <input type="password" name="password" id="2" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                {/* <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms">Accept Porai Mama Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Porai Mama Terms and Conditions</label>

                <input
                    disabled={!agree}
                    className='register-btn mt-3'
                    type="submit"
                    value="Register" />
            </form>

            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;