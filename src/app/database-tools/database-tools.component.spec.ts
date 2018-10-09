import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseToolsComponent } from './database-tools.component';

describe('DatabaseToolsComponent', () => {
  let component: DatabaseToolsComponent;
  let fixture: ComponentFixture<DatabaseToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
