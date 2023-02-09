'use client';
import { useState, Fragment } from 'react';
import { Tab, Listbox, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

export default function PenyetoranComponent() {
	const data = [
		{
			id: 1,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			status: 'Verfikasi',
		},
		{
			id: 2,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			status: 'Verfikasi',
		},
		{
			id: 3,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			status: 'Verfikasi',
		},
		{
			id: 4,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			status: 'Verfikasi',
		},
		{
			id: 5,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			status: 'Verfikasi',
		},
	];

	const jmlTampil = [{ no: '5' }, { no: '10' }];

	const [selected, setSelected] = useState(jmlTampil[0]);

	const [warna, setWarna] = useState(false);
	const togle = () => {
		setWarna(!warna);
	};

	const [modal, setModal] = useState(false);
	const modalTrigger = () => {
		setModal(!modal);
	};

	return (
		<div className="pr-0 md:pr-5 z-0 pb-10 overflow-auto">
			<div
				className={` modal fixed ${
					modal ? '' : 'hidden'
				} bg-[#00000040] h-screen w-full z-10 flex justify-center items-center`}
			>
				<div className="bg-[#F8FFE9] rounded pt-3 pb-5">
					<div className="flex w-full justify-center items-center gap-5 relative">
						<h1 className="text-[#94D60A] text-3xl">Verifikasi</h1>
						<AiOutlineClose
							className="text-[#94D60A] text-xl absolute right-0 top-0 cursor-pointer text-3xl"
							onClick={modalTrigger}
						/>
					</div>
					<p className=" w-1/2 mx-auto text-center mt-2 text-sm text-[#00000080]">
						Verifikasi untuk
						<span className=" text-[#94D60A]"> Mico</span>, masukan inputan
						minyak di bawah ini
					</p>

					<h1 className="text-[#00000080] mt-2 w-2/3 text-xl block mx-auto">
						Masukan Minyak
					</h1>
					<form action="">
						<input
							type="text"
							placeholder="Ex: 1200ml"
							className=" w-full bg-transparent border-[#94D60A] text-[#00000080] rounded-lg border-2 w-2/3 block mx-auto pl-2 "
						/>

						<button
							className="bg-[#94D60A] w-full rounded-md text-white mt-10 w-2/3 block mx-auto font-semibold p-1 text-xl"
							onClick={modalTrigger}
							// type="submit"
						>
							Masukan
						</button>
					</form>
				</div>
			</div>

			<h1 className="text-[#94D60A] pl-2 md:pl-10 lg:pl-72 pt-6 font-bold text-3xl">
				Penyetoran
			</h1>

			<div className=" ml-0 lg:ml-72 md:ml-10 mt-10 w-auto min-h-full overflow-visible px-2 sm:px-0 bg-[#F8FFE9] relative rounded shadow-md">
				<div className="wrapper flex justify-between items-center">
					<div className=" p-5 flex gap-5 items-center">
						<Listbox value={selected} onChange={setSelected}>
							<div className="relative mt-1">
								<Listbox.Button className="relative cursor-default rounded-lg bg-[#94D60A] py-1 pl-3 pr-10 text-center focus:outline-none sm:text-sm">
									<span className="block truncate text-white">
										{selected.no}
									</span>
									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<HiOutlineChevronDown
											className="h-5 w-5 text-white"
											aria-hidden="true"
										/>
									</span>
								</Listbox.Button>
								<Transition
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
										{jmlTampil.map((person, personIdx) => (
											<Listbox.Option
												key={personIdx}
												className={({ active }) =>
													`relative cursor-default select-none py-2 pl-3   ${
														active
															? 'bg-amber-100 text-amber-900'
															: 'text-gray-900'
													}`
												}
												value={person}
											>
												{({ selected }) => (
													<>
														<span
															className={`block truncate ${
																selected ? 'font-medium' : 'font-normal'
															}`}
														>
															{person.no}
														</span>
														{selected ? (
															<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
														) : null}
													</>
												)}
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Transition>
							</div>
						</Listbox>
						<div className="btn-group grid grid-cols-2 md:w-44 w-28 pt-1">
							<button
								className={`border-[#94D60A] border-r-0 text-white border-2 btn btn-outline  rounded-tl-md rounded-bl-md ${
									warna ? 'text-[#94D60A]' : 'text-white bg-[#94D60A]'
								}`}
								onClick={togle}
							>
								Baru
							</button>
							<button
								className={` border-2 border-[#94D60A] border-l-0 btn btn-outline rounded-tr-md rounded-br-md ${
									warna ? 'text-white bg-[#94D60A]' : 'text-[#94D60A]'
								} `}
								onClick={togle}
							>
								Lama
							</button>
						</div>
					</div>
					<form action="" className="relative">
						<input
							className="search flex items-center border-[#94D60A] border-[1px] mr-6 p-1 gap-2 md:w-60 w-10/12 rounded-lg bg-transparent placeholder:font-semibold peer z-20 pl-7"
							placeholder="Search"
						/>
						<AiOutlineSearch className="text-[#00000080] font-semibold absolute top-2 left-1 duration-200 peer-placeholder-shown:font-bold z-0" />
					</form>
				</div>

				{/* TABLE PENYETORAN */}
				<div className="w-full px-5 overflow-auto">
					<div className="btn-group grid grid-cols-2"></div>
					<table className="w-full">
						<thead className="bg-[#94D60A] rounded text-white">
							<tr>
								<td className="rounded-bl-lg rounded-tl-lg bg-[#94D60A] p-1 pl-3">
									Nama
								</td>
								<td>NIU</td>
								<td>Email</td>
								<td>No.Tlp</td>
								<td className="rounded-tr-lg rounded-br-lg bg-[#94D60A] pr-2">
									Status
								</td>
							</tr>
						</thead>
						<tbody className="">
							{data.map((post, key) => {
								return (
									<tr key={key}>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{post.nama}
										</td>
										<td className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{post.niu}
										</td>
										<td className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{post.email}
										</td>
										<td className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{post.noTlp}
										</td>
										<td
											className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer text-[#94D60A]"
											onClick={modalTrigger}
										>
											<div className="p-1 border-2 border-[#94D60A] rounded text-center">
												{post.status}
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					{/* TABLE PENYETORAN */}

					{/* FOOTER */}
					<div className="footer flex justify-between mt-5 pb-5 p-1">
						<h1 className="font-semibold">Showing 1 to 5</h1>

						<div className="btn-group border-[#94D60A] border-2 w-44 justify-between rounded-lg flex">
							<button className="btn">
								<p className="text-[#94D60A] pl-1">Previous</p>
							</button>
							<button className="btn bg-[#94D60A] p-1 rounded rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-none text-white">
								Page 1
							</button>
							<button className="btn ">
								<p className="text-[#94D60A] pr-1">Next</p>
							</button>
						</div>
					</div>
					{/* FOOTER END */}
				</div>
			</div>
		</div>
	);
}
