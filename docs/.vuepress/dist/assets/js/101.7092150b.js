(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{479:function(t,l,e){"use strict";e.r(l);var a=e(2),v=Object(a.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[t._v("CAP定理: 指的是在一个分布式系统中，Consistency（一致性）、 Availability（可用性）、Partition tolerance（分区容错性），三者不可同时获得\n")]),t._v(" "),l("h2",{attrs:{id:"cap理论"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[t._v("#")]),t._v(" CAP理论")]),t._v(" "),l("ul",[l("li",[t._v("一致性（C）：所有节点都可以访问到最新的数据")]),t._v(" "),l("li",[t._v("可用性（A）：每个请求都是可以得到响应的，不管请求是成功还是失败")]),t._v(" "),l("li",[t._v("分区容错性（P）：除了全部整体网络故障，其他故障都不能导致整个系统不可用")])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"title"}),l("p",[t._v("CAP理论就是说在分布式存储系统中，最多只能实现上面的两点。而由于当前的网络硬件肯定会出现延迟丢包等问题，所以分区容忍性是我们必须需要实现的。所以我们只能在一致性和可用性之间进行权衡")])]),l("p",[l("strong",[t._v("CA")]),t._v("： 如果不要求P（不允许分区），则C（强一致性）和A（可用性）是可以保证的。但放弃P的同时也就意味着放弃了系统的扩展性，也就是分布式节点受限，没办法部署子节点，这是违背分布式系统设计的初衷的")]),t._v(" "),l("p",[l("strong",[t._v("CP")]),t._v(": 如果不要求A（可用），每个请求都需要在服务器之间保持强一致，而P（分区）会导致同步时间无限延长(也就是等待数据同步完才能正常访问服务)，一旦发生网络故障或者消息丢失等情况，就要牺牲用户的体验，等待所有数据全部一致了之后再让用户访问系统")]),t._v(" "),l("p",[l("strong",[t._v("AP")]),t._v("：要高可用并允许分区，则需放弃一致性。一旦分区发生，节点之间可能会失去联系，为了高可用，每个节点只能用本地数据提供服务，而这样会导致全局数据的不一致性。")]),t._v(" "),l("h3",{attrs:{id:"cap里面下的注册中心选择思考"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cap里面下的注册中心选择思考"}},[t._v("#")]),t._v(" CAP里面下的注册中心选择思考")]),t._v(" "),l("ul",[l("li",[t._v("常见注册中心：zk、eureka、nacos")]),t._v(" "),l("li",[t._v("那你应该怎么选择")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}}),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("Nacos")])]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("Eureka")])]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("Consul")])]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("Zookeeper")])])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("一致性协议")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CP+AP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("健康检查")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP/HTTP/MYSQL/Client Beat")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("心跳")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP/HTTP/gRPC/Cmd")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Keep Alive")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("雪崩保护")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("无")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("访问协议")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP/DNS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP/DNS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SpringCloud集成")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])])])]),t._v(" "),l("ul",[l("li",[t._v("Zookeeper：CP设计，保证了一致性，集群搭建的时候，某个节点失效，则会进行选举行的leader，或者半数以上节点不可用，则无法提供服务，因此可用性没法满足")]),t._v(" "),l("li",[t._v("Eureka：AP原则，无主从节点，一个节点挂了，自动切换其他节点可以使用，去中心化")])]),t._v(" "),l("h3",{attrs:{id:"cap下的注册中心选择的结论"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cap下的注册中心选择的结论"}},[t._v("#")]),t._v(" CAP下的注册中心选择的结论")]),t._v(" "),l("ul",[l("li",[t._v("分布式系统中P,肯定要满足，所以只能在CA中二选一")]),t._v(" "),l("li",[t._v("没有最好的选择，最好的选择是根据业务场景来进行架构设计")]),t._v(" "),l("li",[t._v("如果要求一致性，则选择zookeeper/Nacos，如金融行业 CP")]),t._v(" "),l("li",[t._v("如果要求可用性，则Eureka/Nacos，如电商系统 AP")]),t._v(" "),l("li",[t._v("CP：适合支付、交易类，要求数据强一致性，宁可业务不可用，也不能出现脏数据")]),t._v(" "),l("li",[t._v("AP：互联网业务，比如信息流架构，不要求数据强一致，更想要服务可用")])]),t._v(" "),l("h2",{attrs:{id:"base理论-一致性和可用性的权衡结果"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#base理论-一致性和可用性的权衡结果"}},[t._v("#")]),t._v(" BASE理论：一致性和可用性的权衡结果")]),t._v(" "),l("ul",[l("li",[t._v("什么是Base理论")])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"title"}),l("p",[t._v("CAP 中的一致性和可用性进行一个权衡的结果，核心思想就是：我们无法做到强一致，但每个应用都可以根据自身的业务特点，采用适当的方式来使系统达到最终一致性, 来自 ebay 的架构师提出")])]),l("ul",[l("li",[l("p",[t._v("Basically Available(基本可用)：假设系统，出现了不可预知的故障，但还是能用, 可能会有性能或者功能上的影响")])]),t._v(" "),l("li",[l("p",[t._v("Soft state（软状态）：允许系统中的数据存在中间状态，并认为该状态不影响系统的整体可用性，即允许系统在多个不同节点的数据副本存在数据延时")])]),t._v(" "),l("li",[l("p",[t._v("Eventually consistent（最终一致性）：系统能够保证在没有其他新的更新操作的情况下，数据最终一定能够达到一致的状态，因此所有客户端对系统的数据访问最终都能够获取到最新的值")])])])])}),[],!1,null,null,null);l.default=v.exports}}]);