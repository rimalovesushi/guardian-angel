import { Navbar } from "./components/Navbar"
import Schedule from "./components/Schedule"


function App() {

  return (
    <main>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-yellow-200 px-20 py-10">Today's Activity</h2>
          <p className="text-base text-left px-20 text-gray-600">
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
