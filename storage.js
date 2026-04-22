// src/utils/storage.js

const STORAGE_KEY = 'customerPipelineData';

export const loadCustomers = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  }
  // If no data, return initial
  const { initialCustomers } = require('../data/initialData');
  return initialCustomers;
};

export const saveCustomers = (customers) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
};