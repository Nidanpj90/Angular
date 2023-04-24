import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPueblosComponent } from './edita-pueblos.component';

describe('EditaPueblosComponent', () => {
  let component: EditaPueblosComponent;
  let fixture: ComponentFixture<EditaPueblosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPueblosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaPueblosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
