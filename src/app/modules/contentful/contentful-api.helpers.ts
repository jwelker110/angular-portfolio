import {IContentfulQuery} from './contentful-api.model';
import {isNullOrUndefined} from 'util';

export class ContentfulQuery {
    get query(): IContentfulQuery { return this._current; }

    set query(val: IContentfulQuery) {
    }

    private _current: IContentfulQuery;
    constructor(query: IContentfulQuery = {}) {
        this.paging(0, 10).params(query);
    }

    /**
     * Set the parameters associated with this query. Accepts an object optionally implementing the IContentfulQuery interface, in addition
     * to any other properties that may be used when making a request to the Contentful API.
     * @param {IContentfulQuery} params - Object that optionally implements the IContentfulQuery interface.
     * @returns {ContentfulQuery}
     */
    params(params?: IContentfulQuery): ContentfulQuery {
        this._current = Object.assign({}, this._current, params);
        if (params.skip && params.skip < 0) {
            params.skip = this._current.limit;
        }
        if (params.limit && params.limit < 1) {
            params.limit = this._current.limit;
        }
        return this;
    }

    /**
     * You can order items in the response by specifying the order search parameter. You can use sys properties (such as sys.createdAt)
     * or field values (such as fields.myCustomDateField) for ordering.
     *
     * You must set the content_type URI query parameter to the ID of the content type you want to filter by. You can only use the
     * following field types with the order parameter:
     *
     * Name         JSON Primitive  Description
     * ====         ==============  ===========
     * Symbol	    String	        Basic list of characters. Maximum length is 256.
     * Integer	    Number	        Number type without decimals. Values from -253 to 253.
     * Number	    Number	        Number type with decimals.
     * Date	        String	        Date/time in ISO-8601 format.
     * Boolean	    Boolean	        Flag, true or false.
     *
     * The following field types do not support the order parameter:
     *
     * Name         JSON Primitive  Description
     * ====         ==============  ===========
     * Text	        String	        Same as symbol, but can be filtered via full-text search. Maximum length is 50,000.
     * Link	        Object	        See links
     * Array	    Array	        List of values. Value type depends on field.items.type.
     * Object	    Object	        Arbitrary object.
     *
     * You can reverse the sort order by prefixing the field with a - symbol.
     *
     * @param {string[]} fields
     * @param contentType
     * @returns {ContentfulQuery}
     */
    order(fields: string[], contentType: string = this.query.content_type): ContentfulQuery {
        if (!contentType) {
            throw Error('Error: no content type specified! Querying with an order parameter requires setting the content type');
        }
        this._current = Object.assign({}, this._current, {
            order: fields.join(','),
            content_type: contentType
        });
        return this;
    }

    /**
     * The select operator allows you to choose what fields to return from an entity. You can choose multiple values by
     * providing an array of strings representing each field.
     *
     * For example, if you want to return the sys.id and fields.name of an Entry you would provide ['sys.id', 'fields.name']
     *
     * You can fetch the entire sys or fields object and it's sub-fields by passing only the beginning of the property string.
     *
     * @param {string[]} fields
     * @returns {ContentfulQuery}
     */
    select(fields: string[]): ContentfulQuery {
        if (fields.length > 100) {
            throw Error('Error: trying to select too much! You can select up to 100 properties');
        }

        const validFields: string[] = [];
        for (const field of fields) {
            if (field.split('.').length > 2) {
                throw Error('Error: trying to select too much! You can select properties to a depth of 2, ' +
                    'but tried selecting depth ' + field.split('.').length);
            }
            validFields.push(field);
        }
        this._current = Object.assign({}, this._current, {select: validFields.join(',')});
        return this;
    }

    /**
     * Perform full-text search across all text and symbol fields.
     *
     * Full-text search is case insensitive and might return more results than expected. A query will only take values with
     * more than 1 character.
     *
     * @param {string} query
     * @returns {ContentfulQuery}
     */
    search(query: string): ContentfulQuery {
        if (!query || query.length < 2) {
            throw Error('Error: empty query! A query requires more than 1 character');
        }
        this._current = Object.assign({}, this._current, {query: query});
        return this;
    }

    /**
     * Perform full-text search on the provided field.
     *
     * Full-text search is case insensitive and might return more results than expected. A query will only take values with
     * more than 1 character.
     *
     * @param {string} field
     * @param {string} query
     * @returns {ContentfulQuery}
     */
    match(field: string, query: string): ContentfulQuery {
        if (!query || query.length < 2) {
            throw Error('Error: empty query! A query requires more than 1 character');
        }
        const search = {};
        search[field + '[match]'] = query;
        this._current = Object.assign({}, this._current, search);
        return this;
    }

    /**
     * Sets the paging for this query
     * @param {number} skip - the offset
     * @param {number} limit - the page size
     * @returns {ContentfulQuery}
     */
    paging(skip: number = this.query.skip, limit: number = this.query.limit): ContentfulQuery {
        if (isNullOrUndefined(skip) || isNullOrUndefined(limit)) {
            throw Error('Error: invalid paging! skip and limit must be set to non-negative integer values');
        }
        if (limit > 1000) {  // Contentful API will only ever return up to 1000 items
            limit = 1000;
        }
        this._current = Object.assign({}, this._current, {
            skip: skip,
            limit: limit
        });
        return this;
    }

    /**
     * Set a content type this query will be associated with.
     * @param {string} contentTypeId
     * @returns {ContentfulQuery}
     */
    type(contentTypeId: string): ContentfulQuery {
        this._current = Object.assign({}, this._current, {
            'content_type': contentTypeId
        });
        return this;
    }

    /**
     * Set an id that is used to retrieve associated Entries.
     * @param {string} linkToId
     * @returns {ContentfulQuery}
     */
    link(linkToId: string): ContentfulQuery {
        this._current = Object.assign({}, this._current, {
            'links_to_entry': linkToId
        });
        return this;
    }

    /**
     * Set limit of nested Entries to retrieve.
     * @param {number} linkLevel - between 1 and 10
     * @returns {ContentfulQuery}
     */
    depth(linkLevel: number | string = 1): ContentfulQuery {
        this._current = Object.assign({}, this._current, {
            'include': linkLevel
        });
        return this;
    }

    /**
     * Remove all existing query properties. Does NOT create a new instance.
     * @returns {ContentfulQuery}
     */
    reset(): ContentfulQuery {
        this._current = {};
        return this;
    }
}

export abstract class LinkedEntriesQuery extends ContentfulQuery {
    constructor(public id: string) {
        super();
    }
}

export class DefaultLinkedEntriesQuery extends LinkedEntriesQuery {
    constructor(id: string, linkingField: string, contentType: string, linkLevel: number | string = 1) {
        super(id);
        const params = {};
        params[linkingField] = id;
        this.type(contentType).depth(linkLevel).params(params);
    }
}

export class AuthorLinkedEntriesQuery extends DefaultLinkedEntriesQuery {
    constructor(authorId: string, linkLevel: number = 1) {
        super(authorId, 'sys.id', 'author', linkLevel);
    }
}

export class PostLinkedEntriesQuery extends DefaultLinkedEntriesQuery {
    constructor(postId: string, linkLevel: number = 1) {
        super(postId, 'sys.id', 'post', linkLevel);
    }
}

export class CategoryLinkedEntriesQuery extends DefaultLinkedEntriesQuery {
    constructor(categoryId: string, linkLevel: number = 1) {
        super(categoryId, 'fields.category.sys.id', 'post', linkLevel);
    }
}

export class NewsLinkedEntriesQuery extends DefaultLinkedEntriesQuery {
    constructor() {
        super('Category', '', 'category');
    }
}
