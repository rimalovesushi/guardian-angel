import { Navbar } from "./Navbar";
import Schedule from "./Schedule";
import TodaysActivity from "./TodaysActivity";
import TodaysMenu from "./TodaysMenu";
import WeeklyMenu from "./WeeklyMenu";

function Dashboard() {
  return (
    <main>
      <Navbar />
      
      {/* Flex container for Today's Activity and Today's Menu */}
      <div className="flex justify-between items-start w-full px-10 mt-6">
          <TodaysActivity />
          <TodaysMenu />
      </div>
      
      <div className="flex justify-between items-start w-full px-10 mt-8">
        <Schedule />
        <WeeklyMenu />
      </div>
    </main>
  );
}

export default Dashboard;