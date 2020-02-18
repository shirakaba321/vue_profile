<template>
<div>
	<h1 id="future">今後について / ABOUT THE FUTURE</h1>
	<div id="future-content">
		<p>自作のアプリを作りながら、就職活動などを行なっていこうと思います。</p>
		<p>
		また、適応障害や発達障害などもありますので、<br>就職だけではなく、フリーランスや在宅ワークなど様々な働き方を考慮に入れながら
		動きたいと思います。
		</p>
		<h2>連絡先</h2>
		<p>何かあればこちらへご連絡をお願いします。(*ただし、すぐにご返信できるかは確約できません。）</p>
		<h3>Gmail: shirakaba810@gmail.com</h3>
	</div>
</div>
</template>

<script>
export default {
	name: 'futurecontent'
}
</script>

<style>
#future {
	margin-left: 20px;
	font-size: 50px;
	color: #ff9f96;
	padding-top: 18px;
}

#future-content {
		text-align: center;
	}

@media (max-width:1024px ) {
	#future {
		margin-left: 20px;
		font-size: 30px;
		color: #ff9f96;
	}
	#future-content {
		text-align: center;
	}
}

@media (max-width:768px ) {
	#future {
		margin-left: 20px;
		font-size: 30px;
		color: #ff9f96;
	}
	#future-content {
		text-align: center;
	}
}

@media (max-width:670px ) {
  #future {
		margin-left: 10px;
		font-size: 18px;
		color: #ff9f96;
	}
	#future-content {
		text-align: center;
	}
}

</style>

