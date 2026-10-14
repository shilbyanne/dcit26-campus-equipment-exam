import React from 'react';
import PropTypes from 'prop-types';

export default function EquipmentCard({ 
  name, 
  image, 
  status, 
  serialNumber, 
  location, 
  onActionClick 
}) {
  // Determine status badge colors dynamically
  const statusColors = {
    Available: 'bg-green-100 text-green-800 border-green-200',
    'In Use': 'bg-blue-100 text-blue-800 border-blue-200',
    Maintenance: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Broken: 'bg-red-100 text-red-800 border-red-200',
  };

  const currentStatusColor = statusColors[status] || 'bg-gray-100 text-gray-800 border-gray-200';

  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md overflow-hidden">
      {/* Equipment Image */}
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        ) : (
          /* Fallback icon if no image is provided */
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Header: Name and Status */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{name}</h3>
          <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${currentStatusColor} whitespace-nowrap`}>
            {status}
          </span>
        </div>

        {/* Metadata Details */}
        <div className="space-y-1.5 text-sm text-gray-600 mb-5">
          <p className="flex justify-between">
            <span className="text-gray-400">S/N:</span> 
            <span className="font-mono text-gray-800">{serialNumber}</span>
          </p>
          {location && (
            <p className="flex justify-between">
              <span className="text-gray-400">Location:</span> 
              <span className="text-gray-800">{location}</span>
            </p>
          )}
        </div>

        {/* Action Button */}
        {onActionClick && (
          <button
            onClick={onActionClick}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-150 text-sm"
          >
            Manage Equipment
          </button>
        )}
      </div>
    </div>
  );
}

// Define explicit prop types for safety
EquipmentCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.oneOf(['Available', 'In Use', 'Maintenance', 'Broken']),
  serialNumber: PropTypes.string.isRequired,
  location: PropTypes.string,
  onActionClick: PropTypes.func,
};