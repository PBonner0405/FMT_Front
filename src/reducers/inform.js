
export default (state = [], action) => {
    switch(action.type){
        case 'GET_STOCK':
            console.log("HERE is REDUCER",action);
            action.payload.map(i => {
                i.shistory.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
            })
            return {
                ...state,
                stocks:action.payload
            }
        case 'GET_PORTFOLIO':
            return {
                ...state,
                portfolios:action.payload
            }
        default:
            return state;
    }
}
