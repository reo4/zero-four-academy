<template>
  <router-view/>
</template>


<script>
	export default {
		mounted(){
			this.toggleRtl()
		},
		watch: {
			'$i18n.locale'(){
				this.toggleRtl()
			}
		},
		methods: {
			toggleRtl(){
				if (this.$i18n.locale === 'ar') {
					document.body.classList.add('rtl')
				}
				else {
					document.body.classList.remove('rtl')
				}
			}
		}
	}
</script>

<style lang="scss">
	body.rtl{
		direction: rtl;
		.flex-row {
			flex-direction: row-reverse !important;		
		}
		.mr-10{
			margin-right: unset !important;
			margin-left: 2.5rem !important;
		}
		.mr-20{
			margin-right: unset !important;
			margin-left: 2.5rem !important;
		}
	}
</style>