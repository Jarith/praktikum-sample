import { queryString, isPlainObject } from '../../utils/queryString';
import { METHODS } from './constants';

type RequestOptions<T extends Record<string, any>> = {
    method: METHODS;
    headers?: Record<string, string>;
    data?: T;
    timeout?: number;
    withCredentials?: boolean;
};

export default class HTTPTransport {
    private root: string;

    constructor(root = '') {
        this.root = root;
    }

    private request = <T>(
        url: string,
        options: RequestOptions<T>,
        timeout = 5000
    ) => {
        let requestPath = this.createPath(url);
        const {
            method,
            headers = {},
            data = {},
            withCredentials = true,
        } = options;
        const xhr = new XMLHttpRequest();

        if (method === METHODS.GET) {
            const query = queryString(data);
            requestPath += query ? `?${query}` : '';
        }

        xhr.open(method, requestPath);

        xhr.timeout = timeout;
        xhr.withCredentials = withCredentials;
        xhr.responseType = 'json';

        for (const [name, value] of Object.entries(headers)) {
            xhr.setRequestHeader(name, value);
        }

        return new Promise((resolve, reject) => {
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                }
                reject(xhr.response);
            };

            if (method === METHODS.GET) {
                xhr.send();
            } else {
                const processedData = isPlainObject(data)
                    ? JSON.stringify(data)
                    : data;

                xhr.send(processedData);
            }
        });
    };

    public createPath(path: string) {
        if (!path.startsWith('/')) {
            path = `/${path}`;
        }

        return this.root + path;
    }

    public get = <T>(url: string, options: Partial<RequestOptions<T>> = {}) => {
        return this.request(
            url,
            { ...options, method: METHODS.GET },
            options.timeout
        );
    };

    public post = <T>(
        url: string,
        options: Partial<RequestOptions<T>> = {}
    ) => {
        return this.request(
            url,
            { ...options, method: METHODS.POST },
            options.timeout
        );
    };

    public put = <T>(url: string, options: Partial<RequestOptions<T>> = {}) => {
        return this.request(
            url,
            { ...options, method: METHODS.PUT },
            options.timeout
        );
    };

    public delete = <T>(
        url: string,
        options: Partial<RequestOptions<T>> = {}
    ) => {
        return this.request(
            url,
            { ...options, method: METHODS.DELETE },
            options.timeout
        );
    };
}
