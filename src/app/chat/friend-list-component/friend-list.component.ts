import {Component} from "@angular/core";
import {Friend} from "../Friend";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
  public friendsList: Friend[] = [
    new Friend('', 'ojoubout', 5),
    new Friend('', 'oussama', 0),
    new Friend('', 'joubouti', 0),
    new Friend('', 'user 1', 0),
    new Friend('', 'user 2', 0),
    new Friend('', 'user 3', 0),
    new Friend('', 'user 4', 0),
    new Friend('', 'user 5', 0),
    new Friend('', 'user 6', 1),
    new Friend('', 'user 7', 0),
    new Friend('', 'user 8', 0),
    new Friend('', 'user 9', 0),
    new Friend('', 'user 0', 0),
  ]
}
