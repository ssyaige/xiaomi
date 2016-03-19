$(function(){
	var rightone=$(".right-one")[0];
	var gouin=$(".gouin")[0];
	var rightonea=$("a",rightone)[0];
	rightone.onmouseover=function(){
		gouin.style.display="block";
		rightone.style.cssText="background:white url(../img/1/2.png) no-repeat 20px 12px;";
		rightonea.style.color="#FF6700";
	}
	rightone.onmouseout=function(){
		gouin.style.display="none";
		rightone.style.cssText="background:#424242 url(../img/1/1.png) no-repeat 20px 12px;";
		rightonea.style.color="#B0B09F";
	}

	var aa=$(".aa");
	var loubox=$(".lou1box");
	for(var i=0;i<aa.length;i++){
		aa[i].index=i;
		hover(aa[i],function(){
			loubox[this.index].style.display="block";
		},function(){
			loubox[this.index].style.display="none";
		})
		
	}

	var topa=$(".topa");
	var spans=$(".spans");
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		spans[i].onmouseover=function(){
			topa[this.index].style.display="block";
		}
		spans[i].onmouseout=function(){
			topa[this.index].style.display="none";
		}
	}

	var btn=$(".libtn");
	var banner=$(".banner")[0];
	var imgs=$(".imgs");
	var num=0;
	var leftt=$(".jian-left")[0];
	var rightt=$(".jian-right")[0];
	function move(type){
		if(type=="r"){
			num++;
			if(num>=imgs.length){
				num=0;
			}
		}
		if(type=="l"){
			num--;
			if(num<0){
				num=imgs.length-1;
			}
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
			btn[i].style.backgroundColor="rgba(0,0,0,0.4)";
		    btn[i].style.borderColor="rgba(255,255,255,0.3)";
		}
		imgs[num].style.opacity=1;
		btn[num].style.backgroundColor="rgba(255,255,255,0.4)";
		btn[num].style.borderColor="rgba(0,0,0,0.4)";
	}
	var t=setInterval(function(){
		move("r");
	},2000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(function(){
		move("r");
	},2000);
	}
	for(var i=0;i<btn.length;i++){
		btn[i].index=i;
		btn[i].onclick=function(){
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.opacity=0;
				btn[j].style.backgroundColor="rgba(0,0,0,0.4)";
			    btn[j].style.borderColor="rgba(255,255,255,0.3)";
			}
			imgs[this.index].style.opacity=1;
			btn[this.index].style.backgroundColor="rgba(255,255,255,0.4)";
			btn[this.index].style.borderColor="rgba(0,0,0,0.4)";
			num=this.index;
		}

	}
	leftt.onclick=function(){
		move('l');
	}
	rightt.onclick=function(){
		move('r');
	}
	

	var t=setInterval(function(){
			demo("r");
		});
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>imgs.length){
				index=0;
			}
		}
		if(type=="l"){
			index--;
			if(index<0){
				index=imgs.length-1;
			}
		}
		imgs.hide();
		imgs.eq(index).fadeIn();
		btn.eq(index).css({background:"rgba(255,255,255,0.4)",borderColor:"rgba(0,0,0,0.4)"});
		btn.css({background:"rgba(0,0,0,0.4)",borderColor:"rgba(255,255,255,0.4)"});
	}
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			demo("r");
		})
	})
	$(".leftt").click(function(){
		demo("l");
	})

})