import React from "react";

import SliderImg1 from "../assets/img/image1.webp";
import SliderImg2 from "../assets/img/image2.webp";
import SliderImg3 from "../assets/img/image3.webp";

import BlockImg1 from "../assets/img/blockimg1.webp";
import BlockImg2 from "../assets/img/blockimg2.webp";
import BlockImg3 from "../assets/img/blockimg3.webp";

import Slider from "../components/Slider.js";
import "../assets/css/index.scss";

function Index() {
  const sliderImages = [SliderImg1, SliderImg2, SliderImg3];

  return (
    <div>
      <div className="header_main_container">
        <main className="main">
          <div className="container">
            <div className="main__section">
              <div className="main__container">
                <p className="main__text">
                  Откройте для себя удивительные места Казани
                </p>
                <p className="main__text-second">
                  Благодаря данному путеводителю вы сможете узнать о прекрасном
                  городе "Казань". Так же вы сможете рассмотреть все
                  достопримечательности этого замечательного города!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="slider__section">
        <div className="container">
          <Slider images={sliderImages} />
        </div>
      </section>

      <section className="blocks__section">
        <p className="blocks__main-text">Информация о городе</p>
        <div className="container">
          <div className="blocks">
            <div className="blocks__first-block">
              <img
                className="blocks__img-first"
                src={BlockImg1}
                alt="blockimg"
              />
              <div className="blocks__txt-block">
                <p className="blocks__first-txt">Казань</p>
                <p className="blocks__second-txt">
                  Казань — город в России, столица Республики Татарстан, порт на
                  левом берегу реки Волги при впадении в неё реки Казанки.
                  Крупнейший по численности населения город в Приволжском
                  федеральном округе и на реке Волге, пятый по численности
                  населения город в стране.
                </p>
              </div>
            </div>
            <div className="blocks__second-block">
              <div className="blocks__txt-block">
                <p className="blocks__third-txt">Основание города</p>
                <p className="blocks__fourth-txt">
                  Официальной датой основания Казани считается 1005 год. Город
                  возник на Волге, на пересечении торговых маршрутов между
                  Востоком и Западом.Современное Приволжье когда-то было землей
                  Волжской Булгарии, исторического государства в Среднем
                  Поволжье и бассейне Камы.
                </p>
              </div>
              <img
                className="blocks__img-second"
                src={BlockImg2}
                alt="blockimg"
              />
            </div>
            <div className="blocks__third-block">
              <img
                className="blocks__img-third"
                src={BlockImg3}
                alt="blockimg"
              />
              <div className="blocks__txt-block">
                <p className="blocks__fifth-txt">Народные традиции</p>
                <p className="blocks__sixth-txt">
                  Пожалуй, главная — это гостеприимство. При визите гостя татары
                  по традиции расстилают праздничную скатерть дастархан и подают
                  самые лучшие угощения: обычай требует обязательно накормить
                  пришедшего в дом. Это может быть как полноценный обед или
                  ужин, так и бесконечно долгое чаепитие со сладостями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map">
        <div className="container">
          <div className="map__text">Местоположение города</div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4e0f427510f1787b5f9ab14a2523c85e463f56b2fcc9ed2bdc071badf21968df&amp;source=constructor"
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Index;