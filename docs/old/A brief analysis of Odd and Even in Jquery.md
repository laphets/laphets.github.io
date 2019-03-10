---
title: A brief analysis of Odd and Even in Jquery
date: 2017-08-03 18:34:26
tags: JavaScript,jQuery

categories: 理性
---

## :odd&:even

This is hard to understand for many jQuery learners,especially for me lol.I got the description from the jQuery's docs,and we can find some features between odd and even.

## What's odd

Description : Selects odd elements ,zero-indexed.

## What's even

Description: Selects even elements ,zero-indexed.

## Explanation 

Simply,jQuery is based on 0-based indexing,which seems counter-intuitively.However,you should know :even selects the first element(But the index is even) ,third element  and so on within the matched set,and odd select the second element, forth election and so on within the matched set.