// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CartItem, Product, Cart, Category } = initSchema(schema);

export {
  CartItem,
  Product,
  Cart,
  Category
};