"use strict";(self.webpackChunkgw2_bingo=self.webpackChunkgw2_bingo||[]).push([[245],{4745:function(e,t,n){n.d(t,{D:function(){return a},l:function(){return l}});const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",l=e=>{if(9!==e.length)return"";const t=[];for(const r of e)t.push(3&r),t.push(r>>2&3),t.push(r>>4&3),t.push(r>>6&3);let n="";for(let l=0;l<t.length;l+=3)n+=r.charAt(t[l]+(t[l+1]<<2)+(t[l+2]<<4));return n},a=e=>{if(12!==e.length)return[];const t=[];for(const l of e.split("")){const e=r.indexOf(l);if(-1===e)return[];t.push(3&e),t.push(e>>2&3),t.push(e>>4&3)}const n=[];for(let r=0;r<t.length;r+=4)n.push(t[r]+(t[r+1]<<2)+(t[r+2]<<4)+(t[r+3]<<6));return n}},1856:function(e,t,n){n.d(t,{Kt:function(){return h},xb:function(){return g},as:function(){return s},jC:function(){return y},rw:function(){return M},ti:function(){return C},MW:function(){return a},Lm:function(){return m},JY:function(){return d}});var r=n(4794);const l=()=>(0,r.useStaticQuery)("77230047").allFractalsJson.nodes.map((e=>{let{jsonId:t,...n}=e;return{id:t,...n}})),a=()=>l().slice(1),s=e=>e<=0||e>=100?0:e<=25?1:e<=50?2:e<=75?3:4,o=Date.UTC(2022,1,28),u=()=>(0,r.useStaticQuery)("1491269856"),i=e=>{const t=e.getTime()-o;return(Math.floor(t/864e5)+3)%15},c=e=>u().allDailiesJson.nodes.map((e=>{let{_0:t,_1:n,_2:r}=e;return[t,n,r]}))[i(e)],f=e=>u().allRecsJson.nodes.map((e=>{let{_0:t,_1:n,_2:r}=e;return[t,n,r]}))[i(e)],m=()=>c(new Date),d=()=>f(new Date);let h=function(e){return e.Normal="Normal",e.CM="CM",e.Both="Both",e}({});const p=()=>(0,r.useStaticQuery)("1138866218"),C=()=>p().allFieldsJson.nodes,M=()=>p().allFieldsJson.totalCount,g=(e,t)=>{if(t.length<9)return[];{const n=[];for(;n.length<9;){const r=t[Math.floor(Math.random()*t.length)],l=e.indexOf(r);n.includes(l)||n.push(l)}return n}},y=(e,t)=>{var n,r;let{fractal:l,mode:a,encounter:s,event:o}=t;const u=e.find((e=>{let{name:t}=e;return t===l})),i=a===h.CM?`${u?null!==(n=u.displayCM)&&void 0!==n?n:u.name:l} CM`:u?null!==(r=u.display)&&void 0!==r?r:u.name:l;return{title:s?`${i} - ${s}`:i,content:o}}},2783:function(e,t,n){n.r(t);var r=n(4506),l=n(6540),a=n(9870),s=n(803),o=n(4745),u=n(1856);t.default=()=>{const e=(0,u.MW)(),t=(0,u.Lm)(),n=(0,u.JY)(),i=(0,u.ti)(),c=(0,l.useMemo)((()=>[].concat((0,r.A)(e.map((e=>{var r;let{id:l,name:a,display:s,scales:o,hasCM:i}=e;return{fractal:a,display:null!=s?s:a,isCM:!1,hasCM:i,isDaily:t.includes(l),rec:(0,u.as)(null!==(r=o.find((e=>n.includes(e))))&&void 0!==r?r:0)}})).sort(((e,t)=>e.display.localeCompare(t.display)))),(0,r.A)(e.filter((e=>{let{hasCM:t}=e;return t})).map((e=>{let{id:n,name:r,displayCM:l}=e;return{fractal:r,display:`${null!=l?l:r} CM`,hasCM:!0,isCM:!0,isDaily:t.includes(n),rec:0}}))))),[e,t,n]),{0:f,1:m}=(0,l.useState)((()=>c.map((e=>{let{hasCM:t,isCM:n,isDaily:r}=e;return n||!t&&r})))),d=()=>(0,o.l)((0,u.xb)(i,((e,t,n)=>{const r=t.some(((e,t)=>{let{isCM:r}=e;return n[t]&&!r})),l=t.some(((e,t)=>{let{isCM:r}=e;return n[t]&&r}));return e.filter((e=>{let{fractal:a,mode:s}=e;switch(a){case"All":return s!==u.Kt.CM||l;case"Dailies":return r;default:return t.some(((e,t)=>n[t]&&e.fractal===a&&(s===u.Kt.Both||s===u.Kt.CM&&e.isCM||(!s||s===u.Kt.Normal)&&!e.isCM)))}}))})(i,c,f))),{0:h,1:p}=(0,l.useState)(d);return l.createElement(a.PE,{isHome:!0},l.createElement(s.fz,{align:"center"},l.createElement("i",null,"Such fun! It's fantastic, isn't it?")," ~Viirastra"),l.createElement(s.z9,{to:`/v1/card?${h}`,className:a.YK.Cc,onMouseDown:()=>p(d())},"Generate Bingo"),l.createElement(a.xA,{className:a.YK.Cc},c.map(((e,t)=>{let{display:n,isDaily:o,rec:u}=e;return l.createElement(s.Sc,{key:t,checked:f[t],onChange:e=>{f[t]=e,m((0,r.A)(f)),p(d())}},l.createElement(a.so,{direction:"row",align:"center"},l.createElement("span",null,n),o?l.createElement("code",{className:a.YK.z2}," [D]"):null,u>0?l.createElement("code",{className:a.YK.z2}," [R",u,"]"):null))}))),l.createElement(s.fz,null,"This page allows you to generate a bingo card for your Fractal runs."),l.createElement(s.fz,null,"First time here? See ",l.createElement(s.N_,{to:"/how-to"},"How to play"),"."),l.createElement(s.fz,null,"Currently we feature a total of ",i.length," different bingo fields! You can see all of them ",l.createElement(s.N_,{to:"/fields"},"here"),"."),l.createElement(s.fz,null,"Got good ideas? Check the ",l.createElement(s.N_,{to:"https://github.com/Zerthox/gw2-bingo"},"GitHub Repo"),"."))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-86d654c1b68c1f565914.js.map