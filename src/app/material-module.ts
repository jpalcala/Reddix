import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@NgModule({
    // By default angular 'imports' automatically, what why the imports array is not needed
    exports: [
        MatButtonModule
    ]
})
export class MaterialModule { }
