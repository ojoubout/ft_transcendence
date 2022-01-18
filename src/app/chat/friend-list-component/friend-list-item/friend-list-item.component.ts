import {Component, Input} from "@angular/core";
import {Friend} from "../../Friend";

@Component({
  selector: 'friend-list-item',
  templateUrl: './friend-list-item.component.html',
  styleUrls: ['./friend-list-item.component.scss']
})
export class FriendListItemComponent {
  @Input() public friend: Friend = {} as Friend;
}
