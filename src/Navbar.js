import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = "text-brand-accent border-b-2 border-brand-accent pb-1 opacity-100";
  const normalStyle = "text-brand-text opacity-80 hover:opacity-100 hover:text-brand-accent transition-all duration-300";

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/20">
      <div className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <Link to="/" className="font-bold text-3xl tracking-tighter text-brand-text hover:text-brand-accent">
          Portfolio<span className="text-brand-primary">.</span>
        </Link>

        <div className="flex space-x-8 text-base font-bold uppercase tracking-widest">
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Home</NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Resume</NavLink>
          <NavLink to="/transcript" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Transcript</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;