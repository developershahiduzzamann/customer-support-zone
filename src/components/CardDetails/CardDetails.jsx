const CardDetails = ({ ticket }) => {
    // 🛠️ ticket || {} ব্যবহার করা হলো সেফটির জন্য
    const { title, status, description, id, priority, customer_name, date } = ticket || {};

    return (
        <div>
            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">{title}</h4>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 bg-[#d1fae5] text-[#059669]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>{status}
                        </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{description}</p>
                </div>
                
                <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400">#{id}</span>
                        
                        {/* 🛠️ String(priority) করায় সংখ্যা বা অবজেক্ট আসলেও তোলপাড় হবে না, নিরাপদে কাজ করবে */}
                        <span className="font-bold text-[#ef4444] tracking-wider text-[10px]">
                            {priority ? String(priority).toUpperCase() : "LOW"}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>{customer_name}</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;