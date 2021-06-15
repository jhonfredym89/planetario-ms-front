import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGeneralComponent } from './listado-general.component';

describe('ListadoGeneralComponent', () => {
  let component: ListadoGeneralComponent;
  let fixture: ComponentFixture<ListadoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
