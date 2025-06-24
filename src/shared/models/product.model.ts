import { Schema } from 'mongoose';

export enum StockStatus {
  STOC_EPUIZAT = 'STOC_EPUIZAT',
  STOC_DISPONIBIL = 'STOC_DISPONIBIL',
}

export type Product = {
  _id: string;

  name: string;
  // description: string;
  price: string;
  images: string[];
  qdrant_id: string;
  category: string;
  status: StockStatus;

  createdAt: string;
  updatedAt: string;
};

export const ProductsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    images: { type: [String], required: false },
    qdrant_id: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(StockStatus),
      default: StockStatus.STOC_DISPONIBIL,
    },
  },
  { timestamps: true },
);
