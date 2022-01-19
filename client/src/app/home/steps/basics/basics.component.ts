import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MocksService} from '../../../services/mocks.service';

interface Operator {
  name: string;
  description: string;
  snippet: string[]
}

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})

export class BasicsComponent implements OnInit {

  operators: Operator[] = [
    {
      name: 'filter()',
      description: 'callback function exists to filter stream value by condition',
      snippet:
        [
          'observable().pipe(filter(data => !data)), will return data not equal null or undefined',
          'observable().pipe(filter(data => data.some(item => item.name === Kaveri))), will return only objects where name Kaveri'
        ]
    },
    {
      name: 'map()',
      description: 'callback function exists to update/modify stream value or return different one',
      snippet: [
        'observable().pipe(map((response: any) => do anything with data to return desire value))',
        'observable().pipe(map(object: amy{} => { object.name = Anton; return object)), will update property name inside of object to Anton'
      ]
    },
  ]

  $task: Observable<{key: string; value: string} | any>
  $creative: Observable<any>

  constructor(
    service: MocksService
  ) {
    this.$creative = service.mock();
    this.$task = service.mock();
  }

  ngOnInit(): void {
  }

}
