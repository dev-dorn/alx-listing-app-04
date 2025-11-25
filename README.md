# Property Listings Data Structure

This section defines the TypeScript interfaces used to describe the data structure for the property listings in the sample array. These definitions are crucial for ensuring **type safety**, clear component prop definitions, and efficient data handling across the application.

---

## Interfaces

The following interfaces are defined to accurately model the complex structure of each property object, including handling inconsistencies found in the sample data (such as missing keys and a typo).

| Interface | Purpose |
| :--- | :--- |
| **`AddressProps`** | Defines the structure for the property's location (state, city, country). |
| **`OffersProps`** | Defines the structure for property amenities and occupancy (bed, shower, occupants). |
| **`PropertyProps`** | The **main interface** that describes a complete single property listing. |

### TypeScript Definitions

```typescript
/**
 * Defines the structure for the property's location.
 */
interface AddressProps {
  state: string;
  city: string;
  country: string;
}

/**
 * Defines the structure for property offers and capacity.
 */
interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

/**
 * Defines the complete structure for a single property listing.
 * * NOTE: The 'ratinf' key is included and optional fields like 'name', 
 * 'address', and 'rating' are marked with '?' to accommodate the missing 
 * and misspelled keys in the sample data.
 */
export interface PropertyProps {
  name?: string;
  address?: AddressProps;
  rating?: number;
  ratinf?: number; // Matches the typo in the sample data
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
}