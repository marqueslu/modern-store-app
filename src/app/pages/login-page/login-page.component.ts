import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CustomValidator } from './../../validators/custom.validator';

import { DataService } from '../../services/data.service';
import { Ui } from './../../utils/ui';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [Ui, DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5), 
        Validators.maxLength(160), 
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],

    });
  }

  ngOnInit() {
    this.dataService.getCourses().subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  checkEmail(){
   this.ui.lock('emailControl');
    setTimeout(() => {
      this.ui.unlock('emailControl');      
    }, 3000);
  }

  showModal(){
    this.ui.setActive('modal');
  }

  hideModal(){
    this.ui.setInactive('modal');
  }

  submit(){
    this.dataService.createUser(this.form.value);
  }

}
