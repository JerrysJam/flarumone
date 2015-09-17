!function(){function t(t,o){var i=document.createElement("div");i.id="input-textarea-caret-position-mirror-div",document.body.appendChild(i);var r=i.style,s=window.getComputedStyle?getComputedStyle(t):t.currentStyle;r.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(r.wordWrap="break-word"),r.position="absolute",r.visibility="hidden",e.forEach(function(t){r[t]=s[t]}),n?t.scrollHeight>parseInt(s.height)&&(r.overflowY="scroll"):r.overflow="hidden",i.textContent=t.value.substring(0,o),"INPUT"===t.nodeName&&(i.textContent=i.textContent.replace(/\s/g," "));var u=document.createElement("span");u.textContent=t.value.substring(o)||".",i.appendChild(u);var a={top:u.offsetTop+parseInt(s.borderTopWidth),left:u.offsetLeft+parseInt(s.borderLeftWidth)};return document.body.removeChild(i),a}var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=null!=window.mozInnerScreenX;"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t:window.getCaretCoordinates=t}(),System.register("mentions/addComposerAutocomplete",["flarum/extend","flarum/components/ComposerBody","flarum/helpers/avatar","flarum/helpers/username","flarum/helpers/highlight","flarum/utils/string","mentions/components/AutocompleteDropdown"],function(t){"use strict";function e(){n(o.prototype,"config",function(t,e){if(!e){var n=this,o=$('<div class="ComposerBody-mentionsDropdownContainer"></div>'),c=new a({items:[]}),f=this.$("textarea"),l=[],p=void 0,d=void 0,h=void 0,v=function(t){var e=t+" ",o=n.content();n.editor.setValue(o.substring(0,p-1)+e+o.substr(f[0].selectionStart));var i=p-1+e.length;n.editor.setSelectionRange(i,i),c.hide()};f.after(o).on("keydown",c.navigate.bind(c)).on("click keyup",function(t){var e=this;if(-1===[9,13,27,40,38,37,39].indexOf(t.which)){var a=this.selectionStart;if(!(this.selectionEnd-a>0)){var f=this.value;p=0;for(var y=a-1;y>=0;y--){var g=f.substr(y,1);if(/\s/.test(g))break;if("@"===g){p=y+1;break}}c.hide(),c.active=!1,p&&!function(){d=f.substring(p,a).toLowerCase();var t=function(t,e,n){var o=arguments.length<=3||void 0===arguments[3]?"":arguments[3],u=r(t);return d&&(u.children[0]=s(u.children[0],d)),m("button",{className:"PostPreview "+o,onclick:function(){return v(e)},onmouseenter:function(){c.setIndex($(this).parent().index())}},m("span",{className:"PostPreview-content"},i(t),u," ",n))},y=function(){var i=[],r=n.props.post,s=r&&r.discussion()||n.props.discussion;if(s&&s.posts().filter(function(t){return t&&"comment"===t.contentType()&&(!r||t.number()<r.number())}).sort(function(t,e){return e.time()-t.time()}).filter(function(t){var e=t.user();return e&&e.username().toLowerCase().substr(0,d.length)===d}).splice(0,5).forEach(function(e){var n=e.user();i.push(t(n,"@"+n.username()+"#"+e.id(),[app.trans("mentions.reply_to_post",{number:e.number()})," — ",u(e.contentPlain(),200)],"MentionsDropdown-post"))}),d&&app.store.all("users").forEach(function(e){e.username().toLowerCase().substr(0,d.length)===d&&i.push(t(e,"@"+e.username(),"","MentionsDropdown-user"))}),i.length){c.props.items=i,m.render(o[0],c.render()),c.show();var a=getCaretCoordinates(e,p),f=c.$().outerWidth(),l=c.$().outerHeight(),h=c.$().offsetParent(),v=a.left,y=a.top+15;y+l>h.height()&&(y=a.top-l-15),v+f>h.width()&&(v=h.width()-f),c.show(v,y)}};y(),c.setIndex(0),c.$().scrollTop(0),c.active=!0,clearTimeout(h),d&&(h=setTimeout(function(){var t=d.toLowerCase();-1===l.indexOf(t)&&(app.store.find("users",{q:d,page:{limit:5}}).then(function(){c.active&&y()}),l.push(t))},250))}()}}})}})}var n,o,i,r,s,u,a;return t("default",e),{setters:[function(t){n=t.extend},function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]},function(t){s=t["default"]},function(t){u=t.truncate},function(t){a=t["default"]}],execute:function(){}}}),System.register("mentions/addMentionedByList",["flarum/extend","flarum/Model","flarum/models/Post","flarum/components/CommentPost","flarum/components/PostPreview","flarum/helpers/punctuate","flarum/helpers/username","flarum/helpers/icon"],function(t){"use strict";function e(){i.prototype.mentionedBy=o.hasMany("mentionedBy"),n(r.prototype,"footerItems",function(t){var e=this,n=this.props.post,o=n.mentionedBy();if(o&&o.length){var i=function(){if(1===o.length&&o[0].number()===n.number()+1)return{v:void 0};var i=function(){e.$(".Post-mentionedBy-preview").removeClass("in").one("transitionend",function(){$(this).hide()})},r=function(t,e){if(!e){var n=$(t),r=void 0,u=$('<ul class="Dropdown-menu Post-mentionedBy-preview fade"/>');n.append(u),n.children().hover(function(){clearTimeout(r),r=setTimeout(function(){(u.hasClass("in")||!u.is(":visible"))&&(m.render(u[0],o.map(function(t){return m("li",{"data-number":t.number()},s.component({post:t,onclick:i}))})),u.show(),setTimeout(function(){return u.off("transitionend").addClass("in")}))},500)},function(){clearTimeout(r),r=setTimeout(i,250)}),n.find(".Post-mentionedBy-summary a").hover(function(){u.find('[data-number="'+$(this).data("number")+'"]').addClass("active")},function(){u.find("[data-number]").removeClass("active")})}},f=[],l=o.filter(function(t){var e=t.user(),n=e&&e.id();return-1===f.indexOf(n)?(f.push(n),!0):void 0}),p=l.sort(function(t){return t===app.session.user?-1:1}).map(function(t){var e=t.user();return m("a",{href:app.route.post(t),config:m.route,onclick:i,"data-number":t.number()},app.session.user===e?app.trans("mentions.you"):a(e))});t.add("replies",m("div",{className:"Post-mentionedBy",config:r},m("span",{className:"Post-mentionedBy-summary"},c("reply"),app.trans("mentions.post_mentioned_by",{count:p.length,users:u(p)}))))}();if("object"==typeof i)return i.v}})}var n,o,i,r,s,u,a,c;return t("default",e),{setters:[function(t){n=t.extend},function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]},function(t){s=t["default"]},function(t){u=t["default"]},function(t){a=t["default"]},function(t){c=t["default"]}],execute:function(){}}}),System.register("mentions/addPostMentionPreviews",["flarum/extend","flarum/components/CommentPost","flarum/components/PostPreview","flarum/components/LoadingIndicator"],function(t){"use strict";function e(){n(o.prototype,"config",function(){var t=this.props.post.contentHtml();if(t!==this.oldPostContentHtml&&!this.isEditing()){this.oldPostContentHtml=t;var e=this.props.post,n=this.$();this.$(".UserMention, .PostMention").each(function(){m.route.call(this,this,!1,{},{attrs:{href:this.getAttribute("href")}})}),this.$(".PostMention").each(function(){var t=$(this),o=t.data("id"),s=void 0,u=$('<ul class="Dropdown-menu PostMention-preview fade"/>');n.append(u);var a=function(){return $('.PostStream-item[data-id="'+o+'"]')},c=function(){var s=a(),c=!1;if(s.length){var f=s.offset().top,l=window.pageYOffset;f>l&&f+s.height()<l+$(window).height()&&(s.addClass("pulsate"),c=!0)}c||!function(){var s=function(){u.show().css("top",t.offset().top-n.offset().top-u.outerHeight(!0)).css("left",t.offsetParent().offset().left-n.offset().left).css("max-width",t.offsetParent().width())},a=function(t){var n=t.discussion();m.render(u[0],[n!==e.discussion()?m("li",null,m("span",{className:"PostMention-preview-discussion"},n.title())):"",m("li",null,i.component({post:t}))]),s()},c=app.store.getById("posts",o);c&&c.discussion()?a(c):(m.render(u[0],r.component()),app.store.find("posts",o).then(a),s()),setTimeout(function(){return u.off("transitionend").addClass("in")})}()},f=function(){a().removeClass("pulsate"),u.hasClass("in")&&u.removeClass("in").one("transitionend",function(){return u.hide()})};t.on("touchstart",function(t){return t.preventDefault()}),t.add(u).hover(function(){clearTimeout(s),s=setTimeout(c,250)},function(){clearTimeout(s),a().removeClass("pulsate"),s=setTimeout(f,250)}).on("touchend",function(t){c(),t.stopPropagation()}),$(document).on("touchend",f)})}})}var n,o,i,r;return t("default",e),{setters:[function(t){n=t.extend},function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]}],execute:function(){}}}),System.register("mentions/addPostReplyAction",["flarum/extend","flarum/components/Button","flarum/components/CommentPost","flarum/utils/DiscussionControls"],function(t){"use strict";var e,n,o,i;return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){o=t["default"]},function(t){i=t["default"]}],execute:function(){t("default",function(){e(o.prototype,"actionItems",function(t){function e(t,e){var n="@"+o.user().username()+"#"+o.id()+" ";t.content()||(t.props.originalContent=n),t.editor.insertAtCursor((t.editor.getSelectionRange()[0]>0?"\n\n":"")+(e?"> "+n+e.trim().replace(/\n/g,"\n> ")+"\n\n":n))}var o=this.props.post;o.isHidden()||app.session.user&&!o.discussion().canReply()||t.add("reply",n.component({className:"Button Button--link",children:app.trans("mentions.reply_link"),onclick:function(){var t=window.getSelection().toString(),n=app.composer.component;n&&n.props.post&&n.props.post.discussion()===o.discussion()?e(n,t):i.replyAction.call(o.discussion()).then(function(n){return e(n,t)})}}))})})}}}),System.register("mentions/main",["flarum/extend","flarum/app","flarum/components/NotificationGrid","flarum/utils/string","mentions/addPostMentionPreviews","mentions/addMentionedByList","mentions/addPostReplyAction","mentions/addComposerAutocomplete","mentions/components/PostMentionedNotification","mentions/components/UserMentionedNotification"],function(t){"use strict";var e,n,o,i,r,s,u,a,c,f;return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){o=t["default"]},function(t){i=t.getPlainContent},function(t){r=t["default"]},function(t){s=t["default"]},function(t){u=t["default"]},function(t){a=t["default"]},function(t){c=t["default"]},function(t){f=t["default"]}],execute:function(){n.initializers.add("mentions",function(){r(),s(),u(),a(),n.notificationComponents.postMentioned=c,n.notificationComponents.userMentioned=f,e(o.prototype,"notificationTypes",function(t){t.add("postMentioned",{name:"postMentioned",icon:"reply",label:n.trans("mentions.notify_post_mentioned")}),t.add("userMentioned",{name:"userMentioned",icon:"at",label:n.trans("mentions.notify_user_mentioned")})}),i.removeSelectors.push("a.PostMention")})}}}),System.register("mentions/components/AutocompleteDropdown",["flarum/Component"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o,i,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=function(t,e,n){for(var o=!0;o;){var i=t,r=e,s=n;u=c=a=void 0,o=!1,null===i&&(i=Function.prototype);var u=Object.getOwnPropertyDescriptor(i,r);if(void 0!==u){if("value"in u)return u.value;var a=u.get;return void 0===a?void 0:a.call(s)}var c=Object.getPrototypeOf(i);if(null===c)return void 0;t=c,e=r,n=s,o=!0}};return{setters:[function(t){o=t["default"]}],execute:function(){i=function(t){function o(){e(this,o);for(var t=arguments.length,n=Array(t),i=0;t>i;i++)n[i]=arguments[i];s(Object.getPrototypeOf(o.prototype),"constructor",this).apply(this,n),this.active=!1,this.index=0,this.keyWasJustPressed=!1}return n(o,t),r(o,[{key:"view",value:function(){return m("ul",{className:"Dropdown-menu MentionsDropdown"},this.props.items.map(function(t){return m("li",null,t)}))}},{key:"show",value:function(t,e){this.$().show().css({left:t+"px",top:e+"px"}),this.active=!0}},{key:"hide",value:function(){this.$().hide(),this.active=!1}},{key:"navigate",value:function(t){var e=this;if(this.active)switch(t.which){case 40:case 38:this.keyWasJustPressed=!0,this.setIndex(this.index+(40===t.which?1:-1),!0),clearTimeout(this.keyWasJustPressedTimeout),this.keyWasJustPressedTimeout=setTimeout(function(){return e.keyWasJustPressed=!1},500),t.preventDefault();break;case 13:case 9:this.$("li").eq(this.index).find("button").click(),t.preventDefault();break;case 27:this.hide(),t.stopPropagation(),t.preventDefault()}}},{key:"setIndex",value:function(t,e){if(!this.keyWasJustPressed||e){var n=this.$(),o=n.find("li"),i=t;0>i?i=o.length-1:i>=o.length&&(i=0),this.index=i;var r=o.removeClass("active").eq(i).addClass("active");if(e){var s=n.scrollTop(),u=n.offset().top,a=u+n.outerHeight(),c=r.offset().top,f=c+r.outerHeight(),l=void 0;u>c?l=s-u+c-parseInt(n.css("padding-top"),10):f>a&&(l=s-a+f+parseInt(n.css("padding-bottom"),10)),"undefined"!=typeof l&&n.stop(!0).animate({scrollTop:l},100)}}}}]),o}(o),t("default",i)}}}),System.register("mentions/components/PostMentionedNotification",["flarum/components/Notification","flarum/helpers/username","flarum/helpers/punctuate"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o,i,r,s,u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(t,e,n){for(var o=!0;o;){var i=t,r=e,s=n;u=c=a=void 0,o=!1,null===i&&(i=Function.prototype);var u=Object.getOwnPropertyDescriptor(i,r);if(void 0!==u){if("value"in u)return u.value;var a=u.get;return void 0===a?void 0:a.call(s)}var c=Object.getPrototypeOf(i);if(null===c)return void 0;t=c,e=r,n=s,o=!0}};return{setters:[function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]}],execute:function(){s=function(t){function o(){e(this,o),a(Object.getPrototypeOf(o.prototype),"constructor",this).apply(this,arguments)}return n(o,t),u(o,[{key:"icon",value:function(){return"reply"}},{key:"href",value:function(){var t=this.props.notification,e=t.subject(),n=t.additionalUnreadCount(),o=t.content();return app.route.discussion(e.discussion(),n?e.number():o&&o.replyNumber)}},{key:"content",value:function(){var t=this.props.notification,e=t.additionalUnreadCount(),n=t.sender();return app.trans("mentions.post_mentioned_notification",{user:n,username:e?r([i(n),app.trans("mentions.others",{count:e})]):void 0})}},{key:"excerpt",value:function(){return this.props.notification.subject().contentPlain()}}]),o}(o),t("default",s)}}}),System.register("mentions/components/UserMentionedNotification",["flarum/components/Notification"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o,i,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=function(t,e,n){for(var o=!0;o;){var i=t,r=e,s=n;u=c=a=void 0,o=!1,null===i&&(i=Function.prototype);var u=Object.getOwnPropertyDescriptor(i,r);if(void 0!==u){if("value"in u)return u.value;var a=u.get;return void 0===a?void 0:a.call(s)}var c=Object.getPrototypeOf(i);if(null===c)return void 0;t=c,e=r,n=s,o=!0}};return{setters:[function(t){o=t["default"]}],execute:function(){i=function(t){function o(){e(this,o),s(Object.getPrototypeOf(o.prototype),"constructor",this).apply(this,arguments)}return n(o,t),r(o,[{key:"icon",value:function(){return"at"}},{key:"href",value:function(){var t=this.props.notification.subject();return app.route.discussion(t.discussion(),t.number())}},{key:"content",value:function(){var t=this.props.notification.sender();return app.trans("mentions.user_mentioned_notification",{user:t})}},{key:"excerpt",value:function(){return this.props.notification.subject().contentPlain()}}]),o}(o),t("default",i)}}});