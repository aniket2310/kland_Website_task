import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, ReactiveFormsModule,FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const payload = {
        email: this.form.value.email, //eddy@yopmail.com
        phone: '',
        phoneCode: '965',
        password: this.form.value.password,
        deviceToken: '',
        deviceType: '',
        deviceModel: '',
        appVersion: '',
        osVersion: ''
      };

      this.loading = true;
      this.auth.login(payload).subscribe({
        next: (res) => {
          localStorage.setItem('sessiontoken', res.sessiontoken || 'demo');
          this.router.navigate(['/profile']);
        },
        error: (err) => {
        console.error('Login error:', err);
        alert(err?.error?.message || 'Login failed');
}
      });
    }
  }
}
