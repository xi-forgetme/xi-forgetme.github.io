console.log("Hi, there!")
console.log("Merry Christmas!")


//Top-up context menu
document.addEventListener('DOMContentLoaded', function(){
    var rightMenu = document.getElementById('right-menu')
    document.oncontextmenu = function(event){
        event.preventDefault();
        rightMenu.style.display = "none"
        rightMenu.style.display = "block"
        rightMenu.style.left = event.offsetX + 'px'
        rightMenu.style.top = event.offsetY + 'px'
    }
    document.onclick = function(event){
        rightMenu.style.display = "none"
    }
})
//Open a window
function createWindow(width,height,bodycontent,title,removeable){
    //http://demo.jb51.net/js/2015/js-float-window-mousemove-codes/#
	if(document.getElementById("www_jb51_net")==null){
		/*创建窗口的组成元素*/
		var dialog = document.createElement("div");
		var dialogtitlebar= document.createElement("div");
		var dialogbody = document.createElement("div");
		var dialogtitleimg = document.createElement("span");
		var dialogtitle = document.createElement("span");
		var dialogclose = document.createElement("span");
		var closeaction = document.createElement("button");
		/*为窗口设置一个id，id如此怪异是为了尽量避免与其他用户取的id相同而出错*/
		dialog.id = "223238909";
		/*组装对话框标题栏,按从里到外的顺序组装*/
		dialogtitle.innerHTML = title;
		dialogtitlebar.appendChild(dialogtitleimg);
		dialogtitlebar.appendChild(dialogtitle);
		dialogtitlebar.appendChild(dialogclose);
		dialogclose.appendChild(closeaction);
		/*组装对话框主体内容*/
		if(bodycontent!=null){
			bodycontent.style.display = "block";
			dialogbody.appendChild(bodycontent);
		}
		/*组装成完整的对话框*/
		dialog.appendChild(dialogtitlebar);
		dialog.appendChild(dialogbody);
		/*设置窗口组成元素的样式*/
		var templeft,temptop,tempheight//窗口的位置（将窗口放在页面中间的辅助变量）
		var dialogcssText,dialogbodycssText;//拼出dialog和dialogbody的样式字符串
		templeft = (document.body.clientWidth-width)/2;
		temptop = (document.body.clientHeight-height)/2;
		tempheight= height-30;
	    dialogcssText = "position:absolute;"+
                        "display: flex;"+
                        "flex-direction: column;"+
                        "border-radius: 8px;;"+
                        "top:"+temptop+"px;"+
                        "left:"+templeft+"px;"+
                        "height:"+height+"px;"+
                        "width:"+width+"px;";
		dialogbodycssText = "width:100%;"+
                            "display: flex;"+
                            "flex-direction: row;"+
                            "background: rgba(255,255,255,0.2);"+
                            "border-bottom-left-radius: 8px;"+
                            "border-bottom-right-radius: 8px;"+
                            "backdrop-filter: blur(10px);"+
                            "height:" + tempheight + "px;";
		dialog.style.cssText = dialogcssText;
		dialogtitlebar.style.cssText =  "height:30px;"+
                                        "width: "+width+"px;"+
                                        "background: rgba(255,255,255,0.3);"+
                                        "border-top-left-radius: 8px;"+
                                        "border-top-right-radius: 8px;"+
                                        "backdrop-filter: blur(10px);";
		dialogbody.style.cssText 	= dialogbodycssText;
		dialogtitleimg.style.cssText = "float:left;height:20px;width:20px;background:url(images/40.gif);"+"display:block;margin:4px;line-height:20px;";
		dialogtitle.style.cssText = "font-size:16px;float:left;display:block;margin:4px;line-height:20px;";
		dialogclose.style.cssText 	= "float:right;display:block;margin:4px;line-height:20px;";
		closeaction.style.cssText = "height:20px;"+
                                    "width:20px;"+
                                    "border-width:1px;"+
                                    "border: 1px solid rgba(255,255,255, 0.35);"+
                                    "border-radius: 50%;";
		/*为窗口元素注册事件*/
		var dialogleft = parseInt(dialog.style.left);
		var dialogtop = parseInt(dialog.style.top);
		var ismousedown = false;//标志鼠标是否按下
		/*关闭按钮的事件*/							
		closeaction.onclick = function(){
			dialog.parentNode.removeChild(dialog);
		}
		/*实现窗口的移动，这段代码很典型，网上很多类似的代码*/
		if(removeable == true){
			var ismousedown = false;
			var dialogleft,dialogtop;
			var downX,downY;
			dialogleft = parseInt(dialog.style.left);
			dialogtop = parseInt(dialog.style.top);
			dialogtitlebar.onmousedown = function(e){
			ismousedown = true;
			downX = e.clientX;
			downY = e.clientY;
			}
			document.onmousemove = function(e){
				if(ismousedown){
				dialog.style.top = e.clientY - downY + dialogtop + "px";
				dialog.style.left = e.clientX - downX + dialogleft + "px";
				}
			}
			/*松开鼠标时要重新计算当前窗口的位置*/
			document.onmouseup = function(){
				dialogleft = parseInt(dialog.style.left);
				dialogtop = parseInt(dialog.style.top);
				ismousedown = false;
			}
		}
		return dialog;	
	}//end if(if的结束)
}
