var data = require('./data.json')
var results = []
var test = 
'Khăn thương nhớ ai,'+
'Khăn rơi xuống đất.'+
'Khăn thương nhớ ai,'+
'Khăn vắt lên vai.'+
'Khăn thương nhớ ai,'+
'Khăn chùi nước mắt.'+
'Đèn thương nhớ ai,'+
'Mà đèn không tắt.'+
'Mắt thương nhớ ai,'+
'Mắt ngủ không yên.'+
'Đêm qua em những lo phiền,'+
'Lo vì một nỗi không yên một bề...'
let split_test = test.split(" ")
var countelement = {}
function count(arraydata) {
    array_elements = arraydata

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                countelement[current] = cnt
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        countelement[current] = cnt
    }

}
for (var i in data) {
    if(i.split(" ").length > 1){           
        if (test.toLocaleLowerCase().indexOf(i.toLocaleLowerCase()) != -1) {
            results.push(data[i])
        }
    }
    else{
        for(var word in split_test){
            if(i.toLocaleLowerCase() === split_test[word].toLocaleLowerCase()){
                results.push(data[i])
            }
        }
    }
}
if (results != [] && results.length != 0) {
    count(results)
    let sortcount = Object.values(countelement).sort(function (a, b) { return a - b })
    var maxInNumbers = Math.max.apply(Math, sortcount);
    for (var i in countelement) {
        if (countelement[i] == maxInNumbers) {
            console.log(i + " : " + String(Math.round((maxInNumbers / results.length) * 100)) + "%")
        }
    }

}else{
    console.log("Không xác định")
}
