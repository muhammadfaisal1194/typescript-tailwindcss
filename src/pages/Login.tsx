import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Ilogin } from '../models/interface';

interface Istate {
    user: Ilogin
}

const Login: React.FC = () => {
    const [state, setState] = useState<Istate>({
        user: {
            email: "",
            password: ""
        }
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [e.target.name]: e.target.value,
            },
        })
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(state.user)
    }

    return (
        <div className="min-h-[100vh] min-w-[100vw] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
            <div className="container flex justify-center pt-20">
                <form className="py-5 px-10 md:w-[55vw] lg:w-[40vw] bg-white rounded-md shadow-2xl shadow-slate-900" onSubmit={submitHandler}>
                    <div className="text-2xl font-bold text-center pb-4 text-blue-700">
                        Login
                    </div>
                    <div className="pb-4">
                        <input type="email" name="email" value={state.user.email} onChange={onChangeHandler} required className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" />
                    </div>
                    <div className="pb-4">
                        <input type="password" name="password" value={state.user.password} onChange={onChangeHandler} required className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" />
                    </div>
                    <div className="flex items-start pb-4">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-indigo-200 focus:ring-3 focus:ring-blue-300" required />
                        </div>
                        <label htmlFor="remember" className="flex ml-2 text-sm font-medium text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <div >
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            Login
                        </button>
                    </div>
                    <div className="text-center text-base font-medium pt-4">
                        <span>New Member ?<Link className="text-blue-500 underline" to="/signup">Creat Account</Link></span>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login