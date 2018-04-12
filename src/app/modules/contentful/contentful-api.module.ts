import {NgModule} from '@angular/core';
import {ContentfulApiService} from './contentful-api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ContentfulApiService
    ]
})
export class ContentfulApiModule {
}
