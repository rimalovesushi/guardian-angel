import { Navbar } from "./components/Navbar"
import Schedule from "./components/Schedule"


function App() {

  return (
    <main>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <div className="bg-yellow-50 rounded-lg shadow-lg px-6 py-4 w-fit mt-6 ml-10">
          <h2 className="text-3xl font-bold text-yellow-200">Today's Activity</h2>
        </div>
          <p className="text-base mt-8 ml-10 text-gray-600">
          *insert activity here*
          </p>
          <div>
            <Schedule />
          </div>
      </div>
    </main>
  )
}

export default App
