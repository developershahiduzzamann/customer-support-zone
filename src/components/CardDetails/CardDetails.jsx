const CardDetails = ({ ticket }) => {
    // 🛠️ ticket || {} ব্যবহার করা হলো সেফটির জন্য
    const { title, status, description, id, priority, customer_name, date } = ticket || {};

    // স্ট্যাটাস অনুযায়ী ডাইনামিক ক্লাসের জন্য হেল্পার ফাংশন
    const getStatusStyles = (currentStatus) => {
        const normalized = String(currentStatus).toLowerCase().trim();
        
        if (normalized === 'in-progress' || normalized === 'in progress') {
            return {
                badge: "bg-amber-50 text-amber-600 border border-amber-200",
                dot: "bg-amber-500"
            };
        }
        
        // Default: Active / Done / Completed (সবুজ কালার)
        return {
            badge: "bg-emerald-50 text-emerald-600 border border-emerald-100",
            dot: "bg-emerald-500"
        };
    };

    const statusStyle = getStatusStyles(status);

    return (
        <div>
            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[190px]">
                <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="font-bold text-[#1e293b] text-[15px] leading-tight">{title}</h4>
                        
                      
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 capitalize ${statusStyle.badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                            {status || "New"}
                        </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{description}</p>
                </div>
                
                <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400">#{id}</span>
                        
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