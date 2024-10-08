import type { BaseAttributes, ImageData } from './types';

export interface Banner extends BaseAttributes {
  img: ImageData;
  relation_route: 'products' | 'promotions' | 'delivery-payments';
}
