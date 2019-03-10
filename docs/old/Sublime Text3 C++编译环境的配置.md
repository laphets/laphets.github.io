---
title: Sublime Text3 C++编译环境的配置
date: 2016-04-11 21:18:35
tags: C++
categories: 理性
---
## 前言
sublime text 3提供了构建功能，它的构建系统（Build systems）可以运行一段外部命令，还可以捕获输出并显示。
要在sublime text 3中实现c或c++代码的编译和运行，在本质上说也是调用外部的命令，windows中也可以理解为执行一段cmd命令。
## 配置环境变量
这个较为简单，环境变量里加上MinGW64的路径即可。
配置完后在cmd输入以下命令
```
g++ -v
```
如有以下信息出现则配置成功
```
Using built-in specs.
COLLECT_GCC=g++
COLLECT_LTO_WRAPPER=C:/Program\ Files\ (x86)/Dev-Cpp/MinGW64/bin/../libexec/gcc/x86_64-w64-mingw32/4.9.2/lto-wrapper.exe
Target: x86_64-w64-mingw32
Configured with: ../../../src/gcc-4.9.2/configure --build=x86_64-w64-mingw32 --enable-targets=all --enable-languages=ada,c,c++,fortran,lto,objc,obj-c++ --enable-libgomp --enable-lto --enable-graphite --enable-cxx-flags=-DWINPTHREAD_STATIC --disable-build-with-cxx --disable-build-poststage1-with-cxx --enable-libstdcxx-debug --enable-threads=posix --enable-version-specific-runtime-libs --enable-fully-dynamic-string --enable-libstdcxx-threads --enable-libstdcxx-time --with-gnu-ld --disable-werror --disable-nls --disable-win32-registry --prefix=/mingw64tdm --with-local-prefix=/mingw64tdm --with-pkgversion=tdm64-1 --with-bugurl=http://tdm-gcc.tdragon.net/bugs
Thread model: posix
gcc version 4.9.2 (tdm64-1)
```
## Sublime配置编译系统
以管理员方式打开Sublime，找到tool –> Build System –> New Build System，输入以下代码并保存：
```
{
	"encoding": "utf-8",
	"working_dir": "$file_path",
	"shell_cmd": "g++ -Wall -std=c++11 \"$file_name\" -o \"$file_base_name\"",
	"file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
	"selector": "source.c++",
 
	"variants": 
	[
		{	
		"name": "Run in sublime",
        	"shell_cmd": "g++ -Wall -std=c++11 \"$file_name\" -o \"$file_base_name\" && cmd /c \"${file_path}/${file_base_name}\""
		},
		{	
		"name": "CMD Run",
        	"shell_cmd": "g++ -Wall -std=c++11 \"$file\" -o \"$file_base_name\" && start cmd /c \"\"${file_path}/${file_base_name}\" & pause\""
		}
	]
}
```
## 编译运行
Ctrl+B 选择CMD run即可