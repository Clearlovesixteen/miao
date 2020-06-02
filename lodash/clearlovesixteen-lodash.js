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
    difference:function ( array , values ){
        var arr = []
        var map = {}
        for(var i = 0 ; i < array.length ; i++){
            map[array[i]] = true
        }
        for(var j = 0 ; j < values.length ; j++){
            if( values[j] in map){
                map[values[j]] = false
            }
        }
        for(var keys in map){
            if(map[keys]){
                arr.push( Number(keys) )
            }
        }
        return arr
    },
    drop:function(array , n ){
        var len = array.length ;
        var arr = []
        if(n >= len ){
            return arr
        }else{
            for(var i = 0 ; i < len ; i++){
                if(i >= n ){
                    arr.push(array[i])
                }
            }
        }
        return arr
    }
}