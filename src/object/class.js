/**
 * 类在语法上是静态的描述，在执行上类继承仍是基于原型
 * 函数声明在语法解析期处理，所有的声明早于代码执行
 * 语句是按照顺序执行，而函数声明是没有顺序的
 * JS 类继承，是通过 类声明 表达继承关系，类声明，通过声明语法，将构造器和继承关系的声明，全部提到语法解析阶段
 * 由此，JS 的类，不论是构造方法，还是继承关系，都不在有执行顺序的限制
 * 意味着，类是静态的声明，类的继承关系也是静态的，是在语法阶段就决定的
 * 由此，类声明中的方法或者getter/setter 只是对象声明，而不是函数，因此不能直接引用它们自己的名字
 */

// 原型继承
function Foo() {}
function Bar() {}

Bar.prototype = new Foo();
Bar.prototype.constructor = Bar;

Foo.prototype.name = "Mike";

const obj = new Bar();
console.log(obj.name, "name");

// JS 函数声明是在语法解析期处理，所有声明早于代码执行；
MyObjectEx.prototype = new MyObject();
MyObjectEx.prototype.constructor = MyObjectEx;

function MyObjectEx() {}
function MyObject() {
  this.age = "11";
  console.log(typeof MyObject, "MyObject");
}

const newObj = new MyObjectEx();
console.log(newObj.age, "MyObject");

class Test {
  constructor() {
    console.log(typeof constructor, "constructor");
  }

  foo() {
    console.log(typeof foo, "foo"); // 报 undefined
  }
}
const test = new Test();
test.foo();
