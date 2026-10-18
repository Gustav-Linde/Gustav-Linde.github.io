<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '../data/content'

const props = defineProps<{ project: Project; featured?: boolean }>()

const base = computed(() => `/projects/${encodeURIComponent(props.project.folder ?? '')}/`)
const urls = computed(() => (props.project.images ?? []).map((f) => base.value + encodeURIComponent(f)))

const wideVideos = computed(() => (props.project.videos ?? []).filter((v) => v.ratio >= 1))
const portrait = computed(() => (props.project.videos ?? []).find((v) => v.ratio < 1))

// Without a portrait video show up to 9 photos. With one the card stays compact:
// portrait video on the left, the wide video and a 2 x 2 photo grid beside it.
const shown = computed(() => urls.value.slice(0, portrait.value ? 4 : 9))
const extra = computed(() => urls.value.length - shown.value.length)
const sideUrls = computed(() => (portrait.value ? shown.value : []))
const restUrls = computed(() => (portrait.value ? [] : shown.value))
const sideCount = 0
const restCols = computed(() => Math.min(3, restUrls.value.length))
const sideRows = computed(() => Math.ceil(sideUrls.value.length / 2))

const open = ref(false)
const current = ref(0)

// A clicked video opens in a full-screen player
type Video = NonNullable<Project['videos']>[number]
const playing = ref<Video | null>(null)
const videoOpen = computed({
  get: () => playing.value !== null,
  set: (v: boolean) => { if (!v) playing.value = null },
})

function show(i: number) {
  current.value = i
  open.value = true
}
function isLast(i: number) {
  return i === shown.value.length - 1 && extra.value > 0
}
</script>

<template>
  <v-card class="glass lift h-100 d-flex flex-column" rounded="xl" :class="{ featured }">
    <div v-if="wideVideos.length && !portrait" class="videos">
      <div
        v-for="v in wideVideos"
        :key="v.file"
        class="vid"
        :style="{ aspectRatio: String(v.ratio) }"
        role="button"
        tabindex="0"
        :aria-label="`Play video: ${project.title}`"
        @click="playing = v"
        @keydown.enter="playing = v"
      >
        <img :src="base + encodeURIComponent(v.poster)" :alt="project.title" loading="lazy" />
        <v-icon class="play" icon="mdi-play-circle" size="64" />
      </div>
    </div>

    <div v-if="portrait" class="side">
      <div
        class="vid"
        :style="{ aspectRatio: String(portrait.ratio) }"
        role="button"
        tabindex="0"
        :aria-label="`Play video: ${project.title}`"
        @click="playing = portrait"
        @keydown.enter="playing = portrait"
      >
        <img :src="base + encodeURIComponent(portrait.poster)" :alt="project.title" loading="lazy" />
        <v-icon class="play" icon="mdi-play-circle" size="48" />
      </div>
      <div class="side-right">
        <div
          v-for="v in wideVideos"
          :key="v.file"
          class="vid"
          :style="{ aspectRatio: String(v.ratio) }"
          role="button"
          tabindex="0"
          :aria-label="`Play video: ${project.title}`"
          @click="playing = v"
          @keydown.enter="playing = v"
        >
          <img :src="base + encodeURIComponent(v.poster)" :alt="project.title" loading="lazy" />
          <v-icon class="play" icon="mdi-play-circle" size="40" />
        </div>
        <div class="side-grid" :style="{ gridTemplateRows: `repeat(${sideRows}, 1fr)` }">
          <div
            v-for="(u, i) in sideUrls"
            :key="u"
            class="tile cursor-pointer"
            :class="{ wide: sideUrls.length % 2 === 1 && i === sideUrls.length - 1 }"
            @click="show(i)"
          >
            <img :src="u" :alt="project.title" loading="lazy" />
            <div v-if="isLast(i)" class="more display">+{{ extra }}</div>
          </div>
        </div>
      </div>
    </div>

    <v-img
      v-if="urls.length === 1"
      :src="urls[0]"
      :alt="project.title"
      height="220"
      cover
      class="cursor-pointer"
      @click="show(0)"
    />

    <div
      v-else-if="restUrls.length"
      class="thumbs pa-2"
      :style="{ gridTemplateColumns: `repeat(${restCols}, 1fr)` }"
    >
      <div v-for="(u, i) in restUrls" :key="u" class="thumb cursor-pointer" @click="show(sideCount + i)">
        <v-img :src="u" :alt="project.title" cover height="100%" />
        <div v-if="isLast(sideCount + i)" class="more display">+{{ extra }}</div>
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

    <v-dialog v-model="videoOpen" fullscreen transition="fade-transition">
      <v-card color="black" class="d-flex align-center justify-center" rounded="0">
        <v-btn icon="mdi-close" variant="text" class="close" aria-label="Close video" @click="playing = null" />
        <video
          v-if="playing"
          class="player"
          controls
          autoplay
          playsinline
          :poster="base + encodeURIComponent(playing.poster)"
          :src="base + encodeURIComponent(playing.file)"
        />
      </v-card>
    </v-dialog>

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
.embed { width: 100%; height: 100%; border: 0; }

.videos { display: flex; flex-direction: column; gap: 6px; padding: 8px 8px 0; }
.vid { position: relative; width: 100%; overflow: hidden; border-radius: 12px; background: #000; cursor: pointer; }
.vid img { display: block; width: 100%; height: 100%; object-fit: cover; }
.vid .play {
  position: absolute; inset: 0; margin: auto; color: #fff;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6)); transition: transform 0.2s ease;
}
.vid:hover .play, .vid:focus-visible .play { transform: scale(1.12); }
.close { position: absolute; top: 12px; right: 12px; z-index: 1; color: #fff; }
.player { max-width: 100vw; max-height: 100vh; width: 100%; height: 100%; object-fit: contain; }

/* Portrait video on the left, photos filling the space beside it */
.side { display: grid; grid-template-columns: 34% minmax(0, 1fr); gap: 6px; padding: 8px 8px 0; }
.side-right { display: flex; flex-direction: column; gap: 6px; min-width: 0; min-height: 0; }
.side-grid { flex: 1 1 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; min-height: 0; }
.tile { position: relative; overflow: hidden; border-radius: 12px; min-height: 0; }
.tile.wide { grid-column: span 2; }
.tile img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }

.thumbs { display: grid; gap: 6px; }
.thumb { position: relative; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 12px; }
.more {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(0, 0, 0, 0.55); color: #fff; font-size: 1.25rem; font-weight: 600;
}
</style>
