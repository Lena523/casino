
class View {
  constructor(container, routes, components) {
    this.container = container;
    this.routes = routes;
    this.components = components;
    this.links = this.container.querySelectorAll('#mainmenu .mainmenu__link');
    this.contentContainer = this.container.querySelector('#content');
  }

  renderContent(pageId) {
    const route = this.routes[pageId] || this.routes['error'];
    this.contentContainer.innerHTML = route.render();
    this.updateMenu(pageId);
    const fishki=document.querySelector('.cash-block');
    if((pageId=='main'||pageId=='enter'||pageId=='error'||pageId)){
      fishki.classList.add('not-seen');
    }
    if(pageId=='roulette'||pageId=='slot'){
      fishki.classList.remove('not-seen');
    }
    if (pageId === 'roulette') {
      const rouletteContainer = this.container.querySelector('#roulette-component');
      rouletteContainer.append(this.components.game1.render()); 
    }
  }

  updateMenu(activePage) {
    this.links.forEach((link) => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('active', href === activePage);
    });
  }

  selectSwitchers(event){
    const wrappers=document.querySelectorAll('.form-wrapper');
    for(let i=0;i<wrappers.length;i++){
      wrappers[i].classList.remove('is-active');
    }
    event.target.closest('.form-wrapper').classList.add('is-active');
  }

  passwordAreNotEqual(){
    alert('Пароли не совпадают!');
  }

  userAlreadyExists(){
    alert('Такой пользователь уже существует!')
  }

  clearInputsSignup(emailSignup,passwordConfirm,passwordSignup){
    emailSignup.value='';
    passwordSignup.value='';
    passwordConfirm.value='';
  }

  ableLoginButton(){
    const loginLink=document.querySelector('.login');
    loginLink.classList.remove('login-link');
  }

  ableSignupButton(){
    let signupLink=document.querySelector('.btn-signup');
    signupLink.remove();
    let form=document.querySelector('.form-signup');
    let newLink=document.createElement('div');
    newLink.innerHTML= '<button type="submit" class="btn-login "><a class="login" href="#main">Войти</a></button>';
    form.append(newLink);
  }
  clearInputsLogin(password){
    password.value='';
  }

  drawSwiper(){
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
   }

   showRouletteRules(){
      const btnRules=document.querySelector('.show-rules');
      btnRules.classList.remove('hidden');
      let mySound = new Audio('sounds/rulessound.wav');
      mySound.play();
   }

   hideRules(){
    const btnRules=document.querySelector('.show-rules');
    btnRules.classList.add('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   showChips(userData){
    const chipsBox=document.querySelector('#my-cash');
    chipsBox.value=userData.chips;
    chipsBox.name=userData.email;
   }

   loadChips(userData){
    const chipsBox=document.querySelector('#my-cash');
    chipsBox.value=userData.chips;
    chipsBox.name=userData.email;
   }

   updateChipBox(myStack){
    const chipsBox=document.querySelector('#my-cash');
    chipsBox.value-=myStack;
   }

   drawStacks(event,myStack){
     let svg=document.querySelector('svg');
     let chip=document.createElementNS(svg.namespaceURI,"image");
     chip.setAttribute("stack",`${myStack}`);
     let value=event.target.getAttribute('value');
     chip.setAttribute('numValue',value);
     let place="";
     let color="";
     if(!event.target.getAttribute("transform")){
     let className="class"+event.target.getAttribute("value");
     let temp=document.querySelector(`.${className}`);
     place=temp.getAttribute("transform");
     color=temp.getAttribute("fill");
     }
     else{
      place=event.target.getAttribute("transform");
      color=event.target.getAttribute("fill");
     } 
     chip.setAttribute("width","40");
     chip.setAttribute("height","40");
     chip.setAttribute("href","images/chip1.png");
     chip.setAttribute("transform",place);
     chip.setAttribute("fill",color);
     chip.setAttribute("class","chip");
     svg.append(chip);
     let mySound = new Audio('sounds/chipsound.wav');
     mySound.play()
   }

   deleteStacks(event){
    event.target.remove();
   }

   returnChips(event){
    const chipsBox=document.querySelector('#my-cash');
    let total=parseInt(chipsBox.value)+parseInt(event.target.getAttribute('stack'));
    chipsBox.value=total;
   }

   spinRoulette(arrNumber){
    const ball=document.querySelector('#ball');
    ball.classList.add('spin');
    ball.setAttribute('fill','white');
    ball.setAttribute('r','10');
    ball.setAttribute('cx','250');
    ball.setAttribute('cy','350');
    let mySound1 = new Audio('sounds/playsound.mp3');
    mySound1.play();
    let mySound2=new Audio('sounds/roulette.wav');
    mySound2.play();
    setTimeout(()=>this.stopSpinning(arrNumber),11000);
   }

   stopSpinning(arrNumber){
    const ball=document.querySelector('#ball');
    ball.classList.remove('spin');
    let cx=arrNumber.getAttribute("x");
    let cy=arrNumber.getAttribute("y");
    ball.setAttribute("cx",cx);
    ball.setAttribute("cy",cy);
    ball.setAttribute('transform','translate(118,216)');
    ball.setAttribute('fill','rgba(50, 0, 0, 0.1)');
    ball.setAttribute('stroke','white');
    ball.setAttribute('stroke-width','3');
    ball.setAttribute('r','22');
    arrNumber.setAttribute('font-size','18');
  }

  showResults(myPrize,arrWin,arrNumber){
    const result=document.querySelector('.get-results');
    const innerText=document.querySelector('.inner-text');
    const chosenNumber=document.querySelector('.number-chosen');
    let numberWin=arrNumber.getAttribute('numValue');
    chosenNumber.innerHTML=`<p>Сыграло число ${numberWin}</p>`;
    result.classList.remove('hidden');
    if(arrWin.length!=0){
      for(let i=0;i<arrWin.length;i++){
        let prizeStack=arrWin[i].getAttribute('numValue');
        switch(prizeStack){
          case "red":
          prizeStack="красное";
            break;
          case "black":
            prizeStack="черное";
            break;
          case "odd":
            prizeStack="нечётное";
            break;
          case "even":
            prizeStack="чётное";
            break;
        }
        let costStack=arrWin[i].getAttribute('stack');
        innerText.innerHTML+=`<p class="line-stacks">Выиграла ставка: ${costStack},  фишка  на 
        ${prizeStack} </p>`;
      }
      innerText.innerHTML+=`<p class="total-stacks">Общая сумма выигрыша составила  ${myPrize} фишек</p>`;
      let mySound=new Audio('sounds/chipbox.wav');
      mySound.play();
    }
    else{
      innerText.innerHTML=`<p class="you-lose">В этот раз вы проиграли, попробуйте еще раз!</p>`;
      let mySound=new Audio('sounds/youlose.wav');
      mySound.play();
    }
    const ball=document.querySelector('#ball');
    ball.setAttribute('cx','140');
    ball.setAttribute('cy','132');
    arrNumber.setAttribute('font-size','12');
    const chipsBox=document.querySelector('#my-cash');
    let total=parseInt(chipsBox.value)+myPrize;
    chipsBox.value=total;
    this.clearResults();
  }

  updateResults(myPrize,myStack,gameIndex){
    const currentResult=document.querySelector('.inner-text-slots');
    switch(gameIndex){
      case 0:
        currentResult.innerHTML=`<p class="inner-text-slots">В этот раз вы проиграли!<br>
         Баланс уменьшен на ${myStack} фишек</p>`;
         break;
      case 1:
        currentResult.innerHTML=`<p class="inner-text-slots">Поздравляю, вы сорвали джек-пот!!!<br>
        Выигрыш составил ${myPrize} фишек</p>`;
        let mySound1=new Audio('sounds/apllause.wav');
         mySound1.play();
        break;
      case 2:
        currentResult.innerHTML=`<p class="inner-text-slots">Поздравляю, сыграло 2 из 3!<br>
        Ваш выигрыш составил ${myPrize} фишек`;
        let myAudio=new Audio('sounds/chipbox.wav');
        myAudio.play();
        break;
    }
  }

  showSlotResults(myPrize){
    const chipsBox=document.querySelector('#my-cash');
    let total=parseInt(chipsBox.value)+myPrize;
    chipsBox.value=total;
  }

   clearResults(){
    const chips=document.querySelectorAll('.chip');
    for(let i=0;i<chips.length;i++){
      chips[i].remove();
    }
    ball.setAttribute('r','10');
    ball.setAttribute('cx','250');
    ball.setAttribute('cy','350');
    ball.setAttribute('fill','white');
    ball.setAttribute('transform','translate(0,0)');
   }

   hideWindowResults(){
    const result=document.querySelector('.get-results');
    result.classList.add('hidden');
    const innerText=document.querySelector('.inner-text');
    innerText.innerHTML="";
   }

   closeResultsWindow(slotResultsWindow){
    slotResultsWindow.classList.add('hidden');
   }

    spinSlots(){
    const startGame=document.querySelector('.start-game-slots');
    startGame.style.cssText = 'visibility:visible';
    let checkFishki=true;
    const icon_width=79,
    icon_height=79,
    num_icons=9,
    time_per_icon=100,
    iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
    const indexes=[0,0,0];
    let mySound = new Audio('sounds/slotsound.mp3');
    mySound.play();
    const roll = (reel, offset = 0) => {
		const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons)
        const style =getComputedStyle(reel),
		    backgroundPositionY = parseFloat(style['background-position-y']),
			  targetBackgroundPositionY=backgroundPositionY+delta*icon_height,
			  normTargetBackgroundPositionY=targetBackgroundPositionY%(num_icons*icon_height);

         return new Promise((resolve,reject)=>{

        let mySound = new Audio('sounds/slotsound.mp3');
        mySound.play();
				reel.style.transition = reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
				reel.style.backgroundPositionY=`${targetBackgroundPositionY}px`;

				setTimeout(()=>{
					reel.style.transition=`none`;
					reel.style.backgroundPositionY=`${normTargetBackgroundPositionY}px`;
					resolve(delta%num_icons)
				},8+delta*time_per_icon)
			  })
    	};
      this.rollAll(indexes,iconMap,roll,num_icons,checkFishki);    
   }

    rollAll(indexes,iconMap,roll,num_icons,checkFishki){
    const reelList=document.querySelectorAll('.myslots > .reel');

    Promise
    .all([...reelList].map((reel,i)=>roll(reel,i)))
    .then((deltas)=>{
      deltas.forEach((delta,i)=>indexes[i]=(indexes[i]+delta)%num_icons);
      indexes.map((index)=>{console.log(iconMap[index])})
      checkFishki=this.countSlotStacks(indexes);
      if(checkFishki){
        setTimeout(()=>this.rollAll(indexes,iconMap,roll,num_icons),5000);

      }   
    })
   }

   countSlotStacks(indexes){
    const startGame=document.querySelector('.start-game-slots');
    startGame.style.cssText = 'visibility:hidden';
    let myPrize=0;
    let gameIndex=0;
    const radioBtn=document.getElementsByName('radio');
    let myStack=0;
    for(let i=0;i<radioBtn.length;i++){
      if(radioBtn[i].type=="radio"&&radioBtn[i].checked){
        switch(i){
          case 0:
            myStack=5;
            break;
          case 1:
            myStack=10;
            break;
          case 2:
            myStack=15;
            break;
        }
      }
    } 

    const chipsBox=document.querySelector('#my-cash');
    if(chipsBox.value-myStack>=0){
      let userData={};
      userData=JSON.parse(localStorage.getItem(chipsBox.name));
      let userChips=parseInt(userData.chips);
      userChips-=myStack;
      userData.chips=userChips;
      localStorage.setItem(chipsBox.name,JSON.stringify(userData));
      this.updateChipBox(myStack);
    }
    else{
      alert("У вас недостаточно фишек для новой ставки!");  
      return false;      
    } 

    if(indexes[0]==indexes[1]&&indexes[1]==indexes[2]){
      myPrize=myStack*100;
      let userData ={};
      userData=JSON.parse(localStorage.getItem(chipsBox.name));
      let userChips=parseInt(userData.chips);
      userChips+=myPrize;
      userData.chips=userChips;
      localStorage.setItem(chipsBox.name,JSON.stringify(userData));
      gameIndex=1;
      this.showSlotResults(myPrize);
    }
    else if((indexes[0]==indexes[1]&&indexes[1]!=indexes[2])||(indexes[1]==indexes[2]&&indexes[0]!=indexes[1])){
      myPrize=myStack*4;
      let userData ={};
      userData=JSON.parse(localStorage.getItem(chipsBox.name));
      let userChips=parseInt(userData.chips);
      userChips+=myPrize;
      userData.chips=userChips;
      localStorage.setItem(chipsBox.name,JSON.stringify(userData));
      gameIndex=2;
      this.showSlotResults(myPrize);
    }
    
    const slotResultsWindow=document.querySelector('.get-results-slots ');
    slotResultsWindow.classList.remove('hidden');
    setTimeout(()=>this.closeResultsWindow(slotResultsWindow),5000);
    this.updateResults(myPrize,myStack,gameIndex,slotResultsWindow);
    return true;
   }

   showSlotRules(){
    const slotRules=document.querySelector('.show-rules-slots');
    slotRules.classList.remove('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   hideSlotRules(){
    const slotRules=document.querySelector('.show-rules-slots');
    slotRules.classList.add('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }  

   closeResultsWindow(slotResultsWindow){
    slotResultsWindow.classList.add('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   showMainMenu(){
    const user=document.querySelector('.user');
    user.classList.remove('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   concealMainMenu(){
    const main_menu=document.querySelector('.user');
    main_menu.classList.add('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   revealDelition(){
    const sure=document.querySelector('.sure');
    sure.classList.remove('hidden');
    const btns=document.querySelector('.btns');
    btns.classList.remove('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   stopDelition(){
    const sure=document.querySelector('.sure');
    sure.classList.add('hidden');
    const btns=document.querySelector('.btns');
    btns.classList.add('hidden');
    let mySound = new Audio('sounds/rulessound.wav');
    mySound.play();
   }

   userRemoved(){
    alert('Ваш профиль удален!');
    this.stopDelition();
   }

   notEnougthChips(){
    alert("У вас недостаточно фишек для новой ставки!");
   }

   fillTheFields(){
    alert('Заполните все поля!');
   }

   doTheLogin(){
    alert('Нет такого игрока! Пройдите регистрацию.');
   }

   putTheCorrectEmail(){
    alert('Введите корректный e-mail!');
   }

   theWrongPassword(){
    alert('Неверный пароль!');
   }

    openTheWeather(result){
      const weather=document.querySelector('.weather');
      weather.classList.add('hidden');
      const weatherInfo=document.querySelector('.weather-info');
      weatherInfo.innerHTML+=`<div class="forecast">

      <div class="title">${result.location.country}, ${result.location.name}</div>
      <div class="container_weather">

      <div class="image">
      <div class="icon"><img class="weather_picture" src="${result.current.weather_icons}" title="weather" alt="weather"></div>
      <div class="descr_image">${result.current.weather_descriptions}</div>
      </div>

      <div class="temp">${result.current.temperature}С</div>

      <div class="common">
      <div class="wind">Ветер: ${result.current.wind_speed}км/ч</div>
      <div class="rain">Осадки: ${result.current.humidity}мм</div>
      <div class="pressure">Давление: ${result.current.pressure}мб</div>
      </div>

      </div>
      <button class="close_weather" type="text">закрыть</button>
      </div>`
   }

   openWeatherSettings(){
    const weather=document.querySelector('.weather');
    weather.classList.toggle('hidden');
    const closeWeather=document.querySelector('.weather-info');
    closeWeather.classList.remove('hidden');
   }

  concealWeather(){
    const closeWeather=document.querySelector('.weather-info');
    closeWeather.classList.add('hidden');
    const city=document.querySelector('.city');
    city.value='';
    const weather=document.querySelector('.weather');
    weather.classList.add('hidden');
  }

  showHideWeather(){
    const music=document.querySelector('.music');
    music.classList.toggle('hidden');
  }

  closeThePage(){
   let leave=confirm("Изменения могут не сохранится. Покинуть страницу?");
   if(!leave){
    history.go(1);
   }
  }

  showQuestions(result,testIndex){
    const questionBlock=document.querySelector('.question_block');
    questionBlock.classList.remove('hidden');
    questionBlock.innerHTML=`
    <div class="testArea">раздел  ${result[testIndex].category}</div>
    <p class="difficulty">сложность вопроса - ${result[testIndex].difficulty}</p>
    <p class="test-question">${result[testIndex].question.text}</p>
    <div class="container-test">
    <div class="radio_test">
      <input id="radio-1" name="radiotest" type="radio" checked>
      <label for="radio-1" class="radio-label-test">${result[testIndex].incorrectAnswers[0]}</label>
    </div>
    <div class="radio_test">
      <input id="radio-2" name="radiotest" type="radio">
      <label  for="radio-2" class="radio-label-test">${result[testIndex].incorrectAnswers[1]}</label>
    </div>
    <div class="radio_test">
      <input id="radio-3" name="radiotest" type="radio">
      <label for="radio-3" class="radio-label-test">${result[testIndex].incorrectAnswers[2]}</label>
    </div>
    <div class="radio_test">
    <input id="radio-4" name="radiotest" type="radio">
    <label for="radio-4" class="radio-label-test">${result[testIndex].incorrectAnswers[3]}</label>
    </div>
    </div>
    <div class="buttons-test">
    <button type="text" class="answer btn-test">Ответить</button>
    <div class="right-answer btn-test hidden">Правильный ответ - ${result[testIndex].correctAnswer}</div>
    <button type="text" class="next-question btn-test ">Продолжить</button>
    <div class="cross"><img  class="grey-cross" src="images/grey-cross.svg" title="cross" alt="cross"></div>
    </div>`
  }

  openTestRules(){
    const earnFishki = document.querySelector('.earn_fishki');
    earnFishki.classList.toggle('hidden');
  }

  closeTestRules(){
    const earnFishki=document.querySelector('.earn_fishki');
    earnFishki.classList.add('hidden');
   
  }

  correctChipBox(points){
    const chipsBox=document.querySelector('#my-cash');
    let total=parseInt(chipsBox.value)+points;
    chipsBox.value=total;
  }

  openAnswer(){
    const rightAnswer=document.querySelector('.right-answer');
    rightAnswer.classList.remove('hidden');
  }

  closeRightAnswer(){
    const rightAnswer=document.querySelector('.right-answer');
    rightAnswer.classList.add('hidden');
  }

  closeTest(){
    const questionBlock=document.querySelector('.question_block');
    questionBlock.innerHTML=`
    <button type="text" class="close-test">Закрыть тест</button>`
  }

  stopTest(){
    const questionBlock=document.querySelector('.question_block');
    questionBlock.classList.add('hidden');
  }

  hideTestQuestions(){
    const questionBlock=document.querySelector('.question_block');
    questionBlock.classList.add('hidden');
  }

}

class Model {
  constructor(view) {
    this.view = view;
  }

  updateState(pageId) {
    this.view.renderContent(pageId);
  }

  checkSwitchers(event){
    this.view.selectSwitchers(event);
  }

  checkUserInfo(email,password){
    let userData ={};
    if(localStorage.getItem(email.value)){
      userData=JSON.parse(localStorage.getItem(email.value));
      if(userData.password!==password.value){
        this.view.theWrongPassword();
        this.view.clearInputsLogin(email,password);
      }
      else if(userData.password==password.value&&userData.email==email.value){
        this.view.ableLoginButton();
        this.view.loadChips(userData);
      }
    }
    else{
      this.view.doTheLogin();
      this.view.clearInputsLogin(password);
    }
  }

  storeUserInfo(emailSignup,passwordSignup,passwordConfirm){
    const reg1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!reg1.test(emailSignup.value)){
      this.view.putTheCorrectEmail();
      emailSignup.value='';
    }
    if(emailSignup.value&&passwordConfirm.value&&passwordSignup.value){
      if(!localStorage.getItem(emailSignup.value)){
        let userData={}
        userData.email=emailSignup.value;
        userData.password=passwordSignup.value;
        userData.chips=150;
        if(passwordSignup.value===passwordConfirm.value){
          localStorage.setItem(emailSignup.value,JSON.stringify(userData));
          this.view.showChips(userData);
          this.view.ableSignupButton();
          this.view.clearInputsSignup(emailSignup,passwordSignup,passwordConfirm);
        }
        else{
          this.view.passwordAreNotEqual();
          this.view.clearInputsSignup(emailSignup,passwordSignup,passwordConfirm);
        }
      }
        else{
        this.view.userAlreadyExists();
        this.view.clearInputsSignup(emailSignup,passwordSignup,passwordConfirm);
      }
    }
    else{
      this.view.fillTheFields();
    }
  }

  getSwiper(){
    this.view.drawSwiper();
  }

  makeStacks(event){
    const radioBtn=document.getElementsByName('radio');
    let myStack=0;
    for(let i=0;i<radioBtn.length;i++){
      if(radioBtn[i].type=="radio"&&radioBtn[i].checked){
        switch(i){
          case 0:
            myStack=5;
            break;
          case 1:
            myStack=10;
            break;
          case 2:
            myStack=15;
            break;
        }
      }
    }

    event.target.setAttribute("clicked",`${myStack}`);
    const chipsBox=document.querySelector('#my-cash');
    if(chipsBox.value-myStack>=0){
      event.target.setAttribute("id","table");
      let userData={};
      userData=JSON.parse(localStorage.getItem(chipsBox.name));
      let userChips=parseInt(userData.chips);
      userChips-=parseInt(event.target.getAttribute('clicked'));
      userData.chips=userChips;
      localStorage.setItem(chipsBox.name,JSON.stringify(userData));
      this.view.updateChipBox(myStack);
      this.view.drawStacks(event,myStack);
    }
    else{
      this.view.notEnougthChips();
    }   
  }

  removeStacks(event){
    let userData ={};
    const chipsBox=document.querySelector('#my-cash');
    userData=JSON.parse(localStorage.getItem(chipsBox.name));
    let userChips=parseInt(userData.chips);
    userChips+=parseInt(event.target.getAttribute('stack'))
    userData.chips=userChips;
    localStorage.setItem(chipsBox.name,JSON.stringify(userData));
    this.view.returnChips(event);
    this.view.deleteStacks(event);
  }

  startRoulette(){
    const arrNumbers=document.querySelectorAll('.number');
    let randomNumber=Math.round(Math.random() * (36 - 0 + 1) + 0);
    this.countStacks(arrNumbers[randomNumber]);
    this.view.spinRoulette(arrNumbers[randomNumber]);   
  }

  countStacks(arrNumber){
    let myPrize=0;
    let arrWin=[];
    const totalTable=document.querySelectorAll('.chip');
    for(let i=0;i<totalTable.length;i++){
      if(parseInt(arrNumber.getAttribute("numValue"))==parseInt(totalTable[i].getAttribute('numValue'))){
          myPrize+=37*parseInt(totalTable[i].getAttribute("stack")); 
          arrWin.push(totalTable[i]); 
      }
     else if(arrNumber.getAttribute('color')==totalTable[i].getAttribute('numValue')){
        myPrize+=2*parseInt(totalTable[i].getAttribute("stack"));
        arrWin.push(totalTable[i]); 
      }
      else if(arrNumber.getAttribute('divided')==totalTable[i].getAttribute('numValue')){
        myPrize+=2*parseInt(totalTable[i].getAttribute("stack"));
        arrWin.push(totalTable[i]); 
      }
    }
    let userData ={};
    const chipsBox=document.querySelector('#my-cash');
    userData=JSON.parse(localStorage.getItem(chipsBox.name));
    let userChips=parseInt(userData.chips);
    userChips+=myPrize;
    userData.chips=userChips;
    localStorage.setItem(chipsBox.name,JSON.stringify(userData));
    setTimeout(()=>this.view.showResults(myPrize,arrWin,arrNumber),13000);

  }

  closeResults(){
    this.view.hideWindowResults();
  }

  startSpinning(){
    let userData ={};
    const chipsBox=document.querySelector('#my-cash');
    userData=JSON.parse(localStorage.getItem(chipsBox.name));
    //let userChips=parseInt(userData.chips);
    const radioBtn=document.getElementsByName('radio');
    let myStack=0;
    for(let i=0;i<radioBtn.length;i++){
      if(radioBtn[i].type=="radio"&&radioBtn[i].checked){
        switch(i){
          case 0:
            myStack=5;
            break;
          case 1:
            myStack=10;
            break;
          case 2:
            myStack=15;
            break;
        }
      }
    } 
    if(chipsBox.value-myStack>=0){
      this.view.spinSlots();
    }
    else{
      this.view.notEnougthChips();
    }
  }

  openRouletteRules(){
    this.view.showRouletteRules();
  }

  closeRules(){
    this.view.hideRules();
  }

  closeSlotRules(){
    this.view.hideSlotRules();
  }

  openSlotRules(){
    this.view.showSlotRules();
  }

  revealMainMenu(){
    this.view.showMainMenu();
  }

  hideMainMenu(){
    this.view.concealMainMenu();
  }

  openDelition(){
    this.view.revealDelition();
  }

  concealDelition(){
    this.view.stopDelition();
  }

  confirmDeletion(){
    const chipsBox=document.querySelector('#my-cash');
    localStorage.removeItem(chipsBox.name);
    this.view.userRemoved();
  }

  async getTheWeather(){
    const city=document.querySelector('.city');
    console.log(city.value);
    const url = `http://api.weatherstack.com/current?access_key=12c487d644cec722d9ad37c94134430c&query=${city.value}`;
    const options = {
	  method: 'GET'
   };

   try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);
    console.log(result.location.country);
    this.view.openTheWeather(result);
  } catch (error) {
	  console.error(error);
  }
  }

  showWeatherSettings(){
    this.view.openWeatherSettings();
  }

  hideWeather(){
    this.view.concealWeather();
   }

   openCloseSound(){
    this.view.showHideWeather();
   }

   leaveThePage(){
      const pageId = location.hash.slice(1).toLowerCase();
      if(pageId=='main'){
        this.view.closeThePage();
      }
     
   }

   async takeTest(){
    const url = `https://the-trivia-api.com/v2/questions`;

    const options = {
      method: 'GET'
     };
  
     try {
      const response = await fetch(url, options);
      const result = await response.json();
      localStorage.setItem('testIndex',0);
      localStorage.setItem('gotPoints',0);
      let testIndex=JSON.parse(localStorage.testIndex);
      let randomNumber=Math.round(Math.random() * (2 - 0 + 1) + 0);
      let temp=result[testIndex].incorrectAnswers[randomNumber];
      result[testIndex].incorrectAnswers.splice(randomNumber,1,result[testIndex].correctAnswer);
      result[testIndex].incorrectAnswers.push(temp);
      
      localStorage.setItem('quiz',JSON.stringify(result));
      this.view.showQuestions(result,testIndex);
  
    } catch (error) {
      console.error(error);
    }
   }

   showTestRules(){
    localStorage.removeItem('quiz');
    localStorage.removeItem('gotPoints');
    localStorage.removeItem('testIndex');
    this.view.openTestRules();
   }

   concealTestRules(){
    this.view.closeTestRules();
   }

   loadNextQuestion(){
    let testIndex=JSON.parse(localStorage.testIndex);
    if(testIndex==9){
      this.view.closeTest();
    }
    else{
      testIndex++;
      localStorage.setItem('testIndex',JSON.stringify(testIndex));
      let result={};
      result=JSON.parse(localStorage.getItem('quiz',testIndex));
      let randomNumber=Math.round(Math.random() * (2 - 0 + 1) + 0);
      let temp=result[testIndex].incorrectAnswers[randomNumber];
      result[testIndex].incorrectAnswers.splice(randomNumber,1,result[testIndex].correctAnswer);
      result[testIndex].incorrectAnswers.push(temp);
      localStorage.setItem('quiz',JSON.stringify(result));
      this.view.showQuestions(result,testIndex);
      this.view.closeRightAnswer();
    }
   }

   checkAnswer(){
    let testIndex=JSON.parse(localStorage.testIndex);
    const result=JSON.parse(localStorage.quiz);
    const correctAnswer=result[testIndex].correctAnswer;
    const difficulty=result[testIndex].difficulty;
    let points=0;
    switch(difficulty){
      case "hard":
        points=30;
        break;
      case "medium":
          points=20;
          break;
      case "easy":
        points=10;
        break;
    }

    const radioBtns=document.getElementsByName('radiotest');
    let myAnswer='';
    for(let i=0;i<radioBtns.length;i++){
      if(radioBtns[i].type=="radio"&&radioBtns[i].checked){
        switch(i){
          case 0:
            myAnswer=result[testIndex].incorrectAnswers[0];
            break;
          case 1:
            myAnswer=result[testIndex].incorrectAnswers[1]
            break;
          case 2:
            myAnswer=result[testIndex].incorrectAnswers[2];
            break;
          case 3:
            myAnswer=result[testIndex].incorrectAnswers[3];
            break;
        }
      }
    }

     if(myAnswer==correctAnswer){
      let gotPoints=parseInt(JSON.parse(localStorage.gotPoints));
       gotPoints+=points;
       localStorage.setItem('gotPoints',JSON.stringify(gotPoints));
       const chipsBox=document.querySelector('#my-cash');
       const userData=JSON.parse(localStorage.getItem(chipsBox.name));
       let total=parseInt(userData.chips)+points;
       userData.chips=total;
       localStorage.setItem(chipsBox.name,JSON.stringify(userData));
       this.view.correctChipBox(points);
    }

    this.view.openAnswer();
   }

   hideTest(){
    localStorage.removeItem('quiz');
    localStorage.removeItem('gotPoints');
    localStorage.removeItem('testIndex');
    this.view.stopTest();
   }

   stopTestQuestions(){
    this.view.hideTestQuestions();
   }

}

class Controller {
  constructor(model,container) {
    this.model = model;
    this.container=container;
    window.addEventListener('hashchange', this.handleHashChange.bind(this));
    window.addEventListener('hashchange', this.loadSwiper.bind(this));
    window.addEventListener('DOMContentLoaded',this.loadSwiper.bind(this));
    window.addEventListener('popstate',this.beforeUnloadHandler.bind(this));
    this.content=document.querySelector('.content');
    this.content.addEventListener('click',this.handleCasino.bind(this));
  }

  init() {
    this.handleHashChange();
  }

  handleHashChange() {
    const pageId = location.hash.slice(1).toLowerCase() || 'enter';
    this.model.updateState(pageId);
    const body=document.querySelector('body');
    body.classList.remove('enter','main','roulette','slot','error');
    body.classList.add(pageId);
  }

  handleCasino(event){
    
    if(event.target.classList.contains('btn-confirm')){
      event.preventDefault();
      const email=document.querySelector('#login-email');
      const password=document.querySelector('#login-password');
      this.model.checkUserInfo(email,password);
    }

    if(event.target.classList.contains('switcher')){
      this.model.checkSwitchers(event);
    } 

    if(event.target.classList.contains('btn-signup')){
      event.preventDefault();
      const emailSignup=document.querySelector('#signup-email');
      const passwordSignup=document.querySelector('#signup-password');
      const passwordConfirm=document.querySelector('#signup-password-confirm');
      this.model.storeUserInfo(emailSignup,passwordSignup,passwordConfirm);
    }

    if(event.target.classList.contains('roulette-rules')){
      event.preventDefault();
      this.model.openRouletteRules();
    }

    if(event.target.classList.contains('close-rules')){
      event.preventDefault();
      this.model.closeRules();
    }

    if(event.target.hasAttribute("value")){
      this.model.makeStacks(event);
    }

    if(event.target.hasAttribute("stack")){
      this.model.removeStacks(event);
    }

    if(event.target.classList.contains('start-game')){
      event.preventDefault();
      this.model.startRoulette();
    }

    if(event.target.classList.contains('close-results')){
      event.preventDefault();
      this.model.closeResults();
    }

    if(event.target.classList.contains('start-game-slots')){
      event.preventDefault();
      this.model.startSpinning();
    }

    if(event.target.classList.contains('rules-slots')){
      event.preventDefault();
      this.model.openSlotRules();
    }

    if(event.target.classList.contains('close-rules-slots')){
      event.preventDefault();
      this.model.closeSlotRules();
    }

    if(event.target.classList.contains('menu-button')){
      this.model.revealMainMenu();
    }

    if(event.target.classList.contains('close')){
      this.model.hideMainMenu();
    }

    if(event.target.classList.contains('delete')){
      this.model.openDelition();
    }

    if(event.target.classList.contains('no')){
      event.preventDefault();
      this.model.concealDelition();
    }

    if(event.target.classList.contains('ok')){
      event.preventDefault();
      this.model.confirmDeletion();
    }

    if(event.target.classList.contains('back-main')){
      this.model.playSound();
    }

    if(event.target.classList.contains('checkTheWeather')){
       event.preventDefault();
       this.model.getTheWeather();
    }

    if(event.target.classList.contains('stata')){
      event.preventDefault();
      this.model.showWeatherSettings();
    }

    if(event.target.classList.contains('close_weather')){
      this.model.hideWeather();
    }

    if(event.target.classList.contains('settings')){
      event.preventDefault();
      this.model.openCloseSound();
    }

    if(event.target.classList.contains('get_fishki')){
      event.preventDefault();
      this.model.showTestRules();
    }

    if(event.target.classList.contains('start_test')){
      event.preventDefault();
      this.model.takeTest();
      this.model.concealTestRules();
    }

    if(event.target.classList.contains('next-question')){
      event.preventDefault();
      this.model.loadNextQuestion();
    }

    if(event.target.classList.contains('answer')){
      event.preventDefault();
      this.model.checkAnswer();
    }

    if(event.target.classList.contains('close-test')){
      event.preventDefault();
      this.model.hideTest();
    }

    if(event.target.classList.contains('grey-cross')){
      this.model.stopTestQuestions();
    }
  }

  loadSwiper(){
    this.model.getSwiper();
  }

  beforeUnloadHandler(){
    this.model.leaveThePage();
  }
}

class App {
  constructor({ containerId, routes, components }) {
    this.container = document.getElementById(containerId);
    this.routes = routes;
    this.components = components;
  }

  renderComponents() {
    this.container.innerHTML = `
      ${this.components.content.render()}
      ${this.components.chips.render()}
    `;
  }

  init() {
    this.renderComponents();
    const view = new View(this.container, this.routes, this.components);
    const model = new Model(view);
    const controller = new Controller(model,this.container);
    controller.init();
  }
}



