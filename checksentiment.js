var data = require('./data.json')
const sentences_bot = require('./data_test')
const sentence_data = sentences_bot.bot()
let big_data={}
let loss_data={}
for (var sentence in sentence_data) {
    var results = []
    var test = sentence
    test = test.replace(/[.*+?!${},]/g, " ")
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
               big_data[sentence]=i
            }
        }
    
    }else{
        big_data[sentence]='Không xác định'
    }
}
if(big_data != {} && big_data != null){
    let accuracy = 1
    for(var test_sentence in big_data){
        if(big_data[test_sentence]==sentence_data[test_sentence]){
            accuracy += 1
        }else{
            loss_data[test_sentence]=big_data[test_sentence]
        }
    }
    console.log('Dự đoán: ',big_data)
    console.log('Dự đoán sai: ',loss_data)
    console.log('Độ chính xác mô hình: ',accuracy/Object.keys(sentence_data).length)
}