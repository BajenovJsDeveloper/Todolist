(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(1),l=a(2),u=a(3),s=a(8),d=a(15),m={currentCategoryId:1,currentTaskId:1,isVisibleModal:!1,categoryes:[{id:1,description:"Category 1",createdAt:(new Date).toLocaleString("en-US"),tasksList:[{id:1,titleDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat provident corporis explicabo ducimus iure quae ad impedit debitis in! Totam praesentium reprehenderit aliquid explicabo voluptate voluptatum repellat. Voluptatum, numquam accusamus.",isCompleted:!0,createdAt:"01.01.2020",updatedAt:"01.03.2020",priority:"danger"},{id:2,titleDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat provident corporis explicabo ducimus iure quae ad impedit debitis in! Totam praesentium reprehenderit aliquid explicabo voluptate voluptatum repellat. Voluptatum, numquam accusamus.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"danger"},{id:3,titleDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat provident corporis explicabo ducimus iure quae ad impedit debitis in! Totam praesentium reprehenderit aliquid explicabo voluptate voluptatum repellat. Voluptatum, numquam accusamus.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"danger"},{id:4,titleDescription:"Lorem ipsum dolor sit amet.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"warning"},{id:5,titleDescription:"Lorem ipsum dolor sit amet.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"warning"},{id:6,titleDescription:"Lorem ipsum dolor sit amet.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"normal"},{id:7,titleDescription:"Lorem ipsum dolor sit amet.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"normal"},{id:8,titleDescription:"Lorem ipsum dolor sit amet.",isCompleted:!1,createdAt:"02.01.2020",updatedAt:"01.03.2020",priority:"normal"}]}]};a(27);var p=Object(c.b)(null,(function(e){return{showModalForm:function(){return e({type:"SHOW_MODAL"})}}}))((function(e){var t=e.showModalForm;return i.a.createElement("div",{className:"cg-button"},i.a.createElement("button",{onClick:function(){t()},type:"button"},"Add todos"))})),g=a(6),v=function(e){var t=e.idx,a=e.keyDown,n=e.itemClick,r=e.itemDescription,o=e.itemId,c=e.curCatId;return i.a.createElement(g.b,{index:t,draggableId:"item-".concat(o)},(function(e,l){return i.a.createElement("div",Object.assign({ref:e.innerRef,role:"button",tabIndex:t,onKeyDown:a,className:"cg-item ".concat(c===o?"active":""),onClick:function(){return n(o)}},e.dragHandleProps,e.draggableProps),r,i.a.createElement("p",null))}))},b=Object(c.b)(null,(function(e){return{reorderCategoryList:function(t){return e({type:"REODER_CATEGORY",payload:t})}}}))((function(e){var t=e.curCatId,a=e.categoryList,n=e.itemClick,r=e.reorderCategoryList,o=function(){};return i.a.createElement(g.a,{onDragEnd:function(e){console.log(e);var t=e.destination?e.destination.index:null,a=e.source.index;r([a,t])}},i.a.createElement(g.c,{droppableId:"Category"},(function(e,r){return i.a.createElement("div",{className:"cg-list",ref:e.innerRef},a.map((function(e,a){return i.a.createElement(v,{key:"item-".concat(e.id),idx:a,keyDown:o,itemClick:n,itemDescription:e.description,itemId:e.id,curCatId:t})})),e.placeholder)})))})),E=function(e){var t=e.toggleClick,a=e.rotateArrow;return i.a.createElement("div",{className:"cg-side-button",onClick:t},i.a.createElement("div",{className:"arrow ".concat(a?"rotate":"")}))};var f=Object(c.b)((function(e){return{state:e}}),(function(e){return{selectCategory:function(t){return e({type:"SELECT_CATEGORY",payload:t})}}}))((function(e){var t=e.state,a=e.selectCategory,r=Object(n.useState)(!1),o=Object(u.a)(r,2),c=o[0],l=o[1],s=t.currentCategoryId,d=function(){l(!c),console.log("show click...")};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cg-title"},i.a.createElement("h3",null," Todo categories ")),i.a.createElement("div",{className:"back-font ".concat(c?"fadein":"fadeout"),onClick:d}),i.a.createElement(E,{toggleClick:d,rotateArrow:c}),i.a.createElement("div",{className:"cg-container ".concat(c?"show":"hide")},i.a.createElement(b,{curCatId:s,itemClick:function(e){a(e)},categoryList:t.categoryes}),i.a.createElement(p,null)))})),y=function(e){var t=e.itemData,a="task-item ".concat(t.isCompleted?"done":""," ").concat(t.priority);return i.a.createElement("div",{className:a},i.a.createElement("p",{className:"task-text"},t.titleDescription),i.a.createElement("p",null,"Last modified on: ",t.createdAt),i.a.createElement("p",null,"Created at: ",t.updatedAt))},C=a(14),k=(a(28),function e(){Object(C.a)(this,e),this.value=void 0,this.name=void 0,this.value="",this.name=""});var h=function(e){var t=e.title,a=e.visible,r=e.inputName,o=e.placeHolder,c=e.label,l=e.onOK,d=e.onCancel,m=e.inputType,p=r.map((function(e){return new k})),g=Object(n.useState)(p),v=Object(u.a)(g,2),b=v[0],E=v[1],f=function(e,t){var a=e.target.value,n=Object(s.a)(b);n[t].value=a,a.length<20&&"input"===m&&E(n)},y=r.map((function(e,t){return i.a.createElement("div",{className:"modal-input"},i.a.createElement("label",null,c[t],"input"===m?i.a.createElement("input",{name:e,onChange:function(e){return f(e,t)},value:b[t].value,onFocus:function(e){},placeholder:o[t]}):i.a.createElement("textarea",{onChange:function(e){return f(e,t)},onFocus:function(e){},placeholder:o[t],value:b[t].value,rows:5,cols:45})))}));return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement("div",{className:"modal-background"}),a&&i.a.createElement("section",{className:"modal-input-group"},i.a.createElement("h3",null,t),y,i.a.createElement("div",{className:"modal-input-footer"},i.a.createElement("button",{role:"button",type:"button",onClick:d,name:"cancel"},"Cancel"),i.a.createElement("button",{role:"button",type:"button",onClick:function(){return l(b)},name:"submit"},"OK"))))};var O=function(e){var t=e.tasksList,a=e.categoryTitle,r=Object(n.useState)(!1),o=Object(u.a)(r,2),c=o[0],l=o[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"task-title"},a),i.a.createElement("div",{className:"task-list"},t.map((function(e,t){return i.a.createElement(y,{key:e.id+"task-item",itemData:e})})),i.a.createElement("div",{className:"task-add-button",onClick:function(){l(!0)}},"+"),i.a.createElement(h,{inputType:"",title:"Create new task",visible:c,label:["Input task description"],inputName:["task description"],onOK:function(e){e[0].value.trim().length>0&&l(!1)},onCancel:function(){l(!1)},placeHolder:["Some description..."]})))};var A=Object(c.b)((function(e){return{state:e}}),(function(e){return{addTask:function(t){return e({type:"ADD_CATEGORY",payload:t})},removeModal:function(){return e({type:"REMOVE_MODAL"})}}}))((function(e){var t=e.addTask,a=e.state,n=e.removeModal,r=a.isVisibleModal,o=a.categoryes.filter((function(e){return e.id===a.currentCategoryId}))[0],c=o.description;return console.log(a),i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{inputType:"input",title:"Create new category",visible:r,label:["Input category name"],inputName:["categoryName"],onOK:function(e){e[0].value.trim().length>0&&(t(e),n())},onCancel:function(){n()},placeHolder:["Homework"]}),i.a.createElement("div",{className:"container"},i.a.createElement(f,null),i.a.createElement(O,{categoryTitle:c,tasksList:o.tasksList})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=Object(l.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=Object(d.a)({},e);switch(t.type){case"ADD_CATEGORY":var n=a.categoryes.map((function(e){return e.id})),i=Math.max.apply(Math,Object(s.a)(n))+1,r=t.payload,o=r[0].value,c={id:i,description:o,createdAt:(new Date).toLocaleString("en-US"),tasksList:[]};a.categoryes.push(c),a.isVisibleModal=!0,a.currentCategoryId=i;break;case"SELECT_CATEGORY":"number"===typeof t.payload&&(a.currentCategoryId=t.payload);break;case"REMOVE_MODAL":a.isVisibleModal=!1;break;case"SHOW_MODAL":a.isVisibleModal=!0;break;case"REODER_CATEGORY":var l=t.payload,p=Object(u.a)(l,2),g=p[0],v=p[1];if(null!==v){var b=a.categoryes.splice(g,1)[0];a.categoryes.splice(v,0,b)}}return a}));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:D},i.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b8c1b3c4.chunk.js.map