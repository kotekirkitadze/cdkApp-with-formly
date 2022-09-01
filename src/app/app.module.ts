import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TestComponent } from './components/test/test.component';
import { ChildComponent } from './components/test/child/child.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DoneTwoComponent } from './components/test/done-two/done-two.component';
import { WrapperComponent } from './modules/wrapper/wrapper.component';
import { ViewComponent } from './modules/pages/view/view.component';
import { WorkspaceComponent } from './modules/pages/workspace/workspace.component';
import { FieldGroupComponent } from './modules/pages/field-group/field-group.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelWrapperComponent } from './modules/panel';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { InputFieldType } from './modules/input-type';
import { ReactiveFormsModule } from '@angular/forms';

const config = FormlyModule.forRoot({
  types: [
    {
      name: 'input',
      component: InputFieldType,
      //  wrappers: ['form-field']
    },
  ],
  wrappers: [
    { name: 'panel', component: PanelWrapperComponent },
    { name: 'fieldGroup', component: FieldGroupComponent },
  ],
});
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    InputFieldType,
    TestComponent,
    PanelWrapperComponent,
    ChildComponent,
    LayoutComponent,
    DoneTwoComponent,
    WrapperComponent,
    ViewComponent,
    WorkspaceComponent,
    FieldGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    config,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
