var data = require('./data.json')
var results = []
var test = 'Yêu anh lắm đấy nhé, bao nhiêu tình yêu em đều trao cho anh. Nhưng sao anh lại ghét, em hận những ai bạc tình như vậy'
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
    if (test.toLocaleLowerCase().indexOf(i) != -1) {
        results.push(data[i])
    }
}
if (results != []) {
    count(results)
    console.log(results)
    let sortcount = Object.values(countelement).sort(function (a, b) { return a - b })
    var maxInNumbers = Math.max.apply(Math, sortcount);
    for (var i in countelement) {
        if (countelement[i] == maxInNumbers) {
            console.log(i + " : " + String(Math.round((maxInNumbers / results.length) * 100)) + "%")
        }
    }

}
