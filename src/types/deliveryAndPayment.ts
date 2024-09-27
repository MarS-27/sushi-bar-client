import type { BaseAttributes, InfoList } from './types';

export interface DeliveryAndPayment extends BaseAttributes {
  delivery: InfoList[];
  payment: InfoList[];
}
