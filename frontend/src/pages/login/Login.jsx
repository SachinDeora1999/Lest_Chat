import React from 'react';
import './login.css';

function Login() {
    return (
        <div className='content'>
            <div className="content2">
                <h1 >Login <span >  ChatApp</span></h1>
                <form>
                    <div>
                        <label>
                            <samp >Username</samp>
                        </label>
                        <input type='text' placeholder='Enter the Username' />
                    </div>

                    <div>
                        <label>
                            <samp >Passwprd</samp>

                        </label>
                        <input type='password' placeholder='Enter the Passwod' />
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>

                    <a href='#'>
                        {"Don't"} have an account?
                    </a>



                </form>
            </div >
        </div >


    )
};

export default Login;
