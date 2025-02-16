import { Navbar } from "./components/Navbar";
import Schedule from "./components/Schedule";
import TodaysActivity from "./components/TodaysActivity";
import TodaysMenu from "./components/Todaysmenu";
import WeeklyMenu from "./components/WeeklyMenu";

function App() {
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

export default App;


