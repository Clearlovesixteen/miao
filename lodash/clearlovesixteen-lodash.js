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
    difference:function ( array , array1 ){
        var arr = []
        var map = {}
        for(var i = 0 ; i < array.length ; i++){
            if( array[i] in map){
                map[ array[i] ]++
            }else{
                map[ array[i] ] = 1
            }
        }
        for(var j = 0 ; i < array1.length ; j++){
            if( array1[j] in map){
                map[ array1[j] ]++
            }else{
                map[ array1[j] ] = 1
            }
        }
        for(var keys in map){
            if(map[keys] == 1){
                arr.push( Number(keys) )
            }
        }
        return arr
    },
    compact:function (){
        
    },
    
}