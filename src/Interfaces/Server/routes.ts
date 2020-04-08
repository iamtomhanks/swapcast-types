// Interfaces
import { FormSubmitVals } from '../Form';
import { ServerData } from '../Requests';
import { User } from './tables';

export interface SignInParams extends FormSubmitVals {
  username: string;
  password: string;
}

export interface SignInResponse extends ServerData {
  payload?: User;
}