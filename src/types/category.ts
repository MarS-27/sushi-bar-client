import type { BaseAttributes, ImageData } from './types';

export interface Category extends BaseAttributes {
  title: string;
  icon: ImageData;
}
