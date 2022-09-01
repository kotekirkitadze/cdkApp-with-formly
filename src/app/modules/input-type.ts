import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Favorite food</mat-label>
      <input matInput placeholder="Ex. Pizza" value="Sushi" />
    </mat-form-field>
  `,
})
export class InputFieldType extends FieldType<FieldTypeConfig> {}
