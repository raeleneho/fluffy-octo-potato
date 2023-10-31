import axios, { AxiosResponse } from 'axios';
import { ListZellerCustomers } from './graphql/queries';

const ENDPOINT = "https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql"

const API_KEY = 'da2-psmv7fcrw5dlpmp5orner2xf7i';

export enum Role {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export const fetchAllCustomers = async ():Promise<Customer[]> => { 
  // try {
    const response: AxiosResponse = await axios.post(ENDPOINT, JSON.stringify({ query: ListZellerCustomers }), {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY, 
      },
    });
    return response.data.data.listZellerCustomers.items;
  // } catch (error) {
  //   throw error
  // }
}  

