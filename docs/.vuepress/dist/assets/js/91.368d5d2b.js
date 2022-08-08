(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{472:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("消息队列的发送方式一般有三种，同步发送、异步发送、无需要等待响应。下面详细列举了不同发送方式的主要特点及应用场景。\n")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("ul",[s("li",[s("strong",[t._v("SYNC")]),t._v("："),s("strong",[t._v("同步发送")]),t._v("，重要通知邮件、报名短信通知、营销短信系统等")]),t._v(" "),s("li",[s("strong",[t._v("ASYNC")]),t._v("："),s("strong",[t._v("异步发送")]),t._v("，对RT时间敏感，可以支持更高的并发，回调成功触发相对应的业务，比如注册成功后通知积分系统发放优惠券")]),t._v(" "),s("li",[s("strong",[t._v("ONEWAY")]),t._v("："),s("strong",[t._v("无需要等待响应")]),t._v("，主要是日志收集，适用于某些耗时非常短，但对可靠性要求并不高的场景, 也就是LogServer, 只负责发送消息，不等待"),s("a",{attrs:{href:"https://www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E5%99%A8&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器"),s("OutboundLink")],1),t._v("回应且没有回调函数触发，即只发送请求不等待应答")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("发送方式")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("发送 TPS")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("发送结果反馈")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可靠性")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("同步发送")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("快")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不丢失")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("异步发送")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("快")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不丢失")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("单向发送")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最快")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可能丢失")])])])]),t._v(" "),s("h3",{attrs:{id:"发送oneway消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送oneway消息"}},[t._v("#")]),t._v(" 发送OneWay消息")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/async"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendOnWayMsg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MQBrokerException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemotingException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MQClientException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JmsConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TOPIC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello rocketmq = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    payProducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendOneway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);