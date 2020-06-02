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
             return arr
         }
     }
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
     }
}