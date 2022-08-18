import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent implements OnInit {
  mostrarFiltro = false;

  public inbox: any;
  constructor() {}

  ngOnInit(): void {
    this.inbox = [
      {
        id: 'estado',
        text: 'estado',
      },

      {
        id: '100',
        text: '100',
      },
      {
        id: '300',
        text: '300',
      },
    ];
  }
}
