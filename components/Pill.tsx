// components/Pill.tsx
import React from 'react';

interface PillProps {
    label: string;
    isActive: boolean;
    onClick: (label: string) => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={() => onClick(label)}
            className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${isActive
                    ? 'bg-green-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
            `}
        >
            {label}
        </button>
    );
};

export default Pill;