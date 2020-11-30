import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from '../../../../shared/base-componenet';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent extends BaseComponent implements OnInit {
  todos: any[];
  todoForm: FormGroup;
  error: any;

  constructor(private _todoService:TodoService,
    private formBuilder: FormBuilder,
    private router: Router) { super();}

  ngOnInit(): void {
    this.createForm();
    this.getTodo();
  }
  /**
   * 
   * 
   */
  createForm() {
    this.todoForm = this.formBuilder.group({
      id:"",
      title:["",Validators.required],
      deadline:["",Validators.required]
    });
  }

   /**
   * 
   * 
   */
  getTodo() {
    console.log("the func is called");
    
      this._todoService.getAll().subscribe(
        (data: any) => {
          if (data.length == 0) {
            this.todos = [];
          } else {
            this.todos = data;     
          }
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

   /**
   * 
   * 
   */
  onSubmit(){
    let todo = this.todoForm.value;
    this._todoService
      .addTodo(todo)
      .pipe(finalize(() => {
       
      }))
      .subscribe(
        (data: any) => {
          this.ngOnInit();
        },
        (error: any) => {
          this.error = error.error;
        }
      );
  }

   /**
   * 
   * 
   */
  public deleteTd(id:any){
    this._todoService.deleteTodo(id).subscribe(
      (res: any) => {
        this.ngOnInit();
      },
      (err: any) => {
        this.error = err;
      }
    );
  }

  /**
   * 
   * 
   */

  changeStatus(id,td){
    // this._todoService
    //   .addTodo(todo)
    //   .pipe(finalize(() => {
       
    //   }))
    //   .subscribe(
    //     (data: any) => {
    //       this.ngOnInit();
    //     },
    //     (error: any) => {
    //       this.error = error.error;
    //     }
    //   );
  }
}
