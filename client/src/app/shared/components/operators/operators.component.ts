import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MocksService} from '../../../services/mocks.service';
import { RxjsOperator } from '../../interfaces/operator';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  @Input() title: string;
  @Input() description: string[];
  @Input() list: RxjsOperator[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
