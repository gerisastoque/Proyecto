(()=>{"use strict";var e,t,o,a,s,n;!function(e){e.accountSettings="accountSettings",e.changePassword="changePassword",e.signUp="SignUp",e.creatPostImage="creatPostImage",e.creatPostTweet="creatPostTweet",e.dashboard="dashboard",e.login="login",e.profilePost="profilePost",e.profileTweet="profileTweet"}(e||(e={})),(t||(t={})).NAVIGATE="NAVIGATE",(n=o||(o={})).ADD="ADD",n.GET="GET",(s=a||(a={})).ADD="ADD",s.GET="GET";let c=e.login,r=[];class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r=[...r,this]}connectedCallback(){this.render()}render(){var t,o,a,s,n;switch(this.shadowRoot&&(this.shadowRoot.innerHTML=""),c){case e.dashboard:const c=this.ownerDocument.createElement("dashboard-screen");null===(t=this.shadowRoot)||void 0===t||t.appendChild(c);break;case e.creatPostImage:const r=this.ownerDocument.createElement("app-creatPost");null===(o=this.shadowRoot)||void 0===o||o.appendChild(r);break;case e.creatPostTweet:const i=this.ownerDocument.createElement("app-creatTweet");null===(a=this.shadowRoot)||void 0===a||a.appendChild(i);break;case e.signUp:const d=this.ownerDocument.createElement("app-register");null===(s=this.shadowRoot)||void 0===s||s.appendChild(d);break;case e.login:const h=this.ownerDocument.createElement("app-login");null===(n=this.shadowRoot)||void 0===n||n.appendChild(h)}}}customElements.define("app-container",i)})();