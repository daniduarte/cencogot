import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { HouseListComponent } from './house-list/house-list.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { RestService } from './rest.service';
import { HouseFilterPipe} from './house-list/house-filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HouseListComponent,
    CharacterListComponent,
    CharacterComponent,
    HouseFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
