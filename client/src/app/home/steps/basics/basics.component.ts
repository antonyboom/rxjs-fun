import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
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
  public $task: Observable<{ key: string, value: string }[]>;
  public $playground: Observable<string>;

  constructor(
    private bs: BasicService
  ) {
    this.$title = this.bs.getTitle();
    this.$desc = this.bs.getDescription();
    this.$operators = this.bs.getOperators();
    this.$notes = this.bs.getNotes();
    /*
    * training task
    *  apply pipe here to get final results
    *  */
    this.$task = this.bs.getMock();
    /* creative playground just for example purposes */
    this.$playground = this.bs.playgroundData$;
  }

  ngOnInit(): void {
    this.bs.getPlayground({isFiltered: false, isMapped: false});
  }

  onDropdownChange(event: { isFiltered: boolean, isMapped: boolean }) {
    this.bs.updatePlayground(event);
  }

}
