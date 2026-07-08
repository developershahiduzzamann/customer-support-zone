import { use, useState } from "react";               
import CardDetails from "../CardDetails/CardDetails";
import { toast } from "react-toastify";

const Card = ({ ticketsPromise }) => {
    const loadTickets = use(ticketsPromise);
    const [tasks, setTasks] = useState([]);

    const handleCardClick = (ticket) => {
        const isExist = tasks.some(task => task.id === ticket.id);
        if (!isExist) {
            const newTask = { ...ticket, taskStatus: 'in-progress' };
            setTasks([...tasks, newTask]);
            toast(`"${ticket.title}"Successfully added to In-Progress!`);
        } else {
            toast(`This ticket is already on the task list!`);
        }
    };

    const handleCompleteTask = (id) => {
        const targetTask = tasks.find(task => task.id === id);
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, taskStatus: 'resolved' } : task
        ));
        if (targetTask) {
            toast(`"${targetTask.title}" Resolved successfully!`);
        }
    };

    const inProgressCount = tasks.filter(task => task.taskStatus === 'in-progress').length;
    const resolvedCount = tasks.filter(task => task.taskStatus === 'resolved').length;

    return (
        <div>
            <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-sans text-[#334155]">
                <div className="max-w-7xl mx-auto space-y-8 pb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-[#8155e3] to-[#6366f1] text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                            <h3 className="text-xl font-normal opacity-90 tracking-wide">In-Progress</h3>
                            <p className="text-6xl font-bold mt-2 font-mono">{inProgressCount}</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                            <h3 className="text-xl font-normal opacity-90 tracking-wide">Resolved</h3>
                            <p className="text-6xl font-bold mt-2 font-mono">{resolvedCount}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 space-y-4">
                            <h2 className="text-xl font-bold text-[#334155] tracking-tight">Customer Tickets</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {loadTickets?.map((ticket) => { 
                                    const trackedTask = tasks.find(t => t.id === ticket.id);
                                    const currentStatus = trackedTask ? trackedTask.taskStatus : (ticket.status || "Open");
                                    return (
                                        <div 
                                            key={ticket.id} 
                                            onClick={() => handleCardClick(ticket)}
                                            className="cursor-pointer hover:scale-[1.01] transition-transform duration-200"
                                        >
                                            <CardDetails ticket={{ ...ticket, status: currentStatus }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-6 lg:sticky lg:top-8">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                                <h3 className="text-lg font-bold text-[#2e3a52]">Task Status</h3>
                                {tasks.filter(t => t.taskStatus === 'in-progress').length === 0 ? (
                                    <p className="text-sm text-slate-400">Select a ticket to add to Task Status</p>
                                ) : (
                                    <div className="space-y-3">
                                        {tasks.filter(t => t.taskStatus === 'in-progress').map(task => (
                                            <div key={task.id} className="bg-slate-50 border border-slate-100 rounded-xl p-4 shadow-sm space-y-3">
                                                <h4 className="font-semibold text-sm text-[#1e293b]">{task.title}</h4>
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleCompleteTask(task.id);
                                                    }}
                                                    className="w-full bg-[#10b981] hover:bg-[#059669] text-white text-sm font-semibold py-2 rounded-xl transition-colors duration-200"
                                                >
                                                    Complete
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                                <h3 className="text-lg font-bold text-[#2e3a52]">Resolved Task</h3>
                                {tasks.filter(t => t.taskStatus === 'resolved').length === 0 ? (
                                    <p className="text-sm text-slate-400">No resolved tasks yet.</p>
                                ) : (
                                    <div className="space-y-3">
                                        {tasks.filter(t => t.taskStatus === 'resolved').map(task => (
                                            <div key={task.id} className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 line-through text-slate-400 text-sm font-medium">
                                                {task.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;