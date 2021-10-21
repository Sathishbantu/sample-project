import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';

  testForm: FormGroup

 
  conentData: any = [];

  constructor(private fb: FormBuilder){
    this.testForm = this.fb.group({
      your_name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  Submit(){
    this.conentData = []
    let obj= {
      your_name: this.testForm.value.your_name,
      email: this.testForm.value.email,
      message: this.testForm.value.message
    } 
    this.conentData = obj   
    
  }
}
