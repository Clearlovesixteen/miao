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
    concat:function ( array , ...values ) {
        var arr = []
        for(var i  of array){
            arr.push(i)
        }
        for(var j of values){
            for(var o of j){
                arr.push( o )
            }
        }
        return arr
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
         var str = array[0] + ''
         for(var i = 1 ; i < len ; i++){
             str+=separator
             str+=array[i]
         }
         return str
     },
     last:function(array){
         return array[array.length-1]
     },
     lastIndexOf:function(array , value , formIndex = array.length-1){
         var len = array.length
         if( isNaN(value) ){
             for(var i = formIndex ;  i >= 0 ; i--){
                 if( isNaN( array[i] )){
                     return i
                 } 
             }
         }else{
              for(var i = formIndex ; i >= 0 ; i--){
                  if( array[i]  == value){
                      return i
                  }
              }
          }
          return -1
     },
     nth:function(array , n = 0){
        n = Math.abs(n)
        for( var i = 0 ; i < array.length ; i++){
            if(i == n){
                return array[i]
            }
         }
     },
     pull:function(array , ...values){
         for(var keys of values){
             for(var i = 0 ; i < array.length ; i++){
                 if(array[i] == keys){
                     array.splice(i,1)
                 }
             }
         }
         return array
     },
     pullAll:function(array , values){
         var arr = []
         for(var i = 0 ; i < array.length ; i++){
             if( values.includes(array[i]) == false){
                 arr.push(array[i])
             }
         }
         return arr
     },
     pullAt:function( array , ...indexes ){
         var arr = [] 
         for(var i = 0 ; i < array.length ; i++){
             if(i == indexes-1){
                 arr.push(array[i])
             }
         }
         return arr
     },
     remove:function(array , predicate){
         var arr = []
         for(var i = 0 ; i < array.length ; i++){
             if( predicate(i) ){
                arr.push( array[i] )
             }
         }
         return arr
     },
     reverse:function(array){
         var arr = []
         for(var i = array.length-1 ; i >=0 ; i--){
             arr.push( array[i] )
         }
         return arr
     },
     slice:function(array , start = 0 , end = arr.length ){
        var arr = [] ;
        for(var i = start ; i < end ; i++){
            arr.psuh( array[i] )
        }
        return arr
     },
     sorteIndex:function(array , value){
         for(var i = 0 ; i <  array.length ; i++){
             if(array[i] < value && value < array[i+1] ){
                 return i+1
             }
         }
     },
     sortedIndexOf:function(array , value ){
         for(var i = 0 ; i < array.length ; i++){
             if(array[i] == value){
                 return i
             }
         }
         return -1
     },
     sortedLastIndex:function( array , value ){
         var num = -1 ;
         for(var i = 0 ; i < array.length ; i++){
             if(array[i] <= value && value < array[i+1] ){
                 return i+1
             }
         }
     },
     sortedLastIndexOf:function( array , value ){
         var num = -1 ;
         for(var i = 0 ; i < array.length ; i++){
             if(array[i] == value){
                 num =  i;
             }
         }
         return num
     },
     sortedUniq:function(array){
         var arr = [] ;
         for(var i = 0 ; i < array.length ; i++){
             if( arr.includes(array[i]) == false){
                 arr.push(array[i])
             }
         }
         return arr
     },
     tail:function(array){
         array.splice(0,1)
         return array
     },
     take:function(array , n = 1){
         var arr = []
         var len ;
         if(n > array.length ){
             len = array.length
         }else{
             len = n
         }
         for(var i = 0 ; i < len ; i++){
             arr.push(array[i])
         }
         return arr
     },
     takeRight:function(array , n = 1){
         var arr = []
         var len = array.length
         if(n >= len ){
             return array
         }
         if(n == 0){
             return arr
         }
         for(var i = len - n; i < len ; i++){
             arr.push( array[i] )
         }
         return arr
     },
     union:function(...arrays){
         var arr = []
         for(var i of arrays){
             for(var j of i ){
                 if(arr.includes(j) == false){
                     arr.push(j)
                 }
             }
         }
         return arr
     },
     uniq:function(array){
         var arr = []
         for(var i of array){
             if(arr.includes(i) == false){
                 arr.push(i)
             }
         }
         return arr
     },
     unzip:function(array){
        var arr = [];
        var flag = true;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (flag) {
                    arr.push([]);
                    if (j == array[i].length - 1) {
                        flag = false;
                    }
                }
                arr[j].push(array[i][j]);
                }
             }
         return arr
     },
     without:function( array , ...values ){
         var arr= []
         var map = {}
         for(var i of values){
             map[i] = 1
         }
         for(var k of array){
             if( k in map == false){
                 arr.push(k)
             }
         }
         return arr
     },
     xor:function(...arrays){
         var map = {}
         var arr = []
         for(var i of arrays){
             for(var j of i){
                 if(j in map){
                     map[j]++
                 }else{
                     map[j] = 1
                 }
             }
         }
         for(var keys in map){
             if(map[keys] == 1){
                 arr.push(Number(keys))
             }
         }
         return arr
     },
     zip:function(...array){
        var arr = [];
        var num = 0;
        for (let i of array) {
            if (i.length > num) {
                num = i.length;
            }
        }
        for (let i = 0; i < num; i++) {
            arr.push([]);
        }
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < num; j++) {
                arr[j].push(array[i][j]);
            }
        }
         return arr
     },
     zipObject:function( props=[] , values=[] ){
        var map = {}
        for(var i = 0 ; i < props.length ; i++){
            map[ props[i] ] = values[i]
        }
        return map
     },
     // 高阶函数
     ary:function(func , n = func.length ){
         return function(...args){
             return func(...args.silce(0,n))
         }
     },
     forEach:function(collection , iteratee){
         if(typeof collection == "Array"){
             for(var i = 0 ; i < collection.length ; i++){
                  iteratee(collection[i])
             }
         }else{
             for(var keys of collection){
                  iteratee(keys)
             }
         }
         return arr
     },
     filter:function(ary , test){
         var arr = []
         for(var i =  0 ; i < ary.length ; i++){
             if(test( ary[i] )){
                 arr.push(ary[i])
             }
         }
         return arr
     },
     negate:function(func){
       return function(...args){
           return !func(...args)
       }  
     },
     unary:function(func){
         return function(arg){
             return func(arg)
         }
     },
     // Lang
     castArray:function(value){
         if( value instanceof  Array){
             return value 
         }else if(arguments.length == 0){
             return []
         }else {
             return [value]
         }
     },
     conformsTo:function(object , source){
         for(var keys in source){
             return source[keys](object[keys])
         }
     },
     eq:function(value , other ){
         if( Number.isNaN( value) ){
             return Number.isNaN(value) === Number.isNaN(other)
         }
         if(value === other){
             return true
         }else{
             return false
         }
         
     },
     gt:function(value , other){
         return value > other
     },
     gte:function(value , other){
         return value >= other
     },
     isArguments:function(value){
         return value.toString() == ["object Arguments"]
     },
     isArray:function(value){
         return  value instanceof Array
     },
     isBoolean:function(value){
         if(value == null){
             return false
         }
         return value.__proto__.constructor == Boolean
     },
     isDate:function(value){
         return value instanceof Date
     },
     isElement:function(value){
         if(value == null){
             return false
         }
         return value.__proto__.constructor == HTMLBodyElement
     },
     isError:function(value){
         return value.__proto__.constructor == Error
     },
     isLength:function(value){
         if(typeof value == "number" && value <= Number.MAX_VALUE && value >= 2){
             return true
         }
         return false
     },
     isInteger:function(value){
         if( Math.ceil(value) == value && typeof value === "number" && Number.isNaN(value) == false){
             return true
         }
         return false
     },
     isMatch:function(object , source){
         if(typeof object  !== "Object"){
             return false
         }
         for(var i in  source){
             return source[i] == object[i]
         }
     },
     isNaN:function(value){
         if( toString(value) == "[object Undefined]" &&  value instanceof Number){
             return true
         }
         return false
     },
     isNil:function(value){
         if(typeof value == "undefined" || value == null){
             return true
         }
         return false
     },
     isNull:function(value){
         return value === null
     },
     isNumber:function(value){
         return typeof value == "number"
     },
     isObject:function(value){
        return value instanceof Object
     },
     isRegExp:function(value){
         return value.__proto__.constructor == RegExp
     },
     isString:function(value){
         return typeof value == "string"
     },
     isUnderfined:function(value){
         return typeof value == "undefined"
     },
     It:function(value , other){
         return value < other
     },
     Ite:function(value , other){
         return value <= other
     },
     toArray:function(value){
         var arr = []
         for(var i  in value ){
             arr.push(value[i])
         }
         return arr
     },
     toFinite:function(value){
         if(value == Infinity){
             return Number.MAX_VALUE
         }
         if(value == -Infinity){
             return Number.MIN_VALUE
         }
         return Number(value)
     },
     toInteger:function(value){
         if(value == Infinity){
             return Number.MAX_VALUE
         }
         if(value == -Infinity){
             return Number.MIN_VALUE
         }
         return Math.floor(Number(value))
     },
     toNumber:function(value){
         return Number(value)
     },
     add:function(augend , addend ){
         return augend + addend
     },
     ceil:function(number , predicate = 0){
            number = number*10**predicate
            var num = Math.floor(number)
            if(number - num > 0){
                return num*10**-predicate+1*10**-predicate
            }else{
                return num*10**-predicate
            }
     },
     divide:function(dividend , divisor){
         return dividend / divisor
     },
     floor:function(number , precision = 0){
         number = number*10**precision
         var num = Math.ceil(number)
         if(num - number > 0){
             return (num-1)*10**-precision
         }else{
             return num*10**-precision
         }
     },
     max:function(array){
         if(array.length == 0){
             return undefined
         }
         var num = array[0]; 
         for(let i of array){
             if(num < i ){
                 num = i
             }
         }
         return num
     },
     mean:function(array){
         var add = 0
         var len = array.length ;
         for(var i of array){
             add+=i
         }
         return add/len
     },
     min:function(array){
         if(array.length == 0){
             return undefined
         }
         var num = array[0]; 
         for(let i of array){
             if(num > i ){
                 num = i
             }
         }
         return num
     },
     multiply:function(multiplier, multiplicand){
         return multiplier*multiplicand
     },
     round:function(number, precision = 0){
         number = number*10**precision
         var num = Math.floor(number)
         if( number - num >= 0.5){
             return num*10**-precision+1*10**-precision
         }else{
             return num*10**-precision
         }
     },
     subtract:function(minuend, subtrahend){
         return minuend-subtrahend
     },
     sum:function(array){
         var num = 0
         for(var i of array){
             num+=i
         }
         return num
     },
     clamp:function(number, lower , upper){
         if(number < lower){
             return number - lower
         }else if(number > upper){
             return number -upper
         }else{
             return 0
         }
     },
     inRange:function (number, start = 0, end){
         var num = 0 ;
         if(start > end){
             num = start
             start = end ;
             end = num
         } 
         return number >= start && number <= end
     },
     // 字符串
}