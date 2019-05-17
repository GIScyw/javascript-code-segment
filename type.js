// 该类型判断函数可以判断六中基本数据类型以及Boolean Number String Function Array Date RegExp Object Error，
// 其他类型因为遇到类型判断的情况较少所以都会返回object,不在进行详细的判断
//  比如ES6新增的Symbol，Map，Set等类型
var classtype = {};


"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item) {
    classtype["[object " + item + "]"] = item.toLowerCase();
})


function type(obj) {
    // 解决IE6中null和undefined会被Object.prototype.toString识别成[object Object]
    if (obj == null) {
        return obj + "";
    }

    //如果是typeof后类型为object下的细分类型(Array,Function,Date,RegExp,Error)或者是Object类型，则要利用Object.prototype.toString
    //由于ES6新增的Symbol，Map，Set等类型不在classtype列表中，所以使用type函数，返回的结果会是object
    return typeof obj === "object" || typeof obj === "function" ?
        classtype[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

