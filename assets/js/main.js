// ============ Данные меню ============
// Топовые позиции из полного меню «Настроение». Остальное — на месте, в кофейне.
const MENU_ITEMS = [
  {
    category: 'coffee',
    name: 'Капучино',
    desc: '250 мл · классика с бархатной пенкой',
    price: '260 ₽',
    img: 'assets/img/photo-01.jpg'
  },
  {
    category: 'coffee',
    name: 'Раф лесной орех',
    desc: '250 мл · авторский раф',
    price: '330 ₽',
    img: 'assets/img/photo-01.jpg',
    top: true
  },
  {
    category: 'drinks',
    name: 'Айс латте',
    desc: '400 мл · холодная классика',
    price: '290 ₽',
    img: 'assets/img/photo-05.jpg'
  },
  {
    category: 'drinks',
    name: 'Эспрессо-тоник-малина',
    desc: '400 мл · авторский холодный кофе',
    price: '330 ₽',
    img: 'assets/img/photo-13.jpg',
    top: true
  },
  {
    category: 'drinks',
    name: 'Ассам / Сенча',
    desc: '350 мл · листовой чай',
    price: '160 ₽',
    img: 'assets/img/photo-02.jpg'
  },
  {
    category: 'food',
    name: '«Зверский аппетит»',
    desc: '250/360 г · говядина, красный лук, маринованный огурец, руккола',
    price: '490 ₽ / 630 ₽',
    img: 'assets/img/photo-03.jpg',
    top: true
  },
  {
    category: 'food',
    name: '«Острый на язык»',
    desc: '250/420 г · чоризо, соус чеддер, карамелизированный лук',
    price: '560 ₽ / 730 ₽',
    img: 'assets/img/photo-04.jpg',
    top: true
  },
  {
    category: 'food',
    name: 'ШУ солёная карамель',
    desc: '80 г · заварной крем и карамель',
    price: '260 ₽',
    img: 'assets/img/photo-10.jpg'
  }
];

// ============ Данные мерча (визуальные плейсхолдеры) ============
const MERCH_ITEMS = [
  { name: 'Худи оверсайз', desc: 'Плотный флис, вышитый логотип', icon: '🧥', color: '#AD3527' },
  { name: 'Кепка', desc: 'Вышивка «Настроение»', icon: '🧢', color: '#D9864B' },
  { name: 'Керамическая кружка', desc: 'Тот самый цвет из зала', icon: '☕', color: '#5A4438' },
  { name: 'Тоут-бэг', desc: 'Плотный хлопок, на каждый день', icon: '👜', color: '#7E2318' }
];

const GALLERY_IMAGES = [
  { img: 'assets/img/photo-06.jpg', alt: 'Зал кофейни «Настроение»', span: 'span-2' },
  { img: 'assets/img/photo-08.jpg', alt: 'Кофемашина за барной стойкой' },
  { img: 'assets/img/photo-09.jpg', alt: 'Барная стойка', span: 'span-2row' },
  { img: 'assets/img/photo-11.jpg', alt: 'Гость со свежим сэндвичем' },
  { img: 'assets/img/photo-15.jpg', alt: 'Сэндвич в руках гостя', span: 'span-2' }
];

// ============ Данные журнала (заглушки — заполним реальными историями) ============
const JOURNAL_ITEMS = [
  {
    tag: 'Анонс',
    title: 'Дегустация нового бленда',
    excerpt: 'Расскажем, когда и как попробовать первыми',
    date: 'Скоро',
    img: 'assets/img/photo-08.jpg'
  },
  {
    tag: 'Команда',
    title: 'Знакомьтесь с нашими бариста',
    excerpt: 'Истории людей, которые варят вам кофе по утрам',
    date: 'Скоро',
    img: 'assets/img/photo-09.jpg'
  },
  {
    tag: 'Атмосфера',
    title: 'Как выглядит утро в «Настроение»',
    excerpt: 'Фото и небольшие истории с локации',
    date: 'Скоро',
    img: 'assets/img/photo-06.jpg'
  }
];

// ============ Рендер журнала ============
const journalGrid = document.getElementById('journal-grid');

JOURNAL_ITEMS.forEach((item, i) => {
  const card = document.createElement('article');
  card.className = 'journal-card';
  card.style.animationDelay = (i * 0.1) + 's';
  card.innerHTML = `
    <div class="journal-card-media">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
    </div>
    <div class="journal-card-body">
      <span class="journal-card-tag">${item.tag}</span>
      <h3 class="journal-card-title">${item.title}</h3>
      <p class="journal-card-excerpt">${item.excerpt}</p>
      <span class="journal-card-date">${item.date}</span>
    </div>
  `;
  journalGrid.appendChild(card);
});

// ============ Рендер меню ============
const menuGrid = document.getElementById('menu-grid');

function renderMenu(category) {
  menuGrid.innerHTML = '';
  MENU_ITEMS.filter(item => item.category === category).forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'menu-card';
    card.style.animationDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <div class="menu-card-media">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        ${item.top ? '<span class="menu-card-badge">Топ</span>' : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-top">
          <span class="menu-card-name">${item.name}</span>
          <span class="menu-card-price">${item.price}</span>
        </div>
        <p class="menu-card-desc">${item.desc}</p>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    renderMenu(tab.dataset.category);
  });
});

renderMenu('coffee');

// ============ Рендер мерча ============
const merchGrid = document.getElementById('merch-grid');

MERCH_ITEMS.forEach(item => {
  const card = document.createElement('div');
  card.className = 'merch-card';
  card.style.background = item.color;
  card.innerHTML = `
    <span class="merch-badge">Скоро в продаже</span>
    <span class="merch-card-icon">${item.icon}</span>
    <span class="merch-name">${item.name}</span>
    <span class="merch-desc">${item.desc}</span>
    <button class="merch-btn" type="button">Уведомить о старте</button>
  `;
  merchGrid.appendChild(card);
});

merchGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.merch-btn');
  if (!btn || btn.classList.contains('is-done')) return;
  btn.textContent = 'Спасибо! Уведомим ✓';
  btn.classList.add('is-done');
});

// ============ Рендер галереи ============
const galleryGrid = document.getElementById('gallery-grid');

GALLERY_IMAGES.forEach(item => {
  const el = document.createElement('div');
  el.className = 'gallery-item' + (item.span ? ' ' + item.span : '');
  el.innerHTML = `<img src="${item.img}" alt="${item.alt}" loading="lazy">`;
  el.addEventListener('click', () => openLightbox(item.img, item.alt));
  galleryGrid.appendChild(el);
});

// ============ Лайтбокс ============
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// ============ Мобильное меню ============
const burger = document.getElementById('burger');
const siteHeader = document.querySelector('.site-header');

burger.addEventListener('click', () => {
  const isOpen = siteHeader.classList.toggle('is-open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    siteHeader.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ============ Scroll reveal ============
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ============ Анимация счётчиков статистики ============
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + '+';
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statNumbers = document.querySelectorAll('.stat-number[data-count]');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => statsObserver.observe(el));
