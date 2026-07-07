

const Footer = () => {
    return (
        <div className="">
            <footer className="bg-black text-[#94a3b8] font-sans text-sm py-6  md:px-12 lg:px-16 px-6 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto">

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">

                        {/* Column 1: Brand Info */}
                        <div className="lg:col-span-1 sm:col-span-2 md:col-span-3 lg:pr-4">
                            <h2 className="text-white text-lg font-bold mb-4">CS — Ticket System</h2>
                            <p className="text-zinc-400 leading-relaxed max-w-md">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h3 className="text-white font-medium text-base mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Our Mission</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Saled</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h3 className="text-white font-medium text-base mb-4">Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Products & Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Customer Stories</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Download Apps</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Information */}
                        <div>
                            <h3 className="text-white font-medium text-base mb-4">Information</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Join Us</a></li>
                            </ul>
                        </div>

                        {/* Column 5: Social Links */}
                        <div>
                            <h3 className="text-white font-medium text-base mb-4">Social Links</h3>
                            <ul className="space-y-4">
                                {/* Twitter / X */}
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </div>
                                    <a href="#" className="hover:text-white transition-colors duration-200 truncate">@CS — Ticket System</a>
                                </li>

                                {/* LinkedIn */}
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <a href="#" className="hover:text-white transition-colors duration-200 truncate">@CS — Ticket System</a>
                                </li>

                                {/* Facebook */}
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                    </div>
                                    <a href="#" className="hover:text-white transition-colors duration-200 truncate">@CS — Ticket System</a>
                                </li>

                                {/* Email */}
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <a href="mailto:support@cst.com" className="hover:text-white transition-colors duration-200 truncate">support@cst.com</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Copyright Section */}
                    <div className="pt-8 border-t border-zinc-900 text-center text-zinc-500 text-xs md:text-sm">
                        <p>© 2025 CS — Ticket System. All rights reserved.</p>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;