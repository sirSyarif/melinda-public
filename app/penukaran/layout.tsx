import SideNavbar from '../Components/SideNavbar';

export default function TransaksiLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-screen">
			<SideNavbar />
			{children}
		</div>
	);
}
