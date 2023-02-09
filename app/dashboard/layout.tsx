'use client';
import logo from '../../public/Inagri-Logo.png';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import SideNavbar from '../Components/SideNavbar';
import { useRouter } from 'next/router';

export default function dashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const router = useRouter();
	// console.log(router.query);
	return (
		<div className="h-screen">
			<SideNavbar />
			{children}
		</div>
	);
}
