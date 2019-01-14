const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id:1,
        description: 'Pagar cartão',
        done: true
    },
    {
        _id:2,
        description: 'Pagar cartão 2',
        done: false
    },
    {
        _id:3,
        description: 'Pagar cartão 3',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGE': 
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}
        case 'TODO_ADDED':
            return {...state, description: ''}
        default:
            return state
    }
}