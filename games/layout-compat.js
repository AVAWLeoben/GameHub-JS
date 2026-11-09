/* GameHub landscape layout adapter. Native scene geometry stays in logical pixels;
   only the containing viewport is scaled. No game coordinates are modified here. */
(() => {
  'use strict';
  const style = document.createElement('style');
  style.textContent = `
    html { -webkit-text-size-adjust: 100%; }
    canvas { touch-action: none; }
    .gh-orientation-overlay {
      display: none; position: fixed; inset: 0; z-index: 2147483646;
      padding: max(24px, env(safe-area-inset-top)) max(24px, env(safe-area-inset-right))
               max(24px, env(safe-area-inset-bottom)) max(24px, env(safe-area-inset-left));
      box-sizing: border-box; place-content: center; justify-items: center;
      gap: 18px; text-align: center; color: #f8f5ec; background: #0a1924;
      font: 600 clamp(18px, 5vw, 27px)/1.4 system-ui, sans-serif;
    }
    .gh-orientation-overlay a { font: 600 17px system-ui, sans-serif; color: #ffe7ac; }
    @media (orientation: portrait) {
      .gh-orientation-overlay { display: grid; }
    }
  `;
  document.head.append(style);
  const overlay = document.createElement('aside');
  overlay.className = 'gh-orientation-overlay';
  overlay.setAttribute('aria-label', 'Landscape orientation required');
  overlay.innerHTML = '<div>Turn your device sideways to play</div><a href="../index.html">Return to Game Menu</a>';
  document.body.append(overlay);

  const probe = document.createElement('div');
  probe.setAttribute('aria-hidden', 'true');
  probe.style.cssText = 'position:fixed;inset:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px);pointer-events:none;visibility:hidden;';
  document.body.append(probe);
  function fit() {
    const bounds = probe.getBoundingClientRect();
    for (const node of document.querySelectorAll('[data-gamehub-stage]')) {
      const dimensions = node.dataset.gamehubStage.split('x').map(Number);
      const scale = Math.min(bounds.width / dimensions[0], bounds.height / dimensions[1]);
      if (Number.isFinite(scale) && scale > 0) node.style.setProperty('--gh-stage-scale', String(scale));
    }
  }
  fit();
  window.addEventListener('resize', fit, {passive: true});
  window.addEventListener('orientationchange', fit, {passive: true});
  window.visualViewport?.addEventListener('resize', fit, {passive: true});
  document.addEventListener('visibilitychange', () => { if (!document.hidden) fit(); });
})();
