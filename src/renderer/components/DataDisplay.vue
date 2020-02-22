<template>
	<div class="display-container">
		<md-list>
			<md-list-item md-expand>
				<md-icon>whatshot</md-icon>
				<span class="md-list-item-text">News</span>

				<md-list slot="md-expand">
					<md-list-item class="md-inset">World</md-list-item>
					<md-list-item class="md-inset">Europe</md-list-item>
					<md-list-item class="md-inset">South America</md-list-item>
				</md-list>
			</md-list-item>

			<md-list-item md-expand>
				<md-icon>videogame_asset</md-icon>
				<span class="md-list-item-text">Games</span>

				<md-list slot="md-expand">
					<md-list-item class="md-inset">Console</md-list-item>
					<md-list-item class="md-inset">PC</md-list-item>
					<md-list-item class="md-inset">Phone</md-list-item>
				</md-list>
			</md-list-item>

			<md-list-item md-expand>
				<md-icon>video_library</md-icon>
				<span class="md-list-item-text">Video</span>

				<md-list slot="md-expand">
					<md-list-item class="md-inset">Humor</md-list-item>
					<md-list-item class="md-inset">Music</md-list-item>
					<md-list-item class="md-inset">Movies</md-list-item>
					<md-list-item class="md-inset">TV Shows</md-list-item>
				</md-list>
			</md-list-item>

			<md-list-item md-expand>
				<md-icon>shopping_basket</md-icon>
				<span class="md-list-item-text">Shop</span>
				<md-list slot="md-expand">
					<md-list-item class="md-inset">Humor</md-list-item>
					<md-list-item class="md-inset">Music</md-list-item>
					<md-list-item class="md-inset">Movies</md-list-item>
					<md-list-item class="md-inset">TV Shows</md-list-item>
				</md-list>
			</md-list-item>
		</md-list>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'DataDisplay',
	data() {
		return {};
	},
	computed: {
		...mapGetters(['memberData']),
		...mapGetters(['contactData']),
		...mapGetters(['purchaseData']),
		...mapGetters(['feedbackData'])
	}
};
</script>

<style scoped>
.display-container {
	position: absolute;
	top: 80px;
	right: 10px;
	width: 300px;
}
</style>
