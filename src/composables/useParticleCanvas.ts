import { onMounted, onUnmounted, type Ref } from "vue";

export type ParticleVariant = "hero" | "cta";

interface ParticleDot {
  xf: number;
  yf: number;
  vx: number;
  vy: number;
  r: number;
}

interface VariantConfig {
  count: number;
  maxDist: number;
  xMin: number;
  speed: number;
  radiusMin: number;
  radiusRange: number;
  lineAlpha: number;
  dotAlpha: number;
  color: string;
  fadeByX: boolean;
}

const VARIANTS: Record<ParticleVariant, VariantConfig> = {
  hero: {
    count: 55,
    maxDist: 140,
    xMin: 0.35,
    speed: 0.22,
    radiusMin: 1.2,
    radiusRange: 1.2,
    lineAlpha: 0.09,
    dotAlpha: 0.09,
    color: "13,71,255",
    fadeByX: true,
  },
  cta: {
    count: 44,
    maxDist: 130,
    xMin: 0,
    speed: 0.2,
    radiusMin: 1.4,
    radiusRange: 1.1,
    lineAlpha: 0.1,
    dotAlpha: 0.13,
    color: "255,255,255",
    fadeByX: false,
  },
};

export function useParticleCanvas(
  canvasRef: Ref<HTMLCanvasElement | null>,
  variant: ParticleVariant,
) {
  const config = VARIANTS[variant];
  let raf = 0;
  let dots: ParticleDot[] = [];
  let resize: (() => void) | null = null;

  onMounted(() => {
    const canvas = canvasRef.value;
    const section = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !section || !ctx) return;

    resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    dots = Array.from({ length: config.count }, () => ({
      xf: config.xMin + Math.random() * (1 - config.xMin),
      yf: Math.random(),
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      r: config.radiusMin + Math.random() * config.radiusRange,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      dots.forEach((d) => {
        d.xf += d.vx / w;
        d.yf += d.vy / h;
        if (d.xf < config.xMin) d.xf = 1;
        if (d.xf > 1) d.xf = config.xMin;
        if (d.yf < 0) d.yf = 1;
        if (d.yf > 1) d.yf = 0;
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const ax = dots[i].xf * w;
          const ay = dots[i].yf * h;
          const bx = dots[j].xf * w;
          const by = dots[j].yf * h;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < config.maxDist) {
            let alpha = (1 - dist / config.maxDist) * config.lineAlpha;
            if (config.fadeByX) {
              const xFade =
                ((dots[i].xf + dots[j].xf) / 2 - config.xMin) /
                (1 - config.xMin);
              alpha *= xFade;
            }
            ctx.strokeStyle = `rgba(${config.color},${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      dots.forEach((d) => {
        const alpha = config.fadeByX
          ? config.dotAlpha * ((d.xf - config.xMin) / (1 - config.xMin))
          : config.dotAlpha;
        ctx.fillStyle = `rgba(${config.color},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(d.xf * w, d.yf * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
  });

  onUnmounted(() => {
    if (raf) cancelAnimationFrame(raf);
    if (resize) window.removeEventListener("resize", resize);
  });
}
