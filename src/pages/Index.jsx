import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-10 h-10" />
            <span className="ml-2 text-xl font-bold">Logo</span>
          </div>
          <nav className="flex space-x-4">
            <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
            <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-16 p-4">
        <h1 className="text-3xl text-center">Welcome to Our Website</h1>
        <p className="text-center mt-4">This is a placeholder text for the main content area.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;