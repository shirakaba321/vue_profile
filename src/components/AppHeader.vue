<template>
<header>
  <v-layout wrap class="vlayout">
  	<v-layout>
			<h1 class="top-h1"><router-link to="/">Top</router-link></h1>
      <v-layout justify-end><v-btn id="top-responsive" @click.stop="drawer = !drawer"><v-icon x-large>menu</v-icon></v-btn></v-layout>
    </v-layout>
    	<v-navigation-drawer v-model="drawer" absolute temporary>
				<v-list-content class="vlist">
          <li id="link-a"><router-link to="/profile">PROFILE</router-link></li>
		 			<li id="link-b"><router-link to="/career">CAREER</router-link></li>
		 			<li id="link-c"><router-link to="/work">WORK</router-link></li>
		 			<li id="link-d"><router-link to="/learn">LEARN</router-link></li>
		 			<li id="link-e"><router-link to="/future">ABOUT THE FUTURE</router-link></li>
				</v-list-content>
    	</v-navigation-drawer>
  	</v-layout>
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
		name: 'appheader',
    data () {
      return {
        drawer: null
      }
    }
  }
</script>

<style>
* {
  list-style: none;
}

header {
	border-bottom: 3px solid black;
  margin-top: 0px;
  padding-top: 0px;      
  margin-bottom: 0.3em;  
  padding-bottom: 0.3em; 
}

.top-h1 {
 margin-left: 30px;
}

#header-nav {
	display: flex;
	justify-content: center;
	font-size: 30px;
	font-weight: bold;
}

#header-nav a {
	display: block;
	color: #c0c0c0;
}

#header-nav li {
	padding: 0px 50px;
}

a {
	text-decoration: none;
}

#link-a:hover a {
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

.vlist li {
	padding: 10px 0px 30px 30px ;
}

.vlist a {
	color: #c0c0c0;
}
#top-responsive {
	display: none;
	text-align: right;
	background-color: #a1ff75;
	color: white;
	width: 30px;
}

@media (max-width:1024px ) {
	#top-responsive {
		display: block;
	}
	#header-nav {
		display: none;
	}
}

@media (max-width:670px ) {
  #top-responsive {
		display: block;
	}
	#header-nav {
		display: none;
	}
}
</style>
