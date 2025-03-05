<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

const show = ref(false);
</script>

<template>
	<div class="w-full" @click="show = true">
		<slot />
	</div>
	<!-- Modal backdrop -->
	<div v-if="show" class="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center backdrop-blur-[2px]" aria-labelledby="header-3a content-3a" aria-modal="true" tabindex="-1" role="dialog">
		<!-- Modal -->
		<div class="flex max-w-[600px] flex-col overflow-hidden rounded border border-gray-200 bg-white text-slate-500 shadow-xl shadow-slate-700/10 sm:max-h-[95dvh] sm:w-[90%]" role="document">
			<!-- Modal header -->
			<div class="flex items-center gap-4 border-b border-gray-200 px-4 py-2">
				<h3 class="text-primary flex-1 text-xl font-medium">Modal title</h3>
				<Button icon="material-symbols:close-rounded" class="!p-1" variant="ghost" circle @click="show = false" />
			</div>
			<!-- Modal body -->
			<div class="max-h-[calc(100dvh-100px)] flex-1 overflow-auto px-4 py-2 sm:max-h-[75vh]">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde deleniti a neque. Id repellat autem culpa provident quam quod minima porro reiciendis et sit. Quaerat hic cum maiores accusamus!</p>
				p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolore sapiente pariatur, ex mollitia distinctio eaque deleniti culpa recusandae quam temporibus quasi, iure esse neque fugit quaerat nam omnis soluta totam sequi excepturi, ut dicta laboriosam? Quam ratione dolores voluptatem perferendis accusantium eveniet. At labore sint aliquid perferendis. Eveniet quidem eaque harum similique aspernatur molestias neque porro minus obcaecati! At quasi nemo eius expedita, eaque assumenda quia sunt dolorem minima quos natus consectetur iusto consequuntur id placeat quidem praesentium quisquam distinctio libero deserunt harum quod dolores? Nihil tempore possimus earum. Nam doloremque perferendis, ducimus, ex, enim nostrum laboriosam hic culpa accusantium dolores non laborum qui molestias provident explicabo? Voluptas voluptates dolore officiis veritatis. Quae doloribus quam nam nostrum vero explicabo. Aliquam, perspiciatis libero? Tenetur, voluptatum libero. Magni facere non placeat aliquid, sequi corporis dolorem minus maxime error molestiae doloribus ipsa molestias, ducimus ex! Voluptates hic deleniti dolorem commodi quo id totam distinctio doloremque sunt ut possimus ipsa harum nam optio officiis, corporis necessitatibus iure dolores. Quo soluta numquam earum fugit minus similique quam esse libero maiores eos, facilis tempore cumque! Harum quod cum, aliquid eum veniam minus distinctio architecto eligendi inventore error ad aut dolore laboriosam blanditiis dicta officiis non. Nulla pariatur recusandae dolore facilis, quidem possimus quisquam doloribus temporibus cum? Perferendis itaque ea sed maxime sit cupiditate enim facilis, quae vel animi ipsam illo quas temporibus debitis nobis culpa quibusdam incidunt officiis ad magni excepturi veniam ratione saepe? Ab architecto porro ea ipsum saepe ullam consequatur beatae, tempore, enim dolores quis, vitae voluptates officia? Aliquam magnam deserunt commodi sint cupiditate laudantium, incidunt ducimus qui, facilis quas impedit doloremque quos labore ipsam dolorem nam quia nihil rerum beatae. Aspernatur unde praesentium numquam itaque, repellat nostrum ipsa tempore sunt cumque necessitatibus quasi, porro neque modi ex maiores. Vero aliquid esse illo sequi natus placeat iure itaque fuga inventore repudiandae! Reiciendis, molestiae ipsam? Temporibus labore perspiciatis nobis exercitationem quam id aspernatur harum veritatis, voluptates illo ea. Iusto dignissimos consequatur modi repudiandae? Dicta quidem veniam distinctio in quos, ipsa eveniet rerum magni, ducimus, ratione nisi. Amet voluptatum repellat dolor debitis quisquam quam possimus, similique ipsam aliquid in sunt nam asperiores quis sapiente porro temporibus nisi? Dolorem fugit ab, enim facilis sequi dignissimos, illo officia beatae consequatur, ullam harum adipisci veniam suscipit possimus ratione. Illum, cum sunt impedit eos non recusandae dolor, alias earum minus nihil reprehenderit. Officiis accusantium distinctio harum
				quia dignissimos totam consequatur non quaerat magnam inventore commodi repudiandae deserunt facere saepe, temporibus doloribus! Ad facere, possimus iusto nulla explicabo dolor? Molestiae molestias tenetur, optio consectetur laborum accusamus magnam at ea voluptas, possimus veritatis nostrum nulla expedita nemo animi, ipsam nesciunt ipsum. Quo suscipit reiciendis possimus, eos blanditiis fugit temporibus beatae rerum quod eveniet dolores nesciunt praesentium in doloribus perferendis. Eos dicta mollitia, impedit quibusdam, non tenetur quisquam doloremque consequatur saepe dolore veniam, unde architecto placeat sunt cum earum praesentium minima est magni consectetur! Deleniti eum vero, magni dolore beatae exercitationem incidunt eligendi voluptate obcaecati veniam doloribus quas explicabo impedit qui in.
			</div>
			<div class="flex items-center justify-end gap-4 border-t border-gray-200 px-4 py-2">
				<Button class="!px-3 !py-1" variant="ghost" label="Close" @click="show = false" />
				<Button class="!px-3 !py-1" label="Save" @click="show = false" />
			</div>
		</div>
	</div>
</template>
