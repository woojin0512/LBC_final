const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '닫기 −' : '메뉴 +';
  navLinks.classList.toggle('is-open', open);
});
navLinks.addEventListener('click', event => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '메뉴 +';
    navLinks.classList.remove('is-open');
  }
});
const stages = [
  {image:'assets/patch-prototype.webp', alt:'포획부와 반응부를 나누어 만든 실제 TTC 패치 시제품', title:'01. 포획과 반응을 나누다.', text:'미생물을 모으는 키토산 코팅 여과지와, 색 변화를 확인하는 TTC 반응부를 분리했습니다. 채취를 마친 뒤 두 면을 맞대어 반응시키는 접이식 시제품을 제작했습니다.', note:'실제 제작 사진 · 학술제 발표자료 9쪽'},
  {image:'assets/patch-cracked.webp', alt:'균을 접종한 뒤 붉은색 변화와 건조에 의한 균열이 보이는 패치', title:'02. 색이 변했고, 문제가 보였다.', text:'균을 직접 접종한 시료에서 붉은색 변화를 확인했습니다. 동시에 건조 때문에 반응부가 갈라졌습니다. 발색뿐 아니라 패치의 수분 상태도 관찰해야 했습니다.', note:'직접 접종 시료 · 학술제 발표자료 13쪽'},
  {image:'assets/patch-results.webp', alt:'약 7시간 반응 후 붉은색 변화를 관찰한 여러 TTC 패치 시료', title:'03. 수분을 보완하고 다시 관찰하다.', text:'EVA 폼에 물을 흡수시켜 건조를 줄이고 환경별 시료를 반응시켰습니다. 최종 발표자료에는 약 7시간 후 붉은색 포르마잔이 확인된 결과가 기록되어 있습니다.', note:'환경별 시료 · 학술제 발표자료 14쪽'}
];
const stageImage = document.querySelector('#stage-image');
const stageTitle = document.querySelector('#stage-title');
const stageText = document.querySelector('#stage-text');
const stageNote = document.querySelector('#stage-note');
document.querySelectorAll('[data-stage]').forEach(button => button.addEventListener('click', () => {
  const stage = stages[Number(button.dataset.stage)];
  document.querySelectorAll('[data-stage]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  stageImage.src = stage.image; stageImage.alt = stage.alt;
  stageTitle.textContent = stage.title; stageText.textContent = stage.text; stageNote.textContent = stage.note;
}));
const dialog = document.querySelector('#photo-dialog');
let previousOverflow = '';
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  const photo = button.querySelector('img');
  dialog.querySelector('img').src = photo.src;
  dialog.querySelector('img').alt = photo.alt;
  dialog.querySelector('p').textContent = button.dataset.caption;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.showModal();
}));
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; });
