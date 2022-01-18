export class Friend {

  constructor(private _uid: string,
              private _name: string,
              private _unread: number = 0,
              private _img: string = ''
  ) {}

  addUnreadMessage() {
    this._unread++;
  }

  readMessages() {
    this._unread = 0;
  }

  get uid() {
    return this._uid;
  }
  get name() {
    return this._name;
  }
  get unread() {
    return this._unread;
  }
  get img() {
    return this._img;
  }
}
