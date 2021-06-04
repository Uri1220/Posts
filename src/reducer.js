export default function(state, action) {
   switch (action.type) {
     case 'add':
       return [
         ...state,
         {
           id: Date.now(),
           title: action.payload.title,
           text: action.payload.text,
         }
       ]
     
     case 'del':
       return state.filter(post => post.id !== action.payload)
     default:
       return state
   }
 }