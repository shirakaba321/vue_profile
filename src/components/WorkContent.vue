<template>
<div>
	<h1 id="work">作品一覧 / WORK</h1>
	<v-layout row fill-height id="work-style-1" class="work-respons">
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/portfolio_html_css.png')">
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Portfolio</span><br>
					<span>HTML+CSS/Bootstrap</span><br>
					<span>GFTDで初めて作ったレスポンシブに対応したサイト</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/vue_and_rails_todo.png')">
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Todoリスト</span><br>
					<span>Vue+Rails（Vue側の姿）</span><br>
					<span>GFTDでVueとRailsの学習が終わって、<br>初めてフロントエンドとバックエンドを分けて<br>API通信で作ったサービス</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/rails_and_vue_todo.png')">
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Todoリスト</span><br>
					<span>Ruby on Rails+Vue（Rails側の姿）</span><br>
					<span>GFTDでVueとRailsの学習が終わって、<br>初めてフロントエンドとバックエンドを分けて<br>API通信で作ったサービス</span>
				</div>
			</v-card-title>
		</v-card>
  </v-layout>

	<v-layout row fill-height id="work-style-2" class="work-respons work-2">
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/javascriptnonslider.png')">
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">京大案件で実装するためのグラフ</span><br>
					<span>JavaScript</span><br>
					<span>GFTDで学習が終わって人生初めての開発案件。<br>そこでグラフの実装が必要だったので、<br>自分で一度確認するために作成した。</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/vue_native_host.exp.exponent.jpg')">
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">初のハッカソン</span><br>
					<span>Vuenative</span><br>
					<span>GFTDの人たちと初めてのハッカソンをした時に触った。</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/s_img_20180723_102213.jpg')">
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">未定</span><br>
					<span>今後追加予定今後追加予定今後追加予定今後追加予定</span><br>
					<span>今後追加予定今後追加予定今後追加予定今後追加予定</span>
				</div>
			</v-card-title>
		</v-card>
	</v-layout>
</div>
</template>

<script>
export default {
	name: 'workcontent'
}
</script>

<style>
#work {
	margin-left: 20px;
	font-size: 50px;
	color: #c2a1ff;
	padding-top: 18px;
}

.work-title {
	color:  #c2a1ff;
}

#work-style-1 {
	box-align: center;
	justify-content: space-around;
	margin-top: 20px;
}

#work-style-2 {
	box-align: end;
	justify-content: space-around;
	margin-top: 50px;
}
@media (max-width:1024px ) {
	#work {
		margin-left: 20px;
		font-size: 30px;
		color: #c2a1ff;
	}

	#work-style-2 {
		margin-top: 0px !important;
	}

	.work-card {
		margin: 10px;
	}
}

@media (max-width:768px ) {
	#work {
		margin-left: 20px;
		font-size: 30px;
		color: #c2a1ff;
	}

	.work-respons {
		flex-flow: column wrap;
		justify-content: space-around;
	}

	#work-style-2 {
		margin-top: 0px !important;
	}

	.work-card {
		margin: 10px;
	}
}

@media (max-width:670px ) {
  #work {
		margin-left: 10px;
		font-size: 18px;
		color: #c2a1ff;
	}
	
	.work-2 {
		margin: 0px !important;
	}

	.work-respons {
		display: block;
	}

	.work-card {
		margin: 20px 0px;
	}
}

</style>

