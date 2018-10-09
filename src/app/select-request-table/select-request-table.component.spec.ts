import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRequestTableComponent } from './select-request-table.component';

describe('SelectRequestTableComponent', () => {
  let component: SelectRequestTableComponent;
  let fixture: ComponentFixture<SelectRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
