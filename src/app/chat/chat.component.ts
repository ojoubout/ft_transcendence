import {Component, OnInit, ViewChild} from "@angular/core";
import {Friend} from "./Friend";
import {ChatService} from "./chat.service";
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public test: string = 'Hello';
  private selectedFriend: Friend = {} as Friend;
  @ViewChild('dropdown') dropdown: NgbDropdown;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chatService.dropdown = this.dropdown;
  }

  helloClick() {
    this.chatService.showChat();
  }

}
