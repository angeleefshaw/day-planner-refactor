(this["webpackJsonpday-planner-refector"]=this["webpackJsonpday-planner-refector"]||[]).push([[0],{13:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(15),r=c.n(n),i=(c(26),c(12),c(13),c(16)),j=c(17),l=c(21),o=c(19),b=(c(27),c(1)),m=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={date:new Date},s}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(b.jsx)("h1",{className:"clock",children:this.state.date.toLocaleTimeString()})}}]),c}(a.a.Component);var d=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("header",{className:"jumbotron",children:[Object(b.jsx)("h1",{className:"display-3",children:"Work Day Scheduler"}),Object(b.jsx)("h2",{className:"lead",children:"A simple calendar app for scheduling your work day"}),Object(b.jsx)("p",{id:"currentDay",className:"lead"}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{className:"date"}),Object(b.jsx)("p",{className:"time"})]})]})})},u=c(20),O=c(11),h=c(35),x=c(18),f=c(36);c(29);var p=function(e){var t=Object(s.useState)([]),c=Object(O.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(),i=Object(O.a)(r,2),j=i[0],l=i[1],o=Object(s.useRef)();return Object(b.jsx)("div",{className:"tasks",children:Object(b.jsxs)(h.a,{className:"col-one-content save-item",onSubmit:function(e){e.preventDefault(),n([].concat(Object(u.a)(a),[o.current.value])),e.target.reset()},children:[Object(b.jsxs)(h.a.Row,{className:"row",children:[Object(b.jsx)(x.a,{className:"col-1",children:Object(b.jsx)(h.a.Control,{placeholder:e.time})}),Object(b.jsx)(x.a,{className:"col-8",children:Object(b.jsx)(h.a.Control,{placeholder:"Enter Task Here",ref:o})}),Object(b.jsx)(x.a,{className:"col-1",children:Object(b.jsx)(f.a,{type:"submit",className:"form-control save-btn",children:Object(b.jsx)("i",{className:"fas fa-save"})})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{className:"show-btn",onClick:function(){l({showtasks:!j})},children:[j?"Hide":"Show"," Todo's "]}),!j||Object(b.jsx)("div",{className:"col-10 smll-row task-list-container",children:Object(b.jsx)("ul",{className:"task-list",children:a.map((function(e,t){return Object(b.jsx)("li",{className:"new-task",children:e},t)}))})})]})]})})};var v=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(m,{}),Object(b.jsx)(p,{time:"9am"}),Object(b.jsx)(p,{time:"10am"}),Object(b.jsx)(p,{time:"11am"}),Object(b.jsx)(p,{time:"12am"}),Object(b.jsx)(p,{time:"1pm"}),Object(b.jsx)(p,{time:"2pm"}),Object(b.jsx)(p,{time:"3pm"}),Object(b.jsx)(p,{time:"4pm"})]})};r.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9f025ac6.chunk.js.map