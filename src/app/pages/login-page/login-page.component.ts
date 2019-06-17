import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  public errors: any = [];

  constructor(
    private fb: FormBuilder,
    private ui: Ui,
    private dataService: DataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required
        ])
      ]
    });

    var token = localStorage.getItem('ms.token');
    if(token){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }


  showModal() {
    this.ui.setActive('modal');
  }

  hideModal() {
    this.ui.setInactive('modal');
  }

  submit() {
    this.dataService.authenticate(this.form.value).subscribe(
      result => {
        localStorage.setItem('ms.token', result.token);
        localStorage.setItem('ms.user', JSON.stringify(result.user));
        this.router.navigate(['/home']);
      },
      error => {
      this.errors = error.error.errors;
      }
    );
  }
}
