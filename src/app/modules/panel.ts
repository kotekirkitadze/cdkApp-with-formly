import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <mat-card
      class="editInput"
      cdkDrag
      [cdkDragData]="field"
      cdkDragBoundary=".workspaceClass"
    >
      <!-- <div *cdkDragPreview>
        <div class="widget_item_preview"></div>
    </div>

    <div *cdkDragPlaceholder>
        <div class="widget_item_placeholder"></div>
    </div> -->
      <div class="inputField">
        <ng-container class="deactivate" #fieldComponent></ng-container>
      </div>
      <!-- <div class="buttonBar">
        <button mat-mini-fab color="primary">
          <mat-icon>content_copy</mat-icon>
        </button>
        <button mat-mini-fab color="primary">
          <mat-icon>delete</mat-icon>
        </button>
      </div> -->
      <div class="id">#{{ field.id }}</div>
    </mat-card>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {
  // @ViewChild('fieldComponent', { read: ViewContainerRef })
  // fieldComponent: ViewContainerRef;
}
