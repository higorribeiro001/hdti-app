import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { LayoutProps } from './layoutprops';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  props: LayoutProps = { title: '', subtitle: '' }

  showFiller = false;
  url = 'home';
  title = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.urlAfterRedirects.split('/')[2] || 'home';
      });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.propertiesLayout())
      ).subscribe((props: LayoutProps) => this.props = props);
  }

  propertiesLayout(): LayoutProps {
    let routeChild = this.activatedRoute.firstChild;

    while(routeChild?.firstChild) {
      routeChild = routeChild.firstChild;
    }

    return routeChild?.snapshot.data as LayoutProps;
  }

  navigate(route: string, title: string) {
    this.router.navigate([`/paginas/${route}`]);
    this.title = title;
  }
}
