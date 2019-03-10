---
title: How to deploy Nginx and Hexo on Raspberry Pi3
date: 2016-10-03 22:52:37
tags: Linux
categories: 理性
---
This is my first article written in English,if there is any problem,please call me at my email,thank you for reading.

# Preface
I think you may ask me the question why do me chose to deploy Hexo on Raspberry Pi3 instaed of GitHub,Codding or VPS.The answer is very obvious:Firstly,you can visit my website in a higher speed since my server is located in Zhejiang,China instead of US or HongKong;Besides,the price for a VPS is too high for me to afford;In addtion,based on a Oray,I can run my Raspberry in a very low cost.

# How to deploy Nginx
Compare with Apache,Nginx has many advantages.First you can open a Linux terminal,and run the following commands:
```bash
sudo apt-get install nginx
```
Then you should start it.
```bash
sudo /etc/init.d/nginx start
```
Last,it's time to modified configuration file for Nginx.(You can use vi or nano,it all depends on you,but a sudo is must,or you will be rejected for permission denied.)
```bash
sudo vi /etc/nginx/sites-available/default
```

# Set up Hexo
Oh,It's very easy,…


**The time is too tight,I will finish it the next week…or later…**
