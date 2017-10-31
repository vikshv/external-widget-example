import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    messages: Array<any>;

    constructor() {
        this.messages = [];
    }

    ngOnInit() {
        console.log('OnInit', window['alphaopen']);
    }

    @HostListener('window:message', ['$event'])
    onMessage(event) {
        this.messages.push({
            data: event.data,
            origin: event.origin
        });
        
        if (event.data === 'aoWidgetConnect') {
            event.source.postMessage('connect', event.origin);
        }
    }
}
