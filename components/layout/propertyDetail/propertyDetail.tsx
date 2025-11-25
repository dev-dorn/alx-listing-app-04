// components/property/PropertyDetail.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";
import { Star } from "lucide-react";

interface PropertyDetailProps {
    property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{property.name ?? "Unnamed Property"}</h1>

            {property.rating !== undefined && (
                <div className="flex items-center mb-4">
                    <Star size={18} className="text-yellow-500 fill-yellow-500 mr-1" />
                    <span>{property.rating.toFixed(1)}</span>
                </div>
            )}

            <p className="text-gray-600 mb-4">
                {property.address?.city ?? "Unknown City"}, {property.address?.country ?? ""}
            </p>

            <img
                src={property.image ?? "/placeholder-image.png"}
                alt={property.name ?? "Property"}
                className="w-full h-96 object-cover mb-4 rounded-lg"
            />

            <div className="text-gray-800 mb-4">
                <p><strong>Price: </strong>${property.price ?? 0}/night</p>
                {property.discount && <p className="text-red-500 line-through">${property.price}</p>}
            </div>

            {property.category && property.category.length > 0 && (
                <p className="text-sm text-gray-500 mb-4">
                    Category: {property.category.join(" · ")}
                </p>
            )}

            {property.offers && (
                <div className="flex space-x-4 text-sm text-gray-600">
                    {property.offers.bed && <span>{property.offers.bed} bed</span>}
                    {property.offers.shower && <span>{property.offers.shower} bath</span>}
                    {property.offers.occupants && <span>{property.offers.occupants} guests</span>}
                </div>
            )}
        </div>
    );
};

export default PropertyDetail;
