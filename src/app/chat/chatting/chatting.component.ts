import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent {
  @Input() rootId: number;

}
