let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене
let main_player2 = document.querySelector(".main_player2"); //игрок на главной сцене
let main_player3 = document.querySelector(".main_player3"); //игрок на главной сцене
let main_player4 = document.querySelector(".main_player4"); //игрок на главной сцене
let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let mastery = document.querySelector(".mastery"); //картинка msatery
let arena = document.querySelector(".arena"); //картинка арены

let player2here = 0;
let player3here = 0;
let player4here = 0;
let playercount = 1;

let location0 = document.querySelector(".location2"); //локация 0
let location2 = document.querySelector(".location2"); //локация 2
let location3 = document.querySelector(".location3"); //локация 3
let location4 = document.querySelector(".location4"); //локация 4
let bossfight = document.querySelector(".locationbossfight"); //локация 5
// let nojniBox = document.querySelector(".nojni"); //ачивка ножны
// let swordBox = document.querySelector(".sword"); //ачивка ножны
// let shieldBox = document.querySelector(".shield"); //ачивка ножны
let randomizer = function(arg){
	let random = Math.random()*arg;
	let round = Math.round(random);
	return round;
}
school.onclick = function(){
	if (player2here==0) {
		main_player.style.top = "20%";
		main_player.style.left = "70%";

		main_player2.style.top = "20%";
		main_player2.style.left = "75%";

		main_player3.style.top = "20%";
		main_player3.style.left = "80%";

		main_player4.style.top = "20%";
		main_player4.style.left = "85%";

		let loc2_variants_block = document.querySelector(".loc2_variants_block");
		let loc2_variants_block2 = document.querySelector(".loc2_variants_block2");
		let loc2_variants_block3 = document.querySelector(".loc2_variants_block3");
		let talk = document.querySelector(".loc2_talk");
		let miss = document.querySelectorAll('.loc2_variants')
		let miss2 = document.querySelectorAll('.loc2_variants2')
		let miss3 = document.querySelectorAll('.loc2_variants3')
		let prav1 = document.querySelector(".loc2_pravilno");
		let prav2 = document.querySelector(".loc2_pravilno2");
		let prav3 = document.querySelector(".loc2_pravilno3");
		

		function changeLocation2(){
			main.style.display = "none";
			body.style.backgroundImage = 'url(l2.png)';
			location2.style.display = "block";
			if (player2here == 0 ) {
				setTimeout(showBuble1, 1000);
				setTimeout(showVariants1, 2000);
			} else{
				loc2_teacher.style.display = 'none';
			}
			
		}
		function showBuble1(){
			talk.style.display = "block";
			talk.innerHTML = 'Ответь на мои вопросы если ты и в правду на нашей стороне.'
		}
		function showVariants1(){
			loc2_variants_block.style.display = "block";
		}
		function exitloc2(){
			main.style.display = "block";
			location2.style.display = "none";
			body.style.backgroundImage = 'url(bg1.png)';
			body.style.backgroundSize = 'cover';
		}
		for(let i = 0; i<miss.length;i ++){
			miss[i].onclick = function(){
				talk.innerHTML = 'ИДИ ОТСЮДА >:('
				setTimeout(exitloc2, 1000)
			}
		}
		for(let i = 0; i<miss.length;i ++){
			miss2[i].onclick = function(){
				talk.innerHTML = 'ИДИ ОТСЮДА >:('
				setTimeout(exitloc2, 1000)
			}
		}
		for(let i = 0; i<miss.length;i ++){
			miss3[i].onclick = function(){
				talk.innerHTML = 'ИДИ ОТСЮДА >:('
				setTimeout(exitloc2, 1000)
			}
		}
		prav1.onclick = function(){
			loc2_variants_block.style.display = "none";
			loc2_variants_block2.style.display = "block";
				talk.innerHTML = 'fhfhfhfhfhfhfhfhfhfhfh'
		}
		prav2.onclick = function(){
			loc2_variants_block2.style.display = "none";
			loc2_variants_block3.style.display = "block";
				talk.innerHTML = 'rutyrtyrtyrtyrtyry'
		}
		prav3.onclick = function(){
			talk.innerHTML = 'Я пойду с тобой'
			setTimeout(exitloc2, 1000)
			player2here = 1;
			playercount = playercount + 1;
			main_player2.style.display = "block";
		}
		setTimeout(changeLocation2, 1000);
	} else {
		alert("Мне нечего делать там")
	}
}		
arena.onclick = function(){
	if (player3here==0) {
	 	main_player.style.top = "7%";
		main_player.style.left = "35%";

		main_player2.style.top = "7%";
		main_player2.style.left = "40%";

		main_player3.style.top = "7%";
		main_player3.style.left = "45%";

		main_player4.style.top = "7%";
		main_player4.style.left = "50%";
		function changeLocation3(){
			main.style.display = "none";
			body.style.backgroundImage = 'url(l3.jpg)';
			location3.style.display = "block";
		}
		setTimeout(changeLocation3, 1000);

		let choosePlayer=1
		let info= document.querySelector(".info")
		info.innerHTML = 'Давай сыграем в камень ножницы бумага!'
		let chp1= document.querySelector(".choice-player-1")
		let chp2= document.querySelector(".choice-player-2")
		let rndn2 = randomizer(2);
		let playerStatus1 = null;
		let playerStatus2 = null;
		function exitloc3(){
			main.style.display = "block";
			location3.style.display = "none";
			body.style.backgroundImage = 'url(bg1.png)';
			body.style.backgroundSize = 'cover';
		}
		document.addEventListener("keydown", function (event) {
		    console.log(event.code)
		    if(choosePlayer==1){
		        if(event.code == "KeyS"){
		            console.log("игрок 1 нажал на S")
		            choosePlayer = 2;
		            playerStatus1= 'scissors'
		            info.innerHTML = 'Игрок 2 ходит!'
		        } else if(event.code == "KeyD"){
		            console.log("игрок 1 нажал на d")
		            choosePlayer = 2;
		            playerStatus1= 'paper'
		            info.innerHTML = 'Игрок 2 ходит!'
		        } else if(event.code == "KeyA"){
		            console.log("игрок 1 нажал на A")
		            choosePlayer = 2;
		            playerStatus1= 'rock'
		            info.innerHTML = 'Игрок 2 ходит!'
		        } else {
		            console.log("Не та кнопка")
		        }   
		    } 
		    if(choosePlayer == 2){
		        if(rndn2 == 0){
		            choosePlayer = 0;
		            playerStatus2= 'rock'
		            info.innerHTML = '-----'
		        } else if(rndn2 == 1){
		            choosePlayer = 0;
		            playerStatus2='scissors'
		            info.innerHTML = '-----'
		        } else if(rndn2 == 2){
		            choosePlayer = 0;
		            playerStatus2= 'paper'
		            info.innerHTML = '-----'
		        } else {
		            console.log("проблемв с кодом о нет нет нет")
		        }
		    } 
		    // let coldiv =function(){
		    //     if(playerStatus1=='scissors'){
		    //         chp1.style.backgroundImage = "url(scissors2.png)"
		    //     } else if (playerStatus1=='rock') {
		    //         chp1.style.backgroundImage = "url(rock2.png)"
		    //     } else if (playerStatus1=='paper') {
		    //         chp1.style.backgroundImage = "url(paper2.png)"
		    //     }
		    //     if(playerStatus2=='scissors'){
		    //         chp2.style.backgroundImage = "url(scissors.png)"
		    //     } else if (playerStatus2=='rock') {
		    //         chp2.style.backgroundImage = "url(rock.png)"
		    //     } else if (playerStatus2=='paper') {
		    //         chp2.style.backgroundImage = "url(paper.png)"
		    //     }
		    // }
		    let rez =function(){
		        if(playerStatus1==playerStatus2) {
		            info.innerHTML = 'Ничья... Так не пойдет! давай еще раз!'
		            setTimeout(exitloc3, 2000)
		        } else if(playerStatus1=='rock' && playerStatus2=='scissors'){
		            info.innerHTML = 'ты Победил! Хорошо я пойду с тобой!'
		            setTimeout(exitloc3, 2000)
		            main_player3.style.display = "block";
					player3here = 1;
					playercount = playercount + 1;
		        } else if(playerStatus1=='scissors' && playerStatus2=='paper'){
		            info.innerHTML = 'ты Победил! Хорошо я пойду с тобой!'
		            setTimeout(exitloc3, 2000)
		            main_player3.style.display = "block";
					player3here = 1;
					playercount = playercount + 1;
		        } else if(playerStatus1=='paper' && playerStatus2=='rock'){
		            info.innerHTML = 'ты Победил! Хорошо я пойду с тобой!'
		            setTimeout(exitloc3, 2000)
		            main_player3.style.display = "block";
					player3here = 1;
					playercount = playercount + 1;
		        } else {
		            info.innerHTML = 'Я Победила! Тебе придется сыграть со мной еще раз!'
		            setTimeout(exitloc3, 2000)
		        }
		    } 
		    if(choosePlayer == 0){
		        // setTimeout(coldiv, 500);
		        setTimeout(rez, 1000);
		    }
		})
	} else {
		alert("Мне нечего делать там")
	}
}
mastery.onclick = function() {

	main_player.style.top = "70%";
	main_player.style.left = "35%";
	main_player2.style.top = "70%";
	main_player2.style.left = "40%";
	main_player3.style.top = "70%";
	main_player3.style.left = "45%";
	main_player4.style.top = "70%";
	main_player4.style.left = "50%";

	let exit = document.querySelector(".loc4_exit");
	function changeLocation4(){
		main.style.display = "none";
		body.style.background = 'pink';
		location4.style.display = "block";
	}
	exit.onclick = function(){
		main.style.display = "block";
		location4.style.display = "none";
		body.style.backgroundImage = 'url(bg1.png)';
		body.style.backgroundSize = 'cover';
		main_player4.style.display = "block";
		player4here = 1;
		playercount = playercount + 1;
	}
	setTimeout(changeLocation4, 1000);
}