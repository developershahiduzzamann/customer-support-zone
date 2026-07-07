

const Card = () => {
    return (
        <div>
            <div>
                <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-sans text-[#334155]">
                    <div className="max-w-7xl mx-auto space-y-8 pb-5">

                        {/* Top Gradient Banner Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* In-Progress Banner */}
                            <div className="bg-gradient-to-r from-[#8155e3] to-[#6366f1] text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-sm">
                                <div className="absolute inset-0 from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                                <h3 className="text-xl font-normal opacity-90 tracking-wide">In-Progress</h3>
                                <p className="text-6xl font-bold mt-2 font-mono">0</p>
                            </div>

                            {/* Resolved Banner */}
                            <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-sm">
                                <div className="absolute inset-0  from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                                
                                <h3 className="text-xl font-normal opacity-90 tracking-wide">Resolved</h3>
                                <p className="text-6xl font-bold mt-2 font-mono">0</p>
                            </div>
                            
                        </div>

                        {/* Layout Split Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                            {/* Left Layout Container: Customer Tickets Grid */}
                            <div className="lg:col-span-2 space-y-4">
                                <h2 className="text-xl font-bold text-[#334155] tracking-tight">Customer Tickets</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Card 1 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Login Issues - Can't Access Account</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1001</span>
                                                <span className="font-bold text-[#ef4444] tracking-wider text-[10px]">HIGH PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>John Smith</span>
                                                <span>1/15/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Payment Failed - Card Declined</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer attempted to pay using Visa ending 1324 but the payment keeps failing despite sufficient balance.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1002</span>
                                                <span className="font-bold text-[#ef4444] tracking-wider text-[10px]">HIGH PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Sarah Johnson</span>
                                                <span>1/16/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Unable to Download Invoice</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#fef3c7] text-[#d97706]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>In- Progress
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer cannot download their January invoice from the billing section. The download button is...</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1003</span>
                                                <span className="font-bold text-[#f59e0b] tracking-wider text-[10px]">MEDIUM PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Michael Brown</span>
                                                <span>1/17/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Incorrect Billing Address</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer's billing address shows a different city. They updated it but it still displays the old one.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1004</span>
                                                <span className="font-bold text-[#10b981] tracking-wider text-[10px]">LOW PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Emily Davis</span>
                                                <span>1/18/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 5 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">App Crash on Launch</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer reports that the mobile app crashes immediately upon opening on Android 13.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1005</span>
                                                <span className="font-bold text-[#ef4444] tracking-wider text-[10px]">HIGH PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>David Wilson</span>
                                                <span>1/19/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 6 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Refund Not Processed</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#fef3c7] text-[#d97706]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>In- Progress
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer requested a refund two weeks ago but has not received the amount yet.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1006</span>
                                                <span className="font-bold text-[#f59e0b] tracking-wider text-[10px]">MEDIUM PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Sophia Taylor</span>
                                                <span>1/20/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 7 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Two-Factor Authentication Issue</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer is not receiving 2FA codes on their registered phone number.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1007</span>
                                                <span className="font-bold text-[#ef4444] tracking-wider text-[10px]">HIGH PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>James Anderson</span>
                                                <span>1/21/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 8 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Unable to Update Profile Picture</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer tries to upload a new profile picture but gets 'Upload failed' error.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1008</span>
                                                <span className="font-bold text-[#10b981] tracking-wider text-[10px]">LOW PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Olivia Martinez</span>
                                                <span>1/22/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 9 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Subscription Auto-Renewal</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#fef3c7] text-[#d97706]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>In- Progress
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer wants to enable auto-renewal for their subscription but the toggle is disabled.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1009</span>
                                                <span className="font-bold text-[#f59e0b] tracking-wider text-[10px]">MEDIUM PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Liam Thomas</span>
                                                <span>1/17/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 10 */}
                                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">Missing Order Confirmation Email</h4>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Open
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">Customer placed an order but didn't receive a confirmation email even though payment succeeded.</p>
                                        </div>
                                        <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-slate-400">#1010</span>
                                                <span className="font-bold text-[#f59e0b] tracking-wider text-[10px]">MEDIUM PRIORITY</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span>Isabella Garcia</span>
                                                <span>1/24/2024</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Right Layout Container: Task Management Side Panels */}
                            <div className="space-y-6 lg:sticky lg:top-8">

                                {/* Task Status Information Card */}
                                <div className="bg-transparent p-1">
                                    <h3 className="text-lg font-bold text-[#2e3a52] mb-1">Task Status</h3>
                                    <p className="text-sm text-slate-400">Select a ticket to add to Task Status</p>
                                </div>

                                {/* Resolved Task Logs Section */}
                                <div className="bg-transparent p-1">
                                    <h3 className="text-lg font-bold text-[#2e3a52] mb-1">Resolved Task</h3>
                                    <p className="text-sm text-slate-400">No resolved tasks yet.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;