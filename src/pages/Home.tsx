import React, { ChangeEvent, useState } from 'react'
import { FiUpload } from 'react-icons/fi';
import { AiOutlineCloudUpload, AiFillDelete } from 'react-icons/ai';
import { ImLoop2 } from 'react-icons/im';
import { RiErrorWarningLine } from 'react-icons/ri';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { home } from '../models/interface';
interface Istate {
    user: home
}

const Home: React.FC = () => {
    const [state, setState] = useState<Istate>({
        user: {
            firstName: " ",
            lastName: " ",
            country: " ",
            language: " ",
            email: " "
        }
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
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
        <>
            <nav className="bg-slate-100 border-gray-200 border-b  px-2">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <ul className="flex p-4 gap-7  items-center ">
                        <img className='w-[40px] h-[40px]  rounded-full cursor-pointer' src="/assets/logo.png" alt="" />
                        <li>
                            <a href="#" className="font-bold text-base text-gray-600 hover:text-black" >Report</a>
                        </li>
                        <li>
                            <a href="#" className="font-bold text-base text-gray-600 hover:text-black">Setting</a>
                        </li>
                    </ul>
                    <div className="flex gap-4 items-center">
                        <span className='font-bold text-base text-gray-600 hover:text-black cursor-pointer'>Logout</span>
                        <img className='w-[40px] h-[40px]  rounded-full cursor-pointer' src="/assets/beeni.jpg" alt="" />
                    </div>
                </div>
            </nav>
            <div className="bg-slate-100 border-gray-200 px-6 py-2 flex flexitems-center  justify-between mx-auto">
                <div >
                    <p className='text-black font-bold text-base' >Meeting Report</p>
                    <p className='text-gray-500 text-sm'>summerize all your meeting recording</p>
                </div>
                <button type='submit' className='bg-pink-700 px-3 rounded-2xl flex items-center gap-1 text-white font-medium'>Upload <FiUpload /></button>
            </div>

            <div className="container flex justify-center pt-10">
                <div className="w-[60vw] pb-[20px]">
                    {/* recording section */}
                    <div className='flex flex-col items-center text-center bg-slate-100 py-10 rounded sm:py-20'>
                        < AiOutlineCloudUpload className='w-[100px] h-[100px]' />
                        <p className='text-black font-bold text-base' >No Recording Available Yet</p>
                        <p className='text-gray-500 text-sm'>Please upload a meeting recording to generate your firt report</p>
                    </div>

                    <div className="pt-7 pb-4 text-2xl font-bold">
                        Personal info
                    </div>
                    {/* form section */}
                    <form action="" className='bg-slate-100 px-5 py-5 rounded' onSubmit={submitHandler}>
                        <div className="xl:flex  justify-between ">
                            <div className='xl:min-w-[22rem] '>
                                <label htmlFor="fName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" id="fName" name="firstName" value={state.user.firstName} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                            <div className='xl:min-w-[22rem]'>
                                <label htmlFor="lName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" id="lName" name="lastName" value={state.user.lastName} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                        </div>
                        <div className="xl:flex  justify-between">
                            <div className='xl:min-w-[22rem]'>
                                <label htmlFor="Country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <select id="countries" name="country" value={state.user.country}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
                                    <option selected>Pakistany</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select> </div>
                            <div className='xl:min-w-[22rem]'>
                                <label htmlFor="Language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                                <select id="languages" name="language" value={state.user.language} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
                                    <option selected>English</option>
                                    <option value="urdu">Urdu</option>
                                    <option value="french">French</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="email"  name="email" value={state.user.email} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div className=" py-5 flex flex-row-reverse">
                            <button className='bg-pink-700 rounded-2xl text-white font-medium p-2'>Save changes </button>
                        </div>
                    </form>
                    {/* Spiner */}
                    <div className="flex gap-4 pt-7 pb-2 items-center">
                        <p className='text-black font-bold text-base' >Jan 8: 2023</p>
                        <p className='text-gray-500 text-sm'>11:45 PM</p>
                    </div>
                    <div className="bg-slate-100 px-5 py-5 rounded">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className=" text-gray-500 font-bold">Processing Video...</span>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex gap-4 pt-7 pb-2 items-center">
                        <p className='text-black font-bold text-base' >Jan 8: 2023</p>
                        <p className='text-gray-500 text-sm'>11:45 PM</p>
                    </div>
                    <div className="bg-slate-100 px-5 py-5 rounded sm:flex justify-between">
                        <div className="flex items-center gap-2">
                            <RiErrorWarningLine className='w-[30px] h-[30px] shadow-inherit text-red-500' />
                            <p className='text-black font-bold text-lg' >Error While Processing Your Request</p>

                        </div>
                        <div className="flex items-center gap-2">
                            <button className='bg-red-700 rounded-2xl text-white font-medium p-2 flex items-center gap-2'>Retry <ImLoop2 /> </button>
                            <AiFillDelete className='w-[24px] h-[24px]' />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-4 pt-7 pb-2 items-center">
                        <p className='text-black font-bold text-base' >Jan 8: 2023</p>
                        <p className='text-gray-500 text-sm'>11:45 PM</p>
                    </div>
                    <div className="bg-slate-100 px-5 py-5 rounded sm:flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <GoDeviceCameraVideo className='w-[35px] h-[35px] bg-blue-600 p-2 text-white rounded-full' />
                            <div>
                                <p className='text-black font-bold text-lg' >Lorem ipsum</p>
                                <p className='text-gray-500 text-sm'>Lorem, ipsum.</p>
                            </div>
                        </div>
                        <div >12:32 </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-4 pt-7 pb-2 items-center">
                        <p className='text-black font-bold text-base' >Jan 8: 2023</p>
                        <p className='text-gray-500 text-sm'>11:45 PM</p>
                    </div>
                    <div className="bg-slate-100 px-5 py-5 rounded sm:flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <GoDeviceCameraVideo className='w-[35px] h-[35px] bg-blue-600 p-2 text-white rounded-full' />
                            <div>
                                <p className='text-black font-bold text-lg' >Lorem ipsum</p>
                                <p className='text-gray-500 text-sm'>Lorem, ipsum.</p>
                            </div>
                        </div>
                        <div >12:32 </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-4 pt-7 pb-2 items-center">
                        <p className='text-black font-bold text-base' >Jan 8: 2023</p>
                        <p className='text-gray-500 text-sm'>11:45 PM</p>
                    </div>
                    <div className="bg-slate-100 px-5 py-5 rounded sm:flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <GoDeviceCameraVideo className='w-[35px] h-[35px] bg-blue-600 p-2 text-white rounded-full' />
                            <div>
                                <p className='text-black font-bold text-lg' >Lorem ipsum</p>
                                <p className='text-gray-500 text-sm'>Lorem, ipsum.</p>
                            </div>
                        </div>
                        <div >12:32 </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home