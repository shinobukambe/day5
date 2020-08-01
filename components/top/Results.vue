<template>
        <section id="results" class="sec sec__results">
        <p class="sec__heading sec__heading--topR">results</p>
        <div class="container__inner">
          <div class="mb70">
            <div class="mb50 heading heading--left anim anim--scroll anim--left">
              <div class="heading__inner">
                <p class="heading__en heading__en--line">results</p>
                <h2 class="heading__jp">キカガクの実績</h2>
              </div>
            </div>
            <div class="resultsF__container">
              <div class="resultsF anim anim--scroll anim--bottom">
                <div class="resultsF__inner">
                  <div class="resultsF__heading__container">
                    <h3 class="resultsF__heading">受講生<span id="count1" class="resultsF__heading__num" data-from="24000" data-to="25000">24000</span>人以上</h3>
                  </div>
                  <div class="resultsF__image">
                    <div class="resultsF__image__inner">
                      <img src="~assets/img/front/results/image1.png" srcset="~assets/img/front/results/image1.png 1x,~assets/img/front/results/image1-2x.png 2x" class="img__fit" alt="受講生25,000人以上">
                    </div>
                  </div>
                </div>
              </div>
              <div class="resultsF anim anim--scroll anim--bottom">
                <div class="resultsF__inner">
                  <div class="resultsF__heading__container">
                    <h3 class="resultsF__heading">受講生満足度<span id="count2" class="resultsF__heading__num" data-from="70" data-to="98">70</span>%</h3>
                  </div>
                  <div class="resultsF__image">
                    <div class="resultsF__image__inner">
                      <img src="~assets/img/front/results/image2.png" srcset="~assets/img/front/results/image2.png 1x,~assets/img/front/results/image2-2x.png 2x" class="img__fit" alt="受講生満足度98%">
                    </div>
                    <p class="resultsF__image__text">※満足度5段階中4以上の割合</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="portfolio">
            <div class="leftC ">
              <h2 class="mb60 heading__en heading__en--line anim anim--scroll anim--left">portfolio</h2>
            </div>

            <div class="portfolioF__container hover__container">
              <template v-for="item in items">
                <a :href="item.url" class="opacity anim anim--scroll anim--bottom">
                  <div class="portfolioF__image">
                    <div class="img__scale">
                      <img :src="item.img_url" class="ofi ofi--portfolioF" :alt="item.img_alt">
                    </div>
                  </div>
                  <div class="portfolioF__content">
                    <h3 class="portfolioF__heading"><span v-html="item.title"></span></h3>
                  </div>
                </a>
              </template>
            </div>

            <div class="mt80 center anim anim--scroll anim--bottom">
              <div class="btn btn--radius btn--arrow btn--blue btn--320">
                <div class="btn--radius__effect"></div>
                <a href="#">実績の詳細を見る</a>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
   props: [
     'items'
   ]
}
</script>