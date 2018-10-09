import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsDatabaseComponent } from './user-settings-database.component';

describe('UserSettingsDatabaseComponent', () => {
  let component: UserSettingsDatabaseComponent;
  let fixture: ComponentFixture<UserSettingsDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
