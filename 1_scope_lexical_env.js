function a(){
    var b = 10;
    console.log(b);    
    c();
    function c(){
        console.log(b);
    }
}
a();   //called a before assigned it so it will be undefined
// var b = 10;
// a();   //10
