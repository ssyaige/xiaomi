$(function(){
	var btn=$(".libtn");
	var imgs=$(".imgs");
	var btnn=$("#btnn");
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>imgs.length-1){
				index=0;
			}
		}
		if(type=="l"){
			index--;
			if(index<0){
				index=imgs.length;
			}
		}
		imgs.hide();
		imgs.eq(index).fadeIn();
		btn.css({backgroundColor:"rgba(0,0,0,0.4)",borderColor:"rgba(255,255,255,0.4)"});
		btn.eq(index).css({backgroundColor:"rgba(255,255,255,0.4)",borderColor:"rgba(0,0,0,0.4)"});
	}
	var t=setInterval(function(){demo("r");},2000);
   // $(".libtn").each(function(i,obj){
    	$(".libtn").click(function(){
    		var index1=$(this).index();
    		imgs.hide();
    		imgs.eq(index1).fadeIn();
    		btn.css({backgroundColor:"rgba(0,0,0,0.4)",borderColor:"rgba(255,255,255,0.4)"});
    		btn.eq(index1).css({backgroundColor:"rgba(255,255,255,0.4)",borderColor:"rgba(0,0,0,0.4)"});
    	   index=$(this).index();
    	})
    //})
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){demo("r");},2000)
	})
	$(".jian-left").click(function(){
		demo("l");
	})
	$(".jian-right").click(function(){
		demo("r");
	})

	//购物车
	$(".right-one").hover(function(){
		$(this).find(".gouin").stop();
		$(this).find(".gouin").slideToggle();
	})
	//下拉
$(".aa").hover(function(){
		$(this).find(".lou1box").stop();
		$(this).find(".lou1box").slideToggle();
	})
	//右拉
$(".spans").hover(function(){
			$(this).find(".topa").stop();
			$(this).find(".topa").fadeToggle();
	})
	//小米明星单品
	function move(){
		var left=$(".center2a-1box").position().left;
		if(left==-1227){
			$(".center2a-1box").animate({left:0},2000);
			$(".centerr2a-2").css("color","#B0B0B5");
			$(".centerr2a-1").css("color","#E0E0E0");
		}
		else{
			$(".center2a-1box").animate({left:-1227},2000);
			$(".centerr2a-1").css("color","#B0B0B5");
			$(".centerr2a-2").css("color","#E0E0E0");
		}
	}
	var ti=setInterval(move,3000);
	$(".centerr2a-1").click(function(){
		var left=$(".center2a-1box").position().left;
		if(left==-1227){
			move();
		}
		else{
			return;
		}
		//$(".center2a-1box").animate({left:-1227});
	})
	$(".centerr2a-2").click(function(){
		var left=$(".center2a-1box").position().left;
		if(left==0){
			move();
		}
		else{
			return;
		}
		//$(".center2a-1box").animate({left:0});
	})
	$(".centerr2a-1,.centerr2a-2").hover(function(){
		clearInterval(ti);
	},function(){
		ti=setInterval(move,3000);
	})

	//为你推荐
	function star(){
		var left=$(".center4a-1box").position().left;
		if(left==-1227){
			$(".center4a-1box").animate({left:0},2000);
			$(".centerr2aa-2").css("color","#B0B0B5");
			$(".centerr2aa-1").css("color","#E0E0E0");
		}
		else{
			$(".center4a-1box").animate({left:-1227},2000);
			$(".centerr2aa-1").css("color","#B0B0B5");
			$(".centerr2aa-2").css("color","#E0E0E0");
		}
	}
	var t1=setInterval(star,3000);
	$(".centerr2aa-1").click(function(){
		var left=$(".center4a-1box").position().left;
		if(left==-1227){
			star();
		}
		else{
			return;
		}
	})
	$(".centerr2aa-2").click(function(){
		var left=$(".center4a-1box").position().left;
		if(left==0){
			star();
		}
		else{
			return;
		}
	})
	$(".centerr2aa-1,.centerr2aa-2").hover(function(){
		clearInterval(t1);
	},function(){
		t1=setInterval(star,3000);
	})


	//选项卡
	$(".4ba").hover(function(){
		var index2=$(this).index();
		$(".center3aa").css("display","none");
		$(".4ba").css({color:"#424242",textDecoration:"none"});
		$(".center3aa").eq(index2).css("display","block");
		$(".4ba").eq(index2).css({color:"#FF6700"});
	})
	$(".4baa").hover(function(){
		var index2=$(this).index();
		$(".center3aaa").css("display","none");
		$(".4baa").css({color:"#424242",textDecoration:"none"});
		$(".center3aaa").eq(index2).css("display","block");
		$(".4baa").eq(index2).css({color:"#FF6700"});
	})
	$(".4bba").hover(function(){
		var index2=$(this).index();
		$(".center3ab").css("display","none");
		$(".4bba").css({color:"#424242",textDecoration:"none"});
		$(".center3ab").eq(index2).css("display","block");
		$(".4bba").eq(index2).css({color:"#FF6700"});
	})
    //底部轮播
    var xia=0;
    $(".center6ff1>li").click(function(){
    	var index=$(this).index();
    	xia=index;
    	$(".center6ff1>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
    	$(".imgtbox1").css({left:-219*index});
    	$(".center6ff1>li").eq(index).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})

    })
    $(".flt1").click(function(){
    	var ow=$(".imgtbox1").position().left;
    	var index=ow/-219;
    	if(index>=1){
    		xia=index-1;
		    $(".center6ff1>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox1").css({left:-219*(index-1)});
		    $(".center6ff1>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    $(".fgt1").click(function(){
    	if(xia<=2){
    		xia++;
		    $(".center6ff1>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox1").css({left:-219*xia});
		    $(".center6ff1>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })

    //two
     $(".center6ff2>li").click(function(){
    	var index=$(this).index();
    	xia=index;
    	$(".center6ff2>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
    	$(".imgtbox2").css({left:-219*index});
    	$(".center6ff2>li").eq(index).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})

    })
    $(".flt2").click(function(){
    	var ow=$(".imgtbox2").position().left;
    	var index=ow/-219;
    	if(index>=1){
    		xia=index-1;
		    $(".center6ff2>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox2").css({left:-219*(index-1)});
		    $(".center6ff2>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    $(".fgt2").click(function(){
    	if(xia<=2){
    		xia++;
		    $(".center6ff2>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox2").css({left:-219*xia});
		    $(".center6ff2>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    //three
     $(".center6ff3>li").click(function(){
    	var index=$(this).index();
    	xia=index;
    	$(".center6ff3>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
    	$(".imgtbox3").css({left:-219*index});
    	$(".center6ff3>li").eq(index).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})

    })
    $(".flt3").click(function(){
    	var ow=$(".imgtbox3").position().left;
    	var index=ow/-219;
    	if(index>=1){
    		xia=index-1;
		    $(".center6ff3>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox3").css({left:-219*(index-1)});
		    $(".center6ff3>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    $(".fgt3").click(function(){
    	if(xia<=2){
    		xia++;
		    $(".center6ff3>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox3").css({left:-219*xia});
		    $(".center6ff3>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    //four
     $(".center6ff4>li").click(function(){
    	var index=$(this).index();
    	xia=index;
    	$(".center6ff4>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
    	$(".imgtbox4").css({left:-219*index});
    	$(".center6ff4>li").eq(index).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})

    })
    $(".flt4").click(function(){
    	var ow=$(".imgtbox4").position().left;
    	var index=ow/-219;
    	if(index>=1){
    		xia=index-1;
		    $(".center6ff4>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox4").css({left:-219*(index-1)});
		    $(".center6ff4>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    $(".fgt4").click(function(){
    	if(xia<=2){
    		xia++;
		    $(".center6ff4>li").css({backgroundColor:"#B0B0B0",border:"2px solid #fff"});
		    $(".imgtbox4").css({left:-219*xia});
		    $(".center6ff4>li").eq(xia).css({backgroundColor:"white",border:"2px solid #FC6612",borderRadius:"50%"})
    	}
    	else{
    		return;
    	}
    })
    //输入框
    $(".logo-right1").click(function(event){
    	event=event||window.event;  
        event.stopPropagation();
    	$(".logo-right1").css({borderColor:"#FF6700"});
    	$(".souga").css({display:"block"});
    	$(".logo-right2").css({borderColor:"#FF6700"});
    	$(".logo-right11").css({display:"none"});
    	$(".logo-right12").css({display:"none"});
    })
    $(document).click(function(e){
    	$(".logo-right1").css({borderColor:"#ABADB3"});
    	$(".souga").css({display:"none"});
    	$(".logo-right2").css({borderColor:"#ABADB3"});
    	$(".logo-right11").css({display:"block"});
    	$(".logo-right12").css({display:"block"});
    })



})