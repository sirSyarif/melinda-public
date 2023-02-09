'use client';
import SideNavbar from '../Components/SideNavbar';

export default function PenyetoranLayout({
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
