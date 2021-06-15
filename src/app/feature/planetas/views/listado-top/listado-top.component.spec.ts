import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTopComponent } from './listado-top.component';

describe('ListadoTopComponent', () => {
  let component: ListadoTopComponent;
  let fixture: ComponentFixture<ListadoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
