import { Supplier} from "./supplier.model";

export interface Product{
    id?:number;
    name : string;
    price : number;
    description?:string;
    discount? : number ;
    imageUrl?:string;
    supplier? : Supplier;
}
export interface ProductWithCounter extends Product{
    cartCounter : number;
}