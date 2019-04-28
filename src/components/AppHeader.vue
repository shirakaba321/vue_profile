<template>
<header>
 <h1><router-link to="/">Top</router-link></h1>
 	<nav>
	 	<ul id="header-nav">
		 <li id="link-a"><router-link to="/profile">PROFILE</router-link></li>
		 <li id="link-b"><router-link to="/career">CAREER</router-link></li>
		 <li id="link-c"><router-link to="/work">WORK</router-link></li>
		 <li id="link-d"><router-link to="/learn">LEARN</router-link></li>
		 <li id="link-e"><router-link to="/future">ABOUT THE FUTURE</router-link></li>
	 	</ul>
	</nav>
</header>
</template>

<script>
export default {
name: 'header'
}
</script>

<style>
ul {
  list-style: none;
}

#header-nav {
	display: flex;
	justify-content: center;
	font-size: 30px;
	font-weight: bold;
}

#header-nav a {
	color: #c0c0c0;
	opacity: 0.5;
}

#header-nav li {
	padding: 0px 50px;
}

a {
	text-decoration: none;
}

#link-a:hover a {
	opacity: 1;
  color: #a1ff75;
  border-bottom: 5px solid #a1ff75;
}

#link-b:hover a {
	opacity: 1;
  color: #83e2eb;
  border-bottom: 5px solid #83e2eb;
}

#link-c:hover a {
	opacity: 1;
  color: #c2a1ff;
  border-bottom: 5px solid #c2a1ff;
}

#link-d:hover a {
	opacity: 1;
  color: #ebca78;
  border-bottom: 5px solid  #ebca78;
}

#link-e:hover a {
	opacity: 1;
  color: #ff9f96;
  border-bottom: 5px solid #ff9f96;
}
</style>
