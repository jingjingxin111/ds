// JavaScript Document
$(document).ready(function(){
     var slideShow=$(".slideShow"),
	 ul=slideShow.find("ul"),
	 oneWidth=ul.find("li").eq(0).width(),
	 nav=slideShow.find(".imgNum a"),
	 timer=null,
	 iNow=0,
	 shopClass_list=$(".shopClass_list"), 
	 shopClass_item=$(".shopClass_item"),
	 banner_sm=$(".xxx"),
	 
	 uul=banner_sm.find("ul"),
	 owidth=uul.find("li").eq(0).width(),
	 li=$(".sss a"),
	 ded=$(".nav a");
	 slideShow.hover(function(){
		clearInterval(timer)		},autoPlay)
	 nav.on("click",function(){
       var me=$(this),
	      index=me.index();
		  iNow=index;
		  ul.animate({"left":-oneWidth*iNow});
	   nav.removeClass("active");
	   me.addClass("active");
});
	 autoPlay();
	 function autoPlay(){
		 timer= setInterval(function(){
	  iNow++;
	  if(iNow>nav.length-1){
		  iNow=0;
		  }
	  nav.eq(iNow).trigger("click");
	},3000)	 
		 }
	shopClass_item.hover(function(){
	    var ss=$(this);
		shopClass_item.removeClass("shopClass_active");
		ss.addClass("shopClass_active");
		shopClass_list.removeClass("hide");
	},function(){
		shopClass_item.removeClass("shopClass_active");	
		shopClass_list.addClass("hide");
		})
	shopClass_list.hover(function(){$(this).removeClass("hide")},function(){$(this).addClass("hide")});
	
	li.hover(function(){
			var me=$(this),
			index=me.index();
			li.removeClass("active");
			me.addClass("active");
			uul.css({"left":-index*owidth})
					  });
	ded.hover(function(){
           ded.removeClass("active");
		   $(this).addClass("active");
					   })
	
})
