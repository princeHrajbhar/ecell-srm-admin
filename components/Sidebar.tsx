import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Members', href: '/members' },
    { label: 'Events', href: '/events' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Blast Message', href: '/messages' },
    { label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="w-full md:w-1/5 bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-xl font-bold text-center text-gray-200">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-4 rounded-md ${
                  pathname === item.href ? 'bg-gray-600' : 'hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
