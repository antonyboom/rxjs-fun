import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { Tab } from '../shared/interfaces/tab';

@Injectable({
  providedIn: 'root'
})

export class MocksService {

  private tabs: Tab[] = [
    {
      link: '/basic',
      label: 'Basic',
      disabled: false,
      icon: 'star'
    },
    {
      link: '/advanced',
      label: 'Advanced',
      disabled: false,
      icon: 'star_outline'
    },
    {
      link: '/pro',
      label: 'Pro',
      disabled: true,
      icon: 'star_outline'
    },
    {
      link: '/guru',
      label: 'Guru',
      disabled: true,
      icon: 'star_outline'
    },
  ]

  constructor(
    private router: Router
  ) {
  }

  getTabs(): Observable<Tab[]> {
    return of(this.tabs).pipe(
      delay(500))
  }

  onNavigate(tab: Tab) {
    void this.router.navigate(['home/' + tab.link])
  }
}
