export interface ProductData {
  id: string;
  productTitle: string;
  productDetails: string;
  image: string;
  price: number;
  isVegan: boolean;
  quantity: number;
  removeItem?: (id: string) => void;
}

export interface DeliveryFee {
  totalAmount: number;
  totalDeliveryFee: number;
  totalToPay: number;
  rushHourCharged: boolean;
}

export interface CartTableProps {
  cartItems: ProductData[];
  removeItem: (id: string) => void;
}
