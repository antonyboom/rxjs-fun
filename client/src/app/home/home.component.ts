import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MocksService} from '../services/mocks.service';
import {Tab} from '../shared/interfaces/tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  $tabs: Observable<Tab[]>;

  constructor(
    private router: Router,
    private mock: MocksService
  ) {
    this.$tabs = this.mock.getTabs();
  }

  ngOnInit(): void {
  }

  onNavigate(tab: Tab) {
    this.mock.onNavigate(tab);
  }
}
