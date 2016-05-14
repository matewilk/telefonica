export default function ($resource)
{
    return $resource('http://localhost:80', {}, {
        query: { method: 'GET', params: {}, headers: {'Access-Control-Allow-Origin': '*'}}
    });
}
