import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsTableComponent } from './user-settings-table.component';

describe('UserSettingsTableComponent', () => {
  let component: UserSettingsTableComponent;
  let fixture: ComponentFixture<UserSettingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
