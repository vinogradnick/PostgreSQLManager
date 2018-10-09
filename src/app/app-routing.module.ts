import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { StartPageComponent } from './start-page/start-page.component';
const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'database', component: DatabaseToolsComponent },
  { path:'table',component:TableToolComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
