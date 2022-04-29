import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  vehiculos:Array<Vehiculo>=[]
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {
    this.getVehiculoService();
    }
  getVehiculoService():void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos:Vehiculo[])=>{
      console.log(vehiculos)
      this.vehiculos=vehiculos;
    })
  }

}
