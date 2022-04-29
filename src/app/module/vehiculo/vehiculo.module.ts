import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { ListarComponent } from './component/listar/listar.component';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VehiculoComponent,ListarComponent],exports:[VehiculoComponent]
})
export class VehiculoModule { }
