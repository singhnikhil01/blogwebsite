"use client";
import { useState } from "react";
import {
  FiHome,
  FiPlus,
  FiImage,
  FiEdit,
  FiSettings,
  FiUser,
  FiLock,
  FiLogOut,
  FiMenu,
  FiX
} from "react-icons/fi";
import { Menu } from "@headlessui/react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", icon: FiHome, component: "dashboard" },
    { name: "Add Project", icon: FiPlus, component: "addProject" },
    { name: "Manage Images", icon: FiImage, component: "addImages" },
    { name: "Edit Blogs", icon: FiEdit, component: "editBlogs" },
    { name: "Home Setup", icon: FiSettings, component: "homeSetup" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white dark:bg-gray-800 shadow-sm z-20">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-blue-500">Admin Panel</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 shadow-lg transform transition-all duration-300 z-30
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative`}
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-blue-400">Admin Dashboard</h2>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.component}
              onClick={() => {
                setActiveComponent(item.component);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all
                ${activeComponent === item.component
                  ? "bg-blue-500/20 text-blue-400"
                  : "hover:bg-gray-700 text-gray-300"
                }`}
            >
              <item.icon className="text-xl min-w-[24px]" />
              <span className="text-left">{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 pt-16 md:pt-0">
        {/* Desktop Header */}
        <header className="hidden md:flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 capitalize">
            {navigation.find((nav) => nav.component === activeComponent)?.name}
          </h1>

          <div className="flex items-center gap-4">
            <Menu as="div" className="relative">
              <Menu.Button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20 dark:hover:bg-blue-500/30"
              >
                <FiUser className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">Admin</span>
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-100 dark:border-gray-600">
                <div className="p-2 space-y-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`w-full flex items-center space-x-2 p-2 rounded ${
                          active ? "bg-gray-100 dark:bg-gray-600" : ""
                        }`}
                      >
                        <FiLock className="text-gray-600 dark:text-gray-300" />
                        <span className="dark:text-gray-200">Change Password</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`w-full flex items-center space-x-2 p-2 rounded ${
                          active ? "bg-gray-100 dark:bg-gray-600" : ""
                        }`}
                      >
                        <FiLogOut className="text-gray-600 dark:text-gray-300" />
                        <span className="dark:text-gray-200">Logout</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            
            {/* Desktop Logout Button */}
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-lg transition-colors"
              onClick={() => console.log("Logout")}
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 md:p-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6">
            {children || (
              <div className="text-gray-500 dark:text-gray-400">
                {activeComponent === "dashboard" && <DashboardHome />}
                {activeComponent === "addProject" && <AddProject />}
                {activeComponent === "addImages" && <AddImages />}
                {activeComponent === "editBlogs" && <EditBlogs />}
                {activeComponent === "homeSetup" && <HomeSetup />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Components with Dark Mode
const DashboardHome = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
      Welcome back, Admin
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { title: "Total Projects", value: "24", color: "bg-blue-500/10", text: "text-blue-500" },
        { title: "Active Users", value: "1.2k", color: "bg-gray-100 dark:bg-gray-700", text: "text-gray-800 dark:text-gray-200" },
        { title: "Monthly Visits", value: "45k", color: "bg-orange-500/10", text: "text-orange-500" },
      ].map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} p-6 rounded-xl shadow-sm transition hover:shadow-md`}
        >
          <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.title}</h3>
          <p className={`text-3xl font-bold mt-2 ${stat.text}`}>{stat.value}</p>
        </div>
      ))}
    </div>
    
    <div className="bg-blue-500/10 dark:bg-gray-700 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Recent Activities
      </h3>
      <div className="space-y-4">
        {['Project "Portfolio v2" updated', 'New blog post published', 'User feedback received'].map(
          (activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg"
            >
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-300">{activity}</span>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

const AddProject = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">New Project</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Project Title
        </label>
        <input
          type="text"
          placeholder="Amazing Project"
          className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent dark:text-gray-200"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description
        </label>
        <textarea
          rows={4}
          className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent dark:text-gray-200"
          placeholder="Describe your project..."
        />
      </div>
      
      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Save Project
        </button>
      </div>
    </div>
  </div>
);

const AddImages = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Image Manager</h2>
    <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center">
      <div className="max-w-xs mx-auto">
        <FiImage className="mx-auto text-3xl text-gray-400 mb-4" />
        <p className="text-gray-600 dark:text-gray-400 mb-4">Drag and drop images here</p>
        <p className="text-gray-400 text-sm">or</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Browse Files
        </button>
      </div>
    </div>
  </div>
);

const EditBlogs = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Blog Management</h2>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
      {[1, 2, 3].map((post) => (
        <div
          key={post}
          className="p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium dark:text-gray-200">Blog Post Title {post}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Last updated 2 days ago</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400">
                <FiEdit />
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400">
                <FiX />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HomeSetup = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Home Configuration</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="font-medium mb-4 dark:text-gray-200">Hero Section</h3>
        <input
          type="text"
          placeholder="Main Heading"
          className="w-full p-2 border dark:border-gray-600 rounded-lg mb-4 bg-transparent dark:text-gray-200"
        />
        <textarea
          placeholder="Hero Text"
          className="w-full p-2 border dark:border-gray-600 rounded-lg h-32 bg-transparent dark:text-gray-200"
        />
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="font-medium mb-4 dark:text-gray-200">Featured Content</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded dark:bg-gray-700" />
            <span className="dark:text-gray-300">Show Recent Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded dark:bg-gray-700" />
            <span className="dark:text-gray-300">Show Blog Highlights</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardLayout;