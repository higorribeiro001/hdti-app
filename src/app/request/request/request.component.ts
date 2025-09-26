import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-request',
  standalone: false,
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent {
  readonly panelOpenState = signal(false);
}
