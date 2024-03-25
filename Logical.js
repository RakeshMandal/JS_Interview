// 1.========== reverse word on same position ============
/*
let word = 'Hello Ashwani Kumar';
let wordArr = word.split(' ')
    let resu = wordArr.map((item)=>{
        let newword = item.split('')
        let reversWord = ''
        for(let i=newword.length-1;i>=0;i--){
            reversWord += newword[i]
        }
        return reversWord
    });
console.log(resu)
*/

// 2.===
/*
var list = [
    {name: 'Apple', count: 2},
    {name: 'Orange', count: 1},
    {name: 'Orange', count: 3},
    {name: 'Apple', count: 1}];

function countSameFruits(input){
    let totalCount ={}
    for(let item of input){
        if(totalCount.hasOwnProperty(item.name)){
            totalCount[item.name] += item.count
        }
        else{
            totalCount[item.name] = item.count
        }
    }
    return totalCount
}
const result = countSameFruits(list)
console.log(result)
*/

// 3. given scnerio we need to write the function for that

const input1 = [
    {
      cat: "A",
      prod: "prodA",
    },
    {
      cat: "A",
      prod: "prodB",
    },
    {
      cat: "B",
      prod: "prodC",
    },
    {
      cat: "B",
      prod: "prodD",
    },
];

function groupByCategory(input) {
    const result = [];

    input.forEach(item => {
        const existingItem = result.find(group => group.cat === item.cat);
        if (existingItem) {
            existingItem.products.push(item.prod);
        } else {
            result.push({ cat: item.cat, products: [item.prod] });
        }
    });

    return result;
}

console.log(groupByCategory(input1));


