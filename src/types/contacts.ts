import type { BaseAttributes, ImageData, TextValuesList } from './types';

interface SocialMedia {
  id: number;
  title: string;
  link: string;
  icon: ImageData;
}

export interface Contacts extends BaseAttributes {
  work_mode: string;
  social_media: SocialMedia[];
  addresses: TextValuesList[];
  phone_number: string;
}
