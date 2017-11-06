import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todos';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations: [
		TodosPage,
	],
	imports: [
		IonicPageModule.forChild(TodosPage),
    ComponentsModule,
    DirectivesModule,
    PipesModule,
	],
})
export class TodosPageModule {}
