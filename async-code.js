var maxTime = 1000;
var evenDoubler = function (v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2){
        setTimeout(function () {
            callback(new Error("ODD input"));
        },waitTime);
    } else {
        setTimeout(function () {
            callback(null,v*2,waitTime);
        },waitTime);
    }

}
var handleResults = function(err, results, time){
    if(err) {
        console.log("Error: " + err.message);
    }else{
        console.log("The reults are: " + results + " (" + time + " ms)");
    }
}

// evenDoubler(2, handleResults);
// evenDoubler(3, handleResults);
// evenDoubler(10, handleResults);

for (i=0;i<=10;i++){
    console.log("calling evenDoubler with " + i + " as an input")
    evenDoubler(i,handleResults)
}
console.log("-----------")