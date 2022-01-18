import {Message} from "./message.model";
import {User} from "../../shared/user";

export interface Chat {
  roomID: string;
  isChannel: boolean;
  users?: User | User[];
  messages : Message[];
  unread: number;
}
