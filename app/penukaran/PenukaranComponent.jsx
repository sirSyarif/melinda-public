// 'use client';
// import { useState, Fragment, useEffect } from 'react';
// import { Listbox, Transition } from '@headlessui/react';
// import { HiOutlineChevronDown } from 'react-icons/hi';
// import { AiOutlineSearch } from 'react-icons/ai';
// import TablePenukaran from './TablePenukaran';

// export default function PenukaranComponent() {
// 	const jmlTampil = [{ no: '5' }, { no: '10' }];

// 	const [selected, setSelected] = useState(jmlTampil[0]);

// 	const [warna, setWarna] = useState(false);
// 	const togle = () => {
// 		setWarna(!warna);
// 	};

// 	return (
// 		<div className="pr-0 md:pr-5 z-0 pb-10">
// 			<h1 className="text-[#94D60A] pl-2 md:pl-10 lg:pl-72 pt-6 font-bold text-3xl">
// 				Penukaran
// 			</h1>

// 			<div className=" ml-0 md:10 lg:ml-72 mt-10 w-auto min-h-full overflow-visible px-2 sm:px-0 bg-[#F8FFE9] relative rounded shadow-md">
// 				<div className="wrapper flex justify-between items-center">
// 					<div className=" p-5 flex gap-5 items-center">
// 						<Listbox value={selected} onChange={setSelected}>
// 							<div className="relative mt-1">
// 								<Listbox.Button className="relative cursor-default rounded-lg bg-[#94D60A] py-1 pl-3 pr-10 text-center focus:outline-none sm:text-sm">
// 									<span className="block truncate text-white">
// 										{selected.no}
// 									</span>
// 									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
// 										<HiOutlineChevronDown
// 											className="h-5 w-5 text-white"
// 											aria-hidden="true"
// 										/>
// 									</span>
// 								</Listbox.Button>
// 								<Transition
// 									as={Fragment}
// 									leave="transition ease-in duration-100"
// 									leaveFrom="opacity-100"
// 									leaveTo="opacity-0"
// 								>
// 									<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
// 										{jmlTampil.map((person, personIdx) => (
// 											<Listbox.Option
// 												key={personIdx}
// 												className={({ active }) =>
// 													`relative cursor-default select-none py-2 pl-3   ${
// 														active
// 															? 'bg-amber-100 text-amber-900'
// 															: 'text-gray-900'
// 													}`
// 												}
// 												value={person}
// 											>
// 												{({ selected }) => (
// 													<>
// 														<span
// 															className={`block truncate ${
// 																selected ? 'font-medium' : 'font-normal'
// 															}`}
// 														>
// 															{person.no}
// 														</span>
// 														{selected ? (
// 															<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
// 														) : null}
// 													</>
// 												)}
// 											</Listbox.Option>
// 										))}
// 									</Listbox.Options>
// 								</Transition>
// 							</div>
// 						</Listbox>
// 						<div className="btn-group grid grid-cols-2 md:w-44 w-28 pt-1">
// 							<button
// 								className={`border-[#94D60A] border-r-0 text-white border-2 btn btn-outline  rounded-tl-md rounded-bl-md ${
// 									warna ? 'text-[#94D60A]' : 'text-white bg-[#94D60A]'
// 								}`}
// 								onClick={togle}
// 							>
// 								Baru
// 							</button>
// 							<button
// 								className={` border-2 border-[#94D60A] border-l-0 btn btn-outline rounded-tr-md rounded-br-md ${
// 									warna ? 'text-white bg-[#94D60A]' : 'text-[#94D60A]'
// 								} `}
// 								onClick={togle}
// 							>
// 								Lama
// 							</button>
// 						</div>
// 					</div>
// 					<form action="" className="relative">
// 						<input
// 							className="search flex items-center border-[#94D60A] border-[1px] mr-6 p-1 gap-2 md:w-60 w-10/12 rounded-lg bg-transparent placeholder:font-semibold peer z-20 pl-7"
// 							placeholder="Search"
// 						/>
// 						<AiOutlineSearch className="text-[#00000080] font-semibold absolute top-2 left-1 duration-200 peer-placeholder-shown:font-bold z-0" />
// 					</form>
// 				</div>

// 				<TablePenukaran />
// 			</div>
// 		</div>
// 	);
// }

'use client';
import { useState, Fragment, useEffect } from 'react';
import { Tab, Listbox, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

export default function UserManagementComponent() {
	const [userDatas, setUserDatas] = useState({ count: 0, results: [] });
	// const [userDatas, setUserDatas] = useState({ [] });

	const [userDeleting, setUserDeleting] = useState('');
	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState({ name: '', id: '' });
	const [currentPage, setCurrentPage] = useState('page=1');
	const [searchUser, setSearch] = useState('');

	const getuserDatas = async (uri) => {
		if (!uri) return;

		setLoading(true);
		setCurrentPage(uri);
		const res = await axios.get(uri);
		setLoading(false);

		setUserDatas(res.data);
	};

	const deleteUser = async (id) => {
		const res = await axios.delete(
			`https://fadhli.pythonanywhere.com/user/${id}/delete/`
		);
		setModal({ name: '', id: '' });
		getuserDatas('https://fadhli.pythonanywhere.com/user/?limit=5&page=1');
	};

	useEffect(() => {
		getuserDatas('https://fadhli.pythonanywhere.com/user/?limit=5&page=1');
		// getuserDatas('https://fourtour.site/melinda/produk/0');
	}, []);

	const [selected, setSelected] = useState(5);

	const [waktuData, setWaktuData] = useState('baru');

	const [jmlData, setJmlData] = useState(5);

	const searchUserSubmit = (e) => {
		e.preventDefault();
		getuserDatas(
			`https://fadhli.pythonanywhere.com/user/?ordering=createdAt&search=${searchUser}`
		);
	};

	return (
		<div className="pr-0 md:pr-5 z-0 pb-10 overflow-auto">
			{/* MODAL  */}
			<div
				className={` modal fixed ${
					modal.id != '' ? '' : 'hidden'
				} bg-[#00000040] h-screen w-full z-10 flex justify-center items-center`}
			>
				<div className="bg-[#F8FFE9] rounded pt-3 pl-8 pr-8 pb-5">
					<div className="flex w-full justify-center items-center gap-5 relative">
						<h1 className="text-[#94D60A] text-3xl pt-5"> ON CONTRUCTION</h1>
						<AiOutlineClose
							className="text-[#94D60A] text-xl absolute right-0 top-0 cursor-pointer"
							onClick={(e) => setModal({ name: '', id: '' })}
						/>
					</div>
					<p className=" w-1/2 mx-auto text-center mt-10 text-sm text-[#00000080]">
						Page is still under Contruction
						{/* <span className=" text-[#94D60A]"> {modal.name}</span> */}
					</p>
					{/* <button
						className="bg-[#94D60A] w-full rounded-md text-white mt-10"
						onClick={(e) => deleteUser(modal.id)}
					>
						Go back
					</button> */}
				</div>
			</div>

			<h1 className="text-[#94D60A] pl-2 md:pl-10 lg:pl-72 pt-6 font-bold text-2xl">
				Penukaran
			</h1>

			{/* {loading ? (
				<h1 className="ml-72 bg-orange-500 w-32 text-center p-2 text-white rounded">
					Loading...
				</h1>
			) : (
				''
			)} */}

			<h1
				className={`${
					loading ? 'block' : 'hidden'
				}  w-full text-center right-0 absolute`}
			>
				Loading...
			</h1>

			<div className=" ml-0 md:ml-10 lg:ml-72 mt-10 w-full md:w-auto min-h-full px-2 sm:px-0 bg-[#F8FFE9] relative rounded shadow-md">
				<div className="wrapper flex justify-between items-center">
					<div className=" p-5 flex gap-5 items-center">
						<div className="jmlData">
							<select
								name=""
								title="jmlData"
								id=""
								value={selected}
								className="bg-[#94D60A] rounded-md outline-none text-white p-[2px] mt-[3px] cursor-pointer"
								// onChange={(e) => {
								// 	setSelected(parseInt(e.target.value));
								// 	{
								// 		waktuData == 'baru'
								// 					getuserDatas(
								// 						`https://fadhli.pythonanywhere.com/user/?limit=${e.target.value}`
								// 						// `https://fourtour.site/melinda/produk/0`
								// 					);
								// 			  }, 100)
								// 			: setTimeout(() => {
								// 					getuserDatas(
								// 						`https://fadhli.pythonanywhere.com/user/?ordering=createdAt&limit=${e.target.value}`
								// 						// `https://fourtour.site/melinda/produk/0`
								// 					);
								// 			  }, 100);
								// 	}
								// }}
							>
								<option
									value="5"
									className=" cursor-pointer"
									onClick={() => {
										setJmlData(5);
									}}
								>
									5
								</option>
								<option
									value="10"
									className=" cursor-pointer"
									onClick={() => {
										setJmlData(10);
									}}
								>
									10
								</option>
							</select>
						</div>
						<div className="btn-group grid grid-cols-2 md:w-44 pt-1 w-28">
							<button
								className={`border-[#94D60A] border-r-0 text-white border-2 btn btn-outline  rounded-tl-md rounded-bl-md ${
									waktuData == 'baru'
										? 'text-white bg-[#94D60A]'
										: 'text-[#94D60A]'
								}`}
								onClick={(e) => {
									setWaktuData('baru'),
										getuserDatas(
											'https://fadhli.pythonanywhere.com/user/?limit=5&page=1'
											// `https://fourtour.site/melinda/produk/0`
										);
								}}
							>
								Baru
							</button>
							<button
								className={` border-2 border-[#94D60A] border-l-0 btn btn-outline rounded-tr-md rounded-br-md ${
									waktuData == 'lama'
										? 'text-white bg-[#94D60A]'
										: 'text-[#94D60A]'
								} `}
								onClick={(e) => {
									setWaktuData('lama'),
										getuserDatas(
											'https://fadhli.pythonanywhere.com/user/?ordering=createdAt'
											// `https://fourtour.site/melinda/produk/0`
										);
								}}
							>
								Lama
							</button>
						</div>
					</div>
					<form
						action=""
						className="relative"
						onSubmit={(e) => {
							searchUserSubmit(e);
						}}
					>
						<input
							className="search flex items-center border-[#94D60A] border-[1px] mr-6 p-1 gap-2 md:w-60 w-10/12 rounded-lg bg-transparent placeholder:font-semibold peer z-20 pl-7"
							placeholder="Search"
							onChange={(e) => {
								setSearch(e.target.value);
							}}
							value={searchUser}
						/>
						<AiOutlineSearch className="text-[#00000080] font-semibold absolute top-2 left-1 duration-200 peer-placeholder-shown:font-bold z-0" />
					</form>
				</div>

				{/* <TableUser /> */}
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
								<td>Nama Barang</td>
								<td>Jumlah</td>
								<td
									className="rounded-tr-lg rounded-br-lg bg-[#94D60A] pr-2"
									// onClick={modalTrigger}
								>
									Aksi
								</td>
							</tr>
						</thead>
						<tbody className="">
							{userDatas['results'].map((datas, key) => {
								return (
									<tr key={key}>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{datas.name}
										</td>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{datas.id}
										</td>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{datas.email}
										</td>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											{datas.phone}
										</td>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											-
										</td>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											-
										</td>
										{/* <td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											Minyak mantap
										</td>
										<td className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
											1
										</td> */}
										<td
											className="pt-5 pl-3 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer"
											onClick={(e) =>
												setModal({ name: datas.name, id: datas.id })
											}
										>
											<div
												// onClick={(e) => deleteUser(datas.id)}
												className="p-1 border-2 border-[red] text-[red]  rounded text-center"
											>
												Verfikasi
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="footer flex justify-between mt-5 pb-5 p-1 items-center">
						<h1 className="font-semibold">
							{/* Showing {selected} to {userDatas.count} */}
							Showing {selected} data
						</h1>
						<div className="btn-group border-[#94D60A] border-2 md:w-44 w-32 justify-between rounded-lg flex">
							<button
								className="btn"
								onClick={(e) => getuserDatas(userDatas.previous)}
							>
								<p className="text-[#94D60A] pl-1 text-sm md:text-md">
									Previous
								</p>
							</button>
							<button className="btn bg-[#94D60A] p-1 rounded rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-none text-white text-sm">
								Page 1
							</button>
							<button
								className="btn"
								onClick={(e) => getuserDatas(userDatas.next)}
							>
								<p className="text-[#94D60A] pr-1 text-sm	">Next</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
