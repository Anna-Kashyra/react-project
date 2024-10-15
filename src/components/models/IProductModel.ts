import {IDimensionsModel} from "./IDimensionsModel";
import {IReviewModel} from "./IReviewModel";
import {IMetaModel} from "./IMetaModel";

export interface IProductModel {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string,
    sku: string,
    weight: number,
    dimensions: IDimensionsModel,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: IReviewModel[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: IMetaModel,
    images: string[],
    thumbnail: string
}