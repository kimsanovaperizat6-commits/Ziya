import { Category, DishItem } from '../types';
import { categories } from './menuCategories';
import { dishesPart1 } from './dishesPart1';
import { dishesPart2 } from './dishesPart2';
import { dishesPart3 } from './dishesPart3';

export { categories };

export const dishes: DishItem[] = [
  ...dishesPart1,
  ...dishesPart2,
  ...dishesPart3,
];
