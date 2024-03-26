export const $ok=(key:any)=>{
   const nonUndefine= typeof key!=='undefined';
   const hasLength=key?.length>0;
   const noNull=typeof key!==null;
   return nonUndefine&&hasLength&&noNull;
}
