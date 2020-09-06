import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  public selectedButton: boolean = false;

  @Input()
  public buttonName: string;

  @Input()
  public imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
