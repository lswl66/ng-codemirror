import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeMirrorComponent } from './codemirror.component';

@NgModule({
    imports: [CommonModule, CodeMirrorComponent],
    exports: [CodeMirrorComponent]
})
export class CodemirrorModule {}
