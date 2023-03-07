import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJSONComponent } from './tabla-json.component';

describe('TablaJSONComponent', () => {
  let component: TablaJSONComponent;
  let fixture: ComponentFixture<TablaJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
