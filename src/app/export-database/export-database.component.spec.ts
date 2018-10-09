import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDatabaseComponent } from './export-database.component';

describe('ExportDatabaseComponent', () => {
  let component: ExportDatabaseComponent;
  let fixture: ComponentFixture<ExportDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
