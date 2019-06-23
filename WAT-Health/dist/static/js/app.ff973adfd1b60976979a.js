webpackJsonp([1],{"+ACC":function(t,a){},"65LY":function(t,a,s){t.exports=s.p+"static/img/img-01.091148f.png"},JIPV:function(t,a){},M9ae:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("gsu9")},null,null).exports,r=s("/ocq"),o=s("kxiW"),l=s.n(o),c={name:"Login",data:()=>({email:"",password:"",user:"",emotions:["Angry","Scared","Joyful","Sad","Curious","Confident","Tentative"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]}),methods:{signIn(){console.log(this.email),console.log(this.password),""!==this.email&&""!==this.password?(console.log("Trying to sign in."),l.a.auth().signInWithEmailAndPassword(this.email,this.password).then(t=>{t?(this.user=t.user,$("#exampleModal").modal("toggle")):console.log("Not Signed In.")}).catch(t=>{console.log(`There was an error ${t}`)})):console.log("Invalid Input")},setMood(t){let a=this.emotions.indexOf(t),s=[],e={};if(-1!==a){for(let t=0;t<this.emotions.length;t++)s.push(0);s[a]=1,e.values=s;let t=new Date;e.timestamp=t.getDate()+"/"+this.months[t.getMonth()]+"/"+t.getFullYear();let i=l.a.firestore();i.settings({timestampsInSnapshots:!0}),i.collection("Users").doc(this.user.uid).collection("Emotions").add(e).then(t=>{console.log("Data successfully saved to firebase: "+t),console.log(this.user.uid),this.$router.push(`dashboard/${this.user.uid}`)}).catch(t=>{console.log("ERROR SETTING DATA: "+t)})}else console.log("There was an error.");$("#exampleModal").modal("toggle")}},mounted(){}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login container"},[e("img",{staticClass:"mb-4",attrs:{src:s("65LY"),width:"200",height:"200"}}),t._v(" "),e("form",{staticClass:"form-signin"},[t._m(0),t._v(" "),e("br"),t._v(" "),e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),e("div",{staticClass:"checkbox mb-3"}),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:t.signIn}},[t._v("Sign in")])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered bd-example-modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content modal-lg"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"container-fluid"},[t._m(1),t._v(" "),e("div",{staticClass:"row justify-content-md-center"},t._l(t.emotions,function(a){return e("div",{staticClass:"col-md-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return t.setMood(a)}}},[t._v("\n                  "+t._s(a)+"\n                ")])])}),0)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"text-center"},[a("b",[this._v("WATHealth")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",[this._v("How would you describe your mood?")])])])}]};var v=s("VU/8")(c,d,!1,function(t){s("+ACC")},"data-v-04aea962",null).exports,u={name:"Chart",mounted(){let t=l.a.firestore();t.settings({timestampsInSnapshots:!0});let a={times:[],angerScores:[],fearScores:[],joyScores:[],sadnessScores:[],analyticalScores:[],confidentScores:[],tentativeScores:[]};t.collection("Users").doc("dummyDataUser").collection("Emotions").get().then(t=>{t.forEach(t=>{a.times.push(t.data().timePost),a.angerScores.push(t.data().values[0]),a.fearScores.push(t.data().values[1]),a.joyScores.push(t.data().values[2]),a.sadnessScores.push(t.data().values[3]),a.analyticalScores.push(t.data().values[4]),a.confidentScores.push(t.data().values[5]),a.tentativeScores.push(t.data().values[6])})}).then(()=>{var t=document.getElementById("myChart");new Chart(t,{type:"line",data:{labels:a.times,datasets:[{data:a.angerScores,label:"Anger",borderColor:"#FF3105",fill:!1},{data:a.fearScores,label:"Fear",borderColor:"#05A8FF",fill:!1},{data:a.joyScores,label:"Joy",borderColor:"#FFA005",fill:!1},{data:a.sadnessScores,label:"Sadness",borderColor:"#BF05FF",fill:!1},{data:a.analyticalScores,label:"Analytical",borderColor:"#05FFB7",fill:!1},{data:a.confidentScores,label:"Confident",borderColor:"#263F27",fill:!1},{data:a.tentativeScores,label:"Tentative",borderColor:"#EA97E6",borderDash:[5,5],fill:!1}]},options:{responsive:!1,title:{display:!0,text:"User Emotions Over Time"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Percentage of Post Containing Emotion"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Post Date"}}]}}})}).catch(function(t){console.log("Error getting documents: ",t)}),console.log("I AM HERE !!!!!!")}},p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("canvas",{attrs:{id:"myChart"}})])])])}]};var h=s("VU/8")(u,p,!1,function(t){s("JIPV")},"data-v-b952ac10",null).exports,m={name:"Ask",data:()=>({content:""}),methods:{ask(){if(""!==this.content){let t=l.a.firestore();t.settings({timestampsInSnapshots:!1});let a={};a.Title=this.content.substr(0,this.content.indexOf(" "))||"LOL",a.comment=this.content,a.User=Math.floor(200*Math.random()),console.log(a),t.collection("Posts").add(a).then(t=>{console.log("Successs: "+t)}).catch(t=>{console.log(t)})}else console.log("Invalid Input")}}},f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{placeholder:"Enter Question",rows:"5"},domProps:{value:t.content},on:{input:function(a){a.target.composing||(t.content=a.target.value)}}}),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn-primary btn-lg",attrs:{type:"button"},on:{click:t.ask}},[t._v(" Ask Now!")])]),t._v(" "),s("br"),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn-warning btn-lg",attrs:{type:"button"}},[this._v(" Ask a Doctor!")])])}]};var _=s("VU/8")(m,f,!1,function(t){s("rOJ4")},"data-v-9fe1f346",null).exports,C={name:"Dashboard",components:{Chart:h,Ask:_},created(){this.id=this.$route.params.id},data:()=>({id:"000000"}),methods:{getBuddy(){this.$router.push("../buddy/"+this.id)}}},b={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"font-family":"'Permanent Marker', cursive"},attrs:{id:"page-top"}},[t._m(0),t._v(" "),s("div",{attrs:{id:"wrapper"}},[s("ul",{staticClass:"sidebar navbar-nav"},[t._m(1),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",on:{click:function(a){return t.$router.push("../Newsfeed/"+t.id)}}},[s("i",{staticClass:"fas fa-fw fa-question"}),t._v(" "),s("span",[t._v("Questions")])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",on:{click:t.getBuddy}},[s("i",{staticClass:"fas fa-user-friends"}),t._v(" "),s("span",[t._v(" Get a buddy")])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("h1",{staticClass:"text-center"},[t._v("User Dashboard - Analytics")]),t._v(" "),s("hr"),t._v(" "),s("chart"),t._v(" "),t._m(4),t._v(" "),s("Ask"),t._v(" "),t._m(5)],1)]),t._v(" "),t._m(6)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark static-top"},[a("button",{staticClass:"btn btn-link btn-sm text-white order-1 order-sm-0",attrs:{id:"sidebarToggle",href:"#"}},[a("i",[a("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:s("65LY")}})]),this._v(" "),a("a",{staticClass:"navbar-brand mr-1",attrs:{href:"#"}},[this._v("WATHealth")])]),this._v(" "),a("form",{staticClass:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon2"}}),this._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-search"})])])])]),this._v(" "),a("ul",{staticClass:"navbar-nav navbar-right ml-auto ml-md-0"},[a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-user-circle fa-fw"})])]),this._v(" "),a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-sign-out-alt"})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"pagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-fw fa-exclamation-circle"}),t._v(" "),s("span",[t._v("Resources")])]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"pagesDropdown"}},[s("h6",{staticClass:"dropdown-header"},[t._v("Helplines")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://ontario.cmha.ca/documents/are-you-in-crisis/",target:"_blank"}},[t._v("CMHA\n            Ontario")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://uwaterloo.ca/campus-wellness/health-services",target:"_blank"}},[t._v("UW\n            Health Services")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://uwaterloo.ca/campus-wellness/counselling-services",target:"_blank"}},[t._v("UW\n            Counselling")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("h6",{staticClass:"dropdown-header"},[t._v("More Resources")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://www.mentalhealthcommission.ca/English/resources",target:"_blank"}},[t._v("Mental\n            Health 🍁")]),t._v(" "),s("a",{staticClass:"dropdown-item active",attrs:{href:"https://www.healthlinkbc.ca/mental-health-substance-use/resources"}},[t._v("Other\n            Resources")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-fw fa-phone"}),this._v(" "),a("span",[this._v(" Contact Us")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-fw fa-stethoscope"}),this._v(" "),a("span",[this._v(" Contact a professional")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container-fluid text-center"},[a("p",[this._v("Charts, take a survey, Diary/Journal...")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fixed",staticStyle:{"font-family":"'Roboto Slab', serif"}},[a("a",{staticClass:"nope",attrs:{href:"https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html"}},[this._v("Get\n          Help!")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container my-auto"},[a("div",{staticClass:"copyright text-center my-auto"},[a("span",[this._v("© WATHealth 2019")])])])])}]};var g=s("VU/8")(C,b,!1,function(t){s("xGg/")},"data-v-32f769c3",null).exports,w={name:"buddy",components:{},created(){this.id=this.$route.params.id},data:()=>({id:"000000"})},y={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"font-family":"'Permanent Marker', cursive"},attrs:{id:"page-top"}},[s("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark static-top"},[s("button",{staticClass:"btn btn-link btn-sm text-white order-1 order-sm-0",attrs:{id:"sidebarToggle",href:"#"}},[t._m(0),t._v(" "),s("a",{staticClass:"navbar-brand mr-1",on:{click:function(a){return t.$router.push("../dashboard/"+t.id)}}},[t._v("WATHealth")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("i",[a("img",{staticStyle:{width:"35px",height:"35px"},attrs:{alt:"user",src:s("65LY")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon2"}}),this._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-search"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"navbar-nav navbar-right ml-auto ml-md-0"},[a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-user-circle fa-fw"})])]),this._v(" "),a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-sign-out-alt"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"wrapper"}},[e("ul",{staticClass:"sidebar navbar-nav"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"pagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-fw fa-exclamation-circle"}),t._v(" "),e("span",[t._v("Resources")])]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"pagesDropdown"}},[e("h6",{staticClass:"dropdown-header"},[t._v("Helplines")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"https://ontario.cmha.ca/documents/are-you-in-crisis/",target:"_blank"}},[t._v("CMHA Ontario")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"https://uwaterloo.ca/campus-wellness/health-services",target:"_blank"}},[t._v("UW Health Services")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"https://uwaterloo.ca/campus-wellness/counselling-services",target:"_blank"}},[t._v("UW Counselling")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("h6",{staticClass:"dropdown-header"},[t._v("More Resources")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"https://www.mentalhealthcommission.ca/English/resources",target:"_blank"}},[t._v("Mental Health 🍁")]),t._v(" "),e("a",{staticClass:"dropdown-item active",attrs:{href:"https://www.healthlinkbc.ca/mental-health-substance-use/resources"}},[t._v("Other Resources")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-fw fa-question"}),t._v(" "),e("span",[t._v("Questions")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-fw fa-phone"}),t._v(" "),e("span",[t._v(" Contact Us")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-fw fa-stethoscope"}),t._v(" "),e("span",[t._v(" Contact a professional")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"newsfeed.html"}},[e("i",{staticClass:"fas fa-user-friends"}),t._v(" "),e("span",[t._v(" NewsFeed")])])])]),t._v(" "),e("div",{attrs:{id:"content-wrapper"}},[e("div",{staticClass:"container-fluid"},[e("h1",{staticClass:"text-center"},[t._v("Find a Buddy!")]),t._v(" "),e("hr"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container-fluid text-center"},[e("p",[t._v("Looking for a Buddy or a partner to talk? Sign up here!")]),t._v(" "),e("p",[t._v("Find a partner who's signed up for the service as well and is willing to talk")]),t._v(" "),e("p",[t._v("Your assigned partner is "),e("b",[t._v("John Doe")])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"user"},[e("img",{staticClass:"user",staticStyle:{height:"20%",width:"20%"},attrs:{src:s("65LY"),alt:"Avatar"}})]),t._v(" "),e("div",{staticClass:"container"},[e("h4",[e("b",[t._v("John Doe")])]),t._v(" "),e("p",[t._v("johndoe@starterhacks.ca")])])]),t._v(" "),e("div",{staticClass:"fixed",staticStyle:{"font-family":"'Roboto Slab', serif",color:"#fff"}},[e("a",{staticClass:"nope",attrs:{href:"https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html"}},[t._v("Get Help!")])])]),t._v(" "),e("footer",{staticClass:"sticky-footer"},[e("div",{staticClass:"container my-auto"},[e("div",{staticClass:"copyright text-center my-auto"},[e("span",[t._v("© WATHealth 2019")])])])])])])])}]};var k=s("VU/8")(w,y,!1,function(t){s("M9ae")},"data-v-3dd4faac",null).exports,x={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"font-family":"'Comic Sans MS'"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n      "+t._s(t.data.title)+"\n    ")]),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.data.id))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(t.data.body))]),t._v(" "),s("button",{staticClass:"btn btn-warning"},[t._v("View")]),t._v(" "),s("button",{staticClass:"btn btn-success"},[t._v("Upvote")]),t._v(" "),s("button",{staticClass:"btn btn-danger"},[t._v("Downvote")]),t._v(" "),s("button",{staticClass:"btn btn-primary"},[t._v("Reply")])])])])},staticRenderFns:[]};var S={name:"Newsfeed",components:{Ask:_,Post:s("VU/8")({name:"Post",props:["data"]},x,!1,function(t){s("jIh3")},"data-v-57ab1fda",null).exports},created(){this.id=this.$route.params.id,l.a.firestore().collection("Posts").get().then(t=>{t.forEach(t=>{let a=t.data();this.posts.push({title:a.Title,body:a.comment,id:a.user})})}).catch(t=>{console.log(t)})},data:()=>({id:"0000",posts:[]})},E={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"font-family":"'Permanent Marker', cursive"},attrs:{id:"page-top"}},[s("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark static-top"},[s("button",{staticClass:"btn btn-link btn-sm text-white order-1 order-sm-0",attrs:{id:"sidebarToggle",href:"#"}},[t._m(0),t._v(" "),s("a",{staticClass:"navbar-brand mr-1",attrs:{href:"#"},on:{click:function(a){return t.$router.push("../dashboard/"+t.id)}}},[t._v("WATHealth")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),s("div",{attrs:{id:"wrapper"}},[s("ul",{staticClass:"sidebar navbar-nav"},[t._m(3),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",on:{click:function(a){return t.$router.push("../Newsfeed/"+t.id)}}},[s("i",{staticClass:"fas fa-fw fa-question"}),t._v(" "),s("span",[t._v("Questions")])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",on:{click:function(a){return t.$router.push("../buddy/"+t.id)}}},[s("i",{staticClass:"fas fa-user-friends"}),t._v(" "),s("span",[t._v(" Get a buddy")])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("Ask",{staticStyle:{"padding-top":"50px"}}),t._v(" "),s("div",{staticClass:"row"},t._l(t.posts,function(t){return s("Post",{staticClass:"col",attrs:{data:t}})}),1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("i",[a("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:s("65LY")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon2"}}),this._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-search"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"navbar-nav navbar-right ml-auto ml-md-0"},[a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-user-circle fa-fw"})])]),this._v(" "),a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-sign-out-alt"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"pagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-fw fa-exclamation-circle"}),t._v(" "),s("span",[t._v("Resources")])]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"pagesDropdown"}},[s("h6",{staticClass:"dropdown-header"},[t._v("Helplines")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://ontario.cmha.ca/documents/are-you-in-crisis/",target:"_blank"}},[t._v("CMHA\n            Ontario")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://uwaterloo.ca/campus-wellness/health-services",target:"_blank"}},[t._v("UW\n            Health Services")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://uwaterloo.ca/campus-wellness/counselling-services",target:"_blank"}},[t._v("UW\n            Counselling")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("h6",{staticClass:"dropdown-header"},[t._v("More Resources")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"https://www.mentalhealthcommission.ca/English/resources",target:"_blank"}},[t._v("Mental\n            Health 🍁")]),t._v(" "),s("a",{staticClass:"dropdown-item active",attrs:{href:"https://www.healthlinkbc.ca/mental-health-substance-use/resources"}},[t._v("Other\n            Resources")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-fw fa-phone"}),this._v(" "),a("span",[this._v(" Contact Us")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-fw fa-stethoscope"}),this._v(" "),a("span",[this._v(" Contact a professional")])])])}]};var A=s("VU/8")(S,E,!1,function(t){s("f4wh")},"data-v-cf09c298",null).exports;e.a.use(r.a);var M=new r.a({routes:[{path:"/",name:"Login",component:v},{path:"/dashboard/:id",name:"Dashboard",component:g},{path:"/buddy/:id",name:"buddy",component:k},{path:"/newsfeed/:id",name:"Newsfeed",component:A}]});e.a.config.productionTip=!1;l.a.initializeApp({apiKey:"AIzaSyDll8W-fibwM_jClufRiqCsRlGeA7Dl9pw",authDomain:"wat-health.firebaseapp.com",databaseURL:"https://wat-health.firebaseio.com",projectId:"wat-health",storageBucket:"wat-health.appspot.com",messagingSenderId:"423883429632",appId:"1:423883429632:web:995d41f227e30a8a"}),new e.a({el:"#app",router:M,components:{App:n},template:"<App/>"})},f4wh:function(t,a){},gsu9:function(t,a){},jIh3:function(t,a){},rOJ4:function(t,a){},"xGg/":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.ff973adfd1b60976979a.js.map