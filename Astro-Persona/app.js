let currentLang = 'fa';
let currentCalendar = 'shamsi';

function changeLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr';
    
    const t = astroTexts[lang];
    document.getElementById('i18n-subtitle').innerText = t.subtitle;
    document.getElementById('i18n-btn-calc').innerText = t.btn_calc;
    document.getElementById('i18n-label-date').innerText = t.label_date;
    document.getElementById('i18n-label-time').innerText = t.label_time;
    document.getElementById('i18n-res-title').innerText = t.res_title;
    document.getElementById('i18n-res-zodiac').innerText = t.res_zodiac;
    document.getElementById('i18n-res-moon').innerText = t.res_moon;
    document.getElementById('i18n-res-julian').innerText = t.res_julian;
    document.getElementById('i18n-share-text').innerText = t.share_text;
    document.getElementById('i18n-btn-share').innerText = t.btn_share;
    document.getElementById('i18n-btn-copy').innerText = t.btn_copy;
}

function setCalendar(cal) {
    currentCalendar = cal;
    document.getElementById('date-inputs-shamsi').style.display = (cal === 'shamsi') ? 'flex' : 'none';
    document.getElementById('date-inputs-miladi').style.display = (cal === 'miladi') ? 'flex' : 'none';
    document.getElementById('date-inputs-ghamari').style.display = (cal === 'ghamari') ? 'flex' : 'none';

    document.getElementById('btn-shamsi').classList.toggle('active', cal === 'shamsi');
    document.getElementById('btn-miladi').classList.toggle('active', cal === 'miladi');
    document.getElementById('btn-ghamari').classList.toggle('active', cal === 'ghamari');
}

function getMiladiDate() {
    if (currentCalendar === 'miladi') {
        return new Date(document.getElementById('miladi-date').value);
    } else if (currentCalendar === 'shamsi') {
        const y = parseInt(document.getElementById('shamsi-year').value);
        const m = parseInt(document.getElementById('shamsi-month').value) - 1;
        const d = parseInt(document.getElementById('shamsi-day').value);
        return new Date(y + 621, m, d + 20);
    } else if (currentCalendar === 'ghamari') {
        const y = parseInt(document.getElementById('ghamari-year').value);
        const m = parseInt(document.getElementById('ghamari-month').value) - 1;
        const d = parseInt(document.getElementById('ghamari-day').value);
        return new Date(y + 579, m, d + 10);
    }
    return null;
}

function calculateAstro() {
    const birthDate = getMiladiDate();
    if (!birthDate || isNaN(birthDate.getTime())) { alert('تاریخ نامعتبر است!'); return; }

    const timeVal = document.getElementById('birthTime').value;
    const [hours, minutes] = timeVal.split(':');
    birthDate.setHours(hours, minutes);

    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    // استفاده از کتابخانه AhmSpace
    const zodiac = AhmSpace.getZodiac(month, day);
    const julianDate = AhmSpace.toJulianDate(birthDate);
    const moonPhase = AhmSpace.getMoonPhase(birthDate);

    document.getElementById('zodiacResult').innerText = zodiac;
    document.getElementById('julianResult').innerText = julianDate.toFixed(2);
    document.getElementById('moonResult').innerText = moonPhase;

    const personality = generatePersonality(zodiac, moonPhase, currentLang);
    document.getElementById('personalityText').innerText = personality;

    document.getElementById('resultBox').style.display = 'block';
    
    const url = new URL(window.location.href);
    url.searchParams.set('zodiac', zodiac);
    url.searchParams.set('moon', moonPhase);
    url.searchParams.set('jd', julianDate.toFixed(2));
    window.history.replaceState({}, '', url);
}

function generatePersonality(zodiacRaw, moonPhaseRaw, lang) {
    const t = astroTexts[lang];
    let zodiacKey = "Aries"; 
    for (let key in t.traits) {
        if (zodiacRaw.includes(key)) { zodiacKey = key; break; }
    }
    let moonKey = "New Moon";
    for (let key in t.moon_phases) {
        if (moonPhaseRaw.includes(key)) { moonKey = key; break; }
    }
    return `${t.traits[zodiacKey]}\n\n🌙 ${t.moon_phases[moonKey]}`;
}

function shareResult() {
    const text = document.getElementById('personalityText').innerText;
    if (navigator.share) {
        navigator.share({ title: 'AstroPersona', text: text, url: window.location.href });
    } else {
        copyLink();
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('لینک کپی شد! حالا برای دوستات بفرست 😎');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeLang('fa');
    setCalendar('shamsi');

    const params = new URLSearchParams(window.location.search);
    if (params.has('zodiac')) {
        const zodiac = params.get('zodiac');
        const moon = params.get('moon');
        const jd = params.get('jd');
        
        document.getElementById('zodiacResult').innerText = zodiac;
        document.getElementById('moonResult').innerText = moon;
        document.getElementById('julianResult').innerText = jd;
        document.getElementById('personalityText').innerText = generatePersonality(zodiac, moon, 'fa');
        document.getElementById('resultBox').style.display = 'block';
    }
});