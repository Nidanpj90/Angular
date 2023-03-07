import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSiNoComponent } from './boton-si-no.component';

describe('BotonSiNoComponent', () => {
  let component: BotonSiNoComponent;
  let fixture: ComponentFixture<BotonSiNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSiNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSiNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
