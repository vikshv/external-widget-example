import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import frameRPC from 'frame-rpc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    rpc: any;
    event: any;
    change: any;
    messages: Array<any>;

    constructor() {
        this.messages = [];
    }

    ngOnInit() {
        this.event = {
            name: 'onAction',
            parameter: ''
        };

        this.change = {
            name: '',
            parameter: ''
        };

        this.rpc = frameRPC(window, window.parent, document.referrer, {
            update: (data) => {
                this.messages.push({
                    method: 'update',
                    store: JSON.stringify(data.store)
                });
            }
        });
    }

    ngOnDestroy() {
        if (this.rpc) {
            this.rpc.destroy();
        }
    }

    onFocus() {
        this._callRPC('onFocus');
    }

    onBlur() {
        this._callRPC('onBlur');
    }

    storeData() {
        this._callRPC('storeData', {
            message: 'Hello!'
        });
    }

    fireWidgetEvent() {
        const { name, parameter } = this.event;
        if (name) {
            this._callRPC('fireWidgetEvent', {
                name,
                parameter
            });
        }
    }

    fireWidgetChangeEvent() {
        const { name, parameter } = this.event;
        if (name && parameter) {
            this._callRPC('fireWidgetChangeEvent', {
                name,
                parameter
            });
        }
    }

    _callRPC(method, ...args) {
        this.rpc && this.rpc.call(method, ...args);
    }
}
