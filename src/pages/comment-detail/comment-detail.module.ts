import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentDetailPage } from './comment-detail';
// import { AutoResizeDirectiveModule } from '../../directives/auto-resize/auto-resize.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
 
@NgModule({
  declarations: [
    CommentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentDetailPage),
    // AutoResizeDirectiveModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class CommentDetailPageModule {}
