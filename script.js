const boot=document.getElementById("boot");
setTimeout(()=>boot.classList.add("hide"),1700);

const root=document.documentElement;
const theme=document.getElementById("theme");
const saved=localStorage.getItem("abhi-theme");
if(saved) root.dataset.theme=saved;
theme.addEventListener("click",()=>{
  const next=root.dataset.theme==="light"?"":"light";
  if(next) root.dataset.theme=next; else delete root.dataset.theme;
  localStorage.setItem("abhi-theme",next);
});

const shelf=document.getElementById("shelf");
const toys=[...shelf.children];
document.getElementById("shuffle").addEventListener("click",()=>{
  [...toys].sort(()=>Math.random()-.5).forEach(x=>shelf.appendChild(x));
});

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.animate(
    [{opacity:0,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}],
    {duration:500,easing:"cubic-bezier(.2,.8,.2,1)",fill:"forwards"}
  );io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".section,.project,.toy,.log").forEach(x=>io.observe(x));

document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",e=>{
    const el=document.querySelector(a.getAttribute("href"));
    if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}
  });
});
