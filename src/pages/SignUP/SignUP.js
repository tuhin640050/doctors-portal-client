import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUP = () => {
    // const{register} = useForm()
    // 
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Signup</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget password?</span></label>
                        
                    </div>
                    <input className='btn btn-accent w-full' value="SignUP" type="submit" />
                </form>
                <p>Already have an Account: <Link className='font-bold text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">Or</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUP;