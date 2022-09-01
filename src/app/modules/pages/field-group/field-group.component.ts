import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldWrapper, FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { CdkService } from 'src/app/cdk.service';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss'],
})
export class FieldGroupComponent extends FieldWrapper implements OnInit {
  constructor(private cdkService: CdkService) {
    super();
  }

  ids: string[][] = [];

  ngOnInit(): void {
    this.cdkService.register(this.id);
  }

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'checkbox',
      id: '1',
      wrappers: ['panel', 'form-field'],
      templateOptions: {
        required: true,
        type: 'checkbox',
        label: 'dada Name',
      },
    },
  ];

  drop(event: any) {
    console.log(event);
  }
}
