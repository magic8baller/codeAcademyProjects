const starCount = () => {
  let i = 5;
  console.log(i);
  for (i = 0; i < 12; i++) {
    console.log(i);
  }
}

starCount();
console.log(i);

//output WITHOUT outside console log:
5
0
1
2
3
4
5
6
7
8
9
10
11

//output WITH outside console log:
5
0
1
2
3
4
5
6
7
8
9
10
11

ReferenceError
