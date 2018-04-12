import {InjectionToken} from '@angular/core';
import {ContentfulApiConfig} from './contentful-api.config';

export const CONFIG = new InjectionToken<ContentfulApiConfig>('x.contentful');
