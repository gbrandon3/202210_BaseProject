/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from  '@faker-js/faker';
import { ListarComponent } from './listar.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Vehiculo } from 'src/app/model/vehiculo';


describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientModule],
      declarations: [ ListarComponent ],providers: [VehiculoService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponent);

    component = fixture.componentInstance;
    component.vehiculos = [
      new Vehiculo(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.datatype.number(),


      ), new Vehiculo(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.datatype.number(),


      ), new Vehiculo(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.datatype.number(),


      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 items ',()=>{
    expect(debug.query(By.css("tbody")).childNodes.length).toEqual(4)
  })
});
