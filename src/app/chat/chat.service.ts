import {Injectable} from "@angular/core";
import {OAuthService} from "../login/oauth.service";
import {User} from "../shared/user";
import {Message} from "./shared/message.model";
import {Chat} from "./shared/chat.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";
import {BehaviorSubject} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currChat: Chat;
  private chats: Map<string, Chat> = new Map();
  public dropdown: NgbDropdown;

  private webSocket: WebSocket;
  constructor(private oauthService: OAuthService, private http: HttpClient) {
    console.log('Chat Service');
    this.webSocket = new WebSocket(environment.chatWebSocketUri);
    this.webSocket.addEventListener('open', (event) => {
      console.log(event);
      this.webSocket.send('Hello this is ft_transcendence');
      this.webSocket.addEventListener('message', this.receiveMessage);
    })
  }

  showChat() {
    this.dropdown.open();
  }

  joinChannel(roomID: string) {
    let chat = this.chats.get(roomID);
    if (chat !== undefined) {
      this.currChat = chat;
    }
    this.http.post<Chat>(`${environment.apiBaseUrl}chat/
    channel/${roomID}`, this.oauthService.user).subscribe({
      next: chat => {
        this.chats.set(roomID, chat);
        this.currChat = chat;
      }
    });
  }

  openConversation(user: User) {
    let roomID = this.isChatExists(user);
    if (roomID) {
      this.currChat = this.chats.get(roomID) as Chat;
    } else {
      this.http.get<Chat>(`${environment.apiBaseUrl}chat/
    conversation?participants=${this.oauthService.user.uid},${user.uid}`).subscribe(
        {
          next: chat => {
            this.currChat = chat;
            this.chats.set(chat.roomID, chat);
          }
        }
      );
    }
  }

  isChatExists(user: User) {
    let roomID: string | null = null;
    this.chats.forEach((value, key) => {
      if (!value.isChannel) {
        let u = value.users as User;
        if (u.uid == user.uid) {
          roomID = key;
        }
      }
    })
    return roomID;
  }

  openChat(roomID: string, user: User) {
    let chat = this.chats.get(roomID);
    if (chat === undefined) {
      this.http.get(`${environment.apiBaseUrl}chat/${roomID}`).subscribe({
        next: (value) => {
          this.currChat = value as Chat;
        }
      });
    } else {
      this.currChat = chat;
    }
  }

  sendMessage(message: string) {
    let m: Message = {
      roomID: this.currChat.roomID,
      sender: 'ojoubout',
      message: message,
      timestamp: new Date()
    };
    this.webSocket.send(JSON.stringify(m));
  }

  receiveMessage(message: MessageEvent) {
    console.log(message);
  }
}
