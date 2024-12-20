import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { login } from '../store/authSlice'


function SignUp() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {

            const userData = await authService.createAccount(data)

            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                <div className='mb-2 justify-center flex'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100px' />
                    </span>
                </div>
                <h2 className='text-2xl text-center font-bold leading-tight '
                >Sign To create Account</h2>
                <p className='mt-2 texg-center text-base text-black/60'>
                    Already have an Account?&nbsp;
                    <Link
                        to='/signup'
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 text-center mt-8'>{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label='Full Name'
                            placeholder="Enter your name"
                            type='text'
                            {...register('name', {
                                required: true,
                            })}
                        />
                        <Input
                            label="email"
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required: true,
                            })}
                        />
                        <Input
                            label="password"
                            placeholder="Enter password"
                            type='password'
                            {...register('password', {
                                required: true,
                            })}
                        />

                        <Button
                            type='submit'
                            className='w-full'
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp