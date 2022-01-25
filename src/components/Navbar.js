import Logo from "./Logo";
export default function App() {
    return (
      <nav className="navbar bg-gradient-to-r from-indigo-600 via-indigo-400 to-violet-400">
        <div className="container flex mx-auto py-12">
          <div className="w-3/12">
            <Logo/>
          </div>
          <div className="w-6/12 flex justify-center space-x-10 text-lg font-semibold text-white text-opacity-60">
            <a href="#">Profile</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
          </div>
          <div className="w-3/12">
            <div className="button text-md text-semibold">
              <a href="#" className="text-yellow-300 border rounded-full border-yellow-300 px-8 py-2 hover:opacity-80">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }