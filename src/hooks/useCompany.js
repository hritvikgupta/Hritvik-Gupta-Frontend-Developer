// useCompany.js

import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

export const useCompany = () => {
  return useContext(AuthContext);
};
