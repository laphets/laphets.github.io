---
title: Java面向对象编程 
date: 2017-09-07 18:46:00
tages: Java
---

## 继承

指子类继承父类的方法与实例域

```java
class Son extends Parent {
  
}
```

## 继承的特性

1.子类拥有父类的非private方法

2.继承可以多重，但一般单重

3.子类可以对父类进行拓展

使用implements进行继承

## 继承多个接口

```java
public interface A {
  
}
public interface B {
  
}
public interface C implements A,B {
  
}
```

## super与this

Super:实现对父类成员的访问

This:实现对自身变量的访问

```java
class SuperClass {
  int a=1;
}
class SubClass extends SuperClass {
  int a=2;
  System.out.printf("%d%d",super.a,this,a);
}
```

## 修饰符

修饰符用以定义类、方法或者变量

default:默认修饰符声明变量或者方法，方法的访问权限为public。

private:同一类内可见，变量和方法只能够被所属类所访问,类的方法不能够被子孙类所访问。

注：类和接口不能够声明为private，声明为private的变量只能够通过public的getter方法访问

public:所有类可见，其方法，接口，构造方法能够被任何其他类所访问

protected:修饰方法或者变量，子类能够访问（对其子类可见）

## final（非访问修饰符）

Final声明类为不可继承，或者用于修饰方法，该方法不能够被override

```java
final class {
  
}
```

```java
public/private/default/protected final void method() {
  
}
```

当实例变量被声明为final时，不可以被修改，只能赋初始值

## static（非访问修饰符）

简单来说，就是方便在没有创建对象的情况下对方法或者变量进行调用。只要类被加载，就能够通过类名进行访问。

静态方法特性：静态方法中不能够访问类的非静态成员或者变量，而其他的非静态方法能够访问到静态变量或者方法

```java
public class A {
  public static void print() {
  }
}
//Then we can use print method without defining an object
A.print();
```

static变量：静态变量为所有对象所共享，在内存中只占有一个副本。

