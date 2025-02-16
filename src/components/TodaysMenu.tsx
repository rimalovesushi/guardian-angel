export default function TodaysMenu(){
    return (
        <div>
            <div className="bg-yellow-50 rounded-lg shadow-lg px-6 py-4 w-fit">
                <h2 className="text-2xl font-bold text-yellow-300">Today's Menu</h2>
            </div>
            <div className="mt-5">
                <img src="TodaysMeal.jpeg" alt="Daily Menu" className="h-75 w-100 mr-55 object-contain rounded-lg shadow-lg" />
            </div>
        </div>
        
    )
}
