import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let singUpError;

  if(googleError || updateError){
    singUpError = <p className='text-red-500'>{googleError?.message || updateError?.message} </p>
  }

  if( loading || googleLoading || updating){
    return <button className="btn btn-success text-xl loading container mx-auto flex justify-center items-center w-48 mt-40">loading</button>

  }

  if (googleUser) {
    console.log(googleUser)
  }

  const onSubmit = async data => {
  await createUserWithEmailAndPassword(data.email, data.password);
  await updateProfile({ displayName: data.name });
  console.log('update done');
  navigate('/services');

  }
    return (
        <div className='flex justify-center items-center h-screen container mx-auto'>
          <div className="card w-1/2	 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-body">
                  <h1 className="text-4xl text-center my-5 font-bold">Sign Up now!</h1>
                 <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Name Field Start */}
                 <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold text-xl">Name</span>
                      </label>
                      <input type="text" placeholder="name" 
                      className="input input-bordered " 
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is Requard"
                        },
                        pattern: {
                        minLength: 3,
                          message: 'Provide a valid Text',
                        }
                      })}
                      />
                      <label className='label'>
                      {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                      {errors.name?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                      </label>
                    </div>

                        {/* Name Field End */}

                        {/* Email Field Start */}
                 <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold text-xl">Email</span>
                      </label>
                      <input type="email" placeholder="email" 
                      className="input input-bordered " 
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Requard"
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Provide a valid Email',
                        }
                      })}
                      />
                      <label className='label'>
                      {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                      {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                      </label>
                    </div>

                    {/* Email Feild End */}

                    {/* Password Feild Start */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold text-xl">Password</span>
                      </label>
                      <input type="password" placeholder="password" 
                      className="input input-bordered " 
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Requard"
                        },
                        minLength: {
                          value: 6,
                          message: 'Must be 6 characters or longer',
                        }
                      })}
                      />
                      <label className="label">
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                      </label>                      
                    </div>

                    {/* Password Feild End */}
                      {singUpError}
                      <button type='submit' value="Login"  className="btn btn-dark w-full">Sign Up</button>
                 </form>

                 <div className=' container text-center mt-3'>
                      <span className='text-xl mr-1'>Alredy have an Accaunt?</span>
                      <Link to="/login" className="link link-hover text-success ml-2 text-xl">Please Login</Link>
                 </div>

                   
                            {/* Divider Start */}  

                    <div className='flex justify-center items-center space-x-4 py-4'>
                      <div className='w-40 h-1 bg-sky-200 rounded ' ></div>
                      <div><span>OR</span></div>
                      <div className='w-40 h-1 bg-sky-200 rounded ' ></div>
                    </div>

                          {/* Divider End */}

                    <div className="form-control mt-6">
                      <button 
                      onClick={() => signInWithGoogle()}
                      className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    </div>
              </div>
            </div>
          </div>
        </div>

        
    );
};

export default SignUp;