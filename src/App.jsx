
import icon from './img/icon-list.svg'
import bg from './img/illustration-sign-up-desktop.svg'


function App() {
  return (
    <>
      <div className="min-h-screen bg-[#1d1f2f] flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row max-w-4xl bg-white rounded-2xl overflow-hidden shadow-xl">

          {/* Left side */}
          <div className="basis-[60%] p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1d1f2f] mb-4">Stay updated!</h2>
            <p className="text-gray-700 mb-4">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="mb-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <img
                  src={icon}
                  alt="Check icon"
                  className="w-4 h-4 mr-2"
                />
                Product discovery and building what matters
              </li>
              <li className="flex items-center">
                <img
                  src={icon}
                  alt="Check icon"
                  className="w-4 h-4 mr-2"
                />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-center">
                <img
                  src={icon}
                  alt="Check icon"
                  className="w-4 h-4 mr-2"
                />
                And much more!
              </li>
            </ul>
            <form className="flex flex-col space-y-3">
              <label className="text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                placeholder="email@company.com"
                className="p-3 border border-gray-300 rounded-md"
              />
              <button type="submit" className="bg-[#1d1f2f] text-white py-3 rounded-md font-medium hover:opacity-90" >Subscribe to monthly newsletter
              </button>
            </form>
          </div>


          {/* Right side */}
          <div className="basis-[40%] hidden md:block">
            <img
              src=bg
              alt="Illustration"
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </div>
        </div>

      </div>

    </>
  )
}

export default App
