(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(79)),o={title:"Triggers"},s={unversionedId:"triggers",id:"triggers",isDocsHomePage:!1,title:"Triggers",description:"By default, uptime is checked every 5 minutes and response time graphs and endpoints are updated every 24 hours. You can also manually trigger an update, for example after setting up your repository. Manual triggers are powered by workflow triggers on GitHub Actions.",source:"@site/docs/triggers.md",slug:"/triggers",permalink:"/docs/triggers",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/triggers.md",version:"current",sidebar:"sidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Notifications",permalink:"/docs/notifications"}},u=[{value:"Available workflows",id:"available-workflows",children:[{value:"Setup CI",id:"setup-ci",children:[]},{value:"Uptime CI",id:"uptime-ci",children:[]},{value:"Update Template CI",id:"update-template-ci",children:[]},{value:"Static Site CI",id:"static-site-ci",children:[]},{value:"Graphs CI",id:"graphs-ci",children:[]},{value:"Response Time CI",id:"response-time-ci",children:[]},{value:"Summary CI",id:"summary-ci",children:[]}]},{value:"Manual triggers",id:"manual-triggers",children:[{value:"Using the GitHub UI",id:"using-the-github-ui",children:[]},{value:"Using the GitHub API",id:"using-the-github-api",children:[]}]}],c={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, uptime is checked every 5 minutes and response time graphs and endpoints are updated every 24 hours. You can also manually trigger an update, for example after setting up your repository. Manual triggers are powered by workflow triggers on GitHub Actions."),Object(i.b)("h2",{id:"available-workflows"},"Available workflows"),Object(i.b)("p",null,"Upptime has several workflows that are run on different intervals, all of which you can also manually trigger:"),Object(i.b)("h3",{id:"setup-ci"},"Setup CI"),Object(i.b)("p",null,"This workflow is triggered after you edit the configuration file, and runs alls steps: checking uptime, tracking response time, updating the README, and generating graphs. If you want to \"force\" Upptime to run everything once (for example, after you've set up the template or after you've made a configuration change), you can manually trigger Setup CI."),Object(i.b)("h3",{id:"uptime-ci"},"Uptime CI"),Object(i.b)("p",null,"This workflow runs once every 5 minutes and checks if your websites are up. If they are down, it creates a new issue in your repository. This same workflow also closes any issues after your websites have come back up. If you want to manually make sure that all your endpoints are currently up, you can trigger this workflow."),Object(i.b)("h3",{id:"update-template-ci"},"Update Template CI"),Object(i.b)("p",null,"This workflow runs once a week and updates the internal code of Upptime to make sure you're always on the latest version. This is important because Upptime is still in development and may include new design updates and feature changes including important security updates."),Object(i.b)("h3",{id:"static-site-ci"},"Static Site CI"),Object(i.b)("p",null,"This workflow builds and deploys your status page website using GitHub Pages. It reads from your configuration and builds the Svelte/Sapper website, then deploys is to the ",Object(i.b)("inlineCode",{parentName:"p"},"gh-pages")," branch and triggers a re-build on GitHub Pages. By default, this runs once every week, but you can manually run it, for example after updating your configuration or setting up the template."),Object(i.b)("h3",{id:"graphs-ci"},"Graphs CI"),Object(i.b)("p",null,"This workflow runs once every day and generates response time graphs from the recorded data. These PNG images are stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"graphs")," directory and embedded on the project's README. You can manually run this to regenerate those images."),Object(i.b)("h3",{id:"response-time-ci"},"Response Time CI"),Object(i.b)("p",null,"This workflow records the reponse time of each endpoint and commits it to git history, which is why it runs once every day. You can manually trigger it if you want to record the response time manually."),Object(i.b)("h3",{id:"summary-ci"},"Summary CI"),Object(i.b)("p",null,"This workflow also runs once every day and updates the README of your project with a summary of the response times and generated graphs. You can manually trigger it to update your project's README.md file."),Object(i.b)("h2",{id:"manual-triggers"},"Manual triggers"),Object(i.b)("p",null,"To manually trigger an update, you can use the GitHub UI or API."),Object(i.b)("h3",{id:"using-the-github-ui"},"Using the GitHub UI"),Object(i.b)("p",null,'First, click on the "Actions" tab of your GitHub repository. You will reach the URL ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/user/repo/actions"}),"https://github.com/user/repo/actions"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"user")," is your GitHub username and ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," is the name of the repository."),Object(i.b)("p",null,'On the left sidebar under "Workflows", click on the workflow you want to trigger, for example "Setup CI":'),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/2841780/97270440-2c553300-1855-11eb-9388-4a4d007aad0a.png",alt:"Screenshot of Workflows tab"}))),Object(i.b)("p",null,'You will see the message "This workflow has a ',Object(i.b)("inlineCode",{parentName:"p"},"workflow_dispatch"),' event trigger.". Click on the "Run workflow" button on the right. Keep the default branch select and click on "Run workflow":'),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/2841780/97270513-4e4eb580-1855-11eb-92ef-ad09780af797.png",alt:"Screenshot of the dispatch event"}))),Object(i.b)("h3",{id:"using-the-github-api"},"Using the GitHub API"),Object(i.b)("p",null,"If you want to programmatically trigger updates, you can use the GitHub REST API's repository dispatch events by triggering an event in your repository called ",Object(i.b)("inlineCode",{parentName:"p"},"setup"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl \\\n  -X POST \\\n  -H "Accept: application/vnd.github.v3+json" \\\n  https://api.github.com/repos/user/repo/dispatches \\\n  -d \'{ "event_type": "setup" }\'\n')),Object(i.b)("p",null,"Or, with JavaScript (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/octokit/core.js"}),"@octokit/core.js"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'await octokit.request("POST /repos/{owner}/{repo}/dispatches", {\n  owner: "user",\n  repo: "repo",\n  event_type: "setup",\n});\n')),Object(i.b)("p",null,"For more information, read this article on the GitHub website: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#create-a-repository-dispatch-event"}),"Create a repository dispatch event"),"."))}p.isMDXComponent=!0},79:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,h=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return r?a.a.createElement(h,s(s({ref:t},c),{},{components:r})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);