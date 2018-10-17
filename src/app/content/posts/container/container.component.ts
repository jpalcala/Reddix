import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(route => {
            console.log(route);
        });
    }

    onChangeTab(event: MatTabChangeEvent): void {
        console.log('TabIndex', event.index);
    }
}
