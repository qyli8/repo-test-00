function main ( param1, param2, params ) {   
   console.log( " hello ", params );
   console.log( " hello ", param3 );
   console.log( " hello ", arguments );
   if (params!==undefined && typeof params === "object" && params.length > 0  ){
       params.forEach(function(e, idx) {
            console.log( " index: ", idx, " item : ", e);
       });
   }
}


module.exports = main