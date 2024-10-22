class Page {
  constructor({ id, title, content }) {
    this.id = id;
    this.title = title;
    this.content = content;
    document.title = title;
  }

  render(className = 'container') {
    return `
      <section class="${className}">
        <div class="content">${this.content}</div>
      </section>
    `;
  }
}

const HomePage = new Page({
  id: 'main',
  title: '',
  content: 
  `
  <nav class="menu_buttons">
  <div class="set">
  <button class="settings butt" type="text">Настройки звука</button>
  </div>

  <div class="music hidden">
  <audio controls autoplay loop>
  <source src="sounds/phone.mp3" type="audio/mpeg">
  Элемент audio не поддерживается вашим браузером. 
  <a href="audio/music.mp3">Скачайте музыку</a>.
  </audio>
  </div>

  <div class="stat">
  <button class="stata butt" type="text">Погода</button>
  <div class="weather hidden">
  <input name="city" class="city" type="text" placeholder="Город, Страна">
  <div class="checkTheWeather" type="text">смотреть погоду</div>
  </div>
  <div class="weather-info">
  </div>
  </div>

  <div class="get">
  <button class="get_fishki butt" type="text">Больше фишек</button>
  <div  class="earn_fishki hidden">
  <h6 class="title-test">Викторина 10 вопросов</h6>
  <p class="test-rules">Правильный ответ на сложный вопрос - 30 фишек</p>
  <p class="test-rules">Правильный ответ на вопрос средней сложности - 20 фишек</p>
  <p class="test-rules">Правильный ответ на легкий вопрос - 10 фишек</p>
  <button type ="text" class="start_test">Давайте уже начнем!</button>
  </div>
  <div class="question_block hidden"></div>
  </div>

  <div class="buy">
  <button class="buy_items butt" type="text">Магазин</button>
  </div>

  <div class="inf">
  <button class="info butt" type="text">Статистика</button>
  </div>

  <div class="smoke"><img class="vangog" src="images/vansmoke.gif" alt="smoke" title="smoke"></div>

  </nav>
  
  <div class="user_menu"><img class="menu-button"src="images/menu-button.png">
  <div class="user hidden ">
  <div class="go_out menu_point"><a class="exit main-back" href="#enter">Выйти</a></div>
  <div class="delete menu_point">Удалить профиль
  <p class="sure hidden">Вы уверены?
  <div class="btns hidden">
  <button class="ok btn" type ="text">Да</button>
  <button class="no btn" type ="text">Нет</button>
  </div>
  </p>
  </div>
  <div class="close menu_point">Закрыть</div>
  </div>
  </div>
  </div>

  <div class="swiper mySwiper">
  <div class="swiper-wrapper">
  <div class="swiper-slide roulette">
  <p class="play-game"><a class="main-link" href="#roulette">Играть</a></p>
  <img src="images/card1-main.png"/>
  </div>
  <div class="swiper-slide slots">
  <p class="play-game"><a class="main-link" href = "#slot">Играть</a></p>
  <img src="images/card2-main.png" />
  </div>
  <div class="swiper-slide cards">
  <p class="play-game"><a class="main-link" href="#">Играть</a></p>
  <img src="images/card4-main.png"/>
  </div>
  <div class="swiper-slide cards">
  <p class="play-game"><a class="main-link" href="#">Играть</a></p>
  <img src="images/card5-main.png"/>
  </div>
  <div class="swiper-slide cards">
  <p class="play-game"><a class="main-link" href="#">Играть</a></p>
  <img src="images/card6-main.png"/>
  </div>
  <div class="swiper-slide cards">
  <p class="play-game"><a class="main-link" href="#">Играть</a></p>
  <img src="images/card7-main.png"/>
  </div>
  </div>
  </div>`,
});


const ErrorPage = new Page({
  id: 'error',
  title: '',
  content: `<section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>		
		</div>		
		<div class="contant_box_404">
		<h3 class="h2">
		Похоже вы потерялись....
		</h3>		
		<p>Страницы, которую вы ищете, не существует!</p>		
		<a class="link_404 main-back" href="#enter">Вернуться домой</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>`,
});

const SlotPage = new Page({
 id: 'slot',
 title: '',
 content:`
 <div class="container-title-slots">
 <span>М</span>
 <span>о</span>
 <span>и</span>
 <span> </span>
 <span> </span>
 <span>с</span>
 <span>л</span>
 <span>о</span>
 <span>т</span>
 <span>ы</span>
</div>
   <div class="myslots spin-slots">
 <div class="reel"></div>
 <div class="reel"></div>
 <div class="reel"></div>
</div>
<button  class="rules-slots" type="text">Правила</button>
<button class="back-main" type="text"><a class="main-back" href="#main">Выйти</a></button>
<div class="slot-image"><img class="slot-machine" src="images/slot12.png" title="slot-machine" alt="slot-machine"></div>
<form class="play">
    <fieldset>
        <legend class="put_slots">Выберите ставку</legend>
        <div class="container-slots">
            <div class="radio-slots">
              <input id="radio-1" name="radio" type="radio" checked>
              <label for="radio-1" class="radio-label">5 фишек</label>
            </div>
          
            <div class="radio-slots">
              <input id="radio-2" name="radio" type="radio">
              <label  for="radio-2" class="radio-label">10 фишек</label>
            </div>
          
            <div class="radio-slots">
              <input id="radio-3" name="radio" type="radio">
              <label for="radio-3" class="radio-label">15 фишек</label>
            </div>
          </div>
        <button class="start-game-slots" type="submit">начать</button>
    </fieldset>
</form>
<div class="show-rules-slots hidden">
<h3 class="read-rules">Правила игры в слоты</h3>
<ul class="list-rules">
<li class="point">Выбираем ставку</li>
<li class="point">Нажимаем на кнопку играть</li>
<li class="point">Выигрышная комбинация 2 подряд слота</li>
<li class="point">Комбинация джек-пот 3 одинаковых слота</li>
<li class="point">После вращения слота подсчитываем выйгрыш!</li>
</ul>
<br>
<h6 class="prize-points">Шансы слота</h6>
<ol class="conditions">
<li class="cond">Два подряд одинаковых - выигрыш 1 к 4</li>
<li class="cond">Джек-пот - выигрыш 1 к 100</li>
<li class="cond">Выигрыш учитывается с любой стороны</li>
</ol>
<button type="text" class="close-rules-slots">Понятно</button>
</div>
<div class="get-results-slots hidden">
<p class="inner-text-slots"></p>
</div>
`
});

const EnterPage = new Page({
  id:'enter',
  title:'',
  content:`
  <div class="shine">My humble casino</div>
  <section class="forms-section">
  <div class="forms">
    <div class="form-wrapper is-active">
      <button type="button" class="switcher switcher-login">
        Вход
        <span class="underline"></span>
      </button>
      <form class="form form-login">
        <fieldset>
          <legend>Пожалуста, введите вашу почту и пароль.</legend>
          <div class="input-block">
            <label for="login-email">Почта</label>
            <input id="login-email" class="login-email" autocomplete="on" type="email" required>
          </div>
          <div class="input-block">
            <label for="login-password">Пароль</label>
            <input id="login-password" class="ligin-password" autocomplete="on" type="password" required>
          </div>
        </fieldset>
        <button type="submit" class="btn-confirm">Подтвердить</button>
        <button type="submit" class="btn-login"><a class="login login-link" href="#main">Войти</a></button>
      </form>
    </div>
    <div class="form-wrapper">
      <button type="button" class="switcher switcher-signup">
      Регистрация
        <span class="underline"></span>
      </button>
      <form class="form form-signup">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div class="input-block">
            <label for="signup-email">Почта</label>
            <input id="signup-email" class="signup-email" autocomplete="on" type="email" required>
          </div>
          <div class="input-block">
            <label for="signup-password">Пароль</label>
            <input id="signup-password" autocomplete="on" type="password" required>
          </div>
          <div class="input-block">
            <label for="signup-password-confirm">Подтвердить пароль</label>
            <input id="signup-password-confirm" autocomplete="on" type="password" required>
          </div>
        </fieldset>
        <button type="submit" class="btn-signup">Продолжить</button>
      </form>
    </div>
  </div>
</section>`,

});

const RoulettePage=new Page({
id:'roulette',
title:'',
content:`
<form class="get-info">
<button  class="roulette-rules" type="text">Правила</button>
<button class="back_to_main" type="text"><a class="main-back" href="#main">Выйти</a></button>
</form>
<form class="play">
    <fieldset>
        <legend>Выберите ставку</legend>
        <div class="container">
            <div class="radio_roulette">
              <input id="radio-1" name="radio" type="radio" checked>
              <label for="radio-1" class="radio-label">5 фишек</label>
            </div>
          
            <div class="radio_roulette">
              <input id="radio-2" name="radio" type="radio">
              <label  for="radio-2" class="radio-label">10 фишек</label>
            </div>
          
            <div class="radio_roulette">
              <input id="radio-3" name="radio" type="radio">
              <label for="radio-3" class="radio-label">15 фишек</label>
            </div>
          </div>
        <p>Нажмите на выбранные участки поля</p>
        <button class="start-game" type="submit">играть</button>
    </fieldset>
</form>
<div class="show-rules hidden">
<h3>Правила игры в рулетку</h3>
<ul class="list">
<li>Выбираем ставку</li>
<li>Нажимаем на поля с выбранными ставками</li>
<li>Нажимаем кнопку начать</li>
<li>После вращения рулетки подсчитываем выигрыш!</li>
</ul>
<br>
<h6>Шансы рулетки</h6>
<ol>
<li>Ставка на число - выигрыш 1 к 37</li>
<li>Ставка на цвет - выигрыш 1 к 2</li>
<li>Ставка на четное/нечетное - выигрыш 1 к 2</li>
</ol>
<button type="text" class="close-rules">Понятно</button>
</div>
<div class="get-results hidden">
<p class="number-chosen"></p>
<p class="my-results">Ваши результаты:</p>
<p class="inner-text"></p>
<button class="close-results">Понятно</button>
</div>
<div id="roulette-component"></div>
`,
});