/*globale document */
var Box1 = document.getElementById("box1"),
	Box2 = document.getElementById("box2"),
	Box3 = document.getElementById("box3"),
	Box4 = document.getElementById("box4"),
	Box5 = document.getElementById("box5"),
	Box6 = document.getElementById("box6"),
	Box7 = document.getElementById("box7"),
	Box8 = document.getElementById("box8"),
	Box9 = document.getElementById("box9"),
	B1 = document.getElementById("B1"),
	B2 = document.getElementById("B2"),
	B3 = document.getElementById("B3"),
	B4 = document.getElementById("B4"),
	B5 = document.getElementById("B5"),
	B6 = document.getElementById("B6"),
	B7 = document.getElementById("B7"),
	B8 = document.getElementById("B8"),
	B9 = document.getElementById("B9"),
	myMsg = document.getElementById("messageWin"),
	myimg = document.getElementById("replay"),
	myMsg2 = document.getElementById("messageDraw"),
	c=0;
	var checkClick=0;
/**************************** */
function getWinP1()
{
	"use strict";
	$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
	myMsg.setAttribute("class","msgwin");
	myMsg.textContent = "You Wiin !!";
	myMsg.style.visibility = "visible";
	myimg.style.visibility = "visible";
	c=0;
	checkClick=0;
	$("#myturn").text("");

}
function getWinComputer()
{
	"use strict";
	$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
	// myMsg.style.background = "#f44336";
	myMsg.setAttribute("class","msglose");
	myMsg.textContent = "You Lose !!";
	myMsg.style.visibility = "visible";
	myimg.style.visibility = "visible";
	c=0;
	checkClick=0;
	$("#myturn").text("");

}
function getDraw()
{
	"use strict";
	myimg.style.visibility = "visible";
	myMsg2.style.visibility = "visible";
	c=0;
	checkClick=0;
	$("#myturn").text("");

}
/******************************** */

window.onload = function(){
	"use strict";
    
	setTimeout(function(){
		
		"use strict";
		document.getElementById("lab1").style.display = "block";
//		document.getElementById("lab2").style.display = "block";
		$("#lab2").fadeIn(1000);
		
	},3000);
//condition click about replay
myimg.onclick = function(){
	
	"use strict";
	$(".container div,.container2 div").text("");
	myMsg.style.visibility = "hidden";
	myMsg2.style.visibility = "hidden";
	this.style.visibility = "hidden";
	if(c % 2 == 0)
	{
		$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
	}
     else
	{
		$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
	}
	
};
$(".container div").click(function(){
	"use strict";
	if($(this).text()!="")
	{
		alert("No");
	}
	else
	{
		c=c+1;
		if(c % 2 == 0)
			{
				this.textContent = "O";
				this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
				$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
			}
		else
			{
				this.textContent = "X";
				this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
				$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
			}
	   
	switch($(this).attr('id'))
		{
			case 'box1':
						if((this.textContent == "X" && Box2.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box4.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box9.textContent == "X"))
							   {
								   $("#scoreP1").text(parseInt($("#scoreP1").text())+1);
								   myMsg.style.visibility = "visible";
								   myimg.style.visibility = "visible";
							   }
					   else{
						   if((this.textContent == "O" && Box2.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box4.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box9.textContent == "O"))
							   {
								   $("#scoreP2").text(parseInt($("#scoreP2").text())+1);
								   myMsg.style.visibility = "visible";
								   myimg.style.visibility = "visible";
							   }
					   }
					   if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
				   {
				   myimg.style.visibility = "visible";
					   myMsg2.style.visibility = "visible";
				   }
				break;
			case 'box2':
					if((this.textContent == "X" && Box1.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box8.textContent == "X"))
					{
						$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
					}
					else{
						if((this.textContent == "O" && Box1.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box8.textContent == "O"))
							{
								$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
								myMsg.style.visibility = "visible";
								myimg.style.visibility = "visible";
							}
					}
					if(Box1.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
					{
						myimg.style.visibility = "visible";
						myMsg2.style.visibility = "visible";
					}
				break;
			case 'box3':
				if((this.textContent == "X" && Box2.textContent == "X" && Box1.textContent == "X")||(this.textContent == "X" && Box6.textContent == "X" && Box9.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box7.textContent == "X"))
							{
								$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
								myMsg.style.visibility = "visible";
								myimg.style.visibility = "visible";
							}
					else{
						if((this.textContent == "O" && Box2.textContent == "O" && Box1.textContent == "O")||(this.textContent == "O" && Box6.textContent == "O" && Box9.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box7.textContent == "O"))
							{
								$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
								myMsg.style.visibility = "visible";
								myimg.style.visibility = "visible";
							}
					}
					if(Box2.textContent != "" && Box1.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
						{
							myimg.style.visibility = "visible";
							myMsg2.style.visibility = "visible";
						}
				break;
			case 'box4':
					if((this.textContent == "X" && Box1.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box6.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
			else{
				if((this.textContent == "O" && Box1.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box6.textContent == "O"))
					{
						$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
					}
			}
			if(Box2.textContent != "" && Box3.textContent != "" && Box1.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
			{
				myimg.style.visibility = "visible";
				myMsg2.style.visibility = "visible";
			}
				break;
			case 'box5':
					if((this.textContent == "X" && Box2.textContent == "X" && Box8.textContent == "X")||(this.textContent == "X" && Box4.textContent == "X" && Box6.textContent == "X")||(this.textContent == "X" && Box1.textContent == "X" && Box9.textContent == "X")||(this.textContent == "X" && Box3.textContent == "X" && Box7.textContent == "X"))
						{
							$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
						}
				else{
					if((this.textContent == "O" && Box2.textContent == "O" && Box8.textContent == "O")||(this.textContent == "O" && Box4.textContent == "O" && Box6.textContent == "O")||(this.textContent == "O" && Box1.textContent == "O" && Box9.textContent == "O")||(this.textContent == "O" && Box3.textContent == "O" && Box7.textContent == "O"))
						{
							$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
						}
				}
				if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box1.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
				{
					myimg.style.visibility = "visible";
					myMsg2.style.visibility = "visible";
				}
				break;
			case 'box6':
					if((this.textContent == "X" && Box3.textContent == "X" && Box9.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box4.textContent == "X"))
				{
					$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
					myMsg.style.visibility = "visible";
					myimg.style.visibility = "visible";
				}
			else{
				if((this.textContent == "O" && Box3.textContent == "O" && Box9.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box4.textContent == "O"))
					{
						$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
					}
			}
			if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box1.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
			{
				myimg.style.visibility = "visible";
				myMsg2.style.visibility = "visible";
			}
			    break;
			case 'box7':
					if((this.textContent == "X" && Box4.textContent == "X" && Box1.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box8.textContent == "X" && Box9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
			else{
				if((this.textContent == "O" && Box4.textContent == "O" && Box1.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box8.textContent == "O" && Box9.textContent == "O"))
					{
						$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
					}
			}
			if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box1.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
			{
				myimg.style.visibility = "visible";
				myMsg2.style.visibility = "visible";
			}
				break;
			case 'box8':
				if((this.textContent == "X" && Box2.textContent == "X" && Box5.textContent == "X")||(this.textContent == "X" && Box7.textContent == "X" && Box9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
			else{
				if((this.textContent == "O" && Box2.textContent == "O" && Box5.textContent == "O")||(this.textContent == "O" && Box7.textContent == "O" && Box9.textContent == "O"))
					{
						$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
					}
			}
			if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box1.textContent != "" && Box9.textContent != "" )
			{
				myimg.style.visibility = "visible";
				myMsg2.style.visibility = "visible";
			}
				break;
			case 'box9':
				if((this.textContent == "X" && Box6.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box8.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box1.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
			else{
				if((this.textContent == "O" && Box6.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box8.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box1.textContent == "O"))
					{
						$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
					}
			}
			if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box1.textContent != "" )
			{
				myimg.style.visibility = "visible";
				myMsg2.style.visibility = "visible";
			}
				break;
		}
	}
});

$("#letgo").click(function(){
	
	if($("#p1").val()!="" && $("#p2").val()!="")
		{
//			$(this).parent().fadeOut();
			$(this).parent().css("visibility","hidden");	
			$(".boss").css("visibility","visible");	
			$(".container2").css("visibility","hidden");
			$(".container").css("visibility","visible");
			$("#Player1").text($("#p1").val().split(" ",1));
			$("#Player2").text($("#p2").val().split(" ",1));
			$("#scoreP1").text("0");
			$("#scoreP2").text("0");
			myMsg.setAttribute("class","msgwin");
			myMsg.textContent = "You Wiin !!";
			myMsg.style.visibility = "hidden";
			myMsg2.style.visibility = "hidden";
			$(".container div").text("");
			if(c % 2 == 0)
		{
			$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
		}
	else
		{
			$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
		}
		}
	else{
		$("#msgname").show();
	}
	
});
$("#letgo2").click(function(){
	
	if($("#plyr").val()!="")
		{
            c=0;
			$(this).parent().css("visibility","hidden");	
			$(".boss").css("visibility","visible");
			$(".container").css("visibility","hidden");
			$(".container2").css("visibility","visible");
			$("#Player1").text($("#plyr").val().split(" ",1));
			$("#Player2").text("Computer");
			$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !");
			$("#scoreP1").text("0");
			$("#scoreP2").text("0");
			myMsg.setAttribute("class","msgwin");
			myMsg.textContent = "You Wiin !!";
			myMsg.style.visibility = "hidden";
			myMsg2.style.visibility = "hidden";
			$(".container2 div").text("");
		}
	else{
		$("#msgname2").show();
	}
	
});

$("#startgame").click(function(){
	
//	$(this).parent().hide();
	$(this).parent().css("visibility","hidden");
//	$("#info").fadeIn();
	$("#info").css("visibility","visible");
	$("#infoVsComp").css("visibility","hidden");
});
$("#vsComp").click(function(){
	
//	$(this).parent().hide();
	$(this).parent().css("visibility","hidden");
//	$("#info").fadeIn();
	$("#infoVsComp").css("visibility","visible");
	$("#info").css("visibility","hidden");
});
$("#return").click(function(){
	$(this).parent().css("visibility","hidden");
});

$("#returnInfo").click(function(){
	
	$(this).parent().css("visibility","hidden");
	$("#begin").css("visibility","visible");
});
$("#returnInfo2").click(function(){
	
	$(this).parent().css("visibility","hidden");
	$("#begin").css("visibility","visible");
});


	$("#lab2").click(function(){
		
		$(this).parent().css("visibility","hidden");
	});
	
	$("#return").click(function(){
		
		$("#begin").css("visibility","visible");
	});
	
//********************************************************
var boxLenght = document.querySelectorAll(".container2 div");
var randBox = 0;
var passRand = 0;
var item="";

$(".container2 div").click(function(){
	"use strict";
	var items=[];
	passRand = 0;
	if($(this).text()!="")
	{
		alert("No");
	}
	else
	{
		if(checkClick==0)
		{
			checkClick = 1;
			c=c+1;
			if(c % 2 == 0)
				{
					this.textContent = "O";
					this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
					$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
				}
			else
				{
					this.textContent = "X";
					this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
					$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
				}
		 switch($(this).attr('id'))
			{
				case 'B1':
							if((this.textContent == "X" && B2.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B4.textContent == "X" && B7.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B9.textContent == "X"))
								   {
									   getWinP1();
									   return;
								   }
						   else{
							   if((this.textContent == "O" && B2.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B4.textContent == "O" && B7.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B9.textContent == "O"))
								   {
									   $("#scoreP2").text(parseInt($("#scoreP2").text())+1);
									   myMsg.style.visibility = "visible";
									   myimg.style.visibility = "visible";
									   return;
								   }
						   }
						   if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
					   {
						   getDraw();
						   return;
					   }
					break;
				case 'B2':
						if((this.textContent == "X" && B1.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B8.textContent == "X"))
						{
							getWinP1();
							return;
						}
						else{
							if((this.textContent == "O" && B1.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B8.textContent == "O"))
								{
									$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
									myMsg.style.visibility = "visible";
									myimg.style.visibility = "visible";
									return;
								}
						}
						if(B1.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
						{
							getDraw();
							return;
						}
					break;
				case 'B3':
					if((this.textContent == "X" && B2.textContent == "X" && B1.textContent == "X")||(this.textContent == "X" && B6.textContent == "X" && B9.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B7.textContent == "X"))
								{
									getWinP1();
									return;
								}
						else{
							if((this.textContent == "O" && B2.textContent == "O" && B1.textContent == "O")||(this.textContent == "O" && B6.textContent == "O" && B9.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B7.textContent == "O"))
								{
									$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
									myMsg.style.visibility = "visible";
									myimg.style.visibility = "visible";
									return;
								}
						}
						if(B2.textContent != "" && B1.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
							{
								getDraw();
								return;
							}
					break;
				case 'B4':
						if((this.textContent == "X" && B1.textContent == "X" && B7.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B6.textContent == "X"))
				{
					getWinP1();
					return;
				}
				else{
					if((this.textContent == "O" && B1.textContent == "O" && B7.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B6.textContent == "O"))
						{
							$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B1.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B5':
						if((this.textContent == "X" && B2.textContent == "X" && B8.textContent == "X")||(this.textContent == "X" && B4.textContent == "X" && B6.textContent == "X")||(this.textContent == "X" && B1.textContent == "X" && B9.textContent == "X")||(this.textContent == "X" && B3.textContent == "X" && B7.textContent == "X"))
							{
								getWinP1();
								return;
							}
					else{
						if((this.textContent == "O" && B2.textContent == "O" && B8.textContent == "O")||(this.textContent == "O" && B4.textContent == "O" && B6.textContent == "O")||(this.textContent == "O" && B1.textContent == "O" && B9.textContent == "O")||(this.textContent == "O" && B3.textContent == "O" && B7.textContent == "O"))
							{
								$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
								myMsg.style.visibility = "visible";
								myimg.style.visibility = "visible";
								return;
							}
					}
					if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B1.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
					{
						getDraw();
						return;
					}
					break;
				case 'B6':
						if((this.textContent == "X" && B3.textContent == "X" && B9.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B4.textContent == "X"))
					{
						getWinP1();
						return;
					}
				else{
					if((this.textContent == "O" && B3.textContent == "O" && B9.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B4.textContent == "O"))
						{
							$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B1.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B7':
						if((this.textContent == "X" && B4.textContent == "X" && B1.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B8.textContent == "X" && B9.textContent == "X"))
				{
					getWinP1();
					return;
				}
				else{
					if((this.textContent == "O" && B4.textContent == "O" && B1.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B8.textContent == "O" && B9.textContent == "O"))
						{
							$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B1.textContent != "" && B8.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B8':
					if((this.textContent == "X" && B2.textContent == "X" && B5.textContent == "X")||(this.textContent == "X" && B7.textContent == "X" && B9.textContent == "X"))
				{
					getWinP1();
					return;
				}
				else{
					if((this.textContent == "O" && B2.textContent == "O" && B5.textContent == "O")||(this.textContent == "O" && B7.textContent == "O" && B9.textContent == "O"))
						{
							$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B1.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B9':
					if((this.textContent == "X" && B6.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B8.textContent == "X" && B7.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B1.textContent == "X"))
				{
					getWinP1();
					return;
				}
				else{
					if((this.textContent == "O" && B6.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B8.textContent == "O" && B7.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B1.textContent == "O"))
						{
							$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B1.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
			}
	
			// const myTimeout = setTimeout(myGreeting, 5000);
			
			for(var i=0;i<boxLenght.length;i++)
			{
				if(boxLenght[i].getAttribute("id")==this.getAttribute("id"))
				{
					continue;
				}
				else
				{
					if(boxLenght[i].textContent=="")
					{
						items.push(boxLenght[i].getAttribute("id"));
					}
				}
			}
			item = items[Math.floor(Math.random()*items.length)];
			// alert(item);
			c=c+1;
			const myTimeout = setTimeout(function(){
			
				if(c % 2 == 0)
				{
					document.getElementById(item).textContent = "O";
					document.getElementById(item).style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
					$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !");
					checkClick = 0;
				}
			else
				{
					document.getElementById(item).textContent = "X";
					document.getElementById(item).style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
					$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !");
					checkClick = 0;
				}
				
			// },1500);
	
	
				// alert($("#"+item).attr("id"));
				// alert($("#"+item).text());
	
				switch($("#"+item).attr('id'))
			{
				case 'B1':
							if(($("#"+item).text() == "X" && B2.textContent == "X" && B3.textContent == "X")||($("#"+item).text() == "X" && B4.textContent == "X" && B7.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B9.textContent == "X"))
								   {
									   $("#scoreP1").text(parseInt($("#scoreP1").text())+1);
									   myMsg.style.visibility = "visible";
									   myimg.style.visibility = "visible";
									   return;
								   }
						   else{
							   if(($("#"+item).text() == "O" && B2.textContent == "O" && B3.textContent == "O")||($("#"+item).text() == "O" && B4.textContent == "O" && B7.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B9.textContent == "O"))
								   {
									//    $("#scoreP2").text(parseInt($("#scoreP2").text())+1);
									//    myMsg.style.visibility = "visible";
									//    myimg.style.visibility = "visible";
									getWinComputer();
									   return;
								   }
						   }
						   if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
					   {
						getDraw();
					   }
					break;
				case 'B2':
						if(($("#"+item).text() == "X" && B1.textContent == "X" && B3.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B8.textContent == "X"))
						{
							$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
							myMsg.style.visibility = "visible";
							myimg.style.visibility = "visible";
							return;
						}
						else{
							if(($("#"+item).text() == "O" && B1.textContent == "O" && B3.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B8.textContent == "O"))
								{
									getWinComputer();
									return;
								}
						}
						if(B1.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
						{
							getDraw();
							return;
						}
					break;
				case 'B3':
					if(($("#"+item).text() == "X" && B2.textContent == "X" && B1.textContent == "X")||($("#"+item).text() == "X" && B6.textContent == "X" && B9.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B7.textContent == "X"))
								{
									$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
									myMsg.style.visibility = "visible";
									myimg.style.visibility = "visible";
									return;
								}
						else{
							if(($("#"+item).text() == "O" && B2.textContent == "O" && B1.textContent == "O")||($("#"+item).text() == "O" && B6.textContent == "O" && B9.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B7.textContent == "O"))
								{
									getWinComputer();
									return;
								}
						}
						if(B2.textContent != "" && B1.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
							{
								getDraw();
								return;
							}
					break;
				case 'B4':
						if(($("#"+item).text() == "X" && B1.textContent == "X" && B7.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B6.textContent == "X"))
				{
					$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
					myMsg.style.visibility = "visible";
					myimg.style.visibility = "visible";
					return;
				}
				else{
					if(($("#"+item).text() == "O" && B1.textContent == "O" && B7.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B6.textContent == "O"))
						{
							getWinComputer();
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B1.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B5':
						if(($("#"+item).text() == "X" && B2.textContent == "X" && B8.textContent == "X")||($("#"+item).text() == "X" && B4.textContent == "X" && B6.textContent == "X")||($("#"+item).text() == "X" && B1.textContent == "X" && B9.textContent == "X")||($("#"+item).text() == "X" && B3.textContent == "X" && B7.textContent == "X"))
							{
								$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
								myMsg.style.visibility = "visible";
								myimg.style.visibility = "visible";
								return;
							}
					else{
						if(($("#"+item).text() == "O" && B2.textContent == "O" && B8.textContent == "O")||($("#"+item).text() == "O" && B4.textContent == "O" && B6.textContent == "O")||($("#"+item).text() == "O" && B1.textContent == "O" && B9.textContent == "O")||($("#"+item).text() == "O" && B3.textContent == "O" && B7.textContent == "O"))
							{
								getWinComputer();
								return;
							}
					}
					if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B1.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
					{
						getDraw();
						return;
					}
					break;
				case 'B6':
						if(($("#"+item).text() == "X" && B3.textContent == "X" && B9.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B4.textContent == "X"))
					{
						$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
						myMsg.style.visibility = "visible";
						myimg.style.visibility = "visible";
						return;
					}
				else{
					if(($("#"+item).text() == "O" && B3.textContent == "O" && B9.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B4.textContent == "O"))
						{
							getWinComputer();
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B1.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B7':
						if(($("#"+item).text() == "X" && B4.textContent == "X" && B1.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B3.textContent == "X")||($("#"+item).text() == "X" && B8.textContent == "X" && B9.textContent == "X"))
				{
					$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
					myMsg.style.visibility = "visible";
					myimg.style.visibility = "visible";
					return;
				}
				else{
					if(($("#"+item).text() == "O" && B4.textContent == "O" && B1.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B3.textContent == "O")||($("#"+item).text() == "O" && B8.textContent == "O" && B9.textContent == "O"))
						{
							getWinComputer();
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B1.textContent != "" && B8.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B8':
					if(($("#"+item).text() == "X" && B2.textContent == "X" && B5.textContent == "X")||($("#"+item).text() == "X" && B7.textContent == "X" && B9.textContent == "X"))
				{
					$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
					myMsg.style.visibility = "visible";
					myimg.style.visibility = "visible";
					return;
				}
				else{
					if(($("#"+item).text() == "O" && B2.textContent == "O" && B5.textContent == "O")||($("#"+item).text() == "O" && B7.textContent == "O" && B9.textContent == "O"))
						{
							getWinComputer();
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B1.textContent != "" && B9.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
				case 'B9':
					if(($("#"+item).text() == "X" && B6.textContent == "X" && B3.textContent == "X")||($("#"+item).text() == "X" && B8.textContent == "X" && B7.textContent == "X")||($("#"+item).text() == "X" && B5.textContent == "X" && B1.textContent == "X"))
				{
					$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
					myMsg.style.visibility = "visible";
					myimg.style.visibility = "visible";
					return;
				}
				else{
					if(($("#"+item).text() == "O" && B6.textContent == "O" && B3.textContent == "O")||($("#"+item).text() == "O" && B8.textContent == "O" && B7.textContent == "O")||($("#"+item).text() == "O" && B5.textContent == "O" && B1.textContent == "O"))
						{
							getWinComputer();
							return;
						}
				}
				if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B1.textContent != "" )
				{
					getDraw();
					return;
				}
					break;
			}
			},1000);
		}
	}
	// clearTimeout(myTimeout);
});
};