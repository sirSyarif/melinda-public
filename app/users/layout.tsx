'use client';
import SideNavbar from '../Components/SideNavbar';

export default function dashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// useEffect(() => {
	// 	const router = useRouter();
	// 	console.log(router.query);
	// }, []);
	return (
		<div className="h-screen overflow-x-hidden">
			<SideNavbar />
			{children}
		</div>
	);
}
