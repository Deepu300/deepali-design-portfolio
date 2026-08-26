(() => {
  const canvas = document.getElementById("rain");
  const ctx = canvas.getContext("2d", { alpha: false });
  const BASE = "assets/rain-v2-clean/";
  const PAPER = "#00262b";

  const state = {
    width: 0,
    height: 0,
    time: 0,
    last: 0,
    layers: {},
    fit: { x: 0, y: 0, w: 0, h: 0 },
    drops: [],
  };

  const FILES = {
    bg: "00-Background.png",
    sky: "01-Layer_2.png",
    cloudA: "02-Layer_8.png",
    cloudB: "03-Layer_8.png",
    cloudC: "04-Layer_8.png",
    cloudD: "05-Layer_8.png",
    orbsA: "06-Layer_6.png",
    orbsB: "07-Layer_6.png",
    groundA: "08-Layer_5.png",
    groundB: "09-Layer_5.png",
    lampA: "10-Layer_5.png",
    lampB: "11-Layer_5.png",
    lampC: "12-Layer_5.png",
    city: "13-Layer_4.png",
    bokehA: "14-Layer_7.png",
    bokehB: "15-Layer_7.png",
    bokehC: "16-Layer_7.png",
    highlights: "18-Layer_10.png",
    girl: "19-Layer_3.png",
    rainA: "22-Layer_12.png",
    rainB: "23-Layer_12.png",
    rainC: "24-Layer_12.png",
  };

  function loadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  function layout() {
    const art = state.layers.bg;
    const w = state.width;
    const h = state.height;
    if (!art || !w) {
      state.fit = { x: 0, y: 0, w: w, h: h };
      return;
    }
    const scale = Math.max(w / art.width, h / art.height);
    const dw = art.width * scale;
    const dh = art.height * scale;
    state.fit = {
      x: (w - dw) / 2,
      y: (h - dh) / 2,
      w: dw,
      h: dh,
    };
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.width = Math.max(1, Math.round(rect.width));
    state.height = Math.max(1, Math.round(rect.height));
    canvas.width = Math.floor(state.width * dpr);
    canvas.height = Math.floor(state.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layout();
  }

  function drawLayer(img, ox, oy) {
    if (!img) return;
    const f = state.fit;
    ctx.drawImage(img, f.x + (ox || 0), f.y + (oy || 0), f.w, f.h);
  }

  function flicker(t, speed, phase, min, max) {
    const n =
      0.5 +
      0.5 * Math.sin(t * speed + phase) +
      0.25 * Math.sin(t * speed * 2.7 + phase * 1.8);
    return min + (max - min) * Math.min(1, Math.max(0, n));
  }

  function makeDrop(u, v, near) {
    const depth = near ? 0.45 + Math.random() * 0.4 : 0.12 + Math.random() * 0.38;
    return {
      u,
      v,
      len: 10 + depth * 18,
      speed: 180 + depth * 240,
      alpha: 0.08 + depth * 0.18,
      thick: 0.35 + depth * 0.55,
      drift: -0.16,
    };
  }

  function sampleRain(img, drops) {
    if (!img) return;
    const w = img.width;
    const h = img.height;
    const off = document.createElement("canvas");
    off.width = w;
    off.height = h;
    const ox = off.getContext("2d", { willReadFrequently: true });
    ox.drawImage(img, 0, 0);
    const data = ox.getImageData(0, 0, w, h).data;
    for (let y = 0; y < h; y += 8) {
      for (let x = 0; x < w; x += 8) {
        const i = (y * w + x) * 4;
        const a = data[i + 3];
        const lum = Math.max(data[i], data[i + 1], data[i + 2]);
        if (a > 16 && lum > 70) {
          drops.push(makeDrop(x / w, y / h, lum > 180 && a > 30));
        }
      }
    }
  }

  function fillRain(drops, count) {
    for (let i = 0; i < count; i += 1) {
      drops.push(makeDrop(Math.random(), Math.random(), Math.random() > 0.7));
    }
  }

  function drawRain(dt) {
    const f = state.fit;
    if (!state.drops.length) return;
    const dirX = -0.16;
    const dirY = 1;
    ctx.save();
    ctx.beginPath();
    ctx.rect(f.x, f.y, f.w, f.h);
    ctx.clip();
    ctx.globalCompositeOperation = "screen";
    ctx.strokeStyle = "rgba(186, 214, 220, 0.9)";
    ctx.lineCap = "butt";
    for (const d of state.drops) {
      d.u += (d.speed * dirX * dt) / f.w;
      d.v += (d.speed * dirY * dt) / f.h;
      if (d.v > 1.06) {
        d.v -= 1.14;
        d.u = (d.u + 1.25) % 1;
      }
      if (d.u < -0.08) d.u += 1.16;
      if (d.u > 1.08) d.u -= 1.16;
      const x = f.x + d.u * f.w;
      const y = f.y + d.v * f.h;
      ctx.globalAlpha = d.alpha;
      ctx.lineWidth = d.thick;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dirX * d.len, y - dirY * d.len);
      ctx.stroke();
    }
    ctx.restore();
  }

  function draw(dt, t) {
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, state.width, state.height);

    drawLayer(state.layers.bg, 0, 0);
    drawLayer(state.layers.sky, 0, 0);
    drawLayer(state.layers.cloudA, 0, 0);
    drawLayer(state.layers.cloudB, 0, 0);
    drawLayer(state.layers.cloudC, 0, 0);
    drawLayer(state.layers.cloudD, 0, 0);
    drawLayer(state.layers.city, 0, 0);

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = flicker(t, 0.0032, 0.4, 0.18, 0.5);
    drawLayer(state.layers.city, 0, 0);
    ctx.restore();

    drawLayer(state.layers.groundA, 0, 0);
    drawLayer(state.layers.groundB, 0, 0);

    ctx.save();
    ctx.globalAlpha = flicker(t, 0.0048, 0.6, 0.7, 1);
    drawLayer(state.layers.lampA, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.globalAlpha = flicker(t, 0.0055, 1.8, 0.68, 1);
    drawLayer(state.layers.lampB, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.globalAlpha = flicker(t, 0.0042, 2.9, 0.72, 1);
    drawLayer(state.layers.lampC, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = flicker(t, 0.006, 1.1, 0.25, 0.75);
    drawLayer(state.layers.orbsA, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = flicker(t, 0.007, 2.4, 0.2, 0.7);
    drawLayer(state.layers.orbsB, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = flicker(t, 0.0036, 0.3, 0.4, 1);
    drawLayer(state.layers.bokehA, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = flicker(t, 0.0044, 1.5, 0.35, 0.95);
    drawLayer(state.layers.bokehB, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = flicker(t, 0.0051, 2.7, 0.3, 0.9);
    drawLayer(state.layers.bokehC, 0, 0);
    ctx.restore();

    drawLayer(state.layers.highlights, 0, 0);

    const girl = state.layers.girl;
    if (girl) {
      const f = state.fit;
      const px = f.x + f.w * 0.5;
      const py = f.y + f.h * 0.78;
      const wind = Math.sin(t * 0.0016);
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(wind * 0.028);
      ctx.transform(1, 0, wind * 0.018, 1, wind * 5, 0);
      ctx.translate(-px, -py);
      drawLayer(girl, 0, 0);
      ctx.restore();
    }

    drawRain(dt);
  }

  function frame(now) {
    if (!state.last) state.last = now;
    const dt = Math.min(0.033, (now - state.last) / 1000);
    state.last = now;
    state.time += dt * 1000;
    draw(dt, state.time);
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("message", (event) => {
    if (event.data === "resize-scene") resize();
  });

  async function start() {
    const entries = await Promise.all(
      Object.entries(FILES).map(async ([key, file]) => [key, await loadImage(BASE + file)])
    );
    for (const [key, img] of entries) state.layers[key] = img;
    resize();
    const drops = [];
    sampleRain(state.layers.rainA, drops);
    sampleRain(state.layers.rainB, drops);
    sampleRain(state.layers.rainC, drops);
    fillRain(drops, 380);
    if (drops.length > 720) drops.length = 720;
    state.drops = drops;
    requestAnimationFrame(frame);
  }

  start();
})();
