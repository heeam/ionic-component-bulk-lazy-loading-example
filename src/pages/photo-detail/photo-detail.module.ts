import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoDetailPage } from './photo-detail';
// import { PhotoFrameComponentModule } from '../../components/photo-frame/photo-frame.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
 
@NgModule({
  declarations: [
    PhotoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoDetailPage),
    // PhotoFrameComponentModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class PhotoDetailPageModule {}
