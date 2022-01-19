import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
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
    void this.router.navigate(['home/' + tab.link])
  }
}
