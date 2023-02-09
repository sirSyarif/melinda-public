'use client';
import { useState, Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import TablePenukaran from './TablePenukaran';

export default function PenukaranComponent() {
	const jmlTampil = [{ no: '5' }, { no: '10' }];

	const [selected, setSelected] = useState(jmlTampil[0]);

	const [warna, setWarna] = useState(false);
	const togle = () => {
		setWarna(!warna);
	};

	return (
		<div className="pr-0 md:pr-5 z-0 pb-10">
			<h1 className="text-[#94D60A] pl-2 md:pl-10 lg:pl-72 pt-6 font-bold text-3xl">
				Penukaran
			</h1>

			<div className=" ml-0 md:10 lg:ml-72 mt-10 w-auto min-h-full overflow-visible px-2 sm:px-0 bg-[#F8FFE9] relative rounded shadow-md">
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

				<TablePenukaran />
			</div>
		</div>
	);
}
