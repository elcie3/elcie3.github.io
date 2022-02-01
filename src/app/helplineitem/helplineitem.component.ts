import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helplineitem',
  templateUrl: './helplineitem.component.html',
  styleUrls: ['./helplineitem.component.css']
})
export class HelplineitemComponent implements OnInit {
  @Input() senderName: string;
  @Input() senderEmail: string;
  @Input() mode: string;
  @Input() operator: string;
  @Input() ooperatorEmail: string;
  @Input() issueType: string;
  @Input() message: string;
  @Input() timestamp: string;
  @Input() key: string;
  constructor() {


  }

  ngOnInit(): void {

  }

}
