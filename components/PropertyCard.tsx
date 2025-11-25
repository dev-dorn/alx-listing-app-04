// components/PropertyCard.tsx
import React from 'react';
import { Tag, Star } from 'lucide-react';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
    property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    // Parse discount and price safely
    const discountAmount = property.discount ? Number(property.discount) : 0;
    const price = property.price ?? 0;
    const finalPrice = discountAmount > 0 ? price * (1 - discountAmount / 100) : price;

    return (
        <div className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">

            {/* Image and Discount */}
            <div className="relative h-48 w-full">
                <img
                    src={property.image ?? "/placeholder-image.png"}
                    alt={property.name ?? "Property"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {discountAmount > 0 && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Tag size={14} className="mr-1"/>
                        {discountAmount}% OFF
                    </div>
                )}
            </div>

            <div className="p-4">
                {/* Name and Rating */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold truncate text-gray-800 leading-snug">
                        {property.name ?? "Unnamed Property"}
                    </h3>

                    {property.rating !== undefined && (
                        <div className="flex items-center space-x-1 text-sm font-semibold text-gray-700 flex-shrink-0">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span>{property.rating.toFixed(1)}</span>
                        </div>
                    )}
                </div>

                {/* Location */}
                {property.address && (
                    <p className="text-sm text-gray-500 truncate mt-1">
                        {property.address.city ?? "Unknown City"}, {property.address.country ?? ""}
                    </p>
                )}

                {/* Category */}
                {Array.isArray(property.category) && property.category.length > 0 && (
                    <p className="text-xs text-gray-600 mt-2 truncate">
                        {property.category.slice(0, 2).join(" · ")}
                    </p>
                )}

                {/* Offers */}
                {property.offers && (
                    <div className="flex items-center space-x-3 text-xs text-gray-500 mt-2">
                        {property.offers.bed && <span>{property.offers.bed} bed</span>}
                        {property.offers.shower && <span>{property.offers.shower} bath</span>}
                        {property.offers.occupants && <span>{property.offers.occupants} guests</span>}
                    </div>
                )}

                {/* Price */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-base font-bold text-gray-900">
                        ${finalPrice.toFixed(0)} <span className="font-normal text-sm text-gray-500">/ night</span>
                    </p>

                    {discountAmount > 0 && (
                        <p className="text-xs text-red-500 line-through">${price.toFixed(0)}</p>
                    )}
                </div>
            </div>`
        </div>
    );
};

export default PropertyCard;
