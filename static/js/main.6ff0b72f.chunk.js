(this["webpackJsonpywc18-homework"]=this["webpackJsonpywc18-homework"]||[]).push([[0],{34:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(1),n=a.n(c),i=a(9),s=a.n(i),l=a(10),o=a(6),h=a(8),j={jsonData:null,filterKeyCategory:"all",filterKeySubcategory:"all",filterKeyPriceRange:"",filterKeyArea:"nearme",isShowFilterOnMobile:!1,isShowFilterNormal:!0,isSearch:!1,searchWord:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATE":case"SET_STATE2":return Object(h.a)(Object(h.a)({},e),t.data);default:return e}},b=a(15),d=a.n(b),f=a(20),p=a(2),m=a(3),O=a(5),y=a(4),g=(a(34),a(7)),v=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleFilterKey=function(t){console.log(t.target.id,":",t.target.value),e.props.dispatch({type:"SET_STATE",data:Object(g.a)({},t.target.id,t.target.value)})},e.provinceOptions=function(){var t=e.props.jsonData;if(t)return t.provinces.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return this.props.isOnlySelectBox?Object(r.jsxs)("select",{className:"form-control",id:"filterKeyArea",onChange:this.handleFilterKey,value:this.props.filterKeyArea,children:[Object(r.jsx)("option",{value:"nearme",children:"\uf041 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19"}),Object(r.jsx)("option",{value:"all",children:"\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),this.provinceOptions()]}):Object(r.jsxs)("div",{className:"filter",children:[Object(r.jsx)("label",{className:"filter-name",htmlFor:"filterKeyArea",children:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14/\u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19"}),Object(r.jsxs)("select",{className:"form-control",id:"filterKeyArea",onChange:this.handleFilterKey,value:this.props.filterKeyArea,children:[Object(r.jsx)("option",{value:"nearme",children:"\uf041 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19"}),Object(r.jsx)("option",{value:"all",children:"\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),this.provinceOptions()]})]})}}]),a}(n.a.Component),x=Object(o.b)((function(e){return{jsonData:e.jsonData,filterKeyArea:e.filterKeyArea}}))(v),N=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).handleChangeInputSearch=function(t){var a=t.target.value;e.props.dispatch({type:"SET_STATE",data:{searchWord:a}})},e.handleSearch=function(t){t.preventDefault(),e.props.searchWord?e.props.dispatch({type:"SET_STATE",data:{isSearch:!0,searchWordSearched:e.props.searchWord}}):e.props.dispatch({type:"SET_STATE",data:{isSearch:!1}})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"search-bar",children:[Object(r.jsx)(x,{isOnlySelectBox:!0}),Object(r.jsxs)("form",{className:"search-bar",onSubmit:this.handleSearch,children:[Object(r.jsx)("input",{type:"text",id:"searchWord",className:"form-control",placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32 \u0e0a\u0e37\u0e48\u0e2d \u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21 \u0e23\u0e49\u0e32\u0e19\u0e18\u0e07\u0e1f\u0e49\u0e32 \u0e23\u0e49\u0e32\u0e19 OTOP \u0e41\u0e25\u0e30\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",onChange:this.handleChangeInputSearch}),Object(r.jsx)("button",{className:"btn btn-light",type:"submit",children:Object(r.jsx)("span",{className:"fa fa-search"})})]})]})}}]),a}(n.a.Component),S=Object(o.b)((function(e){return{searchWord:e.searchWord}}))(N),w=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).toggleFilterPanel=function(){e.props.dispatch({type:"SET_STATE",data:{isShowFilterOnMobile:!e.props.isShowFilterOnMobile}})},e}return Object(m.a)(a,[{key:"render",value:function(){return this.props.btnToggleClose?Object(r.jsx)("button",{className:"btn btn-toggle-close float-right",onClick:this.toggleFilterPanel,children:Object(r.jsx)("span",{className:"fa fa-fw fa-times"})}):Object(r.jsx)("button",{className:"btn btn-filter",onClick:this.toggleFilterPanel,children:Object(r.jsx)("span",{className:"fa fa-fw fa-filter"})})}}]),a}(n.a.Component),C=Object(o.b)((function(e){return{isShowFilterOnMobile:e.isShowFilterOnMobile}}))(w),T=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("header",{children:[Object(r.jsxs)("div",{className:"header-bar",children:[Object(r.jsxs)("div",{className:"logo",children:[Object(r.jsx)("img",{className:"logo-full",src:"https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo.png",alt:""}),Object(r.jsx)("img",{className:"logo-mini",src:"https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo-mini.png",alt:""})]}),Object(r.jsx)(S,{}),Object(r.jsx)(C,{})]}),Object(r.jsx)("div",{className:"navigate-bar",children:Object(r.jsx)("div",{className:"navigate-bar-body",children:Object(r.jsx)("p",{children:"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01 / \u0e04\u0e49\u0e19\u0e2b\u0e32"})})})]})}}]),a}(n.a.Component),K=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleFilterKey=function(t){console.log(t.target.id,":",t.target.value),e.props.dispatch({type:"SET_STATE",data:Object(g.a)({},t.target.id,t.target.value)})},e.provinceOptions=function(){var t=e.props.jsonData;if(t)return t.priceRange.map((function(e,t){return Object(r.jsx)("option",{value:t+1,children:e},t)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"filter",children:[Object(r.jsx)("label",{className:"filter-name",htmlFor:"filterKeyPriceRange",children:"\u0e23\u0e32\u0e04\u0e32"}),Object(r.jsxs)("select",{className:"form-control",id:"filterKeyPriceRange",value:this.props.filterKeyPriceRange,onChange:this.handleFilterKey,children:[Object(r.jsx)("option",{value:"",disabled:!0,children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01"}),Object(r.jsx)("option",{value:"all",children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),this.provinceOptions()]})]})}}]),a}(n.a.Component),k=Object(o.b)((function(e){return{jsonData:e.jsonData,filterKeyPriceRange:e.filterKeyPriceRange}}))(K),F=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleFilterCategory=function(t){console.log("filterKeyCategory:",t.target.value),e.props.dispatch({type:"SET_STATE",data:{filterKeyCategory:t.target.value,filterKeySubcatagory:"all"}})},e.categoryOptions=function(){var t=e.props.jsonData;if(t)return t.categories.map((function(t,a){return Object(r.jsxs)("div",{className:"form-group form-check filter-radio",children:[Object(r.jsx)("input",{type:"radio",name:"filterKeyCategory",className:"form-check-input",id:t.name,value:t.name,onChange:e.handleFilterCategory,checked:e.props.filterKeyCategory===t.name}),Object(r.jsx)("label",{htmlFor:t.name,className:"form-check-label",children:t.name})]},a)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"filter",style:{marginBottom:"17px"},children:[Object(r.jsx)("label",{className:"filter-name",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"}),Object(r.jsxs)("div",{className:"form-group form-check filter-radio",children:[Object(r.jsx)("input",{type:"radio",name:"filterKeyCategory",className:"form-check-input",id:"allcategories",value:"all",onChange:this.handleFilterCategory,checked:"all"===this.props.filterKeyCategory}),Object(r.jsx)("label",{htmlFor:"allcategories",className:"form-check-label",children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),this.categoryOptions()]})}}]),a}(n.a.Component),A=Object(o.b)((function(e){return{jsonData:e.jsonData,filterKeyCategory:e.filterKeyCategory}}))(F),E=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).handleFilterSubcategory=function(t){e.props.dispatch({type:"SET_STATE",data:{filterKeySubcategory:t.target.value}})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.filterKeyCategory;if("all"===t)return null;for(var a=this.props.jsonData.categories,c=[],n=0;n<a.length;n++)a[n].name===t&&(c=a[n].subcategories);if(c.length>0){return Object(r.jsxs)("div",{className:"filter",style:{marginBottom:"17px"},children:[Object(r.jsxs)("label",{className:"filter-name",children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17",t]}),Object(r.jsxs)("div",{className:"form-group form-check filter-radio",children:[Object(r.jsx)("input",{type:"radio",name:"filterKeySubcategory",className:"form-check-input",id:"allsubcategories",value:"all",onChange:this.handleFilterSubcategory,checked:"all"===this.props.filterKeySubcategory}),Object(r.jsx)("label",{htmlFor:"allsubcategories",className:"form-check-label",children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})]}),c.map((function(t,a){return Object(r.jsxs)("div",{className:"form-group form-check filter-radio",children:[Object(r.jsx)("input",{type:"radio",name:"filterKeySubcategory",className:"form-check-input",id:t,value:t,onChange:e.handleFilterSubcategory,checked:e.props.filterKeySubcategory===t}),Object(r.jsx)("label",{htmlFor:t,className:"form-check-label",children:t})]},a)}))]})}return null}}]),a}(n.a.Component),D=Object(o.b)((function(e){return{jsonData:e.jsonData,filterKeyCategory:e.filterKeyCategory,filterKeySubcategory:e.filterKeySubcategory}}))(E),_=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return this.props.isShowFilterNormal&&window.innerWidth>768?Object(r.jsxs)("div",{className:"filter-panel col-md-3",children:[Object(r.jsx)(A,{}),Object(r.jsx)(k,{}),Object(r.jsx)(x,{}),Object(r.jsx)(D,{})]}):null}}]),a}(n.a.Component),I=Object(o.b)((function(e){return{isShowFilterNormal:e.isShowFilterNormal}}))(_),P=a(21),W=a.n(P),L=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).availableBadge=function(e){return"Y"===e?Object(r.jsx)("span",{className:"badge badge-success",children:"\u0e40\u0e1b\u0e34\u0e14\u0e2d\u0e22\u0e39\u0e48"}):"N"===e?Object(r.jsx)("span",{className:"badge badge-secondary",children:"\u0e1b\u0e34\u0e14\u0e41\u0e25\u0e49\u0e27"}):void 0},e.priceLevelStatus=function(e){if(e)return Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{className:"price-level",children:[Object(r.jsx)("i",{children:"\u0e3f".repeat(e)}),"\u0e3f".repeat(4-e)]})," |\xa0"]})},e.recommendedItemsBar=function(e,t){var a="\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e41\u0e19\u0e30\u0e19\u0e33";if("\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"===e&&(a="\u0e40\u0e21\u0e19\u0e39\u0e41\u0e19\u0e30\u0e19\u0e33"),t&&t!==[])return Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:a})," ",t.join(", ")]})},e.facilitiesIcon=function(e){if(e&&e!==[]){var t={"\u0e17\u0e35\u0e48\u0e08\u0e2d\u0e14\u0e23\u0e16":"fa-car","\u0e23\u0e31\u0e1a\u0e08\u0e2d\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32":"fa-file-text","\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e19\u0e33\u0e2a\u0e31\u0e15\u0e27\u0e4c\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e40\u0e02\u0e49\u0e32\u0e44\u0e14\u0e49":"fa-paw"};return e.map((function(e,a){return e in t?Object(r.jsx)("span",{className:"facility-icon",alt:e,children:Object(r.jsx)("i",{className:"fa fa-fw fa-lg "+t[e]})},a):console.log('There is no icon assigned for "'.concat(e,'" facility.'))}))}},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.detail,t=e.shopNameTH,a=e.highlightText,c=e.categoryName,n=e.subcategoryName,i=e.coverImageId,s=e.recommendedItems,l=e.addressDistrictName,o=e.addressProvinceName,h=e.isOpen,j=e.priceLevel,u=e.facilities;return Object(r.jsxs)("div",{className:"merchant",children:[Object(r.jsx)("div",{className:"img",children:Object(r.jsx)("img",{src:i,alt:t})}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsxs)("h2",{children:[t," ",this.availableBadge(h)]}),Object(r.jsxs)("div",{className:"details",children:[Object(r.jsxs)("span",{children:[n," |\xa0"]}),this.priceLevelStatus(j),Object(r.jsxs)("span",{children:[l," ",o]})]}),Object(r.jsx)("p",{children:W()(a)}),this.recommendedItemsBar(c,s),this.facilitiesIcon(u)]})]})}}]),a}(n.a.Component),M=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).filterMerchants=function(){var t=e.props,a=t.jsonData,r=t.filterKeyCategory,c=t.filterKeySubcategory,n=t.filterKeyPriceRange,i=t.filterKeyArea,s=t.isSearch,l=a.merchants;if("all"!==(i="nearme"===i?"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23":i)&&(l=l.filter((function(e){return e.addressProvinceName===i}))),"all"!==n&&""!==n&&(l=l.filter((function(e){return e.priceLevel===parseInt(n)}))),"all"===r||("\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21"===r?(l=l.filter((function(e){return e.categoryName===r||"\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"===e.categoryName||"\u0e23\u0e49\u0e32\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21"===e.categoryName})),"all"!==c&&(l=l.filter((function(e){return e.subcategoryName===c})))):"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"===r?(l=l.filter((function(e){return e.categoryName===r||"\u0e41\u0e1f\u0e0a\u0e31\u0e48\u0e19"===e.categoryName})),"all"!==c&&(l=l.filter((function(e){return e.subcategoryName===c})))):(l=l.filter((function(e){return e.categoryName===r})),"all"!==c&&(l=l.filter((function(e){return e.subcategoryName===c}))))),s){var o=e.props.searchWordSearched.toLowerCase();l=l.filter((function(e){var t=e.shopNameTH.toLowerCase(),a=e.categoryName.toLowerCase(),r=e.subcategoryName.toLowerCase(),c=e.highlightText.toLowerCase(),n=e.recommendedItems.join(" ").toLowerCase();return t.includes(o)||a.includes(o)||r.includes(o)||c.includes(o)||n.includes(o)}))}return l},e}return Object(m.a)(a,[{key:"render",value:function(){if(this.props.jsonData){var e=this.filterMerchants();if(e.length>0){var t=e.map((function(e,t){return Object(r.jsx)(L,{detail:e},t)}));return Object(r.jsx)("div",{className:"col-md-9 order-md-2",children:t})}return Object(r.jsx)("div",{className:"col-md-9 text-center",children:Object(r.jsx)("span",{children:"\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23"})})}return console.log("Loading Data..."),Object(r.jsx)("div",{className:"col-md-9 text-center",children:Object(r.jsx)("span",{children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14..."})})}}]),a}(n.a.Component),B=Object(o.b)((function(e){return e}))(M),R=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.filterKeyCategory,a=e.filterKeySubcategory;if(e.isSearch){var c=this.props.searchWordSearched;return Object(r.jsx)("div",{className:"title-bar col-12",children:Object(r.jsxs)("h4",{children:["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32 '",c,"'"]})})}return"all"===t&&(t="\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"),"all"===a?(console.log("all sub"),a="\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"):(console.log(a),a="\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 ".concat(a)),Object(r.jsx)("div",{className:"title-bar col-12",children:Object(r.jsxs)("h4",{children:["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32 ",t," ",a]})})}}]),a}(n.a.Component),H=Object(o.b)((function(e){return{filterKeyCategory:e.filterKeyCategory,filterKeySubcategory:e.filterKeySubcategory,isSearch:e.isSearch,searchWordSearched:e.searchWordSearched}}))(R),J=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){window.innerWidth>768?e.props.dispatch({type:"SET_STATE",data:{isShowFilterOnMobile:!1,isShowFilterNormal:!0}}):e.props.dispatch({type:"SET_STATE",data:{isShowFilterNormal:!1}})}))}},{key:"render",value:function(){return this.props.isShowFilterOnMobile?Object(r.jsxs)("div",{className:"filter-panel col-md-3",children:[Object(r.jsx)(C,{btnToggleClose:!0}),Object(r.jsx)(A,{}),Object(r.jsx)(k,{}),Object(r.jsx)(x,{}),Object(r.jsx)(D,{})]}):null}}]),a}(n.a.Component),Y=Object(o.b)((function(e){return{isShowFilterOnMobile:e.isShowFilterOnMobile}}))(J),z=function(){return Object(r.jsx)("div",{className:"footer-bar",children:Object(r.jsx)("div",{className:"footer-bar-body",children:Object(r.jsxs)("p",{children:['\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e0a\u0e48\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e07\u0e32\u0e19 "\u0e04\u0e19\u0e25\u0e30\u0e04\u0e23\u0e36\u0e48\u0e07" \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e43\u0e14 \u0e46 \u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27',Object(r.jsx)("br",{}),"Created by TJTHANAPAT"]})})})},q=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://panjs.com/ywc18.json").then((function(e){return e.json()})).then((function(t){console.log("Fetched Data:",t),t.categories.push({name:"\u0e07\u0e32\u0e19\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2d\u0e37\u0e48\u0e19\u0e46 / \u0e40\u0e1a\u0e47\u0e14\u0e40\u0e15\u0e25\u0e47\u0e14",subcategories:[]}),t.merchants.push({addressDistrictName:"\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e1b\u0e23\u0e32\u0e01\u0e32\u0e23",addressProvinceName:"\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e1b\u0e23\u0e32\u0e01\u0e32\u0e23",categoryName:"\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",coverImageId:"https://www.saphanmai.com/wp-content/uploads/2019/03/49895510_2247234235565577_2936877454226096128_o.jpg",highlightText:"\u0e1a\u0e38\u0e1f\u0e40\u0e1f\u0e48\u0e15\u0e4c\u0e2a\u0e38\u0e01\u0e35\u0e49<strong>\u0e41\u0e1a\u0e1a\u0e44\u0e21\u0e48\u0e2d\u0e31\u0e49\u0e19</strong>\u0e43\u0e19\u0e23\u0e32\u0e04\u0e32 199 \u0e1a\u0e32\u0e17",isOpen:"Y",priceLevel:1,recommendedItems:["\u0e2b\u0e21\u0e39\u0e01\u0e23\u0e30\u0e17\u0e30","\u0e2a\u0e38\u0e01\u0e35\u0e49"],shopNameTH:"\u0e2a\u0e38\u0e01\u0e01\u0e35\u0e49\u0e15\u0e35\u0e4b\u0e19\u0e49\u0e2d\u0e22",subcategoryName:"\u0e0a\u0e32\u0e1a\u0e39 \u0e2a\u0e38\u0e01\u0e35\u0e49\u0e22\u0e32\u0e01\u0e35\u0e49 \u0e2b\u0e21\u0e49\u0e2d\u0e44\u0e1f",facilities:["\u0e44\u0e21\u0e48\u0e21\u0e35"]}),e.props.dispatch({type:"SET_STATE",data:{jsonData:t}})})).catch((function(e){console.error(e)}));case 1:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(T,{}),Object(r.jsx)("div",{className:"container-fluid container-body",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(Y,{}),Object(r.jsx)(H,{}),Object(r.jsx)(I,{}),Object(r.jsx)(B,{})]})}),Object(r.jsx)(z,{})]})}}]),a}(n.a.Component),G=Object(o.b)()(q),Q=Object(l.b)(u);s.a.render(Object(r.jsx)(o.a,{store:Q,children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6ff0b72f.chunk.js.map