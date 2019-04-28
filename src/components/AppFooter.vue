<template>
<v-app>
  <v-footer class="footer" height="auto" color="primary lighten-1">
    <v-layout>
      <v-flex
            primary
            lighten-2
            py-3
            text-xs-center
            white--text
            xs12
          >
            &copy;2019 — <strong>Portfolio</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
.footer {
  height: auto;
}
</style>


