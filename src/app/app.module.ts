import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeSidebarComponent } from './tree-sidebar/tree-sidebar.component';
import { CreateDatabaseComponent } from './create-database/create-database.component';
import { RequestDatabaseComponent } from './request-database/request-database.component';
import { UserSettingsDatabaseComponent } from './user-settings-database/user-settings-database.component';
import { ExportDatabaseComponent } from './export-database/export-database.component';
import { ImportDatabaseComponent } from './import-database/import-database.component';
import { LoginComponent } from './login/login.component';
import { DatabaseToolsComponent } from './database-tools/database-tools.component';
import { TableToolComponent } from './table-tool/table-tool.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { UserSettingsTableComponent } from './user-settings-table/user-settings-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
 
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { SelectRequestTableComponent } from './select-request-table/select-request-table.component';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: [SelectRequestTableComponent],
  imports: []
})
export class MaterialModule { }

@NgModule({

  declarations: [

    AppComponent,
    TreeSidebarComponent,
    CreateDatabaseComponent,
    RequestDatabaseComponent,
    UserSettingsDatabaseComponent,
    ExportDatabaseComponent,
    ImportDatabaseComponent,
    LoginComponent,
    DatabaseToolsComponent,
    TableToolComponent,
    CreateTableComponent,
    RequestTableComponent,
    UserSettingsTableComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
