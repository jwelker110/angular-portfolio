import {ModuleWithProviders, NgModule} from '@angular/core';
import {ContentfulApiService} from './contentful-api.service';
import {HttpClientModule} from '@angular/common/http';
import {ContentfulApiConfig} from './contentful-api.config';
import {CONFIG} from './contentful-api.token';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ContentfulApiService
    ]
})
export class ContentfulApiModule {
    static forRoot(config: ContentfulApiConfig): ModuleWithProviders {
        return {
            ngModule: ContentfulApiModule,
            providers: [
                {provide: CONFIG, useValue: config}
            ]
        };
    }
    static forChild(config: ContentfulApiConfig): ModuleWithProviders {
        return {
            ngModule: ContentfulApiModule,
            providers: [
                {provide: CONFIG, useValue: config}
            ]
        };
    }
}
