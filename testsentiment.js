let data = require('./data.json')
let results = []
let test = 
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
test = test.replace(/[.*+?!${},]/g, " ")
console.log(test)
let split_test = test.split(" ")
let countelement = {}
function count(arraydata) {
    array_elements = arraydata

    array_elements.sort();

    let current = null;
    let cnt = 0;
    for (let i = 0; i < array_elements.length; i++) {
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
for (let i in data) {
    if(i.split(" ").length > 1){           
        if (test.toLocaleLowerCase().indexOf(i.toLocaleLowerCase()) != -1) {
            results.push(data[i])
        }
    }
    else{
        for(let word in split_test){
            if(i.toLocaleLowerCase() === split_test[word].toLocaleLowerCase()){
                results.push(data[i])
            }
        }
    }
}
if (results != [] && results.length != 0) {
    count(results)
    console.log(results)
    let sortcount = Object.values(countelement).sort(function (a, b) { return a - b })
    let maxInNumbers = Math.max.apply(Math, sortcount);
    for (let i in countelement) {
        if (countelement[i] == maxInNumbers) {
            console.log(i + " : " + String(Math.round((maxInNumbers / results.length) * 100)) + "%")
        }
    }

}else{
    console.log("Không xác định")
}
