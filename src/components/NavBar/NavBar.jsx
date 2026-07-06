const NavBar = () => {
    return (
        <div>
            <header className="w-full bg-white border-b border-gray-100 font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:h-20 space-y-4 sm:space-y-0">

                        {/* Logo / Brand */}
                        <div className="flex-shrink-0">
                            <a href="#" className="text-xl font-bold text-[#0f1136] tracking-tight">
                                CS — Ticket System
                            </a>
                        </div>

                        {/* Navigation Links & Action Button Container */}
                        <div className="flex flex-col items-center space-y-4 w-full sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-8">
                            {/* Navigation (Wraps cleanly into rows on mobile, aligns horizontally on larger screens) */}
                            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-y-0 sm:space-x-6 lg:space-x-8">
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0f1136] transition-colors duration-200">Home</a>
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0f1136] transition-colors duration-200">FAQ</a>
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0f1136] transition-colors duration-200">Changelog</a>
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0f1136] transition-colors duration-200">Blog</a>
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0f1136] transition-colors duration-200">Download</a>
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0f1136] transition-colors duration-200">Contact</a>
                            </nav>

                            {/* Action Button (Full width on tiny screens, scales back on larger screens) */}
                            <button className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#8247e5] hover:bg-[#6e36cc] rounded-lg transition-colors duration-200 shadow-sm whitespace-nowrap">
                                <span className="mr-1.5 text-base font-light">+</span> New Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;