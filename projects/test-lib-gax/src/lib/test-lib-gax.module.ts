import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponentComponent } from './test-lib-gax/file-component/file-component.component';

@NgModule({
  declarations: [
    FileComponentComponent, // Agrega aquí tus componentes
  ],
  imports: [
    CommonModule // Importa los módulos necesarios
  ],
  exports: [
    FileComponentComponent // Exporta los componentes que deseas hacer públicos
  ]
})
export class MyLibModule { }