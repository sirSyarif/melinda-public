// TINGGAL LOGIC LOGIN

'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logologin from '../../public/Logo-Login.jpeg';
import Image from 'next/image';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function LoginComponent() {
	const [showPass, setShowPass] = useState(false);

	const ShowPass = () => {
		setShowPass(!showPass);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	let condition = false;
	const [nav, setNav] = useState(condition);
	const navigate = (d: any) => {};

	return (
		<div className="bg-[#94D60A] h-screen flex justify-center items-center z-10">
			{errors.email && errors.email.type == 'required' && (
				<div
					className={`absolute top-10 bg-[#E5083C] text-sm text-white p-2 rounded flex items-center gap-2 `}
				>
					<p> Please Enter Email/Password !</p>
				</div>
			)}
			<div className="card bg-white md:w-auto w-80 md:h-auto h-[300px] mx-auto flex items-center shadow-lg rounded-md">
				{/* LOGIN INPUT */}
				<div className="login-form pt-0 px-6 w-[300px]">
					<h1 className="font-semibold text-[#94D60A] text-xl">LOGIN</h1>
					<p className="text-xs text-[#828282] font-semibold">
						Masukan email dan kata sandi
					</p>
					<form onSubmit={handleSubmit(navigate)} action="" className="mt-6  ">
						<div className="user relative">
							<label htmlFor="email">
								<MdOutlineAlternateEmail className="text-[#00000059] font-semibold absolute z-10 right-2 top-2 cursor-pointer" />
							</label>
							<input
								type="email"
								className="peer rounded-2xl p-1 pl-3 border border-[#00000033] relative w-full placeholder-transparent bg-transparent z-10 text-sm"
								placeholder="Email"
								{...register('email', { required: true })}
							/>
							<label className=" text-sm text-black font-semibold absolute left-3 -top-3 peer-placeholder-shown:top-[3px] peer-placeholder-shown:text-[#00000059] bg-white peer-placeholder-shown:bg-transparent z-10 peer-placeholder-shown:z-0 peer-placeholder-shown:text-sm duration-100">
								user@gmail.com
							</label>
						</div>
						{/* LOGIN INPUT END */}

						{/* PASSWORD INPUT */}
						<div className="pass relative mt-4">
							<label htmlFor="password" onClick={ShowPass} className="z-20">
								{showPass ? (
									<AiFillEyeInvisible className="text-[#00000059] font-semibold absolute z-10 right-2 top-2 cursor-pointer z-20" />
								) : (
									<AiFillEye className="text-[#00000059] font-semibold absolute z-10 right-2 top-2 cursor-pointer z-20" />
								)}
							</label>
							<input
								type={showPass ? 'text' : 'password'}
								className="peer rounded-2xl p-1 pl-3 border border-[#00000033] relative w-full placeholder-transparent bg-transparent z-10 text-sm"
								placeholder="password"
								{...register('password', { required: true })}
							/>
							<label className=" text-sm text-black font-semibold absolute left-3 -top-3 peer-placeholder-shown:top-[3px] peer-placeholder-shown:text-[#00000059] bg-white peer-placeholder-shown:bg-transparent z-10 peer-placeholder-shown:z-0 peer-placeholder-shown:text-sm duration-100">
								Password
							</label>
						</div>
						<div className="wrapper flex justify-between mt-2">
							<div className="ingatSaya flex items-center">
								<input type="checkbox" name="ingatSaya" placeholder="." />
								<label
									htmlFor="ingatSaya"
									className="pl-1 text-xs text-[#00000059] font-semibold"
								>
									Ingat Saya
								</label>
							</div>
							<p className=" text-xs text-[#00000059] font-semibold cursor-pointer hover:translate-x-1 duration-200">
								Lupa kata sandi?
							</p>
						</div>
						<a href="/dashboard">
							<button
								type="submit"
								className="btn w-full rounded-lg mt-10 p-1 text-center text-white bg-[#94D60A]"
							>
								Masuk
							</button>
						</a>
					</form>
				</div>
				<div className="logo">
					<Image
						src={Logologin}
						alt="yoi"
						className="bg-fuchsia-200 w-[400px] hidden md:block"
					/>
				</div>
				{/* PASSWORD INPUT END*/}
			</div>
		</div>
	);
}
