import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentadorComponent } from './presentador.component';

describe('PresentadorComponent', () => {
  let component: PresentadorComponent;
  let fixture: ComponentFixture<PresentadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
