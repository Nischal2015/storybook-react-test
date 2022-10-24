import{d as s}from"./index.f44dc435.js";import{w as c,u as d}from"./index.35eadfda.js";import{H as l}from"./Header.87321e58.js";import{a as o,j as e}from"./jsx-runtime.5c9542a3.js";import"./iframe.928d792c.js";import"./web.set-immediate.c4bb1afc.js";import"./index.81ebe8e0.js";import"./Button.4a13053b.js";const r=()=>{const[t,n]=s.useState();return o("article",{children:[e(l,{user:t,onLogin:()=>n({name:"Jane Doe"}),onLogout:()=>n(void 0),onCreateAccount:()=>n({name:"Jane Doe"})}),o("section",{children:[e("h2",{children:"Pages in Storybook"}),o("p",{children:["We recommend building UIs with a"," ",e("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:e("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),e("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),o("ul",{children:[e("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),e("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),o("p",{children:["Get a guided tutorial on component-driven development at"," ",e("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",e("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),o("div",{className:"tip-wrapper",children:[e("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",e("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("g",{fill:"none",fillRule:"evenodd",children:e("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Page"};const y={title:"Example/Page",component:r,parameters:{layout:"fullscreen"}},a=t=>e(r,{...t}),k=a.bind({}),h=a.bind({});h.play=async({canvasElement:t})=>{const i=await c(t).getByRole("button",{name:/Log in/i});await d.click(i)};const _=["LoggedOut","LoggedIn"];export{h as LoggedIn,k as LoggedOut,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=Page.stories.ee8c6ad5.js.map
