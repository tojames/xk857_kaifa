(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{522:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("前提条件，先准备一张千万条数据的表")]),t._v(" "),s("h3",{attrs:{id:"_1-通过主键索引加速分页查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过主键索引加速分页查询"}},[t._v("#")]),t._v(" 1.通过主键索引加速分页查询")]),t._v(" "),s("p",[t._v("观察下列sql语句执行时间发现，通过主键查询速度呈几百倍递增，当然前提是我们的主键是自增的。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 3.86s")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 0.01s")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000010")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 0s")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-如果主键是不连续的呢-我们先对id进行分页查询-因为id是有索引的-因此查询id分页是非常快速的-提升不算特别明显-。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果主键是不连续的呢-我们先对id进行分页查询-因为id是有索引的-因此查询id分页是非常快速的-提升不算特别明显-。"}},[t._v("#")]),t._v(" 2.如果主键是不连续的呢？我们先对id进行分页查询，因为id是有索引的，因此查询id分页是非常快速的（提升不算特别明显）。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_test t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" tmp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])]),s("h3",{attrs:{id:"_3-业务上限定不可以查询早期数据-避免查询很靠后的数据-避免数据库查询压力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-业务上限定不可以查询早期数据-避免查询很靠后的数据-避免数据库查询压力"}},[t._v("#")]),t._v(" 3. 业务上限定不可以查询早期数据，避免查询很靠后的数据，避免数据库查询压力")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("例如微信支付不允许对一年前的订单进行退款")])])])}),[],!1,null,null,null);s.default=n.exports}}]);