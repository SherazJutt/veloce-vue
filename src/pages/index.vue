<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/ui/Button.vue";
import Popover from "../components/ui/Popover.vue";
import Select from "../components/ui/Select.vue";
import Tooltip from "../components/ui/Tooltip.vue";
import Modal from "../components/ui/Modal.vue";
import Separator from "../components/ui/Separator.vue";
import RangeSlider from "../components/ui/RangeSlider.vue";
import Checkbox from "../components/ui/Checkbox.vue";
import Input from "../components/ui/Input.vue";
// import Carousel from "../components/ui/Carousel.vue";
import Drawer from "../components/ui/Drawer.vue";

const selected = ref("Dashboard");
const checkbox = ref(true);
const input = ref("test input text");
</script>

<template>
	<div class="container py-8">
		<div class="mb-6">
			<h3 class="text-primary mb-2 font-semibold">Buttons</h3>
			<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<Button variant="solid" label="Solid" />
				<Button variant="ghost" label="Ghost" />
				<Button variant="outlined" label="Outlined" />
				<Button variant="text" label="Text" />
				<Button loading label="Loading" />
				<Button icon="material-symbols:check" label="Icon" />
				<Button icon="material-symbols:check" icon-position="left" label="Icon position" />
			</div>
		</div>

		<Separator class="my-4" />

		<h3 class="text-primary mb-2 font-semibold">Drawer</h3>

		<div class="my-4 flex gap-4">
			<Drawer direction="left" footer title="Title" description="some drawer description">
				<Button label="Left" />
				<template #content>
					<p v-for="item in 15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi earum sapiente aliquid repudiandae quae. Tempora unde voluptatem iusto. Minima, corrupti eveniet quibusdam nobis animi porro et esse ea tempore?</p>
				</template>

				<template #footer>
					<div>Footer</div>
				</template>
			</Drawer>
			<Drawer direction="bottom" footer title="Title" description="some drawer description">
				<Button label="Bottom" />
				<template #content>
					<p v-for="item in 25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi earum sapiente aliquid repudiandae quae. Tempora unde voluptatem iusto. Minima, corrupti eveniet quibusdam nobis animi porro et esse ea tempore?</p>
				</template>

				<template #footer>
					<div>Footer</div>
				</template>
			</Drawer>
			<Drawer direction="right" footer title="Title" description="some drawer description">
				<Button label="Right" />
				<template #content>
					<p v-for="item in 15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi earum sapiente aliquid repudiandae quae. Tempora unde voluptatem iusto. Minima, corrupti eveniet quibusdam nobis animi porro et esse ea tempore?</p>
				</template>

				<template #footer>
					<div>Footer</div>
				</template>
			</Drawer>
		</div>

		<Separator class="my-4" />

		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">Tooltip</h3>
				<!-- Tooltip -->
				<Tooltip>
					<Button class="w-full" label="Hover me" />
					<template #body>Tooltip content here</template>
				</Tooltip>
			</div>

			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">popover</h3>
				<!-- popover -->
				<Popover>
					<Button class="w-full" label="Popover" />

					<template #body>
						<div>Popover content</div>
					</template>
				</Popover>
			</div>

			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">Select</h3>
				<Select v-model="selected" :options="['Dashboard', 'Analytics', 'Settings', 'Profile']" />
			</div>

			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">Modal</h3>
				<Modal>
					<Button class="w-full" label="Modal" />
				</Modal>
			</div>
		</div>
		<Separator class="my-4" />

		<div>
			<RangeSlider />
			<Checkbox v-model="checkbox" label="Checkbox" />
		</div>

		<Separator class="my-4" />

		<div class="my-4">
			<Input v-model="input" icon="icon-park-outline:text" placeholder="Placeholder" help-text="Text field with helper text" />
		</div>

		<!-- <Separator class="my-4" /> -->

		<!-- <Carousel>
			<div class="carousel__item w-full bg-red-400 py-8 text-center">slide</div>
		</Carousel> -->

		<!-- <div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus impedit ut consequuntur recusandae voluptatum tenetur ducimus iure esse sed porro hic dolorum voluptatem, reprehenderit debitis architecto nam odit distinctio? Optio corporis quos autem eligendi itaque magni doloribus dolore possimus dolorem vitae voluptas officia, laboriosam quae ut labore debitis perferendis quaerat iste blanditiis cupiditate? Libero eius dolor molestias in nisi quasi, nostrum eligendi unde fugit, rem distinctio voluptatibus cum minus exercitationem doloremque et id dolorem voluptates, saepe reprehenderit? Vitae corrupti, modi reiciendis assumenda fugit temporibus voluptates distinctio doloremque doloribus, nisi a commodi deserunt animi officia ad culpa eius tempora debitis quod at accusamus asperiores iusto mollitia sapiente. Cumque aliquid nam dolore dignissimos expedita ab totam doloremque fugiat, non corporis a nisi amet at, eligendi obcaecati libero sit magni eveniet reprehenderit tenetur accusamus maiores dicta vel. Soluta fuga accusamus tempore ex. Ex asperiores ipsum quia deserunt ducimus placeat totam optio, aspernatur praesentium soluta! Ea libero obcaecati voluptates nemo hic accusamus atque reprehenderit quae distinctio voluptatibus, porro labore sequi eaque consequatur nulla odit rerum pariatur doloribus voluptatum! Autem nemo vel cum odio, natus sit dicta dolore iure iusto voluptatibus soluta deleniti fugit voluptates animi earum et maiores placeat sequi quod molestias praesentium iste minima excepturi porro! Dolorem officia, obcaecati esse earum, ex cupiditate quod nemo perspiciatis laborum, nam voluptatem autem provident eaque. Culpa, enim? Repellendus, explicabo laborum asperiores tempore odit esse. Reprehenderit dolorem aliquid veniam labore laboriosam cupiditate in iusto tempora eos voluptate ducimus error, nam quidem suscipit voluptas provident modi laborum deleniti, sapiente et dolorum, sint minima amet magnam? Minus incidunt eligendi ullam provident est ut natus doloremque, dolorem necessitatibus animi. Fuga adipisci velit doloribus laboriosam aut dolor debitis eaque. Vero repellendus vel doloribus tempore hic quidem magni quasi ratione? Fugiat illo id minus aperiam fuga. Voluptates, commodi provident excepturi nisi blanditiis ipsa quo numquam recusandae ea aut, earum ducimus perspiciatis, esse nostrum explicabo voluptate ut molestias accusantium! Ipsam consequatur rerum natus, minima cumque quidem accusamus velit labore aperiam aliquid esse adipisci ab, maxime ad voluptatum nulla optio facere quasi quo. Assumenda aliquam eos corrupti impedit numquam illo fugit minus at maxime voluptate quia sit eius velit animi est labore, recusandae deleniti doloribus consequuntur corporis quas veritatis expedita mollitia voluptatibus. Tenetur quidem laborum eius, error nihil veritatis delectus temporibus hic, quo repellendus illum id dolor itaque omnis, numquam quos perferendis? Id esse inventore maxime sequi quae doloremque eius
				blanditiis. Provident mollitia distinctio earum vero magni, similique accusamus in perferendis dolor fugiat, sequi ea laborum corrupti reiciendis nisi iure, ipsa est asperiores doloribus fugit quo vitae! Perspiciatis unde reprehenderit aliquam voluptatem id molestiae cupiditate, dolor voluptas odio quaerat atque, provident ab quos ipsam exercitationem quasi similique blanditiis nemo ut saepe, tempora ea voluptatibus sed? Necessitatibus obcaecati nesciunt provident. Nam ad quibusdam corporis, deserunt numquam dolorem dignissimos at ducimus aspernatur incidunt, non saepe esse nesciunt. Neque omnis laboriosam explicabo? Magni facilis tempora quos laboriosam dolores. Similique repellat, explicabo deleniti veniam animi illo. Non nemo atque doloremque itaque? Aspernatur, facere? At, molestias? Iure nobis quia atque quas quasi rerum, nemo, illum harum quaerat pariatur minima neque tempora. Dolorem nemo, suscipit eius sint perferendis, veniam ex consectetur itaque voluptate nisi voluptatum sapiente! Corrupti laborum corporis veniam? Libero quod, rem molestias quaerat facere itaque eveniet dolorem veritatis dolorum et nobis quisquam excepturi sit dolor non quis. Aliquid modi, ipsam nobis eveniet quod tenetur quam dolorem doloribus, quo itaque voluptatibus ea culpa? Vel quam impedit id veritatis tenetur libero consequuntur nihil, temporibus perferendis ducimus laboriosam provident nobis ratione commodi magnam. Ea sunt cupiditate magnam unde! Impedit est quis ducimus, dolor, facilis excepturi vero dolores animi iste exercitationem quas porro sit, quos delectus ipsum laudantium maxime eum molestiae voluptatum libero corrupti sunt. Ex esse nostrum reiciendis libero quaerat amet! Consequatur tempore ad a non, quam quidem sed, debitis, officiis soluta temporibus eaque quibusdam? Vitae neque, incidunt necessitatibus aspernatur quas rerum ullam amet. Corrupti eveniet voluptate quasi fugiat maiores neque ratione officiis accusantium at! Aliquid eos ad omnis natus fugiat accusantium iste laboriosam odio! Officiis aspernatur voluptas molestias eius? Aliquid deserunt vitae sunt mollitia optio fugit ducimus, magni, minus recusandae, totam officiis enim ex quas quaerat accusamus autem harum temporibus. Perspiciatis quisquam numquam quos dolorum quam iste, harum non? Similique labore aperiam repellat, dolores eum quae sed, repellendus nesciunt delectus exercitationem id quibusdam provident blanditiis in, ullam sit ea! Dignissimos explicabo vitae, expedita necessitatibus hic omnis incidunt odit distinctio nesciunt cupiditate consectetur nulla sequi commodi, dolorum laborum! Provident quasi quis saepe dolores qui ducimus, laboriosam quos maiores labore beatae, et, incidunt accusantium. Beatae voluptas dolorem libero pariatur repellat fugiat tenetur distinctio iusto mollitia fuga minus ratione facilis, dolore eius modi inventore vel ex quis nulla perspiciatis dicta ut assumenda. Ut voluptatem distinctio impedit quod iusto aspernatur necessitatibus. Earum
				aliquid quam voluptas ratione impedit commodi corrupti quisquam qui in itaque. Eveniet sed natus consequuntur, id accusamus laudantium similique dolor quibusdam. Odio quos hic veniam doloremque aut ratione expedita tempore, neque totam tempora nemo earum, dignissimos et, autem minus. Ipsum reiciendis doloribus expedita. Veritatis itaque tempore aut, est molestias consequatur perferendis quis distinctio facilis eos amet. Facere culpa, iusto voluptatem consectetur similique aliquid ullam eaque error enim odit nemo nihil repellat dolor deserunt nostrum cupiditate inventore expedita maxime officiis amet rerum asperiores labore. Voluptate inventore expedita alias dolore dicta excepturi, accusantium est id, rerum ullam temporibus nesciunt, enim voluptatem. Eaque architecto deserunt, temporibus vitae dolore iure ad maiores distinctio incidunt laboriosam doloremque, rerum id, molestiae laborum cum. Beatae odit praesentium inventore quam eveniet. Expedita nisi nemo, ipsam eos culpa alias veniam modi consequatur libero adipisci quia animi ducimus asperiores incidunt hic doloribus rem, cumque ad nihil obcaecati. Magnam, placeat ducimus ex quod debitis, odio totam temporibus adipisci velit maiores ad fuga dolore tempora? Eos quae officia aliquid vero voluptatum modi quasi dicta provident incidunt eaque neque vel dolor, vitae illo dolore temporibus, ipsam architecto tempora et quis consectetur cum voluptatem repellendus iure. Soluta maiores nemo rem eveniet, facere autem vero, laudantium facilis ab quae ratione odit atque quam veniam ea architecto totam?
			</p>
		</div> -->
	</div>
</template>
