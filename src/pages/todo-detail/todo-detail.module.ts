import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoDetailPage } from './todo-detail';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations: [
		TodoDetailPage,
	],
	imports: [
		IonicPageModule.forChild(TodoDetailPage),
    ComponentsModule,
    DirectivesModule,
    PipesModule,
	],
})
export class TodoDetailPageModule {}
