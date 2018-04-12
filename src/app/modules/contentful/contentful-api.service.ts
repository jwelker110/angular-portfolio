import {Inject, Injectable} from '@angular/core';
import {
    Asset,
    AssetCollection,
    ContentfulClientApi,
    ContentType,
    ContentTypeCollection,
    createClient,
    Entry,
    EntryCollection,
    Space,
    SyncCollection
} from 'contentful';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {defer} from 'rxjs/observable/defer';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {ContentfulApiConfig} from './contentful-api.config';
import {CONFIG} from './contentful-api.token';
import {ContentfulQuery, DefaultLinkedEntriesQuery} from './contentful-api.helpers';
import {_throw} from 'rxjs/observable/throw';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

/**
 * Wrapper for the Contentful Api Client. Client methods that return promises are wrapped to return
 * deferred observables, which wait to invoke the api request until they are subscribed to.
 *
 * Applicable config options should be provided via the module's forRoot or forChild methods, depending
 * on where the module is used.
 */
@Injectable()
export class ContentfulApiService {

    private _spaceId = environment.spaceId;
    private _baseUrl = `/spaces/${this._spaceId}`;

    constructor(private _http: HttpClient) {
    }

    public getAsset(id: string, query?: any);
    public getAsset(id: string, query?: ContentfulQuery): Observable<Asset> {
        const params = query instanceof ContentfulQuery ? query.query : query;
        return this._http.get<Asset>(`${this._baseUrl}/assets/${id}`, {params: params});
    }

    public getAssets(query?: any);
    public getAssets(query?: ContentfulQuery): Observable<AssetCollection> {
        const params = query instanceof ContentfulQuery ? query.query : query;
        return this._http.get<AssetCollection>(`${this._baseUrl}/assets`, {params: params});
    }

    /**
     * Retrieve the specified Content Type that is defined in the current Space
     * @param {string} id
     * @returns {Observable<ContentType>}
     */
    public getContentType(id: string): Observable<ContentType> {
        return this._http.get<ContentType>(`${this._baseUrl}/content_types/${id}`);
    }

    /**
     * Retrieve the Content Types that have been defined in the current Space
     * @param query
     */
    public getContentTypes(query?: any);
    public getContentTypes(query?: ContentfulQuery): Observable<ContentTypeCollection> {
        const params = query instanceof ContentfulQuery ? query.query : query;
        return this._http.get<ContentTypeCollection>(`${this._baseUrl}/content_types`, {params: params});

    }

    /**
     * Retrieve a single entry, without linked Entry or Asset items
     * @param {string} id
     * @param query
     * @returns {Observable<Entry<T>>}
     */
    public getEntry<T>(id: string, query?: any);
    public getEntry<T>(id: string, query?: ContentfulQuery): Observable<Entry<T>> {
        const params = query instanceof ContentfulQuery ? query.query : query;
        return this._http.get<Entry<T>>(`${this._baseUrl}/entries/${id}`, {params: params});
    }

    /**
     * Retrieve Entries using the provided Entry type name
     * @returns {Observable<EntryCollection<T>>}
     * @param contentTypeId
     */
    public getEntriesForType<T>(contentTypeId: string): Observable<EntryCollection<T>> {
        return this.getEntries(new ContentfulQuery({'content_type': contentTypeId}));
    }

    /**
     * Retrieve entries based on the provided query.
     * @param query
     * @returns {Observable<EntryCollection<T>>}
     */
    public getEntries<T>(query?: any);
    public getEntries<T>(query?: ContentfulQuery): Observable<EntryCollection<T>> {
        const params = query instanceof ContentfulQuery ? query.query : query;
        return this._http.get<EntryCollection<T>>(`${this._baseUrl}/entries`, {params: params});
    }

    /**
     * Retrieve Entry and include Links
     * @param {DefaultLinkedEntriesQuery} query
     * @returns {Observable<EntryCollection<T>>}
     */
    public getEntryAndLinks<T>(query: DefaultLinkedEntriesQuery): Observable<EntryCollection<T>> {
        return this.getEntries(query.query);
    }

    /**
     * Retrieve Entries that are linked to the entryId, not including the Entry associated with the entryId
     * @param {string} entryId
     * @returns {Observable<EntryCollection<T>>}
     */
    public getLinkedEntries<T>(entryId: string): Observable<EntryCollection<T>> {
        return this.getEntries(new ContentfulQuery({'links_to_entry': entryId}));
    }

    public getEntriesWithFields<T>(query: ContentfulQuery): Observable<EntryCollection<T>> {
        if (!query.query.content_type) {
            return _throw('Error: No content_type provided! content_type is required when using select operator on Entries');
        }
        if (!query.query.select) {
            return _throw('Error: No fields provided! Select operator requires a string containing comma-separated fields');
        }
        return this.getEntries(query.query);
    }

    public getSpace(): Observable<Space> {
        return this._http.get<Space>(`${this._baseUrl}`);
    }

    public synchronize(query?: ContentfulQuery): Observable<SyncCollection> {
        const params = query instanceof ContentfulQuery ? query.query : query;
        return this._http.get<SyncCollection>(`${this._baseUrl}/sync`, {params: params});
    }

}
