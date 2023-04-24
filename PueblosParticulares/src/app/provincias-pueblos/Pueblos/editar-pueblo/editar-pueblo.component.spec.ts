import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPuebloComponent } from './editar-pueblo.component';

describe('EditarPuebloComponent', () => {
  let component: EditarPuebloComponent;
  let fixture: ComponentFixture<EditarPuebloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPuebloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPuebloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
