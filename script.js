(function(){
  var INSTA = "https://www.instagram.com/gropergroper/";
  function fmt(p){
    if(typeof p==="string") return p;
    return p.toLocaleString("ko-KR")+"원";
  }
  function pad(n){return String(n).padStart(2,"0");}
  function counts(){
    var all=items.length;
    var av=items.filter(function(i){return i.status==="available";}).length;
    var sd=items.filter(function(i){return i.status==="sold";}).length;
    document.getElementById("cnt-all").textContent="("+all+")";
    document.getElementById("cnt-av").textContent="("+av+")";
    document.getElementById("cnt-sd").textContent="("+sd+")";
  }
  function render(filter){
    var grid=document.getElementById("grid");
    grid.innerHTML="";
    var list=filter==="all"?items:items.filter(function(i){return i.status===filter;});
    if(!list.length){
      grid.innerHTML="<p class=\"no-results\">해당 항목이 없습니다.</p>";
      return;
    }
    list.forEach(function(item,idx){
      var card=document.createElement("div");
      card.className="item-card "+(item.status==="sold"?"sold":"");
      card.style.animationDelay=(idx*0.04)+"s";
      var imgHtml=item.image
        ? "<img src=\""+item.image+"\" alt=\""+item.name+"\" loading=\"lazy\">"
        : "<div class=\"img-placeholder\"><span class=\"ph-num\">"+pad(item.id)+"</span><span class=\"ph-text\">Photo Soon</span></div>";
      var dotHtml=item.status==="sold"
        ? "<div class=\"sold-dot\"><span class=\"sold-dot-text\">SOLD</span></div>"
        : "";
      var tagsHtml="";
      if(item.qty>1) tagsHtml+="<span class=\"tag\">"+item.qty+"개</span>";
      var noteHtml=item.note?"<div class=\"item-note\">"+item.note+"</div>":"";
      card.innerHTML=
        "<div class=\"item-image\">"+dotHtml+imgHtml+"</div>"+
        "<div class=\"item-body\">"+
          "<div class=\"item-num\">No."+pad(item.id)+"</div>"+
          "<div class=\"item-name\">"+item.name+"</div>"+
          "<div class=\"item-price"+(item.status==="sold"?" is-sold":"")+"\">"+
            fmt(item.price)+"</div>"+
          "<div class=\"item-tags\">"+tagsHtml+"</div>"+
          noteHtml+
        "</div>";
      card.addEventListener("click",function(){openLb(item);});
      grid.appendChild(card);
    });
  }
  document.querySelectorAll(".filter-btn").forEach(function(btn){
    btn.addEventListener("click",function(){
      document.querySelectorAll(".filter-btn").forEach(function(b){b.classList.remove("active");});
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });
  function openLb(item){
    var lb=document.getElementById("lb");
    var c=document.getElementById("lb-content");
    var imgHtml=item.image
      ? "<img src=\""+item.image+"\" alt=\""+item.name+"\">"
      : "<div class=\"img-placeholder\" style=\"height:100%;min-height:240px;\"><span class=\"ph-num\">"+pad(item.id)+"</span><span class=\"ph-text\">사진 준비중</span></div>";
    var badgeHtml=item.status==="sold"?"<span class=\"lb-sold-badge\">판매완료</span>":"";
    var ctaHtml=item.status==="available"
      ? "<a href=\""+INSTA+"\" target=\"_blank\" class=\"lb-cta\">Instagram으로 문의하기 →</a>"
      : "";
    var rowHtml="";
    if(item.qty>1) rowHtml+="<div><strong>수량</strong> "+item.qty+"개</div>";
    if(item.note) rowHtml+="<div><strong>비고</strong> "+item.note+"</div>";
    rowHtml+="<div><strong>픽업</strong> 서울시 광진구 자양로 22길 79 1층 그로퍼</div>";
    rowHtml+="<div><strong>문의</strong> Instagram DM @gropergroper</div>";
    c.innerHTML=
      "<div class=\"lb-image\">"+badgeHtml+imgHtml+"</div>"+
      "<div class=\"lb-body\">"+
        "<div class=\"lb-num\">No."+pad(item.id)+"</div>"+
        "<h2 class=\"lb-name\">"+item.name+"</h2>"+
        "<div class=\"lb-price"+(item.status==="sold"?" is-sold":"")+"\">"+
          fmt(item.price)+"</div>"+
        "<hr class=\"lb-divider\">"+
        "<div class=\"lb-details\">"+rowHtml+"</div>"+
        ctaHtml+
      "</div>";
    lb.classList.add("open");
    document.body.style.overflow="hidden";
  }
  function closeLb(){
    document.getElementById("lb").classList.remove("open");
    document.body.style.overflow="";
  }
  document.getElementById("lb-close").addEventListener("click",closeLb);
  document.getElementById("lb").addEventListener("click",function(e){if(e.target===this)closeLb();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeLb();});
  counts();
  render("all");
})();
