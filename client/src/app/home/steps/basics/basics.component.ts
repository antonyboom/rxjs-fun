import {Component, OnInit} from '@angular/core';
import {Observable, of, Operator} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {BasicService} from 'src/app/services/basic.service';
import {RxjsOperator} from 'src/app/shared/interfaces/operator';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})

export class BasicsComponent implements OnInit {

  /* for operators tab */
  public $title: Observable<string>;
  public $desc: Observable<string[]>;
  public $operators: Observable<RxjsOperator[]>;

  /* for playground */
  public $notes: Observable<string[]>;
  public $task: Observable<string>;
  public $creative: Observable<string>;
  constructor(
    private bs: BasicService
  ) {
    this.$title = this.bs.getTitle();
    this.$desc = this.bs.getDescription();
    this.$operators = this.bs.getOperators();
    this.$notes = this.bs.getNotes();
    /* training task */
    this.$task = this.bs.getMock();
    /* creative playground */
    this.$creative = this.bs.getMock();
  }

  ngOnInit(): void {

  }

}
