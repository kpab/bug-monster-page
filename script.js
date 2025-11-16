// ===========================
// Internationalization (i18n)
// ===========================

const translations = {
    en: {
        "hero.title": "Bug Monsters",
        "hero.subtitle": "Transform Boring Bugs into Epic Battles!",
        "hero.description": "A gamified debugging experience for VS Code. Watch your errors come to life as animated monsters and defeat them one by one!",
        "hero.install": "Install Extension",
        "hero.github": "View on GitHub",

        "features.title": "Epic Features",
        "features.gamified.title": "Gamified Debugging",
        "features.gamified.description": "Turn mundane bug fixing into an exciting adventure. Each error becomes a monster to defeat!",
        "features.realtime.title": "Real-time Monitoring",
        "features.realtime.description": "Monsters appear instantly when errors occur. Watch them spawn in real-time as you code!",
        "features.progression.title": "Size Progression System",
        "features.progression.description": "Monsters grow from S to M to L to XL as errors accumulate. Face the ultimate XL boss at 10+ errors!",
        "features.animated.title": "Animated Monsters",
        "features.animated.description": "Beautiful SVG animations including breathing, floating, shaking, and explosive spawns!",
        "features.types.title": "5 Monster Types",
        "features.types.description": "Different monsters for Errors, TypeErrors, ReferenceErrors, Warnings, and Hints!",
        "features.customizable.title": "Highly Customizable",
        "features.customizable.description": "Adjust animation speed, themes, and maximum monster display count to your preference!",

        "monsters.title": "Meet the Monsters",
        "monsters.error.name": "Error Monster",
        "monsters.error.color": "Red Devil",
        "monsters.error.description": "The most common foe. Appears when general errors strike your code.",
        "monsters.type.name": "TypeError Beast",
        "monsters.type.color": "Purple Menace",
        "monsters.type.description": "A cunning creature that emerges from type mismatches and incorrect operations.",
        "monsters.reference.name": "ReferenceError Wraith",
        "monsters.reference.color": "Blue Phantom",
        "monsters.reference.description": "A ghostly being that haunts undefined variables and missing references.",
        "monsters.warning.name": "Warning Bug",
        "monsters.warning.color": "Yellow Critter",
        "monsters.warning.description": "A pesky bug that signals potential issues before they become real problems.",
        "monsters.hint.name": "Hint Spirit",
        "monsters.hint.color": "Green Guardian",
        "monsters.hint.description": "A friendly spirit offering suggestions to improve your code quality.",

        "howto.title": "How It Works",
        "howto.step1.title": "Install Extension",
        "howto.step1.description": "Download Bug Monsters from VS Code Marketplace with just one click.",
        "howto.step2.title": "Start Coding",
        "howto.step2.description": "Write your code as usual. The extension monitors your workspace automatically.",
        "howto.step3.title": "Watch Monsters Appear",
        "howto.step3.description": "When errors occur, monsters spawn in your battlefield panel instantly!",
        "howto.step4.title": "Defeat the Monsters",
        "howto.step4.description": "Fix the bugs to defeat monsters. Watch them disappear with epic 720° rotation!",

        "cta.title": "Ready to Battle Bugs?",
        "cta.description": "Join thousands of developers making debugging fun!",
        "cta.install": "Install Now - It's Free!",
        "cta.note": "MIT Licensed • Open Source • No Registration Required",

        "footer.tagline": "Gamify your debugging experience",
        "footer.links.title": "Links",
        "footer.links.marketplace": "VS Code Marketplace",
        "footer.links.github": "GitHub Repository",
        "footer.links.issues": "Report Issues",
        "footer.license.title": "License",
        "footer.license.text": "MIT License",
        "footer.license.copyright": "© 2025 kpab"
    },
    ja: {
        "hero.title": "Bug Monsters",
        "hero.subtitle": "バグ退治を楽しい冒険に！",
        "hero.description": "VS Codeでデバッグをゲーム化。エラーがかわいいモンスターになって出現し、バグを直すと倒せる！楽しみながらコードの品質を上げましょう。",
        "hero.install": "インストール",
        "hero.github": "GitHubで見る",

        "features.title": "主な機能",
        "features.gamified.title": "デバッグをゲーム化",
        "features.gamified.description": "退屈なバグ修正が楽しい冒険に。エラーがモンスターとして現れ、倒すべき敵になります！",
        "features.realtime.title": "リアルタイム表示",
        "features.realtime.description": "エラーが発生すると即座にモンスターが出現。コードを書きながらリアルタイムで確認できます。",
        "features.progression.title": "成長システム",
        "features.progression.description": "エラーが増えるとモンスターがS→M→L→XLへと成長。10個以上で最強のXLボスが登場！",
        "features.animated.title": "かわいいアニメーション",
        "features.animated.description": "呼吸したり、浮遊したり、揺れたり。SVGで描かれたモンスターがヌルヌル動きます！",
        "features.types.title": "5種類のモンスター",
        "features.types.description": "エラー、型エラー、参照エラー、警告、ヒントごとに異なるモンスターが登場！",
        "features.customizable.title": "カスタマイズ自由",
        "features.customizable.description": "アニメーション速度、テーマ、表示するモンスターの最大数など、好みに合わせて調整できます。",

        "monsters.title": "モンスター図鑑",
        "monsters.error.name": "エラーモンスター",
        "monsters.error.color": "赤い悪魔",
        "monsters.error.description": "最もよく見かける敵。一般的なエラーが発生すると現れます。",
        "monsters.type.name": "型エラービースト",
        "monsters.type.color": "紫の脅威",
        "monsters.type.description": "型が合わないときや、間違った操作をしたときに現れるずる賢いモンスター。",
        "monsters.reference.name": "参照エラーレイス",
        "monsters.reference.color": "青い幽霊",
        "monsters.reference.description": "未定義の変数や存在しない参照を使ったときに現れる幽霊のような存在。",
        "monsters.warning.name": "警告バグ",
        "monsters.warning.color": "黄色い虫",
        "monsters.warning.description": "問題になる前に教えてくれる親切なバグ。でもちょっとうっとうしい。",
        "monsters.hint.name": "ヒントスピリット",
        "monsters.hint.color": "緑の守護者",
        "monsters.hint.description": "コードをより良くするためのアドバイスをくれる優しい精霊。",

        "howto.title": "使い方",
        "howto.step1.title": "拡張機能をインストール",
        "howto.step1.description": "VS Code Marketplaceからワンクリックでインストール完了。",
        "howto.step2.title": "コードを書く",
        "howto.step2.description": "いつも通りコードを書くだけ。拡張機能が自動でエラーを監視します。",
        "howto.step3.title": "モンスター出現！",
        "howto.step3.description": "エラーが発生するとモンスターがバトルフィールドに即座に登場！",
        "howto.step4.title": "モンスターを倒す",
        "howto.step4.description": "バグを直すとモンスターが720°回転しながら消えていきます。爽快！",

        "cta.title": "さあ、バグと戦おう！",
        "cta.description": "世界中の開発者がデバッグを楽しんでいます",
        "cta.install": "無料でインストール",
        "cta.note": "MITライセンス • オープンソース • 登録不要",

        "footer.tagline": "デバッグをもっと楽しく",
        "footer.links.title": "リンク",
        "footer.links.marketplace": "VS Code Marketplace",
        "footer.links.github": "GitHubリポジトリ",
        "footer.links.issues": "問題を報告",
        "footer.license.title": "ライセンス",
        "footer.license.text": "MITライセンス",
        "footer.license.copyright": "© 2025 kpab"
    }
};

// ===========================
// Language Management
// ===========================

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update meta tags for SEO
    updateMetaTags(lang);
}

function updateMetaTags(lang) {
    const title = lang === 'en'
        ? 'Bug Monsters - Gamify Your Debugging Experience | VS Code Extension'
        : 'Bug Monsters - デバッグ体験をゲーミフィケーション | VS Code拡張機能';

    const description = lang === 'en'
        ? 'Transform boring bugs into exciting monsters! Bug Monsters is a VS Code extension that gamifies debugging by visualizing errors as animated monsters. Make bug fixing fun!'
        : '退屈なバグをエキサイティングなモンスターに変えよう！Bug Monstersは、エラーをアニメーション化されたモンスターとして可視化することでデバッグをゲーミフィケーションするVS Code拡張機能です。';

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
}

// ===========================
// Initialization
// ===========================

function init() {
    // Load saved language preference or detect browser language
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
    const initialLang = savedLang || browserLang;

    setLanguage(initialLang);

    // Language toggle event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe feature cards, monster cards, and steps
    document.querySelectorAll('.feature-card, .monster-card, .step').forEach(el => {
        observer.observe(el);
    });

    // Add hover effect to external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Track external link clicks (optional analytics)
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            console.log('External link clicked:', href);
            // Add your analytics tracking here if needed
        });
    });

    // Performance optimization: lazy load images if we add them later
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// ===========================
// Start Application
// ===========================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Resume animations when page becomes visible
        console.log('Page is visible');
    }
});

// Export for testing purposes (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setLanguage, translations };
}
