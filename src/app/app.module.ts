import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { BlogEntryCardComponent } from './components/blog-entry-card/blog-entry-card.component'
import { BlogEntriesBoardComponent } from './components/blog-entries-board/blog-entries-board.component'
import { AlertComponent } from './components/alert/alert.component'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDatabaseService } from './services/in-memory-database/in-memory-database.service'

@NgModule({
  declarations: [
    AppComponent,
    BlogEntryCardComponent,
    BlogEntriesBoardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDatabaseService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
