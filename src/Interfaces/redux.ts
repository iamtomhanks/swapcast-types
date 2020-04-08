// Interfaces
import { Participant } from './Participant';
import { User } from './Server/tables';
import { RequestStatus, ServerError } from './Requests';

/** Reducer States */
export interface RoomState {
  participants: Participant[];
}
export interface UserState {
  user: User|null;
}
export interface RequestsState {
  signIn: {
    status: RequestStatus;
    error: ServerError|null;
  };
}
/** Reducer States */

export interface Action {
  type: string;
  payload: {[key: string]: unknown};
  error?: ServerError|null;
}

// Store
export interface AppState {
  room: RoomState;
  user: UserState;
  requests: RequestsState;
}