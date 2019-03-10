---
title: PHP Object-oriented Programming

date: 2017-10-02 16:02:00

tags: PHP

---

## 面向对象内容

- 类-定义了抽象特点，包括数据形式与操作
- 对象-类的实例
- 成员变量-定义在类内部的变量，可以通过成员函数访问，在类被实例化为对象后，可以认为是这个对象的属性
- 成员函数-定义于类的内部，可以访问对象的数据
- 继承-子类共享父类数据结构和方法
- 父类-一个类被其他类继承(基类,超类)
- 子类-一个类继承其他类(派生类)
- 多态-相同函数或方法可以作用于多种类型的变量并获得不同的结果，不同的对象收到同一消息可以产生不同的结果
- 重载-函数或方法同名，但参数列表不同，这些函数或者方法之间互相称为重载函数或者方法
- 构造函数-在创建对象时初始化对象
- 析构函数-destructor，当对象结束生命周期时，系统自动执行析构函数清理善后

## 类的定义

```php
<?php
class phpClass
{
    var $var1;
    var $var2 = "constant string";
    
    function myFunction() {
        
    }
}
?>
```

### 成员函数

```php
<?php
class phpClass
{
    var $var1;
    var $var2 = "constant string";

    function myFunction() {

    }

    /**
     * @return mixed
     */
    public function getVar1()
    {
        return $this->var1;
    }

    /**
     * @param mixed $var1
     */
    public function setVar1($var1)
    {
        $this->var1 = $var1;
    }

    /**
     * @return string
     */
    public function getVar2(): string
    {
        return $this->var2;
    }

    /**
     * @param string $var2
     */
    public function setVar2(string $var2)
    {
        $this->var2 = $var2;
    }
    
    
}
?>
```

$this代表自身的对象

## 创建对象

使用new创建新的对象,使用->访问成员变量和对象内部的方法

建议使用getter和setter方法

```php
<?php
class User
{
    var $userName;
    var $passWord;

    /**
     * @return mixed
     */
    public function getUserName()
    {
        return $this->userName;
    }

    /**
     * @param mixed $userName
     */
    public function setUserName($userName)
    {
        $this->userName = $userName;
    }

    /**
     * @return mixed
     */
    public function getPassWord()
    {
        return $this->passWord;
    }

    /**
     * @param mixed $passWord
     */
    public function setPassWord($passWord)
    {
        $this->passWord = $passWord;
    }

}
$laphets=new User();
$laphets->setUserName("laphets");
$laphets->setPassWord("123456");
echo $laphets->getUserName();
echo $laphets->getPassWord();
?>
```

## 构造函数

主要用于在创建对象时初始化对象；PHP5允许开发者在类中定义一个方法作为构造函数

```php
function __construct () {
  
}
```

```php
function __construct($par1,$par2)
{
	$this->userName=$par1;
	$this->passWord=$par2;
}

$laphets=new User("laphets","123456");

echo $laphets->getUserName();
echo $laphets->getPassWord();
```

其中"laphets"对应的是par1,“123456”对应的是par2

## 析构函数

```php
function __destruct() {
  
}
```

## 继承

PHP使用extends继承一个类,但不支持多继承

```php
class Child extends Parent {
  
}
```

### 方法重写

如果对父类继承的方法不满意，可以在子类中对方法进行重写，即考虑覆盖(override)

## 访问控制

PHP可以对属性和方法实现访问控制，通过在前添加关键字来实现

- public:共有的类成员可以在任何地方被访问
- protected:受保护的类成员可以被自身或者子类父类访问
- private:只能被其定义的类访问

### 属性的访问控制

类属性必须定义为公有,受保护,私有之一。如果直接var定义，则被视为公有

**重要**：类中的属性前面要加上*var* ；类之外的变量不*需要*加*var* 

```php
<?php
/**
 * Define MyClass
 */
class MyClass
{
    public $public = 'Public';
    protected $protected = 'Protected';
    private $private = 'Private';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj = new MyClass();
echo $obj->public; // 这行能被正常执行
echo $obj->protected; // 这行会产生一个致命错误
echo $obj->private; // 这行也会产生一个致命错误
$obj->printHello(); // 输出 Public、Protected 和 Private


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // 可以对 public 和 protected 进行重定义，但 private 而不能
    protected $protected = 'Protected2';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj2 = new MyClass2();
echo $obj2->public; // 这行能被正常执行
echo $obj2->private; // 未定义 private
echo $obj2->protected; // 这行会产生一个致命错误
$obj2->printHello(); // 输出 Public、Protected2 和 Undefined

?>
```

### 方法的访问控制

类中的方法可以被定义为公有,私有,或者被保护。如果没有设置，则默认为public

```php
<?php
/**
 * Define MyClass
 */
class MyClass
{
    // 声明一个公有的构造函数
    public function __construct() { }

    // 声明一个公有的方法
    public function MyPublic() { }

    // 声明一个受保护的方法
    protected function MyProtected() { }

    // 声明一个私有的方法
    private function MyPrivate() { }

    // 此方法为公有
    function Foo()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate();
    }
}

$myclass = new MyClass;
$myclass->MyPublic(); // 这行能被正常执行
$myclass->MyProtected(); // 这行会产生一个致命错误
$myclass->MyPrivate(); // 这行会产生一个致命错误
$myclass->Foo(); // 公有，受保护，私有都可以执行


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // 此方法为公有
    function Foo2()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate(); // 这行会产生一个致命错误
    }
}

$myclass2 = new MyClass2;
$myclass2->MyPublic(); // 这行能被正常执行
$myclass2->Foo2(); // 公有的和受保护的都可执行，但私有的不行

class Bar 
{
    public function test() {
        $this->testPrivate();
        $this->testPublic();
    }

    public function testPublic() {
        echo "Bar::testPublic\n";
    }
    
    private function testPrivate() {
        echo "Bar::testPrivate\n";
    }
}

class Foo extends Bar 
{
    public function testPublic() {
        echo "Foo::testPublic\n";
    }
    
    private function testPrivate() {
        echo "Foo::testPrivate\n";
    }
}

$myFoo = new foo();
$myFoo->test(); // Bar::testPrivate 
                // Foo::testPublic
?>
```

## 接口

接口(interface)可以指定某个类必须实现哪些方法，而不必定义这些方法的具体内容。

接口是通过 **interface** 关键字来定义的，就像定义一个标准的类一样，但其中定义所有的方法都是空的。

接口中定义的所有方法都必须是**公有**，这是接口的特性。

```php
interface iTemplate
{
  public function setVariable($name,$val);
  public function getHtml($template);
}
```

实现接口，使用implements操作符，类中实现借口所定义的所有方法；类可以实现多个接口，用逗号来分隔多个接口的名称

```php
interface iTemplate
{
    public function add($x,$y);
    public function sub($x,$y);
}
class template implements iTemplate
{
    var $sub;
    function add($x, $y)
    {
        $sum=$x+$y;
        return $sum;
        // TODO: Implement add() method.
    }
    function sub($x, $y)
    {
        $sub=$x-$y;
        return $sub;
        // TODO: Implement sub() method.
    }
}
```

## 常量

可以把**类**中保持不变的量定义为常量，定义和使用的时候不需要用$

常量的值必须是一个定值，不能是变量，类属性，数学运算的结果或函数调用

来看一个实例

```php
<?php
class MyClass
{
    const constant = '常量值';

    function showConstant() {
        echo  self::constant . PHP_EOL;
    }
}

echo MyClass::constant . PHP_EOL;

$classname = "MyClass";
echo $classname::constant . PHP_EOL; // 自 5.3.0 起

$class = new MyClass();
$class->showConstant();

echo $class::constant . PHP_EOL; // 自 PHP 5.3.0 起
?>
```

首先第一个用法，直接在成员函数内部使用self::constant访问常量；第二个用法，在未创建对象的情况下直接通过类来访问到常量（或者这样访问MyClass::constant）；第三个，通过成员函数的getter方法进行访问；第四个，直接通过对象进行访问（$class::constant）

## 抽象类

任何一个类，如果其中有一个方法是抽象的，那么这个类就是抽象类

抽象类不能够被实例化

抽象方法只是声明了调用方式（参数），不定义具体实现

继承一个抽象类时，子类必须定义父类的所有抽象方法，访问控制必须和父类一样活着更加宽松

来看一个栗子

```php
<?php
abstract class AbstractClass
{
    // 强制要求子类定义这些方法
    abstract protected function getValue();
    abstract protected function prefixValue($prefix);

    // 普通方法（非抽象方法）
    public function printOut() {
        print $this->getValue() . PHP_EOL;
    }
}

class ConcreteClass1 extends AbstractClass
{
    protected function getValue() {
        return "ConcreteClass1";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass1";
    }
}

class ConcreteClass2 extends AbstractClass
{
    public function getValue() {
        return "ConcreteClass2";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass2";
    }
}

$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixValue('FOO_') . PHP_EOL;

$class2 = new ConcreteClass2;
$class2->printOut();
echo $class2->prefixValue('FOO_') . PHP_EOL;
?>
```

首先抽象类的定义方法

```php
abstract class Abstractclass {
  abstract protected function AF() {
    ...
  }
}
```

可以理解为子类必须定义这个方法

但是方法使用的是子类所定义的

## Static

声明类属性或者方法为static，就可以不实例化类而直接访问

**静态属性不能通过一个类已实例化的对象来访问（但静态方法可以）**？

由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用。

静态属性不可以由对象通过 -> 操作符来访问。

来看一个栗子

```php
<?php
class Foo {
    public static $my_static = 'foo';

    public static function staticValue() {
        return self::$my_static;
    }
}

print Foo::$my_static . PHP_EOL;
echo Foo::staticValue() . PHP_EOL;
$foo = new Foo();

print $foo->staticValue() . PHP_EOL;
?>
```

直接使用::来访问，类成员或者方法

## Final

如果父类的方法被声明为final，则子类无法覆盖该方法；同样，如果一个类被声明为final，则不能够被继承

来看一个栗子

```php
<?php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called" . PHP_EOL;
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called"  . PHP_EOL;
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called"  . PHP_EOL;
   }
}
// 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()
?>
```

## 调用父类的构造方法

PHP 不会在子类的构造方法中自动的调用父类的构造方法。要执行父类的构造方法，需要在子类的构造方法中调用 **parent::__construct()** 。

```php
class subClass extends BaseClass {
  function __construct() {
    parent::__construct();
  }
}
```

来看这样的栗子

```php
<?php
class BaseClass {
    function __construct() {
        print "BaseClass 类中构造方法" . PHP_EOL;
    }
}
class SubClass extends BaseClass {
    function __construct() {
        parent::__construct();  // 子类构造方法不能自动调用父类的构造方法
        print "SubClass 类中构造方法" . PHP_EOL;
    }
}
class OtherSubClass extends BaseClass {
    // 继承 BaseClass 的构造方法
    function __construct() {
        
        print "SubClass 类中构造方法" . PHP_EOL;
    }
}

// 调用 BaseClass 构造方法
$obj = new BaseClass();

// 调用 BaseClass、SubClass 构造方法
$obj = new SubClass();

// 调用 BaseClass 构造方法
$obj = new OtherSubClass();
?>
```

我们可以这样理解，如果子类不定义一个构造方法，那么他会默认继承父类的一个构造方法；如果子类定义了自己的构造方法，那么他便不会继承父类的构造方法，除非你在construct()函数中使用了parent::__construct();