import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { toast, NgxSonnerToaster } from "ngx-sonner"
import { DataAccessService } from '../../data-access/data-access.service';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, NgxSonnerToaster],
  templateUrl: './sign-up.component.html',
  styles: ``,
})
export default class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(DataAccessService);

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', [Validators.required]),
  });

 async submit() {
  // Verificar que el formulario sea válido antes de continuar
  if (this.form.invalid) return;

  // Asegurarse de que los valores no sean nulos usando el operador de encadenamiento opcional (?.)
  const email = this.form.get('email')?.value;
  const password = this.form.get('password')?.value;

  // Validar que ambos valores no sean nulos
  if (!email || !password) return;

  try {
    console.log(email, password);
    await this._authService.signUp({ email, password });
    toast.success("User registered succesfully!")
  } catch (error) {
    toast.error("An Error has ocurred...")
  }
}

  isRequired = (field: 'email' | 'password') => {
    return isRequired(field, this.form);
  };

  isEmailRequired = () => {
    return hasEmailError(this.form);
  };
}
