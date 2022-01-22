import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {ChatService} from "../chat.service";
import {Chat} from "../shared/chat.model";
import {Message} from "../shared/message.model";

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent {

  @ViewChild('content') content: ElementRef;
  readonly maxMsToShowDate: number = 60 * 60 * 1000; // 1 hour

  constructor(public chatService: ChatService) {
    if (this.chatService.currChat?.messages.length == 0) {
      this.chatService.loadMessages(this.chatService.currChat).subscribe({
        next: value => {
          this.scrollDown();
        }
      });
    }
  }

  ngAfterViewInit(): void {
    this.scrollDown();
  }

  isLateMessage(prev: Message, message: Message) {
    if (prev) {
      return new Date(message.timestamp).getTime() > new Date(prev.timestamp).getTime() + this.maxMsToShowDate;
    }
    return false;
  }

  scrollDown() {
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }
  get messages() {
    if (!this.chatService.currChat) {
      return [];
    }
    return this.chatService.currChat.messages;
  }

  back() {
    this.chatService.closeChat();
  }
}
