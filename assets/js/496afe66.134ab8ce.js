"use strict";(self.webpackChunkrun_mate=self.webpackChunkrun_mate||[]).push([[966],{5985:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"DB/model","title":"ERD","description":"Runs","source":"@site/docs/DB/model.md","sourceDirName":"DB","slug":"/DB/model","permalink":"/doc-as-a-code-runmate/docs/DB/model","draft":false,"unlisted":false,"editUrl":"https://github.com/sonya21adammali/doc-as-a-code-runmate/docs/DB/model.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ERD","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"ERD","permalink":"/doc-as-a-code-runmate/docs/category/erd"},"next":{"title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","permalink":"/doc-as-a-code-runmate/docs/category/\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}}');var l=r(4848),o=r(8453),i=r(9734),a=r.n(i);const s='<mxGraphModel dx="1059" dy="605" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1100" pageHeight="850" background="none" math="0" shadow="0">\r\n  <root>\r\n    <mxCell id="0" />\r\n    <mxCell id="1" parent="0" />\r\n    <mxCell id="userEntity" value="User" style="swimlane;fillColor=#dae8fc;horizontal=1;" vertex="1" parent="1">\r\n      <mxGeometry x="300" y="50" width="200" height="150" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="userAttributes" value="id (PK): uuid&lt;br&gt;name: String&lt;br&gt;age: Integer&lt;br&gt;location: String&lt;br&gt;pace: Enum&lt;br&gt;distance: String&lt;br&gt;about: Text" style="text;html=1;align=left;verticalAlign=top;" vertex="1" parent="userEntity">\r\n      <mxGeometry y="30" width="200" height="120" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="runEntity" value="Run" style="swimlane;fillColor=#f8cecc;horizontal=1;" vertex="1" parent="1">\r\n      <mxGeometry x="60" y="50" width="200" height="150" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="runAttributes" value="id (PK): uuid&lt;br&gt;user_id (FK): Integer&lt;br&gt;date: DateTime&lt;br&gt;location: String&lt;br&gt;distance: String&lt;div&gt;status: Enum&lt;/div&gt;" style="text;html=1;align=left;verticalAlign=top;" vertex="1" parent="runEntity">\r\n      <mxGeometry y="30" width="200" height="120" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="chatEntity" value="Chat" style="swimlane;fillColor=#d5e8d4;horizontal=1;" vertex="1" parent="1">\r\n      <mxGeometry x="590" y="70" width="200" height="150" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="chatAttributes" value="id (PK): uuid&lt;br&gt;sender (FK): uuid&lt;br&gt;last_message: Text&lt;br&gt;last_message_time: DateTime" style="text;html=1;align=left;verticalAlign=top;" vertex="1" parent="chatEntity">\r\n      <mxGeometry y="30" width="200" height="120" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="sy3fpL0bsb6ezjBv6HW1-24" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;endArrow=ERzeroToMany;endFill=0;startArrow=ERmandOne;startFill=0;" edge="1" parent="1" source="userAttributes" target="runAttributes">\r\n      <mxGeometry relative="1" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="sy3fpL0bsb6ezjBv6HW1-25" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=-0.009;entryY=0.184;entryDx=0;entryDy=0;endArrow=ERzeroToMany;endFill=0;startArrow=ERmandOne;startFill=0;entryPerimeter=0;" edge="1" parent="1" source="userAttributes" target="chatAttributes">\r\n      <mxGeometry relative="1" as="geometry">\r\n        <mxPoint x="310" y="150" as="sourcePoint" />\r\n        <mxPoint x="270" y="150" as="targetPoint" />\r\n      </mxGeometry>\r\n    </mxCell>\r\n    <mxCell id="sy3fpL0bsb6ezjBv6HW1-29" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.75;entryY=0;entryDx=0;entryDy=0;endArrow=ERzeroToMany;endFill=0;startArrow=ERmandOne;startFill=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="1" source="chatAttributes" target="sy3fpL0bsb6ezjBv6HW1-27">\r\n      <mxGeometry relative="1" as="geometry">\r\n        <mxPoint x="650" y="200" as="sourcePoint" />\r\n        <mxPoint x="558" y="130" as="targetPoint" />\r\n      </mxGeometry>\r\n    </mxCell>\r\n    <mxCell id="8GoP-1W42B7T6uZ3GLff-1" value="Attachment" style="swimlane;fillColor=#fff2cc;horizontal=1;strokeColor=#d6b656;" vertex="1" parent="1">\r\n      <mxGeometry x="110" y="260" width="200" height="150" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="8GoP-1W42B7T6uZ3GLff-2" value="id (PK): uuid&lt;br&gt;message_id (FK): uuid&lt;div&gt;file_url: String&lt;/div&gt;&lt;div&gt;file_type: Enum&lt;/div&gt;&lt;div&gt;file_size: Integer&lt;/div&gt;" style="text;html=1;align=left;verticalAlign=top;" vertex="1" parent="8GoP-1W42B7T6uZ3GLff-1">\r\n      <mxGeometry y="30" width="200" height="120" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="8GoP-1W42B7T6uZ3GLff-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.25;exitDx=0;exitDy=0;entryX=0.997;entryY=0.414;entryDx=0;entryDy=0;endArrow=ERzeroToMany;endFill=0;startArrow=ERmandOne;startFill=0;entryPerimeter=0;" edge="1" parent="1" source="sy3fpL0bsb6ezjBv6HW1-28" target="8GoP-1W42B7T6uZ3GLff-2">\r\n      <mxGeometry relative="1" as="geometry">\r\n        <mxPoint x="510" y="150" as="sourcePoint" />\r\n        <mxPoint x="558" y="112" as="targetPoint" />\r\n      </mxGeometry>\r\n    </mxCell>\r\n    <mxCell id="sy3fpL0bsb6ezjBv6HW1-27" value="Message" style="swimlane;fillColor=#e1d5e7;horizontal=1;strokeColor=#9673a6;" vertex="1" parent="1">\r\n      <mxGeometry x="420" y="330" width="200" height="150" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="sy3fpL0bsb6ezjBv6HW1-28" value="id (PK): uuid&lt;div&gt;&lt;code style=&quot;background-color: initial;&quot;&gt;chat_id&lt;/code&gt;&lt;span style=&quot;background-color: initial;&quot;&gt; (FK): uuid&lt;/span&gt;&lt;/div&gt;&lt;div&gt;&lt;code style=&quot;background-color: initial;&quot;&gt;sender_id&lt;/code&gt;&lt;span style=&quot;background-color: initial;&quot;&gt; (FK): uuid&lt;/span&gt;&lt;/div&gt;&lt;div&gt;&lt;code style=&quot;background-color: initial;&quot;&gt;content&lt;/code&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;: Text&lt;/span&gt;&lt;/div&gt;&lt;div&gt;&lt;code style=&quot;background-color: initial;&quot;&gt;timestamp&lt;/code&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;:&amp;nbsp;&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;DateTime&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;.&lt;/span&gt;&lt;/div&gt;" style="text;html=1;align=left;verticalAlign=top;" vertex="1" parent="sy3fpL0bsb6ezjBv6HW1-27">\r\n      <mxGeometry y="20" width="200" height="130" as="geometry" />\r\n    </mxCell>\r\n    <mxCell id="8GoP-1W42B7T6uZ3GLff-7" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.353;entryY=-0.009;entryDx=0;entryDy=0;endArrow=ERzeroToMany;endFill=0;startArrow=ERmandOne;startFill=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryPerimeter=0;" edge="1" parent="1" source="userAttributes" target="sy3fpL0bsb6ezjBv6HW1-27">\r\n      <mxGeometry relative="1" as="geometry">\r\n        <mxPoint x="700" y="230" as="sourcePoint" />\r\n        <mxPoint x="580" y="340" as="targetPoint" />\r\n      </mxGeometry>\r\n    </mxCell>\r\n  </root>\r\n</mxGraphModel>\r\n',d={title:"ERD",sidebar_position:1},u="\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445",c={},m=[{value:"Runs",id:"runs",level:2},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0432\u044f\u0437\u0435\u0439 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u0441\u0432\u044f\u0437\u0435\u0439-\u0438-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",level:3}];function x(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u043c\u043e\u0434\u0435\u043b\u044c-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n","\n",(0,l.jsx)(a(),{content:s,editable:!1}),"\n",(0,l.jsx)(e.h2,{id:"runs",children:"Runs"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,l.jsx)(e.th,{children:"\u0422\u0438\u043f"}),(0,l.jsx)(e.th,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"id"}),(0,l.jsx)(e.td,{children:"UUID"}),(0,l.jsx)(e.td,{children:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"user_id"}),(0,l.jsx)(e.td,{children:"UUID"}),(0,l.jsx)(e.td,{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043a\u043b\u044e\u0447 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 Users"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"date"}),(0,l.jsx)(e.td,{children:"TIMESTAMP"}),(0,l.jsx)(e.td,{children:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"location"}),(0,l.jsx)(e.td,{children:"VARCHAR(255)"}),(0,l.jsx)(e.td,{children:"\u041c\u0435\u0441\u0442\u043e \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"distance"}),(0,l.jsx)(e.td,{children:"INTEGER"}),(0,l.jsx)(e.td,{children:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"status"}),(0,l.jsx)(e.td,{children:"status_enum"}),(0,l.jsx)(e.td,{children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438 (ENUM)"})]})]})]}),"\n",(0,l.jsx)(e.h3,{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u0441\u0432\u044f\u0437\u0435\u0439-\u0438-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0432\u044f\u0437\u0435\u0439 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"id"})," \u2014 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"user_id"})," \u2014 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u043a\u043b\u044e\u0447 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,l.jsx)(e.code,{children:"Users"}),", \u0441 \u043a\u0430\u0441\u043a\u0430\u0434\u043d\u044b\u043c \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u043c (",(0,l.jsx)(e.code,{children:"ON DELETE CASCADE"}),")."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"distance"})," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f (",(0,l.jsx)(e.code,{children:"CHECK (distance > 0)"}),")."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"status"})," \u2014 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.jsx)(e.code,{children:"status_enum"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 SQL \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Runs (\r\n    id UUID PRIMARY KEY,                    \r\n    user_id UUID NOT NULL,                  -- \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043a\u043b\u044e\u0447 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 Users\r\n    date TIMESTAMP NOT NULL,                -- \u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438\r\n    location VARCHAR(255) NOT NULL,         -- \u041c\u0435\u0441\u0442\u043e \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\r\n    distance INTEGER NOT NULL CHECK (distance > 0), -- \u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439\r\n    status status_enum NOT NULL,            -- \u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0431\u0435\u0436\u043a\u0438 (ENUM)\r\n    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE\r\n);\n"})})]})}function g(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(x,{...t})}):x(t)}},8478:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});r(6540);var n=r(2303),l=r(4848);function o(t){let{children:e,fallback:r}=t;return(0,n.A)()?(0,l.jsx)(l.Fragment,{children:e?.()}):r??null}},9734:(t,e,r)=>{var n=r(8478),l=r(6540);function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=o(n),a=o(l),s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var l in e=arguments[r])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t},s.apply(this,arguments)};!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===r&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var d=function(t){var e=t.content,r=t.maxHeight,n=t.autoFit,o=t.autoCrop,i=t.autoOrigin,d=t.allowZoomOut,u=t.allowZoomIn,c=t.checkVisibleState,m=t.toolbarPosition,x=t.toolbarNohide,g=t.toolbarButtons,h=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(t);l<n.length;l++)e.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(r[n[l]]=t[n[l]])}return r}(t,["content","maxHeight","autoFit","autoCrop","autoOrigin","allowZoomOut","allowZoomIn","checkVisibleState","toolbarPosition","toolbarNohide","toolbarButtons"]),y=l.useState("loading..."),p=y[0],f=y[1],b=l.useRef(null),v=window.GraphViewer;return l.useEffect((function(){if(v)if(e){var t=s({editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:e,"max-height":r,"auto-fit":n,"auto-crop":o,"auto-origin":i,"allow-zoom-out":d,"allow-zoom-in":u,"check-visible-state":c,"toolbar-position":m,"toolbar-nohide":x,"toolbar-buttons":g},h),l=JSON.stringify(t);b.current.dataset.mxgraph=l,f(""),setTimeout((function(){v.createViewerForElement(b.current)}),0)}else f("drawio file is empty");else f("GraphViewer is not loaded")}),[]),a.default.createElement("div",{className:"docusaurus-plugin-drawio"},a.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:b},p))},u=l.memo((function(t){return a.default.createElement(i.default,{fallback:a.default.createElement(a.default.Fragment,null,"loading...")},(function(){return a.default.createElement(d,s({},t))}))}));t.exports=u},8453:(t,e,r)=>{r.d(e,{R:()=>i,x:()=>a});var n=r(6540);const l={},o=n.createContext(l);function i(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:i(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);