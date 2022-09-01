import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CdkService } from 'src/app/cdk.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  constructor(private cdkService: CdkService) {}

  ngOnInit(): void {
    this.cdkService.sub$.subscribe((v) => (this.ids = v));
  }
  ids: string[] = [];
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      wrappers: ['panel'],
      templateOptions: {
        required: true,
        type: 'text',
        label: 'First Name',
      },
    },
    {
      key: 'firstName',
      type: 'checkbox',
      wrappers: ['panel'],
      templateOptions: {
        required: true,
        type: 'text',
        label: 'Last Name',
      },
    },
    {
      key: 'firstname',
      type: 'input',
      wrappers: ['panel'],
      templateOptions: {
        required: true,
        type: 'text',
        label: 'Last Name',
      },
    },
  ];

  drop(event: any) {
    console.log(event.item);
    this.fields = [
      ...this.fields,
      {
        key: 'firstName',
        wrappers: ['fieldGroup'],
      },
    ];
  }
}
