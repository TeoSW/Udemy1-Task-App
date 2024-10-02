import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Input({required:true}) userId!: string;

  @Output() close = new EventEmitter<void>()

  //* enteredTitle = '';
  // //? sau enteredTitle: string;
  // //? onExemplu la atribute converteste automat la boolean
  //* enteredSummary = '';
  //* enteredDate = '';

  //! Sau cu signals (works with 2 way binding deci nu trb moduficat html-ul :3):

  enteredTitle = signal('');
  //? signal of type date
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService)
  //? injects a dependency and provides it as a value to the tasksService Propriety
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    
    //* this.add.emit({
    //*   title: this.enteredTitle(),
    //*   summary: this.enteredSummary(),
    //*   date: this.enteredDate(),
    //* })
    // //? we pass an object to emit; () ca e functie pt ca signals
    //* asta fara injectable service
    //! sau cu injectable service: 

    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate(),
    }, this.userId);

    this.close.emit();
    
  }
  
}
