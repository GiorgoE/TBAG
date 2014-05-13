
		//var name = prompt("What is your name?");
		var name = "George";
		
		var clear = "";//clears field
		var dead = "You died.";
		var restart = "Tap here to try again";//restarts game
		var win = "Congratulations you have beaten this preview of the game!"
		
		
		var intro = "Welcome to the Text Based Adventure Game or the TBAG as it's less formally known. Once we know who you are you'll be thrown right into the game so when you're ready. Let's get started. ";
			var introA1 = "Tap here to begin the game.";
			
		var S1 = "What are you doing here " + name + "?" ;
			var S1A1 = "I want to learn to code"; //leads to S2
			var S1A2 = "I want to go on an adventure."; //leads to S3
		
		var S2 = "You are dead."; //die
		
		
		var S3 = "Cool. Come with me! </br> What would you like to do?";
			var S3A1 = "Kill dragons";//leads to s4
			var S3A2 = "Fuck Bitches. Get Money";//die
			
		var S4 = "Alright there's a dragon. How do you kill it?";
			var S4A1 = "Attack with sword";//die. leads to S2
			var S4A2 = "Shoot dragon with conveniently placed canon";//You win. leads to SWIN
			
	 
	
	 ///////// CORE FUNCTIONS ///////////
	 
	 
		function clearButtons(){
			document.getElementById("Button1").innerHTML = clear.toString();
			document.getElementById("Button2").innerHTML = clear.toString();
		}
		
		
		function restart1(){
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcS1() };		
		}
		

		function funcSWIN() {
			clearButtons();
			document.getElementById("Statement").innerHTML = win.toString();
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcS1() };
		}
        
			
			
		function fadeitoutandin(){ 
		  		$('#statementdiv').fadeOut(0);
				$("#statementdiv").fadeIn(800);
		  }
		  
		function dissapear(){ 
		  		$('#statementdiv').fadeOut(0);
		  }
		  
		function fadeitin(){ 
				$("#statementdiv").fadeIn(800);
		  }
				
////////// Intro //////////
		
		function funcIntro(){ 
			document.getElementById("Statement").innerHTML = intro.toString();
			funcIntroA1();
			
		}
			function funcIntroA1(){
					document.getElementById("Button1").innerHTML = introA1.toString();
					document.getElementById("Button1").onclick = function () { funcS1() };
					//document.onClick.$("p").fadeOut("5000"); - attempt at fade
					
				}
		
		
	////////// S1. What are you doing here? //////////
		
		function funcS1(){ 
			
			document.getElementById("Statement").innerHTML = S1.toString();
			funcS1A1();
			funcS1A2();
			
		}
		
			function funcS1A1(){
				document.getElementById("Button1").innerHTML = S1A1.toString();
				document.getElementById("Button1").onclick = function () { funcS2() };
				
			}
			
			function funcS1A2(){
				document.getElementById("Button2").innerHTML = S1A2.toString();
				document.getElementById("Button2").onclick = function () { funcS3() };
			}
			
			
	////////// S2. You are dead.//////////		
		
		function funcS2(){
			document.getElementById("Statement").innerHTML = S2.toString();
			clearButtons();
			restart1();
		}
		
		
////////// S3. Cool. Come with me! What would you like to do?//////////
		
		function funcS3(){
			document.getElementById("Statement").innerHTML = S3.toString();
			clearButtons();
			funcS3A1();
			funcS3A2();
			}
			
				function funcS3A1(){
					document.getElementById("Button1").innerHTML = S3A1.toString();
					document.getElementById("Button1").onclick = function () { funcS4() };
				}
				
				function funcS3A2(){
					document.getElementById("Button2").innerHTML = S3A2.toString();
					document.getElementById("Button2").onclick = function () { funcS2() };
				}
				
				
			
////////// S4. Alright there's a dragon. How do you kill it?//////////
		
		function funcS4(){
			document.getElementById("Statement").innerHTML = S4.toString();
			clearButtons();
			funcS4A1();
			funcS4A2();
			}
			
				function funcS4A1(){
					document.getElementById("Button1").innerHTML = S4A1.toString();
					document.getElementById("Button1").onclick = function () { funcS2() };
				}
				
				function funcS4A2(){
					document.getElementById("Button2").innerHTML = S4A2.toString();
					document.getElementById("Button2").onclick = function () { funcSWIN() };
				}		
		