<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '../data/content'

const props = defineProps<{ project: Project; featured?: boolean }>()

const urls = computed(() =>
  (props.project.images ?? []).map((f) => `/projects/${encodeURIComponent(props.project.folder!)}/${encodeURIComponent(f)}`),
)
// 3 columns, up to 3 rows
const thumbs = computed(() => urls.value.slice(0, 9))
const extra = computed(() => urls.value.length - thumbs.value.length)
const open = ref(false)
const current = ref(0)

function show(i: number) {
  current.value = i
  open.value = true
}
</script>

<template>
  <v-card class="glass lift h-100 d-flex flex-column" rounded="xl" :class="{ featured }">
    <v-img
      v-if="urls.length === 1"
      :src="urls[0]"
      :alt="project.title"
      height="220"
      cover
      class="cursor-pointer"
      @click="show(0)"
    />

    <div v-else-if="urls.length" class="thumbs pa-2">
      <div v-for="(u, i) in thumbs" :key="u" class="thumb cursor-pointer" @click="show(i)">
        <v-img :src="u" :alt="project.title" cover height="100%" />
        <div v-if="i === thumbs.length - 1 && extra > 0" class="more display">+{{ extra }}</div>
      </div>
    </div>

    <v-responsive v-if="project.embed" :aspect-ratio="4 / 3">
      <iframe :src="project.embed" :title="project.title" loading="lazy" allowfullscreen class="embed" />
    </v-responsive>

    <v-card-item class="pt-5">
      <v-card-title class="display text-h6 text-wrap">{{ project.title }}</v-card-title>
      <div class="d-flex flex-wrap ga-1 mt-2">
        <v-chip v-for="t in project.tags" :key="t" size="x-small" variant="tonal" color="primary">{{ t }}</v-chip>
      </div>
    </v-card-item>

    <v-card-text class="flex-grow-1 text-medium-emphasis">
      <p v-if="project.description">{{ project.description }}</p>
      <ul v-if="project.points" class="ml-5 mt-3">
        <li v-for="p in project.points" :key="p">{{ p }}</li>
      </ul>
    </v-card-text>

    <v-card-actions v-if="project.link" class="px-4 pb-4">
      <v-btn :href="project.link.href" target="_blank" rel="noopener" color="primary" variant="tonal" append-icon="mdi-arrow-top-right">
        {{ project.link.label }}
      </v-btn>
    </v-card-actions>

    <v-dialog v-model="open" max-width="1100">
      <v-carousel v-model="current" hide-delimiters height="85vh" show-arrows="hover" class="rounded-xl">
        <v-carousel-item v-for="u in urls" :key="u">
          <v-img :src="u" :alt="project.title" height="100%" @click="open = false" />
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-card>
</template>

<style scoped>
.thumbs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.thumb { position: relative; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 12px; }
.more {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(0, 0, 0, 0.55); color: #fff; font-size: 1.25rem; font-weight: 600;
}
.embed { width: 100%; height: 100%; border: 0; }
</style>
