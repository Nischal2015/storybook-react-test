import"./index.f44dc435.js";import{j as e,a as t,F as a}from"./jsx-runtime.5c9542a3.js";import{u as i,G as c}from"./DocsRenderer.eb79da28.js";import"./iframe.928d792c.js";import"./index.495a17d1.js";import"./index.8e34cd08.js";const l="/assets/code-brackets.9ef6443e.svg",d="/assets/colors.ac9401f3.svg",p="/assets/comments.f15a6837.svg",m="/assets/direction.94a9917f.svg",g="/assets/flow.275142c6.svg",h="/assets/plugin.57148314.svg",u="/assets/repo.fb4ece47.svg",b="/assets/stackalt.2ad81543.svg";function o(r){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},i(),r.components);return t(a,{children:[e(c,{title:"Example/Introduction"}),`
`,e("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e(n.h1,{children:"Welcome to Storybook"}),`
`,t(n.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e(n.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,t(n.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e(n.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,e(n.a,{href:"https://componentdriven.org",children:e(n.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e("div",{className:"subheading",children:"Configure"}),`
`,t("div",{className:"link-list",children:[t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e("img",{src:h,alt:"plugin"}),e("span",{children:t(n.p,{children:[e("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e("img",{src:b,alt:"Build"}),e("span",{children:t(n.p,{children:[e("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e("img",{src:d,alt:"colors"}),e("span",{children:t(n.p,{children:[e("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e("img",{src:g,alt:"flow"}),e("span",{children:t(n.p,{children:[e("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e("div",{className:"subheading",children:"Learn"}),`
`,t("div",{className:"link-list",children:[t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e("img",{src:u,alt:"repo"}),e("span",{children:t(n.p,{children:[e("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e("img",{src:m,alt:"direction"}),e("span",{children:t(n.p,{children:[e("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e("img",{src:l,alt:"code"}),e("span",{children:t(n.p,{children:[e("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e("img",{src:p,alt:"comments"}),e("span",{children:t(n.p,{children:[e("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e("div",{className:"tip-wrapper",children:t(n.p,{children:[e("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e("code",{children:"stories/Introduction.stories.mdx"})]})})]})}function f(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}const k=()=>{throw new Error("Docs-only story")};k.parameters={docsOnly:!0};const s={title:"Example/Introduction",includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(f,{})};const N=["__page"];export{N as __namedExportsOrder,k as __page,s as default};
//# sourceMappingURL=Introduction.stories.8cbac915.js.map
