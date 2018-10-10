import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
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
        // FlexLayoutModule, // Will wait for right version
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
