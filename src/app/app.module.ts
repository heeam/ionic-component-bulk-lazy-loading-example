import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

// import { DirectivesModule } from '../directives/directives.module';

// import { PipesModule } from '../pipes/pipes.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SystemProvider } from '../providers/system/system';

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		IonicModule.forRoot(MyApp),
		BrowserModule,
		HttpModule,
		// DirectivesModule,
		// PipesModule,
	],
	bootstrap: [IonicApp],
	exports: [
		IonicModule,
		// PipesModule,
	],
	entryComponents: [
		MyApp,
	],
	providers: [
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		StatusBar,
		SplashScreen,
		SystemProvider,
	]
})
export class AppModule {}
