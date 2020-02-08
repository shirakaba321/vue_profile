<template>
<div>
	<h1 id="profile">自己紹介 / PROFILE</h1>
</div>
</template>

<script>
export default {
	name: 'profilecontent'
}
</script>

<style>
#profile {
	margin-left: 20px;
	font-size: 50px;
	color: #a1ff75;
	padding-top: 18px;
}

@media (max-width:1024px ) {
	#profile {
		margin-left: 20px;
		font-size: 30px;
		color: #a1ff75;
	}
}

@media (max-width:768px ) {
	#profile {
		margin-left: 20px;
		font-size: 30px;
		color: #a1ff75;
	}
}

@media (max-width:670px ) {
  #profile {
		margin-left: 10px;
		font-size: 18px;
		color: #a1ff75;
	}
}

</style>

