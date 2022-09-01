import { Component, OnInit } from '@angular/core';
import { CdkService } from 'src/app/cdk.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  list = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];
  constructor(private cdkService: CdkService) {}

  ngOnInit(): void {
    this.cdkService.sub$.subscribe((v) => (this.ids = v));
  }
  ids: string[] = [];
}
