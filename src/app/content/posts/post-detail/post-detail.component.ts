import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log(params);
        });
    }
}
