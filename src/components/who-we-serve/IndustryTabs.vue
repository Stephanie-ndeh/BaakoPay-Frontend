<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ICONS } from "@/assets/icons";

const { t } = useI18n();
const activeIndex = ref(0);

const AUTOPLAY_MS = 5000;
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

function startAutoplay() {
  stopAutoplay();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  autoplayTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % tabs.value.length;
  }, AUTOPLAY_MS);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function selectTab(i: number) {
  activeIndex.value = i;
  startAutoplay();
}

onMounted(startAutoplay);
onUnmounted(stopAutoplay);

interface Avatar {
  initials: string;
  bg: string;
  color: string;
  shape: "circle" | "square";
}

interface Row {
  name: string;
  sub?: string;
  avatar?: Avatar;
  values: string[];
  badgeStyle: "success" | "warning";
}

interface Tab {
  key: string;
  icon: string;
  name: string;
  subtitle: string;
  example: string;
  photo?: string;
  columns: string[];
  rows: Row[];
  statLabel: string;
  statValue: string;
  statSub: string;
  bullets: string[];
}

const tabs = computed<Tab[]>(() => [
  {
    key: "businesses",
    icon: "grid",
    name: t("common.industries.businesses"),
    subtitle: t("whoWeServe.tabs.businesses.subtitle"),
    example: t("whoWeServe.tabs.businesses.example"),
    photo: "/img/Business_owner_reviewing.webp",
    columns: [
      t("whoWeServe.tabs.businesses.columnClient"),
      t("whoWeServe.tabs.businesses.columnAmount"),
      t("whoWeServe.tabs.businesses.columnStatus"),
    ],
    rows: [
      {
        name: "Cameroon Oil Corp",
        sub: "INV-2025-081",
        avatar: {
          initials: "CO",
          bg: "bg-tint",
          color: "text-brand",
          shape: "square",
        },
        values: ["XAF 850,000", t("common.status.paid")],
        badgeStyle: "success",
      },
      {
        name: "Global Agro SARL",
        sub: "INV-2025-082",
        avatar: {
          initials: "GA",
          bg: "bg-[#FFF8EC]",
          color: "text-gold",
          shape: "square",
        },
        values: ["XAF 340,000", t("common.status.pending")],
        badgeStyle: "warning",
      },
      {
        name: "Tech Solutions Ltd",
        sub: "INV-2025-083",
        avatar: {
          initials: "TS",
          bg: "bg-danger-bg",
          color: "text-danger",
          shape: "square",
        },
        values: ["XAF 1,200,000", t("common.status.overdue")],
        badgeStyle: "warning",
      },
    ],
    statLabel: t("whoWeServe.tabs.businesses.statLabel"),
    statValue: "XAF 3.2M",
    statSub: t("whoWeServe.tabs.businesses.statSub"),
    bullets: [
      t("whoWeServe.tabs.businesses.bullet1"),
      t("whoWeServe.tabs.businesses.bullet2"),
    ],
  },
  {
    key: "schools",
    icon: "cap",
    name: t("common.industries.schools"),
    subtitle: t("whoWeServe.tabs.schools.subtitle"),
    example: t("whoWeServe.tabs.schools.example"),
    photo: "/img/Administrator_at_desk_with_ledgers.webp",
    columns: [
      t("whoWeServe.tabs.schools.columnStudent"),
      t("whoWeServe.tabs.schools.columnClass"),
      t("whoWeServe.tabs.schools.columnAmount"),
      t("whoWeServe.tabs.schools.columnStatus"),
    ],
    rows: [
      {
        name: "Grace Biya",
        avatar: {
          initials: "GB",
          bg: "bg-tint",
          color: "text-brand",
          shape: "circle",
        },
        values: ["Class 6A", "XAF 45,000", t("common.status.paid")],
        badgeStyle: "success",
      },
      {
        name: "Marc Etoga",
        avatar: {
          initials: "ME",
          bg: "bg-[#FFF8EC]",
          color: "text-gold",
          shape: "circle",
        },
        values: ["Class 4B", "XAF 12,500", t("common.status.pending")],
        badgeStyle: "warning",
      },
      {
        name: "Laure Abanda",
        avatar: {
          initials: "LA",
          bg: "bg-tint",
          color: "text-brand",
          shape: "circle",
        },
        values: ["Class 5C", "XAF 8,000", t("common.status.paid")],
        badgeStyle: "success",
      },
    ],
    statLabel: t("whoWeServe.tabs.schools.statLabel"),
    statValue: "XAF 2.4M",
    statSub: t("whoWeServe.tabs.schools.statSub"),
    bullets: [
      t("whoWeServe.tabs.schools.bullet1"),
      t("whoWeServe.tabs.schools.bullet2"),
    ],
  },
  {
    key: "hospitals",
    icon: "hospital",
    name: t("common.industries.hospitals"),
    subtitle: t("whoWeServe.tabs.hospitals.subtitle"),
    example: t("whoWeServe.tabs.hospitals.example"),
    photo: "/img/Hospital_administrator_looking_a.webp",
    columns: [
      t("whoWeServe.tabs.hospitals.columnPatient"),
      t("whoWeServe.tabs.hospitals.columnService"),
      t("whoWeServe.tabs.hospitals.columnAmount"),
      t("whoWeServe.tabs.hospitals.columnStatus"),
    ],
    rows: [
      {
        name: "Jean Mbarga",
        avatar: {
          initials: "JM",
          bg: "bg-tint",
          color: "text-brand",
          shape: "circle",
        },
        values: ["Consultation", "XAF 15,000", t("common.status.paid")],
        badgeStyle: "success",
      },
      {
        name: "Fatima Sissoko",
        avatar: {
          initials: "FS",
          bg: "bg-[#FFF8EC]",
          color: "text-gold",
          shape: "circle",
        },
        values: ["Lab Tests", "XAF 42,500", t("common.status.pending")],
        badgeStyle: "warning",
      },
      {
        name: "Pierre Nkoa",
        avatar: {
          initials: "PN",
          bg: "bg-tint",
          color: "text-brand",
          shape: "circle",
        },
        values: ["Surgery", "XAF 380,000", t("common.status.paid")],
        badgeStyle: "success",
      },
    ],
    statLabel: t("whoWeServe.tabs.hospitals.statLabel"),
    statValue: "100%",
    statSub: t("whoWeServe.tabs.hospitals.statSub"),
    bullets: [
      t("whoWeServe.tabs.hospitals.bullet1"),
      t("whoWeServe.tabs.hospitals.bullet2"),
    ],
  },
  {
    key: "ngos",
    icon: "heart",
    name: t("common.industries.ngos"),
    subtitle: t("whoWeServe.tabs.ngos.subtitle"),
    example: t("whoWeServe.tabs.ngos.example"),
    columns: [
      t("whoWeServe.tabs.ngos.columnMember"),
      t("whoWeServe.tabs.ngos.columnAmount"),
      t("whoWeServe.tabs.ngos.columnDate"),
      t("whoWeServe.tabs.ngos.columnStatus"),
    ],
    rows: [
      {
        name: "UNICEF Fund",
        avatar: {
          initials: "UF",
          bg: "bg-tint",
          color: "text-brand",
          shape: "square",
        },
        values: ["XAF 500,000", "Oct 07", t("common.status.received")],
        badgeStyle: "success",
      },
      {
        name: "Local Church",
        avatar: {
          initials: "LC",
          bg: "bg-[#FFF8EC]",
          color: "text-gold",
          shape: "square",
        },
        values: ["XAF 85,000", "Oct 08", t("common.status.received")],
        badgeStyle: "success",
      },
      {
        name: "Alumni Group",
        avatar: {
          initials: "AG",
          bg: "bg-tint",
          color: "text-brand",
          shape: "square",
        },
        values: ["XAF 200,000", "Oct 09", t("common.status.processing")],
        badgeStyle: "warning",
      },
    ],
    statLabel: t("whoWeServe.tabs.ngos.statLabel"),
    statValue: "24/7",
    statSub: t("whoWeServe.tabs.ngos.statSub"),
    bullets: [
      t("whoWeServe.tabs.ngos.bullet1"),
      t("whoWeServe.tabs.ngos.bullet2"),
    ],
  },
  {
    key: "merchants",
    icon: "tag",
    name: t("common.industries.merchants"),
    subtitle: t("whoWeServe.tabs.merchants.subtitle"),
    example: t("whoWeServe.tabs.merchants.example"),
    columns: [
      t("whoWeServe.tabs.merchants.columnItem"),
      t("whoWeServe.tabs.merchants.columnAmount"),
      t("whoWeServe.tabs.merchants.columnMethod"),
      t("whoWeServe.tabs.merchants.columnStatus"),
    ],
    rows: [
      {
        name: "Phone Repair",
        values: ["XAF 25,000", "MTN MoMo", "09:14"],
        badgeStyle: "success",
      },
      {
        name: "Fashion Wear",
        values: ["XAF 18,500", "Orange Money", "10:32"],
        badgeStyle: "success",
      },
      {
        name: "Restaurant Bill",
        values: ["XAF 12,750", "MTN MoMo", "11:45"],
        badgeStyle: "success",
      },
    ],
    statLabel: t("whoWeServe.tabs.merchants.statLabel"),
    statValue: "Instant",
    statSub: t("whoWeServe.tabs.merchants.statSub"),
    bullets: [
      t("whoWeServe.tabs.merchants.bullet1"),
      t("whoWeServe.tabs.merchants.bullet2"),
    ],
  },
]);

const badgeClasses: Record<Row["badgeStyle"], string> = {
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
};
</script>

<template>
  <section class="bg-white px-5 pt-20 pb-24 md:px-10 lg:px-20">
    <div
      class="mx-auto flex max-w-[1100px] flex-col items-stretch gap-6 lg:flex-row lg:gap-10"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
    >
      <!-- Tab list -->
      <div class="flex flex-col gap-1 lg:basis-[33%]">
        <button
          v-for="(tab, i) in tabs"
          :key="tab.key"
          type="button"
          class="flex items-start gap-3.5 rounded-[10px] border-l-[3px] py-4 pr-[18px] pl-[17px] text-left transition-colors"
          :class="
            i === activeIndex
              ? 'border-brand bg-tint'
              : 'border-transparent bg-transparent hover:bg-tint/50'
          "
          @click="selectTab(i)"
        >
          <span
            class="mt-px shrink-0 [&>svg]:h-5 [&>svg]:w-5"
            :class="i === activeIndex ? 'text-ink' : 'text-muted'"
            v-html="ICONS[tab.icon]"
          ></span>
          <span>
            <span
              class="block text-[14.5px] leading-[1.3]"
              :class="
                i === activeIndex
                  ? 'font-bold text-ink'
                  : 'font-medium text-muted'
              "
              >{{ tab.name }}</span
            >
            <span class="mt-0.5 block text-xs text-muted">{{
              tab.subtitle
            }}</span>
          </span>
        </button>
      </div>

      <!-- Content panel -->
      <div
        class="relative min-h-[620px] flex-1 overflow-hidden rounded-2xl bg-tint sm:min-h-[560px] lg:min-h-[500px]"
      >
        <div
          v-for="(tab, i) in tabs"
          :key="tab.key"
          class="absolute inset-0 flex flex-col gap-6 overflow-y-auto px-5 py-7 transition-[opacity,transform] duration-300 md:px-8 lg:px-10 lg:py-9"
          :class="
            i === activeIndex
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-3 opacity-0'
          "
        >
          <div
            class="text-[10px] font-bold tracking-[2px] text-muted uppercase"
          >
            {{ tab.example }}
          </div>

          <div
            v-if="tab.photo"
            class="h-40 shrink-0 overflow-hidden rounded-xl sm:h-48"
          >
            <img
              :src="tab.photo"
              :alt="tab.name"
              class="h-full w-full object-cover"
            />
          </div>

          <div
            class="relative shrink-0 overflow-hidden rounded-xl bg-white pt-[52px] sm:pt-0"
          >
            <div class="overflow-x-auto">
              <div class="min-w-[460px]">
                <div
                  class="flex items-center border-b border-border-soft bg-surface-alt px-5 py-[11px]"
                >
                  <span
                    class="flex-1 text-[10.5px] font-semibold tracking-[0.8px] text-muted uppercase"
                    >{{ tab.columns[0] }}</span
                  >
                  <span
                    v-for="(col, ci) in tab.columns.slice(1)"
                    :key="col"
                    class="text-[10.5px] font-semibold tracking-[0.8px] text-muted uppercase"
                    :class="
                      ci === tab.columns.length - 2 ? 'w-20' : 'w-[110px]'
                    "
                    >{{ col }}</span
                  >
                </div>

                <div
                  v-for="(row, ri) in tab.rows"
                  :key="row.name"
                  class="flex items-center px-5 py-[13px]"
                  :class="
                    ri < tab.rows.length - 1
                      ? 'border-b border-border-soft'
                      : ''
                  "
                >
                  <div class="flex flex-1 items-center gap-2.5">
                    <div
                      v-if="row.avatar"
                      class="flex h-8 w-8 shrink-0 items-center justify-center"
                      :class="[
                        row.avatar.bg,
                        row.avatar.shape === 'circle'
                          ? 'rounded-full'
                          : 'rounded-lg',
                      ]"
                    >
                      <span
                        class="text-[10px] font-bold"
                        :class="row.avatar.color"
                        >{{ row.avatar.initials }}</span
                      >
                    </div>
                    <div>
                      <div
                        class="text-[13px] font-semibold whitespace-nowrap text-ink"
                      >
                        {{ row.name }}
                      </div>
                      <div v-if="row.sub" class="text-[11px] text-muted">
                        {{ row.sub }}
                      </div>
                    </div>
                  </div>
                  <span
                    v-for="(val, vi) in row.values"
                    :key="vi"
                    :class="
                      vi === row.values.length - 1
                        ? `w-20 shrink-0 rounded-full px-[9px] py-[3px] text-center text-[10.5px] font-semibold ${badgeClasses[row.badgeStyle]}`
                        : 'w-[110px] shrink-0 text-[13px] font-semibold text-ink'
                    "
                    >{{ val }}</span
                  >
                </div>
              </div>
            </div>

            <div
              class="absolute top-[11px] right-3.5 rounded-[10px] bg-ink px-3.5 py-2.5 text-right"
            >
              <div
                class="mb-0.5 text-[9px] font-semibold tracking-[1px] text-white/45 uppercase"
              >
                {{ tab.statLabel }}
              </div>
              <div
                class="text-base leading-[1.2] font-extrabold tracking-[-0.5px] text-white"
              >
                {{ tab.statValue }}
              </div>
              <div class="text-[9.5px] text-white/40">{{ tab.statSub }}</div>
            </div>
          </div>

          <div class="flex flex-col gap-2.5">
            <div
              v-for="bullet in tab.bullets"
              :key="bullet"
              class="flex items-start gap-2.5"
            >
              <span
                class="mt-[7px] block h-[5px] w-[5px] shrink-0 rounded-full bg-brand"
              ></span>
              <span class="text-sm leading-[1.5] font-semibold text-ink">{{
                bullet
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
