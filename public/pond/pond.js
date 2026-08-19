(() => {
  const canvas = document.getElementById("pond");
  const ctx = canvas.getContext("2d", { alpha: false });

  const state = {
    width: 0,
    height: 0,
    dpr: 1,
    time: 0,
    paused: false,
    last: 0,
    sprites: {
      water: null,
      duckRight: null,
      duckLeft: null,
      koiRight: null,
      koiLeft: null,
      lily: null,
      petal: null,
    },
    ducks: [],
    koi: [],
    lilies: [],
    petals: [],
    wakes: [],
    ripples: [],
  };

  function chromaKey(img) {
    const off = document.createElement("canvas");
    off.width = img.naturalWidth || img.width;
    off.height = img.naturalHeight || img.height;
    const ox = off.getContext("2d");
    ox.drawImage(img, 0, 0);
    const frame = ox.getImageData(0, 0, off.width, off.height);
    const d = frame.data;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];
      const greenLead = g - Math.max(r, b);
      if (g > 140 && greenLead > 40 && r < 150 && b < 170) {
        const t = Math.min(1, (greenLead - 20) / 90);
        d[i + 3] = Math.round(d[i + 3] * (1 - t));
      }
    }
    ox.putImageData(frame, 0, 0);
    return off;
  }

  function loadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      const finish = (value) => {
        clearTimeout(timer);
        img.onload = null;
        img.onerror = null;
        resolve(value);
      };
      const timer = setTimeout(() => finish(null), 1200);
      img.onload = () => finish(img);
      img.onerror = () => finish(null);
      img.src = src;
    });
  }

  async function loadSprites() {
    const names = {
      water: "assets/water-background.png",
      duckRight: "assets/duck-right.png",
      duckLeft: "assets/duck-left.png",
      koiRight: "assets/koi-right.png",
      koiLeft: "assets/koi-left.png",
      lily: "assets/lily-cluster.png",
      petal: "assets/petal.png",
    };
    const entries = await Promise.all(
      Object.entries(names).map(async ([key, src]) => {
        const img = await loadImage(src);
        if (!img) return [key, null];
        if (key === "water") return [key, img];
        return [key, chromaKey(img)];
      })
    );
    for (const [key, value] of entries) state.sprites[key] = value;
  }

  function resize() {
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.parentElement.getBoundingClientRect();
    state.width = Math.max(1, Math.round(rect.width));
    state.height = Math.max(1, Math.round(rect.height));
    canvas.width = Math.floor(state.width * state.dpr);
    canvas.height = Math.floor(state.height * state.dpr);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function spawnWorld() {
    const { width: w, height: h } = state;

    state.ducks = [
      { x: w * 0.12, y: h * 0.82, dir: 1, speed: 24, scale: 0.92, bob: rand(0, Math.PI * 2) },
      { x: w * 0.7, y: h * 0.52, dir: -1, speed: 19, scale: 0.86, bob: rand(0, Math.PI * 2) },
      { x: w * 0.78, y: h * 0.58, dir: -1, speed: 19, scale: 0.84, bob: rand(0, Math.PI * 2) },
    ];

    state.koi = [
      { x: w * 0.78, y: h * 0.18, angle: 2.5, speed: 16, depth: 0.5, phase: 0.2, scale: 0.7 },
      { x: w * 0.28, y: h * 0.42, angle: 0.2, speed: 15, depth: 0.78, phase: 1.1, scale: 0.8 },
      { x: w * 0.18, y: h * 0.78, angle: 3.5, speed: 12, depth: 0.86, phase: 2.4, scale: 0.64 },
      { x: w * 0.22, y: h * 0.16, angle: 5.5, speed: 10, depth: 0.36, phase: 3.8, scale: 0.52 },
    ];

    state.lilies = [
      { x: w * 0.14, y: h * 0.16, rot: 0.2, drift: 3.2, scale: 0.88, bob: 0.4 },
      { x: w * 0.24, y: h * 0.4, rot: 1.1, drift: 2.4, scale: 1.12, bob: 1.7 },
      { x: w * 0.8, y: h * 0.14, rot: 2.2, drift: 3.8, scale: 0.95, bob: 2.9 },
      { x: w * 0.86, y: h * 0.78, rot: 0.7, drift: 2.1, scale: 1.02, bob: 4.1 },
      { x: w * 0.48, y: h * 0.72, rot: 3.1, drift: 2.8, scale: 0.68, bob: 5.2 },
    ];

    state.petals = Array.from({ length: 24 }, () => ({
      x: rand(0, w),
      y: rand(0, h),
      rot: rand(0, Math.PI * 2),
      spin: rand(-0.7, 0.7),
      speed: rand(10, 22),
      wobble: rand(0, Math.PI * 2),
      size: rand(4, 9),
    }));

    state.ripples = Array.from({ length: 18 }, (_, i) => ({
      y: h * (0.1 + i * 0.048),
      amp: rand(5, 12),
      freq: rand(0.007, 0.015),
      speed: rand(0.28, 0.55),
      phase: rand(0, Math.PI * 2),
      alpha: rand(0.14, 0.34),
    }));
  }

  function wrapX(x, pad) {
    const w = state.width;
    if (x < -pad) return w + pad;
    if (x > w + pad) return -pad;
    return x;
  }

  function wrapY(y, pad) {
    const h = state.height;
    if (y < -pad) return h + pad;
    if (y > h + pad) return -pad;
    return y;
  }

  function coverImage(img, ox, oy) {
    const { width: w, height: h } = state;
    const scale = Math.max(w / img.width, h / img.height) * 1.04;
    const dw = img.width * scale;
    const dh = img.height * scale;
    ctx.drawImage(img, (w - dw) / 2 + ox, (h - dh) / 2 + oy, dw, dh);
  }

  function drawWater(t) {
    const { width: w, height: h, sprites } = state;
    const flow = t * 0.022;

    if (sprites.water) {
      coverImage(sprites.water, Math.sin(t * 0.00008) * 6, Math.sin(t * 0.00011) * 5);
    } else {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#8ec4c8");
      g.addColorStop(0.35, "#c5e6ee");
      g.addColorStop(0.7, "#b7dce6");
      g.addColorStop(1, "#7fb4b8");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const vg = ctx.createRadialGradient(w * 0.5, h * 0.45, w * 0.12, w * 0.5, h * 0.5, w * 0.72);
      vg.addColorStop(0, "rgba(210, 236, 242, 0.55)");
      vg.addColorStop(1, "rgba(62, 122, 130, 0.42)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
    }

    ctx.save();
    ctx.globalCompositeOperation = "soft-light";
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    for (let i = 0; i < 8; i += 1) {
      const x = ((t * (0.03 + i * 0.005) + i * 200) % (w + 280)) - 140;
      const y = h * (0.16 + (i % 5) * 0.15) + Math.sin(t * 0.00045 + i) * 16;
      ctx.beginPath();
      ctx.ellipse(x, y, 170 + i * 16, 16, 0.06, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.lineCap = "round";
    for (const r of state.ripples) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
      ctx.lineWidth = 1.2;
      const shift = flow * r.speed * 40;
      for (let x = -30; x <= w + 30; x += 8) {
        const yy =
          r.y +
          Math.sin((x + shift) * r.freq + t * 0.001 * r.speed + r.phase) * r.amp +
          Math.sin((x + shift) * r.freq * 2.1 + t * 0.0016 + r.phase) * (r.amp * 0.3);
        if (x === -30) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
  }

  function drawProceduralDuck(dir, scale) {
    ctx.save();
    ctx.scale(dir, 1);
    ctx.scale(scale, scale);
    ctx.fillStyle = "rgba(255,255,255,0.96)";
    ctx.beginPath();
    ctx.ellipse(0, 0, 38, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(236, 232, 226, 0.9)";
    ctx.beginPath();
    ctx.ellipse(-10, 2, 18, 12, 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ef9a3c";
    ctx.beginPath();
    ctx.moveTo(34, -2);
    ctx.quadraticCurveTo(48, 0, 34, 6);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#2b2b2b";
    ctx.beginPath();
    ctx.arc(16, -4, 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawProceduralKoi(scale, depth) {
    ctx.save();
    ctx.globalAlpha = 0.35 + depth * 0.55;
    ctx.scale(scale, scale);
    ctx.fillStyle = "#f3ece0";
    ctx.beginPath();
    ctx.ellipse(0, 0, 36, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e06b32";
    ctx.beginPath();
    ctx.ellipse(-6, -2, 16, 10, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(12, 3, 10, 7, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-34, 0);
    ctx.quadraticCurveTo(-48, -12, -42, 0);
    ctx.quadraticCurveTo(-48, 12, -34, 0);
    ctx.fill();
    ctx.restore();
  }

  function drawFlower(x, y, r) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "#f4a3c2";
    for (let i = 0; i < 5; i += 1) {
      ctx.rotate((Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(0, r * 0.55, r * 0.38, r * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#f7d98a";
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawProceduralLily(scale) {
    ctx.save();
    ctx.scale(scale, scale);
    const pads = [
      { x: -18, y: 6, r: 28, c: "#8fbf72" },
      { x: 16, y: -8, r: 24, c: "#7eaf66" },
      { x: 6, y: 18, r: 20, c: "#9cc87e" },
    ];
    for (const p of pads) {
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.92;
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.r, p.r * 0.78, 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
    drawFlower(-6, -4, 11);
    drawFlower(18, 10, 9);
    ctx.restore();
  }

  function drawSpriteOr(sprite, w, h, fallback) {
    if (sprite) ctx.drawImage(sprite, -w / 2, -h / 2, w, h);
    else fallback();
  }

  function update(dt, t) {
    const current = 8;

    for (const duck of state.ducks) {
      duck.x += duck.dir * duck.speed * dt;
      duck.bob += dt * 2.2;
      duck.x = wrapX(duck.x, 70);
      if (Math.random() < 0.014) {
        state.wakes.push({
          x: duck.x - duck.dir * 30,
          y: duck.y,
          r: 6,
          life: 1,
        });
      }
    }

    for (const fish of state.koi) {
      fish.phase += dt;
      fish.angle += Math.sin(t * 0.00045 + fish.phase) * 0.4 * dt;
      const swim = fish.speed * (0.65 + fish.depth * 0.45);
      fish.x += Math.cos(fish.angle) * swim * dt;
      fish.y += Math.sin(fish.angle) * swim * 0.55 * dt;
      fish.x = wrapX(fish.x, 60);
      fish.y = wrapY(fish.y, 50);
    }

    for (const lily of state.lilies) {
      lily.x += (current * 0.1 + lily.drift * 0.12) * dt;
      lily.rot += dt * 0.07;
      lily.bob += dt * 1.1;
      lily.x = wrapX(lily.x, 90);
    }

    for (const petal of state.petals) {
      petal.x += (current + petal.speed) * dt;
      petal.y += Math.sin(t * 0.001 + petal.wobble) * 10 * dt;
      petal.rot += petal.spin * dt;
      petal.x = wrapX(petal.x, 20);
      petal.y = wrapY(petal.y, 16);
    }

    state.wakes = state.wakes.filter((wake) => {
      wake.r += 24 * dt;
      wake.life -= 0.48 * dt;
      return wake.life > 0;
    });
  }

  function draw(t) {
    const { sprites } = state;
    drawWater(t);

    const koi = [...state.koi].sort((a, b) => a.depth - b.depth);
    for (const fish of koi) {
      if (fish.depth > 0.6) continue;
      ctx.save();
      ctx.globalAlpha = 0.45 + fish.depth * 0.4;
      ctx.translate(fish.x, fish.y + Math.sin(t * 0.0015 + fish.phase) * 4);
      ctx.rotate(fish.angle);
      drawSpriteOr(sprites.koiRight, 90 * fish.scale, 90 * fish.scale, () =>
        drawProceduralKoi(fish.scale, fish.depth)
      );
      ctx.restore();
    }

    for (const lily of state.lilies) {
      const bob = Math.sin(t * 0.0012 + lily.bob) * 6;
      ctx.save();
      ctx.translate(lily.x, lily.y + bob);
      ctx.rotate(lily.rot * 0.12 + Math.sin(t * 0.0005 + lily.bob) * 0.1);
      drawSpriteOr(sprites.lily, 156 * lily.scale, 156 * lily.scale, () => drawProceduralLily(lily.scale));
      ctx.restore();
    }

    for (const petal of state.petals) {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rot);
      ctx.globalAlpha = 0.85;
      if (sprites.petal) {
        ctx.drawImage(sprites.petal, -petal.size, -petal.size, petal.size * 2.2, petal.size * 2.2);
      } else {
        ctx.fillStyle = "#f0a0bd";
        ctx.beginPath();
        ctx.ellipse(0, 0, petal.size, petal.size * 0.55, 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    for (const fish of koi) {
      if (fish.depth <= 0.6) continue;
      ctx.save();
      ctx.translate(fish.x, fish.y + Math.sin(t * 0.0018 + fish.phase) * 3);
      ctx.rotate(fish.angle);
      drawSpriteOr(sprites.koiRight, 112 * fish.scale, 112 * fish.scale, () =>
        drawProceduralKoi(fish.scale, fish.depth)
      );
      ctx.restore();
    }

    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    for (const wake of state.wakes) {
      ctx.globalAlpha = wake.life * 0.55;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(wake.x, wake.y, wake.r, wake.r * 0.36, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    for (const duck of state.ducks) {
      const bob = Math.sin(t * 0.002 + duck.bob) * 3.5;
      ctx.save();
      ctx.translate(duck.x, duck.y + bob);
      ctx.rotate(Math.sin(t * 0.002 + duck.bob) * 0.04);
      const sprite = duck.dir > 0 ? sprites.duckRight : sprites.duckLeft;
      drawSpriteOr(sprite, 120 * duck.scale, 120 * duck.scale, () =>
        drawProceduralDuck(duck.dir, duck.scale)
      );
      ctx.restore();
    }
  }

  function frame(now) {
    if (!state.last) state.last = now;
    const dt = Math.min(0.033, (now - state.last) / 1000);
    state.last = now;
    if (!state.paused) {
      state.time += dt * 1000;
      update(dt, state.time);
      draw(state.time);
    }
    requestAnimationFrame(frame);
  }

  canvas.addEventListener("click", () => {
    state.paused = !state.paused;
  });

  window.addEventListener("resize", () => {
    const oldW = state.width || window.innerWidth;
    const oldH = state.height || window.innerHeight;
    resize();
    const sx = state.width / oldW;
    const sy = state.height / oldH;
    for (const group of [state.ducks, state.koi, state.lilies, state.petals]) {
      for (const item of group) {
        item.x *= sx;
        item.y *= sy;
      }
    }
  });

  async function start() {
    resize();
    spawnWorld();
    requestAnimationFrame(frame);
    await loadSprites();
  }

  start();
})();
