import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

interface FormSignUp {
  email: FormControl<string | null>
  password: FormControl<string | null>
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./sign-in.component.html",
  styles: ``
})
export default class SignInComponent {

  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control("", [Validators.required, Validators.email]),
    password: this._formBuilder.control("", Validators.required)
  })


}
