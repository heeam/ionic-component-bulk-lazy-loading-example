import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumDetailPage } from './album-detail';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AlbumDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumDetailPage),
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class AlbumDetailPageModule {}
