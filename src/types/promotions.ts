import type { BaseAttributes, ImageData } from './types';

export interface Promotions extends BaseAttributes {
  title: string;
  subtitle: string;
  description: string;
  img: ImageData;
}
