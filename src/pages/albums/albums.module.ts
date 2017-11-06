import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsPage } from './albums';
// import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
 
@NgModule({
  declarations: [
    AlbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumsPage),
    // OrderByPipeModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class AlbumsPageModule {}
