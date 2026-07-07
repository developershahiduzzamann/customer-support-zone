import { use } from "react"; // 🛠️ প্রমিজ রেজলভ করার জন্য 'use' হুক ইমপোর্ট করা হলো
import CardDetails from "../CardDetails/CardDetails";

const Card = ({ ticketsPromise }) => {
    // 🛠️ use() হুক স্বয়ংক্রিয়ভাবে প্রমিজ থেকে আসল ডেটা (অ্যারে) বের করে আনবে
    const loadTickets = use(ticketsPromise);

    return (
        <div>
            <div>
                <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-sans text-[#334155]">
                    <div className="max-w-7xl mx-auto space-y-8 pb-5">

                        {/* Top Gradient Banner Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-r from-[#8155e3] to-[#6366f1] text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                                <h3 className="text-xl font-normal opacity-90 tracking-wide">In-Progress</h3>
                                <p className="text-6xl font-bold mt-2 font-mono">0</p>
                            </div>

                            <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
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

                                    {/* 🛠️ এখন loadTickets একটি পিওর অ্যারে, তাই কার্ডগুলো নিখুঁতভাবে রেন্ডার হবে */}
                                    {
                                        loadTickets?.map((ticket) => (
                                            <CardDetails key={ticket.id} ticket={ticket} />
                                        ))
                                    }

                                </div>
                            </div>

                            {/* Right Layout Container: Task Management Side Panels */}
                            <div className="space-y-6 lg:sticky lg:top-8">
                                <div className="bg-transparent p-1">
                                    <h3 className="text-lg font-bold text-[#2e3a52] mb-1">Task Status</h3>
                                    <p className="text-sm text-slate-400">Select a ticket to add to Task Status</p>
                                </div>

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