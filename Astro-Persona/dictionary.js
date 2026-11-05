const astroTexts = {
    fa: {
        subtitle: "هویت کیهانی خودت را کشف کن!", btn_calc: "کشف شخصیت من ✨", label_date: "تاریخ تولد", label_time: "ساعت تولد (تقریبی)",
        res_title: "🔭 موقعیت کیهانی شما", res_zodiac: "صورت فلکی:", res_moon: "فاز ماه:", res_julian: "ژولیَن دیت:",
        share_text: "نتیجه‌ت رو با دوستات به اشتراک بذار!", btn_share: "📤 اشتراک‌گذاری", btn_copy: "🔗 کپی لینک",
        traits: {
            "Aries": "شما با انرژی بی‌پایان و شجاعت متولد شده‌اید. فاز ماه در زمان تولد شما نشان می‌دهد که درون شما یک مبارز خستگی‌ناپذیر وجود دارد.",
            "Taurus": "شما نماد ثبات و زیبایی هستید. این ترکیب نجومی نشان می‌دهد که شما به آرامش و لذت‌های حسی اهمیت می‌دهید.",
            "Gemini": "ذهن شما مثل یک کهکشان در حال چرخش است. شما کنجکاو، سازگار و عاشق یادگیری هستید.",
            "Cancer": "شما عمیقاً احساساتی و دلسوز هستید. کیهان در لحظه تولد شما، انرژی محافظت و عشق را به شما بخشیده است.",
            "Leo": "شما با کاریزما و اعتماد به نفس به دنیا آمده‌اید. مثل یک ستاره درخشان، دوست دارید دیده شوید.",
            "Virgo": "شما دقیق، تحلیل‌گر و منطقی هستید. هیچ جزئیاتی از چشم تیزبین شما پنهان نمی‌ماند.",
            "Libra": "شما به دنبال تعادل و هماهنگی در زندگی هستید. دیپلماسی و عدالت در ذات شماست.",
            "Scorpio": "شما عمیق، مرموز و پرشور هستید. قدرت درونی شما فوق‌العاده است و از هیچ چالشی نمی‌ترسید.",
            "Sagittarius": "شما یک ماجراجوی آزاد هستید. عاشق کشف ناشناخته‌ها و سفر به افق‌های جدید هستید.",
            "Capricorn": "شما جاه‌طلب و سخت‌کوش هستید. برای رسیدن به قله‌های موفقیت، از هیچ تلاشی دریغ نمی‌کنید.",
            "Aquarius": "شما یک نوآور و آینده‌نگر هستید. مثل یک دانشمند فضایی، به چیزهایی فکر می‌کنید که هنوز وجود ندارند.",
            "Pisces": "شما خلاق، شهودی و رویایی هستید. دنیای درونی شما پر از تخیلات شگفت‌انگیز است."
        },
        moon_phases: {
            "New Moon": "ماه نو نشان‌دهنده شروع‌های جدید و پتانسیل‌های نهفته است.",
            "Waxing Crescent": "هلال افزایشی نشان‌دهنده رشد و حرکت به سمت اهداف است.",
            "First Quarter": "تربیع اول نماد تصمیم‌گیری و عبور از چالش‌هاست.",
            "Waxing Gibbous": "کوژ افزایشی نشان‌دهنده تلاش برای کمال و پیشرفت است.",
            "Full Moon": "ماه کامل نماد اوج احساسات، وضوح و روشنگری است.",
            "Waning Gibbous": "کوژ کاهشی نشان‌دهنده قدردانی از دستاوردها و به اشتراک گذاشتن دانش است.",
            "Last Quarter": "تربیع آخر نماد رها کردن گذشته و آماده شدن برای فصلی جدید است.",
            "Waning Crescent": "هلال کاهشی نشان‌دهنده استراحت، تأمل و جمع‌بندی تجربیات است."
        }
    },
    en: {
        subtitle: "Discover Your Cosmic Identity", btn_calc: "Discover My Personality ✨", label_date: "Date of Birth", label_time: "Time of Birth",
        res_title: "🔭 Your Cosmic Position", res_zodiac: "Zodiac:", res_moon: "Moon Phase:", res_julian: "Julian Date:",
        share_text: "Share with friends!", btn_share: "📤 Share", btn_copy: "🔗 Copy Link",
        traits: {
            "Aries": "You are born with boundless energy and courage. The Moon phase at your birth indicates a tireless warrior within you.",
            "Taurus": "You are a symbol of stability and beauty. This cosmic combination shows you value peace and sensory pleasures.",
            "Gemini": "Your mind is like a spinning galaxy. You are curious, adaptable, and love learning.",
            "Cancer": "You are deeply emotional and caring. The universe gifted you the energy of protection and love at birth.",
            "Leo": "You are born with charisma and confidence. Like a shining star, you love to be seen.",
            "Virgo": "You are precise, analytical, and logical. No detail escapes your keen eye.",
            "Libra": "You seek balance and harmony in life. Diplomacy and justice are in your nature.",
            "Scorpio": "You are deep, mysterious, and passionate. Your inner power is immense, and you fear no challenge.",
            "Sagittarius": "You are a free adventurer. You love exploring the unknown and traveling to new horizons.",
            "Capricorn": "You are ambitious and hardworking. You spare no effort to reach the peaks of success.",
            "Aquarius": "You are an innovator and visionary. Like a space scientist, you think of things that don't exist yet.",
            "Pisces": "You are creative, intuitive, and dreamy. Your inner world is full of wondrous imagination."
        },
        moon_phases: {
            "New Moon": "The New Moon represents new beginnings and hidden potentials.",
            "Waxing Crescent": "The Waxing Crescent indicates growth and moving toward goals.",
            "First Quarter": "The First Quarter symbolizes decision-making and overcoming challenges.",
            "Waxing Gibbous": "The Waxing Gibbous indicates striving for perfection and progress.",
            "Full Moon": "The Full Moon symbolizes peak emotions, clarity, and enlightenment.",
            "Waning Gibbous": "The Waning Gibbous indicates gratitude for achievements and sharing knowledge.",
            "Last Quarter": "The Last Quarter symbolizes letting go of the past and preparing for a new season.",
            "Waning Crescent": "The Waning Crescent indicates rest, reflection, and summarizing experiences."
        }
    },
    ar: {
        subtitle: "اكتشف هويتك الكونية", btn_calc: "اكتشف شخصيتي ✨", label_date: "تاريخ الميلاد", label_time: "وقت الولادة",
        res_title: "🔭 موقعك الكوني", res_zodiac: "البرج:", res_moon: "طور القمر:", res_julian: "التاريخ اليولياني:",
        share_text: "شارك مع أصدقائك!", btn_share: "📤 مشاركة", btn_copy: "🔗 نسخ الرابط",
        traits: {
            "Aries": "لقد ولدت بطاقة وشجاعة لا حدود لهما. تشير مرحلة القمر عند ولادتك إلى وجود محارب لا يعرف الكلل بداخلك.",
            "Taurus": "أنت رمز للاستقرار والجمال. يُظهر هذا المزيج الكوني أنك تقدر السلام والملذات الحسية.",
            "Gemini": "عقلك مثل مجرة تدور. أنت فضولي، متكيف، وتحب التعلم.",
            "Cancer": "أنت عاطفي ومهتم بعمق. منحك الكون طاقة الحماية والحب عند الولادة.",
            "Leo": "لقد ولدت بالكاريزما والثقة. مثل نجم ساطع، تحب أن يراك الآخرون.",
            "Virgo": "أنت دقيق، تحليلي، ومنطقي. لا يفلت أي تفصيل من عينك الثاقبة.",
            "Libra": "أنت تسعى للتوازن والانسجام في الحياة. الدبلوماسية والعدالة في طبيعتك.",
            "Scorpio": "أنت عميق، غامض، وشغوف. قوتك الداخلية هائلة، ولا تخشى أي تحدٍ.",
            "Sagittarius": "أنت مغامر حر. تحب استكشاف المجهول والسفر إلى آفاق جديدة.",
            "Capricorn": "أنت طموح ومجتهد. لا تدخر جهدًا للوصول إلى قمم النجاح.",
            "Aquarius": "أنت مبتكر وصاحب رؤية. مثل عالم فضاء، تفكر في أشياء لم توجد بعد.",
            "Pisces": "أنت مبدع، حدسي، وحالم. عالمك الداخلي مليء بالخيال الرائع."
        },
        moon_phases: {
            "New Moon": "القمر الجديد يمثل البدايات الجديدة والإمكانيات الخفية.",
            "Waxing Crescent": "الهلال المتزايد يشير إلى النمو والتحرك نحو الأهداف.",
            "First Quarter": "الربع الأول يرمز إلى اتخاذ القرار والتغلب على التحديات.",
            "Waxing Gibbous": "الأحدب المتزايد يشير إلى السعي نحو الكمال والتقدم.",
            "Full Moon": "اكتمال القمر يرمز إلى ذروة المشاعر والوضوح والتنوير.",
            "Waning Gibbous": "الأحدب المتناقص يشير إلى الامتنان للإنجازات ومشاركة المعرفة.",
            "Last Quarter": "الربع الأخير يرمز إلى التخلي عن الماضي والاستعداد لموسم جديد.",
            "Waning Crescent": "الهلال المتناقص يشير إلى الراحة والتأمل وتلخيص التجارب."
        }
    },
    zh: {
        subtitle: "发现你的宇宙身份", btn_calc: "发现我的性格 ✨", label_date: "出生日期", label_time: "出生时间",
        res_title: "🔭 你的宇宙位置", res_zodiac: "星座：", res_moon: "月相：", res_julian: "儒略日：",
        share_text: "与朋友分享！", btn_share: "📤 分享", btn_copy: "🔗 复制链接",
        traits: {
            "Aries": "你天生充满活力和勇气。你出生时的月相表明你内心有一个不知疲倦的战士。",
            "Taurus": "你是稳定和美丽的象征。这种宇宙组合表明你重视和平和感官享受。",
            "Gemini": "你的思维就像旋转的星系。你好奇、适应力强、热爱学习。",
            "Cancer": "你情感深厚且充满关怀。宇宙在你出生时赋予了你保护和爱的能量。",
            "Leo": "你天生具有魅力和自信。就像一颗闪亮的星星，你喜欢被关注。",
            "Virgo": "你精确、善于分析且逻辑性强。任何细节都逃不过你的敏锐目光。",
            "Libra": "你在生活中追求平衡与和谐。外交和正义是你的天性。",
            "Scorpio": "你深沉、神秘且充满激情。你的内在力量巨大，不惧任何挑战。",
            "Sagittarius": "你是一个自由的冒险家。你喜欢探索未知，前往新的视野。",
            "Capricorn": "你雄心勃勃且勤奋。你不遗余力地攀登成功的顶峰。",
            "Aquarius": "你是创新者和梦想家。就像太空科学家一样，你思考尚未存在的事物。",
            "Pisces": "你富有创造力、直觉和梦想。你的内心世界充满了奇妙的想象力。"
        },
        moon_phases: {
            "New Moon": "新月代表新的开始和隐藏的潜力。",
            "Waxing Crescent": "蛾眉月表示成长和朝着目标前进。",
            "First Quarter": "上弦月象征决策和克服挑战。",
            "Waxing Gibbous": "盈凸月表示追求完美和进步。",
            "Full Moon": "满月象征情绪的高潮、清晰和启蒙。",
            "Waning Gibbous": "亏凸月表示对成就的感激和分享知识。",
            "Last Quarter": "下弦月象征放下过去，为新季节做准备。",
            "Waning Crescent": "残月表示休息、反思和总结经历。"
        }
    },
    ru: {
        subtitle: "Узнайте свою космическую идентичность", btn_calc: "Узнать мою личность ✨", label_date: "Дата рождения", label_time: "Время рождения",
        res_title: "🔭 Ваша космическая позиция", res_zodiac: "Знак зодиака:", res_moon: "Фаза Луны:", res_julian: "Юлианская дата:",
        share_text: "Поделиться с друзьями!", btn_share: "📤 Поделиться", btn_copy: "🔗 Копировать ссылку",
        traits: {
            "Aries": "Вы рождены с безграничной энергией и смелостью. Фаза Луны при рождении указывает на неутомимого воина внутри вас.",
            "Taurus": "Вы символ стабильности и красоты. Эта космическая комбинация показывает, что вы цените покой и чувственные удовольствия.",
            "Gemini": "Ваш ум подобен вращающейся галактике. Вы любопытны, адаптивны и любите учиться.",
            "Cancer": "Вы глубоко эмоциональны и заботливы. Вселенная подарила вам энергию защиты и любви при рождении.",
            "Leo": "Вы рождены с харизмой и уверенностью. Как сияющая звезда, вы любите быть в центре внимания.",
            "Virgo": "Вы точны, аналитичны и логичны. Ни одна деталь не ускользнет от вашего острого глаза.",
            "Libra": "Вы стремитесь к балансу и гармонии в жизни. Дипломатия и справедливость в вашей природе.",
            "Scorpio": "Вы глубоки, загадочны и страстны. Ваша внутренняя сила огромна, и вы не боитесь никаких вызовов.",
            "Sagittarius": "Вы свободный авантюрист. Вы любите исследовать неизвестное и путешествовать к новым горизонтам.",
            "Capricorn": "Вы амбициозны и трудолюбивы. Вы не жалеете усилий, чтобы достичь вершин успеха.",
            "Aquarius": "Вы новатор и провидец. Как космический ученый, вы думаете о вещах, которых еще не существует.",
            "Pisces": "Вы творческий, интуитивный и мечтательный человек. Ваш внутренний мир полон чудесного воображения."
        },
        moon_phases: {
            "New Moon": "Новолуние представляет новые начинания и скрытые потенциалы.",
            "Waxing Crescent": "Растущий серп указывает на рост и движение к целям.",
            "First Quarter": "Первая четверть символизирует принятие решений и преодоление трудностей.",
            "Waxing Gibbous": "Растущая выпуклая луна указывает на стремление к совершенству и прогрессу.",
            "Full Moon": "Полнолуние символизирует пик эмоций, ясность и просветление.",
            "Waning Gibbous": "Убывающая выпуклая луна указывает на благодарность за достижения и обмен знаниями.",
            "Last Quarter": "Последняя четверть символизирует отказ от прошлого и подготовку к новому сезону.",
            "Waning Crescent": "Убывающий серп указывает на отдых, размышления и обобщение опыта."
        }
    }
};