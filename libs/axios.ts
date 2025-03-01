import axios from 'axios';

import { IS_LOCAL } from '@/constants';

const baseUrl = IS_LOCAL ? 'http://localhost:8080/api' : 'http://stitchai-server.co/api';

export const api = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const storageApi = axios.create({});
