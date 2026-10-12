const TG_USERNAME = "Moghavem313";

const TG_LINK = "tg://resolve?domain=" + TG_USERNAME;

const PRODUCTS = [
  { id:"numbers", title:"🌐شماره مجازی📞", desc:"شماره مجازی از ۲۳ کشور مختلف برای فعال‌سازی تلگرام و سایر پیام‌رسان‌ها", price:160000, emoji:"📱", action:"numbers", img:"Images/virtual-number-countries.jpg" },
  { id:"fake-acc", title:"اکانت جعلی(Fake)", desc:"اکانت تلگرام با تگ مستطیلی «Fake» در کنار نام اکانت", price:420000, mock:{label:"Account", tag:"Fake"} },
  { id:"scam-acc", title:"اکانت  Scam", desc:"اکانت تلگرام با تگ مستطیلی «Scam» در کنار نام اکانت", price:400000, mock:{label:"Account", tag:"Scam"} },
  { id:"fake-ch", title:" چنل جعلی(Fake)", desc:"کانال تلگرام با تگ مستطیلی «Fake» در کنار نام کانال", price:300000, mock:{label:"Channel", tag:"Fake"} },
  { id:"scam-ch", title:"چنل  Scam", desc:"کانال تلگرام با تگ مستطیلی «Scam» در کنار نام کانال", price:250000, mock:{label:"Channel", tag:"Scam"} },
  { id:"gifts", title:"🧸گیفت تلگرام و NFT", desc:"روی دکمه خرید بزنید تا تمام گیفت ها را ببینید", price:null, emoji:"🎁", action:"gifts", img:"Images/1356a6dc-b9bf-49d5-8ef3-d3a38de05313.jpg" },
  { id:"vpn", title:"کانفیگ V2ray هر گیگ", desc:"پرسرعت و پایدار بدون قطعی", price:8000, emoji:"🛡️", img:"Images/a5bdca81-82d6-4507-a049-e98366ef9023.jpg" },
  { id:"self", title:"🤖سلف تلگرام", desc:"سلف ۳ ماهه برای اکانت تلگرام", price:200000, emoji:"🤖", img:"Images/89d294a0-8bb6-4fcd-aefc-70153cdafd3f.jpg" },
  { id:"tg-services", title:"خدمات کانال و گروه تلگرام", desc:"بوست، ممبر، ویو و ری اکشن پست برای کانال و گروه تلگرام", price:null, emoji:"🚀", img:"Images/e357bfe3-ac5e-4344-966b-f8548a131967.jpg" },
  { id:"insta", title:"خدمات اینستاگرام", desc:"فالوور، لایک، کامنت و سایر خدمات اینستاگرام", price:null, emoji:"📸", img:"Images/instagram-services.jpg" },
  { id:"rubika", title:"خدمات روبیکا", desc:"تمام خدمات اپلیکیشن روبیکا", price:null, emoji:"💬", img:"Images/rubika-services.jpg" },
  { id:"premium", title:"پرمیوم تلگرام", desc:"اشتراک پرمیوم ۳، ۶ و ۱۲ ماهه تلگرام", price:null, emoji:"💎", img:"Images/telegram-premium-logo.jpg" },
  { id:"stars", title:"⭐استارز تلگرام", desc:"با استارز برای خودت یا هرکی که دوسش داری گیفت بخر و هدیه بده", price:null, emoji:"⭐", img:"Images/382d50d2-3289-4c54-a229-9053cc7d0ea9.jpg" },
  { id:"all", title:"تمام خدمات مجازی...", desc:"هر خدمات مجازی که نیاز دارید، فقط کافیه به ما بسپارید", price:null, emoji:"🌐" }
];

const COUNTRIES = [
  ["🇮🇷","ایران"],["🇺🇸","آمریکا"],["🇷🇺","روسیه"],["🇫🇯","فیجی"],["🇮🇩","اندونزی"],["🇹🇭","تایلند"],
  ["🇩🇪","آلمان"],["🇮🇶","عراق"],["🇪🇸","اسپانیا"],["🇹🇷","ترکیه"],["🇦🇺","استرالیا"],["🇳🇱","هلند"],
  ["🇮🇹","ایتالیا"],["🇺🇦","اوکراین"],["🇧🇪","بلژیک"],["🇫🇷","فرانسه"],["🇦🇪","امارات متحده عربی"],
  ["🇮🇳","هند"],["🇧🇷","برزیل"],["🇲🇽","مکزیک"],["🇨🇦","کانادا"],["🇷🇴","رومانی"],["🇦🇹","اتریش"]
];

const GIFTS = [
  ["🧸","تدی"],["💝","قلب"],["🌹","رز قرمز"],["🎁","جعبه کادو"],["🎂","کیک"],["💐","دسته گل"],
  ["🚀","موشک"],["🍾","بطری شامپاین"],["🏆","جام قهرمانی"],["💍","حلقه ازدواج"],["💎","الماس"],["🧢","تمام گیفت های NFT"]
];


function tgWith(text){ return TG_LINK + "&text=" + encodeURIComponent(text); }
function openTelegram(text){ window.location.href = text ? tgWith(text) : TG_LINK; }


document.querySelectorAll("[data-tg]").forEach(el=>{
  el.setAttribute("href", TG_LINK);
});


const grid = document.getElementById("grid");
const fmt = n => Number(n).toLocaleString("fa-IR");

PRODUCTS.forEach(p=>{
  const card = document.createElement("div");
  card.className = "card";

  let pic;
  if(p.img) pic = `<img src="${p.img}" alt="${p.title}" loading="lazy">`;
  else if(p.mock) pic = `<div class="mock"><i></i>${p.mock.label} <span class="tag">${p.mock.tag}</span></div>`;
  else pic = `<span class="emo">${p.emoji}</span>`;

  const priceHtml = p.price
    ? `<div class="price">${fmt(p.price)} تومان</div>`
    : `<div class="price ask">قیمت: در تلگرام بپرسید</div>`;

  card.innerHTML = `
    <div class="pic">${pic}</div>
    <div class="info">
      <div class="name">${p.title}</div>
      <div class="desc">${p.desc}</div>
      ${priceHtml}
      <button class="buy" type="button">خرید</button>
    </div>`;

  card.addEventListener("click", ()=>{
    const msg = p.msg || `سلام، من ${p.title} می‌خوام.`;
    if(p.action === "numbers") openSheet("numbers");
    else if(p.action === "gifts") openSheet("gifts");
    else openTelegram(msg);
  });
  grid.appendChild(card);
});


const io = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
},{threshold:.1});
document.querySelectorAll(".card").forEach(c=>io.observe(c));


const sheet = document.getElementById("sheet");
const sheetTitle = document.getElementById("sheetTitle");
const sheetMsg = document.getElementById("sheetMsg");
const sheetList = document.getElementById("sheetList");

function openSheet(type){
  const data = type === "numbers" ? COUNTRIES : GIFTS;
  sheetTitle.textContent = type === "numbers" ? "شماره مجازی" : "گیفت‌های تلگرام";
  sheetMsg.textContent = type === "numbers"
    ? "شماره‌ای که از هر کشور می‌خواهید را انتخاب کنید 👇"
    : "گیفت مورد نظرتان را انتخاب کنید 👇";
  sheetList.innerHTML = "";
  data.forEach(([emo,name])=>{
    const a = document.createElement("a");
    a.className = "item";
    a.href = tgWith(type === "numbers"
      ? `سلام، من شماره مجازی ${name} می‌خوام.`
      : `سلام، من «${name}» رو می‌خوام.`);
    a.innerHTML = `<span class="e">${emo}</span><span>${name}</span>`;
    sheetList.appendChild(a);
  });
  sheet.classList.add("open");
  sheet.setAttribute("aria-hidden","false");
  sheet.querySelector(".sheet-body").scrollTop = 0;
  document.body.style.overflow = "hidden";
  history.pushState({sheet:true}, "");
}
function closeSheet(){
  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
document.getElementById("sheetBack").addEventListener("click", ()=>{
  if(history.state && history.state.sheet) history.back(); else closeSheet();
});
window.addEventListener("popstate", closeSheet);


window.addEventListener("load", ()=>{
  setTimeout(()=>document.getElementById("splash").classList.add("hide"), 2300);
});

const lines = ["> فروشگاه شاپ استار", "> ✔تمام خدمات مجازی ", "> ✔پشتیبانی 24 ساعته "];
const typed = document.getElementById("typed");
let li = 0, ci = 0, del = false;
(function type(){
  const cur = lines[li];
  typed.textContent = cur.slice(0, ci);
  if(!del && ci < cur.length){ ci++; setTimeout(type, 55); }
  else if(!del){ del = true; setTimeout(type, 1400); }
  else if(ci > 0){ ci--; setTimeout(type, 22); }
  else { del = false; li = (li + 1) % lines.length; setTimeout(type, 300); }
})();

(function matrix(){
  const c = document.getElementById("matrix");
  const ctx = c.getContext("2d");
  const chars = "01アイウエオカキクケコ{}<>/\\*+=ABCDEF";
  let cols, drops, size = 16;
  function resize(){
    c.width = innerWidth; c.height = innerHeight;
    cols = Math.floor(c.width / size);
    drops = Array.from({length: cols}, ()=>Math.random() * c.height / size);
  }
  resize(); addEventListener("resize", resize);
  setInterval(()=>{
    ctx.fillStyle = "rgba(7,7,10,.12)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#ff1f45";
    ctx.font = size + "px monospace";
    for(let i = 0; i < cols; i++){
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * size, drops[i] * size);
      if(drops[i] * size > c.height && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    }
  }, 60);
})();


const menuBtn = document.getElementById("menuBtn");
const menuEl = document.getElementById("menu");
const menuOverlay = document.getElementById("menuOverlay");

function setMenu(open){
  menuEl.classList.toggle("open", open);
  menuOverlay.classList.toggle("show", open);
  menuEl.setAttribute("aria-hidden", open ? "false" : "true");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
}
menuBtn.addEventListener("click", ()=>setMenu(true));
document.getElementById("menuClose").addEventListener("click", ()=>setMenu(false));
menuOverlay.addEventListener("click", ()=>setMenu(false));
document.querySelectorAll(".menu-item").forEach(a=>a.addEventListener("click", ()=>setMenu(false)));