
class MyHashMap {
    constructor() {
        this.data = []
    }
    
      
};

MyHashMap.prototype.put = function(key, value) {
    if(this.get(key)==-1){
       this.data[this.data.length]=[key,value]; 
    }else{
        this.update(key,value)
    }
    
};
MyHashMap.prototype.update=function(key,value){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i][0]===key){
            this.data[i][1]=value;
        }
    }
}
MyHashMap.prototype.get = function(key) {
    for(let i=0;i<this.data.length;i++){
        if(this.data[i][0]===key){
            return this.data[i][1]
        }
    }
    return -1;
};

MyHashMap.prototype.print=function(){
    console.log(this.data)
}
MyHashMap.prototype.remove = function(key) {
    for(let i=0;i<this.data.length;i++){
        if(this.data[i][0]===key){
            this.data=this.data.filter(item=>item[0]!==key)
        }
    }
};