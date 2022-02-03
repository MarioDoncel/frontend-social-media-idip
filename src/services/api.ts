/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL as string;

const api = axios.create({ baseURL });

export { api };
