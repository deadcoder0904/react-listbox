var t,e=require("react");function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var o=((t=e)&&"object"==typeof t&&"default"in t?t.default:t).createContext(),i=function(t){function e(e){var n;return(n=t.call(this,e)||this).getActiveDescendant=function(){return(n.state.optionIds.find(function(t){return t[0]===n.state.activeItem})||[null,null])[1]},n.registerOptionId=function(t,e){n.unregisterOptionId(t),n.setState(function(n){return{optionIds:[].concat(n.optionIds,[[t,e]])}})},n.unregisterOptionId=function(t){n.setState(function(e){return{optionIds:e.optionIds.filter(function(e){return e[0]!==t})}})},n.type=function(t){n.setState(function(e){return{typeahead:e.typeahead.concat(t)}},function(){var t=(n.state.optionRefs.find(function(t){return t[1].innerText.toLowerCase().startsWith(n.state.typeahead.toLowerCase())})||[null])[0];null!==t&&n.focus(t),n.clearTypeahead()})},n.clearTypeahead=function(){setTimeout(function(){n.setState({typeahead:""})},500)},n.registerOptionRef=function(t,e){n.unregisterOptionRef(t),n.setState(function(n){return{optionRefs:[].concat(n.optionRefs,[[t,e]])}})},n.unregisterOptionRef=function(t){n.setState(function(e){return{optionRefs:e.optionRefs.filter(function(e){return e[0]!==t})}})},n.toggle=function(){n.state.isOpen?n.close():n.open()},n.open=function(){n.setState({isOpen:!0},function(){setTimeout(function(){n.state.listboxListRef&&(n.focus(n.props.value),setTimeout(function(){n.state.listboxListRef.focus()},5))},10)})},n.close=function(){n.setState({isOpen:!1},function(){n.state.listboxButtonRef.focus()})},n.select=function(t){n.props.onChange(t),setTimeout(function(){n.close()},5)},n.focus=function(t){n.setState({activeItem:t},function(){null!==t&&n.state.listboxListRef.children[n.state.values.indexOf(n.state.activeItem)].scrollIntoView({block:"nearest"})})},n.setListboxButtonRef=function(t){n.setState({listboxButtonRef:t})},n.setListboxListRef=function(t){n.setState({listboxListRef:t})},n.setButtonId=function(t){n.setState({buttonId:t})},n.setLabelId=function(t){n.setState({labelId:t})},n.setValues=function(t){n.setState({values:t})},n.setActiveItem=function(t){n.setState({activeItem:t})},n.state={typeahead:"",listboxButtonRef:null,listboxListRef:null,isOpen:!1,activeItem:n.props.value,values:null,labelId:null,buttonId:null,optionIds:[],optionRefs:[]},n}return s(e,t),e.prototype.render=function(){var t=this.props,e=t.children;return h(o.Provider,{value:{getActiveDescendant:this.getActiveDescendant,registerOptionId:this.registerOptionId,unregisterOptionId:this.unregisterOptionId,registerOptionRef:this.registerOptionRef,unregisterOptionRef:this.unregisterOptionRef,toggle:this.toggle,open:this.open,close:this.close,select:this.select,focus:this.focus,clearTypeahead:this.clearTypeahead,typeahead:this.state.typeahead,type:this.type,setListboxListRef:this.setListboxListRef,setListboxButtonRef:this.setListboxButtonRef,listboxButtonRef:this.state.listboxButtonRef,listboxListRef:this.state.listboxListRef,isOpen:this.state.isOpen,activeItem:this.state.activeItem,setActiveItem:this.setActiveItem,values:this.state.values,setValues:this.setValues,labelId:this.state.labelId,setLabelId:this.setLabelId,buttonId:this.state.buttonId,setButtonId:this.setButtonId,props:this.props}},h("div",{className:t.className},"function"==typeof e?e({isOpen:this.state.isOpen}):e))},e}(e.Component),a=0,r=function(){return"tailwind-ui-listbox-id-"+ ++a},c=function(t){function e(e){var n;return(n=t.call(this,e)||this).focus=function(){return n.setState({isFocused:!0})},n.blur=function(){return n.setState({isFocused:!1})},n.state={id:r(),isFocused:!1},n}s(e,t);var o=e.prototype;return o.componentDidMount=function(){this.context.setButtonId(this.state.id),this.context.setListboxButtonRef(this.ownRef)},o.render=function(){var t=this,e=this.props,s=e.children,o=this.state.isFocused;return h("button",n({"aria-haspopup":"listbox","aria-labelledby":this.context.labelId+" "+this.state.id,className:e.className,id:this.state.id,onBlur:this.blur,onClick:this.context.toggle,onFocus:this.focus,ref:function(e){return t.ownRef=e},type:"button"},this.context.isOpen?{"aria-expanded":"true"}:{}),"function"==typeof s?s({isFocused:o}):s)},e}(e.Component);c.contextType=o;var u=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={id:r()},n}s(e,t);var n=e.prototype;return n.componentDidMount=function(){this.context.setLabelId(this.state.id)},n.render=function(){var t=this.props;return h("span",{className:t.className,id:this.state.id},t.children)},e}(e.Component);u.contextType=o;var l=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleBlur=function(t){t.relatedTarget!==n.context.listboxButtonRef&&n.context.close()},n.handleKeydown=function(t){var e,s=n.state.values.indexOf(n.context.activeItem);switch(t.key){case"Esc":case"Escape":t.preventDefault(),n.context.close();break;case"Tab":t.preventDefault();break;case"Up":case"ArrowUp":t.preventDefault(),n.context.focus(n.state.values[s-1<0?n.state.values.length-1:s-1]);break;case"Down":case"ArrowDown":t.preventDefault(),n.context.focus(n.state.values[s+1>n.state.values.length-1?0:s+1]);break;case"Spacebar":case" ":t.preventDefault(),""!==n.context.typeahead?n.context.type(" "):n.context.select(n.context.activeItem||n.context.props);break;case"Enter":t.preventDefault(),n.context.select(n.context.activeItem||n.context.props);break;default:if(!("string"==typeof(e=t.key)||e instanceof String)||1!==t.key.length)return;return t.preventDefault(),void n.context.type(t.key)}},n.handleMouseLeave=function(){n.context.setActiveItem(null)},n.state={focusedIndex:null,values:null},n}s(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.context.setListboxListRef(this.ownRef);var e=this.props.children.map(function(t){return t.props.value});this.setState({values:e},function(){t.context.setValues(e)})},n.render=function(){var t=this,e=this.props,n=e.children,s=e.className;return h("ul",{"aria-activedescendant":this.context.getActiveDescendant(),"aria-labelledby":this.context.props.labelledby,className:s,onBlur:this.handleBlur,onKeyDown:this.handleKeydown,onMouseLeave:this.handleMouseLeave,ref:function(e){return t.ownRef=e},role:"listbox",tabIndex:-1},n)},e}(e.Component);l.contextType=o;var p=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleClick=function(){n.context.select(n.props.value)},n.handleMouseMove=function(){n.context.activeItem!==n.props.value&&n.context.setActiveItem(n.props.value)},n.state={id:r()},n}s(e,t);var o=e.prototype;return o.componentDidMount=function(){this.context.registerOptionRef(this.props.value,this.ownRef),this.context.registerOptionId(this.props.value,this.state.id)},o.componentWillUnmount=function(){this.context.unregisterOptionId(this.props.value),this.context.unregisterOptionRef(this.props.value)},o.render=function(){var t=this,e=this.props,s=e.children,o=this.context.activeItem===this.props.value,i=this.context.props.value===this.props.value;return h("li",n({className:e.className,id:this.state.id,onClick:this.handleClick,onMouseMove:this.handleMouseMove,ref:function(e){return t.ownRef=e},role:"option"},i?{"aria-selected":!0}:{}),"function"==typeof s?s({isSelected:i,isActive:o}):s)},e}(e.Component);p.contextType=o,exports.Listbox=i,exports.ListboxButton=c,exports.ListboxLabel=u,exports.ListboxList=l,exports.ListboxOption=p;
//# sourceMappingURL=react-listbox.js.map