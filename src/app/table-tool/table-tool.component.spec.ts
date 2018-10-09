import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToolComponent } from './table-tool.component';

describe('TableToolComponent', () => {
  let component: TableToolComponent;
  let fixture: ComponentFixture<TableToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
