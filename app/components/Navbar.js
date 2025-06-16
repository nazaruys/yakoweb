import React from 'react';

function Navbar({ currentPage }) {
  // Navigation items with name and slug
  const navigationItems = [
    { name: 'Pricing', slug: '#pricing' },
    { name: 'Services', slug: '#services' },
    { name: 'FAQs', slug: '#faqs' },
    { name: 'Case studies', slug: 'case-studies' },
    { name: 'Blog', slug: 'blog' }
  ];

	return (
		<header className="fixed top-7 z-50 w-full flex justify-center">
  			<div className="bg-SecondaryBackground font-manrope shadow-[0_0_30px_rgba(26,6,61,0.20)] hover:shadow-[0_0_30px_rgba(26,6,61,0.25)] flex flex-row items-center justify-between h-[70px] rounded-[40px] px-14 text-black transition-shadow duration-300 ease-in-out w-[calc(100%-24rem)] max-w-screen-2xl">
				{/* Logo */}
				<a
					href={currentPage ? '/' : '#'}
					onClick={(e) => {
						if (!currentPage) {
							e.preventDefault(); // prevent default anchor behavior
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}
					}}
				>
					<img src="/logos/YakoWeb.svg" alt="Logo" className="w-[130px] h-auto" />
				</a>
				{/* Links */}
				<ul
					className="flex flex-row gap-12"
				>
					{navigationItems.map((item) => (
						<li key={item.slug} className="relative group">
							<a
								href={item.slug}
								className="text-[15px] font-medium text-black"
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
				{/* Button */}
				<a
					href="#"
					className="w-[190px] h-[45px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
				>
					<div
						className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
					>
						{/* Sharp front text */}
						<span
							className="text-white text-[15px] font-semibold"
						>
							Order your website
						</span>
						<span
							className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
							aria-hidden="true"
						>
							Order your website
						</span>

					</div>
				</a>
			</div>
		</header>
	);
}

export default Navbar;