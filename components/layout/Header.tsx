// components/layout/Header.tsx

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, Users, Globe, House, Waves, Trello, Castle, Mountain, Tag } from 'lucide-react';
import { SearchInputProps } from '@/interfaces';

// --- Internal Data & Components ---

// Static data based on the mockup image
const SEARCH_INPUTS = [
  { label: "Location", placeholder: "Search destination" },
  { label: "Check in", placeholder: "Add date" },
  { label: "Check out", placeholder: "Add date" },
  { label: "People", placeholder: "Add guest" },
];

const CATEGORIES = [
  { label: "Rooms", icon: House },
  { label: "Mansion", icon: Castle },
  { label: "Countryside", icon: Mountain },
  { label: "Villa", icon: House, isActive: true }, // Active state
  { label: "Tropical", icon: Waves },
  { label: "New", icon: Trello },
  { label: "Pool", icon: Waves },
  { label: "Beachfront", icon: Waves },
  { label: "City", icon: Trello },
];


const SearchInput: React.FC<SearchInputProps> = ({ label, placeholder, isDivider }) => {
  return (
    <div className={`py-2 px-4 md:px-6 hover:bg-gray-100 rounded-full cursor-pointer transition-colors min-w-[120px] md:min-w-[150px] ${isDivider ? 'border-r border-gray-200' : ''}`}>
      <label className="text-xs font-semibold block">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="text-sm placeholder-gray-400 bg-transparent w-full focus:outline-none"
      />
    </div>
  );
};

const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-md">
            {SEARCH_INPUTS.map((input, index) => (
                <div key={input.label} className="flex-grow hidden lg:block">
                    <SearchInput 
                        label={input.label} 
                        placeholder={input.placeholder} 
                        isDivider={index < SEARCH_INPUTS.length - 1} 
                    />
                </div>
            ))}
            
            {/* Mobile Search Button */}
            <div className='flex lg:hidden flex-grow px-4 py-2 items-center'>
                <Search size={20} className='text-gray-500 mr-2'/>
                <span className='text-sm text-gray-500'>Search destinations...</span>
            </div>

            {/* Search Button (Orange) */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 mx-2 transition-colors flex items-center justify-center shadow-md">
                <Search size={20} />
            </button>
        </div>
    );
};

interface CategoryItemProps {
    label: string;
    Icon: React.ElementType; 
    isActive?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, Icon, isActive }) => {
    return (
        <div 
            className={`flex flex-col items-center cursor-pointer transition-colors px-4 pt-2 pb-2 
              ${isActive 
                  ? 'text-gray-900 border-b-2 border-gray-900 font-semibold' 
                  : 'text-gray-500 hover:text-gray-800'}`}
        >
            <Icon size={24} />
            <span className="text-xs mt-1 whitespace-nowrap">{label}</span>
        </div>
    );
};

// --- Main Header Component ---

const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100">
      {/* Top Bar (Green Promo) */}
      <div className="bg-green-700 text-white p-2.5 flex justify-center">
        <div className="flex items-center justify-between text-sm max-w-7xl w-full px-4">
          <div className='flex items-center space-x-2'>
              <Globe size={18} />
              <p className="hidden sm:block">
                Overseas trip? Get the latest information on travel guides
              </p>
          </div>
          <button className="bg-green-800 hover:bg-green-900 text-white text-xs font-semibold py-1 px-3 rounded-full transition-colors">
            More Info
          </button>
        </div>
      </div>
      
      {/* Main Nav Bar */}
      <div className="py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-800 mr-8">
                <span className="text-4xl text-green-700">alx</span>
            </Link>

            {/* Search Bar */}
            <div className='hidden sm:block flex-grow'>
                <SearchBar />
            </div>
            
            {/* Sign In/Sign Up Placeholder */}
            <div className="rounded-full border border-gray-300 p-2 cursor-pointer hover:bg-gray-100 transition-colors ml-8 hidden sm:flex items-center space-x-2">
                <span className='text-sm font-medium'>Sign In / Sign Up</span>
                <Users size={24} className="text-gray-500" />
            </div>

            {/* Mobile User Icon */}
            <div className='block sm:hidden ml-4'>
                <Users size={24} className="text-gray-500" />
            </div>
        </div>
      </div>

      {/* Category Scroll Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="flex space-x-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {CATEGORIES.map((cat) => (
                <CategoryItem 
                    key={cat.label} 
                    label={cat.label} 
                    Icon={cat.icon} 
                    isActive={cat.isActive} 
                />
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;