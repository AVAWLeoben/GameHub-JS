/* Keep HTML controls, panels and the Phaser canvas in one 800x600 Pygame stage.
   Without this, fixed-position HTML controls sit outside a letterboxed canvas
   on landscape phones. Loaded before Phaser creates its canvas. */
(() => {
  'use strict';
  const css = document.createElement('style');
  css.textContent = `
    html,body { width:100%;height:100%;overflow:hidden; }
    #hub-native-stage {
      position:fixed;top:50%;left:50%;width:800px;height:600px;
      transform:translate(-50%,-50%) scale(var(--gh-stage-scale,1));
      transform-origin:center center;overflow:hidden;isolation:isolate;
    }
    #hub-native-stage #game {
      position:absolute!important;inset:0 auto auto 0!important;
      width:800px!important;height:600px!important;
      max-width:none!important;max-height:none!important;
      min-width:0!important;min-height:0!important;
      margin:0!important;
    }
    #hub-native-stage > header {position:absolute;z-index:8;top:10px;left:10px;
      width:100px;height:100px;padding:0;background:transparent}
    #hub-native-stage > header .home-button {width:100px;height:100px}
    #hub-native-stage > header .home-button img {width:100px;height:100px}
  `;
  document.head.append(css);
  const stage = document.createElement('div');
  stage.id = 'hub-native-stage';
  stage.dataset.gamehubStage = '800x600';
  document.body.insertBefore(stage,document.body.firstChild);
  for (const node of [...document.body.children]) {
    if (node !== stage && !['SCRIPT','STYLE','LINK'].includes(node.tagName)) stage.append(node);
  }
})();
