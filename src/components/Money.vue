<template>
  <div class="card__money">
		<span> ${{parseInt(money).toLocaleString()}} left </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['money'])
	}
}
</script>

<style>
.card__money {
	color: white;
    background-color: rgb(46, 204, 113);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    top: 0px;
    position: sticky;
    padding: 20px;
    margin: 10px 0px;
}

</style>