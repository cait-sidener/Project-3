(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){e.exports=a(487)},198:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},206:function(e,t,a){},239:function(e,t,a){},468:function(e,t,a){},469:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(55),s=a.n(i),o=(a(198),a(23)),c=a.n(o),l=a(35),u=a(30),m=a(31),d=a(33),h=a(32),p=a(34),g=a(183),f=a(69),E=(a(201),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"lander"},r.a.createElement("h1",null,"Scratch"),r.a.createElement("p",null,"A simple note taking app")))}}]),t}(n.Component)),b=(a(202),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))}),v=a(77),O=function(e){var t=e.component,a=e.props,n=Object(v.a)(e,["component","props"]);return r.a.createElement(f.a,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},w=a(73),S=a(490),C=a(491),y=a(496),I=a(489),j=a(189),k=(a(206),function(e){var t=e.isLoading,a=e.text,n=e.loadingText,i=e.className,s=void 0===i?"":i,o=e.disabled,c=void 0!==o&&o,l=Object(v.a)(e,["isLoading","text","loadingText","className","disabled"]);return r.a.createElement(I.a,Object.assign({className:"LoaderButton ".concat(s),disabled:c||t},l),t&&r.a.createElement(j.a,{glyph:"refresh",className:"spinning"}),t?n:a)}),L=(a(239),a(27)),x=a.n(L),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,L.Auth.signIn(a.state.email,a.state.password);case 5:a.props.userHasAuthenticated(!0),a.props.history.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.a,{controlId:"email",bsSize:"large"},r.a.createElement(C.a,null,"Email"),r.a.createElement(y.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(S.a,{controlId:"password",bsSize:"large"},r.a.createElement(C.a,null,"Password"),r.a.createElement(y.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(k,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in\u2026"})))}}]),t}(n.Component),P=a(492),N=(a(468),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,L.Auth.signUp({username:a.state.email,password:a.state.password});case 5:n=e.sent,a.setState({newUser:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0.message);case 12:a.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a.handleConfirmationSubmit=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,L.Auth.confirmSignUp(a.state.email,a.state.confirmationCode);case 5:return e.next=7,L.Auth.signIn(a.state.email,a.state.password);case 7:a.props.userHasAuthenticated(!0),a.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:"",confirmPassword:"",confirmationCode:"",newUser:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"validateConfirmationForm",value:function(){return this.state.confirmationCode.length>0}},{key:"renderConfirmationForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},r.a.createElement(S.a,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(C.a,null,"Confirmation Code"),r.a.createElement(y.a,{autoFocus:!0,type:"tel",value:this.state.confirmationCode,onChange:this.handleChange}),r.a.createElement(P.a,null,"Please check your email for the code.")),r.a.createElement(k,{block:!0,bsSize:"large",disabled:!this.validateConfirmationForm(),type:"submit",isLoading:this.state.isLoading,text:"Verify",loadingText:"Verifying\u2026"}))}},{key:"renderForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.a,{controlId:"email",bsSize:"large"},r.a.createElement(C.a,null,"Email"),r.a.createElement(y.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(S.a,{controlId:"password",bsSize:"large"},r.a.createElement(C.a,null,"Password"),r.a.createElement(y.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(S.a,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(C.a,null,"Confirm Password"),r.a.createElement(y.a,{value:this.state.confirmPassword,onChange:this.handleChange,type:"password"})),r.a.createElement(k,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Signup",loadingText:"Signing up\u2026"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},null===this.state.newUser?this.renderForm():this.renderConfirmationForm())}}]),t}(n.Component)),T=function(e){var t=e.childProps;return r.a.createElement(g.a,null,r.a.createElement(O,{path:"/",exact:!0,component:E,props:t}),r.a.createElement(O,{path:"/login",exact:!0,component:A,props:t}),r.a.createElement(O,{path:"/signup",exact:!0,component:N,props:t}),r.a.createElement(f.a,{component:b}))},_=(a(469),a(56)),F=a(184),D=a(495),R=a(493),U=a(494),z=a(104);var H=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.Auth.signOut();case 2:a.userHasAuthenticated(!1),a.props.history.push("/login");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={isAuthenticated:!1,isAuthenticating:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.Auth.currentSession();case 3:this.userHasAuthenticated(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&alert(e.t0);case 9:this.setState({isAuthenticating:!1});case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App container"},r.a.createElement(D.a,{fluid:!0,collapseOnSelect:!0},r.a.createElement(D.a.Header,null,r.a.createElement(D.a.Brand,null,r.a.createElement(_.a,{to:"/"},"Scratch")),r.a.createElement(D.a.Toggle,null)),r.a.createElement(D.a.Collapse,null,r.a.createElement(R.a,{pullRight:!0},this.state.isAuthenticated?r.a.createElement(U.a,{onClick:this.handleLogout},"Logout"):r.a.createElement(n.Fragment,null,r.a.createElement(z.LinkContainer,{to:"/signup"},r.a.createElement(U.a,null,"Signup")),r.a.createElement(z.LinkContainer,{to:"/login"},r.a.createElement(U.a,null,"Login")))))),r.a.createElement(T,{childProps:e}))}}]),t}(n.Component),G=Object(F.a)(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(178),W={REGION:"us-east-2",BUCKET:"project3-app-uploads"},Y={REGION:"us-east-2",URL:"https://ly55wbovq4.execute-api.us-east-2.amazonaws.com/prod"},q={REGION:"us-east-2",USER_POOL_ID:"us-east-2_hPoOGEr2m",APP_CLIENT_ID:"2c7kfderc028kc64u2gv8du4qa",IDENTITY_POOL_ID:"us-east-2_hPoOGEr2m"};x.a.configure({Auth:{mandatorySignIn:!0,region:q.REGION,userPoolId:q.USER_POOL_ID,identityPoolId:q.IDENTITY_POOL_ID,userPoolWebClientId:q.APP_CLIENT_ID},Storage:{region:W.REGION,bucket:W.BUCKET,identityPoolId:q.IDENTITY_POOL_ID},API:{endpoints:[{name:"notes",endpoint:Y.URL,region:Y.REGION}]}}),s.a.render(r.a.createElement(B.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t){},94:function(e,t){}},[[193,1,2]]]);
//# sourceMappingURL=main.ababc060.chunk.js.map