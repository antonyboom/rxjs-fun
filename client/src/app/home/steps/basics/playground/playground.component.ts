import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  @Input() task: { key: string; value: string }[];
  @Input() creative: any

  constructor() {
  }

  ngOnInit(): void {
  }

}
