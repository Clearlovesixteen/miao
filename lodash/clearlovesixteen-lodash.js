var clearlovesixteen = {
    chunk:function ( array ,  size ){
        var len = array.length;
        var arr = [] ;
        var arr1 = [] ;
        var count = 0 ;
        for(var i = 0  ; i < len ; i++){
                arr1.push(array[i])
                count++;
                if(count == size || i == len-1){
                    arr.push(arr1)
                    count = 0;
                    arr1 = []
            }
        }
        return arr
    },
    compact:function (array){
        var len = array.length ;
        var arr =  []
        for(var i = 0 ; i < len ; i++){
            if(Boolean( array[i] ) !== false){
                arr.push(array[i])
            }
        }
        return arr
    },
    concat:function ( array , [values] ) {
        
    },
    difference:function ( array , ...values ){
        var arr = []
        var map = {}
        for(var i = 0 ; i < array.length ; i++){
            map[array[i]] = true
        }
        for(var j  in values){
            for(var k in values[j]){
                if(map[ values[j][k] ]){
                    map[ values[j][k] ] = false
                }
            }
        }
        for(var keys in map){
            if(map[keys]){
                arr.push( Number(keys) )
            }
        }
        return arr
    },
    drop:function(array , n = 1 ){
        var len = array.length ;
        var arr = []
        for(var i = n ; i < len ; i++){
            arr.push(array[i])
        }
        return arr
    },
    dropRigth:function(array, n = 1){
        var len = array.length;
        var arr = []
        if(n >= len ){
            return arr
        }
        for(var i = 0 ; i < len - n ; i++){
            arr.push(array[i])
        }
        return arr
    },
    fill:function(array , value , start = 0 , end = array.length){
         var len = array.length ;
         var arr = [] ;
         for(var i = 0 ; i < len ; i++){
             if(i >= start && i < end ){
                 arr.push(value)
             }else{
                 arr.push(array[i])
             }
         }
         return arr
     },
     flatten:function(array){
         var len = array.length ; 
         var arr = []
         for(var i = 0 ; i < len ; i++){
             if(array[i] instanceof Array){
                 for(var j of array[i]){
                     arr.push(j)
                 }
             }else{
                 arr.push( array[i] )
             }
         }
         return arr
     },
     head:function(array){
         if(array.length == 0){
             return undefined
         }else{
             return array[0]
         }
     },
     flattenDeep:function(array){
         return array.flat(Infinity)
     },
     flattenDepth:function(array , depth = 1){
         return array.flat(depth)
     },
     indexOf:function(array , value , fromIndex = 0){
        var len = array.length
        if( isNaN(value) ){
            for(var i = fromIndex ;  i < len ; i++){
                if( isNaN( array[i] )){
                    return i
                } 
            }
        }else{
             for(var i = fromIndex ; i < len ; i++){
                 if( array[i]  == value){
                     return i
                 }
             }
         }
         return -1
     },
     initial:function(array){
         return array.slice(0,array.length-1)
     },
     intersection:function(...arrays){
         var map = {}
         var arr = []
         var len = arrays.length;
         var len1 = arrays[0].length;
         for(var i = 0 ; i < len1 ; i++){
             map[ arrays[0][i] ] = true
         }
         for(var j = 0 ; j < len ; j++){
             for(var keys in map){
                 if( arrays[j].includes( Number(keys) ) == false){
                     map[keys] = false
                 }
             }
         }
         for(var key in map){
             if(map[key]){
                 arr.push(Number(key))
             }
         }
         return arr
     },
     join:function(array , separator = ','){
         var len = array.length ;
         var str = array[0]
         for(var i = 1 ; i < len ; i++){
             str+=separator
             str+=array[i]
         }
         return str
     }
}