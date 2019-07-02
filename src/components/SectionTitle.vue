<template>
	<div class="flex-center mb-24">
		<div class="separator mb-5" :class="'bg-' + color"></div>
		<span class="title">{{title}}</span>
		<span
		class="subheading"
		>{{$t('courses.description')}}</span>
	</div>
</template>

<script>
	export default {
		props: ['color' , 'title']
	}
</script>