---
title: HackThis Solutions
date: 2017-01-07 21:58:45
tags: 
- Hack
categories: 理性
---
This is my solution for HackThis. I have done 14% of all the problems and really learnt a lot.And I’m eager to write this article to record some useful ways of hacking.
## Main Level
### Main Level 1
Just see the source code,and you will find everything.
### Main Level 2
It’s also easy,the answer are also existing in the source code.( under your nose!?...)
### Main Level 3
Just make a serch on ‘pass’…
### Main Level 4
Do you see the file called “ssap.xml”?
### Main Level 5
What a cute cat….Just be in the Script…
### Main Level 6
Use element view and add some codes.
### Main Level 7
A txt file? Just robot.txt-(The Robots Exclusion Protocol) Web site owners use it to give instructions about their site to web robots.Just visit www.xxx.com/robot.txt
### Main Level 8
Also a file.However you should try to find it out…

## Basic+ Level
### Basic+ Level 1
An error file?Oh,no ,just decode the file and  you will see the file header.Just search it and use file association to match header with file type .Also just visiting http://checkfiletype.com is available.
….

## Intermediate Level

### Intermediate Level 1
GET method? Just add some in the URL.
### Intermediate Level 2
POST methord?Write a HTML as this:
```
<form method="post" action="https://www.hackthis.co.uk/levels/intermediate/2">
<input type="text" name="password" value="flubergump">
<input type="submit" value="submit">
</form>
```
Then  all things will be OK.
### Intermediate Level 3
Use TempterData to change some value…
### Intermediate Level 4
It’s what I struggled on for a long time. First you must know something about PHP and XSS,then you will find that filter is a thing for preventing XSS hacking.Then after inputing many codes ,one thing will be obvious:string like this”<script>”would be find and delete, the filter code simply removes all occurrences of <script> and </script> from the original string.So just insert’script’ to  segment the original string,like this:
```
<scr</script>ipt>alert('HackThis!!');</scr</script>ipt>
```
