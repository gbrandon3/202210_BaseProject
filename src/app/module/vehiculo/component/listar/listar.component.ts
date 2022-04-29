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
  marcas=new Map<string,number>()
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {
    this.getVehiculoService();
    }
  getVehiculoService():void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos:Vehiculo[])=>{

      this.vehiculos=vehiculos;
      this.vehiculos.forEach(vehiculo => {
        if(this.marcas.has(vehiculo.marca)){

         this.marcas.set(vehiculo.marca,this.marcas.get(vehiculo.marca)!+1)
        }else{
          this.marcas.set(vehiculo.marca,1)
        }


      });


      
    })
  }

}
