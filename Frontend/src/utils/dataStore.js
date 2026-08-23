// Helper to handle local storage data for the mock backend

const defaultSettings = {
  phone: "+91 98765 43210",
  email: "contact@kktoursandtravels.in",
  address: "No.848/B, MTH Road, Padi, Chennai, Tamil Nadu, India – 600050",
  facebook: "https://www.facebook.com/p/KK-TOURS-and-Travels-61550634136207/",
  instagram: "",
  youtube: "",
  whatsapp: "919876543210", // Just the number with country code for wa.me links
  businessHours: "Mon–Sat, 9 AM – 8 PM"
};

const defaultPackages = [
  {
    id: 1,
    title: "Pattaya & Bangkok Explorer",
    location: "Thailand",
    duration: "5 Days / 4 Nights",
    price: "₹25,000",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    desc: "Experience the vibrant nightlife of Pattaya and the cultural heritage of Bangkok."
  },
  {
    id: 2,
    title: "Munnar & Alleppey Bliss",
    location: "Kerala",
    duration: "4 Days / 3 Nights",
    price: "₹12,500",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    desc: "Relax in the serene backwaters and lush green tea gardens of God's Own Country."
  },
  {
    id: 3,
    title: "Tirupati Pilgrimage",
    location: "Andhra Pradesh",
    duration: "2 Days / 1 Night",
    price: "₹4,500",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    desc: "Hassle-free darshan package with premium transport and accommodation."
  }
];

export const getSettings = () => {
  const saved = localStorage.getItem('kk_settings');
  if (saved) return JSON.parse(saved);
  // Initialize with defaults if empty
  localStorage.setItem('kk_settings', JSON.stringify(defaultSettings));
  return defaultSettings;
};

export const saveSettings = (settings) => {
  localStorage.setItem('kk_settings', JSON.stringify(settings));
};

export const getPackages = () => {
  const saved = localStorage.getItem('kk_packages');
  if (saved) return JSON.parse(saved);
  localStorage.setItem('kk_packages', JSON.stringify(defaultPackages));
  return defaultPackages;
};

export const savePackages = (packages) => {
  localStorage.setItem('kk_packages', JSON.stringify(packages));
};
