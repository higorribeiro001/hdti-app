import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide = true;
  confirmHide = true;

  constructor(private router: Router) {}

  setHide(event: MouseEvent) {
    this.hide = !event.target;
  }

  setConfirmHide(event: MouseEvent) {
    this.confirmHide = !event.target;
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
