function forEach(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}
function map(arr,callback){
    let result=[]
    for(let i=0;i<arr.length;i++){
        result.push(callback(ar[i],i,arr))
    }
    return result;
}
function find(arr,callback) {
    for (let i=0;i<arr.length; i++) {
        if (callback(arr[i],i,arr)) {
            return arr[i];
        }
    }
    return undefined;
}
function includes(arr,callback) {
    for (let i=0;i<arr.length;i++) {
        if (callback(arr[i],i,arr)) {
            return true;
        }
    }
    return false; 
}
function includes(arr,searchString) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i]===searchString) return true; 
    }
    return false; 
}
function reduce(arr, callback, initialValue){
    
    for(let i=0;i<arr.lenght;i++){
        callback(initialValue,arr[i],i,arr)
    }
}
//set time out tgian chờ
//set interval lặp,xem event loop
// clear timeout/interval hủy
//arr.filter