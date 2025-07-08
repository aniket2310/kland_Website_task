import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-profile',
  imports: [CommonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  hide = true;

  constructor(private router: Router){}
  
user = {
  name: 'test',
  phone: '+965 98563214',
  email: 'test@yopmail.com'
};

  logout() {
    // ✅ Clear session
    localStorage.removeItem('sessiontoken');

    // ✅ Optional: Clear all localStorage if needed
    localStorage.clear();

    // ✅ Navigate back to login
    this.router.navigate(['/login']);
  }


}
