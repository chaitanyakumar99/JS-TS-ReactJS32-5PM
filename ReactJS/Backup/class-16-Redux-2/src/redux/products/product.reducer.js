import {INCR,DECR} from './product.action'
let initialState={
	p_Name:"vivo TWS 3e buds up-to 30dB Active Noise",
	price:2000,
	qty:1,
	image:'https://rukminim2.flixcart.com/image/224/224/xif0q/headphone/y/m/y/-original-imah3aj4tkzkgc5y.jpeg?q=90'

}
let productReducer = (state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case 'INCR':
            return {...state,qty:state.qty+1}
        case 'DECR':
            return {...state,qty:state.qty-1}
        default:
            return state
    }
}

export {productReducer} 