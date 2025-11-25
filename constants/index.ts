import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    name: "Villa Ocean Breeze",
    address : {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed:"3",
      shower: "3",
      occupants: "4-6"    
    },
    image: "https://shorturl.at/WDIUI",
    discount:"30"
    },
    {
      name: "Cozt Desert Retreat",
      address: {
        state : "Palm Springs",
        city : "California",
        country : "USA"
      },
      rating: 4.92,
      category: ["Desert View", "Pet Friendly", "Self Checkin"],
      price: 1500,
      offers: {
        bed: "2",
        shower: "1",
        occupants: "2-3"

      },
      image: "https://shorturl.at/FvJYo",
      discount: ""
    },
    {
      name: "City Lights Penthouse",
      address: {
        state: "New York",
        city: "New York",
        country: "USA"

      },
      rating: 4.85,
      category: ["City View", "Free WiFi", "24 Checkin"],
      price : 4500,
      offers : {
        bed: "2",
        shower: "2",
        occupants: "2-4"
      },
      image: "https//example.com/image4.jpg",
      discount: "15"

    },
    {
      name: "Reverside Cabin",
      address: {
        state: "Queenstown",
        city: "Otago",
        country: "New Zealand"

      },
      rating: 4.77,
      category: ["Riverside", "Private Dock", "Free Kayaks"],
      price: 2800,
      offers: {
        bed: "3",
        shower: "2",
        occupants: "4-6"

      },
      image: "https://shorturl.at/FvJYo",
      discount: "20"
    },
    {
      name: "Modern Beachfront Villa",
      address: {
        state: "Sideman",
        city: "Bali",
        country: "Indonesia"
      },
      rating : 4.95,
      category: ["Beachfront", "Private Pool", "Chef Service"],
      price: 5000,
      offers: {
        bed: "5",
        shower: "4",
        occupants: "8-10"
      },
      image: "https://shorturl.at/FvJYo",
      discount:"10"
    },
    {
      rating: 4.80,
      category: ["Garden", "Free Parking", "Self Checkin"],
      price: 2750,
      offers: {
        bed: "3",
        shower: "3",
        occupants: "5-6"
      },  
    image: "https://shorturl.at/FvJYo",
    discount: "25"
    
  },
  {
    name : "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating :4.60,
    category: ["City Center", "Free WiFi", "24 Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image9.jpg",
    discount: ""
  },
  {
    name:  "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    }, 
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin",],
    price: 2600,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image11.jpg",
    discount: "50"
  },
  {
    name : "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image12.jpg",
    discount: ""
  },
  {
    name: "Histrorical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image13.jpg",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category:["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",    
      occupants: "2"
    },
    image: "https://example.com/image14.jpg",
    discount:"" 
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image15.jpg",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://example.com/image16.jpg",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://shorturl.at/keAYB",
    discount: ""
  }

  
];


export const HERO_BACKGROUND_IMAGE
 = {
  main: "/images/image3.jpg",
};
