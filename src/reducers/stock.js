export default function reducer(state = [], action){
    switch(action.type){
        case 'GETSTOCK':
            return {
                ...state,
                stock:action.payload
            }
        default:
            return state;
    }
}