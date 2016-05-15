export default function ($resource)
{
    return {
        query: function(pollingUrl, callback){
            debugger;
            return $resource(pollingUrl, {}, {
                query: { method: 'GET', params: {}, headers: {'Access-Control-Allow-Origin': '*'}}
            }).query(callback);
        }
    }
}
