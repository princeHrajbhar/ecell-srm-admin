const Header = () => {
    return (
      <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Welcome to the Admin Panel</h1>
        <div className="flex items-center space-x-4">
          {/* Add user profile, logout, etc. */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Logout</button>
        </div>
      </div>
    );
  };
  
  export default Header;
  