(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{277:function(e,a,t){},278:function(e,a,t){},281:function(e,a,t){},283:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),o=(t(278),t(87)),n=t.n(o),c=t(86),s=t.n(c),m=(t(277),function(e){var a=e.data.map(function(e,a){return r.a.createElement("a",{key:a,className:"col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center",href:e.html_url},r.a.createElement("div",{className:"contribCard"},r.a.createElement("img",{className:"d-none d-sm-block",src:e.avatar_url,alt:"".concat(e.login,"'s Avatar")}),r.a.createElement("h5",null,e.login),r.a.createElement("p",null,e.contributions," Contributions")))});return r.a.createElement("div",{className:"modal fade",id:"contribModal",tabIndex:"-1",role:"dialog","aria-labelledby":"contribModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header text-center"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Project Contributions"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body row"},a),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"button-primary","data-dismiss":"modal"},"Close")))))}),i=r.a.memo(function(e){var a=e.contributors,t={MattCSmith:74,aneagoie:30,Dhaval1403:19,anantankur:11,The24thDS:-50},l=a.filter(function(e){return"allcontributors[bot]"!==e.login?(void 0!==t[e.login]&&(e.contributions+=t[e.login]),e):null});0===l.filter(function(e){return"Dhaval"===e.login}).length&&l.push({login:"Dhaval",avatar_url:"https://avatars0.githubusercontent.com/u/24822319?s=460&v=4",html_url:"https://github.com/Dhaval403",contributions:19});var o=l.sort(function(e,a){return a.contributions-e.contributions});return r.a.createElement("div",null,r.a.createElement("div",{"data-toggle":"modal","data-target":"#contribModal"},r.a.createElement("li",null,"& ",o.length," Contributors")),r.a.createElement(m,{data:o}))}),d=(t(281),t(85)),u=t(83),E=t(84),h=function(){return r.a.createElement("div",{className:"modal fade",id:"courseModal",tabIndex:"-1",role:"dialog","aria-labelledby":"courseModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header text-center"},r.a.createElement("h5",{className:"modal-title"},"Zero To Mastery"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body row px-5 py-4"},r.a.createElement("div",{className:"text-justify"},r.a.createElement("h5",{className:"text-center courseSubTitle"},"The Complete Web Developer Courses for 2019"),r.a.createElement("p",{className:"text-secondary"},"A complete full-stack web development course, with the latest and most in-demand technologies, for anyone trying to learn web development in 2019."),r.a.createElement("p",{className:"text-secondary"},"Learn to code with us, join the community and practice the skills you gained from the course, build up your portfolio by contributing to projects, and become a job ready web developer this year."),r.a.createElement("h5",{className:"text-center text-dark"},"Click any course to get started!")),r.a.createElement("a",{href:"https://www.udemy.com/the-complete-web-developer-zero-to-mastery/?couponCode=LEVELUPZTM"},r.a.createElement("div",{className:"courseCard row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h5",null,"The Complete Web Developer: Zero to Mastery")),r.a.createElement("div",{className:"col-sm-4 p-0"},r.a.createElement("img",{src:d,className:"d-none d-sm-block w-100",alt:"Course 1"})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("p",null,"Learn to code and become a web developer in 2018 with HTML5, CSS, Javascript, React, Node.js, Machine Learning & more!")))),r.a.createElement("a",{href:"https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/?couponCode=LEVELUPZTM"},r.a.createElement("div",{className:"courseCard row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h5",null,"Junior to Senior Web Developer Roadmap")),r.a.createElement("div",{className:"col-sm-4 p-0"},r.a.createElement("img",{src:u,className:"d-none d-sm-block w-100",alt:"Course 2"})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("p",null,"This is the tutorial you've been looking for to no longer be a junior developer, level up your skills, and earn a higher salary. This extensive course doesn\u2019t just cover a small portion of the industry.")))),r.a.createElement("a",{href:"https://www.udemy.com/master-the-coding-interview-data-structures-algorithms/?couponCode=LEVELUPZTM"},r.a.createElement("div",{className:"courseCard row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h5",null,"Master the Coding Interview: Data Structures + Algorithms")),r.a.createElement("div",{className:"col-sm-4 p-0"},r.a.createElement("img",{src:E,className:"d-none d-sm-block w-100",alt:"Course 3"})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("p",null,"Using the strategies, lessons, and exercises in this course, you will learn how to land offers from great tech companies like Google, Microsoft, Facebook, Netflix, Amazon and more!"))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"button-primary","data-dismiss":"modal"},"Close")))))},b=r.a.memo(function(e){e.contributors;return r.a.createElement("div",null,r.a.createElement("div",{className:"cFooterlink","data-toggle":"modal","data-target":"#courseModal"},r.a.createElement("li",null,"Zero to Mastery")),r.a.createElement(h,null))});a.default=function(e){var a=e.contrib;return r.a.createElement("footer",null,r.a.createElement("img",{src:n.a,alt:"",style:{width:"100%"},className:"footer-wave"}),r.a.createElement("div",{className:"footer py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 col-xs-12 pr-5"},r.a.createElement("a",{className:"navbar-brand pb-3",href:"/"},r.a.createElement("img",{src:s.a,alt:"logo",height:"50"})),r.a.createElement("p",{className:"text-muted footDesc"},"Dedicated to monitoring the top 5 job demands in the 4 categories: Web, Mobile, Programming Languages and Backend"),r.a.createElement("div",{className:"socials text-white pt-2"},r.a.createElement("a",{href:"https://medium.com/zerotomastery",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"grow fab fa-medium"})),r.a.createElement("a",{href:"https://twitter.com/AndreiNeagoie",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"grow fab fa-twitter-square"})),r.a.createElement("a",{href:"https://github.com/zero-to-mastery",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"grow fab fa-github-square"})))),r.a.createElement("div",{className:"credits col-md-3 col-xs-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h5",{className:"pt-2"},"Brought to you by"),r.a.createElement("img",{src:t(88),alt:"ZTM logo"}),r.a.createElement(b,null),r.a.createElement(i,{contributors:a})))))),r.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," FullStack Trends. All Rights Reserved"))}}}]);
//# sourceMappingURL=1.29993825.chunk.js.map