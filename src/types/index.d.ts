/* eslint-disable @typescript-eslint/no-explicit-any */

type User = {
  name: string;
  avatar: string;
};

export type Review = {
  id: number;
  user: User;
  rating: number;
  date: string;
  comment: string;
  tags: string[];
};

export type slide = {
  Image: string;
};

type SocialMediaLinks = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

type Brand = {
  _id: string;
  name: string;
  logo: File;
  coverImage: File;
  description: string;
  website: string;
  country: string;
  established: number;
  socialMediaLinks: SocialMediaLinks;
  apparels: Apparel[]; // Array of apparels
  views: number;
  contactInfo: ContactInfo;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Category = {
  _id: string;
  name: string;
  apparels: string[]; // Array of apparel IDs
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type SubCategory = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type SubSubCategory = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Color = {
  _id: string;
  name: string;
  variant: string;
  hexCode: string;
  rgb: string;
  __v: number;
};

interface Texture {
  _id: string;
  name: string;
  thumbnail: File;
  description: string;
  patternFile: File;
}

export type Material = {
  _id: string;
  type: string;
  textures: ModelTexture;
  colorVariants: Color[];
  supplier: string;
  availability: string;
  pricePerUnit: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ModelAnimation = {
  _id: string;
  name: string;
  url: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ModelPosition = {
  x: number;
  y: number;
  z: number;
  _id: string;
};

type ModelRotation = {
  x: number;
  y: number;
  z: number;
  _id: string;
};

type ModelScale = {
  x: number;
  y: number;
  z: number;
  _id: string;
};

type ModelFile = {
  _id: string;
  name: string;
  url: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Model = {
  _id: string;
  name: string;
  file: ModelFile;
  animations: ModelAnimation[];
  textures: ModelTexture[];
  positions: ModelPosition;
  rotation: ModelRotation;
  scale: ModelScale;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

interface ModelTexture {
  description: string;
  name: string;
  patternFile: File;
  thumbnail: File;
  _id: string;
}

type File = {
  _id: string;
  name: string;
  url: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Apparel = {
  _id: string;
  apparel_name: string;
  apparel_desc: string;
  apparel_images: File[]; // Example structure for apparel images
  apparel_price: number;
  apparel_type: string; // e.g., 'top', 'bottom', etc.
  reviews: Review[];
  average_rating: number;
  total_reviews: number;
  brand: Brand;
  createdAt: string;
  discount_end_date: string;
  discount_percentage: number;
  discount_start_date: string;
  discounted_price: number;
  is_discounted: boolean;
  is_featured: boolean;
  main_category: Category;
  materials: Material[];
  models: Model[];
  number_sold: number;
  sizes: string[];
  sizing_type: SizingType;
  sub_categories: SubCategory[];
  sub_subcategories: SubSubCategory[];
  updatedAt: string;
  views: number;
  __v: number;
};

export interface CreateApparel {
  apparel_name: string;
  apparel_images: string[]; // ObjectId strings (Upload IDs)
  apparel_desc: string;
  apparel_price: number;
  discounted_price?: number | null;
  discount_percentage?: number;
  discount_start_date?: string | null; // ISO date string
  discount_end_date?: string | null;
  is_discounted?: boolean;
  apparel_type:
    | "dresses"
    | "top"
    | "bottom"
    | "full wears"
    | "outer wears"
    | "accessories";
  brand: string; // ObjectId (Brand)
  main_category: string; // ObjectId (MainCategory)
  sub_categories?: string[]; // ObjectId array
  sub_subcategories?: string[]; // ObjectId array
  materials?: string[]; // ObjectId array
  models?: string[]; // ObjectId array
  sizing_type?: string; // ObjectId (Size)
  sizes: string[]; // e.g., ["S", "M", "L"]
  views?: number;
  is_featured?: boolean;
  number_sold?: number;
  average_rating?: number;
  total_reviews?: number;
  full_wear?: string[]; // ObjectId array (Apparel references)
  apparel_class: "custom-made" | "ready-made";
}

export type UpdateApparel = Partial<CreateApparel>;

interface Measurement {
  measurement_name: string;
  average: number;
  range: {
    start: number;
    end: number;
  };
}

interface MaleSize {
  name: string;
  short_name: string;
  unit: string;
  unit_code: string;
  Weight: {
    measurement_name: string;
    average: number;
    range: {
      start: number;
      end: number;
    };
    unit: string;
    unit_code: string;
  };
  measurements: {
    Neck_Circumference: Measurement;
    Shoulder_Width: Measurement;
    Chest_Circumference: Measurement;
    Waist_Circumference: Measurement;
    Hip_Circumference: Measurement;
    Thigh_Circumference: Measurement;
    Inseam_Length: Measurement;
    Arm_Length: Measurement;
    Wrist_Circumference: Measurement;
    Height: Measurement;
    Bicep_Circumference: Measurement;
    Forearm_Circumference: Measurement;
    Torso_Length: Measurement;
    Leg_Length: Measurement;
    Foot_Length: Measurement;
    Ankle_Circumference: Measurement;
    Hand_Length: Measurement;
    Head_Circumference: Measurement;
  };
  gender?: string;
}

interface FemaleSize {
  name: string;
  short_name: string;
  unit: string;
  unit_code: string;
  Weight: {
    measurement_name: string;
    average: number;
    range: {
      start: number;
      end: number;
    };
    unit: string;
    unit_code: string;
  };
  measurements: {
    Neck_Circumference: Measurement;
    Shoulder_Width: Measurement;
    Bust_Circumference: Measurement;
    Waist_Circumference: Measurement;
    Hip_Circumference: Measurement;
    Thigh_Circumference: Measurement;
    Inseam_Length: Measurement;
    Arm_Length: Measurement;
    Wrist_Circumference: Measurement;
    Height: Measurement;
    Bicep_Circumference: Measurement;
    Forearm_Circumference: Measurement;
    Torso_Length: Measurement;
    Leg_Length: Measurement;
    Foot_Length: Measurement;
    Ankle_Circumference: Measurement;
    Hand_Length: Measurement;
    Head_Circumference: Measurement;
    Underbust_Circumference: Measurement;
  };
  gender?: string;
}

export interface Review {
  _id: string;
  rating: number;
  comment: string;
  user: string | null;
  apparel: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface Size {
  sizing_type: "mixed" | "imperial" | "metric";
  male: MaleSize[];
  female: FemaleSize[];
}

export interface CartItem {
  apparel: Apparel;
  selected_sizes: MaleSize[] | FemaleSize[];
  selected_materials: Material[];
  selected_colors: Color[];
  quantity: number;
  _id?: string;
  lastModified?: string;
}

// Define the type for the Cart data

export interface CartData {
  _id: string;
  user: string;
  items: CartItem[];
  total_price: number;
  total_items: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  version: number;
}

interface PendingChange {
  action: "add" | "remove" | "update";
  apparelId: string;
  quantity?: number;
  selected_sizes?: MaleSize[] | FemaleSize[];
  selected_materials?: Material[];
  selected_colors?: Color[];
  timestamp: string;
}

// Define the API Response structure
export interface ApiResponse {
  status: string;
  message: string;
  data: any;
}

export interface Wishlist {
  _id: string;
  userId: string;
  apparels: Apparel[];
  createdAt: string;
}

export type UserData = {
  address: {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    nearest_bus_stop: string;
  };
  _id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_image: string | null;
  wishlist: Wishlist[]; // Assuming wishlist items are stored as string IDs
  preferred_payment_method: string;
  order_history: Array<object>;
  cart: Array<object>;
  ar_models: Array<object>;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

export interface ShippingAddress {
  _id?: string;
  location_name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

export type OrderItem = {
  apparel: Apparel;
  quantity: number;
  selected_sizes: MaleSize[] | FemaleSize[];
  selected_materials: Material[];
  selected_colors: Color[];
};

export type Order = {
  id: string;
  user: string;
  items: OrderItem[];
  total_price: number;
  total_items: number;
  shipping_address: ShippingAddress;
  selected_shippingOption: ShippingOption;
  selected_courier: Courier;
  delivery_notes: string;
  order_status: "pending" | "shipped" | "delivered" | "cancelled";
  payment_status: "unpaid" | "paid";
  created_at: string;
  updated_at: string;
};

export interface Location {
  country: string;
  state: string;
  city: string;
  zipCode: string;
  addressLine?: string;
  geoCoordinates?: {
    latitude?: number;
    longitude?: number;
  };
}

// Courier Interface
export interface Courier {
  name: string;
  contact_info?: {
    email?: string;
    phone?: string;
  };
  approximateDeliveryTime: string;
  costRange: {
    min: number;
    max: number;
  };
  trackingURLTemplate?: string;
  regions: string[];
  location: Location;
}

// Shipping Option Interface
export interface ShippingOption {
  name: string;
  couriers: Courier[]; // Array of Courier ObjectIds
  description?: string;
}

export interface City {
  fee: number;
  name: string;
}

export type SelectedOrder = {
  items: OrderItem[];
  total_price: number;
  total_items: number;
  shipping_address: ShippingAddress;
  selected_shippingOption: ShippingOption;
  selected_courier: Courier;
  selected_city: City;
  delivery_notes: string;
  shipping_fee: number;
};

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string; // URL for logo
  website: string;
  country: string;
  established: number;
  contactInfo: ContactInfo;
  socialMediaLinks: SocialMediaLinks;
  views: number;
}

export interface ApparelData {
  data: Apparel;
}

export interface ApparelsData {
  data: Apparel[];
}

export interface MaterialsData {
  data: Material[];
}

export interface Notification {
  _id: string;
  user: string;
  title: string;
  message: string;
  type: "info" | "warning" | "error" | "success";
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Texture {
  name: string;
  thumbnail: File;
  description: string;
  patternFile: File;
  _id: string;
}
