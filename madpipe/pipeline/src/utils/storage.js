// src/utils/storage.js

import { initialCustomers } from '../data/initialData.js';

const STORAGE_KEY = 'customerPipelineData';

export const loadCustomers = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  }
  // If no data, return initial
  return initialCustomers;
};

export const saveCustomers = (customers) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
};
