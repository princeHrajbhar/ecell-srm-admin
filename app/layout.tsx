import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/globals.css';

export const metadata = {
  title: 'Admin Panel',
  description: 'Manage your platform',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
