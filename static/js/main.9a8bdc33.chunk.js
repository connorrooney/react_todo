(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(15),n(8)),s=n(1),l=n(2),u=n(4),m=n(3),p=n(5),d=(n(16),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"todoListMain"},r.a.createElement("div",{className:"header"},r.a.createElement("form",{onSubmit:this.props.addItem},r.a.createElement("input",{placeholder:"Task",ref:this.props.inputElement,value:this.props.currentItem.text,onChange:this.props.handleInput}),r.a.createElement("button",{type:"submit"}," Add Task "))))}}]),t}(a.Component)),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).createTasks=function(e){return r.a.createElement("li",{key:e.key,onClick:function(){return n.props.deleteItem(e.key)}},r.a.createElement("div",{className:"liCont"},e.text))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement("ul",{className:"theList"},e)}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={items:[],currentItem:{text:"",key:""}},n.handleInput=function(e){var t={text:e.target.value,key:Date.now()};n.setState({currentItem:t})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(""!==t.text){console.log(t);var a=[].concat(Object(o.a)(n.state.items),[t]);n.setState({items:a,currentItem:{text:"",key:""}})}},n.deleteItem=function(e){var t=n.state.items.filter(function(t){return t.key!==e});n.setState({items:t})},n.inputElement=r.a.createRef(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Todo List"),r.a.createElement("h3",null,"Type and Click to add Tasks."),r.a.createElement("h3",null,"Click on a task to remove it"),r.a.createElement(d,{addItem:this.addItem,inputElement:this.inputElement,handleInput:this.handleInput,currentItem:this.state.currentItem}),r.a.createElement(h,{entries:this.state.items,deleteItem:this.deleteItem})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9a8bdc33.chunk.js.map