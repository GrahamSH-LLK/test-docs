(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(2),o=r(6),i=(r(0),r(79)),a={title:"Getting started"},s={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Getting started",description:"To use Upptime as an uptime monitor and status website generator, you start by creating a repository using the template on GitHub.",source:"@site/docs/get-started.md",slug:"/get-started",permalink:"/docs/get-started",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/get-started.md",version:"current",sidebar:"sidebar",previous:{title:"How it works",permalink:"/docs/"},next:{title:"Configuration",permalink:"/docs/configuration"}},l=[{value:"Create a repository from the template",id:"create-a-repository-from-the-template",children:[]},{value:"After creating your repository",id:"after-creating-your-repository",children:[{value:"Enable publishing",id:"enable-publishing",children:[]},{value:"Add repository secrets",id:"add-repository-secrets",children:[]},{value:"Update configuration",id:"update-configuration",children:[]},{value:"Viewing GitHub Actions workflows",id:"viewing-github-actions-workflows",children:[]},{value:"Deleting sample data",id:"deleting-sample-data",children:[]}]}],p={rightToc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use Upptime as an uptime monitor and status website generator, you start by creating a repository using the template on GitHub."),Object(i.b)("h2",{id:"create-a-repository-from-the-template"},"Create a repository from the template"),Object(i.b)("p",null,"You can click on the following link to generate a repository using the template: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/generate"}),Object(i.b)("strong",{parentName:"a"},"Create a new repository"))," from ",Object(i.b)("inlineCode",{parentName:"p"},"upptime/upptime"),". Alternately, you can follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Visit the Upptime repository on GitHub: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/upptime/upptime"}),"https://github.com/upptime/upptime")),Object(i.b)("li",{parentName:"ol"},'Click on the "Use this template" button on the top-right'),Object(i.b)("li",{parentName:"ol"},"Enter a name for your new repository"),Object(i.b)("li",{parentName:"ol"},'Click on "Create repository from template"')),Object(i.b)("p",null,"For more details on how to create repositories using template, read the article on the GitHub website: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"Creating a repository from a template"),"."),Object(i.b)("h2",{id:"after-creating-your-repository"},"After creating your repository"),Object(i.b)("p",null,"The following steps apply to your new repository, not the upptime/upptime template repository."),Object(i.b)("h3",{id:"enable-publishing"},"Enable publishing"),Object(i.b)("p",null,"To get a static status website, you have to enable GitHub Pages on your new repository."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to your repository settings page"),Object(i.b)("li",{parentName:"ol"},'Scroll to "GitHub Pages" settings'),Object(i.b)("li",{parentName:"ol"},'Under "Source", change "None" to ',Object(i.b)("inlineCode",{parentName:"li"},"gh-pages"),")"),Object(i.b)("li",{parentName:"ol"},'Click on "Save"')),Object(i.b)("p",null,'After saving, you will see confirmation text "Your site is ready to be published at...". For more information on enabling GitHub Pages, see the article on the GitHub website: ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"}),"Configuring a publishing source for your GitHub Pages site"),"."),Object(i.b)("p",null,"If you don't want to have a publicly-available status website, you don't have to enable publishing. If that is the case, you can also choose to keep your repository private."),Object(i.b)("h3",{id:"add-repository-secrets"},"Add repository secrets"),Object(i.b)("p",null,"All sensitive information required, such as API keys, are provided as environment variables. These are stored as GitHub repository secrets (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets"}),"Creating and storing encrypted secrets"),")."),Object(i.b)("p",null,"To make commits and publish your website, Upptime requires a personal access token (PAT) with the ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," scope. You can create a personal access token by following these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Click on your profile picture on the top-right corner and select "Settings"'),Object(i.b)("li",{parentName:"ol"},'In the left sidebar, select "Developer settings"'),Object(i.b)("li",{parentName:"ol"},'In the left sidebar, click "Personal access tokens"'),Object(i.b)("li",{parentName:"ol"},'Click "Generate new token"'),Object(i.b)("li",{parentName:"ol"},'Select the "repo" scope'),Object(i.b)("li",{parentName:"ol"},'Click "Generate token"')),Object(i.b)("p",null,"After generating your token, copy it (you will not see it again). Then, add it as a repository sectet:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'In your Upptime repository, select "Settings"'),Object(i.b)("li",{parentName:"ol"},'In the left sidebar, click "Secrets"'),Object(i.b)("li",{parentName:"ol"},'Press the button "Add a new secret"'),Object(i.b)("li",{parentName:"ol"},"Enter the name of the secret as ",Object(i.b)("inlineCode",{parentName:"li"},"GH_PAT")),Object(i.b)("li",{parentName:"ol"},'Paste your personal access token and click "Add secret"')),Object(i.b)("p",null,"For more information on PATs, read article on the GitHub website: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"}),"Creating a personal access token"),"."),Object(i.b)("h3",{id:"update-configuration"},"Update configuration"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".upptimerc.yml")," file is used as the central configuration store. In that file, you can specify which endpoints you want to monitory and configure your status website. For more information, visit ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuration"}),"Configuration"),"."),Object(i.b)("p",null,"You can start by adding your endpoints under ",Object(i.b)("inlineCode",{parentName:"p"},"sites"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".upptimerc.yml"',title:'".upptimerc.yml"'}),"owner: koj-co # GitHub username\nrepo: upptime # GitHub repository name\nsites: # List of endpoints to track\n  - name: Google\n    url: https://www.google.com\nassignees: # Users to assign downtime issues (optional)\n  - AnandChowdhary\nstatus-website: # Status website (optional)\n  cname: upptime.js.org # Custom domain CNAME\n  name: Upptime # Status website title\n")),Object(i.b)("p",null,"If you're not using a custom domain, you can remove the line starting with ",Object(i.b)("inlineCode",{parentName:"p"},"cname:")," and instead add the GitHub repository name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  baseUrl: /repo # where "repo" is your repository name\n  name: Your Status Website\n')),Object(i.b)("p",null,"Then, your status page may be hosted on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://user.github.io/repo/"}),"https://user.github.io/repo/"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"user")," is your GitHub username and ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," is your repository name."),Object(i.b)("h3",{id:"viewing-github-actions-workflows"},"Viewing GitHub Actions workflows"),Object(i.b)("p",null,"After updating the configuration file, Upptime should run workflows using GitHub Actions to update your ",Object(i.b)("inlineCode",{parentName:"p"},"README.md"),' and generate API endpoints and graphs. To view the status, click on the "Actions" tab in your repository. You should see pending or complete workflows. If you don\'t, you can manually trigger the "Setup CI" using the ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/triggers"}),"Triggers")," article."),Object(i.b)("p",null,"If you've forked the Upptime repository or have rules to disable Actions by default, you'll have to manually enable GitHub Actions, but this should probably not be your case."),Object(i.b)("h3",{id:"deleting-sample-data"},"Deleting sample data"),Object(i.b)("p",null,"There is sample data available in the ",Object(i.b)("inlineCode",{parentName:"p"},"api"),", ",Object(i.b)("inlineCode",{parentName:"p"},"graphs"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"history")," directories. You can optionally delete this data from your new repository. Even if you don't, it wouldn't be visible on your status website or ",Object(i.b)("inlineCode",{parentName:"p"},"README.md"),", but it's good to remove. To delete the directories, perform the following steps (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.community/t/how-to-delete-multiples-files-in-github/702/3"}),"source"),")."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone your newly created repository (see ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository"}),"Cloning a repository"),")"),Object(i.b)("li",{parentName:"ol"},"Enter the directory (",Object(i.b)("inlineCode",{parentName:"li"},"cd upptime"),") in a terminal window"),Object(i.b)("li",{parentName:"ol"},"Ensure you are in the default branch: ",Object(i.b)("inlineCode",{parentName:"li"},"git checkout main")," or ",Object(i.b)("inlineCode",{parentName:"li"},"git checkout master")),Object(i.b)("li",{parentName:"ol"},"Recursively remove the folder: ",Object(i.b)("inlineCode",{parentName:"li"},"git rm -r api graphs history")),Object(i.b)("li",{parentName:"ol"},"Commit the change: ",Object(i.b)("inlineCode",{parentName:"li"},'git commit -m ":fire: Remove sample data"')),Object(i.b)("li",{parentName:"ol"},"Push the change to your remote repository: ",Object(i.b)("inlineCode",{parentName:"li"},"git push origin main")," or ",Object(i.b)("inlineCode",{parentName:"li"},"git push origin master"))),Object(i.b)("p",null,"You can also use your operating system's file manager to delete the directories ",Object(i.b)("inlineCode",{parentName:"p"},"api"),", ",Object(i.b)("inlineCode",{parentName:"p"},"graphs"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"history"),", and then commit and push your changes."))}c.isMDXComponent=!0},79:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(r),m=n,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return r?o.a.createElement(d,s(s({ref:t},p),{},{components:r})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);