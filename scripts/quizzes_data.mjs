// Complete dataset of 69 situation-based parenting quizzes
// Each quiz features a realistic scenario dilemma, 3 distinct options, balanced correct answer distribution (0, 1, 2), and deep explanation.

export const quizzesBySlug = {
  // 1-5: Tarbiyaning ahamiyati
  "dars-1-tarbiyaning-ahamiyati-1-qism": {
    quizQuestion: "7 yoshli bolangiz qo'shnining bolasini turtib yig'latdi. Ota-ona sifatida birinchi bo'lib qanday yo'l tutasiz?",
    quizOptions: [
      "Qo'shnining oldida bolani qattiq koyib, darhol jazolash",
      "Vaziyatni xotirjam o'rganib, birovga ozor berishning gunoh va nohaqlik ekanini tushuntirish va bolaning o'zi bilan birga kechirim so'ratish",
      "Bolam hali yosh, o'zlari kelishib oladi deb e'tiborsiz qoldirish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Islomiy tarbiyada sharmanda qilish emas, bolaning vijdonini uyg'otish va xatosini to'g'rilashga o'rgatish muhimdir."
  },
  "dars-2-tarbiyaning-ahamiyati-2-qism": {
    quizQuestion: "Bolangiz sizdan «Nega dadasiz/oyisiz, nega doim faqat sizning aytganingiz bo'lishi kerak?» deb e'tiroz bildirdi. Qanday javob berasiz?",
    quizOptions: [
      "«Chunki men kattaman va shuni buyurdim, ortiqcha gapirma!» deb ovozni balandlatish",
      "Har safar uning aytganiga to'liq ko'nib, oilaviy qoidalarni bekor qilish",
      "Uning his-tuyg'ularini tinglab, oiladagi qoidalar va ota-onalik mas'uliyati uning xavfsizligi va kelajagi uchun ekanini xotirjam tushuntirish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Bolaga qoidalarning sababi mehr va xavfsizlik bilan tushuntirilganda, u ota-onasining obro'sini qalb bilan e'tirof etadi."
  },
  "dars-3-tarbiyaning-ahamiyati-3-qism": {
    quizQuestion: "Solih farzand tarbiyalab, sadaqai joriya qoldirishni niyat qilgan ota-ona qaysi amaliyotga eng katta urg'u berishi zarur?",
    quizOptions: [
      "O'z shaxsiy hayotida halollik, ibodat va mehrda go'zal ibrat bo'lish va bolaga ixlosni singdirish",
      "Faqat qimmatbaho xususiy to'garaklarga berib, moddiy jihatdan to'la ta'minlash",
      "Bolaga faqat kitobdagi qoidalarni yodlatib, amaliyotda o'zi boshqacha yashash"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Sadaqai joriya bo'ladigan solih farzand faqat shaxsiy ibrat, halol luqma va samimiy ixlos orqali voyaga yetadi."
  },
  "dars-4-tarbiyaning-ahamiyati-4-qism": {
    quizQuestion: "Farzandingiz xato ish qilib qo'yganida, unga nasihat qilish uchun eng to'g'ri vaqt va uslub qaysi?",
    quizOptions: [
      "Xato sodir bo'lgan zahoti, atrofdagi barcha odamlar oldida qattiq izza qilish",
      "Ikkala tomon ham jahldan tushgach, xoli joyda mehr bilan, shaxsiyatiga emas amaldagi xatoga to'xtalib suhbatlashish",
      "Umuman hech narsa demasdan, o'zi tushunib yetishini oylab kutish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Payg'ambarimiz (s.a.v.) xatolarni odamlar ichida emas, xoli joyda, shaxsiyatni kamsitmasdan mehr bilan tuzatganlar."
  },
  "dars-5-tarbiyaning-ahamiyati-5-qism": {
    quizQuestion: "Bolangiz haddan tashqari qaysarlik qilib, sizni qattiq asabiylashtirmoqda. Islomiy tarbiya bo'yicha bu paytda qaysi amal eng afzal hisoblanadi?",
    quizOptions: [
      "G'azab bilan qarg'ish yoki achchiq so'z aytishdan saqlanib, uning haqqiga hidoyat va xayrli duo qilish",
      "Bolaga baqirib, kuch ishlatish orqali irodasini sindirish",
      "Har qanday erkaligiga indamay qarab turish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Ota-onaning bolaga duosi mustajobdir. G'azab paytidagi qarg'ish falokat keltirishi mumkin, duo esa qalbni isloh qiladi."
  },

  // 6-10: Axloqiy illatlar va odatlar
  "dars-6-yolgonchilik": {
    quizQuestion: "8 yoshli bolangiz vazifasini bajarmagan bo'lsa-da, «bajardim» deb yolg'on gapirdi. Ota-onaning eng to'g'ri reaksiyasi qanday bo'lishi kerak?",
    quizOptions: [
      "Uni darhol «yolg'onchi» deb haqoratlash va hamma oldida sharmanda qilish",
      "Vazifani o'rniga o'zingiz bajarib berish",
      "Qo'rqmasdan haqiqatni aytishi uchun xavfsiz muhit yaratish, yolg'onning sababini aniqlab, rostgo'ylikni qadrlash"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Bola ko'pincha jazodan qo'rqqani uchun yolg'on gapiradi. Ishonchli va xavfsiz muloqot orqaligina rostgo'ylik shakllanadi."
  },
  "dars-7-ogirlik": {
    quizQuestion: "Farzandingiz mehmondorlikdan yoki bog'chadan boshqa bolaning chiroyli o'yinchog'ini cho'ntagiga solib kelib oldi. Qanday yo'l tutasiz?",
    quizOptions: [
      "Birovning mulkiga ruxsatsiz teginish mumkin emasligini muloyim tushuntirib, bolaning o'zi bilan birga o'yinchoqni egasiga qaytarib uzr so'ratish",
      "O'yinchoqni yashirib qo'yib, bolaga «hech kim ko'rmagan bo'lsa mayli» deyish",
      "Uni hamma oila a'zolari oldida «o'g'ri» deb e'lon qilib, qo'liga urish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Bolani «o'g'ri» deb tamg'alamasdan, mulk chegarasi va mas'uliyatni amalda his qildirib, narsani qaytarganida esa jasoratini maqtab qo'yish kerak."
  },
  "dars-8-sokinish-haqida": {
    quizQuestion: "Farzandingiz ko'chadan yoki internetdan nojo'ya, uyatli so'z eshitib kelib, uyda ishlatib qo'ydi. Eng to'g'ri chora nima?",
    quizOptions: [
      "Darhol og'ziga urish va baqirib qo'rqitish",
      "Ortiqcha emotsiyasiz, xotirjamlik bilan bu so'zning yomon ma'nosi borligini, mo'minga yarashmasligini tushuntirib, chiroyli muqobil so'zlarni o'rgatish",
      "Kulib yuborib, boshqalarga ham aytib berishini so'rash"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Ota-onaning haddan tashqari hissiy reaksiyasi bolada bu so'zga qiziqish uyg'otadi. Xotirjam tushuntirish va go'zal lison o'rgatish eng samaralisidir."
  },
  "dars-9-kor-korona-taqlid": {
    quizQuestion: "Farzandingiz ijtimoiy tarmoqdagi mashhur blogerning bema'ni qilig'i yoki kiyimini takrorlashga qattiq qiziqmoqda. Bunga qanday to'g'ri yondashiladi?",
    quizOptions: [
      "Internetni butunlay o'chirib, bolani xonaga qamab qo'yish",
      "Bolaga qo'shilib o'sha blogerni kuzatish va unga taqlid qilishini olqishlash",
      "Bolaning tanqidiy tafakkurini uyg'otib, kimga ergashish inson qadrini oshirishini tushuntirish va Islomdagi buyuk shaxslardan qiziqarli ibratlar taqdim etish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Ko'r-ko'rona taqlidning davosi — bolada mustaqil iymoniy o'zlikni va yuksak qadriyatlarni shakllantirishdir."
  },
  "dars-10-televizor-haqida": {
    quizQuestion: "Bolangiz kun bo'yi televizor yoki telefondan ko'z uzmayapti. Uni ekrandan sog'lom tarzda uzoqlashtirishning eng samarali yo'li nima?",
    quizOptions: [
      "Oldindan aniq vaqt chegarasini kelishish va bo'sh vaqtni birgalikda jonli o'yinlar, kitobxonlik va sport bilan mazmunli to'ldirish",
      "Simlarini uzib tashlab, janjal ko'tarish va uni ayblash",
      "O'zi to'yguncha ko'rsin deb xohlaganicha ruxsat berish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Ekran bo'shliqni to'ldiradi. Agar ota-ona mazmunli va jonli muqobil mashg'ulot bermasa, oddiy taqiqlar faqat yashirin qarshilik uyg'otadi."
  },

  // 11-15: Shaxsiy ibrat, oziq-ovqat, salomatlik
  "dars-11-ibrat-korsatishlik": {
    quizQuestion: "Ota o'g'liga «Kitob o'qi, telefonga ko'p qarama» deb nasihat qilib, o'zi esa kun bo'yi qo'lidan telefon tushirmaydi. Bu holat bolaga qanday ta'sir qiladi?",
    quizOptions: [
      "Bola ota-onaning so'ziga to'liq amal qilib, kitobsevar bo'lib ulg'ayadi",
      "Bola so'zdan ko'ra ko'rgan amaliga taqlid qiladi va ota-onaning samimiyatiga ishonmay qo'yadi",
      "Hech qanday salbiy ta'siri bo'lmaydi"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Bola quloqlari bilan emas, ko'zlari bilan tarbiyalanadi. Ota-onaning shaxsiy ibrati mingta quruq nasihatdan kuchliroqdir."
  },
  "dars-12-musiqa": {
    quizQuestion: "Farzandning ruhiy dunyosi behuda va behayo kuylarga bog'lanib qolmasligi uchun oilada qanday muhit yaratilishi zarur?",
    quizOptions: [
      "Uydan har qanday ovoz va quvonchni butunlay yo'qotish",
      "Bolani hamma tengdoshlaridan ajratib, yolg'izlatib qo'yish",
      "Uyda Qur'oni Karim qiroati, ma'rifiy suhbatlar va qalbni poklovchi go'zal ovozlar muhitini shakllantirish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Qalb bo'sh qolmaydi — agar unga ilohiy kalom va go'zal ma'rifat joylanmasa, uni behuda ohanglar band qiladi."
  },
  "dars-13-oziq-ovqat-haqida": {
    quizQuestion: "Oila dasturxonida bolaga halol luqma va taomlanish odobini o'rgatishda qaysi qoida asosiy o'rin tutadi?",
    quizOptions: [
      "«Bismillah» bilan boshlash, o'ng qo'lda yeyish, isrof qilmaslik va berilgan ne'matga shukr qilishni amalda ko'rsatish",
      "Faqat qimmat restoranlardan taom olib kelib, bolaning barcha injiqliklariga ko'nish",
      "Dasturxon ustida telefon ko'rib ovqatlanishiga ruxsat berish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Halol luqma va Nabaviy taomlanish odobi bolaning ham jismoniy sog'lig'i, ham ruhiy pokligining asosi hisoblanadi."
  },
  "dars-14-uyqu-va-sport": {
    quizQuestion: "Bolaning jismonan baquvvat va ruhiy bardam bo'lishi uchun Nabaviy kun tartibiga ko'ra qaysi odat eng foydali?",
    quizOptions: [
      "Kechasi yarim kechagacha bedor bo'lib, peshingacha uxlash",
      "Xuftondan so'ng barvaqt uxlab, bomdodda barvaqt turish hamda harakatli jismoniy mashqlar bilan shug'ullanish",
      "Faqat dam olish kunlari mashq qilib, boshqa kunlar kamharakat bo'lish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Payg'ambarimiz (s.a.v.) kechasi barvaqt uxlashni, tongda erta turishni va suzish, kamon otish, yugurish kabi jismoniy chaqqonlikni tavsiya qilganlar."
  },
  "dars-15-tamaki-chekish-haqida": {
    quizQuestion: "Farzandingiz do'stlarining qistovi bilan tamaki yoki elektron sigareta hidini totib ko'rganini bilib qoldingiz. Qanday harakat qilasiz?",
    quizOptions: [
      "Uni kaltaklab, maktabdan chiqarib olish",
      "Beparvo qarab, «bir marta qiziqibdi-da» deb ko'z yumish",
      "Xotirjam suhbat qurib, sog'liq Allohning omonati ekanini, qaramlik xavfini tushuntirish va do'stlar davrasini sog'lomlashtirishga yordam berish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Zararli odatlardan qaytarishda tahdid emas, ochiq ishonchli suhbat va sog'lom do'stona muhit yaratish hal qiluvchi kuchga ega."
  },

  // 16-20: Aqliy tarbiya va jur'at
  "dars-16-aqliy-tarbiya-1-qism": {
    quizQuestion: "Bolada aqliy tafakkurni va kitob mutolaasiga muhabbatni shakllantirishning eng mustahkam poydevori nima?",
    quizOptions: [
      "Har kuni oilaviy birgalikda kitob o'qish va o'qilgan qissalardan bolaning o'z fikrini so'rash",
      "Bolaga faqat test yechishni majburlash va boshqa kitoblarga ruxsat bermaslik",
      "Kitob o'qisa har gal pul berib rag'batlantirish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Kitobxonlik majburlash bilan emas, oilaviy yoqimli odat va fikr almashish madaniyati orqali bolaning ichki ehtiyojiga aylanadi."
  },
  "dars-17-aqliy-tarbiya-2-qism": {
    quizQuestion: "5 yoshli bolangiz tinimsiz «Nega osmon ko'k? Nega daraxtlar tebranadi? Alloh qayerda?» deb savol bermoqda. Ota-onaning to'g'ri tutumi qanday?",
    quizOptions: [
      "«Ko'p gapirma, boshimni og'ritding» deb uning og'zini yopish",
      "Bolaning qiziquvchanligini olqishlab, uning yoshiga mos, tushunarli va ibratli javoblar berish orqali aqlini o'stirish",
      "Javob berish o'rniga telefonni qo'liga tutqazish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Bolaning savollari — uning aqliy va ruhiy o'sishi belgisidir. Savollarga sabr bilan javob berish bolaning o'ziga ishonchini oshiradi."
  },
  "dars-18-aqliy-tarbiya-3-qism": {
    quizQuestion: "Maktab yoshidagi bolangiz mustaqil qaror qabul qilishda qiynalmoqda. Ota-ona bu qobiliyatni qanday rivojlantirishi mumkin?",
    quizOptions: [
      "Uning o'rniga barcha mayda-chuyda qarorlarni o'zlari qabul qilib berish",
      "Kichik masalalarda (kiyim tanlash, vaqt taqsimoti) unga tanlov huquqini berish va natijasi uchun mas'uliyatni o'rganishga yo'l ochish",
      "Xato qaror qilsa qattiq jazolab, mustaqil harakatdan qaytarish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Mustaqil fikrlash kichik tanlovlar va ularning oqibatlarini tushunish orqali bosqichma-bosqich shakllanadi."
  },
  "dars-19-aqliy-tarbiya-4-qism": {
    quizQuestion: "Farzand olgan bilimini hayotda qo'llashi (manfaatli ilmga aylantirishi) uchun ota-ona nima qilishi zarur?",
    quizOptions: [
      "Faqat «5» baho olishini talab qilish va boshqa narsa bilan qiziqmaslik",
      "Boshqa bolalar bilan doimiy solishtirib kamsitish",
      "O'rgangan yaxshiliklarini kichik uka-singillariga, do'stlariga o'rgatishiga va amalda yordam berishiga imkoniyat yaratish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Manfaatli ilm — bu amalda qo'llanilgan, boshqalarga ulashilgan va xulqni go'zallashtirgan ilmdir."
  },
  "dars-20-jurat": {
    quizQuestion: "Farzandingiz yangi jamoada yoki do'stlari oldida o'z haq-huquqini himoya qilishga, fikrini aytishga tortinmoqda. Unga qanday jasorat berish mumkin?",
    quizOptions: [
      "Uyda uning fikrini hurmat qilib tinglash, kichik tashabbuslarini qo'llab-quvvatlash va xato qilishdan qo'rqmaslikni o'rgatish",
      "Uni «qo'rqoq, laqma» deb boshqalar oldida uyaltirish",
      "Doim uning o'rniga o'zingiz borib hamma bilan gaplashib hal qilib berish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Haqiqiy jasorat uyda hurmat ko'rgan, fikri inobatga olingan va xato qilishdan qo'rqmaydigan bolalarda shakllanadi."
  },

  // 21-25: Qo'rqoqlik, noqislik, hasad
  "dars-21-qorqoqlik-1-qism": {
    quizQuestion: "6 yoshli bolangiz qorong'i xonaga kirishdan yoki yolg'iz uxlashdan qo'rqyapti. Qanday yo'l tutish to'g'ri?",
    quizOptions: [
      "«Katta yigit ham shundan qo'rqadimi!» deb kulish va majburlab qorong'i xonaga kiritish",
      "Uning qo'rquvini tushunib, xotirjam quchoqlash, xonaga chiroq qo'yish va Oyatul Kursiy hamda duolarni birga o'qib tasalli berish",
      "Bolaning qo'rquviga qo'shilib o'zingiz ham vahima qilish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Bolaning qo'rquvi masxara qilinsa, u ichki kompleksga aylanadi. Mehribonlik, xavfsizlik va duolar orqali qo'rquv tabiiy yengiladi."
  },
  "dars-22-qorqoqlik-2-qism": {
    quizQuestion: "Bolangiz biror yangi ishni boshlashdan: «Menda o'xshamaydi, yutqazib qo'yaman» deb qattiq xavotirlanmoqda. Ota-onaning ko'magi qanday bo'lishi kerak?",
    quizOptions: [
      "«Yutqazsang sharmanda bo'lasan» deb mas'uliyatni oshirish",
      "Uning o'rniga ishni o'zingiz bajarib berish",
      "Natija emas, qilingan harakat va sa'y-harakat muhim ekanini aytib, Allohga tavakkul qilishni o'rgatish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Natijaga emas, mehnat va harakatga urg'u berilganda bola xato qilishdan qo'rqmaydigan, ruhiy mustahkam shaxs bo'ladi."
  },
  "dars-23-ozini-noqis-his-qilishlik-1-qism": {
    quizQuestion: "Bolangiz «Men hech kimga yoqmayman, boshqalar mendan chiroyli/aqlli» deb tushkunlikka tushdi. Asosiy tarbiyaviy xato qayerda bo'lgan bo'lishi mumkin?",
    quizOptions: [
      "Ota-ona uni tez-tez boshqa bolalar bilan solishtirib, kamchiliklarini yuziga solganida",
      "Bolaga haddan tashqari ko'p kitob o'qitilganda",
      "Bolaga yangi kiyimlar olib berilmaganda"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Boshqalar bilan solishtirish — bolaning qalbida noqislik (o'zini kam his qilish) ildizini otadi. Har bir bola o'zicha betakror mo'jizadir."
  },
  "dars-24-ozini-noqis-his-qilishlik-2-qism": {
    quizQuestion: "O'ziga ishonchsiz bo'lib qolgan farzandning qalbida sog'lom o'zlikni tiklash uchun qaysi usul eng samaralidir?",
    quizOptions: [
      "Barcha xatolariga ko'z yumib, asossiz maqtovlar bilan qanoatlantirish",
      "Uning haqiqiy qobiliyat va qiziqishlarini kashf etib, oiladagi muhim ishlarda unga mas'uliyat va ishonch bildirish",
      "Barcha tengdoshlaridan uzoqlashtirib, uyda olib o'tirish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Bolaga berilgan haqiqiy mas'uliyat va erishgan amaliy yutuqlari uning o'ziga bo'lgan ijobiy ishonchini mustahkamlaydi."
  },
  "dars-25-hasad": {
    quizQuestion: "Farzandingiz sinfdoshining yangi velosipedi yoki yuqori bahosini ko'rib, jahl bilan uning buzilishini yoki yomon baho olishini tiladi. Unga qanday o'rgatasiz?",
    quizOptions: [
      "Uni qattiq haqoratlab, burchakka turg'izib qo'yish",
      "Hasad birovning yaxshiligini yo'q bo'lishini xohlash ekanini, buning o'rniga «Mashaalloh, unga baraka bergin, menga ham shundayidan nasib etgin» deb havas qilishni o'rgatish",
      "Darhol undan ham qimmatroq velosiped olib berib raqobat qilish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Hasad va havasning farqini yoshlikdan tushuntirish qalbni g'arazdan tozalaydi va baraka tilash fazilatini shakllantiradi."
  },

  // 26-30: G'azab, taqvo, birodarlik, isor, kechirim
  "dars-26-gazab": {
    quizQuestion: "Farzandingiz nimadir xohlagani bo'lmagani uchun baqirib, narsalarni uloqtira boshladi. Sunnat va psixologiya bo'yicha bu paytda qanday chora ko'riladi?",
    quizOptions: [
      "Unga qo'shilib baqirish va musht ko'tarish",
      "Har qanday shartiga darhol rozi bo'lib, janjalni tinchitish",
      "Xavfsizlikni ta'minlab xotirjam bo'lish, g'azab paytida holatni o'zgartirish (o'tirish, tahorat olish/yuzni yuvish) va tinchlangach suhbatlashish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Hadisda g'azab kelganda tik turgan bo'lsa o'tirish, o'tirgan bo'lsa yotish va tahorat olish buyurilgan. Ota-onaning xotirjamligi bolani tinchlantiradi."
  },
  "dars-27-taqvo": {
    quizQuestion: "Farzandingizga hech kim ko'rmayotgan holatda ham yolg'iz emasligini, Alloh taolo doimo ko'rib va bilib turganini qanday singdirish mumkin?",
    quizOptions: [
      "Har bir xatti-harakatida ehson (Allohni ko'rib turgandek yashash) tuyg'usini va Allohning mehribon nazoratchi ekanini hayotiy misollar bilan tushuntirish",
      "«Alloh seni do'zaxda kuydiradi» deb faqat qo'rquv orqali daxshatga solish",
      "Uyning hamma burchagiga videokamera qo'yib tekshirish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Taqvo — Allohning muhabbati va ulug'vorligidan kelib chiqadigan ichki nazoratdir. Faqat qo'rquvga qurilgan munosabat uzoqqa bormaydi."
  },
  "dars-28-birodarlik-va-rahmat": {
    quizQuestion: "Uyda aka-uka yoki opa-singillar bitta o'yinchoq yoki shirinlik ustida tinimsiz talashib janjallashmoqda. Ota-ona qanday adolatli yo'l tutishi kerak?",
    quizOptions: [
      "Doim kattasiga «Sen kattasan, jim bo'l» deb barcha havolikni kichigiga berish",
      "Ikkalasini ham quchoqlab, ehtiyojlarini tinglash, bo'lishish va navbat bilan o'ynash qoidasini kelishib olish",
      "O'yinchoqni derazadan uloqtirib yuborish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Kattasini doimiy aybdor qilish aka-ukalar o'rtasida gina va nafrat uyg'otadi. Adolat va teng mehr do'stlikni mustahkamlaydi."
  },
  "dars-29-isor-fidoiylik": {
    quizQuestion: "Farzandingiz o'zida oxirgi qolgan shirinlikni kichik ukasiga yoki muhtoj do'stiga o'z ixtiyori bilan berdi. Ota-ona bu amaldan keyin qanday munosabat bildiradi?",
    quizOptions: [
      "«Nega berding, o'zing och qolding-ku» deb koyish",
      "E'tibor bermasdan o'tib ketish",
      "Bolaning bu saxiyligi va isor fazilatini maqtash, Alloh saxiy insonlarni yaxshi ko'rishini aytib rag'batlantirish"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Isor — o'z ehtiyoji bo'la turib boshqani ustun qo'yishdir. Bu go'zal fazilat e'tirof etilsa, bolaning qalbida saxiylik mustahkamlanadi."
  },
  "dars-30-avf-qilish-kechirimlilik": {
    quizQuestion: "Do'sti bolangizning sevimli daftarlarini yirtib qo'ydi va bolangiz undan qattiq xafa bo'lib o'ch olmoqchi. Unga qanday maslahat berasiz?",
    quizOptions: [
      "Kechirimlilik kuchsizlik emas, aksincha olijanoblik va kuchli insonlarning fazilati ekanini, kechirgan inson Alloh huzurida ulug'lanishini tushuntirish",
      "Borib uning ham barcha narsasini yirtib tashlashni buyurish",
      "O'sha do'sti bilan bir umr gaplashmaslikni talab qilish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Qur'onda: «Kim kechirsa va isloh qilsa, uning ajri Allohning zimmasidadir» deyiladi. Avf qilish qalbni kibr va g'azabdan xalos qiladi."
  },

  // 31-35: Ota-ona, qarindosh, qo'shni haqqi
  "dars-31-ota-ona-haqqi-1-qism": {
    quizQuestion: "O'smir yoshidagi bola charchagan onasining «Iltimos, do'kondan non olib kel» degan iltimosiga qovog'ini solib, norozi ohangda «uff» dedi. Onaning eng dono yondashuvi qanday bo'ladi?",
    quizOptions: [
      "Qarg'ab, «Menga oq bo'lasan» deb qarg'ish yog'dirish",
      "Tinchlanib olgach, onaga «uff» deyish Islomda katta gunoh ekanini, ota-ona rizosi Alloh rizosi ekanini hurmatli ohangda tushuntirish",
      "Indamay o'zi borib non olib kelish va arazlab yurish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Isro surasida ota-onaga «uff» ham demaslik buyurilgan. Buni tahdid bilan emas, mehrli va qat'iy tushuntirish orqali anglatish zarur."
  },
  "dars-32-ota-ona-haqqi-2-qism": {
    quizQuestion: "Farzandga ota-onaning haqqi ular vafotidan keyin ham davom etishini qanday amaliy misol bilan o'rgatish mumkin?",
    quizOptions: [
      "O'tgan bobo-buvilar haqqiga birgalikda duo qilish, ularning nomidan ehson qilish va do'stlari holidan xabar olish orqali",
      "Faqat qabr toshlarini qimmatbaho qilish kerakligini aytish",
      "O'tmishni eslamay yashashni tayinlash"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Farzandning ota-onasiga qiladigan eng ulug' yaxshiligi — doimiy xayrli duosi, sadaqalari va ularning qarindoshlariga qilgan hurmatidir."
  },
  "dars-33-qarindoshlar-haqqi-1-qism": {
    quizQuestion: "Qarindoshlar bilan bordi-keldi qilish (silai rahm) bolaning kelajagiga qanday ma'naviy foyda keltiradi?",
    quizOptions: [
      "Faqat sovg'a-salom olish uchungina kerak",
      "Bolada mehr-oqibat, mehrli qarindoshlik tarmog'i va umrga, rizqqa baraka keltiruvchi ilohiy qonuniyatni shakllantiradi",
      "Hech qanday foydasi yo'q, aksincha vaqtni oladi"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Hadisi sharifda silai rahm qiluvchining rizqi keng, umri barakali bo'lishi xabar berilgan."
  },
  "dars-34-qarindoshlar-haqqi-2-qism": {
    quizQuestion: "Agar biror qarindosh oilangizga nisbatan nohaqlik qilgan bo'lsa, bu holatda bolaga qanday Islomiy tarbiya beriladi?",
    quizOptions: [
      "Bolaga ham o'sha qarindoshni yomon ko'rishni va dushman deb bilishni buyurish",
      "Bizga yomonlik qilgan bo'lsa ham, munosabatni uzmasdan odob saqlash, yomonlikka yaxshilik bilan javob qaytarish komillik ekanini ko'rsatish",
      "Ular bilan ko'chada ko'rishib qolsa yuz o'girib o'tish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Haqiqiy silai rahm — faqat yaxshilik qilganga yaxshilik qilish emas, balki aloqani uzganga ham marhamat ko'rsatishdir."
  },
  "dars-35-qoshni-haqqi": {
    quizQuestion: "Kvartirada yoki hovlida yashayotgan farzandingiz kechasi baland musiqa qo'yib sakramoqda. Qo'shni haqqi borasida unga nima deyiladi?",
    quizOptions: [
      "«O'z uyimiz, nima qilsak o'zimizning ishimiz» deyish",
      "Payg'ambarimiz (s.a.v.) qo'shniga ozor bermaslikni iymon sharti deb bilganlarini eslatib, ovozni pasaytirish va boshqalarning tinchini hurmat qilishni talab qilish",
      "Qo'shnilar shikoyat qilsa ularni haqoratlash"
    ],
    correctOptionIndex: 1,
    quizExplanation: "«Allohga va oxirat kuniga iymon keltirgan kishi qo'shnisiga ozor bermasin» (Hadis). Qo'shnining haqqi Islomda eng nozik huquqlardandir."
  },

  // 36-40: Muallim, do'st, yoshi kattalar haqqi
  "dars-36-muallimlar-haqida": {
    quizQuestion: "Farzandingiz maktabdagi ustozi ustidan shikoyat qilib, «Ustozim menga adolatsiz baho qo'ydi» deb noliydi. Ota-onaning birinchi qadami qanday bo'lishi kerak?",
    quizOptions: [
      "Maktabga borib, o'quvchilar oldida o'qituvchi bilan janjallashish",
      "Ustozning obro'sini to'kmasdan, xotirjamlik bilan masalani o'rganish va bolaga ustozga nisbatan hurmat va odob saqlash zarurligini tushuntirish",
      "Bolani darhol boshqa maktabga ko'chirish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Ustozning qadri tushirilgan joyda ilm barakasi bo'lmaydi. Ustoz hurmatini saqlagan holda xolis tushunishga intilish lozim."
  },
  "dars-37-dost-haqida-1-qism": {
    quizQuestion: "Farzandga do'st tanlash mezonlarini o'rgatishda qaysi hadisdagi o'xshatish eng go'zal dastur hisoblanadi?",
    quizOptions: [
      "Yaxshi do'st mushk sotuvchiga, yomon do'st esa bosqonchiga o'xshatilgani",
      "Faqat boy va nufuzli bolalar bilan do'stlashish lozimligi",
      "Hech kim bilan do'stlashmasdan faqat yolg'iz yurish kerakligi"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Mushk sotuvchi yonida tursangiz, xushbo'y hid yuqadi; temirchi bosqoni esa kiyimingizni kuydirishi mumkin. Do'st inson diniga ta'sir qiladi."
  },
  "dars-38-dost-haqida-2-qism": {
    quizQuestion: "Farzandingiz yomon xulqli, so'kinadigan va darsdan qochadigan do'stga ergashayotganini sezsangiz, qanday dono chora ko'rasiz?",
    quizOptions: [
      "Bolani do'pposlab, uyga qamab qo'yish",
      "U bilan ochiq suhbatlashib, yomon muhitning xavfini tushuntirish va uni qiziqishlariga mos iymonli, faol to'garak va do'stlar davrasiga yo'naltirish",
      "O'z holiga tashlab qo'yish, o'zi tushunib yetsin deyish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Shunchaki do'stni taqiqlash natija bermaydi. Bolaga sog'lom, iymonli va qiziqarli muqobil do'stlar muhitini yaratish zarur."
  },
  "dars-39-yoshi-kattalar-haqqi-1-qism": {
    quizQuestion: "Avtobusda yoshi katta kishi chiqib keldi. Sizning 10 yoshli bolangiz esa joyida bemalol o'tiribdi. Qanday yo'l tutasiz?",
    quizOptions: [
      "Ko'rmaganga olib o'tiraverish",
      "Kattalarga hurmat ko'rsatib joy berish saodat va sunnat ekanini muloyim eslatib, bolaning o'zi o'rnidan turib joy berishiga rag'batlantirish",
      "Bolani odamlar oldida jerkib, siltab turg'izish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "«Kattalarimizni hurmat qilmagan, kichiklarimizga rahm qilmagan bizdan emas» (Hadis). Rag'bat bilan odob o'rgatish ko'ngilda mehr uyg'otadi."
  },
  "dars-40-yoshi-kattalar-haqqi-2-qism": {
    quizQuestion: "Keksalar bilan suhbatda yoki dasturxon atrofida bolaga qaysi odob birinchi bo'lib singdiriladi?",
    quizOptions: [
      "Kattalardan oldin taomga qo'l cho'zmaslik, ularning gapini bo'lmaslik va ularga xizmat qilishda peshqadam bo'lish",
      "Kattalar gaplashayotganda ularning gapiga tinimsiz aralashib o'zini ko'rsatish",
      "Keksalar bor joyga yaqinlashmaslik"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Kattalardan keyin taomga qo'l cho'zish va so'zini bo'lmaslik — qadimiy sharqona va islomiy tarbiyaning oltin qoidalaridandir."
  },

  // 41-45: Fitrat, taom, salom, izn, majlis
  "dars-41-fitrat-va-sibga-farqi": {
    quizQuestion: "«Har bir bola Islom fitratida tug'iladi, so'ng ota-onasi uni boshqa yo'lga buradi» hadisining asosiy sabog'i nima?",
    quizOptions: [
      "Bolaning asl tabiati pok va ezgulikka moyil, uning qaysi yo'nalishda ketishi esa ota-onaning tarbiyasi va muhitiga bog'liq",
      "Tarbiyaning hech qanday ahamiyati yo'q, hamma narsa faqat irsiyatga bog'liq",
      "Bolani tarbiyalashni 18 yoshdan keyin boshlash kerak"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Fitrat — Alloh bergan oq qog'oz kabi pok tabiatdir. Ota-onaning vazifasi bu poklikni bulg'amasdan, Allohning bo'yog'i (sibg'atulloh) bilan bezashdir."
  },
  "dars-42-ovqatlanish-odobi": {
    quizQuestion: "Farzandingiz ovqatni chap qo'lda va dasturxondagi har joydan cho'qilab yeyishga odatlangan. Sunnatga binoan unga nima deb o'rgatiladi?",
    quizOptions: [
      "«Ey o'g'ilcham/qizim, «Bismillah» degin, o'ng qo'ling bilan yegin va o'z oldingdan yegin» hadisini mehr bilan o'rgatish",
      "Qo'liga qoshiq bilan urib jazolash",
      "Qanday yesa shunday yeyaverishiga indamaslik"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Payg'ambarimiz (s.a.v.) Umar ibn Abu Salamaga mehr bilan aynan shu uchta qoidani: Bismillah aytish, o'ng qo'lda va o'z oldidan yeyishni o'rgatganlar."
  },
  "dars-43-salomlashish-odobi": {
    quizQuestion: "Farzandingiz uyga yoki mehmonga kirganda hech kimga salom bermay o'tib ketdi. Qanday yo'l tutasiz?",
    quizOptions: [
      "Hamma oldida jerkib: «Nega tiling yo'qmi?» deb uyaltirish",
      "Salomlashish mehr-muhabbat kaliti va tinchlik tilagi ekanini tushuntirib, birinchi bo'lib o'zingiz salom berib go'zal ibrat bo'lish",
      "Hech narsa demasdan e'tiborsiz qoldirish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "«Oralaringizda salomni yoying, shunda bir-biringizga muhabbatli bo'lasiz» (Hadis). Ota-ona o'zi birinchi salom berish orqali eng yaxshi ibratni ko'rsatadi."
  },
  "dars-44-izn-sorash-odobi-istizon": {
    quizQuestion: "Farzand ota-onaning yotoqxonasiga yoki begona xonaga kirishdan oldin nima qilishi shart?",
    quizOptions: [
      "To'g'ridan-to'g'ri eshikni tepib kirib ketaverish",
      "Eshikni 3 martagacha muloyim taqillatib, ruxsat so'rashi, agar javob bo'lmasa qaytishi",
      "Eshik tirqishidan poylab keyin kirish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Isti'zon — shaxsiy chegaralar va hayoni saqlovchi Qur'oniy odobdir. 3 marta ruxsat so'rash sunnat hisoblanadi."
  },
  "dars-45-majlis-odobi": {
    quizQuestion: "Kattalar o'tirgan davrada bolaning o'zini tutishi borasida qaysi odobga amal qilinishi zarur?",
    quizOptions: [
      "Kattalarning so'ziga aralashmaslik, pichirlashib kulmaslik va o'tirish tartibiga rioya qilish",
      "Davraning o'rtasiga o'tib, baland ovozda e'tiborni tortish",
      "Odamlarning orqasidan gapirib masxara qilish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Majlis odobida kattalarga hurmat, sukut saqlash va boshqalarga noqulaylik tug'dirmaslik muhim mezondir."
  },

  // 46-50: So'zlashish, hazil, muborakbod, bemor, ta'ziya
  "dars-46-sozlashish-odobi": {
    quizQuestion: "Farzandingiz gaplashayotganda ovozini juda baland ko'tarib, qichqirib gapirish odatini chiqardi. Luqmon surasidagi hikmatga ko'ra unga qanday nasihat qilinadi?",
    quizOptions: [
      "Siz ham undan balandroq baqirib gapirish",
      "«Ovozingni pasaytir! Chunki eng yoqimsiz ovoz — eshaklarning hangrashidir» oyati mazmunini tushuntirib, muloyim so'zlashga o'rgatish",
      "Umuman gapirishni taqiqlab qo'yish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Luqmon surasi 19-oyatda ovozni pasaytirish axloqiy go'zallik ekani uqtirilgan. Muloyim va sokin nutq inson savlatini oshiradi."
  },
  "dars-47-hazil-odobi": {
    quizQuestion: "Farzandingiz do'stini kuldirish uchun yolg'on gap to'qib chiqardi va uni masxara qildi. Unga Islomdagi hazil odobi qanday tushuntiriladi?",
    quizOptions: [
      "Hazilda ham faqat haqiqatni aytish kerakligi, birovning ustidan kulish va yolg'on aralashtirish harom ekanini anglatish",
      "Boshqalar kulgan bo'lsa hech qisi yo'q deyish",
      "Uni kaltaklab, hazillashishni umrbot man qilish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Payg'ambarimiz (s.a.v.) hazillashganlarida ham faqat haqiqatni aytganlar va birovning dilini og'ritishdan qaytarganlar."
  },
  "dars-48-muborakbod-etish-odobi-tabriklash": {
    quizQuestion: "Qo'shnining farzandi musobaqada g'olib bo'ldi yoki oilada quvonchli xushxabar yuz berdi. Farzandingizni bu holatda qanday harakatga undaysiz?",
    quizOptions: [
      "Hasad qilib indamay o'tirish",
      "Borib samimiy tabriklash, quvonchiga sherik bo'lish va baraka tilab muborakbod etish",
      "Uning yutug'ini kamsitib gapirish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Musulmon kishi birodarining xursandchiligiga chin ko'ngildan sherik bo'lishi va uni muborakbod etishi mehr rishtalarini mustahkamlaydi."
  },
  "dars-49-kasalni-ziyorat-qilish-va-taziya-odobi-1-qism": {
    quizQuestion: "Bemor bo'lib yotgan qarindosh yoki do'stni ziyorat qilishga borganingizda bolaga qaysi odob o'rgatiladi?",
    quizOptions: [
      "Bemorning oldida ko'p o'tirmaslik, unga umid baxsh etuvchi shirin so'zlar aytish va shifo tilab duo qilish",
      "Bemorning oldida shovqin solib o'ynash",
      "Unga og'ir kasalliklar haqida gapirib qo'rqitish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Bemor ziyoratida ko'p o'tirib malol kelmaslik, shirin so'z va shifo duolarini aytish sunnat amallardandir."
  },
  "dars-50-kasalni-ziyorat-qilish-va-taziya-odobi-2-qism": {
    quizQuestion: "Yaqin insoni vafot etgan xonadonga ta'ziyaga borganda bolaga musibat egalariga nisbatan qanday munosabatda bo'lish uqtiriladi?",
    quizOptions: [
      "Katta bo'lib kulishib o'tirish",
      "Sabr tilash, musibatdagilarning ko'ngliga tegadigan gaplardan tiyilish va imkon bo'lsa ularga taom tayyorlab yordam berish",
      "Musibat egalaridan taom talab qilish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Ta'ziyada sabr va hamdardlik bildiriladi. Ja'far (r.a.) oilasi musibatga uchraganda Rasululloh (s.a.v.) ularga taom pishirib berishni buyurganlar."
  },

  // 51-55: Aksa, amri ma'ruf, nahyi munkar, mahram, jinsiy tarbiya
  "dars-51-aksa-urish-va-esnash-odobi": {
    quizQuestion: "Farzandingiz aksa urganda og'zini to'smadi va hech narsa demadi. Sunnatga muvofiq qanday yo'l-yo'riq berasiz?",
    quizOptions: [
      "Aksa urganda og'izni ro'molcha yoki qo'l bilan to'sish, «Alhamdulillah» deyish, eshitgan odam esa «Yarhamukalloh» deb duo qilishini o'rgatish",
      "Aksa urganda bor ovozda baqirish kerak deyish",
      "Esnaganda og'izni ochiq qoldirishni aytish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Aksa urish — Allohga xush keladigan holat bo'lib, unga hamd aytiladi. Esnash esa shaytondan deb bilinib, og'izni qo'l bilan to'sish lozim."
  },
  "dars-52-amri-maruf-va-nahyi-munkar-1-qism": {
    quizQuestion: "Farzandingiz do'stini yaxshilikka (masalan, namoz o'qishga yoki odobli bo'lishga) undamoqchi. Unga qaysi qoida tayinlanadi?",
    quizOptions: [
      "Do'stini odamlar oldida masxara qilib buyruq berish",
      "Muloyimlik, shaxsiy ibrat va go'zal nasihat bilan, qalbini og'ritmasdan yaxshilikka chaqirish",
      "Kuch ishlatib majburlash"
    ],
    correctOptionIndex: 1,
    quizExplanation: "«Robbingning yo'liga hikmat va chiroyli mav'iza ila da'vat qil» (Nahl, 125). Qo'pollik bilan qilingan da'vat odamlarni bezdiradi."
  },
  "dars-53-amri-maruf-va-nahyi-munkar-2-qism": {
    quizQuestion: "Farzandingiz bir do'stining noo'rin ish (masalan, birovning ustidan kulish) qilayotganini ko'rdi. Qanday yo'l tutishi to'g'ri?",
    quizOptions: [
      "Unga qo'shilib kulish",
      "Uni hamma oldida sharmanda qilib janjallashish",
      "Imkoni bo'lsa xoli joyda muloyimlik bilan xatosini tushuntirish yoki yomonlikdan chetlanib, unga qo'shilmaslik"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Yomonlikdan qaytarishda insonning izzat-nafsini to'kmasdan, xoli holatda nasihat qilish sunnatga muvofiqdir."
  },
  "dars-54-xutba-qilinayotgan-qizga-va-mahramlarga-qarash-odobi": {
    quizQuestion: "Bolaga yoshligidan hayo va shaxsiy daxlsizlik (mahramlik chegaralari) qanday amaliy tarzda o'rgatiladi?",
    quizOptions: [
      "Kiyim almashtirishda boshqalardan xoli bo'lish, o'zgalarning avratiga qaramaslik va o'z tanasining daxlsizligini bilish orqali",
      "Bu mavzuni 20 yoshgacha umuman gapirmaslik",
      "Hamma narsaga ruxsat berib qo'yish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Hayo — iymonning bir bo'lagidir. Bolaga o'z tanasining qadrini va mahramlik chegaralarini yoshligidan tabiiy odob bilan singdirish lozim."
  },
  "dars-55-jinsiy-tarbiya": {
    quizQuestion: "Islomiy tarbiyada balog'at ostonasidagi farzandga to'g'ri jinsiy tarbiya berishning eng xavfsiz va to'g'ri manbai kim bo'lishi kerak?",
    quizOptions: [
      "Ko'chadagi do'stlari va internetdagi nazoratsiz saytlar",
      "Ota (o'g'il bola uchun) va ona (qiz bola uchun) — mehr, hayo va ilmiy-shar'iy asosda to'g'ri tushuntiruvchi ota-onaning o'zi",
      "Televizordagi seriallar"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Agar ota-ona hayo bilan to'g'ri ma'lumot bermasa, bola bu ma'lumotni tashqaridagi buzuq manbalardan olib, adashishi mumkin."
  },

  // 56-69: Zamonaviy pedagogika, fitrat, Aziz Rahimov darslari
  "bolaning-darajasiga-chiqish": {
    quizQuestion: "Nima sababdan ota-ona bolaning oldida «darajaga tushish» emas, «bolaning darajasiga chiqish» tamoyili asosida harakat qilishi zarur?",
    quizOptions: [
      "Chunki bola fitratan pok, begunoh va riyosiz bo'lib, kattalarning qalb illatlaridan xolidir",
      "Chunki bolalar har doim kattalardan aqlli va tajribali bo'ladi",
      "Chunki bu shunchaki psixologik o'yin bo'lib, hech qanday ma'naviy ma'noga ega emas"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Ahsani taqvimda yaratilgan bola fitratan pok va riyodan xoli. Unga yetishish uchun kattalar o'z qalb illatlarini tozalashi kerak."
  },
  "fitrat-pedagogikasi-quroniy-asoslar": {
    quizQuestion: "Qur'oniy 3 bosqichli tarbiya modeliga ko'ra (0-7, 7-14, 14+ yosh), 7-14 yosh oralig'ida tarbiyaning asosiy o'qi nima bo'lishi kerak?",
    quizOptions: [
      "Faqat erkin o'yin va hech qanday chegarasiz erkalash",
      "Ta'lim, odob, mas'uliyat va qat'iy intizomni mehr bilan o'rgatish",
      "Tarbiyani to'liq do'stlariga topshirib qo'yish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "7-14 yosh — ta'lim va odob davri. Bu bosqichda intizom va mas'uliyat shakllantiriladi, 14 yoshdan keyin esa do'stlik davri boshlanadi."
  },
  "ota-onalik-masuliyati-va-qalb-tarbiyasi": {
    quizQuestion: "Oqila onaning «O'zini bilmoqlik» tamoyiliga ko'ra, bola bilan yuzaga keladigan ko'plab nizolarning tub ildizi qayerda yotadi?",
    quizOptions: [
      "Bolaning o'ta yomon fe'l-atvorida",
      "Maktab o'qituvchilarining layoqatsizligida",
      "Ota-onaning o'z ruhiy charchog'i, ichki g'azabi va o'z nafsini nazorat qila olmasligida"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Ko'pincha bolaning xatosi ota-onadagi charchoq va ichki muammolarning aksidir. O'z nafsini isloh qilgan ota-ona bolani oson tushunadi."
  },
  "bola-ruhiyati-va-nafs-tarbiyasi": {
    quizQuestion: "Luqmon surasi 19-oyatidagi ovozni pasaytirish haqidagi buyruq oilaviy muhitda qanday qo'llaniladi?",
    quizOptions: [
      "Haq bo'lsa ham baqirish kuchsizlik belgisi ekanini anglab, talablarni sokin va qat'iy ohangda yetkazish orqali",
      "Faqat pichirlab gapirish orqali",
      "Bolaga umuman hech qanday talab qo'ymaslik orqali"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Baqirish bola ongida himoya devorini hosil qiladi va eshitish qobiliyatini to'sadi. Sokin, mehrli qat'iyatgina qalbga yetib boradi."
  },
  "bola-tabiati-ruhiy-ehtiyojlar-va-chegaralar": {
    quizQuestion: "«Farzand tarbiyasida bolaga emas, o'z nafsimizga qoidalar qo'yish kerak» qoidasining amaliy ma'nosi nima?",
    quizOptions: [
      "Bolaga umuman cheklov qo'ymasdan nima xohlasa shuni qildirishi",
      "Ota-onaning o'zi tartib, halollik va sabrga to'liq rioya qilishi va bolaga namuna bo'lishi",
      "Oila a'zolarining bir-biriga gapirmay qo'yishi"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Ota-ona o'z nafsini tiymasa va qoidalarga o'zi amal qilmasa, bolaga qo'yilgan minglab cheklovlar samarasiz qoladi."
  },
  "bola-ruhiyati-ota-onalik-masuliyati-va-manaviyat": {
    quizQuestion: "Junayd Bag'dodiyning «Shukr — Alloh bergan ne'mat bilan Unga gunoh qilmaslikdir» so'ziga ko'ra, farzand ne'matining eng go'zal shukri qanday bo'ladi?",
    quizOptions: [
      "Faqat til bilan «Shukr» deb qo'yish",
      "Farzandga faqat eng qimmat brend kiyimlarni kiydirish",
      "Farzandni Alloh taolo rozi bo'ladigan solih, adolatli va iymonli qilib tarbiyalash orqali"
    ],
    correctOptionIndex: 2,
    quizExplanation: "Farzand — omonat ne'matdir. Uni gunohdan asrash va to'g'ri tarbiyalash — uning haqiqiy amaliy shukridir."
  },
  "zamonaviy-ota-onalik-ijtimoiy-muhit-yakuniy-xulosa": {
    quizQuestion: "Hazrati Alining «Farzandlaringizni ular yashaydigan zamon uchun tarbiyalang» hikmati bugungi kunda nimani anglatadi?",
    quizOptions: [
      "Zamonaviy ilm-fan va texnologiyalarni biladigan, ammo o'z qadriyat va iymonini mahkam tutadigan kuchli shaxs qilib yetishtirishni",
      "Barcha diniy va milliy qadriyatlardan voz kechib zamonga moslashishni",
      "Farzandni zamonaviy texnologiyalardan butunlay uzib qo'yishni"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Farzand kelajak sinovlariga tayyor bo'lishi, zamonaviy bilimlar bilan birga kuchli ma'naviy immunitetga ega bo'lishi kerak."
  },
  "talim-va-tarbiyada-nega-savoli": {
    quizQuestion: "Aziz Rahimov ta'kidlaganidek, ta'lim va tarbiyada «Nega?» savolining bolaga beradigan eng katta foydasi nima?",
    quizOptions: [
      "Bolani charchatib, savol bermaydigan qilib qo'yish",
      "Qoidalarni ko'r-ko'rona emas, ularning sabab-oqibatini tushunib, ichki anglash va mas'uliyat hissi bilan bajarishiga o'rgatish",
      "Ota-onaning vaqtini tejash"
    ],
    correctOptionIndex: 1,
    quizExplanation: "«Nega?» savoli orqali harakat qilgan bola o'z xatti-harakatlarining oqibatini anglaydi va ichki irodaga ega bo'ladi."
  },
  "osmir-yosh-va-diqqatni-asrash": {
    quizQuestion: "Qisqa videolar (TikTok, Reels, Shorts) bolada nima sababdan «Klip tafakkur» va Brain Rot holatini keltirib chiqaradi?",
    quizOptions: [
      "Chunki ular bolaning aqlini haddan tashqari tezlashtirib yuboradi",
      "Chunki ular arzon dopamin berib, uzoq muddatli diqqatni, kitob o'qish va chuqur fikrlash qobiliyatini zaiflashtiradi",
      "Chunki unda faqat multfilmlar ko'rsatiladi"
    ],
    correctOptionIndex: 1,
    quizExplanation: "15 soniyalik uzluksiz vizual oqim miyadagi diqqat markazini toliqtiradi va bola qiyinroq, uzoqroq aqliy mehnatdan qochadigan bo'lib qoladi."
  },
  "tashabbuskorlik-va-tort-sarmoya": {
    quizQuestion: "To'rt turdagi sarmoya (vaqt, mehr, ishonch, bilim) qoidasiga ko'ra, bolada tashabbuskorlikni o'ldiradigan eng katta ota-onalik xatosi nima?",
    quizOptions: [
      "Bolaga faqat pul sarflab, unga mehr, vaqt va 100% so'zsiz ishonch bermaslik hamda har bir qadamini haddan tashqari nazorat qilish",
      "Bolaga ko'p kitob o'qitish",
      "Bolani sport to'garagiga berish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Moddiy ta'minot ota-onalik mehrining o'rnini bosa olmaydi. Bolaga berilgan vaqt va ishonchgina unda tashabbuskorlik uyg'otadi."
  },
  "jasur-farzand-poydevori": {
    quizQuestion: "Bolani haddan tashqari asrab-avaylab, «inkubator muhiti»da tarbiyalash qanday ayanchli oqibatga olib keladi?",
    quizOptions: [
      "Bola o'ta kuchli va yetakchi shaxs bo'lib yetishadi",
      "Bola hayotdagi oddiy qiyinchiliklarga ham dosh berolmaydigan, mas'uliyatsiz va doimiy qaram shaxsga aylanadi",
      "Hech qanday o'zgarish bo'lmaydi"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Qiyinchiliklarni o'zi yengib ko'rmagan, kichik xatolardan saboq olmagan bola mustaqil hayot bo'ronlarida oson sinadi."
  },
  "osmirlik-inqirozi-va-yechimlar": {
    quizQuestion: "O'smir yoshidagi bola ota-onadan uzoqlashib, xonasiga qamalib olayotgan bo'lsa, ota-ona qanday ko'prik o'rnatishi kerak?",
    quizOptions: [
      "Eshikni sindirib kirib, soatlab ma'ruza o'qish",
      "Ehtiyotkorlik bilan shaxsiy chegaralarini hurmat qilish, bosim o'tkazmay, xohlagan paytida samimiy suhbatga tayyor do'st va maslahatchi ekanini his qildirish",
      "Uni butunlay tark etib, o'z holiga tashlab qo'yish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "O'smirlik — o'zlikni qidirish davri. Bu bosqichda buyruq beruvchi boshliq emas, mehrli va ishonchli do'st bo'lish zarur."
  },
  "kitob-ekran-va-klip-tafakkur": {
    quizQuestion: "Bolani kitob o'qishga qaytarish va uning chuqur tafakkurini asrab qolish uchun eng amaliy qadam qaysi?",
    quizOptions: [
      "Kitob o'qimasa ovqat bermaslik",
      "Uydagi barcha ekranlarni o'chirib, har kuni kechqurun oilaviy 20-30 daqiqa birgalikda sokin kitobxonlik vaqtini joriy qilish",
      "Bolaga faqat audio ertaklar qo'yib berish"
    ],
    correctOptionIndex: 1,
    quizExplanation: "Oila a'zolarining barchasi kitob o'qigan muhitda bola kitobni jazo emas, hayotning eng maroqli qismi deb qabul qiladi."
  },
  "xazinadagi-uch-deraza-va-30-daho": {
    quizQuestion: "«Bolalar xonasidagi 3 ta deraza» (ilm, hikmat va ibrat) qoidasiga ko'ra, buyuk daho shaxslarni tarbiyalashdagi asosiy qurol nima?",
    quizOptions: [
      "Bolani tarixiy qahramonlar, ulamolar va daholarning hayotiy ibrati bilan tanishtirib, qalbida buyuk maqsadlar va yuksak himmatni shakllantirish",
      "Faqat texnika va robototexnikani o'rgatish",
      "Bolani boshqa odamlar bilan gaplashishdan to'sish"
    ],
    correctOptionIndex: 0,
    quizExplanation: "Buyuk shaxslar yuksak maqsad va himmat bilan ulg'ayadilar. Tarixiy daholar va sahobalar hayoti bolaga eng kuchli kompas bo'ladi."
  }
};
