<template>
<v-timeline>
	<h1 id="career">経歴 / CAREER</h1>
  <v-timeline-item id="v-timeline-1" color="#a1ff75" fill-dot right>
    <v-card>
      <v-card-title id="career-title-1">
        <h2 class="display-1 white--text v-h2">専門学校卒業 / 新卒入社</h2>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex>
            <p>・2017年 3月 とある専門学校を卒業</p><br>
						<p>・2017年 4月 JAに入組</p><br>
						<p>・2017年 6月 適応障害と診断され休職</p><br>
						<p>・2017年 7月 治療しつつ独学でプログラミングを学習をスタート</p><br>
						<p>・2017年 9月 退職</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item id="v-timeline-2" color="#83e2eb" fill-dot left>
    <v-card>
      <v-card-title id="career-title-2" justify-end>
        <h2 class="display-1 mr-3 white--text">再就職へ...</h2>
      </v-card-title>
      <v-container>
        <v-layout>
         <v-flex>
          	<p>・2017年 10月 AmazonにCSの契約社員として入社（電話やメール/チャット対応）</p><br>
            <p>・2018年 1月 発達障害診断される</p><br>
						<p>・2018年 2月 退職</p><br>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item id="v-timeline-3" color="#c2a1ff" fill-dot right>
    <v-card>
      <v-card-title id="career-title-3">
        <h2 class="display-1 white--text">2度目の転職へ</h2>
      </v-card-title>
      <v-container>
      	<v-layout>
				  <v-flex>
            <p>・2018年 3月 UQのチャット業務に契約社員として入社</p><br>
					</v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item id="v-timeline-4" color="#ebca78" fill-dot left>
    <v-card>
      <v-card-title id="career-title-4" justify-end>
        <h2 class="display-1 mr-3 white--text">3度目の退職 / 新たな学習へ</h2>
      </v-card-title>
      <v-container>
				<v-layout>
					<v-flex>
          	<p>・2018年 6月 オンラインスクールで学習スタート（学習内容：HTML+CSS / Ruby / Rails）</p><br>
						<p>・2018年 7月 チャット業務を退職</p><br>
						<p>・2018年 9月 オンラインスクールでの学習を終え、簡単な作品を作る</p><br>
						<p>・2018年 9月 IT系を目指して就活をするもうまくいかず...</p><br>
          </v-flex>
				</v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

	<v-timeline-item id="v-timeline-5" color="#ff9f96" fill-dot right>
    <v-card>
      <v-card-title id="career-title-5">
        <h2 class="display-1 white--text">GFTD FUKUOKA WORKSへ</h2>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex>
          	<p>・2018年10月に体験利用をしその後、11月に本利用を開始</p><br>
						<p>・2019年1月後半から案件スタート</p><br>
						<p>・2019年4月に案件終了</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>
</v-timeline>
</template>

<script>
export default {
	name: 'careercontent'
}
</script>

<style>
#career {
	margin-left: 20px;
	font-size: 50px;
	color: #83e2eb;
}

#career-title-1 {
	background-color: #a1ff75;
}

#career-title-2 {
	background-color: #83e2eb;
}

#career-title-3 {
	background-color: #c2a1ff;
}

#career-title-4 {
	background-color: #ebca78;
}

#career-title-5 {
	background-color: #ff9f96;
}

@media (max-width:1024px ) {
	#career {
		margin-left: 20px;
		font-size: 30px;
		color: #83e2eb;
	}
}

@media (max-width:768px ) {
	#career {
		margin-left: 20px;
		font-size: 30px;
		color: #83e2eb;
	}
}

@media (max-width:670px ) {
  #career {
		margin-left: 10px;
		font-size: 18px;
		color: #83e2eb;
	}
  #v-timeline-1 {
    display: -webkit-box;
  }
  #v-timeline-2 {
    display: -webkit-box;
  }
  #v-timeline-3 {
    display: -webkit-box;
  }
  #v-timeline-4 {
    display: -webkit-box;
  }
  #v-timeline-5 {
    display: -webkit-box;
  }

}
</style>
