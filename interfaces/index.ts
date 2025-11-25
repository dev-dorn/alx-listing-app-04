interface AddressProps {
  state: string;
  city: string;
  country: string;

}
interface OffersProps {
  bed : string;
  shower: string;
  occupants: string;

}
export interface PropertyProps {
  name?: string;
  address?: AddressProps;
  rating?: number;
  category?: string[];
  price?: number;
  offers?: OffersProps;
  image: string;
  discount?: number | string;
  id: string;
}
export interface SearchInputProps {
  label: string;
  placeholder: string;
  isDivider?: boolean;
}
export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}