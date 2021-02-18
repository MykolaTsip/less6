import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;


  // // 1
  // email: FormControl = new FormControl('');
  //
  // constructor() {
  // this.form = new FormGroup({
  //   email: this.email,
  //   password : new FormControl('')
  // });
  // }



// // 2
  // constructor() {
  //   this.form = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password : new FormControl('')
  //   });
  // }


//  // 3
//   constructor(private formBuilder: FormBuilder) {
//     this.form = formBuilder.group({
//       email: ['', [Validators.email]],
//       password: ''
//     });
//   }
//
//
//   show(form: FormGroup): void {
//     console.log(form);
//   }



  // 4
  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email]),
          password : new FormControl(''),
          confirmPass: new FormControl('')
    }, this.passValidator.bind(this));
  }

  passValidator(form: FormGroup): null | object {
    const {value: password} = form.controls.password;
    const {value: confirmPass} = form.controls.confirmPass;
    console.log(password + ' - ' + confirmPass);
    return password === confirmPass ? null : {passwordError: true};
  }


  show(form: FormGroup): void {
    console.log(form);
  }

}
