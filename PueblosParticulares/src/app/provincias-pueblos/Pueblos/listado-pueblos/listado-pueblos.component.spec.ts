import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPueblosComponent } from './listado-pueblos.component';

describe('ListadoPueblosComponent', () => {
  let component: ListadoPueblosComponent;
  let fixture: ComponentFixture<ListadoPueblosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPueblosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPueblosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
