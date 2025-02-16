export default function Schedule() {
    return (
      <div className=" py-10">
        <div className="bg-yellow-50 rounded-lg shadow-lg px-6 py-4 w-fit">
          <h2 className="text-2xl font-bold text-yellow-300">Weekly Schedule</h2>
        </div>
  
        <img 
          src="/schedule.png" 
          alt="Daycare Schedule" 
          className="h-75 w-150 object-cover rounded-lg shadow-lg mt-6"
        />
      </div>
    );
  }
  