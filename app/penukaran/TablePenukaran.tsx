'use client';
export default function TablePenukaran() {
	const data = [
		{
			id: 1,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			namaBarang: 'Minyak Goreng 1L',
			jumlah: '1',
			status: 'Berhasil dikirim',
		},
		{
			id: 2,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			namaBarang: 'Minyak Goreng 1L',
			jumlah: '1',
			status: 'Berhasil dikirim',
		},
		{
			id: 3,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			namaBarang: 'Minyak Goreng 1L',
			jumlah: '1',
			status: 'Berhasil dikirim',
		},
		{
			id: 4,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			namaBarang: 'Minyak Goreng 1L',
			jumlah: '1',
			status: 'Berhasil dikirim',
		},
		{
			id: 5,
			nama: 'Mico',
			niu: '0098',
			email: 'SutanMico@gmail.com',
			noTlp: '0990-0990-0990',
			namaBarang: 'Minyak Goreng 1L',
			jumlah: '1',
			status: 'Berhasil dikirim',
		},
	];

	return (
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
								<td className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
									{post.namaBarang}
								</td>
								<td className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer">
									{post.jumlah}
								</td>
								<td className="pt-5 border-[#D9D9D9] border-b-2 pb-2 cursor-pointer ">
									{post.status}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

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
		</div>
	);
}
