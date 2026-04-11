const PROPHETS_TIMELINE = [
  {
    id: "adam",
    name: { en: "Hazrat Adam (AS)", ur: "حضرت آدم علیہ السلام" },
    period: { en: "Earliest human era", ur: "انسانی تاریخ کا ابتدائی دور" },
    location: { en: "Earth (traditional context)", ur: "زمین (روایتی تناظر)" },
    brief: {
      en: "First human and first Prophet; taught repentance, dignity, and responsibility before Allah.",
      ur: "پہلے انسان اور پہلے نبی؛ توبہ، عزتِ انسان اور اللہ کے سامنے ذمہ داری کی تعلیم دی۔"
    },
    message: {
      en: "Worship Allah alone, seek forgiveness, and follow divine guidance.",
      ur: "صرف اللہ کی عبادت کرو، توبہ کرو اور اللہ کی ہدایت کی پیروی کرو۔"
    }
  },
  {
    id: "idris",
    name: { en: "Hazrat Idris (AS)", ur: "حضرت ادریس علیہ السلام" },
    period: { en: "Early generations after Adam", ur: "حضرت آدمؑ کے بعد ابتدائی نسلیں" },
    location: { en: "Ancient Mesopotamia (traditional reports)", ur: "قدیم میسوپوٹیمیا (روایتی روایات)" },
    brief: {
      en: "Known for knowledge, writing, wisdom, and patience in worship.",
      ur: "علم، لکھائی، حکمت اور عبادت میں صبر کے لیے مشہور ہیں۔"
    },
    message: {
      en: "Live truthfully, seek knowledge, and remain steadfast in obedience to Allah.",
      ur: "سچائی سے جیو، علم حاصل کرو اور اللہ کی اطاعت پر قائم رہو۔"
    }
  },
  {
    id: "nuh",
    name: { en: "Hazrat Nuh (AS)", ur: "حضرت نوح علیہ السلام" },
    period: { en: "Very early prophetic era", ur: "نبوت کا نہایت ابتدائی دور" },
    location: { en: "Ancient Near East", ur: "قدیم مشرقِ قریب" },
    brief: {
      en: "Called his people for centuries with patience despite rejection.",
      ur: "طویل عرصہ صبر کے ساتھ اپنی قوم کو حق کی دعوت دیتے رہے۔"
    },
    message: {
      en: "Leave idols and worship Allah alone; salvation is in faith and obedience.",
      ur: "بت چھوڑو اور صرف اللہ کی عبادت کرو؛ نجات ایمان اور اطاعت میں ہے۔"
    }
  },
  {
    id: "hud",
    name: { en: "Hazrat Hud (AS)", ur: "حضرت ہود علیہ السلام" },
    period: { en: "After Nuh (AS)", ur: "حضرت نوحؑ کے بعد" },
    location: { en: "Al-Ahqaf region, Arabia", ur: "الاحقاف کا علاقہ، عرب" },
    brief: {
      en: "Sent to the people of 'Aad who were powerful but arrogant.",
      ur: "قومِ عاد کی طرف بھیجے گئے جو طاقتور مگر متکبر تھی۔"
    },
    message: {
      en: "Do not be proud of power; submit to Allah and act with gratitude.",
      ur: "طاقت پر غرور نہ کرو؛ اللہ کے سامنے جھکو اور شکر گزار بنو۔"
    }
  },
  {
    id: "salih",
    name: { en: "Hazrat Salih (AS)", ur: "حضرت صالح علیہ السلام" },
    period: { en: "After Hud (AS)", ur: "حضرت ہودؑ کے بعد" },
    location: { en: "Thamud / Al-Hijr region", ur: "قومِ ثمود / الحجر کا علاقہ" },
    brief: {
      en: "Sent to Thamud with clear signs, including the she-camel miracle.",
      ur: "قومِ ثمود کی طرف واضح نشانیاں لے کر آئے، جن میں اونٹنی کا معجزہ بھی شامل تھا۔"
    },
    message: {
      en: "Respect Allah's signs, stop injustice, and repent before punishment.",
      ur: "اللہ کی نشانیوں کی حرمت کرو، ظلم چھوڑو اور عذاب سے پہلے توبہ کرو۔"
    }
  },
  {
    id: "ibrahim",
    name: { en: "Hazrat Ibrahim (AS)", ur: "حضرت ابراہیم علیہ السلام" },
    period: { en: "c. 2nd millennium BCE (traditional estimate)", ur: "تقریباً دوسری ہزارہ قبل مسیح (روایتی اندازہ)" },
    location: { en: "Mesopotamia, Levant, and Makkah", ur: "میسوپوٹیمیا، شام اور مکہ" },
    brief: {
      en: "Great patriarch who challenged idol worship and established pure monotheism.",
      ur: "جلیل القدر پیغمبر جنہوں نے بت پرستی کو چیلنج کیا اور خالص توحید قائم کی۔"
    },
    message: {
      en: "Submit fully to Allah; build life, family, and society on tawhid.",
      ur: "مکمل طور پر اللہ کے فرمانبردار بنو؛ زندگی اور معاشرہ توحید پر قائم کرو۔"
    }
  },
  {
    id: "lut",
    name: { en: "Hazrat Lut (AS)", ur: "حضرت لوط علیہ السلام" },
    period: { en: "During Ibrahim's era", ur: "حضرت ابراہیمؑ کے دور میں" },
    location: { en: "Cities near the Dead Sea", ur: "بحیرۂ مردار کے قریب بستیاں" },
    brief: {
      en: "Warned his people against severe moral corruption and public sin.",
      ur: "اپنی قوم کو کھلی بدکاری اور اخلاقی بگاڑ سے روکتے رہے۔"
    },
    message: {
      en: "Protect morality, family honor, and social purity by obeying Allah.",
      ur: "اللہ کی اطاعت سے اخلاق، خاندان اور معاشرتی پاکیزگی کی حفاظت کرو۔"
    }
  },
  {
    id: "ismail",
    name: { en: "Hazrat Ismail (AS)", ur: "حضرت اسماعیل علیہ السلام" },
    period: { en: "Son of Ibrahim (AS)", ur: "حضرت ابراہیمؑ کے فرزند" },
    location: { en: "Makkah", ur: "مکہ" },
    brief: {
      en: "Model of obedience and sacrifice; helped raise the Ka'bah with Ibrahim (AS).",
      ur: "اطاعت اور قربانی کی مثال؛ حضرت ابراہیمؑ کے ساتھ کعبہ کی تعمیر میں شریک ہوئے۔"
    },
    message: {
      en: "Honor prayer, sacrifice for Allah, and keep promises with truth.",
      ur: "نماز قائم رکھو، اللہ کے لیے قربانی دو اور وعدے سچائی سے پورے کرو۔"
    }
  },
  {
    id: "ishaq",
    name: { en: "Hazrat Ishaq (AS)", ur: "حضرت اسحاق علیہ السلام" },
    period: { en: "Son of Ibrahim (AS)", ur: "حضرت ابراہیمؑ کے فرزند" },
    location: { en: "Levant / Canaan", ur: "شام / کنعان" },
    brief: {
      en: "Blessed prophet in the line of Ibrahim (AS), continuing divine guidance.",
      ur: "حضرت ابراہیمؑ کی نسل میں مبارک نبی، جنہوں نے ہدایت کا سلسلہ جاری رکھا۔"
    },
    message: {
      en: "Remain grateful for blessings and uphold covenant with Allah.",
      ur: "نعمتوں پر شکر کرو اور اللہ کے عہد پر ثابت قدم رہو۔"
    }
  },
  {
    id: "yaqub",
    name: { en: "Hazrat Yaqub (AS)", ur: "حضرت یعقوب علیہ السلام" },
    period: { en: "After Ishaq (AS)", ur: "حضرت اسحاقؑ کے بعد" },
    location: { en: "Canaan", ur: "کنعان" },
    brief: {
      en: "Also known as Israel; taught family faith, patience, and trust in Allah.",
      ur: "اسرائیل کے نام سے معروف؛ خاندان میں ایمان، صبر اور اللہ پر توکل کی تعلیم دی۔"
    },
    message: {
      en: "Never lose hope in Allah's mercy, even in long hardship.",
      ur: "طویل آزمائش میں بھی اللہ کی رحمت سے ناامید نہ ہو۔"
    }
  },
  {
    id: "yusuf",
    name: { en: "Hazrat Yusuf (AS)", ur: "حضرت یوسف علیہ السلام" },
    period: { en: "After Yaqub (AS)", ur: "حضرت یعقوبؑ کے بعد" },
    location: { en: "Canaan and Egypt", ur: "کنعان اور مصر" },
    brief: {
      en: "From hardship to leadership, his story teaches purity, patience, and forgiveness.",
      ur: "آزمائش سے قیادت تک کا سفر؛ عفت، صبر اور معافی کی عظیم مثال۔"
    },
    message: {
      en: "Stay pure in trials and respond to harm with excellence and forgiveness.",
      ur: "آزمائش میں پاکیزہ رہو اور برائی کا جواب احسان اور معافی سے دو۔"
    }
  },
  {
    id: "ayyub",
    name: { en: "Hazrat Ayyub (AS)", ur: "حضرت ایوب علیہ السلام" },
    period: { en: "Post-Yusuf generations (traditional order)", ur: "حضرت یوسفؑ کے بعد کی نسلیں (روایتی ترتیب)" },
    location: { en: "Levant region (traditional reports)", ur: "علاقۂ شام (روایتی روایات)" },
    brief: {
      en: "Known for extraordinary patience during severe illness and loss.",
      ur: "شدید بیماری اور نقصان میں غیر معمولی صبر کے لیے معروف ہیں۔"
    },
    message: {
      en: "In pain and loss, stay patient and keep turning to Allah.",
      ur: "تکلیف اور نقصان میں صبر اختیار کرو اور اللہ کی طرف رجوع رکھو۔"
    }
  },
  {
    id: "shuayb",
    name: { en: "Hazrat Shuayb (AS)", ur: "حضرت شعیب علیہ السلام" },
    period: { en: "Before Musa (AS)", ur: "حضرت موسیٰؑ سے پہلے" },
    location: { en: "Madyan (northwest Arabia)", ur: "مدین (شمال مغربی عرب)" },
    brief: {
      en: "Called people away from fraud and economic injustice in markets.",
      ur: "بازار میں دھوکے اور معاشی ظلم سے روکا اور عدل کی دعوت دی۔"
    },
    message: {
      en: "Be honest in trade, use fair weights, and do not exploit people.",
      ur: "تجارت میں دیانت اختیار کرو، پورا ناپ تول دو اور لوگوں کا حق نہ مارو۔"
    }
  },
  {
    id: "musa",
    name: { en: "Hazrat Musa (AS)", ur: "حضرت موسیٰ علیہ السلام" },
    period: { en: "c. 13th-12th century BCE (traditional estimate)", ur: "تقریباً 13ویں-12ویں صدی قبل مسیح (روایتی اندازہ)" },
    location: { en: "Egypt, Sinai, and beyond", ur: "مصر، سینا اور اطراف" },
    brief: {
      en: "Led Bani Israel from tyranny; received divine law and guidance.",
      ur: "بنی اسرائیل کو ظلم سے نجات دلائی اور اللہ کی شریعت حاصل کی۔"
    },
    message: {
      en: "Stand against oppression, trust Allah, and live by revealed law.",
      ur: "ظلم کے خلاف کھڑے ہو، اللہ پر بھروسا رکھو اور وحی کے قانون پر چلو۔"
    }
  },
  {
    id: "harun",
    name: { en: "Hazrat Harun (AS)", ur: "حضرت ہارون علیہ السلام" },
    period: { en: "Companion prophet with Musa (AS)", ur: "حضرت موسیٰؑ کے ساتھ نبی" },
    location: { en: "Egypt and Sinai", ur: "مصر اور سینا" },
    brief: {
      en: "Supported Musa (AS) in leadership, communication, and guidance.",
      ur: "حضرت موسیٰؑ کی قیادت، دعوت اور رہنمائی میں مضبوط مددگار رہے۔"
    },
    message: {
      en: "Help truth with wisdom and unity; preserve faith in community.",
      ur: "حکمت اور اتحاد سے حق کی مدد کرو اور جماعت میں ایمان محفوظ رکھو۔"
    }
  },
  {
    id: "dhul-kifl",
    name: { en: "Hazrat Dhul-Kifl (AS)", ur: "حضرت ذوالکفل علیہ السلام" },
    period: { en: "After Musa era (traditional order)", ur: "حضرت موسیٰؑ کے بعد (روایتی ترتیب)" },
    location: { en: "Iraq/Levant (traditional reports)", ur: "عراق/شام (روایتی روایات)" },
    brief: {
      en: "Remembered for justice, patience, and faithful fulfillment of duty.",
      ur: "عدل، صبر اور ذمہ داری نبھانے میں ثابت قدمی کے لیے یاد کیے جاتے ہیں۔"
    },
    message: {
      en: "Be consistent in duty and remain patient under responsibility.",
      ur: "ذمہ داری میں ثابت قدم رہو اور آزمائش میں صبر کرو۔"
    }
  },
  {
    id: "dawud",
    name: { en: "Hazrat Dawud (AS)", ur: "حضرت داؤد علیہ السلام" },
    period: { en: "c. 10th century BCE", ur: "تقریباً 10ویں صدی قبل مسیح" },
    location: { en: "Jerusalem and surrounding lands", ur: "یروشلم اور اطراف" },
    brief: {
      en: "Prophet-king known for justice, worship, and the Zabur.",
      ur: "نبی بادشاہ، عدل، عبادت اور زبور کے لیے معروف۔"
    },
    message: {
      en: "Rule with justice and soften the heart through remembrance of Allah.",
      ur: "عدل کے ساتھ حکمرانی کرو اور ذکرِ الٰہی سے دل کو نرم رکھو۔"
    }
  },
  {
    id: "sulayman",
    name: { en: "Hazrat Sulayman (AS)", ur: "حضرت سلیمان علیہ السلام" },
    period: { en: "After Dawud (AS)", ur: "حضرت داؤدؑ کے بعد" },
    location: { en: "Jerusalem", ur: "یروشلم" },
    brief: {
      en: "Prophet-king blessed with wisdom, authority, and gratitude.",
      ur: "حکمت، اقتدار اور شکر گزاری کے ساتھ عظیم نبی بادشاہ۔"
    },
    message: {
      en: "Power is a trust; use it with gratitude, humility, and justice.",
      ur: "اقتدار امانت ہے؛ اسے شکر، انکساری اور عدل کے ساتھ استعمال کرو۔"
    }
  },
  {
    id: "ilyas",
    name: { en: "Hazrat Ilyas (AS)", ur: "حضرت الیاس علیہ السلام" },
    period: { en: "After Sulayman (AS)", ur: "حضرت سلیمانؑ کے بعد" },
    location: { en: "Levant", ur: "شام" },
    brief: {
      en: "Called his people back from idol worship to pure faith.",
      ur: "اپنی قوم کو بت پرستی سے واپس خالص ایمان کی طرف بلایا۔"
    },
    message: {
      en: "Do not follow false gods; return sincerely to Allah.",
      ur: "جھوٹے معبودوں کو چھوڑو اور خلوص کے ساتھ اللہ کی طرف لوٹو۔"
    }
  },
  {
    id: "alyasa",
    name: { en: "Hazrat Al-Yasa (AS)", ur: "حضرت الیسع علیہ السلام" },
    period: { en: "After Ilyas (AS)", ur: "حضرت الیاسؑ کے بعد" },
    location: { en: "Levant", ur: "شام" },
    brief: {
      en: "Continued prophetic guidance with steadfastness and discipline.",
      ur: "ثابت قدمی اور نظم کے ساتھ دعوتِ نبوت کا سلسلہ جاری رکھا۔"
    },
    message: {
      en: "Continue truth consistently and protect faith across generations.",
      ur: "سچائی کے پیغام کو تسلسل سے جاری رکھو اور ایمان کی حفاظت کرو۔"
    }
  },
  {
    id: "yunus",
    name: { en: "Hazrat Yunus (AS)", ur: "حضرت یونس علیہ السلام" },
    period: { en: "Before late Israelite prophets", ur: "بنی اسرائیل کے آخری انبیاء سے پہلے" },
    location: { en: "Nineveh (Iraq)", ur: "نینویٰ (عراق)" },
    brief: {
      en: "His story highlights repentance, return, and Allah's mercy.",
      ur: "ان کی سیرت توبہ، رجوع اور اللہ کی رحمت کی روشن مثال ہے۔"
    },
    message: {
      en: "Never despair; call on Allah and return quickly after mistakes.",
      ur: "مایوس نہ ہو؛ خطا کے بعد فوراً اللہ کو پکارو اور رجوع کرو۔"
    }
  },
  {
    id: "zakariyya",
    name: { en: "Hazrat Zakariyya (AS)", ur: "حضرت زکریا علیہ السلام" },
    period: { en: "Late Israelite prophetic period", ur: "بنی اسرائیل کے آخری دورِ نبوت" },
    location: { en: "Jerusalem", ur: "یروشلم" },
    brief: {
      en: "Symbol of gentle worship, sincere dua, and trust in Allah's timing.",
      ur: "نرم خو عبادت، خالص دعا اور اللہ کے فیصلے پر یقین کی علامت۔"
    },
    message: {
      en: "Make sincere dua and rely on Allah even when means seem impossible.",
      ur: "خلوص کے ساتھ دعا کرو اور ناممکن حالات میں بھی اللہ پر بھروسا رکھو۔"
    }
  },
  {
    id: "yahya",
    name: { en: "Hazrat Yahya (AS)", ur: "حضرت یحییٰ علیہ السلام" },
    period: { en: "1st century CE", ur: "پہلی صدی عیسوی" },
    location: { en: "Palestine / Jerusalem region", ur: "فلسطین / یروشلم کا علاقہ" },
    brief: {
      en: "Known for purity, courage, and commitment to truth from youth.",
      ur: "کم عمری سے پاکیزگی، جرات اور حق گوئی کے لیے معروف۔"
    },
    message: {
      en: "Hold firmly to revelation and speak truth without fear.",
      ur: "وحی کو مضبوطی سے تھامو اور بے خوف ہو کر حق بات کہو۔"
    }
  },
  {
    id: "isa",
    name: { en: "Hazrat Isa (AS)", ur: "حضرت عیسیٰ علیہ السلام" },
    period: { en: "1st century CE", ur: "پہلی صدی عیسوی" },
    location: { en: "Palestine", ur: "فلسطین" },
    brief: {
      en: "Born miraculously to Maryam (AS); called people to mercy, sincerity, and worship of Allah.",
      ur: "حضرت مریمؑ سے معجزانہ ولادت؛ رحمت، اخلاص اور عبادتِ الٰہی کی دعوت دی۔"
    },
    message: {
      en: "Purify the heart, uphold compassion, and worship Allah alone.",
      ur: "دل کو پاک رکھو، رحم دلی اختیار کرو اور صرف اللہ کی عبادت کرو۔"
    }
  },
  {
    id: "muhammad",
    name: { en: "Prophet Muhammad (SAWW)", ur: "نبی اکرم محمد ﷺ" },
    period: { en: "570-632 CE", ur: "570 تا 632 عیسوی" },
    location: { en: "Makkah and Madinah", ur: "مکہ اور مدینہ" },
    brief: {
      en: "Final Messenger who completed and confirmed the prophetic mission for all humanity.",
      ur: "آخری رسول جنہوں نے تمام انسانیت کے لیے پیغامِ نبوت کو مکمل اور واضح کیا۔"
    },
    message: {
      en: "Complete faith through Qur'an and Sunnah, with mercy, justice, and good character.",
      ur: "قرآن و سنت کے ذریعے کامل دین پر قائم رہو، رحمت، عدل اور حسنِ اخلاق اپناؤ۔"
    }
  }
];
