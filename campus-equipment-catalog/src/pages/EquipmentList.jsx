import React from 'react';
import EquipmentCard from '../components/EquipmentCard.jsx';

export default function EquipmentList({ equipment }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Equipment Inventory</h1>
      
      {equipment.length === 0 ? (
        <p className="text-gray-500">No equipment found.</p>
      ) : (
        /* Responsive Grid layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((item) => {
            // Map your JSON "available" boolean into a human-readable text status
            const currentStatus = item.available ? "Available" : "In Use";

            return (
              <EquipmentCard
                key={item.id}
                name={item.name}
                image={item.image || ""} // Falls back to icon if no URL is provided
                status={currentStatus} 
                serialNumber={item.id}   // Uses your "EQ-XXX" format as serial number
                location={item.location}
                onActionClick={() => alert(`Viewing details for: ${item.name}`)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}