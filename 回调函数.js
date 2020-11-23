let x = function () {
    console.log('我是一个函数')

}
let y = function (callback) {
    console.log('我也是一个函数')
    callback()
}

let calculator = function (a, b, call) {
    call()
    console.log('我是主函数');


}
let calltype = function (a, b) {

    var sum = a + b
    console.log('我是回调函数');
}