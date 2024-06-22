const arr = [ 5,1,3,2,6 ]

//  Double - [ 10,2,6,4,12 ]
//  Triple - [ 15,3,9,6,18 ]
//  Binary - [ "101","1","11","10","110" ]


const double = arr.map((x) => x * 2)

const binary = arr.map((x) => x.toString(2))

const isOdd = arr.filter((x) => x % 2)

const isEven = arr.filter((x) => x % 2 === 0)

const greaterThan4 = arr.filter((x) => x > 4)


// sum or max      ...REDUCE

const findSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++)
  {
    sum = sum + arr[ i ]
  }
  return sum
}
console.log(findSum(arr))


const findSum2 = arr.reduce((acc,cur) => {
  acc = acc + cur
  return acc
},0)
console.log(findSum2)


const max = (arr) => {
  let max = 0
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[ i ] > max)
    {
      max = arr[ i ]
    }
  }
  return max
}
console.log(max)


const max2 = arr.reduce((max,cur) => {
  if (cur > max)
  {
    max = cur
  }
  return max
},0)
console.log(max2)


const userData = [
  { fname: "Modi",lname: "Narendra",age: 73 },
  { fname: "Doland",lname: "Trump",age: 73 },
  { fname: "Biden",lname: "Joe",age: 83 },
  { fname: "Putin",lname: "Vladimir",age: 69 },
  { fname: "Melony",lname: "Modi",age: 29 },
]

// list of full names

const userList = userData.map((x) => `${ x.fname } ${ x.lname }`)
console.log(userList);

const ageList = userData.reduce((acc,cur) => {
  if (acc[ cur.age ])
  {
    acc[ cur.age ] = ++acc[ cur.age ]
  }
  else     
  {
    acc[ cur.age ] = 1
  }
  return acc
},{})
console.log(ageList)


// const nameAgeLessThan30 = userData.filter((x) => x.age < 30).map((x) => x.fname)

const nameAgeLessThan30 = userData.reduce((acc,cur) => {
  if (cur.age < 30)
  {
    acc.push(cur.fname)
  }
  return acc
},[])
console.log(nameAgeLessThan30)
