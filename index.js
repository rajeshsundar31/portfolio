function hotReload(){
  const btn = document.getElementById('reloadBtn');
  const roles = ['Senior Flutter Engineer','Mobile Craftsman','Widget Whisperer','Cross-Platform Specialist'];
  const descs = [
    "I turn one Dart codebase into fast, native-feeling apps on iOS, Android and the web — five years, 6+ shipped releases, zero patience for jank.",
    "Five years deep in Flutter: state management, custom render pipelines, and apps that hit 60fps without excuses.",
    "From StatelessWidget to shipped release — I build mobile products that feel native, fast, and finished.",
    "I bridge design and platform: pixel-accurate UI, clean architecture, and native modules when Flutter needs a hand."
  ];
  const idx = Math.floor(Math.random()*roles.length);
  document.getElementById('pRole').textContent = roles[idx];
  document.getElementById('pDesc').textContent = descs[idx];
  btn.querySelector('.bolt').classList.remove('spin');
  void btn.offsetWidth;
  btn.querySelector('.bolt').classList.add('spin');
}