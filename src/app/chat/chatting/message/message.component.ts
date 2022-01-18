import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: string = 'Hello sadsa sadadada';
  @Input() showAvatar: boolean = false;
  @Input() isMine: boolean = false;
}
