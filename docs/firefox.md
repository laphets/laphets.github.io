---
title: Daily Log of Firefox Contribution
date: 2019-03-16 21:10:23
comments: true
tags: Programming
categories: Open Source
---

## Overview
The bugs I have submitted patch for
- [D21664: Bug 1421342 - Fix a bug for adding no-chache to resent request headers. r=honza!](https://phabricator.services.mozilla.com/D21664)
- [D21838: Bug 1443089 - Better UI/UX for empty response panel. r=honza.](https://phabricator.services.mozilla.com/D21838)  (*landed*)
- [D21955: Bug 1446018 - Set HAR log version to 1.2. r=honza.](https://phabricator.services.mozilla.com/D21955) (*landed*)
- [D21971: Bug 1457379 - Fix webSockets show only under 'other' filter. r=honza.](https://phabricator.services.mozilla.com/D21971) (*landed*)
- [D23322: Bug 1457379 - [Adding Tests] Fix webSockets show only under 'other' filter. r=honza.](https://phabricator.services.mozilla.com/D23322) (*landed*)
- [D23770: Bug 1442249 - Add Copy context menu to PropertiesView. r=honza](https://phabricator.services.mozilla.com/D23770) (*landed*)

## Bug 1442249
### What I do
Find inner logic from nested components, fulfill a right-click context menu
### How do I solve the problem
Generally, learn by imitate. Just learn how to fulfill context menu from existing example, and check how existing code do copy to clipboard :)
Besides, the key point here is to find the data that should be copied. At first, I try to use dfs(deep first search) to find the data by path, however, it's a high risk job, and may fail in some ways. With an glance of the code of `treeview`, I accidently find that it's a good idea to utilze the existing member object, which contains all the data needed. In the end, all the problem solved.
### What I learnt
It's very to utlize the exisiting code for a huge codebase project, since many things which you want to do is not "new"

## Bug 1457379
### What I do
First find reason why websocket not shown in the request list, then using existing data to give a robust solution for websocket checking.
### How do I implement the tests
In fact, as what I have said to Honza before, using default http server(`sjs`) to process websocket request doesn’t seem very good. A continuous solution is to utlize the websocket server while it relates to some Python script.
But temporarily http server is used for test. 