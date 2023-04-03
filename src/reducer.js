export const initialState = {
    basket: []
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {


    switch (action.type) {
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'Remove_From_Basket':
            const ind = state.basket.findIndex(item => item.id === action.id)

            let newBask = [...state.basket]

            if(ind >= 0){
                newBask.splice(ind, 1);
            }
            else{
                console.warn(`Can't remove (id : ${action.id}) as it is not inside basket `)
            }

            return {
                ...state, basket: newBask
            }

        case 'Empty_Basket':
            return {
                ...state,
                basket :[]
            }

        case 'SET_USER':
            return {
                ...state , user : action.user
            }

        default:
            return state;
    }
}
export default reducer