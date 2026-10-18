<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { THEME_KEY } from './plugins/vuetify'
import { education, experience, links, profile, projects, skills } from './data/content'
import ProjectCard from './components/ProjectCard.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.global.name.value = next
  try { localStorage.setItem(THEME_KEY, next) } catch { /* storage blocked */ }
}

const nav = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const featured = projects[0]
const others = projects.slice(1)
</script>

<template>
  <v-app>
    <v-app-bar flat color="background" border="b" density="comfortable">
      <v-container class="d-flex align-center" style="max-width: 1080px">
        <a href="#top" class="display text-h6 font-weight-bold text-decoration-none text-high-emphasis">
          {{ profile.name }}
        </a>
        <v-spacer />
        <v-btn v-for="n in nav" :key="n.href" :href="n.href" variant="text" class="d-none d-sm-flex text-none">{{ n.label }}</v-btn>
        <v-btn
          :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="text"
          aria-label="Toggle light and dark theme"
          @click="toggleTheme"
        />
      </v-container>
    </v-app-bar>

    <v-main id="top">
      <v-container style="max-width: 1080px">
        <!-- Hero -->
        <section class="hero py-16 py-md-24 fade-in">
          <p class="section-label mb-4">{{ profile.title }}</p>
          <h1 class="display font-weight-bold" style="font-size: clamp(2.6rem, 8vw, 5rem); line-height: 1.05">
            {{ profile.name }}<br />
            <span class="gradient-text">builds software that moves things.</span>
          </h1>
          <p class="text-h6 text-medium-emphasis font-weight-regular mt-6" style="max-width: 640px">
            {{ profile.tagline }}
          </p>
          <div class="mt-8 d-flex flex-wrap ga-3">
            <v-btn size="large" color="primary" rounded="pill" href="#projects" class="text-none px-6">See my work</v-btn>
            <v-btn size="large" variant="outlined" rounded="pill" href="#experience" class="text-none px-6">Experience</v-btn>
          </div>

          <v-row class="mt-12" dense>
            <v-col v-for="f in [
              { k: 'Now', v: 'Software Engineer, Netelek' },
              { k: 'Stack', v: 'Java · Spring Boot · Vue · JavaScript · Knockout' },
              { k: 'Also', v: 'IoT, embedded, CNC and CAD' },
              { k: 'Education', v: 'B.Eng (Mech), University of Pretoria' },
            ]" :key="f.k" cols="6" md="3">
              <div class="glass rounded-lg pa-4 h-100">
                <div class="section-label" style="font-size: 0.65rem">{{ f.k }}</div>
                <div class="mt-1 text-body-2">{{ f.v }}</div>
              </div>
            </v-col>
          </v-row>
        </section>

        <!-- About -->
        <section class="py-8">
          <p class="text-h5 font-weight-regular" style="max-width: 820px; line-height: 1.5">{{ profile.summary }}</p>
        </section>

        <!-- Experience -->
        <section id="experience" class="pt-12">
          <p class="section-label">Experience</p>
          <h2 class="display text-h4 font-weight-bold mb-8">Where I have worked</h2>

          <v-timeline side="end" align="start" line-color="primary" line-thickness="2" density="compact" truncate-line="both">
            <v-timeline-item
              v-for="job in experience"
              :key="job.role + job.period"
              :dot-color="job.current ? 'secondary' : 'primary'"
              size="x-small"
            >
              <v-card class="glass" rounded="xl">
                <v-card-item>
                  <div class="text-caption text-medium-emphasis">{{ job.period }}</div>
                  <v-card-title class="display text-h6 text-wrap">
                    {{ job.role }} <span v-if="job.company" class="text-medium-emphasis font-weight-regular">· {{ job.company }}</span>
                  </v-card-title>
                </v-card-item>
                <v-card-text class="text-medium-emphasis pt-0">
                  <ul class="ml-5">
                    <li v-for="p in job.points" :key="p" class="mb-1">{{ p }}</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" size="x-small">
              <v-card class="glass" rounded="xl">
                <v-card-item>
                  <div class="text-caption text-medium-emphasis">{{ education.period }}</div>
                  <v-card-title class="display text-h6 text-wrap">
                    {{ education.degree }} <span class="text-medium-emphasis font-weight-regular">· {{ education.school }}</span>
                  </v-card-title>
                </v-card-item>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </section>

        <!-- Projects -->
        <section id="projects" class="pt-16">
          <p class="section-label">Projects</p>
          <h2 class="display text-h4 font-weight-bold mb-2">Side quests and builds</h2>
          <p class="text-medium-emphasis mb-8">Software, electronics and things made with my hands.</p>

          <ProjectCard :project="featured" featured class="mb-6" />
          <v-row>
            <v-col v-for="p in others" :key="p.title" cols="12" md="6">
              <ProjectCard :project="p" />
            </v-col>
          </v-row>
        </section>

        <!-- Skills -->
        <section id="skills" class="pt-16">
          <p class="section-label">Skills</p>
          <h2 class="display text-h4 font-weight-bold mb-8">Tools I work with</h2>
          <v-row>
            <v-col v-for="(items, group) in skills" :key="group" cols="12" md="6">
              <v-card class="glass h-100" rounded="xl">
                <v-card-item>
                  <v-card-title class="display text-subtitle-1 font-weight-bold">{{ group }}</v-card-title>
                </v-card-item>
                <v-card-text class="d-flex flex-wrap ga-2 pt-0">
                  <v-chip v-for="s in items" :key="s" variant="tonal" size="small" label>{{ s }}</v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <!-- Contact -->
        <section id="contact" class="py-16">
          <v-card class="glass text-center pa-8 pa-md-12" rounded="xl">
            <p class="section-label">Contact</p>
            <h2 class="display text-h4 font-weight-bold my-3">Let's build something.</h2>
            <p class="text-medium-emphasis mb-6">References are available on request.</p>
            <div class="d-flex flex-wrap justify-center ga-3">
              <v-btn
                v-for="l in links"
                :key="l.href"
                :href="l.href"
                :prepend-icon="l.icon"
                :target="l.href.startsWith('http') ? '_blank' : undefined"
                rel="noopener"
                variant="tonal"
                color="primary"
                rounded="pill"
                class="text-none"
              >{{ l.label }}</v-btn>
            </div>
          </v-card>
        </section>
      </v-container>
    </v-main>

    <v-footer class="justify-center text-medium-emphasis text-caption">© {{ new Date().getFullYear() }} Gustav Linde</v-footer>
  </v-app>
</template>
