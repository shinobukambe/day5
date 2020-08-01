<template>
  <div>
    <div class="container">

       <hero />
       <misson />
       <results :items="results.items" />
       <features />

      <section id="business" class="sec sec__business">
        <p class="sec__heading sec__heading--verH">business</p>
        <div class="sec sec__business1">
          <div class="container__inner">
            <div class="mb50 heading heading--center anim anim--scroll anim--bottom">
              <div class="heading__inner">
                <p class="heading__en">business</p>
                <h2 class="heading__jp">キカガクの事業内容</h2>
              </div>
            </div>
            <div class="businessF__container anim anim--scroll anim--bottom">
              <div class="businessF__image">
                <img src="~assets/img/front/business/training.jpg" srcset="~assets/img/front/business/training.jpg 1x,~assets/img/front/business/training-2x.jpg 2x" class="img__fit" alt="研修事業">
              </div>
              <div class="businessF__content">
                <div class="mb25 businessF__box">
                  <h3 class="businessF__box__heading">研修事業</h3>
                  <div class="businessF__box__inner">
                    <p class="businessF__box__text">AI技術を基に、業界・業種に特化した<br>企画の立ち上げや講座を展開</p>
                  </div>
                  <div class="businessF__box__illust">
                    <img src="~assets/img/front/business/illust.png" srcset="~assets/img/front/business/illust.png 1x,~assets/img/front/business/illust-2x.png 2x" class="img__fit" alt="men">
                  </div>
                </div>
                <p class="text">ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sec sec__business2">
          <div class="container__inner">
            <div id="business-short-course" class="mb60">
              <div class="mb30 businessF2__title__container businessF2__title__container--green anim anim--scroll anim--bottom">
                <span>01</span>
                <h3 class="businessF2__title">短期コース</h3>
                <span>2 〜 3 DAY</span>
              </div>
              <div class="businessF2__container hover__container">
                <div>
                  <p class="mb10 businessF2__catch">研修なのに実務が体験できる</p>
                  <div class="businessF2__image businessF2__image--green">
                    <div class="img__scale">
                      <img src="~assets/img/front/business/short1.jpg" srcset="~assets/img/front/business/short1.jpg 1x,~assets/img/front/business/short1-2x.jpg 2x" class="img__fit" alt="">
                    </div>
                  </div>
                  <div class="business__btn anim anim--scroll anim--scale">
                    <div class="btn btn--square btn--arrow btn--green">
                      <div class="btn--square__effect"></div>
                      <a href="#">コースの詳細を見る</a>
                    </div>
                  </div>
                  <h4 class="businessF2__heading businessF2__heading--green">アセスメント人材育成コース</h4>
                  <div class="businessF2__box businessF2__box--green">
                    <h5 class="businessF2__box__heading">こんな方にオススメ</h5>
                    <p class="text businessF2__box__text">AI開発の流れを体験し、ビジネスに活用したい方</p>
                  </div>
                </div>
                <div>
                  <p class="mb10 businessF2__catch">たった3日間で初学者でも<br>ディープラーニングを実装できる。</p>
                  <div class="businessF2__image businessF2__image--purple">
                    <div class="img__scale">
                      <img src="~assets/img/front/business/short2.jpg" srcset="~assets/img/front/business/short2.jpg 1x,~assets/img/front/business/short2-2x.jpg 2x" class="img__fit" alt="">
                    </div>
                  </div>
                  <div class="business__btn anim anim--scroll anim--scale">
                    <div class="btn btn--square btn--arrow btn--purple">
                      <div class="btn--square__effect"></div>
                      <a href="#">コースの詳細を見る</a>
                    </div>
                  </div>
                  <h4 class="businessF2__heading businessF2__heading--purple">ディープラーニング<br>ハンズオンセミナー</h4>
                  <div class="businessF2__box businessF2__box--purple">
                    <h5 class="businessF2__box__heading">こんな方にオススメ</h5>
                    <p class="text businessF2__box__text">職種問わずAI・ディープラーニングの理解を深めたい方</p>
                  </div>
                </div>
                <div>
                  <p class="mb10 businessF2__catch">豊富な演習でデータ分析力と<br>実装力を身につける</p>
                  <div class="businessF2__image businessF2__image--orange">
                    <div class="img__scale">
                      <img src="~assets/img/front/business/short3.jpg" srcset="~assets/img/front/business/short3.jpg 1x,~assets/img/front/business/short3-2x.jpg 2x" class="img__fit" alt="">
                    </div>
                  </div>
                  <div class="business__btn anim anim--scroll anim--scale">
                    <div class="btn btn--square btn--arrow btn--orange">
                      <div class="btn--square__effect"></div>
                      <a href="#">コースの詳細を見る</a>
                    </div>
                  </div>
                  <h4 class="businessF2__heading businessF2__heading--orange">機械学習実践コース</h4>
                  <div class="businessF2__box businessF2__box--orange">
                    <h5 class="businessF2__box__heading">こんな方にオススメ</h5>
                    <p class="text businessF2__box__text">職種問わずデータに基づいた意思決定を行いたい方</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="business-long-course">
              <div class="mb30 businessF2__title__container businessF2__title__container--blue anim anim--scroll anim--bottom">
                <span>02</span>
                <h3 class="businessF2__title">長期コース</h3>
                <span>6 MONTH</span>
              </div>
              <div class="businessF2__container hover__container">
                <div>
                  <p class="mb10 businessF2__catch">AIをあなたの手の中に</p>
                  <div class="businessF2__image businessF2__image--green">
                    <div class="img__scale">
                      <img src="~assets/img/front/business/long1.jpg" srcset="~assets/img/front/business/long1.jpg 1x,~assets/img/front/business/long1-2x.jpg 2x" class="img__fit" alt="">
                    </div>
                  </div>
                  <div class="business__btn anim anim--scroll anim--scale">
                    <div class="btn btn--square btn--arrow btn--green">
                      <div class="btn--square__effect"></div>
                      <a href="#">コースの詳細を見る</a>
                    </div>
                  </div>
                  <h4 class="businessF2__heading businessF2__heading--green">自走できるAI人材になるための<br>長期コース</h4>
                  <div class="businessF2__box businessF2__box--green">
                    <h5 class="businessF2__box__heading">こんな方にオススメ</h5>
                    <p class="text businessF2__box__text">職種問わず、AIを学びたいと思っている全ての方</p>
                  </div>
                </div>
                <div>
                  <p class="mb10 businessF2__catch">実現場で明日から使える技術を学ぶ</p>
                  <div class="businessF2__image businessF2__image--purple">
                    <div class="img__scale">
                      <img src="~assets/img/front/business/long2.jpg" srcset="~assets/img/front/business/long2.jpg 1x,~assets/img/front/business/long2-2x.jpg 2x" class="img__fit" alt="">
                    </div>
                  </div>
                  <div class="business__btn anim anim--scroll anim--scale">
                    <div class="btn btn--square btn--arrow btn--purple">
                      <div class="btn--square__effect"></div>
                      <a href="#">コースの詳細を見る</a>
                    </div>
                  </div>
                  <h4 class="businessF2__heading businessF2__heading--purple">製造業特化型<br>AI人材育成コース</h4>
                  <div class="businessF2__box businessF2__box--purple">
                    <h5 class="businessF2__box__heading">こんな方にオススメ</h5>
                    <p class="text businessF2__box__text">AIを使って現場の問題解決に臨みたい製造業に関わる方</p>
                  </div>
                </div>
                <div>
                  <p class="mb10 businessF2__catch">AIと英語を同時に学ぶ</p>
                  <div class="businessF2__image businessF2__image--orange">
                    <div class="img__scale">
                      <img src="~assets/img/front/business/long3.jpg" srcset="~assets/img/front/business/long3.jpg 1x,~assets/img/front/business/long3-2x.jpg 2x" class="img__fit" alt="">
                    </div>
                  </div>
                  <div class="business__btn anim anim--scroll anim--scale">
                    <div class="btn btn--square btn--arrow btn--orange">
                      <div class="btn--square__effect"></div>
                      <a href="#">コースの詳細を見る</a>
                    </div>
                  </div>
                  <h4 class="businessF2__heading businessF2__heading--orange">AI×英語コース</h4>
                  <div class="businessF2__box businessF2__box--orange">
                    <h5 class="businessF2__box__heading">こんな方にオススメ</h5>
                    <p class="text businessF2__box__text">ダミーテキスト。ダミーテキスト。ダミーテキス</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sec sec__business3">
          <div class="container__inner">
            <div class="businessF3__container hover__container">
              <div>
                <div class="businessF3__image businessF3__image--purple">
                  <div class="img__scale">
                    <img src="~assets/img/front/business/kaihatsu.jpg" srcset="~assets/img/front/business/kaihatsu.jpg 1x,~assets/img/front/business/kaihatsu-2x.jpg 2x" class="img__fit" alt="事業開発支援">
                  </div>
                </div>
                <div class="business__btn anim anim--scroll anim--scale">
                  <div class="btn btn--square btn--arrow btn--purple">
                    <div class="btn--square__effect"></div>
                    <a href="#">コースの詳細を見る</a>
                  </div>
                </div>
                <h3 class="businessF3__heading businessF3__heading--purple">事業開発支援</h3>
                <p class="mb15 businessF3__subheading">AI技術を基に、業界・業種に特化した<br>企画の立ち上げや講座を展開</p>
                <p class="text businessF3__text">ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</p>
              </div>
              <div>
                <div class="businessF3__image businessF3__image--green">
                  <div class="img__scale">
                    <img src="~assets/img/front/business/platform.jpg" srcset="~assets/img/front/business/platform.jpg 1x,~assets/img/front/business/platform-2x.jpg 2x" class="img__fit" alt="プラットフォーム事業">
                  </div>
                </div>
                <div class="business__btn anim anim--scroll anim--scale">
                  <div class="btn btn--square btn--arrow btn--green">
                    <div class="btn--square__effect"></div>
                    <a href="#">コースの詳細を見る</a>
                  </div>
                </div>
                <h3 class="businessF3__heading businessF3__heading--green">プラットフォーム事業</h3>
                <p class="mb15 businessF3__subheading">知識を体系化。<br>オンラインで学べる学習プラットフォーム</p>
                <p class="text businessF3__text">ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</p>
              </div>
            </div>
            <div class="mt60 btn btn--business anim anim--scroll anim--bottom">
              <div class="btn--business__effect"></div>
              <a href="#">事業内容の詳細</a>
            </div>
          </div>
        </div>
      </section>
      <section id="member" class="sec sec__member">
        <p class="sec__heading sec__heading--topL">member</p>
        <div class="container__large__inner">
          <div class="container__inner">
            <div class="mb50 heading heading--center anim anim--scroll anim--bottom">
              <div class="heading__inner">
                <p class="heading__en">member</p>
                <h2 class="heading__jp">メンバー</h2>
              </div>
            </div>
            <div class="member__slide anim anim--scroll anim--bottom">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide memberF hover__container">
                    <a href="#">
                      <div class="memberF__image">
                        <img src="~assets/img/sample/member1.jpg" class="ofi ofi--member" alt="吉崎 亮介">
                        <p class="memberF__position">代表取締役社長</p>
                      </div>
                      <div class="memberF__content">
                        <h3 class="mb20 memberF__name ellipsis">吉崎 亮介<span>RYOSUKE YOSHIZAKI</span></h3>
                        <p class="text">機械学習による製造業のプロセス改善を専門とし、画像処理（AR）、ロボット工学、制御工学の研究にも従事。</p>
                        <div class="mt20 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide memberF hover__container">
                    <a href="#">
                      <div class="memberF__image">
                        <div class="img__scale">
                          <img src="~assets/img/sample/member2.jpg" class="ofi ofi--member" alt="今西 航平">
                        </div>
                        <p class="memberF__position">執行役員CLO</p>
                      </div>
                      <div class="memberF__content">
                        <h3 class="mb20 memberF__name ellipsis">今西 航平<span>KOHEI IMANISHI</span></h3>
                        <p class="text">AI関連セミナーにて教育実績を持ち、セミナー事業の責任者としてディープラーニングを中心とした機械学習教育に注力。</p>
                        <div class="mt20 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide memberF hover__container">
                    <a href="#">
                      <div class="memberF__image">
                        <div class="img__scale">
                          <img src="~assets/img/sample/member1.jpg" class="ofi ofi--member" alt="吉崎 亮介">
                        </div>
                        <p class="memberF__position">代表取締役社長</p>
                      </div>
                      <div class="memberF__content">
                        <h3 class="mb20 memberF__name ellipsis">吉崎 亮介<span>RYOSUKE YOSHIZAKI</span></h3>
                        <p class="text">機械学習による製造業のプロセス改善を専門とし、画像処理（AR）、ロボット工学、制御工学の研究にも従事。</p>
                        <div class="mt20 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide memberF hover__container">
                    <a href="#">
                      <div class="memberF__image">
                        <div class="img__scale">
                          <img src="~assets/img/sample/member2.jpg" class="ofi ofi--member" alt="今西 航平">
                        </div>
                        <p class="memberF__position">執行役員CLO</p>
                      </div>
                      <div class="memberF__content">
                        <h3 class="mb20 memberF__name ellipsis">今西 航平<span>KOHEI IMANISHI</span></h3>
                        <p class="text">AI関連セミナーにて教育実績を持ち、セミナー事業の責任者としてディープラーニングを中心とした機械学習教育に注力。</p>
                        <div class="mt20 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="slide__pagination"></div>
              <div class="slide__btn__prev"></div>
              <div class="slide__btn__next"></div>
            </div>
            <div class="member__btn center anim anim--scroll anim--bottom">
              <div class="btn btn--radius btn--arrow btn--green btn--370">
                <div class="btn--radius__effect"></div>
                <a href="#">メンバー紹介と会社の文化</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="update" class="sec sec__update">
        <div id="news" class="sec sec__news">
          <div class="container__large__inner">
            <div class="update__container">
              <div class="update__heading__container">
                <div class="update__box update__box--news">
                  <div class="mb50 heading heading--left anim anim--scroll anim--left">
                    <div class="heading__inner">
                      <p class="heading__en heading__en--line">news</p>
                      <h2 class="heading__jp">ニュース</h2>
                    </div>
                  </div>
                </div>
                <div class="mt60 right none__sp anim anim--scroll anim--bottom">
                  <div class="btn btn--radius btn--mark btn--blue btn--240">
                    <div class="btn--radius__effect"></div>
                    <a href="#">VIEW MORE</a>
                  </div>
                </div>
              </div>
              <div class="update__content__container">
                <div class="newsF__container hover__container anim anim--scroll anim--bottom">
                  <a href="#" class="anim anim--scroll anim--bottom">
                    <div class="newsF__info">
                      <p class="newsF__date">2019.06.04</p>
                      <span class="newsF__cat newsF__cat--cat3">セミナー</span>
                    </div>
                    <div class="newsF__content">
                      <h3 class="newsF__heading ellipsis"><span>新ディープラーニングハンズオンセミナーのカリキュラム公開！フレームワー...</span></h3>
                      <div class="newsF__btn">
                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="anim anim--scroll anim--bottom">
                    <div class="newsF__info">
                      <p class="newsF__date">2019.06.03</p>
                      <span class="newsF__cat newsF__cat--cat1">プレスリリース</span>
                    </div>
                    <div class="newsF__content">
                      <h3 class="newsF__heading ellipsis"><span>キカガクが、Preferred Networksが提供する 日本語のオンライン学習資料 「...</span></h3>
                      <div class="newsF__btn">
                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="anim anim--scroll anim--bottom">
                    <div class="newsF__info">
                      <p class="newsF__date">2019.03.01</p>
                      <span class="newsF__cat newsF__cat--cat2">ブログ</span>
                    </div>
                    <div class="newsF__content">
                      <h3 class="newsF__heading ellipsis"><span>助成金を活用してキカガクのハンズオンセミナーまたは長期コースを受講する...</span></h3>
                      <div class="newsF__btn">
                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="newsF__info">
                      <p class="newsF__date">2019.01.07</p>
                      <span class="newsF__cat newsF__cat--cat1">プレスリリース</span>
                    </div>
                    <div class="newsF__content">
                      <h3 class="newsF__heading ellipsis"><span>取締役副社長に今西航平が就任しました。</span></h3>
                      <div class="newsF__btn">
                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="newsF__info">
                      <p class="newsF__date">2019.12.18</p>
                      <span class="newsF__cat newsF__cat--cat2">ブログ</span>
                    </div>
                    <div class="newsF__content">
                      <h3 class="newsF__heading ellipsis"><span>【1/17 大阪】AI活用「成功」の方程式～AI活用最前線と人材育成～に登壇します。</span></h3>
                      <div class="newsF__btn">
                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt60 center none__pc anim anim--scroll anim--bottom">
              <div class="btn btn--radius btn--mark btn--blue btn--240">
                <div class="btn--radius__effect"></div>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div id="kikagaku-blog" class="sec sec__blog--kikagaku">
          <div class="container__large__inner">
            <div class="update__container">
              <div class="update__heading__container">
                <div class="update__box update__box--blog">
                  <div class="mb50 heading heading--left anim anim--scroll anim--left">
                    <div class="heading__inner">
                      <p class="heading__en heading__en--line">blog</p>
                      <h2 class="heading__jp">キカガクブログ</h2>
                    </div>
                  </div>
                </div>
                <div class="mt60 right none__sp anim anim--scroll anim--bottom">
                  <div class="btn btn--radius btn--mark btn--blue  btn--240">
                    <div class="btn--radius__effect"></div>
                    <a href="#">VIEW MORE</a>
                  </div>
                </div>
              </div>
              <div class="update__content__container">
                <div class="blogF__container hover__container">
                  <a href="#">
                    <div class="blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog1.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="blogF__content">
                      <div class="blogF__content__inner">
                        <p class="blogF__date">2019.03.01</p>
                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                        <div class="mt10 right">
                          <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog2.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="blogF__content">
                      <div class="blogF__content__inner">
                        <p class="blogF__date">2019.03.01</p>
                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                        <div class="mt10 right">
                          <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog3.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="blogF__content">
                      <div class="blogF__content__inner">
                        <p class="blogF__date">2019.03.01</p>
                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                        <div class="mt10 right">
                          <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt60 center none__pc anim anim--scroll anim--bottom">
              <div class="btn btn--radius btn--mark btn--blue  btn--240">
                <div class="btn--radius__effect"></div>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div id="hatarakikata-blog" class="sec sec__blog--hartarakikata">
          <div class="container__large__inner">
            <div class="update__container">
              <div class="update__heading__container">
                <div class="update__box update__box--blog">
                  <div class="mb50 heading heading--left anim anim--scroll anim--left">
                    <div class="heading__inner">
                      <p class="heading__en heading__en--line">blog</p>
                      <h2 class="heading__jp">働き方ブログ</h2>
                    </div>
                  </div>
                  <div class="update__box__image">
                    <div class="img__scale">
                      <img src="~assets/img/front/update/staff.png" srcset="~assets/img/front/update/staff.png 1x,~assets/img/front/update/staff-2x.png 2x" class="img__fit" alt="キカガクスタッフ">
                    </div>
                  </div>
                </div>
                <div class="mt60 right none__sp anim anim--scroll anim--bottom">
                  <div class="btn btn--radius btn--mark btn--green  btn--240">
                    <div class="btn--radius__effect"></div>
                    <a href="#">VIEW MORE</a>
                  </div>
                </div>
              </div>
              <div class="update__content__container">
                <div class="blogF__container  hover__container">
                  <a href="#">
                    <div class="blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog1.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="blogF__content">
                      <div class="blogF__content__inner">
                        <p class="blogF__date">2019.03.01</p>
                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                        <div class="mt10 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog2.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="blogF__content">
                      <div class="blogF__content__inner">
                        <p class="blogF__date">2019.03.01</p>
                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                        <div class="mt10 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog3.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="blogF__content">
                      <div class="blogF__content__inner">
                        <p class="blogF__date">2019.03.01</p>
                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                        <div class="mt10 right">
                          <p class="btn btn--more btn--more--green">VIEW MORE</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt60 center none__pc anim anim--scroll anim--bottom">
              <div class="btn btn--radius btn--mark btn--green  btn--240">
                <div class="btn--radius__effect"></div>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div id="ceo-blog" class="sec sec__blog--ceo">
          <div class="container__large__inner">
            <div class="update__container">
              <div class="update__heading__container">
                <div class="update__box update__box--blog">
                  <div class="mb50 heading heading--left anim anim--scroll anim--left">
                    <div class="heading__inner">
                      <p class="heading__en heading__en--line">blog</p>
                      <h2 class="heading__jp">社長ブログ</h2>
                    </div>
                  </div>
                </div>
                <div class="mt120 right none__sp anim anim--scroll anim--bottom">
                  <div class="btn btn--radius btn--mark btn--blue  btn--240">
                    <div class="btn--radius__effect"></div>
                    <a href="#">VIEW MORE</a>
                  </div>
                </div>
              </div>
              <div class="update__content__container">
                <div class="ceo__blogF__container hover__container">
                  <a href="#">
                    <div class="ceo__blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog1.jpg" class="ofi ofi--blogC" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="ceo__blogF__content">
                      <p class="blogF__date">2019.03.01</p>
                      <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                      <div class="ceo__blogF__btn">
                        <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="ceo__blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog2.jpg" class="ofi ofi--blogC" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="ceo__blogF__content">
                      <p class="blogF__date">2019.03.01</p>
                      <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                      <div class="ceo__blogF__btn">
                        <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="ceo__blogF__image">
                      <div class="img__scale">
                        <img src="~assets/img/sample/blog3.jpg" class="ofi ofi--blogC" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                      </div>
                    </div>
                    <div class="ceo__blogF__content">
                      <p class="blogF__date">2019.03.01</p>
                      <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                      <div class="ceo__blogF__btn">
                        <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt60 center none__pc anim anim--scroll anim--bottom">
              <div class="btn btn--radius btn--mark btn--blue  btn--240">
                <div class="btn--radius__effect"></div>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recruit" class="sec sec__recruit">
        <div class="recruitF__container">
          <div class="recruitF__content anim anim--scroll anim--left">
            <div class="mb35 heading heading--left">
              <div class="heading__inner">
                <p class="heading__en">recruit</p>
                <h2 class="heading__jp">採用</h2>
              </div>
            </div>
            <p class="recruitF__text">AIの実用化が多くの企業で課題となっている事実に反し、<span class="br__pc"></span>AIを正しく導入できる人材はごく僅かです。<br>AI人材の育成・採用を求める企業、AI人材としての<span class="br__pc"></span>技術習得を目指す個人、それぞれの課題を解決していく。<br>このキカガクのミッションを共に実現する仲間を募集しています。</p>
            <div class="mt30 recruitF__btn">
              <div class="btn btn--radius btn--arrow btn--orange btn--240">
                <div class="btn--radius__effect"></div>
                <a href="#">採用情報</a>
              </div>
            </div>
          </div>
          <div class="recruitF__image"></div>
        </div>
      </section>
      <section id="company" class="sec sec__company">
        <div class="companyF__container">
          <div class="companyF__image"></div>
          <div class="companyF__content anim anim--scroll anim--left">
            <h2 class="mb15 companyF__heading">株式会社キカガク 本社</h2>
            <div class="companyF__info__inner">
              <p class="text">〒101-0035<br>東京都千代田区神田紺屋町15グランファースト神田紺屋町6F</p>
              <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
            </div>
            <p class="text">受付時間：平日9:00 - 18:00</p>
            <dl class="mt25 companyF__info">
              <dt><span>神田第1教室</span></dt>
              <dd>
                <div class="companyF__info__inner">
                  <p>〒101-0035<br>東京都千代田区内神田3-2-9 SPビル4階</p>
                  <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                </div>
              </dd>
              <dt><span>神田第2教室</span></dt>
              <dd>
                <div class="companyF__info__inner">
                  <p>〒101-0035<br>東京都千代田区内神田3-2-1 喜助内神田3町目ビル401</p>
                  <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                </div>
              </dd>
              <dt><span>神田第3教室</span></dt>
              <dd>
                <div class="companyF__info__inner">
                  <p>〒101-0035<br>東京都千代田区内神田3-2-1 喜助内神田3町目ビル401</p>
                  <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                </div>
              </dd>
              <dt><span>名古屋教室</span></dt>
              <dd>
                <div class="companyF__info__inner">
                  <p>〒101-0035<br>愛知県名古屋市西区牛島町6-1 名古屋ルーセントタワー21F</p>
                  <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                </div>
              </dd>
            </dl>
            <div class="mt25 leftC companyF__btn">
              <div class="btn btn--radius btn--arrow btn--red btn--240">
                <div class="btn--radius__effect"></div>
                <a href="#">会社概要</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Hero from '~/components/top/Hero.vue'
import Misson from '~/components/top/Misson.vue'
import Results from '~/components/top/Results.vue'
import Features from '~/components/top/Features.vue'


export default {
   components: {
     Hero,
     Misson,
     Results,
     Features,
   },
   data()　{
    return {
      results: {
        items: [
          {
            url: 'http://www.kikagaku.co.jp',
            img_url: require('~/assets/img/front/portfolio/image1.jpg'),
            img_alt: 'Preferred Networks社提供のChainerチュートリアル制作に協力',
            title: 'Preferred Networks社提供の<span class="br__pc"></span>Chainerチュートリアル制作に協力'
          },
          {
            url: '#',
            img_url: require('~/assets/img/front/portfolio/image2.jpg'),
            img_alt: 'メルカリ社の経営層向けAI研修の実施',
            title: 'メルカリ社の経営層向けAI研修の<span class="br__pc"></span>実施'
          },
          {
            url: '#',
            img_url: require('~/assets/img/front/portfolio/image3.jpg'),
            img_alt: 'ABEJA社とアセスメント人材育成コースを共同制作',
            title: 'ABEJA社とアセスメント人材育成<span class="br__pc"></span>コースを共同制作'
          }
        ]
       }
     }
    }
  }
</script>



