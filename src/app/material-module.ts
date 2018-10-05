import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
} from '@angular/material';

@NgModule({
    // By default angular 'imports' automatically, what why the imports array is not needed
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule
    ]
})
export class MaterialModule { }
