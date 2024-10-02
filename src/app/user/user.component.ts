import { type User } from './user.model';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { CardComponent } from "../shared/card/card.component"; //Input - decorator; input - function

//? type User = {
//?   id: string;
//?   avatar: string;
//?   name: string;
//? }
//? making an User object as a type

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  //! FARA SIGNALS
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User;
  //* Error: Property 'user' has no initializer and is not definitely assigned in the constructor.ts(2564)
  //* => folosesc user! , unde ! spune TS-ului ca avatar o sa fie setat ca o valoare in afara fisierului

  @Output() select = new EventEmitter<string>();
  //* EventEmitter obj that is stored in select || emit custom values from that emit prop to any parent component that's interested

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); //* emits an event containing a given value
  }

  //! CU SIGNALS

  //?   id = input.required<string>();
  //?   avatar = input.required<string>();
  //?   name = input.required<string>();

  //?   select = output<string>();  // tell ng that select should pe an output and that it should store an EventEmitter: NOT A SIGNAL

  //?  getImage = computed ( () => {
  //?  return 'assets/users/' + this.avatar();
  //?  })

  //?  onSelectUser() {
  //?    this.select.emit(this.id()); // adica emmit the id
  //?  }
}
