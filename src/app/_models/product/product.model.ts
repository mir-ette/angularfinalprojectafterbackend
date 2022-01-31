import { Supplier } from "./supplier.model";

// The Interface is used to unified data shape between front N backend and eliminate typos
export interface Product {
    id?: number;
    name: string;
    price: number;
    discount: number; // (?) Means optional
    imageUrl: string;
    supplier?: Supplier;
    Count:number;
}

