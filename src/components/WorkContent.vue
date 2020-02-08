<template>
<div>
	<h1 id="work">作品一覧 / WORK</h1>
	<v-layout row fill-height id="work-style-1" class="work-respons">
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/portfolio_html_css.png')">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline work-title">HTML+CSS/Bootstrap</span>
						</v-flex>
						</v-layout>
				</v-container>
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Portfolio</span><br>
					<span>Whitehaven Beach</span><br>
					<span>Whitsunday Island, Whitsunday Islands</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/vue_and_rails_todo.png')">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline work-title">Vue+Ruby on Rails</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Number 2</span><br>
					<span>Whitehaven Beach</span><br>
					<span>Whitsunday Island, Whitsunday Islands</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/rails_and_vue_todo.png')">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline work-title">Ruby on Rails+Vue</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Number 3</span><br>
					<span>Whitehaven Beach</span><br>
					<span>Whitsunday Island, Whitsunday Islands</span>
				</div>
			</v-card-title>
		</v-card>
  </v-layout>

	<v-layout row fill-height id="work-style-2" class="work-respons work-2">
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/javascriptnonslider.png')">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline work-title">Javascript</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Number 4</span><br>
					<span>Whitehaven Beach</span><br>
					<span>Whitsunday Island, Whitsunday Islands</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/workimage/vue_native_host.exp.exponent.jpg')">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline work-title">Vue Native</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Number 5</span><br>
					<span>Whitehaven Beach</span><br>
					<span>Whitsunday Island, Whitsunday Islands</span>
				</div>
			</v-card-title>
		</v-card>
		<v-card class="work-card">
			<v-img class="white--text" height="200px" v-bind:src="require('@/assets/s_img_20180723_102213.jpg')">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline work-title">未定</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-img>
			<v-card-title>
				<div>
					<span class="grey--text">Number 6</span><br>
					<span>Whitehaven Beach</span><br>
					<span>Whitsunday Island, Whitsunday Islands</span>
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
	color: #a1ff75;
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

