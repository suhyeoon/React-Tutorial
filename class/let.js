// let: 선언 후 변할 수 있는 값 {JavaScript의 var와 유사함.}
function foo(){
    let a = 'hello';
    if(true){
        let a = 'bye';
        console.log(a); // bye
    }
    console.log(a); // hello
}