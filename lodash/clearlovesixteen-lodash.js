var clearlovesixteen = {
    .chunk:function ( array ,  size ){
        var len = array.length;
        var arr = [] ;
        var arr1 = [] ;
        var count = 0 ;
        for(var i = 0  ; i < len ; i++){
            if(count == size){
                arr.push(arr1)
                count = 0;
                arr1 = []
            }else{
                arr1.push(array[i])
                count++
            }
        }
        return arr
    },
    
    
}