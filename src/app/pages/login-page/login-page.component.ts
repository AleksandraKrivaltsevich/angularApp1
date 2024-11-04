import { AuthService } from '../../auth/auth.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      const loginData = {
        username: this.form.value.username!,
        password: this.form.value.password!
      };

      this.authService.login(loginData)
        .subscribe(res => {
          this.router.navigate(['']);
          console.log(res);
        });
    }
  }


}
