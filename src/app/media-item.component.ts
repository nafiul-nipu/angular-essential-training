import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  // name= 'The Redemptiion';

  // wasWatched(){
  //   return true;
  // }

  @Input() mediaItem;

  onDelete(){
    console.log('what is this??')
  }
}
