(this.webpackJsonpbrugerproject=this.webpackJsonpbrugerproject||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),s=n.n(c),i=(n(14),n(15),n(0)),d=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:"Toolbar, SideDrawer, Backdrop"}),Object(i.jsx)("main",{className:"Content",children:e.children})]})},o=n(7),l=n(2),b=n(3),j=n(5),u=n(4),O=n(9),h=(n(17),n(18),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(i.jsx)("div",{className:"BreadBottom"});break;case"bread-top":e=Object(i.jsxs)("div",{className:"BreadTop",children:[Object(i.jsx)("div",{className:"Seeds1"}),Object(i.jsx)("div",{className:"Seeds2"})]});break;case"meat":e=Object(i.jsx)("div",{className:"Meat"});break;case"cheese":e=Object(i.jsx)("div",{className:"Cheese"});break;case"bacon":e=Object(i.jsx)("div",{className:"Bacon"});break;case"salad":e=Object(i.jsx)("div",{className:"Salad"});break;default:e=null}return e}}]),n}(a.Component)),m=function(e){console.log(e);var t=Object.keys(e.ingredient).map((function(t){return Object(O.a)(Array(e.ingredient[t])).map((function(e,n){return Object(i.jsx)(h,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(i.jsx)("p",{children:"Please start adding ingredients! "})),console.log(t),Object(i.jsxs)("div",{className:"Burger",children:[Object(i.jsx)(h,{type:"bread-top"}),t,Object(i.jsx)(h,{type:"bread-bottom"})]})},g=(n(19),function(e){return Object(i.jsxs)("div",{className:"BuildControl",children:[Object(i.jsx)("div",{className:"Label",children:e.label}),Object(i.jsx)("button",{className:"Less",onClick:e.removed,children:"Less"}),Object(i.jsx)("button",{className:"More",onClick:e.added,children:"More"})]})}),v=(n(20),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),p=function(e){return Object(i.jsx)("div",{className:"BuildControls",children:v.map((function(t){return Object(i.jsx)(g,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}},t.label)}))})},f={salad:.5,bacon:.47,meat:1.3,cheese:.4},x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,a=Object(o.a)({},e.state.ingredients);a[t]=n;var r=f[t],c=e.state.totalPrice+r;e.setState({totalPrice:c,ingredients:a})},e.removedIngredientHandler=function(t){var n=e.state.ingredients[t];if(n<=0)return 0;var a=n-1,r=Object(o.a)({},e.state.ingredients);r[t]=a;var c=f[t],s=e.state.totalPrice-c;e.setState({totalPrice:s,ingredients:r})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{ingredient:this.state.ingredients}),Object(i.jsx)(p,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removedIngredientHandler})]})}}]),n}(a.Component);var y=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(d,{children:Object(i.jsx)(x,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),N()}],[[21,1,2]]]);
//# sourceMappingURL=main.e9d8b8ea.chunk.js.map