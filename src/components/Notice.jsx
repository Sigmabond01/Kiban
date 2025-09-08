const Notice = () => {
    return (
<div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 mb-6 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-6 max-w-3xl mx-auto px-2 md:px-4 lg:px-10">
    <div className="flex items-start">
        <div className="text-left">
            <h4 className="text-orange-400 font-bold text-lg">IMPORTANT</h4>
            <p className="text-white">
             Make sure you alternate between each lesson of vocabulary and grammar for better understanding
            </p>
        </div>
    </div>
</div>
    );
}

export default Notice;