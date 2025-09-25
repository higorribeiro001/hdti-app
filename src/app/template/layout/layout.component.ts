import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  showFiller = false;
  url = 'home';
  title = 'Principal';

  constructor(private router: Router) {}

  navigate(route: string, title: string) {
    this.router.navigate([`/paginas/${route}`]);
    this.url = this.router.url.split('/')[2];
    this.title = title;
  }
}
