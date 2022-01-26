import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function Navbar() {
    return (
      <nav className="navbar bg-gradient-to-r from-indigo-600 via-indigo-400 to-violet-400">
        <div className="container flex mx-auto py-12">
          <div className="w-3/12">
            <Logo/>
          </div>
          <div className="w-6/12">
            <Nav/>
          </div>
          <div className="w-3/12">
            <Button/>
          </div>
        </div>
      </nav>
    )
  }