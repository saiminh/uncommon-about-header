window.addEventListener("DOMContentLoaded",(()=>{if(motion){const e=document.querySelector(".uncommon-about-header");e.innerHTML=e.innerHTML+e.innerHTML,document.body.classList.add("dom-loaded");const n=document.querySelectorAll(".uncommon-about-header figure"),t=n[0].getBoundingClientRect().width,o=window.innerWidth,d=window.innerHeight,i=5,a=i/n.length;n.forEach(((e,l)=>{l==n.length-1?e.style.zIndex=0:e.style.zIndex=n.length-l,e.style.opacity=1,motion.animate(e,{x:[`${o}px`,`-${t}px`],y:[.2*d+"px",.3*d+"px",.2*d+"px",`-${.5*t}px`],scale:[.5,1,.5],rotate:["-15deg","0deg","13deg","18deg","30deg","50deg","70deg"],zIndex:[0,100]},{delay:a*l,duration:i,repeat:1/0})}))}else console.log("motion not found, this plugin uses motion as a dependency that has to be in the global scope as many plugins will use it")})),window.addEventListener("load",(()=>{document.body.classList.add("content-loaded")}));