(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{4:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/profile-picture.f7160fc8.jpg"},46:function(e){e.exports=JSON.parse('{"title":"Software developer","email":"Email","mobilePhone":"Mobile phone","summary":"Summary","workExperience":"Work experience","description":"Description","technologieUsed":"Technologies used","skills":"Skills","geomatics":"Geomatics","programming":"Programming","framework":"Framework","tools":"Tools","languages":"Languages","education":"Education","events":"Events","credit":"Resume template designed by","export":"Export Resume","present":"Present"}')},47:function(e){e.exports=JSON.parse('{"title":"D\xe9veloppeur logiciel","email":"Courriel","mobilePhone":"T\xe9l\xe9phone mobile","summary":"Sommaire","workExperience":"Exp\xe9rience de travail","description":"Description","technologieUsed":"Technologies utilis\xe9es","skills":"Comp\xe9tences","geomatics":"G\xe9omatique","programming":"Programmation","framework":"Librairie","tools":"Outils","languages":"langues","education":"\xc9ducation","events":"\xc9v\xe9nements","credit":"Le design du CV est con\xe7u par","export":"Exporter CV","present":"Pr\xe9sent"}')},54:function(e,t,a){e.exports=a(70)},60:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(16),s=a.n(i),c=(a(4),a(22)),l=a.n(c),o=a(31),m=a(17),u=a(24),d=a(49),g=a(50),p=(a(60),a(88)),E=function(){var e=Object(p.a)().t;return r.a.createElement("footer",{className:"footer text-center pt-2 pb-5"},r.a.createElement("small",{className:"copyright"},e("credit")+" ",r.a.createElement("a",{href:"http://themes.3rdwavemedia.com",target:"_blank",rel:"noopener noreferrer"},"Xiaoying Riley")))},f=a(87),h=function(e){return r.a.createElement(f.a,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:"10px",right:"50px",backgroundColor:"#22A162"},onClick:e.changeLanguage},e.language)},b=a(43),v=function(e){var t=Object(p.a)().t;return r.a.createElement(f.a,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:"10px",left:"50px",backgroundColor:"#22A162"}},r.a.createElement("a",{href:e.pdfURL,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{size:"2em",style:{color:"white"},title:t("export")})))},N=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,[{key:"createGeneralInformation",value:function(e){return e||{address:"",city:"",email:"",firstName:"",githubURL:"",lastName:"",mobilePhone:"",postalCode:"",province:""}}},{key:"createSkills",value:function(e){return e||{languages:[],technical:{office:[],computerScience:{frameworks:[],programmingLanguages:[],tools:[]},geomatics:{CAD:[],GIS:[],other:[]}}}}},{key:"initializeResume",value:function(){return{educations:[],generalInformation:this.createGeneralInformation(),events:[],skills:this.createSkills(),workingExperiences:[],summary:"",PDF:""}}},{key:"createResume",value:function(e){return{educations:e.education?e.education:[],generalInformation:this.createGeneralInformation(e.generalInformation),events:e.events?e.events:[],skills:this.createSkills(e.skills),workingExperiences:e.workingExperiences?e.workingExperiences:[],summary:e.summary?e.summary:"",PDF:e.PDF?e.PDF:""}}}]),e}(),k=function(e){var t=Object(p.a)().t;return r.a.createElement("section",{className:"resume-section summary-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("summary")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("p",null,e.summary)))},w=function(e){var t=Object(p.a)().t,a=e.description.map((function(e,t){return r.a.createElement("li",{key:t},e)})),n=e.stacks.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-inline-item"},r.a.createElement("span",{className:"badge badge-primary badge-pill"},e))}));return r.a.createElement("div",{className:"resume-timeline-item-desc"},r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("description")),r.a.createElement("ul",null,a),r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("technologieUsed")),r.a.createElement("ul",{className:"list-inline"},n))};var y=function(e){var t,a,n,i,s,c=Object(p.a)().t;return r.a.createElement("div",{className:"resume-timeline-item-header mb-2"},r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},r.a.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),r.a.createElement("div",{className:"resume-company-name ml-auto"},e.compagny+", "+e.city)),r.a.createElement("div",{className:"resume-position-time"},(t=c("present"),a=e.startMonth,n=e.startYear,i=e.endMonth,s=e.endYear,i&&s?"".concat(a," ").concat(n," - ").concat(i," ").concat(s):"".concat(a," ").concat(n," - ").concat(t))))},x=function(e){return r.a.createElement("article",{className:"resume-timeline-item position-relative pb-5"},r.a.createElement(y,{title:e.workingExperience.title,compagny:e.workingExperience.compagny,city:e.workingExperience.city,startMonth:e.workingExperience.startMonth,startYear:e.workingExperience.startYear,endMonth:e.workingExperience.endMonth,endYear:e.workingExperience.endYear}),r.a.createElement(w,{description:e.workingExperience.description,stacks:e.workingExperience.Stacks}))},O=function(e){var t=Object(p.a)().t,a=e.workingExperieces.map((function(e,t){return r.a.createElement(x,{workingExperience:e,key:t})}));return r.a.createElement("section",{className:"resume-section experience-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("workExperience")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("div",{className:"resume-timeline position-relative"},a)))},R=function(e){var t=e.languages.map((function(e,t){return r.a.createElement("li",{className:"mb-2",key:t},r.a.createElement("span",{className:"resume-lang-name font-weight-bold"},e," "))}));return r.a.createElement("ul",{className:"list-unstyled resume-lang-list"},t)},j=function(e){var t=e.skills.map((function(e,t){return r.a.createElement("li",{className:"list-inline-item",key:t},r.a.createElement("span",{className:"badge badge-light"},e))}));return r.a.createElement("div",{className:"resume-skill-item"},r.a.createElement("h4",{className:"resume-skills-cat font-weight-bold"},e.title),r.a.createElement("ul",{className:"list-inline"},t))},D=function(e){var t=e.technical.geomatics.CAD.concat(e.technical.geomatics.GIS,e.technical.geomatics.other),a=Object(p.a)().t;return r.a.createElement("div",null,r.a.createElement("section",{className:"resume-section skills-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},a("skills")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement(j,{title:"Office",skills:e.technical.office}),r.a.createElement(j,{title:a("geomatics"),skills:t}),r.a.createElement(j,{title:a("programming"),skills:e.technical.computerScience.programmingLanguages}),r.a.createElement(j,{title:a("framework"),skills:e.technical.computerScience.frameworks}),r.a.createElement(j,{title:a("tools"),skills:e.technical.computerScience.tools}))),r.a.createElement("section",{className:"resume-section skills-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},a("languages")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement(R,{languages:e.languages}))))},L=function(e){var t=Object(p.a)().t,a=e.education.map((function(e,t){return r.a.createElement("li",{className:"mb-2",key:t},r.a.createElement("div",{className:"resume-degree font-weight-bold"},e.degree),r.a.createElement("div",{className:"resume-degree-org"},e.schoolName+",  "+e.city),r.a.createElement("div",{className:"resume-degree-time"},e.startYear+" - "+e.endYear))}));return r.a.createElement("section",{className:"resume-section education-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("education")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("ul",{className:"list-unstyled"},a)))},P=function(e){var t=Object(p.a)().t,a=e.description.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("article",{className:"position-relative pb-5"},r.a.createElement("div",{className:"resume-timeline-item-header mb-2"},r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},r.a.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),r.a.createElement("div",{className:"resume-company-name ml-auto"},e.location.building+", "+e.location.address)),r.a.createElement("div",{className:"resume-position-time"},e.startDate+" - "+e.endDate)),r.a.createElement("div",{className:"resume-timeline-item-desc"},r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("description")),r.a.createElement("ul",null,a)))},I=function(e){var t=Object(p.a)().t,a=e.events.map((function(e,t){return r.a.createElement(P,{key:t,title:e.title,description:e.description,location:e.location,startDate:e.startDate,endDate:e.endDate})}));return r.a.createElement("section",{className:"resume-section reference-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("events")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("div",{className:"position-relative"},a)))},S=function(e){return r.a.createElement("div",{className:"resume-body p-5"},r.a.createElement(k,{summary:e.summary}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-9"},r.a.createElement(O,{workingExperieces:e.workingExperiences}),r.a.createElement(I,{events:e.events})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(D,{languages:e.skills.languages,technical:e.skills.technical}),r.a.createElement(L,{education:e.educations}))))},F=a(32),C=a(45),U=function(e){var t=e.icon;return r.a.createElement("li",{className:"mb-2"},r.a.createElement("a",{href:(e.isEMail?"mailto:":"tel:")+e.value},r.a.createElement(t,{className:"fa-fw mr-2",size:"1.2em",title:e.title}),e.value))},M=function(e){var t=e.icon;return r.a.createElement("li",{className:"mb-3"},r.a.createElement("a",{href:e.URL},r.a.createElement("span",{className:"fa-container text-center mr-2"},r.a.createElement(t,{className:"fa-fw",size:"1.5em",title:e.title})),e.URL))},A=a(44),G=a.n(A),Y=function(e){var t=Object(p.a)().t;return r.a.createElement("header",{className:"resume-header pt-4 pt-md-0"},r.a.createElement("div",{className:"media flex-column flex-md-row"},r.a.createElement("img",{className:"mr-3 img-fluid picture mx-auto",src:G.a,alt:"profile"}),r.a.createElement("div",{className:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"},r.a.createElement("div",{className:"primary-info"},r.a.createElement("h1",{className:"name mt-0 mb-1 text-white text-uppercase"},e.firstName+" "+e.lastName),r.a.createElement("div",{className:"title mb-3"},t("title")),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(U,{icon:F.b,title:t("email"),value:e.email,isEMail:!0}),r.a.createElement(U,{icon:F.a,title:t("mobilePhone"),value:e.mobilePhone,isEMail:!1}))),r.a.createElement("div",{className:"secondary-info ml-md-auto mt-2"},r.a.createElement("ul",{className:"resume-social list-unstyled"},r.a.createElement(M,{icon:C.a,title:"Github",URL:e.githubURL}))))))},z=function(e){return r.a.createElement("article",{className:"resume-wrapper text-center position-relative"},r.a.createElement("div",{className:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},r.a.createElement(Y,{firstName:e.generalInformation.firstName,lastName:e.generalInformation.lastName,address:e.generalInformation.address,city:e.generalInformation.city,province:e.generalInformation.province,postalCode:e.generalInformation.postalCode,mobilePhone:e.generalInformation.mobilePhone,email:e.generalInformation.email,githubURL:e.generalInformation.githubURL}),r.a.createElement(S,{educations:e.educations,summary:e.summary,skills:e.skills,workingExperiences:e.workingExperiences,events:e.events})))},J=function e(){Object(m.a)(this,e)};J.API_URL="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:3001":"https://jacob-resume-backend.herokuapp.com",J.headers={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","content-type":"application/json"};var T,_=function(e){return fetch("".concat(J.API_URL,"/").concat(e),{method:"get",headers:J.headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},V=a(89),W=a(48),B=a(86),q=Object(W.a)({overrides:{MuiLinearProgress:{barColorPrimary:{backgroundColor:"#22A162"},colorPrimary:{backgroundColor:"#b2dfdb"}}}}),X=function(){return r.a.createElement(B.a,{theme:q},r.a.createElement(V.a,null))},$=function(e){return r.a.createElement("div",null,0!==e.resume.summary.length?r.a.createElement(z,{summary:e.resume.summary,educations:e.resume.educations,events:e.resume.events,generalInformation:e.resume.generalInformation,skills:e.resume.skills,workingExperiences:e.resume.workingExperiences,PDF:e.resume.PDF}):r.a.createElement(X,null))};!function(e){e.EN="EN",e.FR="FR"}(T||(T={}));var H=a(33),K=a(23),Q={EN:{translation:a(46)},FR:{translation:a(47)}};H.a.use(K.e).init({resources:Q,lng:"EN",keySeparator:!1,debug:!0,interpolation:{escapeValue:!1}});var Z=H.a,ee=function(e){return e===T.EN?(Z.changeLanguage(T.FR),T.FR):(Z.changeLanguage(T.EN),T.EN)},te=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(m.a)(this,a),(e=t.call(this,n)).resumeFactory=void 0,e.resumeFactory=new N,e.state={resumeData:e.resumeFactory.initializeResume(),language:T.FR,changeLanguage:function(){return e.state.language===T.EN?e.setState({language:T.FR}):e.setState({language:T.EN})}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(ee(this.state.language));case 2:t=e.sent,this.setState({resumeData:this.resumeFactory.createResume(t)});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.language===a.language){e.next=5;break}return e.next=3,_(ee(this.state.language));case 3:n=e.sent,this.setState({resumeData:this.resumeFactory.createResume(n)});case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,{resume:this.state.resumeData}),r.a.createElement(E,null),r.a.createElement(h,{language:this.state.language,changeLanguage:this.state.changeLanguage}),r.a.createElement(v,{pdfURL:this.state.resumeData.PDF}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.35762e09.chunk.js.map