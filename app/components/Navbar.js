"use client";
import React, { useEffect, useState } from 'react';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { trackGoal } from '../utils/datafast';

function Navbar({ currentPage }) {
	const t = useTranslations('navbar');

	// Navigation items with name and link
	const navigationItems = [
		{ name: t('pricing'), link: '#pricing' },
		{ name: t('faqs'), link: '#faqs' },
		{ name: t('caseStudies'), link: null },
		{ name: t('blog'), link: null }
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [smallVersion, setSmallVersion] = useState(false);

	// Convert to small vertion when scrolled down
	useEffect(() => {
		const handleScroll = () => {
			setSmallVersion(window.scrollY > 80);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`
				fixed z-50 w-full flex justify-center
				${smallVersion ? 'px-0' : '2xl:px-48 xl:px-40 lg:px-32 md:px-16 sm:px-20 px-10'}
				${smallVersion ? 'top-0' : 'top-7'}
			`}
			style={{
				transition: `top 300ms ease-in-out, padding ${smallVersion ? '700ms' : '300ms'} ease-in-out`
			}}
		>
			<div className={`font-manrope
				${smallVersion ? 'bg-SecondaryBackground/60' : 'bg-SecondaryBackground '}
				backdrop-blur-xl
				shadow-[0_0_30px_rgba(26,6,61,0.20)] hover:shadow-[0_0_30px_rgba(26,6,61,0.25)]
				${smallVersion ? 'shadow-none hover:shadow-none' : ''}
				text-black transition-shadow duration-300 ease-in-out
				flex flex-row items-center justify-between 
				${smallVersion 
					? 'md:h-[50px] h-[50px] no-rounded 2xl:px-[248px] xl:px-[208px] lg:px-[176px] md:px-[96px] sm:px-[104px]' 
					: 'md:h-[70px] h-[60px] rounded-[40px] 2xl:px-14 xl:px-12 lg:px-12 md:px-8 sm:px-6'
				}
				px-8
				w-full max-w-screens
				`}
				style={{
					transition: `box-shadow ${smallVersion ? '700ms' : '300ms'} ease-in-out, height ${smallVersion ? '700ms' : '300ms'} ease-in-out, border-radius ${smallVersion ? '1000ms' : '300ms'} ease-in-out, padding-inline ${smallVersion ? '700ms' : '300ms'} ease-in-out`
				}}
			>
				<div className="flex w-full items-center justify-between gap-4 md:gap-6">
					{/* Logo */}
					{currentPage ? (
						<Link href="/">
							<img
								src="/logos/YakoWeb.svg"
								alt="Logo"
								className={`
									svg w-[90px] sm:w-[100px] md:w-[110px] h-auto
									${smallVersion ? 'lg:w-[110px]' : 'lg:w-[130px]'}
									`}
								style={{
									transition: `width ${smallVersion ? '700ms' : '300ms'} ease-in-out`
								}}
							/>
						</Link>
					) : (
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}
						>
							<img
								src="/logos/YakoWeb.svg"
								alt="Logo"
								className={`
									svg w-[90px] sm:w-[100px] md:w-[110px] h-auto
									${smallVersion ? 'lg:w-[110px]' : 'lg:w-[130px]'}
									`}
								style={{
									transition: `width ${smallVersion ? '700ms' : '300ms'} ease-in-out`
								}}
							/>
						</a>
					)}

					{/* Links – hidden on small screens */}
					<ul className="hidden md:flex flex-row md:gap-4 lg:gap-6 xl:gap-12">
						{navigationItems.map((item) => (
							<li key={item.name} className="relative group">
								{item.link ? (
									<Link
										href={item.link}
										onClick={() => {
											trackGoal(`navbar_${item.name.toLowerCase()}`, `Click ${item.name} on Navbar`);
										}}
										className={`
											sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[15px] font-medium text-black
											${smallVersion ? 'xl:text-[13px]' : 'xl:text-[15px]'}
										`}
										style={{
											transition: `font-size ${smallVersion ? '700ms' : '300ms'} ease-in-out`,
										}}
									>
										{item.name}
									</Link>
								) : (
									<button
										type="button"
										className={`
											sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[15px] font-medium text-black cursor-default
											${smallVersion ? 'xl:text-[13px]' : 'xl:text-[15px]'}
										`}
										style={{
											transition: `font-size ${smallVersion ? '700ms' : '300ms'} ease-in-out`,
										}}
									>
										{item.name}
									</button>
								)}

								{/* Underline bar */}
								{item.link && (
									<span
										className={`absolute left-0 bottom-0 h-[1px] bg-dark transition-all ${
											currentPage === item.link ? 'w-full' : 'w-0 group-hover:w-full'
										}`}
									></span>
								)}

								{/* Popup message for null links */}
								{!item.link && (
									<div className="absolute left-1/2 -translate-x-1/2 mt-1 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
										{t('comingSoon')}
									</div>
								)}
							</li>
						))}
					</ul>

					{/* CTA Button – slightly smaller on phones */}
					<a
						href="https://calendly.com/nazar_yakov/yakoweb"
						onClick={() => {
							trackGoal('book_an_intro_call_navbar', 'Book an intro call on Navbar');
						}}
						target="_blank"
						className={`hidden md:flex
							md:w-[150px] lg:w-[190px] xl:w-[190px]
							${smallVersion ? 'md:h-[35px]' : 'md:h-[45px]'}
							items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83]
							shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]
							${smallVersion ? 'p-[4px]' : 'p-[6px]'}
							transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5
						`}
						style={{
							transition: `height ${smallVersion ? '700ms' : '300ms'} ease-in-out, padding ${smallVersion ? '700ms' : '300ms'} ease-in-out`
						}}
					>
						<div className={`text-white
							text-[13px] sm:text-[11.5px] md:text-[12.5px] lg:text-[15px]
							${smallVersion ? 'xl:text-[14px]' : 'xl:text-[15px]'}
							select-none relative flex items-center justify-center w-full h-full rounded-[25px]
							bg-gradient-to-r from-[#9568E3] to-[#563C83]
							shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]
						`}
							style={{
								transition: `font-size ${smallVersion ? '700ms' : '300ms'} ease-in-out`
							}}
						>
							<span className="font-semibold">
								{t('bookCall')}
							</span>
							<span
								className="absolute blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
								aria-hidden="true"
							>
								{t('bookCall')}
							</span>
						</div>
					</a>

					{/* Mobile Menu Icon – visible only on sm and below */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden flex items-center justify-center w-[42px] h-[42px] bg-backgroundSecondary"
					>
						{isMenuOpen ? (
							<XIcon size={24} weight="bold" className="text-black" />
						) : (
							<ListIcon size={24} weight="bold" className="text-black" />
						)}
					</button>
				</div>
				{isMenuOpen && (
					<div className={`sm:mx-20 mx-10 md:hidden absolute top-full mt-2 left-0 right-0 rounded-[30px] bg-SecondaryBackground px-6 py-4 z-40 shadow-[0_0_30px_rgba(26,6,61,0.20)]`}>
						<ul className="flex flex-col items-center divide-y divide-gray-300">
							{navigationItems.map((item, index) => (
								<li key={item.name} className="w-full py-2 first:pt-0 last:pb-0 ">
									<Link
										href={item.link}
										onClick={() => {
											setIsMenuOpen(false)
											trackGoal(`navbar_${item.name.toLowerCase()}`, `Click ${item.name} on Navbar`);
										}}
										className={`${item.link ? "text-black" : "text-dark/60"} text-base font-medium w-full flex justify-center`}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</header>
	);
}

export default Navbar;