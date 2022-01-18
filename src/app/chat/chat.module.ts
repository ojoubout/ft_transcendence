import {NgModule} from "@angular/core";
import {FriendListComponent} from "./friend-list-component/friend-list.component";
import {FriendListItemComponent} from "./friend-list-component/friend-list-item/friend-list-item.component";
import {CommonModule} from "@angular/common";
import {ChatComponent} from "./chat.component";
import {ChattingComponent} from "./chatting/chatting.component";
import {MessageComponent} from "./chatting/message/message.component";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    FriendListComponent,
    FriendListItemComponent,
    ChatComponent,
    ChattingComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule

  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule {}
