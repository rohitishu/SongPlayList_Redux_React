// Action Creator

export const selectSong=(song)=>{
 // return an Action
 return {
   type:'SELECTED_SONG',
   payload:song
 };
};