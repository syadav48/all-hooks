
['ba091', 'iu', 'JA09', 'NP', '91IU']

function reverseStr(arr){
    return arr.map((e) => e.split('').reverse().join(''))
}
console.log(reverseStr(["190ab","ui", "90AJ", "PN", "UI19"]))