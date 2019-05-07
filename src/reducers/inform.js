import cookieWrite from '../browser/cookieWrite';

export default (state = [], action) => {
    switch(action.type){
        case 'GET_STOCK':
            action.payload.map(i => {
                i.shistory.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
            })
            var json_str = JSON.stringify(action.payload);
            cookieWrite('stocks',json_str);
            return {
                ...state,
                stocks:action.payload
            }
        case 'GET_PORTFOLIO':
        var json_str = JSON.stringify(action.payload);
            cookieWrite('portfolios',json_str);
            return {
                ...state,
                portfolios:action.payload
            }
        default:
            return state;
    }
}
