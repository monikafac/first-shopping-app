(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(8),s=a.n(l),r=(a(15),a(1)),u=a(2),c=a(4),i=a(3),m=a(5),d=(a(6),function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={productsAvaliable:10,amount:0},a.handleRemoveFormCard=function(){a.setState({amount:a.state.amount-1})},a.handleAddToCard=function(){a.state.amount>=a.state.productsAvaliable?a.setState({amount:"10 jab\u0142ek, nie mamy ju\u017c "}):a.setState({amount:a.state.amount+1})},a.handleReset=function(){a.setState({amount:0})},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("img",{src:"img/apple.jpg",alt:""})),o.a.createElement("h1",null,"Kupi\u0142e\u015b: ",this.state.amount," jab\u0142ek! "),o.a.createElement("button",{disabled:!this.state.amount,onClick:this.handleRemoveFormCard},"Usu\u0144"),o.a.createElement("button",{disabled:this.state.productsAvaliable===this.state.amount,onClick:this.handleAddToCard},"Dodaj"),o.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),e}(n.Component)),h=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={productsAvaliable:10,amount:0},a.handleRemoveFormCard=function(){a.setState({amount:a.state.amount-1})},a.handleAddToCard=function(){a.state.amount>=a.state.productsAvaliable?a.setState({amount:"10 jab\u0142ek, nie mamy ju\u017c "}):a.setState({amount:a.state.amount+1})},a.handleReset=function(){a.setState({amount:0})},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("img",{src:"img/carrot.jpg",alt:""})),o.a.createElement("h1",null,"Kupi\u0142e\u015b: ",this.state.amount," marchewek! "),o.a.createElement("button",{disabled:!this.state.amount,onClick:this.handleRemoveFormCard},"Usu\u0144"),o.a.createElement("button",{disabled:this.state.productsAvaliable===this.state.amount,onClick:this.handleAddToCard},"Dodaj"),o.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),e}(n.Component),b=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={productsAvaliable:10,amount:0},a.handleRemoveFormCard=function(){a.setState({amount:a.state.amount-1})},a.handleAddToCard=function(){a.state.amount>=a.state.productsAvaliable?a.setState({amount:"10 jab\u0142ek, nie mamy ju\u017c "}):a.setState({amount:a.state.amount+1})},a.handleReset=function(){a.setState({amount:0})},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("img",{src:"img/lettuce.jpg",alt:""})),o.a.createElement("h1",null,"Kupi\u0142e\u015b: ",this.state.amount," sztuk sa\u0142aty! "),o.a.createElement("button",{disabled:!this.state.amount,onClick:this.handleRemoveFormCard},"Usu\u0144"),o.a.createElement("button",{disabled:this.state.productsAvaliable===this.state.amount,onClick:this.handleAddToCard},"Dodaj"),o.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),e}(n.Component),p=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={productsAvaliable:10,amount:0},a.handleRemoveFormCard=function(){a.setState({amount:a.state.amount-1})},a.handleAddToCard=function(){a.state.amount>=a.state.productsAvaliable?a.setState({amount:"10 jab\u0142ek, nie mamy ju\u017c "}):a.setState({amount:a.state.amount+1})},a.handleReset=function(){a.setState({amount:0})},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("img",{src:"img/orange.png",alt:""})),o.a.createElement("h1",null,"Kupi\u0142e\u015b: ",this.state.amount," pomara\u0144czy! "),o.a.createElement("button",{disabled:!this.state.amount,onClick:this.handleRemoveFormCard},"Usu\u0144"),o.a.createElement("button",{disabled:this.state.productsAvaliable===this.state.amount,onClick:this.handleAddToCard},"Dodaj"),o.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=[o.a.createElement(d,null),o.a.createElement(h,null),o.a.createElement(b,null),o.a.createElement(p,null)];s.a.render(v,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,a){},9:function(t,e,a){t.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.c1b97adf.chunk.js.map