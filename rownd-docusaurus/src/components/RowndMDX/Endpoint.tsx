import React from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Props = {
  method: HttpMethod;
  path: string;
  baseUrls?: string[];
};

const methodToClass: Record<HttpMethod, string> = {
  GET: 'api-method--get',
  POST: 'api-method--post',
  PUT: 'api-method--put',
  PATCH: 'api-method--patch',
  DELETE: 'api-method--delete',
};

export default function Endpoint({method, path, baseUrls}: Props) {
  const urls = baseUrls && baseUrls.length > 0 ? baseUrls : ['https://api.rownd.io'];
  return (
    <div className="api-endpoint">
      <div className="api-endpoint__row">
        <span className={`api-method ${methodToClass[method]}`}>{method}</span>
        <code className="api-endpoint__path">{path}</code>
      </div>
      {urls.length > 0 && (
        <div className="api-endpoint__urls">
          {urls.map((u, idx) => (
            <span key={u} className="api-endpoint__url">
              {u}
              {idx < urls.length - 1 ? <span className="api-endpoint__sep"> • </span> : null}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


