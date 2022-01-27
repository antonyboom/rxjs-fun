import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RxjsOperator} from '../../interfaces/operator';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  @Output() optionSelected: EventEmitter<{ isFiltered: boolean, isMapped: boolean }> =
    new EventEmitter<{ isFiltered: boolean, isMapped: boolean }>();

  @Input() notes: any;
  @Input() task: string | { key: string; value: string }[];
  @Input() creative: any;
  @Input() operators: RxjsOperator[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectionChange(op: RxjsOperator, event: boolean): void {
    this.optionSelected.emit({
      isFiltered: op.name === 'filter()' ? event : this.operators.find(item => item.name === 'filter()').enabled,
      isMapped: op.name === 'map()' ? event : this.operators.find(item => item.name === 'map()').enabled,
    });
  }

}
