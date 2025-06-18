import React, { useState } from 'react';
import { ListIcon, XIcon } from '@phosphor-icons/react';

function Navbar({ currentPage }) {
  // Navigation items with name and slug
  const navigationItems = [
    { name: 'Pricing', slug: '#pricing' },
    { name: 'Services', slug: '#services' },
    { name: 'FAQs', slug: '#faqs' },
    { name: 'Case studies', slug: 'case-studies' },
    { name: 'Blog', slug: 'blog' }
  ];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-7 z-50 w-full flex justify-center
			2xl:px-48 xl:px-40 lg:px-32 md:px-16 sm:px-20 px-10">
  			<div className="bg-SecondaryBackground font-manrope shadow-[0_0_30px_rgba(26,6,61,0.20)] hover:shadow-[0_0_30px_rgba(26,6,61,0.25)]
				flex flex-row items-center justify-between h-[60px] md:h-[70px] rounded-[40px]
				px-8 sm:px-6 md:px-8 lg:px-12 2xl:px-14
				w-full max-w-screen
				text-black transition-shadow duration-300 ease-in-out"
			>
				<div className="flex w-full items-center justify-between gap-4 md:gap-6">
					{/* Logo */}
					<a
						href={currentPage ? '/' : '#'}
						onClick={(e) => {
						if (!currentPage) {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}
						}}
					>
						<img
							src="/logos/YakoWeb.svg"
							alt="Logo"
							className="svg w-[90px] sm:w-[100px] md:w-[110px] lg:w-[130px] h-auto"
						/>
					</a>

					{/* Links – hidden on small screens */}
					<ul className="hidden md:flex flex-row md:gap-4 lg:gap-6 xl:gap-12">
						{navigationItems.map((item) => (
						<li key={item.slug} className="relative group">
							<a
							href="#"
							className="sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[15px] font-medium text-black"
							>
							{item.name}
							</a>
							<span
							className={`absolute left-0 bottom-0 h-[1px] bg-dark transition-all ${
								currentPage === item.slug ? 'w-full' : 'w-0 group-hover:w-full'
							}`}
							></span>
						</li>
						))}
					</ul>
					
					{/* CTA Button – slightly smaller on phones */}
					<a
						href="https://calendly.com/nazar_yakov/yakoweb"
						target="_blank"
						className="hidden md:flex w-[150px] sm:w-[160px] md:w-[150px] lg:w-[190px] xl:w-[190px] h-[40px] sm:h-[42px] md:h-[44px] lg:h-[45px] items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
						>
						<div className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]">
							<span className="text-white text-[13px] sm:text-[11.5px] md:text-[11.5px] lg:text-[15px] xl:text-[15px] font-semibold">
							Book an Intro Call
							</span>
							<span
							className="absolute text-white text-[13px] sm:text-[11.5px] md:text-[12.5px] lg:text-[15px] xl:text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
							aria-hidden="true"
							>
							Book an Intro Call
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
					<div className="sm:mx-20 mx-10 md:hidden absolute top-full mt-2 left-0 right-0 bg-SecondaryBackground rounded-[30px] px-6 py-4 z-40 shadow-[0_0_30px_rgba(26,6,61,0.20)]">
						<ul className="flex flex-col items-center divide-y divide-gray-300">
							{navigationItems.map((item, index) => (
								<li key={item.slug} className="w-full py-2 first:pt-0 last:pb-0">
									<a
										href={item.slug}
										onClick={() => setIsMenuOpen(false)}
										className="text-black text-base font-medium w-full flex justify-center"
									>
										{item.name}
									</a>
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