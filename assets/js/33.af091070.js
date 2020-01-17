(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{406:function(e,t,r){"use strict";r.r(t);var a=r(1),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("The bugs I have submitted patch for")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://phabricator.services.mozilla.com/D21664",target:"_blank",rel:"noopener noreferrer"}},[e._v("D21664: Bug 1421342 - Fix a bug for adding no-chache to resent request headers. r=honza!"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://phabricator.services.mozilla.com/D21838",target:"_blank",rel:"noopener noreferrer"}},[e._v("D21838: Bug 1443089 - Better UI/UX for empty response panel. r=honza."),r("OutboundLink")],1),e._v("  ("),r("em",[e._v("landed")]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://phabricator.services.mozilla.com/D21955",target:"_blank",rel:"noopener noreferrer"}},[e._v("D21955: Bug 1446018 - Set HAR log version to 1.2. r=honza."),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("landed")]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://phabricator.services.mozilla.com/D21971",target:"_blank",rel:"noopener noreferrer"}},[e._v("D21971: Bug 1457379 - Fix webSockets show only under 'other' filter. r=honza."),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("landed")]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://phabricator.services.mozilla.com/D23322",target:"_blank",rel:"noopener noreferrer"}},[e._v("D23322: Bug 1457379 - [Adding Tests] Fix webSockets show only under 'other' filter. r=honza."),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("landed")]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://phabricator.services.mozilla.com/D23770",target:"_blank",rel:"noopener noreferrer"}},[e._v("D23770: Bug 1442249 - Add Copy context menu to PropertiesView. r=honza"),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("landed")]),e._v(")")])]),e._v(" "),r("h2",{attrs:{id:"bug-1442249"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-1442249","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug 1442249")]),e._v(" "),r("h3",{attrs:{id:"what-i-do"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-i-do","aria-hidden":"true"}},[e._v("#")]),e._v(" What I do")]),e._v(" "),r("p",[e._v("Find inner logic from nested components, fulfill a right-click context menu")]),e._v(" "),r("h3",{attrs:{id:"how-do-i-solve-the-problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-solve-the-problem","aria-hidden":"true"}},[e._v("#")]),e._v(" How do I solve the problem")]),e._v(" "),r("p",[e._v("Generally, learn by imitate. Just learn how to fulfill context menu from existing example, and check how existing code do copy to clipboard 😃\nBesides, the key point here is to find the data that should be copied. At first, I try to use dfs(deep first search) to find the data by path, however, it's a high risk job, and may fail in some ways. With an glance of the code of "),r("code",[e._v("treeview")]),e._v(", I accidently find that it's a good idea to utilze the existing member object, which contains all the data needed. In the end, all the problem solved.")]),e._v(" "),r("h3",{attrs:{id:"what-i-learnt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-i-learnt","aria-hidden":"true"}},[e._v("#")]),e._v(" What I learnt")]),e._v(" "),r("p",[e._v('It\'s very to utlize the exisiting code for a huge codebase project, since many things which you want to do is not "new"')]),e._v(" "),r("h2",{attrs:{id:"bug-1457379"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-1457379","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug 1457379")]),e._v(" "),r("h3",{attrs:{id:"what-i-do-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-i-do-2","aria-hidden":"true"}},[e._v("#")]),e._v(" What I do")]),e._v(" "),r("p",[e._v("First find reason why websocket not shown in the request list, then using existing data to give a robust solution for websocket checking.")]),e._v(" "),r("h3",{attrs:{id:"how-do-i-implement-the-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-implement-the-tests","aria-hidden":"true"}},[e._v("#")]),e._v(" How do I implement the tests")]),e._v(" "),r("p",[e._v("In fact, as what I have said to Honza before, using default http server("),r("code",[e._v("sjs")]),e._v(") to process websocket request doesn’t seem very good. A continuous solution is to utlize the websocket server while it relates to some Python script.\nBut temporarily http server is used for test.")])])},[],!1,null,null,null);t.default=o.exports}}]);