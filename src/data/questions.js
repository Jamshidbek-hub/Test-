// Namunaviy savollar — demo uchun tayyorlangan
// Yangi savollar qo'shish uchun shu formatda davom eting

import { grade5SupplementalQuestions } from './grade5SupplementalQuestions.js'
import { grade5SupplementalQuestions2 } from './grade5SupplementalQuestions2.js'
import { grade6SupplementalQuestions } from './grade6SupplementalQuestions.js'
import { grade7SupplementalQuestions } from './grade7SupplementalQuestions.js'
import { additionalQuestions } from './additionalQuestions.js'
import { additionalQuestions56 } from './additionalQuestions56.js'
import { additionalQuestions78 } from './additionalQuestions78.js'
import { additionalQuestions911 } from './additionalQuestions911.js'

export const questions = [
  // ===== 5-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 1,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "oson",
    savol: "Qadimgi O'zbekiston hududida paydo bo'lgan eng qadimgi davlatlardan biri qaysi?",
    variantlar: ["A) Xorazm", "B) Rim", "C) Misr"],
    togriJavob: 0,
    izoh: "Xorazm — O'rta Osiyodagi eng qadimgi davlatlardan biri bo'lib, O'zbekiston hududida joylashgan."
  },
  {
    id: 2,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "oson",
    savol: "Toshkent shahri qachondan beri odam yashaydigan joy sifatida ma'lum?",
    variantlar: ["A) 2000 yildan ortiq", "B) 500 yil", "C) 100 yil"],
    togriJavob: 0,
    izoh: "Toshkent — 2000 yildan ortiq tarixga ega qadimiy shahar bo'lib, ko'plab arxeologik topilmalar buni tasdiqlaydi."
  },
  {
    id: 3,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "orta",
    savol: "Qadimgi Baqtriya davlati qaysi hududda joylashgan?",
    variantlar: ["A) Shimoliy O'zbekiston", "B) Janubiy O'zbekiston va Shimoliy Afg'oniston", "C) G'arbiy O'zbekiston"],
    togriJavob: 1,
    izoh: "Baqtriya — Surxondaryo viloyati va Shimoliy Afg'oniston hududlarini o'z ichiga olgan qadimgi davlat."
  },
  {
    id: 4,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "orta",
    savol: "Qadimgi So'g'diyona davlatining markazi qaysi shahar bo'lgan?",
    variantlar: ["A) Buxoro", "B) Samarqand", "C) Xiva"],
    togriJavob: 1,
    izoh: "Samarqand (qadimgi nomi — Maroqanda) So'g'diyona davlatining poytaxti bo'lgan."
  },
  {
    id: 5,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "qiyin",
    savol: "Iskandar Zulqarnayn O'rta Osiyoga qachon yurish qilgan?",
    variantlar: ["A) Miloddan avvalgi 329-327-yillarda", "B) Miloddan avvalgi 100-yilda", "C) Milodiy 329-yilda"],
    togriJavob: 0,
    izoh: "Makedoniyalik Iskandar miloddan avvalgi 329-327-yillarda O'rta Osiyoga bostirib kirgan va So'g'diyonani zabt etgan."
  },

  // ===== 5-SINF: JAHON TARIXI =====
  {
    id: 6,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Qadimgi Misr sivilizatsiyasi qaysi daryo bo'yida paydo bo'lgan?",
    variantlar: ["A) Dajla", "B) Nil", "C) Gang"],
    togriJavob: 1,
    izoh: "Qadimgi Misr sivilizatsiyasi Nil daryosi bo'yida paydo bo'lgan va rivojlangan."
  },
  {
    id: 7,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Qadimgi dunyoning yetti mo''jizasidan biri bo'lgan piramidalar qaysi mamlakatda joylashgan?",
    variantlar: ["A) Hindiston", "B) Xitoy", "C) Misr"],
    togriJavob: 2,
    izoh: "Misr piramidalari — qadimgi dunyoning yetti mo''jizasidan yagona saqlanib qolgani."
  },
  {
    id: 8,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "orta",
    savol: "Qadimgi Mesopotamiya qaysi ikki daryo orasida joylashgan?",
    variantlar: ["A) Nil va Kongo", "B) Dajla va Frot", "C) Gang va Hind"],
    togriJavob: 1,
    izoh: "Mesopotamiya — 'ikki daryo orasi' degan ma'noni anglatadi va Dajla hamda Frot daryolari orasida joylashgan."
  },
  {
    id: 9,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "orta",
    savol: "Yozuvni birinchi bo'lib qaysi xalq ixtiro qilgan deb hisoblanadi?",
    variantlar: ["A) Yunonlar", "B) Shumerlar", "C) Rimliklar"],
    togriJavob: 1,
    izoh: "Shumerlar miloddan avvalgi 3500-yillarda mixxat yozuvini ixtiro qilganlar."
  },
  {
    id: 10,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "qiyin",
    savol: "Qadimgi Olimpiya o'yinlari qaysi mamlakatda boshlangan?",
    variantlar: ["A) Rim", "B) Misr", "C) Yunoniston"],
    togriJavob: 2,
    izoh: "Qadimgi Olimpiya o'yinlari miloddan avvalgi 776-yilda Yunonistonning Olimpiya shahrida boshlangan."
  },

  // ===== 6-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 11,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "oson",
    savol: "Buyuk Ipak yo'li qaysi mamlakatlarni bog'lagan?",
    variantlar: ["A) Xitoy va Yevropani", "B) Hindiston va Afrikani", "C) Yaponiya va Amerikani"],
    togriJavob: 0,
    izoh: "Buyuk Ipak yo'li Xitoydan Yevropagacha cho'zilgan va O'rta Osiyo orqali o'tgan savdo yo'li edi."
  },
  {
    id: 12,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "oson",
    savol: "Buxoro shahri o'rta asrlarda qanday nom bilan mashhur bo'lgan?",
    variantlar: ["A) Sharqning darvozasi", "B) Buxoroi sharif", "C) Oltin shahar"],
    togriJavob: 1,
    izoh: "Buxoro 'Buxoroi sharif' (Sharafli Buxoro) deb atalgan, chunki u ilm-fan va din markazi bo'lgan."
  },
  {
    id: 13,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "orta",
    savol: "Arablar O'rta Osiyoni qachon zabt eta boshlagan?",
    variantlar: ["A) V asr", "B) VIII asr boshlarida", "C) X asr"],
    togriJavob: 1,
    izoh: "Arablar VIII asr boshlarida Qutayba ibn Muslim boshchiligida O'rta Osiyoni bosib olganlar."
  },
  {
    id: 14,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "orta",
    savol: "Arab bosqinidan keyin O'rta Osiyoda qaysi din keng tarqalgan?",
    variantlar: ["A) Buddizm", "B) Islom", "C) Xristianlik"],
    togriJavob: 1,
    izoh: "Arab bosqinidan so'ng Islom dini O'rta Osiyoda keng tarqalib, asosiy dinga aylangan."
  },
  {
    id: 15,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "qiyin",
    savol: "Somoniylar davlatining poytaxti qaysi shahar bo'lgan?",
    variantlar: ["A) Samarqand", "B) Buxoro", "C) Urganch"],
    togriJavob: 1,
    izoh: "Somoniylar davlati (819-999) ning poytaxti Buxoro shahri bo'lgan va bu davlat ilm-fan taraqqiyotiga katta hissa qo'shgan."
  },

  // ===== 6-SINF: JAHON TARIXI =====
  {
    id: 16,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "oson",
    savol: "O'rta asrlarda Yevropada qanday tuzum hukmron bo'lgan?",
    variantlar: ["A) Feodal tuzum", "B) Kapitalizm", "C) Sotsializm"],
    togriJavob: 0,
    izoh: "O'rta asrlarda Yevropada feodal tuzum hukmron bo'lib, yerga egalik qilish asosiy boylik manbai hisoblangan."
  },
  {
    id: 17,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "orta",
    savol: "Salib yurishlari qachon boshlangan?",
    variantlar: ["A) 1096-yilda", "B) 1200-yilda", "C) 900-yilda"],
    togriJavob: 0,
    izoh: "Birinchi salib yurishi 1096-yilda boshlangan va maqsad Quddusni musulmonlardan tortib olish edi."
  },
  {
    id: 18,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "oson",
    savol: "O'rta asrlarda Xitoyda qog'oz va bosma ishini kim ixtiro qilgan?",
    variantlar: ["A) Arablar", "B) Xitoyliklar", "C) Hindlar"],
    togriJavob: 1,
    izoh: "Xitoyliklar qog'oz va bosma ish texnologiyasini ixtiro qilganlar, bu kashfiyot keyinchalik butun dunyoga tarqalgan."
  },
  {
    id: 19,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "orta",
    savol: "Mo'g'ul imperiyasini kim asos solgan?",
    variantlar: ["A) Amir Temur", "B) Chingizxon", "C) Boburshoh"],
    togriJavob: 1,
    izoh: "Chingizxon (Temuchin) 1206-yilda Mo'g'ul imperiyasini tashkil etgan va ulkan hududlarni zabt etgan."
  },
  {
    id: 20,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "qiyin",
    savol: "O'rta asrlarda Yevropada tarqalgan 'qora o'lat' (vabo) qaysi asrda eng kuchli bo'lgan?",
    variantlar: ["A) XII asr", "B) XIV asr", "C) XVI asr"],
    togriJavob: 1,
    izoh: "Qora o'lat (vabo) XIV asrda, ayniqsa 1347-1351-yillarda Yevropada tarqalib, aholining uchdan bir qismini qirib tashlagan."
  },

  // ===== 7-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 21,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "oson",
    savol: "Amir Temur qaysi yilda tug'ilgan?",
    variantlar: ["A) 1336-yilda", "B) 1400-yilda", "C) 1450-yilda"],
    togriJavob: 0,
    izoh: "Amir Temur 1336-yil 9-aprelda Kesh (hozirgi Shahrisabz) shahrida tug'ilgan."
  },
  {
    id: 22,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "oson",
    savol: "Amir Temur davlatining poytaxti qaysi shahar bo'lgan?",
    variantlar: ["A) Buxoro", "B) Samarqand", "C) Toshkent"],
    togriJavob: 1,
    izoh: "Amir Temur Samarqandni o'z davlatining poytaxti qilib belgilagan va uni dunyoning eng chiroyli shahriga aylantirgan."
  },
  {
    id: 23,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "orta",
    savol: "Mirzo Ulug'bek qaysi soha bilan mashhur bo'lgan?",
    variantlar: ["A) Harbiy ish", "B) Astronomiya", "C) Tibbiyot"],
    togriJavob: 1,
    izoh: "Mirzo Ulug'bek buyuk astronom va matematik bo'lib, Samarqandda rasadxona qurgan va yulduzlar jadvalini tuzgan."
  },
  {
    id: 24,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "orta",
    savol: "Alisher Navoiy qaysi asrda yashab ijod qilgan?",
    variantlar: ["A) XIII asr", "B) XV asr", "C) XVII asr"],
    togriJavob: 1,
    izoh: "Alisher Navoiy (1441-1501) XV asrda yashagan buyuk o'zbek shoiri va davlat arbobi bo'lgan."
  },
  {
    id: 25,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "qiyin",
    savol: "Amir Temur 1395-yilda qaysi davlatni mag'lubiyatga uchratgan?",
    variantlar: ["A) Usmonli turk davlati", "B) Oltin O'rda", "C) Vizantiya"],
    togriJavob: 1,
    izoh: "Amir Temur 1395-yilda Oltin O'rda xoni To'xtamishni mag'lub etib, Oltin O'rda davlatiga katta zarba bergan."
  },

  // ===== 7-SINF: JAHON TARIXI =====
  {
    id: 26,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "oson",
    savol: "Uyg'onish (Renessans) davri qaysi mamlakatda boshlangan?",
    variantlar: ["A) Fransiya", "B) Italiya", "C) Angliya"],
    togriJavob: 1,
    izoh: "Uyg'onish davri XIV asrda Italiyada boshlangan va san'at, fan va madaniyatning gullab-yashnashiga olib kelgan."
  },
  {
    id: 27,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "orta",
    savol: "Leonardo da Vinchi qaysi sohalar bilan shug'ullangan?",
    variantlar: ["A) Faqat rassom", "B) Rassom, olim va muhandis", "C) Faqat olim"],
    togriJavob: 1,
    izoh: "Leonardo da Vinchi — rassom, olim, muhandis va ixtirochi bo'lgan universal inson."
  },
  {
    id: 28,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "oson",
    savol: "Amerikani kim kashf etgan deb hisoblanadi?",
    variantlar: ["A) Vaska da Gama", "B) Xristofor Kolumb", "C) Fernando Magellan"],
    togriJavob: 1,
    izoh: "Xristofor Kolumb 1492-yilda Amerikani kashf etgan, garchi u Hindistonni topganman deb o'ylagan."
  },
  {
    id: 29,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "orta",
    savol: "Birinchi bo'lib yer sharini aylanib chiqqan ekspeditsiya rahbari kim?",
    variantlar: ["A) Xristofor Kolumb", "B) Fernando Magellan", "C) Amerigo Vespuchchi"],
    togriJavob: 1,
    izoh: "Fernando Magellan 1519-1522-yillarda yer sharini aylanib chiqqan birinchi ekspeditsiyani boshqargan."
  },
  {
    id: 30,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "qiyin",
    savol: "Vaska da Gama qaysi mamlakatga dengiz yo'lini ochgan?",
    variantlar: ["A) Xitoy", "B) Yaponiya", "C) Hindiston"],
    togriJavob: 2,
    izoh: "Portugaliyalik dengizchi Vaska da Gama 1498-yilda Afrika qit'asini aylanib o'tib, Hindistonga dengiz yo'lini ochgan."
  },

  // ===== 8-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 31,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "oson",
    savol: "O'rta Osiyoda XVI-XIX asrlarda qanday xonliklar mavjud bo'lgan?",
    variantlar: ["A) Buxoro, Xiva va Qo'qon", "B) Samarqand va Toshkent", "C) Farg'ona va Andijon"],
    togriJavob: 0,
    izoh: "XVI-XIX asrlarda O'rta Osiyoda Buxoro amirligi, Xiva va Qo'qon xonliklari mavjud bo'lgan."
  },
  {
    id: 32,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "oson",
    savol: "Qo'qon xonligi qaysi hududda joylashgan?",
    variantlar: ["A) Xorazm vohasida", "B) Farg'ona vodiysida", "C) Zarafshon vodiysida"],
    togriJavob: 1,
    izoh: "Qo'qon xonligi (1709-1876) Farg'ona vodiysida joylashgan bo'lib, poytaxti Qo'qon shahri edi."
  },
  {
    id: 33,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "orta",
    savol: "Rossiya imperiyasi Toshkentni qachon bosib olgan?",
    variantlar: ["A) 1865-yilda", "B) 1900-yilda", "C) 1850-yilda"],
    togriJavob: 0,
    izoh: "Rossiya qo'shinlari general Chernayev boshchiligida 1865-yilda Toshkentni bosib olgan."
  },
  {
    id: 34,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "orta",
    savol: "Turkiston general-gubernatorligi qachon tashkil etilgan?",
    variantlar: ["A) 1867-yilda", "B) 1880-yilda", "C) 1900-yilda"],
    togriJavob: 0,
    izoh: "Turkiston general-gubernatorligi 1867-yilda tashkil etilgan va markazi Toshkent shahri bo'lgan."
  },
  {
    id: 35,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "qiyin",
    savol: "1868-yilda Buxoro amiri Rossiya bilan qanday shartnoma tuzgan?",
    variantlar: ["A) Ittifoq shartnomasi", "B) Vassallik shartnomasi", "C) Savdo shartnomasi"],
    togriJavob: 1,
    izoh: "1868-yilda Buxoro amiri Muzaffar Rossiyaga qaram bo'lish (vassallik) shartnomasini imzolashga majbur bo'lgan."
  },

  // ===== 8-SINF: JAHON TARIXI =====
  {
    id: 36,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "oson",
    savol: "Fransiya inqilobi qaysi yilda boshlangan?",
    variantlar: ["A) 1789-yilda", "B) 1800-yilda", "C) 1750-yilda"],
    togriJavob: 0,
    izoh: "Buyuk Fransiya inqilobi 1789-yilda boshlangan va Bastiliya qamoqxonasining olinishi bilan boshlanib ketgan."
  },
  {
    id: 37,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "orta",
    savol: "AQSh Mustaqillik Deklaratsiyasi qachon qabul qilingan?",
    variantlar: ["A) 1776-yil 4-iyul", "B) 1800-yil 1-yanvar", "C) 1750-yil 15-mart"],
    togriJavob: 0,
    izoh: "AQSh Mustaqillik Deklaratsiyasi 1776-yil 4-iyulda qabul qilingan va bu sana AQSh mustaqillik kuni sifatida nishonlanadi."
  },
  {
    id: 38,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "oson",
    savol: "Sanoat inqilobi birinchi bo'lib qaysi mamlakatda boshlangan?",
    variantlar: ["A) Fransiya", "B) Germaniya", "C) Angliya"],
    togriJavob: 2,
    izoh: "Sanoat inqilobi XVIII asrning ikkinchi yarmida Angliyada boshlangan va ishlab chiqarishda katta o'zgarishlarga olib kelgan."
  },
  {
    id: 39,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "orta",
    savol: "Bug' mashinasini takomillashtirgan ixtirochi kim?",
    variantlar: ["A) Jeyms Vatt", "B) Tomas Edison", "C) Isaak Nyuton"],
    togriJavob: 0,
    izoh: "Jeyms Vatt XVIII asrda bug' mashinasini takomillashtirgan va sanoat inqilobining rivojiga katta hissa qo'shgan."
  },
  {
    id: 40,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "qiyin",
    savol: "Sanoat inqilobi natijasida qaysi yangi ijtimoiy sinf paydo bo'lgan?",
    variantlar: ["A) Feodallar", "B) Proletariat (ishchi sinfi)", "C) Dehqonlar"],
    togriJavob: 1,
    izoh: "Sanoat inqilobi natijasida proletariat — fabrika va zavodlarda ishlaydigan ishchi sinfi paydo bo'lgan."
  },

  // ===== 9-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 41,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "oson",
    savol: "Jadidchilik harakati nimani maqsad qilgan?",
    variantlar: ["A) Eski tartiblarni saqlash", "B) Yangi usuldagi ta'lim va islohotlar", "C) Rossiyaga qo'shilish"],
    togriJavob: 1,
    izoh: "Jadidlar yangi usuldagi maktablar ochish, matbuot rivojlantirish va jamiyatni isloh qilishni maqsad qilganlar."
  },
  {
    id: 42,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "orta",
    savol: "Mahmudxo'ja Behbudiy qaysi sohada faoliyat yuritgan?",
    variantlar: ["A) Harbiy ish", "B) Ma'rifatchilik va matbuot", "C) Savdo-sotiq"],
    togriJavob: 1,
    izoh: "Mahmudxo'ja Behbudiy jadidchilik harakatining yetakchilaridan biri bo'lib, gazeta va jurnal nashr etgan, teatr asarlari yozgan."
  },
  {
    id: 43,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "orta",
    savol: "O'zbekistondagi birinchi yangi usuldagi maktab qaysi shahrda ochilgan?",
    variantlar: ["A) Toshkentda", "B) Samarqandda", "C) Buxoroda"],
    togriJavob: 0,
    izoh: "Birinchi jadid maktablaridan biri Toshkentda Munavvarqori Abdurashidxonov tomonidan ochilgan."
  },
  {
    id: 44,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "orta",
    savol: "O'zbekiston SSR qachon tashkil etilgan?",
    variantlar: ["A) 1917-yilda", "B) 1924-yilda", "C) 1936-yilda"],
    togriJavob: 1,
    izoh: "O'zbekiston SSR 1924-yilda milliy-hududiy chegaralanish natijasida tashkil etilgan."
  },
  {
    id: 45,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "qiyin",
    savol: "Sovet davrida O'zbekistonda qaysi siyosat paxtachilikka majburlashga olib kelgan?",
    variantlar: ["A) NEP siyosati", "B) Paxta monopoliyasi siyosati", "C) Industrializatsiya siyosati"],
    togriJavob: 1,
    izoh: "Sovet hukumati O'zbekistonni 'paxta bazasi'ga aylantirgan va paxta monopoliyasi siyosati ekologik va ijtimoiy muammolarga olib kelgan."
  },

  // ===== 9-SINF: JAHON TARIXI =====
  {
    id: 46,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: 'orta',
    savol: "Birinchi jahon urushi qaysi yillarda bo'lib o'tgan?",
    variantlar: ["A) 1914-1918", "B) 1939-1945", "C) 1900-1905"],
    togriJavob: 0,
    izoh: "Birinchi jahon urushi 1914-yildan 1918-yilgacha davom etgan va millionlab odamlar halok bo'lgan."
  },
  {
    id: 47,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: 'orta',
    savol: "Birinchi jahon urushining boshlanishiga sabab bo'lgan voqea nima?",
    variantlar: ["A) Avstriya-Vengriya shahzodasi Frants Ferdinandning o'ldirilishi", "B) Germaniyaning Fransiyaga hujumi", "C) Rossiya inqilobi"],
    togriJavob: 0,
    izoh: "1914-yil 28-iyunda Sarayevoda Avstriya-Vengriya shahzodasi Frants Ferdinandning o'ldirilishi urushning boshlanishiga sabab bo'lgan."
  },
  {
    id: 48,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: 'orta',
    savol: "Ikkinchi jahon urushi qaysi yillarda bo'lib o'tgan?",
    variantlar: ["A) 1914-1918", "B) 1939-1945", "C) 1950-1953"],
    togriJavob: 1,
    izoh: "Ikkinchi jahon urushi 1939-yil 1-sentyabrda boshlangan va 1945-yil 2-sentyabrda yakunlangan."
  },
  {
    id: 49,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: 'orta',
    savol: "Ikkinchi jahon urushida fashizm mafkurasini ilgari surgan Germaniya rahbari kim edi?",
    variantlar: ["A) Benito Mussolini", "B) Adolf Gitler", "C) Iosif Stalin"],
    togriJavob: 1,
    izoh: "Adolf Gitler natsistik Germaniyaning rahbari bo'lib, fashizm mafkurasini ilgari surgan va Ikkinchi jahon urushini boshlagan."
  },
  {
    id: 50,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: 'orta',
    savol: "Ikkinchi jahon urushida O'zbekistonlik qancha kishi front safarbarligiga chaqirilgan?",
    variantlar: ["A) Taxminan 500 ming", "B) Taxminan 1,5 million", "C) Taxminan 3 million"],
    togriJavob: 1,
    izoh: "Ikkinchi jahon urushida O'zbekistondan taxminan 1,5 million kishi front safarbarligiga chaqirilgan va ulardan ko'plari qaytmagan."
  },

  // ===== 10-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 51,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "oson",
    savol: "O'zbekiston mustaqilligini qachon e'lon qilgan?",
    variantlar: ["A) 1991-yil 1-sentyabr", "B) 1990-yil 1-yanvar", "C) 1992-yil 8-dekabr"],
    togriJavob: 0,
    izoh: "O'zbekiston Respublikasi 1991-yil 1-sentyabrda davlat mustaqilligini e'lon qilgan."
  },
  {
    id: 52,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
    variantlar: ["A) 1991-yil 1-sentyabr", "B) 1992-yil 8-dekabr", "C) 1995-yil 1-yanvar"],
    togriJavob: 1,
    izoh: "O'zbekiston Respublikasi Konstitutsiyasi 1992-yil 8-dekabrda qabul qilingan."
  },
  {
    id: 53,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "orta",
    savol: "O'zbekiston Respublikasining birinchi Prezidenti kim bo'lgan?",
    variantlar: ["A) Shavkat Mirziyoyev", "B) Islom Karimov", "C) Abdulhashim Muitdinov"],
    togriJavob: 1,
    izoh: "Islom Karimov O'zbekiston Respublikasining birinchi Prezidenti bo'lib, 1991-yilda saylangan."
  },
  {
    id: 54,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "orta",
    savol: "O'zbekiston qaysi xalqaro tashkilotga 1992-yilda a'zo bo'lgan?",
    variantlar: ["A) Yevropa Ittifoqi", "B) Birlashgan Millatlar Tashkiloti", "C) NATO"],
    togriJavob: 1,
    izoh: "O'zbekiston 1992-yil 2-martda Birlashgan Millatlar Tashkilotiga a'zo bo'lgan."
  },
  {
    id: 55,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "qiyin",
    savol: "O'zbekiston Respublikasi davlat ramzlari — bayroq, gerb va madhiya qachon tasdiqlangan?",
    variantlar: ["A) 1991-yilda", "B) 1992-yilda", "C) 1993-yilda"],
    togriJavob: 1,
    izoh: "O'zbekiston davlat bayrog'i 1991-yilda, gerb va madhiya esa 1992-yilda tasdiqlangan."
  },

  // ===== 10-SINF: JAHON TARIXI =====
  {
    id: 56,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "oson",
    savol: "Sovuq urush qaysi ikki davlat o'rtasida bo'lgan?",
    variantlar: ["A) AQSh va Xitoy", "B) AQSh va SSSR", "C) Angliya va Fransiya"],
    togriJavob: 1,
    izoh: "Sovuq urush (1947-1991) AQSh va SSSR o'rtasidagi siyosiy, iqtisodiy va mafkuraviy qarama-qarshilik davri edi."
  },
  {
    id: 57,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "orta",
    savol: "Berlin devori qachon qurilgan?",
    variantlar: ["A) 1949-yilda", "B) 1961-yilda", "C) 1975-yilda"],
    togriJavob: 1,
    izoh: "Berlin devori 1961-yilda qurilgan va u G'arbiy va Sharqiy Berlinni ajratib turgan. 1989-yilda buzilgan."
  },
  {
    id: 58,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "oson",
    savol: "Hindiston qachon Britaniya mustamlakachiligi dan mustaqillikka erishgan?",
    variantlar: ["A) 1945-yilda", "B) 1947-yilda", "C) 1950-yilda"],
    togriJavob: 1,
    izoh: "Hindiston 1947-yil 15-avgustda Britaniya mustamlakachiligi dan mustaqillikka erishgan."
  },
  {
    id: 59,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "orta",
    savol: "Afrika qit'asida dekolonizatsiya jarayoni eng faol qaysi yillarda kechgan?",
    variantlar: ["A) 1940-yillar", "B) 1960-yillar", "C) 1980-yillar"],
    togriJavob: 1,
    izoh: "1960-yil 'Afrika yili' deb atalgan, chunki 17 ta Afrika davlati mustaqillikka erishgan."
  },
  {
    id: 60,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "qiyin",
    savol: "Karib dengizi inqirozi (1962) qaysi mamlakat bilan bog'liq edi?",
    variantlar: ["A) Meksika", "B) Kuba", "C) Venesuela"],
    togriJavob: 1,
    izoh: "1962-yilgi Karib dengizi inqirozi SSSR ning Kubada yadro raketalarini joylashtirishi bilan bog'liq bo'lib, dunyoni yadro urushi yoqasiga olib kelgan."
  },

  // ===== 11-SINF: O'ZBEKISTON TARIXI =====
  {
    id: 61,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasining milliy valyutasi nima?",
    variantlar: ["A) Dollar", "B) So'm", "C) Rubl"],
    togriJavob: 1,
    izoh: "O'zbekiston Respublikasining milliy valyutasi — so'm bo'lib, 1994-yilda muomalaga kiritilgan."
  },
  {
    id: 62,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasining poytaxti qaysi shahar?",
    variantlar: ["A) Samarqand", "B) Buxoro", "C) Toshkent"],
    togriJavob: 2,
    izoh: "Toshkent — O'zbekiston Respublikasining poytaxti va eng yirik shahri."
  },
  {
    id: 63,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "orta",
    savol: "O'zbekistonda 'Yangi O'zbekiston' strategiyasi qaysi yilda e'lon qilingan?",
    variantlar: ["A) 2017-yilda", "B) 2020-yilda", "C) 2022-yilda"],
    togriJavob: 0,
    izoh: "2017-yilda O'zbekistonda keng qamrovli islohotlar boshlangan va 'Harakatlar strategiyasi' qabul qilingan."
  },
  {
    id: 64,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "orta",
    savol: "O'zbekistonda Samarqand, Buxoro va Xiva qaysi xalqaro tashkilot ro'yxatiga kiritilgan?",
    variantlar: ["A) NATO", "B) YUNESKO Jahon merosi", "C) Yevropa Ittifoqi"],
    togriJavob: 1,
    izoh: "Samarqand, Buxoro va Xivaning tarixiy markazlari YUNESKO Jahon merosi ro'yxatiga kiritilgan."
  },
  {
    id: 65,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "qiyin",
    savol: "O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev qachon saylangan?",
    variantlar: ["A) 2016-yilda", "B) 2018-yilda", "C) 2020-yilda"],
    togriJavob: 0,
    izoh: "Shavkat Mirziyoyev 2016-yil 4-dekabrda O'zbekiston Respublikasi Prezidenti etib saylangan."
  },

  // ===== 11-SINF: JAHON TARIXI =====
  {
    id: 66,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: 'orta',
    savol: "Sovet Ittifoqi qachon parchalangan?",
    variantlar: ["A) 1989-yilda", "B) 1991-yilda", "C) 1993-yilda"],
    togriJavob: 1,
    izoh: "SSSR 1991-yil 26-dekabrda rasman tarqatib yuborilgan."
  },
  {
    id: 67,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "orta",
    savol: "Yevropa Ittifoqi (EU) qachon tashkil etilgan?",
    variantlar: ["A) 1957-yilda", "B) 1992-yilda", "C) 2000-yilda"],
    togriJavob: 1,
    izoh: "Yevropa Ittifoqi 1992-yilda Maastrixt shartnomasi asosida rasman tashkil etilgan."
  },
  {
    id: 68,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "oson",
    savol: "Globallashuv jarayonida qaysi texnologiya eng katta rol o'ynadi?",
    variantlar: ["A) Bug' mashinalari", "B) Internet", "C) Telegraf"],
    togriJavob: 1,
    izoh: "Internet globallashuv jarayonida eng katta rol o'ynab, dunyoni yagona axborot makoni ga aylantirdi."
  },
  {
    id: 69,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "orta",
    savol: "Jahon Savdo Tashkiloti (JST) qachon tashkil etilgan?",
    variantlar: ["A) 1985-yilda", "B) 1995-yilda", "C) 2005-yilda"],
    togriJavob: 1,
    izoh: "Jahon Savdo Tashkiloti (JST/WTO) 1995-yil 1-yanvardan faoliyat boshlagan va xalqaro savdoni tartibga soladi."
  },
  {
    id: 70,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "qiyin",
    savol: "BMT Xavfsizlik Kengashining doimiy a'zolari nechta davlatdan iborat?",
    variantlar: ["A) 3 ta", "B) 5 ta", "C) 7 ta"],
    togriJavob: 1,
    izoh: "BMT Xavfsizlik Kengashining 5 ta doimiy a'zosi bor: AQSh, Rossiya, Xitoy, Fransiya va Buyuk Britaniya."
  },

  // ===== QO'SHIMCHA SAVOLLAR — HAR BIR SINF UCHUN =====

  // 5-sinf qo'shimcha
  {
    id: 71,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "qiyin",
    savol: "Qadimgi O'rta Osiyoda zardushtiylik dinining muqaddas kitobi nima deb atalgan?",
    variantlar: ["A) Avesto", "B) Quron", "C) Veda"],
    togriJavob: 0,
    izoh: "Avesto — zardushtiylik dinining muqaddas kitobi bo'lib, qadimgi O'rta Osiyoda keng tarqalgan."
  },
  {
    id: 72,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "qiyin",
    savol: "Qadimgi Hindistonda qaysi yozuv tizimi ishlatilgan?",
    variantlar: ["A) Mixxat yozuvi", "B) Ierogliflar", "C) Sanskrit"],
    togriJavob: 2,
    izoh: "Sanskrit — qadimgi Hindistonning adabiy va diniy tili bo'lib, ko'plab asarlar shu tilda yozilgan."
  },

  // 6-sinf qo'shimcha
  {
    id: 73,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "qiyin",
    savol: "Abu Ali ibn Sino qaysi asarda tibbiyot fanini tizimlashtirgan?",
    variantlar: ["A) Al-Jabr", "B) Tib qonunlari", "C) Donishnoma"],
    togriJavob: 1,
    izoh: "Abu Ali ibn Sino (980-1037) 'Tib qonunlari' asarida tibbiyot fanini tizimlashtirgan va bu asar asrlar davomida darslik sifatida ishlatilgan."
  },
  {
    id: 74,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "qiyin",
    savol: "Xitoy buyuk devorining qurilishi qaysi sulola davrida boshlangan?",
    variantlar: ["A) Sin sulolasi", "B) Tan sulolasi", "C) Min sulolasi"],
    togriJavob: 0,
    izoh: "Xitoy buyuk devorining qurilishi miloddan avvalgi III asrda Sin sulolasi imperatori Shi Xuandi davrida boshlangan."
  },

  // 7-sinf qo'shimcha
  {
    id: 75,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "qiyin",
    savol: "Zahiriddin Muhammad Bobur qaysi davlatga asos solgan?",
    variantlar: ["A) Eron", "B) Boburiylar davlati (Hindiston)", "C) Usmonli turk davlati"],
    togriJavob: 1,
    izoh: "Bobur (1483-1530) — Temurning avlodi bo'lib, Hindistonda Boburiylar (Mo'g'ullar) imperiyasiga asos solgan."
  },
  {
    id: 76,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "qiyin",
    savol: "Nikolay Kopernik qanday ilmiy g'oyani ilgari surgan?",
    variantlar: ["A) Yer yassi shaklda", "B) Quyosh Yerning atrofida aylanadi", "C) Yer Quyosh atrofida aylanadi"],
    togriJavob: 2,
    izoh: "Nikolay Kopernik geliotsentrik nazariyani ilgari surib, Yer va boshqa sayyoralar Quyosh atrofida aylanishini isbotlagan."
  },

  // 8-sinf qo'shimcha
  {
    id: 77,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "qiyin",
    savol: "Muhammad Rahimxon II (Feruz) Xiva xonligida qanday islohotlar o'tkazgan?",
    variantlar: ["A) Harbiy islohotlar", "B) Madaniy islohotlar va ilm-fan homiylik", "C) Sanoat islohotlari"],
    togriJavob: 1,
    izoh: "Muhammad Rahimxon II (Feruz) XIX asr oxirida Xiva xonligida madaniyat va ilm-fan rivojiga katta hissa qo'shgan, she'riyat bilan shug'ullangan."
  },
  {
    id: 78,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "Napoleon Bonapart qaysi jangda yakuniy mag'lubiyatga uchragan?",
    variantlar: ["A) Trafalgar jangi", "B) Vaterloo jangi", "C) Borodino jangi"],
    togriJavob: 1,
    izoh: "Napoleon Bonapart 1815-yilda Vaterloo jangida yakuniy mag'lubiyatga uchragan va surgun qilingan."
  },

  // 9-sinf qo'shimcha
  {
    id: 79,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "qiyin",
    savol: "1937-1938-yillardagi qatag'on siyosati natijasida O'zbekistonda kimlar qurbonlikka uchragan?",
    variantlar: ["A) Faqat harbiylar", "B) Ziyolilar, yozuvchilar, davlat arboblari", "C) Faqat dehqonlar"],
    togriJavob: 1,
    izoh: "1937-1938-yillardagi qatag'on siyosatida O'zbekistonning ko'plab ziyolilari, yozuvchilari, olimlari va davlat arboblari qurbonlikka uchragan."
  },
  {
    id: 80,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "Birinchi jahon urushidan keyin qaysi tashkilot tashkil etilgan?",
    variantlar: ["A) Birlashgan Millatlar Tashkiloti", "B) Millatlar Ligasi", "C) NATO"],
    togriJavob: 1,
    izoh: "Birinchi jahon urushidan keyin 1920-yilda Millatlar Ligasi tashkil etilgan, ammo u ikkinchi jahon urushini oldini ololmagan."
  },

  // 10-sinf qo'shimcha
  {
    id: 81,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "qiyin",
    savol: "O'zbekiston SSR Oliy Kengashi davlat suverenitetini qachon e'lon qilgan?",
    variantlar: ["A) 1989-yil 21-oktyabr", "B) 1990-yil 20-iyun", "C) 1991-yil 31-avgust"],
    togriJavob: 1,
    izoh: "O'zbekiston SSR Oliy Kengashi 1990-yil 20-iyunda davlat suverenitetini e'lon qilgan, bu mustaqillik sari muhim qadam bo'lgan."
  },
  {
    id: 82,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "qiyin",
    savol: "Janubiy Afrikada aparteid tuzumi qachon bekor qilingan?",
    variantlar: ["A) 1980-yilda", "B) 1991-yilda", "C) 1994-yilda"],
    togriJavob: 2,
    izoh: "Janubiy Afrikada aparteid tuzumi 1994-yilda bekor qilingan va Nelson Mandela mamlakatning birinchi qora tanli prezidenti bo'lgan."
  },

  // 11-sinf qo'shimcha
  {
    id: 83,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "qiyin",
    savol: "O'zbekiston 2017-yilda qaysi davlatlar bilan munosabatlarini sezilarli darajada yaxshilagan?",
    variantlar: ["A) Yevropa davlatlari", "B) Qo'shni O'rta Osiyo davlatlari", "C) Janubiy Amerika davlatlari"],
    togriJavob: 1,
    izoh: "2017-yildan boshlab O'zbekiston qo'shni O'rta Osiyo davlatlari — Qirg'iziston, Tojikiston, Turkmaniston va Qozog'iston bilan munosabatlarini sezilarli darajada yaxshilagan."
  },
  {
    id: 84,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "Parij iqlim kelishuvi qachon imzolangan?",
    variantlar: ["A) 2010-yilda", "B) 2015-yilda", "C) 2020-yilda"],
    togriJavob: 1,
    izoh: "Parij iqlim kelishuvi 2015-yilda imzolangan bo'lib, global isish va iqlim o'zgarishiga qarshi kurashni maqsad qilgan."
  },

  // ===== YANA QO'SHIMCHA SAVOLLAR =====

  // 5-sinf yana
  {
    id: 85,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "oson",
    savol: "Qadimgi davrlarda O'rta Osiyoda qanday xo'jalik turi asosiy bo'lgan?",
    variantlar: ["A) Sanoat", "B) Dehqonchilik va chorvachilik", "C) Savdo"],
    togriJavob: 1,
    izoh: "Qadimgi O'rta Osiyoda dehqonchilik va chorvachilik asosiy xo'jalik turlari bo'lgan, ayniqsa sug'orma dehqonchilik rivojlangan."
  },
  {
    id: 86,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "orta",
    savol: "Qadimgi Rimda respublika tuzumi qachon o'rnatilgan?",
    variantlar: ["A) Miloddan avvalgi 509-yilda", "B) Milodiy 100-yilda", "C) Miloddan avvalgi 1000-yilda"],
    togriJavob: 0,
    izoh: "Rim respublikasi miloddan avvalgi 509-yilda o'rnatilgan, so'ngra miloddan avvalgi 27-yilda imperiyaga aylangan."
  },

  // 6-sinf yana
  {
    id: 87,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "orta",
    savol: "Al-Xorazmiy qaysi fan sohasida mashhur bo'lgan?",
    variantlar: ["A) Tibbiyot", "B) Matematika va astronomiya", "C) Falsafa"],
    togriJavob: 1,
    izoh: "Muhammad ibn Muso al-Xorazmiy (783-850) matematika va astronomiya sohasida buyuk kashfiyotlar qilgan, algebra faniga asos solgan."
  },
  {
    id: 88,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "orta",
    savol: "Karl Buyuk qaysi imperiyani boshqargan?",
    variantlar: ["A) Vizantiya imperiyasi", "B) Frank imperiyasi", "C) Rim imperiyasi"],
    togriJavob: 1,
    izoh: "Karl Buyuk (Charlemagne) VIII-IX asrlarda Frank imperiyasini boshqargan va G'arbiy Yevropa tarixida muhim rol o'ynagan."
  },

  // 7-sinf yana
  {
    id: 89,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "orta",
    savol: "Amir Temur qaysi jangda Usmonli turk sultoni Boyazidni mag'lub etgan?",
    variantlar: ["A) Ankara jangi (1402)", "B) Samarqand jangi", "C) Buxoro jangi"],
    togriJavob: 0,
    izoh: "Amir Temur 1402-yilda Ankara jangida Usmonli turk sultoni Boyazid Yildirimni mag'lub etgan va asir olgan."
  },
  {
    id: 90,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "orta",
    savol: "Buyuk geografik kashfiyotlar qaysi asrlarda amalga oshirilgan?",
    variantlar: ["A) XII-XIII asrlar", "B) XV-XVI asrlar", "C) XVIII-XIX asrlar"],
    togriJavob: 1,
    izoh: "Buyuk geografik kashfiyotlar XV-XVI asrlarda amalga oshirilgan va yangi qit'alar, dengiz yo'llari kashf etilgan."
  },

  // 8-sinf yana
  {
    id: 91,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "qiyin",
    savol: "1916-yildagi O'rta Osiyodagi qo'zg'olon nimaga qarshi qaratilgan edi?",
    variantlar: ["A) Soliq oshirilishiga", "B) Urushga safarbar qilinishga", "C) Din taqiqlanishiga"],
    togriJavob: 1,
    izoh: "1916-yilda Rossiya hukumati O'rta Osiyo xalqlarini Birinchi jahon urushidagi mudofaa ishlariga safarbar qilmoqchi bo'lgan, bunga qarshi katta qo'zg'olon ko'tarilgan."
  },
  {
    id: 92,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "orta",
    savol: "Qulchilikni bekor qilish harakati qaysi mamlakatda eng kuchli bo'lgan?",
    variantlar: ["A) Fransiya", "B) AQSh", "C) Rossiya"],
    togriJavob: 1,
    izoh: "AQShda qulchilikka qarshi harakat kuchli bo'lib, 1861-1865-yillardagi fuqarolar urushidan so'ng qulchilik bekor qilingan."
  },

  // 9-sinf yana
  {
    id: 93,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "qiyin",
    savol: "Abdurauf Fitrat qaysi asarlari bilan mashhur?",
    variantlar: ["A) Harbiy asarlar", "B) 'Munozara' va 'Hind sayyohi qissasi'", "C) Matematika darsliklari"],
    togriJavob: 1,
    izoh: "Abdurauf Fitrat (1886-1938) jadidchilik harakatining nazariyotchisi bo'lib, 'Munozara' va 'Hind sayyohi qissasi' asarlari bilan tanilgan."
  },
  {
    id: 94,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "orta",
    savol: "Ikkinchi jahon urushi qaysi voqea bilan yakunlangan?",
    variantlar: ["A) Berlin devorining qurilishi", "B) Yaponiyaning taslim bo'lishi", "C) SSSR tashkil etilishi"],
    togriJavob: 1,
    izoh: "Ikkinchi jahon urushi 1945-yil 2-sentyabrda Yaponiyaning taslim bo'lishi bilan rasman yakunlangan."
  },

  // 10-sinf yana
  {
    id: 95,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "orta",
    savol: "Mustaqillik e'lon qilinganidan keyin O'zbekistonda qanday iqtisodiy tizimga o'tilgan?",
    variantlar: ["A) Rejali iqtisodiyot", "B) Bozor iqtisodiyoti", "C) Aralash iqtisodiyot"],
    togriJavob: 1,
    izoh: "Mustaqillikdan so'ng O'zbekiston rejali iqtisodiyotdan bozor iqtisodiyotiga bosqichma-bosqich o'tish yo'lini tanlagan."
  },
  {
    id: 96,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "orta",
    savol: "NATO harbiy ittifoqi qachon tashkil etilgan?",
    variantlar: ["A) 1945-yilda", "B) 1949-yilda", "C) 1955-yilda"],
    togriJavob: 1,
    izoh: "NATO (Shimoliy Atlantika shartnomasi tashkiloti) 1949-yilda tashkil etilgan va G'arb davlatlarining harbiy ittifoqi sifatida faoliyat yuritgan."
  },

  // 11-sinf yana
  {
    id: 97,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "orta",
    savol: "O'zbekiston qaysi mintaqaviy tashkilotning a'zosi?",
    variantlar: ["A) Yevropa Ittifoqi", "B) Shanxay Hamkorlik Tashkiloti (ShHT)", "C) ASEAN"],
    togriJavob: 1,
    izoh: "O'zbekiston Shanxay Hamkorlik Tashkiloti (ShHT) ning a'zosi bo'lib, xavfsizlik va iqtisodiy hamkorlik masalalarida ishtirok etadi."
  },
  {
    id: 98,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "orta",
    savol: "XXI asrda dunyoning eng tez rivojlanayotgan iqtisodiyotlardan biri qaysi mamlakat?",
    variantlar: ["A) Xitoy", "B) Fransiya", "C) Kanada"],
    togriJavob: 0,
    izoh: "Xitoy XXI asrda dunyoning eng tez rivojlanayotgan iqtisodiyotlaridan biri bo'lib, jahon iqtisodiyotida muhim o'rin egallaydi."
  },

  // Yana bir nechta savol
  {
    id: 99,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "orta",
    savol: "Qadimgi Xorazm davlatining poytaxti qaysi shahar bo'lgan?",
    variantlar: ["A) Ko'hna Urganch", "B) Samarqand", "C) Toshkent"],
    togriJavob: 0,
    izoh: "Qadimgi Xorazm davlatining poytaxti turli davrlarda turlicha bo'lgan, eng mashhuri Ko'hna Urganch hisoblanadi."
  },
  {
    id: 100,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "qiyin",
    savol: "Abu Rayhon Beruniy qaysi fan sohalarida mashhur?",
    variantlar: ["A) Faqat astronomiya", "B) Astronomiya, matematika, geografiya va mineralogiya", "C) Faqat tibbiyot"],
    togriJavob: 1,
    izoh: "Abu Rayhon Beruniy (973-1048) ko'p tarmoqli olim bo'lib, astronomiya, matematika, geografiya, mineralogiya va boshqa ko'plab sohalarda ilmiy asarlar yozgan."
  }
,

  // ===== 5-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 101,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "oson",
    savol: "O'zbekiston hududidagi ilk paleolit davriga oid eng qadimgi odam manzilgohlaridan biri qaysi?",
    variantlar: ["A) Selung'ur g'ori", "B) Afrosiyob", "C) Tuproqqal'a"],
    togriJavob: 0,
    izoh: "Farg'ona vodiysidagi Selung'ur g'ori O'zbekiston hududidagi qadimgi tosh (ilk paleolit) davriga oid eng mashhur manzilgoh hisoblanadi."
  },
  {
    id: 102,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "orta",
    savol: "Surxondaryodagi Teshiktosh g'oridan qaysi qadimgi odam turining suyak qoldiqlari topilgan?",
    variantlar: ["A) Sinantrop", "B) Neandertal odam", "C) Kromanyon odam"],
    togriJavob: 1,
    izoh: "1938-yilda arxeolog A.P. Okladnikov Teshiktosh g'oridan 8-9 yoshli neandertal bola suyagini topgan."
  },
  {
    id: 103,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "orta",
    savol: "Mezolit davriga oid qizil bo'yoq bilan chizilgan qadimgi ov manzaralari O'zbekistonning qaysi darasida uchraydi?",
    variantlar: ["A) Sarmishsoy", "B) Ilonsoy", "C) Zarautsoy"],
    togriJavob: 2,
    izoh: "Surxondaryo viloyatining Zarautsoy darasida mezolit davriga oid, yovvoyi buqalar va itlar bilan ov qilish tasvirlangan nodir qoyatosh rasmlari saqlangan."
  },
  {
    id: 104,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "qiyin",
    savol: "O'zbekiston hududida jez (bronza) davriga oid ilk shahar tipidagi arxeologik yodgorlik qaysi?",
    variantlar: ["A) Jarqo'ton", "B) Jonbosqal'a", "C) Varaxsha"],
    togriJavob: 0,
    izoh: "Surxondaryodagi Jarqo'ton manzilgohi o'zining ibodatxonasi, mudofaa devori va hunarmandchilik mahallalari bilan O'zbekistondagi eng qadimgi shahar hisoblanadi."
  },
  {
    id: 105,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "oson",
    savol: "Xitoy yozma manbalarida 'samoviy tulporlar yurti' deb ta'riflangan qadimgi Farg'ona davlati nima deb atalgan?",
    variantlar: ["A) Kushon", "B) Dovan", "C) Sug'd"],
    togriJavob: 1,
    izoh: "Miloddan avvalgi II-I asrlardagi Xitoy manbalarida Farg'ona vodiysida tashkil topgan boy va qudratli davlat 'Dovan' (Parkana) deb atalgan."
  },
  {
    id: 106,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "orta",
    savol: "Eron podshosi Doro I qo'shinini chalg'itib, suvsiz sahroda halok qilgan sak cho'poni kim?",
    variantlar: ["A) To'maris", "B) Spitamen", "C) Shiroq"],
    togriJavob: 2,
    izoh: "Sak cho'poni Shiroq o'z vatanini bosqinchilardan asrash uchun o'z tanasini tilkalab, Doro I qo'shinini sahro ichkarisiga adashtirib olib kirgan va xalq qahramoniga aylangan."
  },
  {
    id: 107,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "orta",
    savol: "Miloddan avvalgi 530-yilda O'rta Osiyo tuprog'iga bostirib kirgan Ahamoniylar podshosi Kir II ustidan qaysi malika g'alaba qozongan?",
    variantlar: ["A) To'maris", "B) Zarina", "C) Atossa"],
    togriJavob: 0,
    izoh: "Massagetlar yetakchisi malika To'maris o'z jangchilari bilan birga bosqinchi Eron podshosi Kir II ni tor-mor qilgan va uning boshini qon to'ldirilgan meshga solgan."
  },
  {
    id: 108,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "qiyin",
    savol: "Aleksandr Makedonskiyga qarshi Movarounnahrda uch yil davomida (miloddan avvalgi 329-327 yillar) partizanlik kurashini olib borgan so'g'd qahramoni kim?",
    variantlar: ["A) Oksart", "B) Spitamen", "C) Bess"],
    togriJavob: 1,
    izoh: "Spitamen So'g'diyona va Baqtriyada Makedoniyalik Iskandar qo'shinlariga ketma-ket qaqshatqich zarbalar berib, ozodlik harakatiga rahbarlik qilgan."
  },

  // ===== 5-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 109,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Qadimgi Yunonistondagi mustaqil shahar-davlatlar qanday nomlangan?",
    variantlar: ["A) Koloniya", "B) Metropoliya", "C) Polis"],
    togriJavob: 2,
    izoh: "Qadimgi Yunonistonda har bir mustaqil shahar va uning atrofi 'polis' deb atalgan, eng qudratli polislarga Afina va Sparta misol bo'ladi."
  },
  {
    id: 110,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "orta",
    savol: "Insoniyat tarixida tovushlarga asoslangan birinchi fonetik alifboni qaysi xalq yaratgan?",
    variantlar: ["A) Finikiyaliklar", "B) Shumerlar", "C) Misrliklar"],
    togriJavob: 0,
    izoh: "O'rta yer dengizining sharqiy sohilida yashagan dengizchi finikiyaliklar 22 ta undosh harfdan iborat ilk alifboni kashf etishgan."
  },
  {
    id: 111,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "orta",
    savol: "Qadimgi Rimda gladiatorlar janglari va ommaviy tomoshalar o'tkaziladigan ulkan amfiteatr nima deb atalgan?",
    variantlar: ["A) Parfenon", "B) Kolizey", "C) Akropol"],
    togriJavob: 1,
    izoh: "Rimda milodiy 80-yilda Flaviylar sulolasi tomonidan qurib bitkazilgan Kolizey 50 mingdan ziyod tomoshabinni sig'dira olgan."
  },
  {
    id: 112,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "qiyin",
    savol: "Qadimgi Afinada demokratiya va xalq boshqaruvi ayniqsa qaysi davlat arbobi davrida yuksak cho'qqiga chiqqan?",
    variantlar: ["A) Demosfen", "B) Perikl", "C) Solon"],
    togriJavob: 1,
    izoh: "Miloddan avvalgi V asrda strateg Perikl davrida Afina demokratiyasi, me'morchiligi va san'ati mislsiz darajada rivojlangan."
  },
  {
    id: 113,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "oson",
    savol: "Qadimgi Bobil podsholigining tosh ustunga o'yib yozilgan eng qadimgi yozma qonunlari kimga tegishli?",
    variantlar: ["A) Navuxodonosor", "B) Gilgamesh", "C) Xammurapi"],
    togriJavob: 2,
    izoh: "Miloddan avvalgi XVIII asrda Bobil podshosi Xammurapi 282 moddadan iborat qonunlar to'plamini tuzib, adolatli boshqaruv o'rnatishga harakat qilgan."
  },
  {
    id: 114,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "orta",
    savol: "Hind daryosi vodiysida miloddan avvalgi III-II ming yilliklarda gullab-yashnagan qadimgi shahar sivilizatsiyasi qaysi?",
    variantlar: ["A) Harappa va Moxenjo-Daro", "B) Memfis va Fiva", "C) Bobil va Nineviya"],
    togriJavob: 0,
    izoh: "Hind vodiysidagi Harappa va Moxenjo-Daro shaharlari qadimgi dunyoda to'g'ri rejalashtirilgan ko'chalari va kanalizatsiya tizimi bilan ajralib turgan."
  },
  {
    id: 115,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "qiyin",
    savol: "Qadimgi Xitoyda ilk bor tarqoq podsholiklarni yagona imperiyaga birlashtirgan birinchi imperator kim?",
    variantlar: ["A) Xan Gandi", "B) Sin Shixuandi", "C) Lyu Ban"],
    togriJavob: 1,
    izoh: "Miloddan avvalgi 221-yilda Sin Shixuandi butun Xitoyni yagona markazlashgan davlatga birlashtirgan va Buyuk Xitoy devorini qurishni boshlagan."
  },

  // ===== 6-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 116,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "oson",
    savol: "VI asrda (552-yilda) Oltoy va O'rta Osiyoda vujudga kelgan ulkan davlat qanday nomlangan?",
    variantlar: ["A) Kushon podsholigi", "B) Eftaliylar davlati", "C) Turk xoqonligi"],
    togriJavob: 2,
    izoh: "Bumin xoqon tomonidan 552-yilda asos solingan Turk xoqonligi O'rta Osiyo va butun Yevroosiyo dashtlarida hukmronlik qilgan qudratli davlatga aylangan."
  },
  {
    id: 117,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "orta",
    savol: "Qoraxoniylar davlatida islom dini qaysi yilda rasmiy davlat dini deb e'lon qilindi?",
    variantlar: ["A) 960-yilda", "B) 751-yilda", "C) 1040-yilda"],
    togriJavob: 0,
    izoh: "960-yilda Qoraxoniylar hukmdori Sotuq Bug'roxon (Abdulkarim) davrida islom dini davlatning rasmiy dini deb e'tirof etildi."
  },
  {
    id: 118,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "orta",
    savol: "XI asrda yaratilgan 'Qutadg'u bilig' (Saodatga eltuvchi bilim) didaktik asarining muallifi kim?",
    variantlar: ["A) Ahmad Yassaviy", "B) Yusuf Xos Hojib", "C) Mahmud Qoshg'ariy"],
    togriJavob: 1,
    izoh: "Yusuf Xos Hojib 1069-1070-yillarda Qashqarda yozilgan 'Qutadg'u bilig' dostonida adolatli jamiyat va odil hukmdor fazilatlarini madh etgan."
  },
  {
    id: 119,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "qiyin",
    savol: "Turkiy tillarning birinchi qomusiy lug'ati — 'Devonu lug'otit turk' asari muallifi kim?",
    variantlar: ["A) Al-Xorazmiy", "B) Ahmad Yugnakiy", "C) Mahmud Koshg'ariy"],
    togriJavob: 2,
    izoh: "Mahmud Koshg'ariy XI asrda turkiy xalqlarning boy tili, maqollari, she'rlari va xaritasini o'z ichiga olgan bebaho 'Devonu lug'otit turk' asarini yaratdi."
  },
  {
    id: 120,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "oson",
    savol: "VIII asr boshlarida Movarounnahrni arab xalifaligiga bo'ysundirishga boshchilik qilgan noib va lashkarboshi kim?",
    variantlar: ["A) Qutayba ibn Muslim", "B) Horun ar-Rashid", "C) Tariq ibn Ziyod"],
    togriJavob: 0,
    izoh: "705-715-yillarda Xuroson noibi Qutayba ibn Muslim Poykend, Buxoro, Samarqand va Xorazm shaharlarini egallagan."
  },
  {
    id: 121,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "orta",
    savol: "VIII asrda arab xalifaligiga qarshi 10 yildan ortiq davom etgan 'Oq kiyimlilar' xalq qo'zg'oloni rahbari kim edi?",
    variantlar: ["A) Abu Muslim", "B) Muqanna", "C) Rofe ibn Lays"],
    togriJavob: 1,
    izoh: "Hoshim ibn Hakim (Muqanna) boshchiligidagi 'Oq kiyimlilar' harakati 770-780-yillarda arab zulmiga qarshi kurashgan."
  },
  {
    id: 122,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "orta",
    savol: "Islom olamida 'Hadis ilmining sultoni' deb tan olingan buyuk muhaddis kim?",
    variantlar: ["A) Imom Termiziy", "B) Burhoniddin Marg'inoniy", "C) Imom al-Buxoriy"],
    togriJavob: 2,
    izoh: "Imom Muhammad ibn Ismoil al-Buxoriy (810-870) o'zining 'Al-Jome' as-sahih' asari bilan butun musulmon dunyosida e'tirof etilgan."
  },
  {
    id: 123,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "qiyin",
    savol: "751-yilda Xitoyning Tan sulolasi va arab-turkiy qo'shinlar o'rtasida bo'lib o'tgan tarixiy jang qaysi?",
    variantlar: ["A) Talas (Taras) jangi", "B) Dandanakon jangi", "C) Katvan jangi"],
    togriJavob: 0,
    izoh: "751-yilgi Talas jangidagi g'alaba natijasida Tan imperiyasining O'rta Osiyoga yurishi to'xtatildi va mintaqada islom madaniyati mustahkamlandi."
  },

  // ===== 6-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 124,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "oson",
    savol: "O'rta asrlar Yevropasida shahar hunarmandlarining o'zaro birlashgan uyushmasi nima deb atalgan?",
    variantlar: ["A) Orden", "B) Sex", "C) Korporatsiya"],
    togriJavob: 1,
    izoh: "O'rta asrlarda bir xil kasb egalari (etikdo'zlar, temirchilar, to'quvchilar) o'z mahsulot sifati va narxini nazorat qilish uchun 'sex'larga birlashgan."
  },
  {
    id: 125,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "orta",
    savol: "1215-yilda Angliyada qirol hokimiyatini qonun bilan cheklashga asos solgan hujjat qaysi?",
    variantlar: ["A) Fuqarolik kodeksi", "B) Huquqlar haqida deklaratsiya", "C) Buyuk erkinlik xartiyasi (Magna Carta)"],
    togriJavob: 2,
    izoh: "Magna Carta 1215-yilda qirol Yurtsiz Jon tomonidan imzolangan bo'lib, inson huquqlari va konstitutsiyaviy monarxiyaning ilk poydevoridir."
  },
  {
    id: 126,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "orta",
    savol: "Yuz yillik urushda fransuz xalqini ozodlik kurashiga chorlagan va Orlean shahrini qamaldan qutqargan qahramon qiz kim?",
    variantlar: ["A) Janna d'Ark", "B) Mariya Styuart", "C) Yelizaveta I"],
    togriJavob: 0,
    izoh: "Janna d'Ark 1429-yilda Orleanni ozod etib, Fransiya taxti vorisi Sharl VII ning qirol bo'lib toj kiyishiga erishgan."
  },
  {
    id: 127,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "qiyin",
    savol: "1453-yilda Vizantiya imperiyasi poytaxti Konstantinopolni zabt etgan Usmonli turk sultoni kim?",
    variantlar: ["A) Sulaymon Qonuniy", "B) Sulton Mehmed II (Fotih)", "C) Salim I"],
    togriJavob: 1,
    izoh: "Sulton Mehmed II Fotih 1453-yilda Konstantinopolni egallab, Vizantiyaga chek qo'ydi va shaharni Usmonli poytaxti — Istanbulga aylantirdi."
  },
  {
    id: 128,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "oson",
    savol: "O'rta asrlarda Bag'dodda ilm-fan va tarjima markazi sifatida faoliyat yuritgan akademiya qanday atalgan?",
    variantlar: ["A) Nizomiya", "B) Marog'a rasadxonasi", "C) Bayt ul-hikma"],
    togriJavob: 2,
    izoh: "Abbosiylar xalifasi Al-Ma'mun homiyligida IX asrda ochilgan 'Bayt ul-hikma' (Donishmandlar uyi) Sharq Renessansining yirik markazi bo'lgan."
  },
  {
    id: 129,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "orta",
    savol: "O'rta asrlar Yaponiyasida imperatordan ko'ra ko'proq real hokimiyatga ega bo'lgan harbiy hukmdor unvoni nima edi?",
    variantlar: ["A) Syogun", "B) Samuray", "C) Mikado"],
    togriJavob: 0,
    izoh: "1192-yildan boshlab Yaponiyada oliy harbiy boshqaruvchi 'syogun' bo'lib, syogunlik tizimi bir necha asrlar davom etgan."
  },
  {
    id: 130,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "qiyin",
    savol: "1206-yilda Mo'g'ullar imperiyasini tashkil etgan va 'Ulug' xoqon' (Chingizxon) deb e'lon qilingan shaxsning asl ismi nima edi?",
    variantlar: ["A) Botuxon", "B) Temuchin", "C) Jochi"],
    togriJavob: 1,
    izoh: "Onon daryosi bo'yidagi qurultoyda Temuchin barcha mo'g'ul qabilalarini birlashtirib, 'Chingizxon' unvonini qabul qilgan."
  },

  // ===== 7-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 131,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "oson",
    savol: "Amir Temurning davlat boshqaruvi va harbiy qonun-qoidalari aks etgan o'lmas asari qaysi?",
    variantlar: ["A) Boburnoma", "B) Tarixi Rashidiy", "C) Temur tuzuklari"],
    togriJavob: 2,
    izoh: "'Temur tuzuklari' ikki qismdan iborat bo'lib, davlatni idora etish, vazirlar tayinlash va qo'shin tuzilishi qoidalarini belgilab beradi."
  },
  {
    id: 132,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "orta",
    savol: "1365-yilda Samarqand shahrini mo'g'ullar bosqinidan jasorat bilan himoya qilgan xalq harakati qanday ataladi?",
    variantlar: ["A) Sarbadorlar harakati", "B) Qizilboshlilar harakati", "C) Jadidchilik harakati"],
    togriJavob: 0,
    izoh: "Abu Bakr Kalaviy va Mavlonozoda boshchiligidagi sarbadorlar Samarqand ko'chalarida istehkomlar qurib, mo'g'ul xoni Ilyosxo'jani chekinishga majbur qilgan."
  },
  {
    id: 133,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "orta",
    savol: "Amir Temur va Oltin O'rda xoni To'xtamish o'rtasidagi mashhur Qunduzcha jangi qaysi yilda yuz bergan?",
    variantlar: ["A) 1370-yilda", "B) 1391-yilda", "C) 1402-yilda"],
    togriJavob: 1,
    izoh: "1391-yil 18-iyunda Volga bo'yidagi Qunduzcha daryosi yonida Amir Temur To'xtamishxon ustidan yirik strategik g'alabaga erishgan."
  },
  {
    id: 134,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "qiyin",
    savol: "Amir Temurning davlat muhri va butun faoliyatiga asos bo'lgan buyuk shior qaysi?",
    variantlar: ["A) 'Ilm bilan jahon obod'", "B) 'Qudratimizga shak keltirsangiz, imoratlarimizga boqing'", "C) 'Kuch — adolatdadir'"],
    togriJavob: 2,
    izoh: "Amir Temur barcha farmon va davlat ishlarida 'Rosti-rusti' (Kuch — adolatdadir) tamoyiliga qat'iy rioya qilgan."
  },
  {
    id: 135,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "oson",
    savol: "Mirzo Ulug'bek tomonidan 1424-1428-yillarda Samarqandda qanday noyob ilmiy bino qurildi?",
    variantlar: ["A) Rasadxona (observatoriya)", "B) Go'ri Amir maqbarasi", "C) Bibixonim masjidi"],
    togriJavob: 0,
    izoh: "Mirzo Ulug'bek Samarqandning Obirahmat arig'i bo'yida uch qavatli ulkan rasadxona qurdirib, yulduzlar harakatini aniq o'rgangan."
  },
  {
    id: 136,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "orta",
    savol: "Amir Temur vafotidan so'ng davlat poytaxtini Samarqanddan Hirot shahriga ko'chirgan Temuriy hukmdor kim?",
    variantlar: ["A) Miranshoh", "B) Shohrux Mirzo", "C) Xalil Sulton"],
    togriJavob: 1,
    izoh: "Shohrux Mirzo 1409-yilda markaziy poytaxtni Hirotga ko'chirdi va Temuriylar Renessansining yangi bosqichini boshlab berdi."
  },
  {
    id: 137,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "qiyin",
    savol: "Alisher Navoiy turkiy tilda besh dostondan iborat ulkan 'Xamsa' asarini necha yilda yozib tugatgan?",
    variantlar: ["A) 10 yilda", "B) 5 yilda", "C) Qariyb 2 yilda (1483-1485)"],
    togriJavob: 2,
    izoh: "Alisher Navoiy 1483-1485-yillar oralig'ida mislsiz tezlik va mahorat bilan turkiy tildagi birinchi 'Xamsa'ni yaratdi."
  },

  // ===== 7-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 138,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "oson",
    savol: "XV asr o'rtalarida Yevropada harakatlanuvchi metall harflar yordamida kitob bosishni kim ixtiro qildi?",
    variantlar: ["A) Iogann Gutenberg", "B) Leonardo da Vinchi", "C) Frensis Bekon"],
    togriJavob: 0,
    izoh: "1445-yilda nemis ixtirochisi Iogann Gutenberg tomonidan kitob bosish stanogining yaratilishi ma'rifat tarqalishiga beqiyos hissa qo'shdi."
  },
  {
    id: 139,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "orta",
    savol: "Uyg'onish davrining buyuk haykaltaroshi Mikelanjelo Buonarroti qaysi mashhur asari bilan tanilgan?",
    variantlar: ["A) 'Mona Liza'", "B) 'Davud' marmar haykali", "C) 'Afina maktabi'"],
    togriJavob: 1,
    izoh: "Mikelanjelo 1504-yilda Florensiyada 5 metrli marmar 'Davud' haykalini yaratgan, shuningdek Vatikandagi Sikstin kapellasi shiftini bezagan."
  },
  {
    id: 140,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "orta",
    savol: "'Gamlet', 'Qirol Lir' va 'Romeo va Juletta' kabi mashhur pyesalar qaysi ingliz dramaturgiga tegishli?",
    variantlar: ["A) Charlz Dikkens", "B) Jorj Bayron", "C) Uilyam Shekspir"],
    togriJavob: 2,
    izoh: "Uilyam Shekspir (1564-1616) Uyg'onish davri ingliz teatri va jahon dramaturgiyasining eng buyuk cho'qqisidir."
  },
  {
    id: 141,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "qiyin",
    savol: "Olamning markazida Quyosh turadi degan geliotsentrik ta'limotni ilmiy asoslab bergan polshalik olim kim?",
    variantlar: ["A) Nikolay Kopernik", "B) Iogann Kepler", "C) Jordano Bruno"],
    togriJavob: 0,
    izoh: "Nikolay Kopernik 1543-yilda e'lon qilgan 'Osmon sferalarining aylanishi to'g'risida'gi asari bilan xurofotga asoslangan geosentrik qarashlarni yo'qqa chiqardi."
  },
  {
    id: 142,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "oson",
    savol: "1492-yilda Ispaniya homiyligida yangi qit'a — Amerikani kashf qilgan dengizchi sayyoh kim?",
    variantlar: ["A) Jeyms Kuk", "B) Xristofor Kolumb", "C) Fransisko Pisarro"],
    togriJavob: 1,
    izoh: "Xristofor Kolumb 1492-yil 12-oktyabrda 'Santa-Mariya', 'Pinta' va 'Ninya' kemalarida suzib borib Yangi Dunyo qirg'oqlariga qadam qo'ydi."
  },
  {
    id: 143,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "orta",
    savol: "1498-yilda Afrika janubidagi Yaxshi Umid burnini aylanib o'tib, Hindistonga yetib borgan portugal dengizchisi kim?",
    variantlar: ["A) Bartolomeu Diash", "B) Ferdinand Magellan", "C) Vaska da Gama"],
    togriJavob: 2,
    izoh: "Vaska da Gama Hindistonning Kalikut shahriga yetib borib, Yevropadan Sharqqa eltuvchi dengiz yo'lini ochgan."
  },
  {
    id: 144,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "qiyin",
    savol: "Kolumb kashf etgan yerlar Osiyo emas, balki butunlay yangi qit'a ekanligini isbotlagan italiyalik sayyoh kim?",
    variantlar: ["A) Amerigo Vespuchchi", "B) Marko Polo", "C) Jon Kabot"],
    togriJavob: 0,
    izoh: "Amerigo Vespuchchi Janubiy Amerika qirg'oqlarini tadqiq qilib, uning 'Yangi Dunyo' ekanini ma'lum qilgan va qit'aga uning nomi berilgan."
  },

  // ===== 8-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 145,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "oson",
    savol: "XVI asr boshlarida Movarounnahrda Temuriylar o'rniga hokimiyatga kelgan sulola asoschisi kim?",
    variantlar: ["A) Abdullaxon II", "B) Muhammad Shayboniyxon", "C) Ubaydullaxon"],
    togriJavob: 1,
    izoh: "Muhammad Shayboniyxon 1500-1507-yillarda Movarounnahr va Xurosonni egallab, Shayboniylar sulolasiga asos soldi."
  },
  {
    id: 146,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "orta",
    savol: "Qo'qon xonligiga 1709-yilda Farg'ona vodiysida qaysi o'zbek urug'i yetakchisi asos solgan?",
    variantlar: ["A) Qo'ng'irotlar (Eltuzar)", "B) Mang'itlar (Doniyolbiy)", "C) Minglar (Shohruxbiy)"],
    togriJavob: 2,
    izoh: "Shohruxbiy Minglar sulolasi vakili sifatida Qo'qon shahrini poytaxt etib belgiladi va mustaqil xonlik tuzdi."
  },
  {
    id: 147,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "orta",
    savol: "Buxoro amirligida 1756-1920-yillarda hukmronlik qilgan sulola qaysi?",
    variantlar: ["A) Mang'itlar sulolasi", "B) Ashtarxoniylar sulolasi", "C) Somoniylar sulolasi"],
    togriJavob: 0,
    izoh: "Muhammad Rahimxon asos solgan Mang'itlar sulolasi Buxoroni 1920-yilda qizil armiya bosqiniga qadar idora etgan."
  },
  {
    id: 148,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "qiyin",
    savol: "Xiva xonligida 1804-yildan 1920-yilgacha qaysi sulola xonlari davlatni boshqargan?",
    variantlar: ["A) Shayboniylar", "B) Qo'ng'irotlar", "C) Kenagaslar"],
    togriJavob: 1,
    izoh: "Eltuzarxon 1804-yilda inoqlar o'rniga o'zini xon deb e'lon qilib, Qo'ng'irotlar sulolasi davrini boshlab bergan."
  },
  {
    id: 149,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "oson",
    savol: "1865-yil iyun oyida Toshkent shahrini bosib olishga boshchilik qilgan chor Rossiyasi generali kim?",
    variantlar: ["A) General Kaufman", "B) General Skobelev", "C) General Chernyayev"],
    togriJavob: 2,
    izoh: "General Chernyayev Kamolon darvozasi orqali Toshkentga bostirib kirib, uch kunlik qonli janglardan so'ng shaharni ishg'ol qildi."
  },
  {
    id: 150,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "orta",
    savol: "1867-yilda chor hukumati tomonidan tashkil etilgan mustamlaka ma'muriy boshqaruvi nima deb nomlandi?",
    variantlar: ["A) Turkiston general-gubernatorligi", "B) Kaspiyorti viloyati", "C) Sibir gubernatorligi"],
    togriJavob: 0,
    izoh: "1867-yil 11-iyulda tashkil etilgan Turkiston general-gubernatorligining birinchi rahbari K.P. Kaufman bo'lgan."
  },
  {
    id: 151,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "qiyin",
    savol: "1873-yilgi Gandimiyon shartnomasiga binoan qaysi o'zbek davlati Rossiya imperiyasiga qaram bo'lib qoldi?",
    variantlar: ["A) Qo'qon xonligi", "B) Xiva xonligi", "C) Balx bekliklari"],
    togriJavob: 1,
    izoh: "Gandimiyon shartnomasi bo'yicha Xiva xoni Muhammad Rahimxon II mustaqil tashqi siyosat yuritish huquqidan mahrum bo'ldi."
  },

  // ===== 8-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 152,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "oson",
    savol: "AQSh mustaqillik urushining bosh qo'mondoni va mamlakatning ilk Prezidenti kim?",
    variantlar: ["A) Benjamin Franklin", "B) Tomas Jefferson", "C) Jorj Vashington"],
    togriJavob: 2,
    izoh: "Jorj Vashington (1789-1797) Amerika qo'shinlarini g'alabaga boshlab, AQSh Konstitutsiyasini amalga oshirishda muhim yetakchi bo'ldi."
  },
  {
    id: 153,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "orta",
    savol: "1789-yil 14-iyulda Fransiyada xalq tomonidan qaysi qamoqxona-qal'aning egallanishi Buyuk burjua inqilobini boshlab berdi?",
    variantlar: ["A) Bastiliya qal'asi", "B) Versal saroyi", "C) Notr-Dam qasri"],
    togriJavob: 0,
    izoh: "Bastiliyaning qulatilishi Fransiyadagi mutlaq monarxiya va feodal zulm ustidan xalq g'alabasining ramziga aylandi."
  },
  {
    id: 154,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "orta",
    savol: "1804-yilda qabul qilingan va Yevropada fuqarolik qonunchiligiga asos solgan mashhur qonunlar to'plami kimga tegishli?",
    variantlar: ["A) Lyudovik XIV", "B) Napoleon Bonapart", "C) Otto fon Bismark"],
    togriJavob: 1,
    izoh: "Napoleon Bonapartning 'Fuqarolik kodeksi' (Code Civil) xususiy mulk daxlsizligi va qonun oldida barchaning tengligini e'lon qildi."
  },
  {
    id: 155,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "XVII asrdagi Angliya inqilobida parlament qo'shiniga rahbarlik qilgan va keyin Lord-protektor bo'lgan arbob kim?",
    variantlar: ["A) Charlz II", "B) Jon Lokk", "C) Oliver Kromvel"],
    togriJavob: 2,
    izoh: "Oliver Kromvel 'temirboshlar' qo'shinini tuzib qirol armiyasini yengdi va 1653-yilda Angliya lord-protektori bo'ldi."
  },
  {
    id: 156,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "oson",
    savol: "Sanoat to'ntarishi (inqilobi) XVIII asrning ikkinchi yarmida dastlab qaysi davlatda boshlangan?",
    variantlar: ["A) Angliya", "B) Fransiya", "C) AQSh"],
    togriJavob: 0,
    izoh: "Angliyada qulay iqtisodiy sharoitlar, ko'mir va temir zaxiralari hamda ixtirolar sababli sanoat to'ntarishi dunyoda birinchi bo'lib boshlandi."
  },
  {
    id: 157,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "orta",
    savol: "1814-yilda bug' parovozini ixtiro qilib, zamonaviy temiryo'l transporti tizimiga asos solgan ingliz muhandisi kim?",
    variantlar: ["A) Jeyms Uatt", "B) Jorj Stefenson", "C) Robert Fulton"],
    togriJavob: 1,
    izoh: "Jorj Stefensonning 'Raketa' parovozi temiryo'llar orqali yuk va yo'lovchi tashish imkoniyatlarini butunlay o'zgartirib yubordi."
  },
  {
    id: 158,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "qiyin",
    savol: "Sanoat inqilobi natijasida qishloq aholisining yalpi shaharlarga ko'chib o'tishi va yirik megapolislar shakllanishi nima deyiladi?",
    variantlar: ["A) Demilitarizatsiya", "B) Retsessiya", "C) Urbanizatsiya"],
    togriJavob: 2,
    izoh: "Urbanizatsiya — fabrikalar va zavodlar atrofida shahar aholisi ulushining tez sur'atlarda o'sishi jarayonidir."
  },

  // ===== 9-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 159,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "oson",
    savol: "Turkistonda birinchi milliy teatr asari — 'Padarkush' dramasini kim yozgan?",
    variantlar: ["A) Mahmudxo'ja Behbudiy", "B) Munavvarqori", "C) Hamza"],
    togriJavob: 0,
    izoh: "1911-yilda Mahmudxo'ja Behbudiy yozgan 'Padarkush yoxud o'qimagan bolaning holi' Samarqandda sahnalashtirilgan ilk o'zbek dramasidir."
  },
  {
    id: 160,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "orta",
    savol: "'Tarbiya biz uchun yo hayot — yo mamot, yo najot — yo halokat masalasidir' degan hikmatli so'zlar kimning qalamiga mansub?",
    variantlar: ["A) Abdurauf Fitrat", "B) Abdulla Avloniy", "C) Ismoil Gasprinskiy"],
    togriJavob: 1,
    izoh: "Abdulla Avloniy o'zining 'Turkiy Guliston yoxud axloq' (1913) asarida xalqni ma'rifatli bo'lishga undab shu so'zlarni yozgan."
  },
  {
    id: 161,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "orta",
    savol: "1917-yil noyabrda Qo'qonda tashkil etilgan va xalq ozodligini maqsad qilgan muxtoriyat nima deb ataldi?",
    variantlar: ["A) Buxoro Xalq Respublikasi", "B) Turkiston Muxtoriyati", "C) Alash O'rda"],
    togriJavob: 1,
    izoh: "Qo'qon shahrida e'lon qilingan Turkiston Muxtoriyati jadidlar boshchiligidagi birinchi milliy-demokratik hukumat edi."
  },
  {
    id: 162,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "qiyin",
    savol: "Munavvarqori Abdurashidxonov jadid maktablari uchun 1907-yilda yozgan birinchi alifbe darsligi nima deb atalgan?",
    variantlar: ["A) Sabzavor", "B) Rahbari najot", "C) Adibi avval"],
    togriJavob: 2,
    izoh: "Munavvarqori tomonidan tuzilgan 'Adibi avval' darsligi yangi usul maktablarida savod chiqarish uchun asosiy qo'llanma bo'lgan."
  },
  {
    id: 163,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "oson",
    savol: "1924-yilda amalga oshirilgan qaysi jarayon natijasida O'zbekiston SSR tashkil topdi?",
    variantlar: ["A) O'rta Osiyoda milliy-hududiy chegaralanish", "B) Kollektivlashtirish siyosati", "C) Birinchi besh yillik reja"],
    togriJavob: 0,
    izoh: "1924-yil oktabr oyida O'rta Osiyoda milliy-hududiy chegaralanish o'tkazilib, O'zbekiston SSR tuzildi."
  },
  {
    id: 164,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "orta",
    savol: "1937-1938-yillardagi sovet qatag'onida nohaq otilgan o'zbek adabiyoti darg'alari qaysi qatorda berilgan?",
    variantlar: ["A) G'afur G'ulom va Hamid Olimjon", "B) Abdulla Qodiriy, Abdulhamid Cho'lpon, Abdurauf Fitrat", "C) Oybek va Abdulla Qahhor"],
    togriJavob: 1,
    izoh: "Stalincha qatag'on siyosati davrida milliy o'zlikni tarannum etgan buyuk adiblar Qodiriy, Cho'lpon va Fitrat otib tashlandi."
  },
  {
    id: 165,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "qiyin",
    savol: "Ikkinchi jahon urushida jasorat ko'rsatib, 1943-yilda general unvoniga erishgan ilk o'zbek qo'mondoni kim?",
    variantlar: ["A) General Sobir Rahimov", "B) Mamadali Topivoldiyev", "C) Ahmadjon Shukurov"],
    togriJavob: 0,
    izoh: "General-mayor Sobir Rahimov gvardiyachi diviziyaga qo'mondonlik qilib, Polsha shaharlarini ozod etishda mardlarcha kurashgan."
  },

  // ===== 9-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 166,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "oson",
    savol: "1914-yil 28-iyunda Birinchi jahon urushining boshlanishiga turtki bo'lgan suiqasd qaysi shaharda yuz bergan?",
    variantlar: ["A) Belgrad", "B) Vena", "C) Sarayevo"],
    togriJavob: 2,
    izoh: "Sarayevoda Avstriya taxti vorisi arxgertsog Frans Ferdinandning o'ldirilishi Yevropada buyuk urush olovini yoqdi."
  },
  {
    id: 167,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "orta",
    savol: "Birinchi jahon urushida 'Uchlar ittifoqi' (Markaziy davlatlar) ga qaysi davlatlar kirgan edi?",
    variantlar: ["A) Germaniya, Avstriya-Vengriya, Italiya", "B) Buyuk Britaniya, Fransiya, Rossiya", "C) AQSh, Yaponiya, Xitoy"],
    togriJavob: 0,
    izoh: "Uchlar ittifoqi 1882-yilda Germaniya, Avstriya-Vengriya va Italiya o'rtasida tuzilgan harbiy blok edi."
  },
  {
    id: 168,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "1919-yil 28-iyunda Birinchi jahon urushiga rasman chek qo'ygan tinchlik shartnomasi qayerda imzolandi?",
    variantlar: ["A) Potsdamda", "B) Versal saroyida", "C) Jenevada"],
    togriJavob: 1,
    izoh: "Fransiyaning Versal saroyida imzolangan shartnoma Germaniya ustidan g'alaba qozongan Ittifoqchilar tomonidan tuzildi."
  },
  {
    id: 169,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "oson",
    savol: "1939-yil 1-sentyabrda fashistlar Germaniyasi qaysi mamlakatga hujum qilishi bilan Ikkinchi jahon urushi boshlandi?",
    variantlar: ["A) Fransiya", "B) Chexoslovakiya", "C) Polsha"],
    togriJavob: 2,
    izoh: "Gitler Germaniyasining Polshaga qilgan bosqinchilik hujumiga javoban Angliya va Fransiya Germaniyaga urush e'lon qildi."
  },
  {
    id: 170,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "orta",
    savol: "1942-1943-yillarda bo'lib o'tgan va Ikkinchi jahon urushida tub burilish yasagan eng yirik jang qaysi?",
    variantlar: ["A) Stalingrad jangi", "B) Moskva jangi", "C) Pearl-Xarbor jangi"],
    togriJavob: 0,
    izoh: "Stalingrad jangida fashist qo'shinlarining qurshovga olinib taslim bo'lishi butun urush yo'nalishini ozodlik foydasiga o'zgartirdi."
  },
  {
    id: 171,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "orta",
    savol: "1944-yil 6-iyunda Normandiyaga ittifoqchilar qo'shinlari tushirilishi qanday nomlangan?",
    variantlar: ["A) 'Barbarossa' rejasi", "B) 'Overlord' operatsiyasi (Ikkinchi front)", "C) 'Tayfun' rejasi"],
    togriJavob: 1,
    izoh: "AQSh va Britaniya boshchiligidagi kuchlarning Fransiya sohiliga tushirilishi G'arbiy Yevropada Ikkinchi frontni ochdi."
  },
  {
    id: 172,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "1945-yil 6 va 9-avgust kunlari AQSh tomonidan atom bombasi tashlangan shafqatsiz talafot ko'rgan Yaponiya shaharlari qaysilar?",
    variantlar: ["A) Tokio va Kioto", "B) Osaka va Kobe", "C) Xirosima va Nagasaki"],
    togriJavob: 2,
    izoh: "Xirosima va Nagasakiga tashlangan atom bombalari oqibatida 200 mingdan ortiq begunoh tinch aholi halok bo'ldi."
  },

  // ===== 10-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 173,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "oson",
    savol: "O'zbek tiliga davlat tili maqomi berilgan sana qaysi?",
    variantlar: ["A) 1989-yil 21-oktyabr", "B) 1991-yil 31-avgust", "C) 1992-yil 8-dekabr"],
    togriJavob: 0,
    izoh: "1989-yil 21-oktyabrda 'Davlat tili haqida'gi qonun qabul qilinib, o'zbek tiliga rasmiy davlat tili maqomi berildi."
  },
  {
    id: 174,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "orta",
    savol: "O'zbekiston SSR Oliy Kengashida Prezidentlik boshqaruv lavozimi qachon joriy etildi?",
    variantlar: ["A) 1989-yil 23-iyunda", "B) 1990-yil 24-martda", "C) 1991-yil 1-sentyabrda"],
    togriJavob: 1,
    izoh: "1990-yil 24-martda O'zbekistonda sovet respublikalari ichida birinchi bo'lib Prezidentlik boshqaruvi o'rnatildi."
  },
  {
    id: 175,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "orta",
    savol: "O'zbekistonning suveren davlat bo'lish huquqini belgilab bergan 'Mustaqillik deklaratsiyasi' qachon qabul qilindi?",
    variantlar: ["A) 1988-yil 1-mayda", "B) 1992-yil 2-iyulda", "C) 1990-yil 20-iyunda"],
    togriJavob: 2,
    izoh: "1990-yil 20-iyunda Oliy Kengash ikkinchi sessiyasida O'zbekistonning kelajak mustaqilligining poydevori bo'lgan Deklaratsiya qabul qilingan."
  },
  {
    id: 176,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik sari",
    qiyinlik: "qiyin",
    savol: "1980-yillarda markaz tomonidan O'zbekiston xalqiga qarshi uyushtirilgan siyosiy tuhmat kampaniyasi nima deb nomlangan?",
    variantlar: ["A) 'O'zbeklar ishi' ('Paxta ishi')", "B) 'Quloqlashtirish'", "C) 'Katta tozalash'"],
    togriJavob: 0,
    izoh: "Moskvadan yuborilgan tergovchilar Gdlyan va Ivanov guruhi adolatsiz qatag'on o'tkazib, minglab paxtakorlarni tuhmat bilan qamoqqa olgan."
  },
  {
    id: 177,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasining Davlat bayrog'i qachon qabul qilingan?",
    variantlar: ["A) 1992-yil 10-dekabrda", "B) 1991-yil 18-noyabrda", "C) 1993-yil 9-aprelda"],
    togriJavob: 1,
    izoh: "1991-yil 18-noyabrda Oliy Kengash sessiyasida mustaqil O'zbekistonning birinchi davlat ramzi — Davlat bayrog'i tasdiqlandi."
  },
  {
    id: 178,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "orta",
    savol: "O'zbekiston qachon Birlashgan Millatlar Tashkilotiga (BMT) to'la huquqli a'zo bo'lib kirdi?",
    variantlar: ["A) 1991-yil 31-avgustda", "B) 1993-yil 1-yanvarda", "C) 1992-yil 2-martda"],
    togriJavob: 2,
    izoh: "1992-yil 2-mart kuni Nyu-Yorkda BMT Bosh Assambleyasida O'zbekiston Respublikasi jahon hamjamiyatining to'laqonli a'zosi bo'ldi."
  },
  {
    id: 179,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "qiyin",
    savol: "1991-yil 16-dekabrda O'zbekiston mustaqilligini dunyoda birinchi bo'lib rasman tan olgan qardosh davlat qaysi?",
    variantlar: ["A) Turkiya", "B) Ozarbayjon", "C) Misr"],
    togriJavob: 0,
    izoh: "Turkiya Respublikasi O'zbekiston mustaqilligini birinchi bo'lib tan olib, diplomatik aloqalarni o'rnatishga yo'l ochgan."
  },

  // ===== 10-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 180,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "oson",
    savol: "Ikkinchi jahon urushidan so'ng dunyo qaysi ikki qudratli superdavlat o'rtasidagi sovuq urushga tortildi?",
    variantlar: ["A) Buyuk Britaniya va Fransiya", "B) AQSh va SSSR", "C) Xitoy va Yaponiya"],
    togriJavob: 1,
    izoh: "Sovuq urush kapitalistik AQSh va sotsialistik SSSR o'rtasidagi mafkuraviy, harbiy va iqtisodiy raqobatdan iborat edi."
  },
  {
    id: 181,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "orta",
    savol: "1947-yilda AQSh tomonidan urushdan vayron bo'lgan Yevropani tiklash uchun taklif qilingan iqtisodiy dastur qanday atalgan?",
    variantlar: ["A) Trumen doktrinasi", "B) Ruzvelt kursi", "C) Marshall rejasi"],
    togriJavob: 2,
    izoh: "Davlat kotibi Jorj Marshall nomi bilan atalgan ushbu reja G'arbiy Yevropa mamlakatlarining qisqa fursatda oyoqqa turishini ta'minladi."
  },
  {
    id: 182,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "orta",
    savol: "1949-yilda vujudga kelgan Shimoliy Atlantika Harbiy Alyansi (NATO) bosh qarorgohi qayerda joylashgan?",
    variantlar: ["A) Bryussel (Belgiya)", "B) Parij (Fransiya)", "C) London (Buyuk Britaniya)"],
    togriJavob: 0,
    izoh: "NATO bosh qarorgohi Belgiyaning Bryussel shahrida joylashgan bo'lib, umumiy mudofaani ta'minlash maqsadida tuzilgan."
  },
  {
    id: 183,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "qiyin",
    savol: "1962-yil oktyabrida dunyoni atom halokati yoqasiga olib kelgan Kuba atrofidagi xavfli inqiroz nima deb ataladi?",
    variantlar: ["A) Berlin devori inqirozi", "B) Karib inqirozi", "C) Suvaysh mojarosi"],
    togriJavob: 1,
    izoh: "Kubaga sovet raketalarining joylashtirilishi tufayli chiqqan Karib inqirozi J. Kennedi va N. Xrushchyovning o'zaro kelishuvi bilan bartaraf etildi."
  },
  {
    id: 184,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "oson",
    savol: "Hindistonda mustamlakachilikka qarshi zo'ravonliksiz tinch kurash (Satyagraxa) g'oyasini ilgari surgan buyuk yetakchi kim?",
    variantlar: ["A) Subxas Chandra Bos", "B) Javoharla'l Neru", "C) Mahatma Gandi"],
    togriJavob: 2,
    izoh: "Mahatma Gandi xalqni zo'ravonlik qilmasdan boykot va tinch yurishlar orqali 1947-yilda mustaqillikka olib kelgan."
  },
  {
    id: 185,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "orta",
    savol: "Tarixda birdaniga 17 ta Afrika davlati o'z ozodligini e'lon qilgan 1960-yil qanday nom bilan mashhur?",
    variantlar: ["A) 'Afrika yili'", "B) 'G'alaba yili'", "C) 'Uchinchi dunyo yili'"],
    togriJavob: 0,
    izoh: "1960-yilda mustamlakachilik kishanlari uzilib, Afrika xaritasida 17 ta yangi mustaqil respublika paydo bo'ldi."
  },
  {
    id: 186,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "qiyin",
    savol: "Janubiy Afrikadagi irqiy kamsitish (aparteid) tuzumiga qarshi kurashib, 1994-yilda mamlakatning birinchi qora tanli prezidenti bo'lgan arbob kim?",
    variantlar: ["A) Patris Lumumba", "B) Nelson Mandela", "C) Desmond Tutu"],
    togriJavob: 1,
    izoh: "Nelson Mandela 27 yillik qamoq jazosidan so'ng ozodlikka chiqib, xalqaro tinchlik ramzi va JAR Prezidenti bo'ldi."
  },

  // ===== 11-SINF: O'ZBEKISTON TARIXI (YANGI) =====
  {
    id: 187,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasining milliy valyutasi — 'so'm' qaysi sanadan boshlab muomalaga kiritilgan?",
    variantlar: ["A) 1991-yil 1-sentyabrdan", "B) 1992-yil 8-dekabrdan", "C) 1994-yil 1-iyuldan"],
    togriJavob: 2,
    izoh: "1994-yil 1-iyuldan e'tiboran O'zbekiston hududida yagona to'lov vositasi sifatida milliy valyuta — so'm muomalaga kiritildi."
  },
  {
    id: 188,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "orta",
    savol: "2001-yil iyun oyida O'zbekiston qaysi nufuzli xalqaro mintaqaviy tashkilotga asoschi a'zo davlat sifatida qo'shildi?",
    variantlar: ["A) Shanxay Hamkorlik Tashkiloti (ShHT)", "B) Yevroosiyo Ittifoqi", "C) Janubiy Osiyo Hamkorlik Tashkiloti"],
    togriJavob: 0,
    izoh: "2001-yil 15-iyunda Shanxay sammitida 6 ta davlat qatorida O'zbekiston ShHTga asos solgan."
  },
  {
    id: 189,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "orta",
    savol: "Orol dengizining qurishi oqibatlarini bartaraf etish va mintaqa ekologiyasini yaxshilash maqsadida qaysi xalqaro tuzilma faoliyat yuritadi?",
    variantlar: ["A) YuNESKO ekologik kengashi", "B) Orolni qutqarish xalqaro jamg'armasi (OQXJ)", "C) Jahon Yovvoyi Tabiat Jamg'armasi"],
    togriJavob: 1,
    izoh: "1993-yilda Markaziy Osiyo davlat rahbarlari tomonidan Orol dengizi havzasidagi falokatni bartaraf etish uchun OQXJ tuzilgan."
  },
  {
    id: 190,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "qiyin",
    savol: "O'zbekistonda Birinchi Prezident Islom Karimov vafotidan so'ng, qachon Shavkat Mirziyoyev umumxalq saylovida O'zbekiston Respublikasi Prezidenti etib saylandi?",
    variantlar: ["A) 2017-yil 1-sentyabrda", "B) 2015-yil 29-martda", "C) 2016-yil 4-dekabrda"],
    togriJavob: 2,
    izoh: "2016-yil 4-dekabrdagi erkin va oshkora Prezident saylovida Shavkat Mirziyoyev saylovchilarning katta qismi ovozi bilan Prezident etib saylandi."
  },
  {
    id: 191,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasida yangi tahrirdagi Konstitutsiya bo'yicha umumxalq referendumi qachon o'tkazildi?",
    variantlar: ["A) 2023-yil 30-aprelda", "B) 2021-yil 24-oktyabrda", "C) 2022-yil 8-dekabrda"],
    togriJavob: 0,
    izoh: "2023-yil 30-aprelda bo'lib o'tgan referendumda fuqarolarning mutlaq ko'pchiligi yangilangan Konstitutsiyani yoqlab ovoz berdi."
  },
  {
    id: 192,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "orta",
    savol: "Yangi tahrirdagi O'zbekiston Respublikasi Konstitutsiyasining 1-moddasida davlat qanday ta'riflangan?",
    variantlar: ["A) Teokratik va konfederativ davlat", "B) Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat", "C) Monarxiya boshqaruvidagi parlamentar davlat"],
    togriJavob: 1,
    izoh: "Yangi Konstitutsiyada O'zbekiston bosh qomusi bo'yicha 'ijtimoiy davlat' tamoyili ilk bor bosh moddada mustahkamlandi."
  },
  {
    id: 193,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "qiyin",
    savol: "2022-2026-yillarga mo'ljallangan strategik rivojlanish dasturi qanday nomlangan?",
    variantlar: ["A) Harakatlar strategiyasi", "B) Yangi O'zbekistonning taraqqiyot strategiyasi", "C) O'zbekiston — 2030 strategiyasi"],
    togriJavob: 1,
    izoh: "2022-yil boshida tasdiqlangan 'Yangi O'zbekistonning taraqqiyot strategiyasi' 7 ta ustuvor yo'nalish va yuzlab islohot maqsadlarini qamrab olgan."
  },

  // ===== 11-SINF: JAHON TARIXI (YANGI) =====
  {
    id: 194,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "oson",
    savol: "1993-yilda Maastrixt shartnomasi asosida Yevropa qit'asida qaysi qudratli iqtisodiy-siyosiy birlashma tashkil topdi?",
    variantlar: ["A) Yevropa Ittifoqi (YeI)", "B) Mustaqil Davlatlar Hamdo'stligi", "C) Yevrosiyo Iqtisodiy Kengashi"],
    togriJavob: 0,
    izoh: "Maastrixt shartnomasi orqali Yevropa Ittifoqi vujudga keldi, tovarlar, xizmatlar va insonlar erkin harakati yo'lga qo'yildi."
  },
  {
    id: 195,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "orta",
    savol: "Braziliya, Rossiya, Hindiston, Xitoy va Janubiy Afrika davlatlari tomonidan tuzilgan nufuzli iqtisodiy blok qanday ataladi?",
    variantlar: ["A) Katta yettilik (G7)", "B) BRIKS (BRICS)", "C) OPEK"],
    togriJavob: 1,
    izoh: "BRIKS bloki tez rivojlanayotgan yetakchi iqtisodiyotlarni birlashtirib, ko'p qutbli dunyo tizimini ilgari surmoqda."
  },
  {
    id: 196,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "orta",
    savol: "2015-yilda jahon mamlakatlari tomonidan imzolangan Parij bitimining bosh vazifasi nima?",
    variantlar: ["A) Kosmik kemalarni qurolsizlantirish", "B) Jahon banki qarzlarini bekor qilish", "C) Global isishni 2 darajadan oshirmaslik va iqlim o'zgarishiga qarshi kurashish"],
    togriJavob: 2,
    izoh: "Parij iqlim bitimi atmosferaga issiqxona gazlari chiqindilarini kamaytirish va global harorat o'sishini cheklashni nazarda tutadi."
  },
  {
    id: 197,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "qiyin",
    savol: "2013-yilda e'lon qilingan va Osiyo, Yevropa hamda Afrikani qamrab oluvchi ulkan savdo-transport koridori tashabbusi qanday nomlanadi?",
    variantlar: ["A) 'Bir makon, bir yo'l'", "B) 'Trans-Atlantika savdosi'", "C) 'Evroosiyo temir tarmog'i'"],
    togriJavob: 0,
    izoh: "Xitoy rahbari Si Szinpin tomonidan ilgari surilgan 'Bir makon, bir yo'l' loyihasi qadimgi Ipak yo'li bo'ylab yangi infratuzilmalarni barpo etmoqda."
  },
  {
    id: 198,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "oson",
    savol: "XX asr oxiri va XXI asrda globallashuv jarayonini eng tez sur'atda jadallashtirgan axborot-kommunikatsiya vositasi qaysi?",
    variantlar: ["A) Bosma gazetalar", "B) Butunjahon Internet tarmog'i", "C) Telegraf aloqasi"],
    togriJavob: 1,
    izoh: "Internet insoniyat tarixida axborot va aloqa to'siqlarini butunlay olib tashlab, sayyorani yagona axborot qishlog'iga aylantirdi."
  },
  {
    id: 199,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "orta",
    savol: "BMT Bosh Assambleyasi tomonidan 2030-yilgacha erishish uchun belgilangan Barqaror Rivojlanish Maqsadlari (BRM) nechta?",
    variantlar: ["A) 10 ta", "B) 12 ta", "C) 17 ta"],
    togriJavob: 2,
    izoh: "BMT 2015-yilda qashshoqlikni yo'qotish, ochlikka barham berish, sifatli ta'lim va toza ekologiyani ta'minlashga qaratilgan 17 ta global maqsadni qabul qildi."
  },
  {
    id: 200,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "1995-yilda tashkil etilgan va jahon tovarlar hamda xizmatlar erkin savdosini muvofiqlashtiruvchi xalqaro tashkilot qaysi?",
    variantlar: ["A) Jahon Savdo Tashkiloti (JST / WTO)", "B) YuNISEF", "C) Interpol"],
    togriJavob: 0,
    izoh: "Shveysariyaning Jeneva shahrida joylashgan JST xalqaro savdoda proteksionizmni kamaytirish va bojlarni pasaytirish bilan shug'ullanadi."
  },
  {
    id: 201,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "oson",
    savol: "Hammurapi qonunlari qaysi qadimgi davlat bilan bog'liq?",
    variantlar: ["A) Bobil", "B) Afina", "C) Rim"],
    togriJavob: 0,
    izoh: "Hammurapi miloddan avvalgi XVIII asrda Bobil podshosi bo'lgan; uning nomi bilan mashhur qonunlar to'plami ataladi."
  },
  {
    id: 202,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "oson",
    savol: "Qadimgi Hindiston sivilizatsiyasining yirik shaharlari qaysi daryo vodiysida joylashgan edi?",
    variantlar: ["A) Nil", "B) Dajla", "C) Hind"],
    togriJavob: 2,
    izoh: "Harappa va Mohenjo-Daro kabi qadimgi shaharlar Hind daryosi vodiysidagi sivilizatsiyaga mansub."
  },
  {
    id: 203,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Qadimgi yunonlar Olimpiya o'yinlarini qaysi hududda o'tkazgan?",
    variantlar: ["A) Sparta", "B) Olimpiya", "C) Afina"],
    togriJavob: 1,
    izoh: "O'yinlar Yunonistonning Olimpiya hududida o'tkazilgan; qadimgi an'anaga ko'ra, ilk qayd etilgan o'yinlar miloddan avvalgi 776-yilga tegishli."
  },
  {
    id: 204,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "orta",
    savol: "Qadimgi Afina qaysi siyosiy boshqaruv shaklining rivojlanishi bilan mashhur?",
    variantlar: ["A) Demokratiya", "B) Feodal monarxiya", "C) Mustamlaka boshqaruvi"],
    togriJavob: 0,
    izoh: "Qadimgi Afinada fuqarolarning bir qismi davlat ishlarida bevosita qatnashgan; bu tajriba demokratiya tarixida muhim o'rin tutadi."
  },
  {
    id: 205,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "orta",
    savol: "Rimda miloddan avvalgi 27-yilda imperatorlik davri boshlanganida hokimiyat tepasiga kim kelgan?",
    variantlar: ["A) Yuliy Sezar", "B) Neron", "C) Oktavian Avgust"],
    togriJavob: 2,
    izoh: "Oktavian Avgust Rimning birinchi imperatori sifatida tan olinadi; miloddan avvalgi 27-yil uning hokimiyatining boshlanishi bilan bog'lanadi."
  },
  {
    id: 206,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "orta",
    savol: "Qadimgi Olimpiya o'yinlarining ilk yozma qaydi qaysi yilga taalluqli?",
    variantlar: ["A) Miloddan avvalgi 490-yil", "B) Miloddan avvalgi 776-yil", "C) Milodiy 313-yil"],
    togriJavob: 1,
    izoh: "Qadimgi yunon an'analarida Olimpiya o'yinlarining ilk qaydi miloddan avvalgi 776-yil bilan bog'lanadi."
  },
  {
    id: 207,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "orta",
    savol: "Qadimgi Finikiya xalqlari tarixda qaysi yutuq bilan mashhur?",
    variantlar: ["A) Alifbo yozuvining tarqalishiga qo'shgan hissasi", "B) Qog'oz pulni ixtiro qilgani", "C) Rim huquqini yaratgani"],
    togriJavob: 0,
    izoh: "Finikiyaliklarning undosh tovushlarga asoslangan alifbosi keyingi yozuv tizimlariga, jumladan yunon alifbosiga ta'sir ko'rsatgan."
  },
  {
    id: 208,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "oson",
    savol: "Hijrat voqeasi qaysi yilda sodir bo'lgan?",
    variantlar: ["A) 570-yilda", "B) 622-yilda", "C) 750-yilda"],
    togriJavob: 1,
    izoh: "Muhammad payg'ambarning Makkadan Madinaga ko'chishi 622-yilda yuz bergan va hijriy taqvim shu voqeadan boshlanadi."
  },
  {
    id: 209,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "oson",
    savol: "Konstantinopol shahriga uning nomini bergan Rim imperatori kim edi?",
    variantlar: ["A) Konstantin I", "B) Yustinian I", "C) Teodosius I"],
    togriJavob: 0,
    izoh: "Rim imperatori Konstantin I shaharni qayta bunyod ettirib, 330-yilda uni Konstantinopol nomi bilan imperiya poytaxtiga aylantirdi."
  },
  {
    id: 210,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Angliyada qirol hokimiyatini cheklashga asos bo'lgan Magna Carta qachon qabul qilingan?",
    variantlar: ["A) 1066-yilda", "B) 1215-yilda", "C) 1492-yilda"],
    togriJavob: 1,
    izoh: "Angliya qiroli Ioann 1215-yilda Magna Carta hujjatini muhrlagan; u keyingi konstitutsiyaviy taraqqiyotga ta'sir ko'rsatgan."
  },
  {
    id: 211,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "1054-yildagi Buyuk ajralish natijasida xristian cherkovi qaysi ikki asosiy tarmoqqa bo'lindi?",
    variantlar: ["A) Katolik va pravoslav", "B) Buddaviylik va hinduizm", "C) Sunniylik va shialik"],
    togriJavob: 0,
    izoh: "1054-yilgi Buyuk ajralish G'arbiy katolik va Sharqiy pravoslav cherkovlari o'rtasidagi bo'linishni mustahkamladi."
  },
  {
    id: 212,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "o'rta",
    savol: "Abbosiylar davrida ilm-fan va tarjima ishlari rivojlangan Bayt ul-hikma qaysi shaharda joylashgan edi?",
    variantlar: ["A) Qohira", "B) Bag'dod", "C) Damashq"],
    togriJavob: 1,
    izoh: "Bag'doddagi Bayt ul-hikma Abbosiylar davrida ilmiy asarlarni to'plash, tarjima qilish va o'rganish markazlaridan biri bo'lgan."
  },
  {
    id: 213,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Usmonli turklar Konstantinopolni qaysi yilda egallagan?",
    variantlar: ["A) 1204-yilda", "B) 1453-yilda", "C) 1492-yilda"],
    togriJavob: 1,
    izoh: "Sulton Mehmed II qo'shinlari Konstantinopolni 1453-yilda egalladi; bu voqea Vizantiya imperiyasining tugashini anglatdi."
  },
  {
    id: 214,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "qiyin",
    savol: "Yuz yillik urush asosan qaysi ikki qirollik o'rtasida kechgan?",
    variantlar: ["A) Angliya va Fransiya", "B) Ispaniya va Portugaliya", "C) Daniya va Shvetsiya"],
    togriJavob: 0,
    izoh: "Yuz yillik urush 1337–1453-yillarda Angliya va Fransiya hukmdorlari o'rtasida olib borilgan uzoq davomli to'qnashuvlar majmuasi edi."
  },
  {
    id: 215,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "oson",
    savol: "Yevropa Uyg'onish davri dastlab qaysi mamlakatda yuksala boshlagan?",
    variantlar: ["A) Angliya", "B) Italiya", "C) Shvetsiya"],
    togriJavob: 1,
    izoh: "Uyg'onish davri XIV asrda Italiya shaharlarida, jumladan Florensiyada kuchli rivojlandi."
  },
  {
    id: 216,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "o'rta",
    savol: "Yevropada harakatlanuvchi metall harflar bilan bosma dastgohni takomillashtirgan ixtirochi kim?",
    variantlar: ["A) Iogann Gutenberg", "B) Leonardo da Vinchi", "C) Jeyms Vatt"],
    togriJavob: 0,
    izoh: "Iogann Gutenberg XV asr o'rtalarida Yevropada harakatlanuvchi metall harflardan foydalanadigan bosma usulini takomillashtirdi."
  },
  {
    id: 217,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "oson",
    savol: "Xristofor Kolumbning 1492-yilgi ekspeditsiyasi qaysi hududga yetib borgan?",
    variantlar: ["A) Avstraliya", "B) Hindiston", "C) Karib dengizi orollari"],
    togriJavob: 2,
    izoh: "Kolumb 1492-yilda Atlantika okeanini kesib o'tib, Karib dengizi orollariga yetib bordi; u Osiyoga yetdim deb o'ylagan."
  },
  {
    id: 218,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "o'rta",
    savol: "Vasko da Gama 1498-yilda dengiz yo'li orqali qaysi mamlakatga yetib borgan?",
    variantlar: ["A) Xitoy", "B) Hindiston", "C) Yaponiya"],
    togriJavob: 1,
    izoh: "Vasko da Gama boshchiligidagi portugal ekspeditsiyasi Afrikaning janubini aylanib o'tib, 1498-yilda Hindistonning Kalikut portiga yetdi."
  },
  {
    id: 219,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "qiyin",
    savol: "Magellan ekspeditsiyasi dunyo bo'ylab birinchi sayohatini qaysi yilda yakunlagan?",
    variantlar: ["A) 1522-yilda", "B) 1498-yilda", "C) 1600-yilda"],
    togriJavob: 0,
    izoh: "Ekspeditsiya 1519-yilda yo'lga chiqqan. Magellan safar davomida halok bo'lgan, ekspeditsiyaning qolgan qismi 1522-yilda Ispaniyaga qaytgan."
  },
  {
    id: 220,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "o'rta",
    savol: "Martin Lyuter o'zining 95 tezisini qaysi yilda e'lon qilgan deb hisoblanadi?",
    variantlar: ["A) 1453-yilda", "B) 1492-yilda", "C) 1517-yilda"],
    togriJavob: 2,
    izoh: "Martin Lyuterning 95 tezisi 1517-yil bilan bog'lanadi va Yevropadagi Reformatsiya jarayonining muhim boshlanish nuqtasi hisoblanadi."
  },
  {
    id: 221,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "qiyin",
    savol: "Nikolay Kopernikning geliotsentrik qarashlarini bayon qilgan asosiy asari qaysi yilda nashr etilgan?",
    variantlar: ["A) 1517-yilda", "B) 1543-yilda", "C) 1609-yilda"],
    togriJavob: 1,
    izoh: "Kopernikning 'Osmon sferalarining aylanishi haqida' asari 1543-yilda, olim vafot etgan yili nashr qilingan."
  },
  {
    id: 222,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "oson",
    savol: "AQSh Mustaqillik deklaratsiyasi qaysi yilda qabul qilingan?",
    variantlar: ["A) 1789-yilda", "B) 1812-yilda", "C) 1776-yilda"],
    togriJavob: 2,
    izoh: "Kontinental Kongress Mustaqillik deklaratsiyasini 1776-yil 4-iyulda qabul qilgan."
  },
  {
    id: 223,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "oson",
    savol: "Fransuz inqilobi qaysi yilda boshlangan?",
    variantlar: ["A) 1776-yilda", "B) 1789-yilda", "C) 1815-yilda"],
    togriJavob: 1,
    izoh: "Fransuz inqilobi 1789-yilda boshlandi; Bastiliyaning 14-iyulda egallanishi uning muhim voqealaridan biri bo'ldi."
  },
  {
    id: 224,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Napoleon Bonapart davrida 1804-yilda qabul qilingan fuqarolik qonunlari majmuasi qanday nomlanadi?",
    variantlar: ["A) Napoleon kodeksi", "B) Magna Carta", "C) XII jadval qonunlari"],
    togriJavob: 0,
    izoh: "1804-yilda qabul qilingan Fransiya Fuqarolik kodeksi Napoleon kodeksi nomi bilan mashhur bo'ldi."
  },
  {
    id: 225,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Vena kongressi Yevropadagi siyosiy tartibni qayta belgilash ishlarini qaysi yilda yakunlagan?",
    variantlar: ["A) 1789-yilda", "B) 1848-yilda", "C) 1815-yilda"],
    togriJavob: 2,
    izoh: "Napoleon urushlaridan keyin chaqirilgan Vena kongressi 1814–1815-yillarda faoliyat yuritib, yakuniy hujjat 1815-yilda imzolangan."
  },
  {
    id: 226,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "oson",
    savol: "Sanoat inqilobi dastlab qaysi mamlakatda boshlandi?",
    variantlar: ["A) Rossiya", "B) Buyuk Britaniya", "C) Ispaniya"],
    togriJavob: 1,
    izoh: "Sanoat inqilobi XVIII asrning ikkinchi yarmida Buyuk Britaniyada boshlandi va keyinchalik boshqa mamlakatlarga tarqaldi."
  },
  {
    id: 227,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Yaponiyada Meydzi islohotlari boshlangan davr qaysi voqea bilan belgilanadi?",
    variantlar: ["A) 1868-yilda imperator hokimiyatining tiklanishi", "B) 1600-yilda syogunatning tugashi", "C) 1945-yilda konstitutsiya qabul qilinishi"],
    togriJavob: 0,
    izoh: "1868-yilda Meydzi tiklanishi yuz berib, Yaponiyada markazlashgan imperator hokimiyati va keng ko'lamli modernizatsiya davri boshlandi."
  },
  {
    id: 228,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "Italiya qirolligi qaysi yilda e'lon qilingan?",
    variantlar: ["A) 1848-yilda", "B) 1870-yilda", "C) 1861-yilda"],
    togriJavob: 2,
    izoh: "Italiya qirolligi 1861-yilda e'lon qilingan. Rim 1870-yilda qirollikka qo'shilgan."
  },
  {
    id: 229,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "oson",
    savol: "Birinchi jahon urushidagi G'arbiy front sulhi qachon kuchga kirgan?",
    variantlar: ["A) 1917-yil 7-noyabrda", "B) 1918-yil 11-noyabrda", "C) 1919-yil 28-iyunda"],
    togriJavob: 1,
    izoh: "Germaniya bilan sulh 1918-yil 11-noyabrda kuchga kirib, G'arbiy frontdagi janglarni to'xtatdi."
  },
  {
    id: 230,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Germaniya bilan Birinchi jahon urushidan keyingi tinchlik shartnomasi qaysi nom bilan tanilgan?",
    variantlar: ["A) Versal shartnomasi", "B) Trianon shartnomasi", "C) Brest-Litovsk shartnomasi"],
    togriJavob: 0,
    izoh: "Germaniya bilan Versal shartnomasi 1919-yil 28-iyunda imzolangan."
  },
  {
    id: 231,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "1917-yilgi Fevral inqilobi natijasida Rossiyada qaysi siyosiy o'zgarish yuz berdi?",
    variantlar: ["A) Sovet Ittifoqi tuzildi", "B) Romanovlar yana taxtga qaytdi", "C) Podsho Nikolay II taxtdan voz kechdi"],
    togriJavob: 2,
    izoh: "1917-yilgi Fevral inqilobi davomida Nikolay II taxtdan voz kechdi va Rossiyada monarxiya tugadi."
  },
  {
    id: 232,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Buyuk iqtisodiy inqirozning boshlanishi odatda qaysi yil bilan bog'lanadi?",
    variantlar: ["A) 1918-yil", "B) 1929-yil", "C) 1939-yil"],
    togriJavob: 1,
    izoh: "Buyuk iqtisodiy inqiroz 1929-yilda AQSh fond bozorining keskin qulashi ortidan kuchayib, dunyoning ko'plab mamlakatlariga tarqaldi."
  },
  {
    id: 233,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "oson",
    savol: "Ikkinchi jahon urushi Yevropada Germaniyaning qaysi mamlakatga bostirib kirishi bilan boshlandi?",
    variantlar: ["A) Norvegiya", "B) Belgiya", "C) Polsha"],
    togriJavob: 2,
    izoh: "Germaniya 1939-yil 1-sentyabrda Polshaga bostirib kirdi; bu voqeadan so'ng Buyuk Britaniya va Fransiya Germaniyaga urush e'lon qildi."
  },
  {
    id: 234,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Ittifoqchi qo'shinlarning Normandiyaga yirik desant amaliyoti qaysi sanada boshlangan?",
    variantlar: ["A) 1944-yil 6-iyunda", "B) 1943-yil 2-fevralda", "C) 1945-yil 8-mayda"],
    togriJavob: 0,
    izoh: "Normandiya desanti 1944-yil 6-iyunda boshlandi; bu G'arbiy Yevropada ikkinchi frontning ochilishiga olib keldi."
  },
  {
    id: 235,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "Birlashgan Millatlar Tashkiloti Nizomi qaysi yilda imzolangan?",
    variantlar: ["A) 1919-yilda", "B) 1945-yilda", "C) 1955-yilda"],
    togriJavob: 1,
    izoh: "BMT Nizomi 1945-yil 26-iyunda San-Fransiskoda imzolangan va 24-oktyabrda kuchga kirgan."
  },
  {
    id: 236,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "oson",
    savol: "Shimoliy Atlantika shartnomasi tashkiloti (NATO) qaysi yilda tuzilgan?",
    variantlar: ["A) 1955-yilda", "B) 1961-yilda", "C) 1949-yilda"],
    togriJavob: 2,
    izoh: "NATO 1949-yil 4-aprelda Shimoliy Atlantika shartnomasi imzolanishi bilan tashkil etilgan."
  },
  {
    id: 237,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "Varshava shartnomasi tashkiloti qaysi yilda tuzilgan?",
    variantlar: ["A) 1949-yilda", "B) 1955-yilda", "C) 1968-yilda"],
    togriJavob: 1,
    izoh: "Varshava shartnomasi 1955-yilda imzolangan; unga SSSR va Sharqiy Yevropadagi sotsialistik davlatlar kirgan."
  },
  {
    id: 238,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "1948–1949-yillardagi Berlin havo ko'prigi nima sababdan tashkil etilgan?",
    variantlar: ["A) G'arbiy Berlinni Sovet blokadasi paytida ta'minlash uchun", "B) Berlin devorini qurish uchun", "C) Sharqiy Germaniyani NATOga qo'shish uchun"],
    togriJavob: 0,
    izoh: "SSSR G'arbiy Berlin yo'llarini to'sgach, AQSh va uning ittifoqchilari shahar aholisiga oziq-ovqat va zarur yuklarni havo orqali yetkazdi."
  },
  {
    id: 239,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "o'rta",
    savol: "1960-yilning 'Afrika yili' deb atalishiga asosiy sabab nima?",
    variantlar: ["A) Afrika Ittifoqi tuzilgan", "B) Ko'plab Afrika davlatlari mustaqillikka erishgan", "C) Qit'adagi barcha mustamlakalar tugatilgan"],
    togriJavob: 1,
    izoh: "1960-yilda 17 ta Afrika davlati mustaqillikka erishdi; shu sababli yil 'Afrika yili' deb ataladi."
  },
  {
    id: 240,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "o'rta",
    savol: "Jazoir Fransiyadan qaysi yilda mustaqillikka erishgan?",
    variantlar: ["A) 1962-yilda", "B) 1954-yilda", "C) 1975-yilda"],
    togriJavob: 0,
    izoh: "Evian kelishuvlaridan so'ng Jazoir 1962-yilda mustaqillikka erishdi."
  },
  {
    id: 241,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "qiyin",
    savol: "1962-yilgi Karib inqirozining bevosita sababi nima edi?",
    variantlar: ["A) Berlin devorining qurilishi", "B) AQShning NATOdan chiqishi", "C) Sovet raketalarining Kubaga joylashtirilishi"],
    togriJavob: 2,
    izoh: "SSSR raketalarining Kubaga joylashtirilishi va AQShning bunga javobi 1962-yilda yadro urushi xavfini keskin oshirdi."
  },
  {
    id: 242,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "qiyin",
    savol: "Hindiston Britaniya hukmronligidan qaysi yilda mustaqillikka erishgan?",
    variantlar: ["A) 1945-yilda", "B) 1947-yilda", "C) 1952-yilda"],
    togriJavob: 1,
    izoh: "Hindiston 1947-yil 15-avgustda mustaqillikka erishdi; bo'linish natijasida Pokiston ham alohida davlat bo'lib tashkil topdi."
  },
  {
    id: 243,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Maastrixt shartnomasi qaysi yilda imzolangan?",
    variantlar: ["A) 1992-yilda", "B) 1995-yilda", "C) 2002-yilda"],
    togriJavob: 0,
    izoh: "Maastrixt shartnomasi 1992-yilda imzolangan va 1993-yil 1-noyabrda kuchga kirgan."
  },
  {
    id: 244,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "Yevro banknot va tangalari muomalaga qachon kiritilgan?",
    variantlar: ["A) 1999-yilda", "B) 2002-yilda", "C) 2007-yilda"],
    togriJavob: 1,
    izoh: "Yevro naqdsiz hisob-kitoblarda 1999-yildan ishlatilgan, banknot va tangalar esa 2002-yil 1-yanvarda muomalaga kiritilgan."
  },
  {
    id: 245,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Arab bahori deb atalgan noroziliklar to'lqini dastlab qaysi mamlakatda boshlandi?",
    variantlar: ["A) Misr", "B) Liviya", "C) Tunis"],
    togriJavob: 2,
    izoh: "2010-yil oxirida Tunisda boshlangan noroziliklar 2011-yilda boshqa arab mamlakatlariga ham tarqaldi."
  },
  {
    id: 246,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "Iqlim o'zgarishiga qarshi xalqaro majburiyatlarni belgilagan Kioto protokoli qaysi yilda qabul qilingan?",
    variantlar: ["A) 1997-yilda", "B) 2005-yilda", "C) 2015-yilda"],
    togriJavob: 0,
    izoh: "Kioto protokoli 1997-yilda qabul qilingan va 2005-yilda kuchga kirgan."
  },
  {
    id: 247,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "qiyin",
    savol: "Shimoliy Irlandiyada tinchlik jarayoniga asos bo'lgan Xayrli juma kelishuvi qaysi yilda imzolangan?",
    variantlar: ["A) 1989-yilda", "B) 1998-yilda", "C) 2005-yilda"],
    togriJavob: 1,
    izoh: "Xayrli juma kelishuvi 1998-yil 10-aprelda imzolangan va Shimoliy Irlandiyadagi mojaroni siyosiy yo'l bilan hal etishga qaratilgan."
  },
  {
    id: 248,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "Afrika Ittifoqi rasman qaysi yilda faoliyat boshlagan?",
    variantlar: ["A) 1994-yilda", "B) 1999-yilda", "C) 2002-yilda"],
    togriJavob: 2,
    izoh: "Afrika Ittifoqi 2002-yilda Afrika Birligi Tashkiloti o'rnida rasman faoliyat boshladi."
  },
  {
    id: 249,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Xalqaro jinoiy sud o'z faoliyatini qaysi yilda boshlagan?",
    variantlar: ["A) 2002-yilda", "B) 1995-yilda", "C) 2010-yilda"],
    togriJavob: 0,
    izoh: "Rim statutining kuchga kirishi bilan Xalqaro jinoiy sud 2002-yilda faoliyat boshladi."
  },
  {
    id: 250,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Qadimgi Misr dehqonchiligi qaysi daryoning toshqinlariga bog'liq bo'lgan?",
    variantlar: ["A) Nil", "B) Frot", "C) Hind"],
    togriJavob: 0,
    izoh: "Nilning mavsumiy toshqinlari vodiyga unumdor loyqa olib kelib, qadimgi Misr dehqonchiligini qo'llab-quvvatlagan."
  },
  {
    id: 251,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "oson",
    savol: "Qadimgi Misr hukmdorlari qanday unvon bilan atalgan?",
    variantlar: ["A) Konsul", "B) Fir'avn", "C) Senat"],
    togriJavob: 1,
    izoh: "Qadimgi Misr podsholari fir'avn deb atalgan."
  },
  {
    id: 252,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "o'rta",
    savol: "Mesopotamiyadagi zikkuratlar asosan qanday vazifani bajargan?",
    variantlar: ["A) Daryo porti bo'lgan", "B) Harbiy otxona bo'lgan", "C) Ibodatxona majmuasi bo'lgan"],
    togriJavob: 2,
    izoh: "Zikkuratlar Mesopotamiya shaharlarida qurilgan pog'onali ibodatxona inshootlari edi."
  },
  {
    id: 253,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "o'rta",
    savol: "Qin Shi Huangdi davrida Xitoy qachon birlashtirilgan?",
    variantlar: ["A) Miloddan avvalgi 221-yilda", "B) Miloddan avvalgi 509-yilda", "C) Milodiy 220-yilda"],
    togriJavob: 0,
    izoh: "Qin hukmdori Ying Zheng miloddan avvalgi 221-yilda raqib davlatlarni bo'ysundirib, Xitoyni birlashtirdi va Qin Shi Huangdi unvonini oldi."
  },
  {
    id: 254,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Qadimgi yunon shahar-davlatlari qanday atalgan?",
    variantlar: ["A) Satraplik", "B) Polis", "C) Prefektura"],
    togriJavob: 1,
    izoh: "Polis qadimgi yunonlarning mustaqil shahar-davlatini bildirgan. Afina va Sparta mashhur polislar edi."
  },
  {
    id: 255,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "qiyin",
    savol: "Ahamoniylar davlati bo'ylab qurilgan Shoh yo'li qaysi hukmdor davrida kengaytirilgan?",
    variantlar: ["A) Doro I", "B) Xammurapi", "C) Perikl"],
    togriJavob: 0,
    izoh: "Ahamoniylar hukmdori Doro I imperiya hududlarini bog'lash uchun Shoh yo'li va aloqa tizimini rivojlantirgan."
  },
  {
    id: 256,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "o'rta",
    savol: "Qadimgi Rimda xalq manfaatlarini himoya qilish uchun saylangan mansabdor qanday atalgan?",
    variantlar: ["A) Strateg", "B) Satrap", "C) Xalq tribun"],
    togriJavob: 2,
    izoh: "Rim respublikasida xalq tribunlari plebeylar manfaatlarini himoya qilgan va ayrim qarorlarga veto qo'yish huquqiga ega bo'lgan."
  },
  {
    id: 257,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Yustinian davrida tartibga solingan Rim huquqi to'plami qanday nom bilan mashhur?",
    variantlar: ["A) Yustinian kodeksi (Corpus Juris Civilis)", "B) Magna Carta", "C) Napoleon kodeksi"],
    togriJavob: 0,
    izoh: "VI asrda imperator Yustinian topshirig'i bilan Rim huquqi tizimlashtirilib, Corpus Juris Civilis nomi bilan mashhur bo'ldi."
  },
  {
    id: 258,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "732-yildagi Puatye jangida franklar qo'shiniga kim boshchilik qilgan?",
    variantlar: ["A) Karl Buyuk", "B) Karl Martell", "C) Vilgelm Fotih"],
    togriJavob: 1,
    izoh: "Franklar qo'shiniga Karl Martell boshchilik qilgan. Jang Akvitaniya hududidagi Puatye-Tur atroflarida bo'lib o'tgan."
  },
  {
    id: 259,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "oson",
    savol: "1066-yilgi Gastings jangida Angliyani egallagan Normandiya gersogi kim edi?",
    variantlar: ["A) Vilgelm Fotih", "B) Richard I", "C) Genrix VIII"],
    togriJavob: 0,
    izoh: "Normandiya gersogi Vilgelm 1066-yilda Gastings jangida g'alaba qozonib, Angliya taxtini egalladi."
  },
  {
    id: 260,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Birinchi salib yurishi qatnashchilari Quddusni qaysi yilda egallagan?",
    variantlar: ["A) 1096-yilda", "B) 1204-yilda", "C) 1099-yilda"],
    togriJavob: 2,
    izoh: "Salibchilar Quddusni 1099-yilda egallagan; Birinchi salib yurishi esa 1096-yilda boshlangan."
  },
  {
    id: 261,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "qiyin",
    savol: "Mo'g'ullar Bag'dodni qaysi yilda egallab, Abbosiy xalifalarining shahardagi hukmronligiga barham bergan?",
    variantlar: ["A) 1258-yilda", "B) 1206-yilda", "C) 1453-yilda"],
    togriJavob: 0,
    izoh: "Huloku boshchiligidagi mo'g'ul qo'shini 1258-yilda Bag'dodni egalladi; bu voqea Abbosiy xalifaligining Bag'doddagi siyosiy hukmronligini tugatdi."
  },
  {
    id: 262,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "o'rta",
    savol: "Xitoyda qog'oz tayyorlash usulini takomillashtirgan amaldor Tsay Lun qaysi sulola davrida yashagan?",
    variantlar: ["A) Tan", "B) Xan", "C) Min"],
    togriJavob: 1,
    izoh: "Tsay Lun qog'oz tayyorlash usulini milodiy 105-yilda Xan sulolasi davrida taqdim etgan."
  },
  {
    id: 263,
    sinf: 6,
    bolim: "jahon",
    mavzu: "Sharq mamlakatlari",
    qiyinlik: "qiyin",
    savol: "O'rta asrlarda Xitoyda davlat amaldorlarini tanlashda qaysi tizim muhim o'rin tutgan?",
    variantlar: ["A) Merosiy ritsarlik", "B) Gladiatorlar musobaqasi", "C) Imperatorlik imtihonlari"],
    togriJavob: 2,
    izoh: "Xitoyda davlat xizmatiga nomzodlarni saralashda konfutsiylik ta'limotiga asoslangan imperatorlik imtihonlari uzoq vaqt qo'llanilgan."
  },
  {
    id: 264,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "o'rta",
    savol: "1494-yilgi Tordesilyas shartnomasi qaysi davlatlar o'rtasida tuzilgan?",
    variantlar: ["A) Ispaniya va Portugaliya", "B) Angliya va Fransiya", "C) Gollandiya va Daniya"],
    togriJavob: 0,
    izoh: "Ispaniya va Portugaliya Tordesilyas shartnomasi orqali Yevropadan tashqaridagi yangi hududlarni o'zaro taqsimlashga kelishgan."
  },
  {
    id: 265,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "o'rta",
    savol: "Angliyada qirol Genrix VIII davrida Rim papasi hokimiyatidan ajralgan milliy cherkov qaysi?",
    variantlar: ["A) Lyuteran cherkovi", "B) Anglikan cherkovi", "C) Pravoslav cherkovi"],
    togriJavob: 1,
    izoh: "Genrix VIII davrida Angliya cherkovi Rim papasi hokimiyatidan ajraldi; bu jarayon XVI asrda amalga oshdi."
  },
  {
    id: 266,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Ispaniyaning Angliyaga qarshi yuborgan mashhur Armada floti qaysi yilda mag'lubiyatga uchragan?",
    variantlar: ["A) 1588-yilda", "B) 1492-yilda", "C) 1648-yilda"],
    togriJavob: 0,
    izoh: "Ispaniya Armadasining Angliyaga yurishi 1588-yilda muvaffaqiyatsiz tugagan."
  },
  {
    id: 267,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "O'ttiz yillik urushni yakunlagan 1648-yilgi tinchlik kelishuvlari qanday nomlanadi?",
    variantlar: ["A) Utrext tinchligi", "B) Vestfaliya tinchligi", "C) Versal tinchligi"],
    togriJavob: 1,
    izoh: "Vestfaliya tinchligi 1648-yilda O'ttiz yillik urushni yakunladi."
  },
  {
    id: 268,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "o'rta",
    savol: "Kolumb safarlaridan keyin Eski va Yangi dunyo o'rtasida o'simliklar, hayvonlar va kasalliklar almashinuvi qanday ataladi?",
    variantlar: ["A) Kolumb almashinuvi", "B) Ipak yo'li savdosi", "C) Atlantika bitimi"],
    togriJavob: 0,
    izoh: "Kolumb almashinuvi XV asr oxiridan keyin Amerika va Afro-Yevrosiyo o'rtasida yuz bergan biologik va madaniy almashinuv jarayonidir."
  },
  {
    id: 269,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "Gollandiyaning Ost-Indiya kompaniyasi (VOC) qaysi yilda tuzilgan?",
    variantlar: ["A) 1602-yilda", "B) 1498-yilda", "C) 1707-yilda"],
    togriJavob: 0,
    izoh: "VOC 1602-yilda tuzilgan va Osiyo bilan savdoda Gollandiya Respublikasining muhim kompaniyasiga aylangan."
  },
  {
    id: 270,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Uyg'onish davri",
    qiyinlik: "qiyin",
    savol: "Galiley Galiley teleskop yordamida Yupiterning to'rtta yirik yo'ldoshini qachon kuzatgan?",
    variantlar: ["A) 1543-yilda", "B) 1610-yilda", "C) 1687-yilda"],
    togriJavob: 1,
    izoh: "Galiley 1610-yilda Yupiterning to'rtta yirik yo'ldoshini kuzatdi; bu kashfiyot osmon jismlari faqat Yer atrofida aylanadi degan qarashni shubha ostiga qo'ydi."
  },
  {
    id: 271,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Angliyada parlament huquqlarini mustahkamlagan Huquqlar to'g'risidagi bill qachon qabul qilingan?",
    variantlar: ["A) 1689-yilda", "B) 1776-yilda", "C) 1789-yilda"],
    togriJavob: 0,
    izoh: "1689-yilgi Huquqlar to'g'risidagi bill parlament vakolatlarini mustahkamlab, monarx hokimiyatini chekladi."
  },
  {
    id: 272,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "AQSh Konstitutsiyasi qaysi shaharda ishlab chiqilgan?",
    variantlar: ["A) Boston", "B) Filadelfiya", "C) Nyu-York"],
    togriJavob: 1,
    izoh: "AQSh Konstitutsiyasi 1787-yilgi Konstitutsiyaviy konventda Filadelfiyada ishlab chiqilgan."
  },
  {
    id: 273,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "Gaitining Fransiyadan mustaqilligi qaysi yilda e'lon qilingan?",
    variantlar: ["A) 1791-yilda", "B) 1815-yilda", "C) 1804-yilda"],
    togriJavob: 2,
    izoh: "Gaiti 1804-yil 1-yanvarda mustaqilligini e'lon qildi va Amerikadagi ilk mustaqil qora tanlilar respublikasiga aylandi."
  },
  {
    id: 274,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "'Kommunistik partiya manifesti' asari qaysi yilda nashr etilgan?",
    variantlar: ["A) 1848-yilda", "B) 1789-yilda", "C) 1871-yilda"],
    togriJavob: 0,
    izoh: "Karl Marks va Fridrix Engels yozgan 'Kommunistik partiya manifesti' 1848-yilda nashr etilgan."
  },
  {
    id: 275,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "o'rta",
    savol: "AQShda qullikni konstitutsiyaviy ravishda bekor qilgan tuzatish qaysi?",
    variantlar: ["A) Birinchi tuzatish", "B) O'n uchinchi tuzatish", "C) O'n to'qqizinchi tuzatish"],
    togriJavob: 1,
    izoh: "AQSh Konstitutsiyasiga kiritilgan O'n uchinchi tuzatish 1865-yilda ratifikatsiya qilinib, qullikni bekor qildi."
  },
  {
    id: 276,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "qiyin",
    savol: "Lotin Amerikasi mustaqillik urushlarida bir qancha mamlakatlarni ozod qilishga boshchilik qilgan arbob kim?",
    variantlar: ["A) Simon Bolivar", "B) Napoleon Bonapart", "C) Jorj Vashington"],
    togriJavob: 0,
    izoh: "Simon Bolivar Ispaniya hukmronligiga qarshi kurashib, Venesuela, Kolumbiya, Ekvador, Peru va Boliviya tarixida muhim rol o'ynagan."
  },
  {
    id: 277,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Birinchi afyun urushi qaysi ikki davlat o'rtasida bo'lib o'tgan?",
    variantlar: ["A) Fransiya va Yaponiya", "B) Rossiya va Hindiston", "C) Buyuk Britaniya va Xitoy"],
    togriJavob: 2,
    izoh: "Birinchi afyun urushi 1839–1842-yillarda Buyuk Britaniya va Sin Xitoyi o'rtasida kechgan."
  },
  {
    id: 278,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "Brest-Litovsk shartnomasi 1918-yilda qaysi davlatning urushdan chiqishiga olib kelgan?",
    variantlar: ["A) Rossiya", "B) Italiya", "C) AQSh"],
    togriJavob: 0,
    izoh: "Bolsheviklar hukumati 1918-yil martida Germaniya va uning ittifoqchilari bilan Brest-Litovsk shartnomasini tuzib, Rossiyani urushdan chiqardi."
  },
  {
    id: 279,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Birinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Millatlar Ligasi rasman qaysi yilda faoliyat boshlagan?",
    variantlar: ["A) 1914-yilda", "B) 1920-yilda", "C) 1945-yilda"],
    togriJavob: 1,
    izoh: "Millatlar Ligasi Versal tizimi doirasida tuzilib, 1920-yilda rasman faoliyat boshladi."
  },
  {
    id: 280,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "oson",
    savol: "Yaponiya Perl-Harbor bazasiga qachon hujum qilgan?",
    variantlar: ["A) 1941-yil 7-dekabrda", "B) 1939-yil 1-sentyabrda", "C) 1945-yil 2-sentyabrda"],
    togriJavob: 0,
    izoh: "Yaponiya 1941-yil 7-dekabrda Gavayidagi Perl-Harbor harbiy-dengiz bazasiga hujum qildi; ertasi kuni AQSh Yaponiyaga urush e'lon qildi."
  },
  {
    id: 281,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Stalingrad jangi qaysi yillarda bo'lib o'tgan?",
    variantlar: ["A) 1939–1940-yillarda", "B) 1942–1943-yillarda", "C) 1944–1945-yillarda"],
    togriJavob: 1,
    izoh: "Stalingrad jangi 1942-yil yozidan 1943-yil fevraligacha davom etib, Germaniya qo'shinlarining yirik mag'lubiyati bilan yakunlangan."
  },
  {
    id: 282,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "Natsistlar tomonidan amalga oshirilgan Holokostda qaysi xalq genotsid nishoniga aylangan?",
    variantlar: ["A) Yahudiylar", "B) Finlar", "C) Portugallar"],
    togriJavob: 0,
    izoh: "Natsistlar va ularning hamkorlari Holokost davrida olti millionga yaqin yahudiyni qirg'in qilgan. Boshqa guruhlar ham ta'qib va qirg'inlarga uchragan."
  },
  {
    id: 283,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Germaniya taslim bo'lganidan keyin Yevropada Ikkinchi jahon urushi tugagan kun qaysi?",
    variantlar: ["A) 1945-yil 8-may", "B) 1945-yil 2-sentyabr", "C) 1944-yil 6-iyun"],
    togriJavob: 0,
    izoh: "Germaniyaning taslim bo'lishi Yevropadagi urushni tugatdi; G'arbiy Yevropada G'alaba kuni 1945-yil 8-mayda nishonlanadi. Jahon urushi Yaponiyaning taslim bo'lishi bilan sentyabrda yakunlangan."
  },
  {
    id: 284,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "Natsist Germaniyasi rahbarlarini urush jinoyatlari uchun sud qilgan xalqaro jarayon qaysi shaharda o'tkazilgan?",
    variantlar: ["A) Jeneva", "B) Nyurnberg", "C) Parij"],
    togriJavob: 1,
    izoh: "Nyurnberg sud jarayonlari 1945–1946-yillarda o'tkazilib, natsistlar rahbarlarining bir qismi xalqaro jinoyatlar uchun javobgarlikka tortildi."
  },
  {
    id: 285,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "AQShning kommunizm tarqalishini jilovlash siyosatini e'lon qilgan 1947-yilgi hujjat qanday ataladi?",
    variantlar: ["A) Truman doktrinasi", "B) Monro doktrinasi", "C) Brejnev doktrinasi"],
    togriJavob: 0,
    izoh: "Prezident Garri Trumen 1947-yilda Gretsiya va Turkiyaga yordam ko'rsatish bilan bog'liq doktrinani e'lon qildi; u kommunizmni tiyib turish siyosatining bir qismi edi."
  },
  {
    id: 286,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "Ikkinchi jahon urushidan keyin G'arbiy Yevropani iqtisodiy tiklashga yordam bergan AQSh dasturi qanday atalgan?",
    variantlar: ["A) Dawes rejasi", "B) Marshall rejasi", "C) Yangi kurs"],
    togriJavob: 1,
    izoh: "1948-yildan amalga oshirilgan Marshall rejasi G'arbiy Yevropa mamlakatlarining iqtisodiy tiklanishiga yordam berdi."
  },
  {
    id: 287,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "qiyin",
    savol: "Koreya urushidagi janglarni to'xtatgan sulh qachon imzolangan?",
    variantlar: ["A) 1950-yil 25-iyunda", "B) 1955-yil 14-mayda", "C) 1953-yil 27-iyulda"],
    togriJavob: 2,
    izoh: "Sulh 1953-yil 27-iyulda imzolandi va janglarni to'xtatdi; Koreya yarimorolidagi urush rasman tinchlik shartnomasi bilan yakunlanmagan."
  },
  {
    id: 288,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "Praga bahori deb atalgan islohotlar qaysi yilda Varshava shartnomasi qo'shinlarining Chexoslovakiyaga kirishi bilan to'xtatilgan?",
    variantlar: ["A) 1968-yilda", "B) 1956-yilda", "C) 1980-yilda"],
    togriJavob: 0,
    izoh: "Chexoslovakiyadagi Praga bahori islohotlari 1968-yil avgustida Varshava shartnomasi qo'shinlarining bostirib kirishi bilan to'xtatildi."
  },
  {
    id: 289,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "o'rta",
    savol: "Vetnam urushi 1975-yilda qaysi shaharning egallanishi bilan yakunlandi?",
    variantlar: ["A) Xanoy", "B) Saygon", "C) Pnompen"],
    togriJavob: 1,
    izoh: "Shimoliy Vetnam qo'shinlari Saygonni 1975-yil 30-aprelda egalladi; keyingi yili mamlakat yagona davlat sifatida birlashtirildi."
  },
  {
    id: 290,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "o'rta",
    savol: "1955-yilgi Bandung konferensiyasi qaysi qit'alarning mustaqil davlatlarini birlashtirgan?",
    variantlar: ["A) Osiyo va Afrika", "B) Yevropa va Janubiy Amerika", "C) Shimoliy Amerika va Avstraliya"],
    togriJavob: 0,
    izoh: "Indoneziyada o'tkazilgan Bandung konferensiyasida Osiyo va Afrikaning 29 davlati qatnashib, hamkorlik va mustamlakachilikka qarshi pozitsiyalarni muhokama qilgan."
  },
  {
    id: 291,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "qiyin",
    savol: "Sovuq urush davridagi qurollanish poygasi asosan qaysi ikki superdavlat o'rtasida kechgan?",
    variantlar: ["A) AQSh va SSSR", "B) Xitoy va Yaponiya", "C) Fransiya va Italiya"],
    togriJavob: 0,
    izoh: "Sovuq urush davrida AQSh va SSSR yadro qurollari hamda strategik kuchlar bo'yicha uzoq muddatli raqobat olib bordi."
  },
  {
    id: 292,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Germaniya Federativ Respublikasi va Germaniya Demokratik Respublikasi qaysi yilda qayta birlashgan?",
    variantlar: ["A) 1989-yilda", "B) 1990-yilda", "C) 1991-yilda"],
    togriJavob: 1,
    izoh: "Germaniya 1990-yil 3-oktyabrda rasman qayta birlashdi. Berlin devorining ochilishi esa 1989-yilda yuz bergan."
  },
  {
    id: 293,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Buyuk Britaniya Yevropa Ittifoqidan qachon rasman chiqqan?",
    variantlar: ["A) 2020-yil 31-yanvarda", "B) 2016-yil 23-iyunda", "C) 2021-yil 1-yanvarda"],
    togriJavob: 0,
    izoh: "Buyuk Britaniya Yevropa Ittifoqidan 2020-yil 31-yanvarda rasman chiqdi; 2016-yilgi referendumda chiqish qarori qo'llab-quvvatlangan edi."
  },
  {
    id: 294,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "qiyin",
    savol: "Janubiy Sudan qaysi yilda mustaqil davlatga aylangan?",
    variantlar: ["A) 2005-yilda", "B) 2011-yilda", "C) 2015-yilda"],
    togriJavob: 1,
    izoh: "Referendumdan so'ng Janubiy Sudan 2011-yil 9-iyulda Sudandan mustaqilligini e'lon qildi."
  },
  {
    id: 295,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "Iqlim o'zgarishi bo'yicha ilmiy ma'lumotlarni baholaydigan BMT organi qaysi?",
    variantlar: ["A) Xalqaro valyuta jamg'armasi", "B) Xalqaro jinoiy sud", "C) Iqlim o'zgarishi bo'yicha hukumatlararo ekspertlar guruhi (IPCC)"],
    togriJavob: 2,
    izoh: "IPCC BMTning Jahon meteorologiya tashkiloti va BMT Atrof-muhit dasturi tomonidan 1988-yilda tuzilgan ilmiy baholash organidir."
  },
  {
    id: 296,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "Butunjahon o'rgimchak to'ri (World Wide Web) g'oyasini CERNda kim taklif qilgan?",
    variantlar: ["A) Tim Berners-Li", "B) Stiv Jobs", "C) Bill Geyts"],
    togriJavob: 0,
    izoh: "Britaniyalik olim Tim Berners-Li 1989-yilda CERNda World Wide Web g'oyasini taklif qilgan; veb va Internet bir xil tushuncha emas."
  },
  {
    id: 297,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "2008-yilda kuchaygan global moliyaviy inqirozning dastlabki markazi qaysi mamlakat bo'lgan?",
    variantlar: ["A) Yaponiya", "B) AQSh", "C) Braziliya"],
    togriJavob: 1,
    izoh: "Inqiroz AQSh ipoteka bozoridagi muammolardan kelib chiqib, moliya tizimi orqali boshqa mamlakatlarga ham tarqaldi."
  },
  {
    id: 298,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "Inson genomi loyihasi yakunlanganini olimlar qaysi yilda e'lon qilgan?",
    variantlar: ["A) 1990-yilda", "B) 1998-yilda", "C) 2003-yilda"],
    togriJavob: 2,
    izoh: "Inson genomi loyihasining yakunlanganligi 2003-yilda e'lon qilindi; u inson DNKsining ketma-ketligini o'rganishga qaratilgan xalqaro tadqiqot edi."
  },
  {
    id: 299,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "o'rta",
    savol: "Neandertal bola qoldiqlari topilgan Teshiktosh g'ori qaysi hududda joylashgan?",
    variantlar: ["A) Surxondaryo", "B) Xorazm", "C) Farg'ona"],
    togriJavob: 0,
    izoh: "Teshiktosh g'ori Boysun tog'larida, hozirgi Surxondaryo viloyati hududida joylashgan. U yerdan neandertal bola qoldiqlari topilgan."
  },
  {
    id: 300,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "o'rta",
    savol: "Xitoy manbalarida Davan nomi bilan qayd etilgan qadimgi davlat qaysi hududda joylashgan?",
    variantlar: ["A) Zarafshon vodiysida", "B) Farg'ona vodiysida", "C) Quyi Amudaryo bo'yida"],
    togriJavob: 1,
    izoh: "Xitoy yilnomalarida Davan deb atalgan davlat Farg'ona vodiysida joylashgan bo'lib, zotdor otlari bilan tanilgan."
  },
  {
    id: 301,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "oson",
    savol: "Qadimgi Xorazm vohasi asosan qaysi daryoning quyi oqimi bilan bog'liq?",
    variantlar: ["A) Sirdaryo", "B) Zarafshon", "C) Amudaryo"],
    togriJavob: 2,
    izoh: "Qadimgi Xorazm vohasi Amudaryoning quyi oqimida, daryo deltasi va unga tutash hududlarda rivojlangan."
  },
  {
    id: 302,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "o'rta",
    savol: "Marafon jangi qaysi ikki kuch o'rtasida bo'lib o'tgan?",
    variantlar: ["A) Yunonlar va forslar", "B) Rimliklar va karfagenliklar", "C) Misrliklar va xettlar"],
    togriJavob: 0,
    izoh: "Miloddan avvalgi 490-yildagi Marafon jangida Afina boshchiligidagi yunonlar Ahamoniylar Fors qo'shiniga qarshi g'alaba qozongan."
  },
  {
    id: 303,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "o'rta",
    savol: "Rim respublikasida muhim davlat masalalarini muhokama qilgan nufuzli kengash qanday atalgan?",
    variantlar: ["A) Agora", "B) Senat", "C) Areopag"],
    togriJavob: 1,
    izoh: "Rim senati respublika davrida davlat siyosati va moliya masalalariga katta ta'sir ko'rsatgan."
  },
  {
    id: 304,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "oson",
    savol: "Imom al-Buxoriy qaysi shaharda tug'ilgan?",
    variantlar: ["A) Samarqand", "B) Buxoro", "C) Termiz"],
    togriJavob: 1,
    izoh: "Muhammad ibn Ismoil al-Buxoriy 810-yilda Buxoroda tug'ilgan va hadis ilmining yirik allomalaridan biri bo'lgan."
  },
  {
    id: 305,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "o'rta",
    savol: "Abu Rayhon Beruniy qaysi yilda tug'ilgan?",
    variantlar: ["A) 973-yilda", "B) 980-yilda", "C) 1048-yilda"],
    togriJavob: 0,
    izoh: "Abu Rayhon Beruniy 973-yilda Xorazmning Kat shahrida tug'ilgan; u astronomiya, matematika va geografiyaga katta hissa qo'shgan."
  },
  {
    id: 306,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Konstantinopoldagi Avliyo Sofiya ibodatxonasi qaysi imperator davrida qurilgan?",
    variantlar: ["A) Yustinian I", "B) Konstantin XI", "C) Karl Buyuk"],
    togriJavob: 0,
    izoh: "Avliyo Sofiya ibodatxonasi Yustinian I davrida qurilib, 537-yilda ochilgan."
  },
  {
    id: 307,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Yevropada XIV asrda keng tarqalgan Qora o'lat kasalligi qaysi turdagi epidemiya edi?",
    variantlar: ["A) Chechak", "B) Vabo", "C) Bezgak"],
    togriJavob: 1,
    izoh: "Qora o'lat — Yersinia pestis bakteriyasi keltirib chiqaradigan vabo epidemiyasi bo'lib, XIV asrda Yevropaga katta talafot yetkazgan."
  },
  {
    id: 308,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Amir Temur davlati",
    qiyinlik: "o'rta",
    savol: "Amir Temur Movarounnahr hukmdori sifatida qaysi yilda siyosiy hokimiyatni qo'lga kiritgan?",
    variantlar: ["A) 1336-yilda", "B) 1370-yilda", "C) 1402-yilda"],
    togriJavob: 1,
    izoh: "Amir Temur 1370-yilda Balxdagi qurultoydan keyin Movarounnahrda hokimiyatni mustahkamladi."
  },
  {
    id: 309,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "o'rta",
    savol: "Mirzo Ulug'bek rasadxonasi qaysi shaharda barpo etilgan?",
    variantlar: ["A) Samarqand", "B) Hirot", "C) Buxoro"],
    togriJavob: 0,
    izoh: "Mirzo Ulug'bek XV asrning birinchi yarmida Samarqandda yirik rasadxona barpo ettirib, astronomik kuzatishlar olib borgan."
  },
  {
    id: 310,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "o'rta",
    savol: "Zahiriddin Muhammad Bobur qayerda tug'ilgan?",
    variantlar: ["A) Andijonda", "B) Hirotda", "C) Buxoroda"],
    togriJavob: 0,
    izoh: "Bobur 1483-yilda Andijonda tug'ilgan. Keyinchalik u Hindistonda Boburiylar davlatiga asos solgan."
  },
  {
    id: 311,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "o'rta",
    savol: "1519-yilda Meksikaga yurish boshlagan ispan konkistadori kim edi?",
    variantlar: ["A) Fransisko Pisarro", "B) Ernan Kortes", "C) Vasko da Gama"],
    togriJavob: 1,
    izoh: "Ernan Kortes 1519-yilda Meksikaga yurish boshladi; uning qo'shini va mahalliy ittifoqchilari 1521-yilda atsteklar poytaxti Tenochtitlanni egalladi."
  },
  {
    id: 312,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "qiyin",
    savol: "Dunyo bo'ylab suzib chiqqan birinchi ingliz ekspeditsiyasiga kim boshchilik qilgan?",
    variantlar: ["A) Frensis Dreyk", "B) Jeyms Kuk", "C) Genri Gudzon"],
    togriJavob: 0,
    izoh: "Frensis Dreyk boshchiligidagi ingliz ekspeditsiyasi 1577–1580-yillarda dunyo bo'ylab suzib chiqdi."
  },
  {
    id: 313,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "o'rta",
    savol: "Qo'qon xonligiga qaysi yilda asos solingan deb qabul qilinadi?",
    variantlar: ["A) 1500-yilda", "B) 1709-yilda", "C) 1865-yilda"],
    togriJavob: 1,
    izoh: "Qo'qon xonligining tashkil topishi odatda 1709-yilda Minglar sulolasi hokimiyatga kelishi bilan bog'lanadi."
  },
  {
    id: 314,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "o'rta",
    savol: "Rossiya qo'shinlari Toshkentni qaysi yilda egallagan?",
    variantlar: ["A) 1865-yilda", "B) 1873-yilda", "C) 1881-yilda"],
    togriJavob: 0,
    izoh: "General M.G. Chernyayev boshchiligidagi Rossiya qo'shinlari Toshkentni 1865-yilda egallagan."
  },
  {
    id: 315,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "qiyin",
    savol: "Turkiston general-gubernatorligi qaysi yilda tashkil etilgan?",
    variantlar: ["A) 1853-yilda", "B) 1867-yilda", "C) 1876-yilda"],
    togriJavob: 1,
    izoh: "Rossiya imperiyasi 1867-yilda Turkiston general-gubernatorligini tashkil etdi; uning markazi Toshkent bo'lgan."
  },
  {
    id: 316,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "Britaniya Ost-Indiya kompaniyasi qaysi yilda tuzilgan?",
    variantlar: ["A) 1600-yilda", "B) 1707-yilda", "C) 1757-yilda"],
    togriJavob: 0,
    izoh: "Angliya qirolichasi Yelizaveta I 1600-yilda Ost-Indiya kompaniyasiga nizom berdi."
  },
  {
    id: 317,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "o'rta",
    savol: "Buyuk Britaniyada ilk ommaviy yo'lovchi temiryo'l liniyasi qaysi yilda ishga tushgan?",
    variantlar: ["A) 1804-yilda", "B) 1825-yilda", "C) 1848-yilda"],
    togriJavob: 1,
    izoh: "Stockton–Darlington temiryo'li 1825-yilda ochilib, bug' lokomotivlaridan foydalanilgan ilk ommaviy temiryo'l liniyalaridan biri bo'ldi."
  },
  {
    id: 318,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Jadidchilik harakati",
    qiyinlik: "qiyin",
    savol: "Turkiston Muxtoriyati qaysi shaharda e'lon qilingan?",
    variantlar: ["A) Qo'qonda", "B) Toshkentda", "C) Xivada"],
    togriJavob: 0,
    izoh: "Turkiston Muxtoriyati 1917-yil noyabrida Qo'qonda e'lon qilingan; u 1918-yil fevralida tugatilgan."
  },
  {
    id: 319,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "o'rta",
    savol: "O'zbekiston SSR tashkil etilishi qaysi siyosiy jarayon bilan bog'liq?",
    variantlar: ["A) 1917-yilgi Fevral inqilobi", "B) 1924-yilgi milliy-hududiy chegaralanish", "C) 1939-yilgi Molotov–Ribbentrop pakti"],
    togriJavob: 1,
    izoh: "O'zbekiston SSR 1924-yildagi O'rta Osiyoda o'tkazilgan milliy-hududiy chegaralanish jarayoni natijasida tashkil topdi."
  },
  {
    id: 320,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "oson",
    savol: "Germaniya SSSRga qarshi 'Barbarossa' operatsiyasini qachon boshlagan?",
    variantlar: ["A) 1941-yil 22-iyunda", "B) 1940-yil 10-mayda", "C) 1942-yil 7-dekabrda"],
    togriJavob: 0,
    izoh: "Natsist Germaniyasi SSSRga qarshi 'Barbarossa' operatsiyasini 1941-yil 22-iyunda boshladi."
  },
  {
    id: 321,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "1942-yilgi Miduey jangida qaysi davlatlar flotlari to'qnashgan?",
    variantlar: ["A) Buyuk Britaniya va Germaniya", "B) AQSh va Yaponiya", "C) Fransiya va Italiya"],
    togriJavob: 1,
    izoh: "Miduey jangi 1942-yil iyunida AQSh va Yaponiya o'rtasida bo'lib, Tinch okeanidagi urushning muhim burilishlaridan biri bo'ldi."
  },
  {
    id: 322,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "Ikkinchi jahon urushida atom bombasi tashlangan birinchi shahar qaysi?",
    variantlar: ["A) Tokio", "B) Nagasaki", "C) Xirosima"],
    togriJavob: 2,
    izoh: "AQSh 1945-yil 6-avgustda Xirosimaga atom bombasi tashladi; 9-avgustda Nagasaki ham bombardimon qilindi."
  },
  {
    id: 323,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "oson",
    savol: "O'zbekiston Respublikasining davlat bayrog'i qachon tasdiqlangan?",
    variantlar: ["A) 1991-yil 18-noyabrda", "B) 1992-yil 2-iyulda", "C) 1992-yil 10-dekabrda"],
    togriJavob: 0,
    izoh: "O'zbekiston Respublikasining davlat bayrog'i 1991-yil 18-noyabrda tasdiqlangan."
  },
  {
    id: 324,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "o'rta",
    savol: "O'zbekiston Respublikasining davlat gerbi qachon tasdiqlangan?",
    variantlar: ["A) 1991-yil 18-noyabrda", "B) 1992-yil 2-iyulda", "C) 1992-yil 8-dekabrda"],
    togriJavob: 1,
    izoh: "O'zbekiston Respublikasining davlat gerbi 1992-yil 2-iyulda tasdiqlangan."
  },
  {
    id: 325,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqillik e'lon qilinishi",
    qiyinlik: "o'rta",
    savol: "O'zbekiston Respublikasining davlat madhiyasi qachon tasdiqlangan?",
    variantlar: ["A) 1991-yil 31-avgustda", "B) 1992-yil 2-iyulda", "C) 1992-yil 10-dekabrda"],
    togriJavob: 2,
    izoh: "O'zbekiston Respublikasining davlat madhiyasi 1992-yil 10-dekabrda qabul qilingan."
  },
  {
    id: 326,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "Berlin devori ochilganidan keyingi yili qaysi tarixiy siyosiy jarayon yuz berdi?",
    variantlar: ["A) Germaniya qayta birlashdi", "B) NATO tuzildi", "C) Yevro muomalaga kiritildi"],
    togriJavob: 0,
    izoh: "Berlin devori 1989-yilda ochildi, Germaniya esa 1990-yil 3-oktyabrda rasman qayta birlashdi."
  },
  {
    id: 327,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Dekolonizatsiya",
    qiyinlik: "qiyin",
    savol: "Janubiy Afrikada aparteidga qarshi kurashib, 1994-yilda prezident etib saylangan arbob kim?",
    variantlar: ["A) Desmond Tutu", "B) Nelson Mandela", "C) Kofi Annan"],
    togriJavob: 1,
    izoh: "Nelson Mandela 1994-yilgi umumiy saylovlardan so'ng Janubiy Afrikaning prezidenti bo'ldi; aparteid qonunlari esa undan oldin bekor qilina boshlagan edi."
  },
  {
    id: 328,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "o'rta",
    savol: "O'zbekiston Respublikasi BMTga qachon a'zo bo'lgan?",
    variantlar: ["A) 1991-yil 1-sentyabrda", "B) 1992-yil 2-martda", "C) 1993-yil 24-oktyabrda"],
    togriJavob: 1,
    izoh: "O'zbekiston Respublikasi 1992-yil 2-martda Birlashgan Millatlar Tashkilotiga a'zo bo'ldi."
  },
  {
    id: 329,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "qiyin",
    savol: "Shanxay Hamkorlik Tashkiloti qaysi yilda tashkil etilgan?",
    variantlar: ["A) 1996-yilda", "B) 2001-yilda", "C) 2005-yilda"],
    togriJavob: 1,
    izoh: "Shanxay Hamkorlik Tashkiloti 2001-yilda tashkil etilgan; O'zbekiston uning asoschi a'zolaridan biridir."
  },
  {
    id: 330,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Lissabon shartnomasi Yevropa Ittifoqida qachon kuchga kirgan?",
    variantlar: ["A) 2009-yil 1-dekabrda", "B) 1993-yil 1-noyabrda", "C) 2015-yil 1-yanvarda"],
    togriJavob: 0,
    izoh: "Lissabon shartnomasi 2009-yil 1-dekabrda kuchga kirib, Yevropa Ittifoqi institutlari faoliyatiga o'zgarishlar kiritdi."
  },
  {
    id: 331,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "Xalqaro kosmik stansiyaning birinchi moduli qaysi yilda orbitaga chiqarilgan?",
    variantlar: ["A) 1989-yilda", "B) 1998-yilda", "C) 2003-yilda"],
    togriJavob: 1,
    izoh: "Xalqaro kosmik stansiyaning Zarya nomli birinchi moduli 1998-yil noyabrida orbitaga chiqarilgan."
  },
  {
    id: 332,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "Jahon moliyaviy inqirozi qaysi yilda avj oldi?",
    variantlar: ["A) 2008-yilda", "B) 1995-yilda", "C) 2015-yilda"],
    togriJavob: 0,
    izoh: "2008-yilda AQSh ipoteka bozoridagi muammolar xalqaro moliyaviy inqirozga aylanib, Yevropa iqtisodiyotiga ham ta'sir ko'rsatdi."
  },
  {
    id: 333,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Yevropa Ittifoqi fuqarolari uchun umumiy fuqarolik tushunchasini belgilagan Maastrixt shartnomasi qachon kuchga kirgan?",
    variantlar: ["A) 1992-yil 7-fevralda", "B) 1993-yil 1-noyabrda", "C) 1995-yil 1-yanvarda"],
    togriJavob: 1,
    izoh: "Maastrixt shartnomasi 1992-yilda imzolangan va 1993-yil 1-noyabrda kuchga kirgan."
  },
  {
    id: 334,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "o'rta",
    savol: "Afrosiyob arxeologik yodgorligi qaysi qadimiy shahar hududida joylashgan?",
    variantlar: ["A) Samarqand", "B) Xiva", "C) Termiz"],
    togriJavob: 0,
    izoh: "Afrosiyob — qadimgi Samarqandning xarobalari joylashgan arxeologik yodgorlik."
  },
  {
    id: 335,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Qadimgi O'zbekiston",
    qiyinlik: "oson",
    savol: "Shahrisabzning qadimgi nomlaridan biri qaysi?",
    variantlar: ["A) Maroqanda", "B) Kesh", "C) Nasaf"],
    togriJavob: 1,
    izoh: "Shahrisabz qadimda Kesh nomi bilan ham tanilgan."
  },
  {
    id: 336,
    sinf: 5,
    bolim: "uzbekiston",
    mavzu: "Ilk davlatlar",
    qiyinlik: "o'rta",
    savol: "Qadimgi Davan davlati qaysi mahsuloti bilan mashhur bo'lgan?",
    variantlar: ["A) Farg'ona otlari", "B) Misrlik papirus", "C) Rim shishasi"],
    togriJavob: 0,
    izoh: "Xitoy manbalarida Davan zotdor, 'samoviy' otlari bilan mashhur bo'lgani qayd etilgan. Davan Farg'ona vodiysida joylashgan."
  },
  {
    id: 337,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi dunyo",
    qiyinlik: "oson",
    savol: "Pompey shahri qaysi vulqon otilishi natijasida kul ostida qolgan?",
    variantlar: ["A) Etna", "B) Vezuviy", "C) Stromboli"],
    togriJavob: 1,
    izoh: "Milodiy 79-yilda Vezuviy vulqoni otilib, Pompey va unga yaqin shaharlarni kul va vulqon jinslari ostida qoldirgan."
  },
  {
    id: 338,
    sinf: 5,
    bolim: "jahon",
    mavzu: "Qadimgi sivilizatsiyalar",
    qiyinlik: "o'rta",
    savol: "Rozetta toshidagi yunoncha yozuv olimlarga nimani o'qishga yordam bergan?",
    variantlar: ["A) Misr iyerogliflarini", "B) Mixxatni", "C) Finikiya alifbosini"],
    togriJavob: 0,
    izoh: "Rozetta toshidagi bir xil matnning yunoncha, demotik va iyeroglif yozuvlarida berilishi Misr iyerogliflarini o'qishga yordam berdi."
  },
  {
    id: 339,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "Arab xalifaligi davri",
    qiyinlik: "qiyin",
    savol: "Talas jangi qaysi yilda Abbosiylar va Tan Xitoy qo'shinlari o'rtasida bo'lib o'tgan?",
    variantlar: ["A) 622-yilda", "B) 751-yilda", "C) 875-yilda"],
    togriJavob: 1,
    izoh: "Talas jangi 751-yilda bo'lib o'tgan. Unda Abbosiylar qo'shini va Tan sulolasi qo'shini to'qnashgan; qarluqlar ham janglarda muhim rol o'ynagan."
  },
  {
    id: 340,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "o'rta",
    savol: "Al-Xorazmiyning algebra faniga oid mashhur asari qaysi?",
    variantlar: ["A) 'Al-jabr va al-muqobala haqida qisqacha kitob'", "B) 'Tib qonunlari'", "C) 'Hindiston'"],
    togriJavob: 0,
    izoh: "Muhammad al-Xorazmiyning algebra haqidagi asari 'Al-jabr va al-muqobala haqida qisqacha kitob' nomi bilan tanilgan."
  },
  {
    id: 341,
    sinf: 6,
    bolim: "uzbekiston",
    mavzu: "O'rta asrlar",
    qiyinlik: "o'rta",
    savol: "Ismoil Somoniy maqbarasi qaysi shaharda joylashgan?",
    variantlar: ["A) Buxoro", "B) Urganch", "C) Qo'qon"],
    togriJavob: 0,
    izoh: "Ismoil Somoniy maqbarasi Buxoroda joylashgan va Markaziy Osiyo me'morchiligining muhim yodgorliklaridan hisoblanadi."
  },
  {
    id: 342,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Karl Buyuk qaysi yilda Rimda imperator tojini kiygan?",
    variantlar: ["A) 732-yilda", "B) 800-yilda", "C) 962-yilda"],
    togriJavob: 1,
    izoh: "Rim papasi Lev III Karl Buyukka 800-yil Rojdestvo kuni imperator tojini kiydirgan."
  },
  {
    id: 343,
    sinf: 6,
    bolim: "jahon",
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: "o'rta",
    savol: "Angliyani 1066-yilda zabt etgan Vilgelm qaysi hududning gersogi bo'lgan?",
    variantlar: ["A) Normandiya", "B) Bavariya", "C) Akvitaniya"],
    togriJavob: 0,
    izoh: "Vilgelm Angliyaga yurish qilishdan oldin Normandiya gersogi bo'lgan; Hastings jangidagi g'alabadan so'ng Angliya taxtini egallagan."
  },
  {
    id: 344,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "o'rta",
    savol: "Boburning hayoti va yurishlari haqida yozgan memuar asari qanday ataladi?",
    variantlar: ["A) 'Qutadg'u bilig'", "B) 'Boburnoma'", "C) 'Zafarnoma'"],
    togriJavob: 1,
    izoh: "Zahiriddin Muhammad Boburning turkiy tilda yozilgan memuar asari 'Boburnoma' nomi bilan mashhur."
  },
  {
    id: 345,
    sinf: 7,
    bolim: "uzbekiston",
    mavzu: "Temuriylar davri",
    qiyinlik: "qiyin",
    savol: "Mirzo Ulug'bekning yulduzlar jadvali qaysi nom bilan mashhur?",
    variantlar: ["A) 'Ziji Ko'ragoniy'", "B) 'Al-jabr'", "C) 'Tib qonunlari'"],
    togriJavob: 0,
    izoh: "Mirzo Ulug'bek tuzgan astronomik jadvallar 'Ziji Ko'ragoniy' nomi bilan tanilgan."
  },
  {
    id: 346,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "1555-yilgi Augsburg diniy kelishuvi Muqaddas Rim imperiyasida qaysi ikki yo'nalishni tan olishga imkon bergan?",
    variantlar: ["A) Katoliklik va lyuteranlik", "B) Buddaviylik va hinduizm", "C) Anglikanlik va kalvinizm"],
    togriJavob: 0,
    izoh: "Augsburg kelishuvi Muqaddas Rim imperiyasi hukmdorlariga katoliklik yoki lyuteranlikni tanlash imkonini berdi."
  },
  {
    id: 347,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Yangi davr",
    qiyinlik: "o'rta",
    savol: "1688-yilgi Shonli inqilob qaysi mamlakatda yuz bergan?",
    variantlar: ["A) Fransiya", "B) Angliya", "C) Ispaniya"],
    togriJavob: 1,
    izoh: "Shonli inqilob Angliyada yuz berib, Yakov II taxtdan ketishi va parlament hokimiyatining mustahkamlanishiga olib keldi."
  },
  {
    id: 348,
    sinf: 7,
    bolim: "jahon",
    mavzu: "Buyuk geografik kashfiyotlar",
    qiyinlik: "o'rta",
    savol: "Shimoliy Amerikadagi ilk doimiy ingliz manzilgohi Jamestown qaysi yilda tashkil etilgan?",
    variantlar: ["A) 1607-yilda", "B) 1492-yilda", "C) 1620-yilda"],
    togriJavob: 0,
    izoh: "Inglizlar Jamestown manzilgohini 1607-yilda hozirgi Virjiniya hududida tashkil etgan."
  },
  {
    id: 349,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "qiyin",
    savol: "1868-yilgi shartnomadan so'ng Buxoro amirligi qaysi davlatga qaram bo'lib qolgan?",
    variantlar: ["A) Usmonli imperiyasiga", "B) Rossiya imperiyasiga", "C) Eron davlatiga"],
    togriJavob: 1,
    izoh: "1868-yilgi harbiy mag'lubiyat va shartnomadan keyin Buxoro amirligi Rossiya imperiyasiga qaram davlatga aylandi."
  },
  {
    id: 350,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Xonliklar davri",
    qiyinlik: "qiyin",
    savol: "Gandimiyon shartnomasi qaysi xonlikning Rossiya imperiyasiga qaramligini belgilagan?",
    variantlar: ["A) Xiva xonligi", "B) Qo'qon xonligi", "C) Buxoro amirligi"],
    togriJavob: 0,
    izoh: "1873-yilgi Gandimiyon shartnomasidan so'ng Xiva xonligi Rossiya imperiyasiga qaram bo'lib qoldi."
  },
  {
    id: 351,
    sinf: 8,
    bolim: "uzbekiston",
    mavzu: "Rossiya bosqini",
    qiyinlik: "qiyin",
    savol: "Rossiya imperiyasi Qo'qon xonligini qaysi yilda tugatib, uning hududini Turkiston general-gubernatorligiga qo'shib olgan?",
    variantlar: ["A) 1865-yilda", "B) 1876-yilda", "C) 1885-yilda"],
    togriJavob: 1,
    izoh: "Qo'qon xonligi 1876-yilda tugatilib, uning o'rnida Farg'ona viloyati tashkil etilgan."
  },
  {
    id: 352,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "o'rta",
    savol: "Charlz Darvinning evolyutsiya nazariyasini bayon qilgan 'Turlarning kelib chiqishi' asari qachon nashr etilgan?",
    variantlar: ["A) 1859-yilda", "B) 1804-yilda", "C) 1889-yilda"],
    togriJavob: 0,
    izoh: "Charlz Darvinning 'Turlarning kelib chiqishi' asari 1859-yilda nashr etilgan."
  },
  {
    id: 353,
    sinf: 8,
    bolim: "jahon",
    mavzu: "Sanoat inqilobi",
    qiyinlik: "o'rta",
    savol: "Suvaysh kanali qaysi yilda kemalar qatnovi uchun ochilgan?",
    variantlar: ["A) 1825-yilda", "B) 1869-yilda", "C) 1914-yilda"],
    togriJavob: 1,
    izoh: "Suvaysh kanali 1869-yilda ochilib, O'rta yer dengizi va Qizil dengizni tutashtirdi."
  },
  {
    id: 354,
    sinf: 9,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "o'rta",
    savol: "Toshkent zilzilasi qaysi yilda sodir bo'lgan?",
    variantlar: ["A) 1945-yilda", "B) 1966-yilda", "C) 1977-yilda"],
    togriJavob: 1,
    izoh: "Toshkentda kuchli zilzila 1966-yil 26-aprelda sodir bo'lib, shaharni qayta qurish ishlariga olib kelgan."
  },
  {
    id: 355,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "1936–1939-yillardagi fuqarolar urushida qaysi davlatda respublikachilar va Franko boshchiligidagi millatchilar kurashgan?",
    variantlar: ["A) Ispaniya", "B) Gretsiya", "C) Polsha"],
    togriJavob: 0,
    izoh: "Ispaniya fuqarolar urushi 1936–1939-yillarda respublikachilar va general Fransisko Franko boshchiligidagi millatchilar o'rtasida kechgan."
  },
  {
    id: 356,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "o'rta",
    savol: "1940-yilgi Britaniya jangi asosan qaysi ikki tomon havo kuchlari o'rtasida kechgan?",
    variantlar: ["A) AQSh va Yaponiya", "B) Buyuk Britaniya va Germaniya", "C) Fransiya va Italiya"],
    togriJavob: 1,
    izoh: "Britaniya jangi 1940-yilda Germaniya Luftwaffe kuchlari va Britaniya Qirollik havo kuchlari o'rtasida kechdi."
  },
  {
    id: 357,
    sinf: 9,
    bolim: "jahon",
    mavzu: "Ikkinchi jahon urushi",
    qiyinlik: "qiyin",
    savol: "1936-yilda Germaniya, Italiya va Yaponiya o'rtasida tuzilgan siyosiy yaqinlashuv dastlab qaysi nom bilan atalgan?",
    variantlar: ["A) Rim–Berlin o'qi", "B) Antanta", "C) Muqaddas ittifoq"],
    togriJavob: 0,
    izoh: "Germaniya va Italiya yaqinlashuvi 1936-yilda Rim–Berlin o'qi deb ataldi; Yaponiya keyinchalik ularga qo'shildi."
  },
  {
    id: 358,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Sovet davri",
    qiyinlik: "o'rta",
    savol: "1966-yilgi Toshkent deklaratsiyasi qaysi ikki davlat rahbarlari o'rtasidagi kelishuv edi?",
    variantlar: ["A) Hindiston va Pokiston", "B) Eron va Iroq", "C) Misr va Isroil"],
    togriJavob: 0,
    izoh: "Toshkent deklaratsiyasi 1966-yil yanvarida Hindiston bosh vaziri Lal Bahodur Shastri va Pokiston prezidenti Ayubxon tomonidan imzolangan."
  },
  {
    id: 359,
    sinf: 10,
    bolim: "uzbekiston",
    mavzu: "Mustaqil O'zbekiston",
    qiyinlik: "o'rta",
    savol: "O'zbekiston milliy valyutasi so'm muomalaga qachon kiritilgan?",
    variantlar: ["A) 1992-yil 8-dekabrda", "B) 1994-yil 1-iyulda", "C) 1995-yil 1-yanvarda"],
    togriJavob: 1,
    izoh: "O'zbekistonning milliy valyutasi — so'm 1994-yil 1-iyulda muomalaga kiritilgan."
  },
  {
    id: 360,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "o'rta",
    savol: "Suvaysh inqirozi qaysi yilda yuz bergan?",
    variantlar: ["A) 1956-yilda", "B) 1948-yilda", "C) 1968-yilda"],
    togriJavob: 0,
    izoh: "1956-yilda Misr prezidenti Jamol Abdul Nosir Suvaysh kanalini milliylashtirgach, Buyuk Britaniya, Fransiya va Isroil Misrga qarshi harbiy amaliyot boshladi."
  },
  {
    id: 361,
    sinf: 10,
    bolim: "jahon",
    mavzu: "Sovuq urush",
    qiyinlik: "oson",
    savol: "Yerning birinchi sun'iy yo'ldoshi Sputnik-1ni qaysi davlat orbitaga chiqargan?",
    variantlar: ["A) AQSh", "B) SSSR", "C) Fransiya"],
    togriJavob: 1,
    izoh: "SSSR Sputnik-1ni 1957-yil 4-oktyabrda orbitaga chiqardi; bu kosmik poyganing boshlanishiga turtki bo'ldi."
  },
  {
    id: 362,
    sinf: 11,
    bolim: "uzbekiston",
    mavzu: "Zamonaviy taraqqiyot",
    qiyinlik: "o'rta",
    savol: "O'zbekiston YUNESKOga qaysi yilda a'zo bo'lgan?",
    variantlar: ["A) 1991-yilda", "B) 1993-yilda", "C) 2001-yilda"],
    togriJavob: 1,
    izoh: "O'zbekiston 1993-yilda YUNESKO a'zoligiga qabul qilingan."
  },
  {
    id: 363,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "G20 yetakchilari darajasidagi birinchi sammit qaysi yilda o'tkazilgan?",
    variantlar: ["A) 1999-yilda", "B) 2008-yilda", "C) 2015-yilda"],
    togriJavob: 1,
    izoh: "G20 yetakchilarining birinchi sammiti 2008-yilda Vashingtonda o'tkazildi."
  },
  {
    id: 364,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "Yevropa Ittifoqining eng yirik kengayishi qaysi yilda yuz bergan?",
    variantlar: ["A) 1995-yilda", "B) 2004-yilda", "C) 2013-yilda"],
    togriJavob: 1,
    izoh: "2004-yil 1-mayda o'nta davlat Yevropa Ittifoqiga qo'shildi; bu ittifoq tarixidagi eng yirik kengayish bo'ldi."
  },
  {
    id: 365,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "qiyin",
    savol: "Yevropa Ittifoqining 2004-yilgi kengayishida a'zo bo'lgan Boltiqbo'yi davlatlari qaysilar?",
    variantlar: ["A) Estoniya, Latviya va Litva", "B) Norvegiya, Shvetsiya va Daniya", "C) Serbiya, Chernogoriya va Albaniya"],
    togriJavob: 0,
    izoh: "Estoniya, Latviya va Litva 2004-yilda Yevropa Ittifoqiga a'zo bo'lgan o'nta davlat qatoriga kiradi."
  },
  {
    id: 366,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "o'rta",
    savol: "BMTning 2030-yilgacha mo'ljallangan Barqaror rivojlanish maqsadlari qaysi yilda qabul qilingan?",
    variantlar: ["A) 2000-yilda", "B) 2015-yilda", "C) 2020-yilda"],
    togriJavob: 1,
    izoh: "BMT Bosh Assambleyasi 17 ta Barqaror rivojlanish maqsadini 2015-yilda qabul qilgan."
  },
  {
    id: 367,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Zamonaviy dunyo",
    qiyinlik: "o'rta",
    savol: "Yangi Janubiy Afrika Konstitutsiyasi qaysi yilda kuchga kirgan?",
    variantlar: ["A) 1996-yilda", "B) 1990-yilda", "C) 2004-yilda"],
    togriJavob: 0,
    izoh: "Janubiy Afrikaning yangi Konstitutsiyasi 1996-yilda qabul qilinib, aparteid davridan keyingi demokratik tuzumning huquqiy asoslarini belgiladi."
  },
  {
    id: 368,
    sinf: 11,
    bolim: "jahon",
    mavzu: "Globallashuv",
    qiyinlik: "qiyin",
    savol: "Dunyo mamlakatlari o'rtasida savdo va tarif qoidalarini tartibga soluvchi Jahon Savdo Tashkiloti qayerda joylashgan?",
    variantlar: ["A) Vena", "B) Jeneva", "C) Nyu-York"],
    togriJavob: 1,
    izoh: "Jahon Savdo Tashkilotining bosh qarorgohi Shveysariyaning Jeneva shahrida joylashgan."
  }
];

const timelineFacts = [
  [5, "Miloddan avvalgi 323-yil", "Makedoniyalik Iskandarning vafoti", "Makedoniyalik Iskandar Bobil shahrida vafot etdi", ["Miloddan avvalgi 221-yil", "Miloddan avvalgi 31-yil"], ["Qin davlati Xitoyni birlashtirdi", "Oktavian Actium jangida g'alaba qozondi"], "Makedoniyalik Iskandar miloddan avvalgi 323-yilda Bobil shahrida vafot etgan."],
  [5, "Miloddan avvalgi 221-yil", "Qin davlati Xitoyni birlashtirgan davr", "Qin davlati Xitoyni birlashtirdi", ["Miloddan avvalgi 323-yil", "Milodiy 313-yil"], ["Makedoniyalik Iskandar Bobil shahrida vafot etdi", "Milan farmoni e'lon qilindi"], "Qin hukmdori Ying Zheng miloddan avvalgi 221-yilda Xitoyni birlashtirib, Qin Shi Huangdi unvonini oldi."],
  [5, "Miloddan avvalgi 31-yil", "Actium dengiz jangi", "Oktavian Actium jangida Mark Antoniy va Kleopatrani mag'lub etdi", ["Miloddan avvalgi 490-yil", "Milodiy 79-yil"], ["Marafon jangida yunonlar forslar ustidan g'alaba qozondi", "Vezuviy otilishi Pompeyga kul yog'dirdi"], "Miloddan avvalgi 31-yildagi Actium jangida Oktavian Mark Antoniy va Kleopatra kuchlarini mag'lub etdi."],
  [5, "Milodiy 79-yil", "Vezuviy vulqonining Pompeyga ta'siri", "Vezuviy vulqoni otilib, Pompey shahri kul ostida qoldi", ["Milodiy 313-yil", "Milodiy 476-yil"], ["Milan farmoni e'lon qilindi", "G'arbiy Rim imperiyasining so'nggi imperatori taxtdan tushirildi"], "Vezuviy vulqoni milodiy 79-yilda otilib, Pompey va yaqin shaharlarni kul ostida qoldirdi."],
  [5, "Milodiy 313-yil", "Milan farmonining e'lon qilinishi", "Konstantin va Litsiniy xristianlarga diniy erkinlik beruvchi Milan kelishuvini e'lon qildi", ["Milodiy 79-yil", "Milodiy 330-yil"], ["Vezuviy Pompeyni kul ostida qoldirdi", "Konstantinopol imperiya poytaxtiga aylandi"], "313-yilgi Milan kelishuvi Rim imperiyasida xristianlarga ibodat qilish erkinligini berdi."],
  [5, "Milodiy 330-yil", "Konstantinopolning poytaxtga aylanishi", "Konstantin shahrini imperiyaning yangi poytaxti sifatida bag'ishladi", ["Milodiy 313-yil", "Milodiy 476-yil"], ["Milan farmoni e'lon qilindi", "G'arbiy Rim imperiyasining so'nggi imperatori taxtdan tushirildi"], "Rim imperatori Konstantin 330-yilda Konstantinopolni imperiyaning yangi poytaxti sifatida bag'ishladi."],
  [5, "Milodiy 476-yil", "G'arbiy Rim imperiyasining tugashi", "Romul Avgustul G'arbiy Rim imperatori sifatida taxtdan tushirildi", ["Milodiy 330-yil", "Milodiy 618-yil"], ["Konstantinopol poytaxtga aylandi", "Tan sulolasi Xitoyda hukmronlikni boshladi"], "476-yilda Romul Avgustul taxtdan tushirilishi G'arbiy Rim imperiyasining tugash sanasi sifatida an'anaviy ravishda qabul qilinadi."],
  [6, "618-yil", "Tan sulolasining Xitoyda hokimiyatga kelishi", "Tan sulolasi Xitoyda hukmronlikni boshladi", ["Milodiy 476-yil", "Milodiy 732-yil"], ["Romul Avgustul taxtdan tushirildi", "Puatye jangi bo'lib o'tdi"], "Tan sulolasi Xitoyda 618-yilda hokimiyatga kelib, 907-yilgacha hukmronlik qilgan."],
  [6, "Milodiy 622-yil", "Hijrat voqeasi", "Muhammad payg'ambar Makkadan Madinaga ko'chdi", ["Milodiy 618-yil", "Milodiy 800-yil"], ["Tan sulolasi Xitoyda hukmronlikni boshladi", "Karl Buyukka imperator toji kiydirildi"], "Hijrat — Muhammad payg'ambarning Makkadan Madinaga ko'chishi — 622-yilda yuz berdi."],
  [6, "Milodiy 732-yil", "Puatye-Tur jangi", "Karl Martell boshchiligidagi franklar Puatye-Tur jangida g'alaba qozondi", ["Milodiy 622-yil", "Milodiy 800-yil"], ["Hijrat voqeasi yuz berdi", "Karl Buyukka imperator toji kiydirildi"], "732-yilda franklar qo'shini Puatye-Tur atrofidagi jangda Umaviylar qo'shiniga qarshi g'alaba qozondi."],
  [6, "Milodiy 800-yil", "Karl Buyukning imperator tojini kiyishi", "Rim papasi Lev III Karl Buyukka imperator tojini kiydirdi", ["Milodiy 732-yil", "Milodiy 1066-yil"], ["Puatye-Tur jangi bo'lib o'tdi", "Normanlar Angliyani zabt etdi"], "Rim papasi Lev III 800-yil Rojdestvo kuni Karl Buyukka imperator tojini kiydirgan."],
  [6, "Milodiy 1066-yil", "Normanlarning Angliyani zabt etishi", "Vilgelm Fotih Hastings jangida g'alaba qozonib, Angliya taxtini egalladi", ["Milodiy 800-yil", "Milodiy 1099-yil"], ["Karl Buyukka imperator toji kiydirildi", "Salibchilar Quddusni egalladi"], "Normandiya gersogi Vilgelm 1066-yilda Hastings jangida g'alaba qozonib, Angliya qiroli bo'ldi."],
  [6, "Milodiy 1099-yil", "Birinchi salib yurishida Quddusning egallanishi", "Salibchilar Quddus shahrini egalladi", ["Milodiy 1066-yil", "Milodiy 1206-yil"], ["Vilgelm Fotih Angliya taxtini egalladi", "Temuchin mo'g'ul xoni deb e'lon qilindi"], "Salibchilar Quddusni 1099-yilda egallagan; Birinchi salib yurishi 1096-yilda boshlangan."],
  [6, "Milodiy 1206-yil", "Temuchinning Chingizxon deb e'lon qilinishi", "Qurultoyda Temuchin Chingizxon deb e'lon qilindi", ["Milodiy 1099-yil", "Milodiy 1215-yil"], ["Salibchilar Quddusni egalladi", "Angliyada Magna Carta muhrlandi"], "1206-yilgi qurultoyda Temuchin Chingizxon deb e'lon qilinib, mo'g'ul qabilalari birlashtirildi."],
  [7, "Milodiy 1215-yil", "Magna Carta hujjatining muhrlanishi", "Angliya qiroli Ioann Magna Carta hujjatini muhrladi", ["Milodiy 1206-yil", "Milodiy 1258-yil"], ["Temuchin Chingizxon deb e'lon qilindi", "Mo'g'ullar Bag'dodni egalladi"], "Angliya qiroli Ioann Magna Carta hujjatini 1215-yilda muhrlagan."],
  [7, "Milodiy 1258-yil", "Bag'dodning mo'g'ullar tomonidan egallanishi", "Huloku boshchiligidagi mo'g'ullar Bag'dodni egalladi", ["Milodiy 1215-yil", "Milodiy 1347-yil"], ["Magna Carta muhrlandi", "Vabo epidemiyasi Yevropaga yetib keldi"], "Mo'g'ul qo'shinlari Huloku boshchiligida 1258-yilda Bag'dodni egalladi."],
  [7, "Milodiy 1347-yil", "Qora o'latning Yevropaga kirib kelishi", "Vabo epidemiyasi Sitsiliyadagi Messina portiga yetib keldi", ["Milodiy 1258-yil", "Milodiy 1453-yil"], ["Mo'g'ullar Bag'dodni egalladi", "Konstantinopol Usmonlilar tomonidan egallandi"], "Vabo epidemiyasi 1347-yilda Sitsiliyadagi Messina porti orqali Yevropaga kirib kelgan."],
  [7, "Milodiy 1453-yil", "Konstantinopolning Usmonlilar tomonidan egallanishi", "Mehmed II qo'shinlari Konstantinopolni egalladi", ["Milodiy 1347-yil", "Milodiy 1494-yil"], ["Vabo epidemiyasi Yevropaga yetib keldi", "Tordesilyas shartnomasi tuzildi"], "Sulton Mehmed II qo'shinlari Konstantinopolni 1453-yilda egallab, Vizantiya imperiyasiga barham berdi."],
  [7, "Milodiy 1494-yil", "Tordesilyas shartnomasining tuzilishi", "Ispaniya va Portugaliya yangi hududlarni taqsimlash bo'yicha kelishuv tuzdi", ["Milodiy 1453-yil", "Milodiy 1517-yil"], ["Konstantinopol Usmonlilar tomonidan egallandi", "Martin Lyuter 95 tezisini e'lon qildi"], "Ispaniya va Portugaliya Tordesilyas shartnomasini 1494-yilda tuzgan."],
  [7, "Milodiy 1498-yil", "Vasko da Gamaning Hindistonga yetib borishi", "Vasko da Gama dengiz yo'li orqali Kalikutga yetib bordi", ["Milodiy 1492-yil", "Milodiy 1522-yil"], ["Kolumb Karib dengiziga yetib bordi", "Magellan ekspeditsiyasi dunyo bo'ylab safarni yakunladi"], "Vasko da Gama boshchiligidagi portugal ekspeditsiyasi 1498-yilda Hindistonning Kalikut portiga yetgan."],
  [8, "Milodiy 1517-yil", "Martin Lyuterning 95 tezisini e'lon qilishi", "Martin Lyuter 95 tezisini e'lon qildi", ["Milodiy 1498-yil", "Milodiy 1543-yil"], ["Vasko da Gama Kalikutga yetib bordi", "Kopernikning geliotsentrik asari nashr etildi"], "Martin Lyuterning 95 tezisi 1517-yil bilan bog'lanadi va Reformatsiya jarayonining muhim boshlanish nuqtasi hisoblanadi."],
  [8, "Milodiy 1543-yil", "Kopernikning geliotsentrik asarining nashr etilishi", "Nikolay Kopernikning 'Osmon sferalarining aylanishi haqida' asari nashr etildi", ["Milodiy 1517-yil", "Milodiy 1588-yil"], ["Martin Lyuter 95 tezisini e'lon qildi", "Ispaniya Armadasi Angliyaga yurish qildi"], "Kopernikning geliotsentrik nazariyani bayon qilgan asari 1543-yilda nashr etilgan."],
  [8, "Milodiy 1588-yil", "Ispaniya Armadasining Angliyaga yurishi", "Ispaniya Armadasining Angliyaga yurishi muvaffaqiyatsiz tugadi", ["Milodiy 1543-yil", "Milodiy 1607-yil"], ["Kopernikning asari nashr etildi", "Jamestown manzilgohi tashkil topdi"], "Ispaniya Armadasining Angliyaga qarshi yurishi 1588-yilda muvaffaqiyatsiz tugadi."],
  [8, "Milodiy 1602-yil", "Gollandiya Ost-Indiya kompaniyasining tuzilishi", "VOC kompaniyasi Gollandiya Respublikasida tashkil etildi", ["Milodiy 1588-yil", "Milodiy 1618-yil"], ["Ispaniya Armadasi mag'lub bo'ldi", "O'ttiz yillik urush boshlandi"], "Gollandiya Ost-Indiya kompaniyasi (VOC) 1602-yilda tuzilgan."],
  [8, "Milodiy 1607-yil", "Jamestown manzilgohining tashkil etilishi", "Inglizlar Virjiniyada Jamestown manzilgohiga asos soldi", ["Milodiy 1602-yil", "Milodiy 1648-yil"], ["VOC kompaniyasi tuzildi", "Vestfaliya tinchligi imzolandi"], "Jamestown 1607-yilda hozirgi Virjiniya hududida tashkil etilgan ilk doimiy ingliz manzilgohlaridan biri edi."],
  [8, "Milodiy 1618-yil", "O'ttiz yillik urushning boshlanishi", "Muqaddas Rim imperiyasi hududida O'ttiz yillik urush boshlandi", ["Milodiy 1607-yil", "Milodiy 1688-yil"], ["Jamestown tashkil etildi", "Angliyada Shonli inqilob yuz berdi"], "O'ttiz yillik urush 1618-yilda boshlanib, 1648-yilgi Vestfaliya tinchligi bilan yakunlangan."],
  [8, "Milodiy 1648-yil", "Vestfaliya tinchligining imzolanishi", "Vestfaliya kelishuvlari O'ttiz yillik urushni yakunladi", ["Milodiy 1618-yil", "Milodiy 1707-yil"], ["O'ttiz yillik urush boshlandi", "Angliya va Shotlandiya ittifoq tuzdi"], "Vestfaliya tinchligi 1648-yilda O'ttiz yillik urushni yakunladi."],
  [8, "Milodiy 1688-yil", "Angliyadagi Shonli inqilob", "Yakov II taxtdan ketib, Angliyada Shonli inqilob yuz berdi", ["Milodiy 1648-yil", "Milodiy 1776-yil"], ["Vestfaliya tinchligi imzolandi", "AQSh Mustaqillik deklaratsiyasi qabul qilindi"], "Shonli inqilob 1688-yilda Angliyada yuz berib, parlament hokimiyatini mustahkamladi."],
  [8, "Milodiy 1707-yil", "Angliya va Shotlandiya ittifoqining tuzilishi", "Angliya va Shotlandiya Buyuk Britaniya qirolligini tuzdi", ["Milodiy 1688-yil", "Milodiy 1789-yil"], ["Angliyada Shonli inqilob yuz berdi", "Fransuz inqilobi boshlandi"], "1707-yilgi Ittifoq aktlari Angliya va Shotlandiya qirolliklarini Buyuk Britaniya tarkibida birlashtirdi."],
  [9, "Milodiy 1776-yil", "AQSh Mustaqillik deklaratsiyasining qabul qilinishi", "Kontinental Kongress AQSh Mustaqillik deklaratsiyasini qabul qildi", ["Milodiy 1707-yil", "Milodiy 1791-yil"], ["Angliya va Shotlandiya Buyuk Britaniyani tuzdi", "Gaitida qullarga qarshi inqilob boshlandi"], "AQSh Mustaqillik deklaratsiyasi 1776-yil 4-iyulda qabul qilingan."],
  [9, "Milodiy 1789-yil", "Fransuz inqilobining boshlanishi", "Fransiyada inqilob boshlandi va Bastiliya egallandi", ["Milodiy 1776-yil", "Milodiy 1804-yil"], ["AQSh Mustaqillik deklaratsiyasi qabul qilindi", "Gaiti mustaqilligini e'lon qildi"], "Fransuz inqilobi 1789-yilda boshlandi; Bastiliyaning 14-iyulda egallanishi muhim voqealardan bo'ldi."],
  [9, "Milodiy 1791-yil", "Gaiti inqilobining boshlanishi", "Fransiya mustamlakasi Sen-Domingda qullarga qarshi inqilob boshlandi", ["Milodiy 1789-yil", "Milodiy 1815-yil"], ["Fransuz inqilobi boshlandi", "Vaterloo jangi bo'lib o'tdi"], "Sen-Domingdagi Gaiti inqilobi 1791-yilda boshlandi; Gaiti 1804-yilda mustaqilligini e'lon qildi."],
  [9, "Milodiy 1804-yil", "Gaiti mustaqilligining e'lon qilinishi", "Gaiti Fransiyadan mustaqilligini e'lon qildi", ["Milodiy 1791-yil", "Milodiy 1825-yil"], ["Sen-Domingda inqilob boshlandi", "Stockton–Darlington temiryo'li ochildi"], "Gaiti 1804-yil 1-yanvarda mustaqilligini e'lon qildi."],
  [9, "Milodiy 1815-yil", "Vaterloo jangi", "Napoleon Vaterloo jangida yakuniy mag'lubiyatga uchradi", ["Milodiy 1804-yil", "Milodiy 1839-yil"], ["Gaiti mustaqilligini e'lon qildi", "Birinchi afyun urushi boshlandi"], "Napoleon 1815-yilda Vaterloo jangida mag'lub bo'lib, hokimiyatdan butunlay ketdi."],
  [9, "Milodiy 1825-yil", "Stockton–Darlington temiryo'lining ochilishi", "Angliyada bug' lokomotivlaridan foydalangan ommaviy temiryo'l liniyasi ochildi", ["Milodiy 1815-yil", "Milodiy 1848-yil"], ["Vaterloo jangi bo'lib o'tdi", "Kommunistik partiya manifesti nashr etildi"], "Stockton–Darlington temiryo'li 1825-yilda ochilgan va bug' lokomotivlaridan foydalangan ilk ommaviy temiryo'l liniyalaridan biri edi."],
  [9, "Milodiy 1839-yil", "Birinchi afyun urushining boshlanishi", "Buyuk Britaniya va Sin Xitoyi o'rtasida Birinchi afyun urushi boshlandi", ["Milodiy 1825-yil", "Milodiy 1859-yil"], ["Stockton–Darlington temiryo'li ochildi", "Darvinning 'Turlarning kelib chiqishi' asari chiqdi"], "Birinchi afyun urushi 1839–1842-yillarda Buyuk Britaniya va Sin Xitoyi o'rtasida kechgan."],
  [9, "Milodiy 1848-yil", "Kommunistik partiya manifestining nashr etilishi", "Karl Marks va Fridrix Engels 'Kommunistik partiya manifesti'ni nashr etdi", ["Milodiy 1839-yil", "Milodiy 1861-yil"], ["Birinchi afyun urushi boshlandi", "Italiya qirolligi e'lon qilindi"], "Karl Marks va Fridrix Engelsning 'Kommunistik partiya manifesti' 1848-yilda nashr etilgan."],
  [10, "Milodiy 1859-yil", "Darvinning 'Turlarning kelib chiqishi' asari", "Charlz Darvin evolyutsiya nazariyasini bayon qilgan asarini nashr etdi", ["Milodiy 1848-yil", "Milodiy 1868-yil"], ["Kommunistik partiya manifesti nashr etildi", "Meydzi tiklanishi yuz berdi"], "Charlz Darvinning 'Turlarning kelib chiqishi' asari 1859-yilda nashr etilgan."],
  [10, "Milodiy 1861-yil", "Italiya qirolligining e'lon qilinishi", "Italiya qirolligi e'lon qilindi", ["Milodiy 1859-yil", "Milodiy 1871-yil"], ["Darvinning asari nashr etildi", "Germaniya imperiyasi e'lon qilindi"], "Italiya qirolligi 1861-yilda e'lon qilingan; Rim 1870-yilda unga qo'shilgan."],
  [10, "Milodiy 1865-yil", "AQSh Konstitutsiyasiga O'n uchinchi tuzatish", "AQShda qullikni bekor qilgan O'n uchinchi tuzatish ratifikatsiya qilindi", ["Milodiy 1861-yil", "Milodiy 1869-yil"], ["Italiya qirolligi e'lon qilindi", "Suvaysh kanali ochildi"], "AQSh Konstitutsiyasining O'n uchinchi tuzatishi 1865-yilda ratifikatsiya qilinib, qullikni bekor qildi."],
  [10, "Milodiy 1868-yil", "Yaponiyada Meydzi tiklanishi", "Yaponiyada imperator hokimiyati tiklanib, Meydzi islohotlari boshlandi", ["Milodiy 1865-yil", "Milodiy 1871-yil"], ["AQShda qullik bekor qilindi", "Germaniya imperiyasi e'lon qilindi"], "Meydzi tiklanishi 1868-yilda boshlanib, Yaponiyaning modernizatsiyasiga yo'l ochdi."],
  [10, "Milodiy 1869-yil", "Suvaysh kanalining ochilishi", "Suvaysh kanali O'rta yer dengizi va Qizil dengizni tutashtirdi", ["Milodiy 1868-yil", "Milodiy 1884-yil"], ["Meydzi tiklanishi yuz berdi", "Berlin konferensiyasi ochildi"], "Suvaysh kanali 1869-yilda kemalar qatnovi uchun ochilgan."],
  [10, "Milodiy 1871-yil", "Germaniya imperiyasining e'lon qilinishi", "Germaniya imperiyasi Versal saroyida e'lon qilindi", ["Milodiy 1861-yil", "Milodiy 1884-yil"], ["Italiya qirolligi e'lon qilindi", "Berlin konferensiyasi ochildi"], "Germaniya imperiyasi 1871-yil 18-yanvarda Versal saroyida e'lon qilingan."],
  [10, "Milodiy 1884-yil", "Berlin konferensiyasining boshlanishi", "Yevropa davlatlari Afrikadagi mustamlakachilik qoidalarini muhokama qilish uchun Berlin konferensiyasini boshladi", ["Milodiy 1871-yil", "Milodiy 1898-yil"], ["Germaniya imperiyasi e'lon qilindi", "Ispaniya–Amerika urushi boshlandi"], "Berlin konferensiyasi 1884-yil noyabrida boshlandi va 1885-yil fevraligacha davom etdi."],
  [11, "Milodiy 1898-yil", "Ispaniya–Amerika urushining boshlanishi", "AQSh va Ispaniya o'rtasida urush boshlandi", ["Milodiy 1884-yil", "Milodiy 1905-yil"], ["Berlin konferensiyasi boshlandi", "Rossiyada 1905-yilgi inqilob boshlandi"], "Ispaniya–Amerika urushi 1898-yilda bo'lib, Ispaniyaning mustamlaka imperiyasiga katta zarba berdi."],
  [11, "Milodiy 1905-yil", "Rossiyada 1905-yilgi inqilob", "Peterburgdagi Qonli yakshanba voqealaridan so'ng Rossiyada inqilobiy noroziliklar kuchaydi", ["Milodiy 1898-yil", "Milodiy 1911-yil"], ["Ispaniya–Amerika urushi boshlandi", "Xitoyda Sinxay inqilobi boshlandi"], "1905-yil 9-yanvardagi Qonli yakshanba Rossiyadagi inqilobiy harakatni kuchaytirgan voqealardan biri bo'ldi."],
  [11, "Milodiy 1911-yil", "Xitoydagi Sinxay inqilobining boshlanishi", "Uchlik qo'zg'oloni Xitoyda Sinxay inqilobini boshlab berdi", ["Milodiy 1905-yil", "Milodiy 1914-yil"], ["Rossiyada Qonli yakshanba yuz berdi", "Birinchi jahon urushi boshlandi"], "Sinxay inqilobi 1911-yil 10-oktyabrda Uuchang qo'zg'oloni bilan boshlandi va Sin sulolasining tugashiga olib keldi."],
  [11, "Milodiy 1914-yil", "Birinchi jahon urushining boshlanishi", "Avstriya-Vengriya Serbiyaga urush e'lon qildi va jahon urushi boshlandi", ["Milodiy 1911-yil", "Milodiy 1918-yil"], ["Sinxay inqilobi boshlandi", "G'arbiy frontda sulh kuchga kirdi"], "Avstriya-Vengriya 1914-yil 28-iyulda Serbiyaga urush e'lon qildi; ittifoqlar tizimi mojaroni jahon urushiga aylantirdi."],
  [11, "Milodiy 1917-yil", "Rossiyadagi Fevral inqilobi", "Fevral inqilobi natijasida Nikolay II taxtdan voz kechdi", ["Milodiy 1914-yil", "Milodiy 1918-yil"], ["Birinchi jahon urushi boshlandi", "G'arbiy frontda sulh kuchga kirdi"], "1917-yilgi Fevral inqilobi davomida Nikolay II taxtdan voz kechdi va Rossiyada monarxiya tugadi."],
  [11, "Milodiy 1918-yil", "Birinchi jahon urushidagi G'arbiy front sulhi", "Germaniya bilan sulh kuchga kirib, G'arbiy frontdagi janglarni to'xtatdi", ["Milodiy 1917-yil", "Milodiy 1919-yil"], ["Rossiyada Fevral inqilobi yuz berdi", "Versal shartnomasi imzolandi"], "Germaniya bilan sulh 1918-yil 11-noyabrda kuchga kirib, G'arbiy frontdagi janglarni to'xtatdi."]
];

const supplementalFacts = [
  [9, "Milodiy 1919-yil", "Versal shartnomasining imzolanishi", "Germaniya bilan Versal shartnomasi imzolandi", "Versal shartnomasi Germaniya bilan 1919-yil 28-iyunda imzolangan."],
  [9, "Milodiy 1920-yil", "Millatlar Ligasining faoliyat boshlashi", "Millatlar Ligasi rasman faoliyat boshladi", "Millatlar Ligasi 1920-yilda rasman faoliyat boshlagan."],
  [9, "Milodiy 1922-yil", "Sovet Ittifoqining tashkil topishi", "Sovet Sotsialistik Respublikalari Ittifoqi tuzildi", "SSSR 1922-yil 30-dekabrda tashkil topgan."],
  [9, "Milodiy 1929-yil", "Buyuk iqtisodiy inqirozning boshlanishi", "AQSh fond bozorining qulashi Buyuk iqtisodiy inqirozni boshlab berdi", "1929-yildagi fond bozori qulashi Buyuk iqtisodiy inqirozning boshlanishi bilan bog'liq."],
  [9, "Milodiy 1933-yil", "Gitlerning Germaniya kansleri etib tayinlanishi", "Adolf Gitler Germaniya kansleri etib tayinlandi", "Adolf Gitler 1933-yil 30-yanvarda Germaniya kansleri etib tayinlangan."],
  [9, "Milodiy 1936-yil", "Ispaniya fuqarolar urushining boshlanishi", "Ispaniyada respublikachilar va millatchilar o'rtasida fuqarolar urushi boshlandi", "Ispaniya fuqarolar urushi 1936–1939-yillarda davom etgan."],
  [9, "Milodiy 1939-yil", "Ikkinchi jahon urushining Yevropada boshlanishi", "Germaniya Polshaga bostirib kirdi", "Germaniya 1939-yil 1-sentyabrda Polshaga bostirib kirdi."],
  [9, "Milodiy 1940-yil", "Britaniya jangining kechishi", "Germaniya va Buyuk Britaniya havo kuchlari Britaniya jangida to'qnashdi", "Britaniya jangi 1940-yilda Germaniya va Buyuk Britaniya havo kuchlari o'rtasida kechgan."],
  [9, "Milodiy 1941-yil", "Perl-Harbor hujumi", "Yaponiya Gavayidagi Perl-Harbor bazasiga hujum qildi", "Yaponiya Perl-Harbor bazasiga 1941-yil 7-dekabrda hujum qilgan."],
  [9, "Milodiy 1944-yil", "Normandiya desantining boshlanishi", "Ittifoqchi qo'shinlar Normandiyaga desant tushirdi", "Normandiya desanti 1944-yil 6-iyunda boshlandi."],
  [9, "Milodiy 1945-yil", "BMT Nizomining kuchga kirishi", "Birlashgan Millatlar Tashkiloti Nizomi kuchga kirdi", "BMT Nizomi 1945-yil 24-oktyabrda kuchga kirgan."],
  [10, "Milodiy 1947-yil", "Trumen doktrinasining e'lon qilinishi", "AQSh Trumen doktrinasini e'lon qildi", "Prezident Garri Trumen doktrinani 1947-yilda e'lon qilgan."],
  [10, "Milodiy 1948-yil", "Berlin havo ko'prigining boshlanishi", "G'arbiy Berlinni ta'minlash uchun havo ko'prigi tashkil etildi", "Berlin havo ko'prigi 1948-yilda Sovet blokadasiga javoban boshlandi."],
  [10, "Milodiy 1949-yil", "NATOning tashkil etilishi", "Shimoliy Atlantika shartnomasi tashkiloti tuzildi", "NATO 1949-yil 4-aprelda tashkil etilgan."],
  [10, "Milodiy 1950-yil", "Koreya urushining boshlanishi", "Shimoliy Koreya qo'shinlari Janubiy Koreyaga bostirib kirdi", "Koreya urushi 1950-yil 25-iyunda boshlandi."],
  [10, "Milodiy 1953-yil", "Koreya urushidagi sulh", "Koreya yarimorolida janglarni to'xtatgan sulh imzolandi", "Koreya urushidagi sulh 1953-yil 27-iyulda imzolangan; tinchlik shartnomasi tuzilmagan."],
  [10, "Milodiy 1955-yil", "Varshava shartnomasi tashkilotining tuzilishi", "SSSR va Sharqiy Yevropa davlatlari Varshava shartnomasini imzoladi", "Varshava shartnomasi 1955-yilda imzolangan."],
  [10, "Milodiy 1956-yil", "Suvaysh inqirozining boshlanishi", "Suvaysh kanali milliylashtirilishidan keyin Misrga qarshi harbiy amaliyot boshlandi", "Suvaysh inqirozi 1956-yilda Misr kanalni milliylashtirganidan so'ng yuz bergan."],
  [10, "Milodiy 1957-yil", "Sputnik-1ning orbitaga chiqarilishi", "SSSR Yerning birinchi sun'iy yo'ldoshini orbitaga chiqardi", "Sputnik-1 1957-yil 4-oktyabrda orbitaga chiqarilgan."],
  [10, "Milodiy 1961-yil", "Berlin devori qurilishining boshlanishi", "Sharqiy Germaniya Berlin devorini qurishni boshladi", "Berlin devori qurilishi 1961-yil avgustida boshlangan."],
  [10, "Milodiy 1962-yil", "Karib inqirozi", "Sovet raketalarining Kubaga joylashtirilishi yadro inqirozini keltirib chiqardi", "Karib inqirozi 1962-yilda AQSh va SSSRni yadro urushi yoqasiga olib kelgan."],
  [10, "Milodiy 1967-yil", "Olti kunlik urush", "Isroil va arab davlatlari o'rtasida Olti kunlik urush bo'lib o'tdi", "Olti kunlik urush 1967-yil iyunida bo'lib o'tgan."],
  [10, "Milodiy 1968-yil", "Praga bahorining bostirilishi", "Varshava shartnomasi qo'shinlari Chexoslovakiyaga kirdi", "Praga bahori islohotlari 1968-yil avgustida harbiy aralashuv bilan to'xtatildi."],
  [10, "Milodiy 1969-yil", "Apollon-11ning Oyga qo'nishi", "Nil Armstrong va Bazz Oldrin Oy yuzasiga qadam qo'ydi", "Apollon-11 Oyga 1969-yil 20-iyulda qo'ndi."],
  [10, "Milodiy 1973-yil", "Neft inqirozining boshlanishi", "Arab neft eksport qiluvchi davlatlar neft embargosini joriy qildi", "1973-yilgi neft embargosi jahon iqtisodiyotida katta inqiroz keltirib chiqardi."],
  [10, "Milodiy 1975-yil", "Saygonning qulashi", "Shimoliy Vetnam qo'shinlari Saygonni egalladi", "Saygon 1975-yil 30-aprelda egallangan va Vetnam urushi yakunlangan."],
  [10, "Milodiy 1976-yil", "Vetnamning qayta birlashishi", "Vetnam yagona davlat sifatida rasman birlashtirildi", "Vetnam 1976-yil 2-iyulda rasman birlashgan."],
  [11, "Milodiy 1979-yil", "Eron inqilobining g'alabasi", "Eron inqilobi monarxiya ag'darilishi bilan yakunlandi", "Eron inqilobi 1979-yilda monarxiya ag'darilib, Islom Respublikasi e'lon qilinishiga olib keldi."],
  [11, "Milodiy 1982-yil", "Folklend urushi", "Buyuk Britaniya va Argentina Folklend orollari uchun urushdi", "Folklend urushi 1982-yilda Buyuk Britaniya va Argentina o'rtasida bo'lib o'tgan."],
  [11, "Milodiy 1986-yil", "Chernobil AES halokati", "Chernobil atom elektr stansiyasining to'rtinchi reaktorida avariya yuz berdi", "Chernobil AES halokati 1986-yil 26-aprelda sodir bo'lgan."],
  [11, "Milodiy 1989-yil", "Berlin devorining ochilishi", "Sharqiy va G'arbiy Berlin o'rtasidagi o'tish joylari ochildi", "Berlin devoridan o'tish 1989-yil 9-noyabrda ochilgan."],
  [11, "Milodiy 1990-yil", "Germaniyaning qayta birlashishi", "Germaniya Demokratik Respublikasi va Germaniya Federativ Respublikasi qayta birlashdi", "Germaniya 1990-yil 3-oktyabrda rasman qayta birlashgan."],
  [11, "Milodiy 1991-yil", "Sovet Ittifoqining tugatilishi", "Sovet Ittifoqi rasman tarqatib yuborildi", "SSSR 1991-yil dekabrida rasman tugatilgan."],
  [11, "Milodiy 1992-yil", "Maastrixt shartnomasining imzolanishi", "Yevropa Ittifoqini shakllantirgan Maastrixt shartnomasi imzolandi", "Maastrixt shartnomasi 1992-yil 7-fevralda imzolangan."],
  [11, "Milodiy 1993-yil", "Yevropa Ittifoqining rasman tashkil topishi", "Maastrixt shartnomasi kuchga kirib, Yevropa Ittifoqi tashkil topdi", "Maastrixt shartnomasi 1993-yil 1-noyabrda kuchga kirgan."],
  [11, "Milodiy 1994-yil", "Janubiy Afrikadagi ilk umumiy demokratik saylovlar", "Janubiy Afrikada barcha irqlar qatnashgan saylovlar o'tkazildi", "Janubiy Afrikada aparteiddan keyingi ilk umumiy demokratik saylovlar 1994-yilda o'tkazilgan."],
  [11, "Milodiy 1995-yil", "Dayton tinchlik kelishuvlarining imzolanishi", "Bosniya urushini tugatgan Dayton kelishuvlari imzolandi", "Dayton kelishuvlari 1995-yil noyabrida imzolangan."],
  [11, "Milodiy 1997-yil", "Gonkong boshqaruvining Xitoyga o'tishi", "Buyuk Britaniya Gonkong ustidan suverenitetni Xitoyga topshirdi", "Gonkong boshqaruvi 1997-yil 1-iyulda Xitoyga o'tgan."],
  [11, "Milodiy 1998-yil", "Xayrli juma kelishuvi", "Shimoliy Irlandiya tinchlik kelishuvi imzolandi", "Xayrli juma kelishuvi 1998-yil 10-aprelda imzolangan."],
  [11, "Milodiy 1999-yil", "Yevroning naqdsiz hisob-kitoblarda joriy etilishi", "Yevro banknot va tangalarsiz hisob-kitob valyutasi sifatida ishga tushdi", "Yevro naqdsiz hisob-kitoblarda 1999-yilda joriy etilgan; naqd pul 2002-yilda muomalaga kirdi."],
  [11, "Milodiy 2001-yil", "11-sentyabr terror xurujlari", "Al-Qoida AQShda bir qator muvofiqlashtirilgan hujumlarni amalga oshirdi", "11-sentyabr xurujlari 2001-yilda AQShda sodir bo'lgan."],
  [11, "Milodiy 2002-yil", "Xalqaro jinoiy sudning faoliyat boshlashi", "Rim statuti kuchga kirib, Xalqaro jinoiy sud ish boshladi", "Xalqaro jinoiy sud 2002-yilda faoliyat boshlagan."],
  [11, "Milodiy 2004-yil", "Yevropa Ittifoqining yirik kengayishi", "Markaziy va Sharqiy Yevropaning o'nta davlati Yevropa Ittifoqiga qo'shildi", "Yevropa Ittifoqiga o'nta davlat 2004-yil 1-mayda qo'shildi."],
  [11, "Milodiy 2005-yil", "Kioto protokolining kuchga kirishi", "Iqlim o'zgarishiga qarshi Kioto protokoli kuchga kirdi", "Kioto protokoli 2005-yil 16-fevralda kuchga kirgan."],
  [11, "Milodiy 2008-yil", "G20 yetakchilarining birinchi sammiti", "G20 davlatlari yetakchilari birinchi marta sammitda uchrashdi", "G20 yetakchilarining birinchi sammiti 2008-yilda Vashingtonda o'tkazilgan."],
  [11, "Milodiy 2011-yil", "Janubiy Sudanning mustaqilligi", "Janubiy Sudan Sudandan mustaqilligini e'lon qildi", "Janubiy Sudan 2011-yil 9-iyulda mustaqil davlatga aylandi."],
  [11, "Milodiy 2015-yil", "Parij iqlim kelishuvining qabul qilinishi", "Mamlakatlar iqlim o'zgarishiga qarshi Parij kelishuvini qabul qildi", "Parij iqlim kelishuvi 2015-yil dekabrida qabul qilingan."],
  [11, "Milodiy 2016-yil", "Brexit referendumining o'tkazilishi", "Buyuk Britaniyada saylovchilar Yevropa Ittifoqidan chiqishni qo'llab-quvvatladi", "Brexit referendumi 2016-yil 23-iyunda o'tkazilgan."],
  [11, "Milodiy 2020-yil", "COVID-19 pandemiyasining e'lon qilinishi", "Jahon sog'liqni saqlash tashkiloti COVID-19ni pandemiya deb e'lon qildi", "JSST COVID-19ni 2020-yil 11-martda pandemiya deb e'lon qilgan."],
  [11, "Milodiy 2020-yil", "Buyuk Britaniyaning Yevropa Ittifoqidan chiqishi", "Buyuk Britaniya Yevropa Ittifoqidan rasman chiqdi", "Buyuk Britaniya Yevropa Ittifoqidan 2020-yil 31-yanvarda rasman chiqqan."],
  [9, "Milodiy 1944-yil", "Varshava qo'zg'olonining boshlanishi", "Polsha qarshilik harakati Varshavada natsistlarga qarshi qo'zg'olon boshladi", "Varshava qo'zg'oloni 1944-yil 1-avgustda boshlangan."],
  [9, "Milodiy 1945-yil", "Yalta konferensiyasining o'tkazilishi", "Ittifoqchi davlatlar rahbarlari Qrimdagi Yalta konferensiyasida uchrashdi", "Yalta konferensiyasi 1945-yil fevralida bo'lib o'tgan."],
  [9, "Milodiy 1945-yil", "Potsdam konferensiyasining o'tkazilishi", "Ittifoqchilar urushdan keyingi Yevropa masalalarini Potsdamda muhokama qildi", "Potsdam konferensiyasi 1945-yil iyul–avgust oylarida o'tkazilgan."],
  [9, "Milodiy 1948-yil", "Inson huquqlari umumjahon deklaratsiyasining qabul qilinishi", "BMT Bosh Assambleyasi Inson huquqlari umumjahon deklaratsiyasini qabul qildi", "Deklaratsiya 1948-yil 10-dekabrda qabul qilingan."],
  [9, "Milodiy 1948-yil", "Isroil davlatining e'lon qilinishi", "Isroil davlati mustaqilligini e'lon qildi", "Isroil mustaqilligi 1948-yil 14-mayda e'lon qilingan."],
  [9, "Milodiy 1949-yil", "Xitoy Xalq Respublikasining tashkil topishi", "Mao Szedun Xitoy Xalq Respublikasi tashkil topganini e'lon qildi", "Xitoy Xalq Respublikasi 1949-yil 1-oktyabrda e'lon qilingan."],
  [9, "Milodiy 1949-yil", "NATO shartnomasining imzolanishi", "Shimoliy Atlantika shartnomasi imzolandi", "NATOni tashkil etgan shartnoma 1949-yil 4-aprelda imzolangan."],
  [10, "Milodiy 1950-yil", "Shuman deklaratsiyasining e'lon qilinishi", "Fransiya tashqi ishlar vaziri Yevropa ko'mir va po'lat hamjamiyatini taklif qildi", "Robert Shuman deklaratsiyasi 1950-yil 9-mayda e'lon qilingan."],
  [10, "Milodiy 1954-yil", "Jeneva kelishuvlarining imzolanishi", "Hindixitoydagi urushni to'xtatishga qaratilgan Jeneva kelishuvlari tuzildi", "Jeneva kelishuvlari 1954-yil 21-iyulda imzolangan."],
  [10, "Milodiy 1956-yil", "Vengriya qo'zg'olonining boshlanishi", "Vengriyada sovet nazoratiga qarshi qo'zg'olon boshlandi", "Vengriya qo'zg'oloni 1956-yil oktyabrida boshlangan."],
  [10, "Milodiy 1957-yil", "Rim shartnomalarining imzolanishi", "Yevropa iqtisodiy hamjamiyatini tuzgan Rim shartnomalari imzolandi", "Rim shartnomalari 1957-yil 25-martda imzolangan."],
  [10, "Milodiy 1960-yil", "Afrika yilida mustaqillikka erishgan davlatlar", "Afrikaning ko'plab davlatlari mustaqillikka erishdi", "1960-yilda Afrikaning 17 davlati mustaqillikka erishgani uchun yil 'Afrika yili' deb atalgan."],
  [10, "Milodiy 1961-yil", "Qo'shilmaslik harakatining birinchi sammiti", "Qo'shilmaslik harakati rahbarlari Belgradda birinchi sammitni o'tkazdi", "Qo'shilmaslik harakatining birinchi sammiti 1961-yilda Belgradda o'tkazilgan."],
  [10, "Milodiy 1962-yil", "Jazoir mustaqilligining tan olinishi", "Jazoir Fransiyadan mustaqil bo'ldi", "Jazoir 1962-yilda Evian kelishuvlaridan so'ng mustaqillikka erishgan."],
  [10, "Milodiy 1963-yil", "Yadro sinovlarini qisman taqiqlash shartnomasi", "Atmosfera, kosmos va suv ostida yadro sinovlarini taqiqlovchi shartnoma imzolandi", "Yadro sinovlarini qisman taqiqlash shartnomasi 1963-yil 5-avgustda imzolangan."],
  [10, "Milodiy 1964-yil", "AQShda Fuqarolik huquqlari to'g'risidagi qonun", "AQShda irqiy kamsitishni taqiqlovchi Fuqarolik huquqlari to'g'risidagi qonun qabul qilindi", "AQSh Fuqarolik huquqlari to'g'risidagi qonuni 1964-yilda qabul qilingan."],
  [10, "Milodiy 1967-yil", "ASEAN tashkilotining tuzilishi", "Janubi-Sharqiy Osiyo davlatlari ASEAN tashkilotini tuzdi", "ASEAN 1967-yil 8-avgustda tashkil etilgan."],
  [10, "Milodiy 1968-yil", "Yadro qurolini tarqatmaslik shartnomasining imzolash uchun ochilishi", "Yadro qurolini tarqatmaslik shartnomasi imzolash uchun ochildi", "Yadro qurolini tarqatmaslik shartnomasi 1968-yilda imzolash uchun ochilgan."],
  [10, "Milodiy 1971-yil", "Bangladesh mustaqilligining e'lon qilinishi", "Sharqiy Pokiston Bangladesh nomi bilan mustaqilligini e'lon qildi", "Bangladesh mustaqilligini 1971-yil 26-martda e'lon qilgan."],
  [10, "Milodiy 1973-yil", "Yom Kippur urushining boshlanishi", "Misr va Suriya Isroilga qarshi hujum boshladi", "Yom Kippur urushi 1973-yil oktyabrida boshlangan."],
  [10, "Milodiy 1975-yil", "Xelsinki yakunlovchi aktining imzolanishi", "Yevropa xavfsizligi va hamkorligi bo'yicha Xelsinki akti imzolandi", "Xelsinki yakunlovchi akti 1975-yil 1-avgustda imzolangan."],
  [10, "Milodiy 1978-yil", "Kemp-Devid kelishuvlarining tuzilishi", "Misr va Isroil rahbarlari AQSh vositachiligida kelishuvga erishdi", "Kemp-Devid kelishuvlari 1978-yil sentyabrida imzolangan."],
  [10, "Milodiy 1980-yil", "Polshada 'Birdamlik' kasaba uyushmasining tuzilishi", "Gdanskda mustaqil 'Birdamlik' kasaba uyushmasi tashkil topdi", "Polshaning 'Birdamlik' kasaba uyushmasi 1980-yilda tuzilgan."],
  [10, "Milodiy 1987-yil", "O'rta va qisqa masofali raketalarni yo'q qilish shartnomasi", "AQSh va SSSR INF shartnomasini imzoladi", "INF shartnomasi 1987-yil 8-dekabrda imzolangan."],
  [10, "Milodiy 1989-yil", "Polshada 'Dumaloq stol' muzokaralarining boshlanishi", "Polsha hukumati va muxolifat vakillari muzokaralarni boshladi", "Polshadagi 'Dumaloq stol' muzokaralari 1989-yil fevralida boshlangan."],
  [11, "Milodiy 1990-yil", "Namibiyaning mustaqillikka erishishi", "Namibiya Janubiy Afrikadan mustaqilligini e'lon qildi", "Namibiya 1990-yil 21-martda mustaqil bo'lgan."],
  [11, "Milodiy 1991-yil", "'Cho'l bo'roni' operatsiyasining boshlanishi", "AQSh boshchiligidagi koalitsiya Iroq qo'shinlariga qarshi havo hujumlarini boshladi", "'Cho'l bo'roni' operatsiyasi 1991-yil 17-yanvarda boshlangan."],
  [11, "Milodiy 1993-yil", "Oslo kelishuvlarining imzolanishi", "Isroil va Falastin Ozodlik Tashkiloti o'zaro kelishuv imzoladi", "Oslo kelishuvlari 1993-yil 13-sentyabrda imzolangan."],
  [11, "Milodiy 1994-yil", "Ruandadagi genotsidning boshlanishi", "Ruandada tutsi aholiga qarshi genotsid boshlandi", "Ruandadagi genotsid 1994-yil aprelida boshlangan."],
  [11, "Milodiy 1995-yil", "Jahon Savdo Tashkilotining faoliyat boshlashi", "Jahon Savdo Tashkiloti xalqaro savdoni tartibga solish uchun ish boshladi", "Jahon Savdo Tashkiloti 1995-yil 1-yanvarda faoliyat boshlagan."],
  [11, "Milodiy 1997-yil", "Osiyo moliyaviy inqirozining boshlanishi", "Tailand valyuta inqirozi Osiyo moliyaviy inqirozini boshlab berdi", "Osiyo moliyaviy inqirozi 1997-yilda Tailandda boshlangan."],
  [11, "Milodiy 1999-yil", "Kosovo urushidagi NATO amaliyoti", "NATO Yugoslaviyaga qarshi havo amaliyotini boshladi", "NATOning Yugoslaviyaga qarshi havo amaliyoti 1999-yil martida boshlangan."],
  [11, "Milodiy 2001-yil", "Xitoyning Jahon Savdo Tashkilotiga a'zo bo'lishi", "Xitoy Jahon Savdo Tashkilotiga qo'shildi", "Xitoy Jahon Savdo Tashkilotiga 2001-yil 11-dekabrda a'zo bo'lgan."],
  [11, "Milodiy 2003-yil", "Iroq urushining boshlanishi", "AQSh boshchiligidagi koalitsiya Iroqqa harbiy amaliyot boshladi", "Iroq urushi 2003-yil martida boshlangan."],
  [11, "Milodiy 2004-yil", "Hind okeanidagi zilzila va sunami", "Hind okeanida kuchli zilzila ortidan sunami yuz berdi", "Hind okeanidagi zilzila va sunami 2004-yil 26-dekabrda sodir bo'lgan."],
  [11, "Milodiy 2007-yil", "Lissabon shartnomasining imzolanishi", "Yevropa Ittifoqi davlatlari Lissabon shartnomasini imzoladi", "Lissabon shartnomasi 2007-yil 13-dekabrda imzolangan."],
  [11, "Milodiy 2010-yil", "Arab bahori noroziliklarining boshlanishi", "Tunisdagi noroziliklar arab mamlakatlariga tarqalgan qo'zg'olonlar to'lqinini boshlab berdi", "Arab bahori 2010-yil oxirida Tunisda boshlangan."],
  [11, "Milodiy 2013-yil", "'Bir makon, bir yo'l' tashabbusining e'lon qilinishi", "Xitoy rahbari Si Szinpin xalqaro infratuzilma tashabbusini ilgari surdi", "'Bir makon, bir yo'l' tashabbusi 2013-yilda ilgari surilgan."],
  [11, "Milodiy 2014-yil", "G'arbiy Afrikadagi Ebola epidemiyasining avj olishi", "G'arbiy Afrikada Ebola epidemiyasi xalqaro favqulodda holatga aylandi", "G'arbiy Afrikadagi Ebola epidemiyasi 2014-yilda avj olgan."],
  [11, "Milodiy 2019-yil", "Qora tuynukning ilk tasvirining e'lon qilinishi", "Event Horizon Telescope loyihasi qora tuynukning ilk tasvirini e'lon qildi", "Qora tuynukning ilk tasviri 2019-yil 10-aprelda e'lon qilingan."],
  [9, "Milodiy 1945-yil", "Nyurnberg sud jarayonlarining boshlanishi", "Natsist Germaniyasi rahbarlari ustidan xalqaro sud jarayonlari boshlandi", "Nyurnberg sud jarayonlari 1945-yil 20-noyabrda boshlangan."],
  [10, "Milodiy 1965-yil", "AQShda Ovoz berish huquqi to'g'risidagi qonun", "AQShda saylovlarda irqiy kamsitishni taqiqlovchi qonun qabul qilindi", "AQSh Ovoz berish huquqi to'g'risidagi qonuni 1965-yilda qabul qilingan."],
  [10, "Milodiy 1979-yil", "Eron inqilobining g'alabasi", "Eron inqilobi monarxiya ag'darilishi bilan yakunlandi", "Eron inqilobi 1979-yilda monarxiya ag'darilib, Islom Respublikasi e'lon qilinishiga olib keldi."],
  [10, "Milodiy 1982-yil", "Folklend urushining boshlanishi", "Argentina qo'shinlari Folklend orollariga tushdi", "Folklend urushi 1982-yil aprelida boshlangan."],
  [10, "Milodiy 1986-yil", "Chernobil AES halokati", "Chernobil atom elektr stansiyasida yirik avariya yuz berdi", "Chernobil AES halokati 1986-yil 26-aprelda sodir bo'lgan."],
  [11, "Milodiy 1992-yil", "Rio-de-Janeyro Yer sammiti", "BMTning Atrof-muhit va taraqqiyot bo'yicha konferensiyasi Rio-de-Janeyroda o'tkazildi", "Rio Yer sammiti 1992-yil iyunida o'tkazilgan."],
  [11, "Milodiy 2002-yil", "Yevro banknot va tangalarining muomalaga kiritilishi", "Yevro banknot va tangalari Yevropa mamlakatlarida muomalaga kirdi", "Yevro naqd pul shaklida 2002-yil 1-yanvarda muomalaga kiritilgan."],
  [11, "Milodiy 2005-yil", "Kioto protokolining kuchga kirishi", "Iqlim o'zgarishiga qarshi Kioto protokoli kuchga kirdi", "Kioto protokoli 2005-yil 16-fevralda kuchga kirgan."],
  [11, "Milodiy 2009-yil", "Lissabon shartnomasining kuchga kirishi", "Yevropa Ittifoqining Lissabon shartnomasi kuchga kirdi", "Lissabon shartnomasi 2009-yil 1-dekabrda kuchga kirgan."],
  [11, "Milodiy 2012-yil", "Yevropa Ittifoqining Tinchlik bo'yicha Nobel mukofotini olishi", "Yevropa Ittifoqiga Tinchlik bo'yicha Nobel mukofoti berildi", "Yevropa Ittifoqi 2012-yilda Tinchlik bo'yicha Nobel mukofoti bilan taqdirlangan."],
  [5, "Miloddan avvalgi 776-yil", "Qadimgi Olimpiya o'yinlarining ilk qaydi", "Yunon an'analarida Olimpiya o'yinlarining ilk qaydi yozib qoldirildi", "Qadimgi yunon an'analarida Olimpiya o'yinlarining ilk qaydi miloddan avvalgi 776-yilga tegishli."],
  [5, "Miloddan avvalgi 753-yil", "Rim shahrining afsonaviy tashkil topishi", "Rimning afsonaviy tashkil topish sanasi qayd etildi", "Rimning tashkil topishi an'anaviy ravishda miloddan avvalgi 753-yilga nisbat beriladi."],
  [5, "Miloddan avvalgi 490-yil", "Marafon jangi", "Afina boshchiligidagi yunonlar Marafon jangida forslar ustidan g'alaba qozondi", "Marafon jangi miloddan avvalgi 490-yilda bo'lib o'tgan."],
  [5, "Miloddan avvalgi 480-yil", "Fermopil jangi", "Yunon qo'shinlari Fermopil dovonida fors qo'shiniga qarshi jang qildi", "Fermopil jangi miloddan avvalgi 480-yilda bo'lib o'tgan."],
  [5, "Miloddan avvalgi 431-yil", "Peloponnes urushining boshlanishi", "Afina va Sparta boshchiligidagi ittifoqlar o'rtasida Peloponnes urushi boshlandi", "Peloponnes urushi miloddan avvalgi 431-yilda boshlangan."],
  [5, "Miloddan avvalgi 334-yil", "Iskandarning Osiyoga yurishining boshlanishi", "Makedoniyalik Iskandar Hellespontdan o'tib, Fors davlatiga qarshi yurishni boshladi", "Iskandar miloddan avvalgi 334-yilda Fors davlatiga qarshi yurishni boshlagan."],
  [5, "Miloddan avvalgi 331-yil", "Gavgamela jangi", "Iskandar qo'shini Gavgamela jangida Doro III qo'shinini mag'lub etdi", "Gavgamela jangi miloddan avvalgi 331-yilda bo'lib o'tgan."],
  [6, "Milodiy 410-yil", "Rimning vestgotlar tomonidan talanishi", "Alarix boshchiligidagi vestgotlar Rim shahrini taladi", "Vestgotlar Rimni 410-yilda talagan."],
  [6, "Milodiy 527-yil", "Yustinian I ning Vizantiya taxtiga o'tirishi", "Yustinian I Vizantiya imperatori bo'ldi", "Yustinian I 527-yilda Vizantiya imperatori bo'lgan."],
  [6, "Milodiy 610-yil", "Islom an'anasida ilk vahiy kelishi", "Islom an'anasiga ko'ra, Muhammad payg'ambarga ilk vahiy keldi", "Islom an'anasida ilk vahiy kelishi taxminan 610-yil bilan bog'lanadi."],
  [6, "Milodiy 711-yil", "Umaviylarning Pireney yarimoroliga yurishi", "Toriq ibn Ziyod qo'shinlari Gibraltar bo'g'ozidan o'tib yarimorolga kirdi", "Umaviy qo'shinlarining Pireney yarimoroliga yurishi 711-yilda boshlangan."],
  [6, "Milodiy 843-yil", "Verden shartnomasining tuzilishi", "Franklar imperiyasi Karl Buyukning nabiralari o'rtasida bo'lindi", "Verden shartnomasi 843-yilda imzolanib, Franklar imperiyasini bo'lib yuborgan."],
  [6, "Milodiy 962-yil", "Otto I ga imperator tojining kiydirilishi", "Papa Ioann XII Otto I ga imperator tojini kiydirdi", "Otto I 962-yilda imperator tojini kiygan; bu Muqaddas Rim imperiyasi tarixining boshlanishi bilan bog'lanadi."],
  [6, "Milodiy 1095-yil", "Klermon kengashidagi salib yurishi chaqirig'i", "Rim papasi Urban II Klermon kengashida salib yurishiga chaqirdi", "Urban II 1095-yilda Klermon kengashida salib yurishiga chaqirgan."],
  [7, "Milodiy 1455-yil", "Gutenberg Injilining bosib chiqarilishi", "Iogann Gutenberg Yevropadagi mashhur bosma Injil nusxalarini tayyorladi", "Gutenberg Injili taxminan 1455-yilda bosib chiqarilgan."],
  [7, "Milodiy 1492-yil", "Kolumb ekspeditsiyasining Karib orollariga yetib borishi", "Xristofor Kolumb ekspeditsiyasi Karib dengizi orollariga yetib bordi", "Kolumb ekspeditsiyasi 1492-yilda Karib dengizi orollariga yetib borgan."],
  [7, "Milodiy 1519-yil", "Magellan ekspeditsiyasining yo'lga chiqishi", "Magellan boshchiligidagi ekspeditsiya dunyo bo'ylab safarga chiqdi", "Magellan ekspeditsiyasi 1519-yilda Ispaniyadan yo'lga chiqqan."],
  [7, "Milodiy 1521-yil", "Tenochtitlanning ispanlar tomonidan egallanishi", "Ernan Kortes va uning ittifoqchilari atsteklar poytaxtini egalladi", "Tenochtitlan 1521-yilda ispanlar va ularning mahalliy ittifoqchilari tomonidan egallangan."],
  [7, "Milodiy 1526-yil", "Birinchi Panipat jangi", "Bobur qo'shini Panipat jangida Dehli sultoni Ibrohim Lo'diyni mag'lub etdi", "Birinchi Panipat jangi 1526-yilda bo'lib o'tgan."],
  [7, "Milodiy 1545-yil", "Trident kengashining ochilishi", "Katolik cherkovi islohotlarni muhokama qilish uchun Trident kengashini chaqirdi", "Trident kengashi 1545-yilda ish boshlagan."],
  [7, "Milodiy 1571-yil", "Lepanto dengiz jangi", "Muqaddas Liga floti Lepanto jangida Usmonli flotiga qarshi g'alaba qozondi", "Lepanto dengiz jangi 1571-yil 7-oktyabrda bo'lib o'tgan."],
  [8, "Milodiy 1642-yil", "Angliya fuqarolar urushining boshlanishi", "Qirol tarafdorlari va parlament qo'shinlari o'rtasida urush boshlandi", "Angliya fuqarolar urushi 1642-yilda boshlangan."],
  [8, "Milodiy 1689-yil", "Angliya Huquqlar to'g'risidagi billining qabul qilinishi", "Parlament monarx vakolatlarini cheklovchi Huquqlar to'g'risidagi billni qabul qildi", "Angliya Huquqlar to'g'risidagi billini 1689-yilda qabul qilgan."],
  [8, "Milodiy 1756-yil", "Yetti yillik urushning boshlanishi", "Yevropa va mustamlakalarda yirik davlatlar o'rtasida Yetti yillik urush boshlandi", "Yetti yillik urush 1756–1763-yillarda davom etgan."],
  [8, "Milodiy 1773-yil", "Boston choyxo'rligi", "Mustamlakachilar Britaniya choyini Boston bandargohiga tashladi", "Boston choyxo'rligi 1773-yil 16-dekabrda sodir bo'lgan."],
  [8, "Milodiy 1775-yil", "Amerika mustaqillik urushining boshlanishi", "Britaniya qo'shinlari va Shimoliy Amerika mustamlakalari o'rtasida urush boshlandi", "Amerika mustaqillik urushi 1775-yilda boshlangan."],
  [8, "Milodiy 1783-yil", "Parij shartnomasining imzolanishi", "Buyuk Britaniya AQSh mustaqilligini Parij shartnomasi bilan tan oldi", "Parij shartnomasi 1783-yilda imzolanib, AQSh mustaqilligini tan oldi."],
  [8, "Milodiy 1799-yil", "Napoleonning 18 Bryumer to'ntarishi", "Napoleon Bonapart Fransiyada hokimiyatni qo'lga oldi", "Napoleon 1799-yil noyabrida 18 Bryumer to'ntarishi orqali hokimiyatga keldi."],
  [9, "Milodiy 1830-yil", "Fransiyadagi Iyul inqilobi", "Parij qo'zg'oloni Burbonlar sulolasining hokimiyatdan ketishiga olib keldi", "Fransiyadagi Iyul inqilobi 1830-yilda yuz bergan."],
  [9, "Milodiy 1848-yil", "Yevropadagi inqiloblar to'lqini", "Yevropaning turli mamlakatlarida inqilobiy qo'zg'olonlar boshlandi", "1848-yilda Yevropaning ko'plab mamlakatlarida inqiloblar yuz bergan."],
  [9, "Milodiy 1853-yil", "Qrim urushining boshlanishi", "Rossiya va Usmonli imperiyasi o'rtasida Qrim urushi boshlandi", "Qrim urushi 1853–1856-yillarda kechgan."],
  [9, "Milodiy 1857-yil", "Hindistondagi qo'zg'olonning boshlanishi", "Hindistonning shimolida Britaniya hukmronligiga qarshi yirik qo'zg'olon boshlandi", "Hindistondagi 1857-yilgi qo'zg'olon Britaniya hukmronligiga qarshi ko'tarilgan."],
  [9, "Milodiy 1863-yil", "AQShdagi Emansipatsiya deklaratsiyasi", "Avraam Linkoln isyonchi shtatlardagi qullarni ozod deb e'lon qildi", "Emansipatsiya deklaratsiyasi 1863-yil 1-yanvarda kuchga kirgan."],
  [9, "Milodiy 1871-yil", "Parij kommunasining e'lon qilinishi", "Parijda inqilobiy boshqaruv organi — Kommuna hokimiyatga keldi", "Parij kommunasi 1871-yil martidan mayigacha faoliyat yuritgan."],
  [9, "Milodiy 1896-yil", "Zamonaviy Olimpiya o'yinlarining tiklanishi", "Birinchi zamonaviy Olimpiya o'yinlari Afinada o'tkazildi", "Birinchi zamonaviy Olimpiya o'yinlari 1896-yilda Afinada bo'lib o'tgan."],
  [10, "Milodiy 1903-yil", "Rayt aka-ukalarining motorli parvozi", "Orvill Rayt boshqaruvidagi samolyot boshqariladigan motorli parvozni amalga oshirdi", "Rayt aka-ukalarining motorli parvozi 1903-yil 17-dekabrda bo'lgan."],
  [10, "Milodiy 1905-yil", "Rossiyadagi Qonli yakshanba", "Peterburgdagi namoyishchilar podsho qo'shinlari tomonidan o'qqa tutildi", "Qonli yakshanba Rossiyada 1905-yil 9-yanvarda yuz bergan."],
  [10, "Milodiy 1910-yil", "Meksika inqilobining boshlanishi", "Porfirio Dias hukmronligiga qarshi Meksika inqilobi boshlandi", "Meksika inqilobi 1910-yilda boshlangan."],
  [10, "Milodiy 1914-yil", "Birinchi jahon urushining boshlanishi", "Avstriya-Vengriya Serbiyaga urush e'lon qildi", "Birinchi jahon urushi 1914-yil iyulida boshlandi."],
  [10, "Milodiy 1916-yil", "Irlandiyadagi Pasxa qo'zg'oloni", "Irlandiya respublikachilari Dublinda Britaniya boshqaruviga qarshi qo'zg'olon ko'tardi", "Pasxa qo'zg'oloni 1916-yil aprelida Dublinda yuz bergan."],
  [10, "Milodiy 1917-yil", "Rossiyadagi Oktyabr inqilobi", "Bolsheviklar Muvaqqat hukumatni ag'darib, hokimiyatni egalladi", "Oktyabr inqilobi 1917-yilda Rossiyada yuz bergan."],
  [10, "Milodiy 1918-yil", "Germaniyadagi Noyabr inqilobi", "Germaniya inqilobi kayzer Vilgelm II ning taxtdan ketishiga olib keldi", "Noyabr inqilobi 1918-yilda Germaniyada yuz bergan."],
  [11, "Milodiy 1922-yil", "Tutankhamun maqbarasining topilishi", "Xovard Karter Misrda Tutankhamun maqbarasini topdi", "Tutankhamun maqbarasi 1922-yil noyabrida topilgan."],
  [11, "Milodiy 1928-yil", "Penitsillinning kashf etilishi", "Aleksandr Fleming penitsillinning bakteriyalarga qarshi ta'sirini aniqladi", "Fleming penitsillinni 1928-yilda kashf etgan."],
  [11, "Milodiy 1933-yil", "Gitlerning kansler etib tayinlanishi", "Adolf Gitler Germaniya kansleri lavozimiga tayinlandi", "Gitler 1933-yil 30-yanvarda kansler bo'lgan."],
  [11, "Milodiy 1938-yil", "Myunxen kelishuvining tuzilishi", "Yevropa davlatlari Chexoslovakiyaning Sudet hududini Germaniyaga berishga rozi bo'ldi", "Myunxen kelishuvi 1938-yil sentyabrida tuzilgan."],
  [11, "Milodiy 1942-yil", "Miduey jangining boshlanishi", "AQSh va Yaponiya floti Miduey atollari yaqinida jang qildi", "Miduey jangi 1942-yil iyunida bo'lib o'tgan."],
  [11, "Milodiy 1943-yil", "Stalingrad jangining yakunlanishi", "Germaniya qo'shinlarining Stalingraddagi qoldiqlari taslim bo'ldi", "Stalingrad jangi 1943-yil fevralida yakunlangan."],
  [11, "Milodiy 1945-yil", "Birlashgan Millatlar Tashkilotining tashkil topishi", "BMT Nizomi kuchga kirib, tashkilot rasman tuzildi", "BMT 1945-yil 24-oktyabrda rasman tashkil topgan."],
  [10, "Milodiy 1946-yil", "YUNISEFning tashkil etilishi", "BMT Bosh Assambleyasi bolalar uchun YUNISEF jamg'armasini tuzdi", "YUNISEF 1946-yil 11-dekabrda tashkil etilgan."],
  [10, "Milodiy 1951-yil", "Yevropa ko'mir va po'lat hamjamiyati shartnomasining imzolanishi", "Olti Yevropa davlati ko'mir va po'lat hamjamiyatini tuzish shartnomasini imzoladi", "Parij shartnomasi Yevropa ko'mir va po'lat hamjamiyatini tuzish uchun 1951-yilda imzolangan."],
  [10, "Milodiy 1953-yil", "DNKning qo'sh spiral tuzilishi haqidagi maqolaning e'lon qilinishi", "Uotson va Krik DNK tuzilishi haqidagi ilmiy maqolani chop etdi", "Uotson va Krikning DNK tuzilishi haqidagi maqolasi 1953-yilda chop etilgan."],
  [10, "Milodiy 1954-yil", "Brown v. Board of Education qarori", "AQSh Oliy sudi maktablarda irqiy segregatsiyani konstitutsiyaga zid deb topdi", "Brown v. Board of Education qarori 1954-yil 17-mayda chiqarilgan."],
  [10, "Milodiy 1955-yil", "Bandung konferensiyasining o'tkazilishi", "Osiyo va Afrika davlatlari Indoneziyaning Bandung shahrida konferensiya o'tkazdi", "Bandung konferensiyasi 1955-yil aprelida bo'lib o'tgan."],
  [10, "Milodiy 1958-yil", "NASAning tashkil etilishi", "AQShda Milliy aeronavtika va kosmik ma'muriyat tashkil etildi", "NASA 1958-yil 29-iyulda tashkil etilgan."],
  [10, "Milodiy 1959-yil", "Kuba inqilobining g'alabasi", "Fidel Kastro boshchiligidagi kuchlar Kubada hokimiyatni egalladi", "Kuba inqilobi 1959-yil yanvarida g'alaba qozongan."],
  [10, "Milodiy 1960-yil", "OPEK tashkilotining tuzilishi", "Neft eksport qiluvchi davlatlar OPEK tashkilotini tuzdi", "OPEK 1960-yil sentyabrida Bag'dodda tashkil etilgan."],
  [10, "Milodiy 1961-yil", "Yuriy Gagarinning kosmosga parvozi", "Yuriy Gagarin Yer orbitasiga chiqqan ilk inson bo'ldi", "Yuriy Gagarin kosmosga 1961-yil 12-aprelda uchgan."],
  [10, "Milodiy 1963-yil", "Jon Kennedining o'ldirilishi", "AQSh prezidenti Jon Kennedi Dallas shahrida otib o'ldirildi", "Jon Kennedi 1963-yil 22-noyabrda o'ldirilgan."],
  [10, "Milodiy 1964-yil", "Xitoyning ilk atom bombasi sinovi", "Xitoy Lop Nor poligonida ilk atom bombasini sinovdan o'tkazdi", "Xitoy ilk atom bombasini 1964-yil 16-oktyabrda sinagan."],
  [10, "Milodiy 1965-yil", "Birinchi ochiq kosmik yurish", "Aleksey Leonov kosmik kemadan tashqariga chiqqan ilk inson bo'ldi", "Aleksey Leonov ilk kosmik yurishni 1965-yil 18-martda amalga oshirgan."],
  [10, "Milodiy 1966-yil", "Xitoydagi Madaniy inqilobning boshlanishi", "Mao Szedun Xitoyda Madaniy inqilobni boshladi", "Xitoydagi Madaniy inqilob 1966-yilda boshlangan."],
  [10, "Milodiy 1970-yil", "Birinchi Yer kunining nishonlanishi", "AQShda atrof-muhitni muhofaza qilishga bag'ishlangan Yer kuni ilk bor o'tkazildi", "Birinchi Yer kuni 1970-yil 22-aprelda o'tkazilgan."],
  [10, "Milodiy 1972-yil", "SALT I kelishuvlarining imzolanishi", "AQSh va SSSR strategik qurollarni cheklash bo'yicha kelishuvlarni imzoladi", "SALT I kelishuvlari 1972-yilda imzolangan."],
  [10, "Milodiy 1974-yil", "Richard Niksonning iste'foga chiqishi", "Richard Nikson Uotergeyt mojarosi ortidan AQSh prezidentligidan iste'foga chiqdi", "Richard Nikson 1974-yil 9-avgustda iste'foga chiqqan."],
  [10, "Milodiy 1978-yil", "Birinchi sun'iy urug'lantirish orqali tug'ilgan bolaning dunyoga kelishi", "Luiza Braun tibbiy yordam bilan urug'lantirish natijasida tug'ildi", "Luiza Braun 1978-yil 25-iyulda dunyoga kelgan."],
  [10, "Milodiy 1980-yil", "Chechak kasalligining yo'q qilingan deb e'lon qilinishi", "Jahon sog'liqni saqlash tashkiloti chechak tugatilganini tasdiqladi", "JSST chechak yo'q qilinganini 1980-yil 8-mayda e'lon qilgan."],
  [10, "Milodiy 1981-yil", "OITS haqida ilk rasmiy xabar", "AQSh sog'liqni saqlash idorasi OITS bilan bog'liq holatlar haqida xabar berdi", "OITS bilan bog'liq ilk rasmiy xabar AQShda 1981-yil iyunida e'lon qilingan."],
  [10, "Milodiy 1983-yil", "ARPANET tarmog'ining TCP/IP protokoliga o'tishi", "ARPANET yangi tarmoq protokolidan foydalanishni boshladi", "ARPANET TCP/IP protokoliga 1983-yil 1-yanvarda o'tgan."],
  [10, "Milodiy 1985-yil", "Mixail Gorbachyovning SSSR rahbari bo'lishi", "Mixail Gorbachyov Sovet Ittifoqi Kommunistik partiyasi rahbari etib saylandi", "Mixail Gorbachyov 1985-yil martida partiya rahbari bo'lgan."],
  [10, "Milodiy 1988-yil", "Lockerbie aviatsiya halokati", "Pan Am aviakompaniyasining 103-reysi Shotlandiya osmonida portladi", "Pan Am 103-reysi 1988-yil 21-dekabrda portlatilgan."],
  [10, "Milodiy 1989-yil", "Berlin devoridan o'tish joylarining ochilishi", "Sharqiy va G'arbiy Berlin aholisi devor orqali erkin o'ta boshladi", "Berlin devoridan o'tish 1989-yil 9-noyabrda ochilgan."],
  [11, "Milodiy 1990-yil", "Hubble kosmik teleskopining orbitaga chiqarilishi", "Hubble kosmik teleskopi Yer orbitasiga chiqarildi", "Hubble teleskopi 1990-yil 24-aprelda orbitaga chiqarilgan."],
  [11, "Milodiy 1991-yil", "'Cho'l bo'roni' amaliyotining boshlanishi", "Koalitsiya kuchlari Iroq qo'shinlariga qarshi havo amaliyotini boshladi", "'Cho'l bo'roni' amaliyoti 1991-yil 17-yanvarda boshlangan."],
  [11, "Milodiy 1992-yil", "Rio-de-Janeyro Yer sammiti", "BMT Atrof-muhit va taraqqiyot bo'yicha konferensiyani o'tkazdi", "Rio Yer sammiti 1992-yil iyunida o'tkazilgan."],
  [11, "Milodiy 1994-yil", "Jahon Savdo Tashkilotini tuzish bitimining imzolanishi", "Marrakeshda Jahon Savdo Tashkilotini tuzish bitimi imzolandi", "Marrakesh kelishuvi 1994-yil 15-aprelda imzolangan; Jahon Savdo Tashkiloti esa 1995-yil 1-yanvarda ish boshlagan."],
  [11, "Milodiy 1994-yil", "Ruandadagi genotsid", "Ruandada tutsi aholiga qarshi ommaviy qirg'in boshlandi", "Ruandadagi genotsid 1994-yilda yuz bergan."],
  [11, "Milodiy 1995-yil", "Dayton tinchlik kelishuvlarining imzolanishi", "Bosniya urushini tugatgan Dayton kelishuvlari imzolandi", "Dayton kelishuvlari 1995-yil noyabrida imzolangan."],
  [11, "Milodiy 1996-yil", "Dolly qo'yining tug'ilishi", "Somatik hujayradan klonlangan Dolly qo'yi dunyoga keldi", "Dolly qo'yi 1996-yilda tug'ilgan; uning klonlangani 1997-yilda e'lon qilingan."],
  [11, "Milodiy 1997-yil", "Osiyo moliyaviy inqirozining boshlanishi", "Tailand valyuta inqirozi mintaqaviy moliyaviy inqirozni boshlab berdi", "Osiyo moliyaviy inqirozi 1997-yilda boshlangan."],
  [11, "Milodiy 1998-yil", "Xalqaro kosmik stansiyaning birinchi modulini uchirish", "XKSning Zarya nomli birinchi moduli orbitaga chiqarildi", "Xalqaro kosmik stansiyaning Zarya moduli 1998-yil noyabrida uchirilgan."],
  [11, "Milodiy 1999-yil", "Yevroning naqdsiz hisob-kitoblarda joriy etilishi", "Yevro xalqaro moliyaviy hisob-kitoblarda ishlatila boshlandi", "Yevro naqdsiz hisob-kitoblarda 1999-yil 1-yanvarda joriy qilingan."],
  [11, "Milodiy 2000-yil", "Inson genomi loyihasining dastlabki natijalari", "Olimlar inson genomi ketma-ketligining dastlabki loyihasini e'lon qildi", "Inson genomi loyihasining dastlabki loyihasi 2000-yilda e'lon qilingan."],
  [11, "Milodiy 2001-yil", "Vikipediya loyihasining ishga tushirilishi", "Vikipediya onlayn ensiklopediyasi ommaga ochildi", "Vikipediya 2001-yil 15-yanvarda ishga tushirilgan."],
  [11, "Milodiy 2002-yil", "Yevro banknot va tangalarining muomalaga kiritilishi", "Yevro banknot va tangalari Yevropa mamlakatlarida muomalaga kirdi", "Yevro naqd pul shaklida 2002-yil 1-yanvarda muomalaga kiritilgan."],
  [11, "Milodiy 2003-yil", "Iroq urushining boshlanishi", "AQSh boshchiligidagi koalitsiya Iroqqa harbiy amaliyot boshladi", "Iroq urushi 2003-yil martida boshlangan."],
  [11, "Milodiy 2004-yil", "Hind okeanidagi zilzila va sunami", "Hind okeanida kuchli zilzila ortidan sunami yuz berdi", "Hind okeanidagi zilzila va sunami 2004-yil 26-dekabrda sodir bo'lgan."],
  [11, "Milodiy 2005-yil", "Kioto protokolining kuchga kirishi", "Iqlim o'zgarishiga qarshi Kioto protokoli kuchga kirdi", "Kioto protokoli 2005-yil 16-fevralda kuchga kirgan."],
  [11, "Milodiy 2006-yil", "Twitter xizmatida ilk xabarning e'lon qilinishi", "Twitter platformasida ilk xabar joylandi", "Twitterdagi ilk xabar 2006-yil 21-martda joylangan."],
  [11, "Milodiy 2007-yil", "Birinchi iPhone qurilmasining taqdim etilishi", "Apple kompaniyasi birinchi iPhone qurilmasini taqdim etdi", "Birinchi iPhone 2007-yil 9-yanvarda taqdim etilgan."],
  [11, "Milodiy 2008-yil", "G20 yetakchilarining birinchi sammiti", "G20 davlatlari rahbarlari Vashingtonda birinchi sammitni o'tkazdi", "G20 yetakchilarining birinchi sammiti 2008-yilda o'tkazilgan."],
  [11, "Milodiy 2009-yil", "Lissabon shartnomasining kuchga kirishi", "Yevropa Ittifoqining Lissabon shartnomasi kuchga kirdi", "Lissabon shartnomasi 2009-yil 1-dekabrda kuchga kirgan."],
  [11, "Milodiy 2010-yil", "Arab bahori noroziliklarining boshlanishi", "Tunisdagi noroziliklar arab mamlakatlaridagi siyosiy qo'zg'olonlarni boshlab berdi", "Arab bahori 2010-yil oxirida Tunisda boshlangan."],
  [11, "Milodiy 2011-yil", "Fukusima AES halokati", "Zilzila va sunami Fukusima atom elektr stansiyasida avariyaga olib keldi", "Fukusima AES halokati 2011-yil 11-martda boshlangan."],
  [11, "Milodiy 2012-yil", "Xiggs bozoniga mos zarrachaning topilishi", "CERN olimlari Xiggs bozoniga mos zarracha topilganini e'lon qildi", "CERN bu kashfiyotni 2012-yil 4-iyulda e'lon qilgan."],
  [11, "Milodiy 2013-yil", "'Bir makon, bir yo'l' tashabbusining e'lon qilinishi", "Xitoy rahbari Si Szinpin xalqaro infratuzilma tashabbusini ilgari surdi", "'Bir makon, bir yo'l' tashabbusi 2013-yilda e'lon qilingan."],
  [11, "Milodiy 2014-yil", "G'arbiy Afrikadagi Ebola epidemiyasining avj olishi", "G'arbiy Afrikada Ebola epidemiyasi xalqaro favqulodda holatga aylandi", "Ebola epidemiyasi G'arbiy Afrikada 2014-yilda avj olgan."],
  [11, "Milodiy 2015-yil", "Barqaror rivojlanish maqsadlarining qabul qilinishi", "BMT 2030-yilgacha mo'ljallangan 17 ta maqsadni qabul qildi", "BMT Barqaror rivojlanish maqsadlarini 2015-yilda qabul qilgan."],
  [11, "Milodiy 2016-yil", "Brexit referendumining o'tkazilishi", "Buyuk Britaniya saylovchilari Yevropa Ittifoqidan chiqishni yoqladi", "Brexit referendumi 2016-yil 23-iyunda o'tkazilgan."],
  [11, "Milodiy 2018-yil", "GDPR ma'lumotlarni himoya qilish qoidalarining kuchga kirishi", "Yevropa Ittifoqining ma'lumotlarni himoya qilish qoidalari kuchga kirdi", "GDPR 2018-yil 25-mayda kuchga kirgan."],
  [11, "Milodiy 2019-yil", "Qora tuynukning ilk tasvirining e'lon qilinishi", "Event Horizon Telescope loyihasi qora tuynukning ilk tasvirini e'lon qildi", "Qora tuynukning ilk tasviri 2019-yil 10-aprelda e'lon qilingan."],
  [11, "Milodiy 2021-yil", "Perseverance roverining Marsga qo'nishi", "NASAning Perseverance roveri Mars yuzasiga qo'ndi", "Perseverance roveri Marsga 2021-yil 18-fevralda qo'ngan."],
  [11, "Milodiy 2022-yil", "James Webb teleskopining ilk rangli tasvirlari", "NASA James Webb teleskopining ilk ilmiy tasvirlarini e'lon qildi", "James Webb teleskopining ilk rangli tasvirlari 2022-yil 12-iyulda e'lon qilingan."],
  [11, "Milodiy 2023-yil", "Chandrayaan-3 apparatining Oyga qo'nishi", "Hindistonning Chandrayaan-3 apparati Oy yuzasiga qo'ndi", "Chandrayaan-3 2023-yil 23-avgustda Oyga qo'ngan."],
  [5, "Miloddan avvalgi 509-yil", "Rim respublikasining tashkil topishi", "Rimda qirollik boshqaruvi tugab, respublika tuzumi o'rnatildi", "Rim respublikasining boshlanishi an'anaviy ravishda miloddan avvalgi 509-yilga qo'yiladi."],
  [5, "Miloddan avvalgi 264-yil", "Birinchi Puni urushining boshlanishi", "Rim va Karfagen o'rtasida Birinchi Puni urushi boshlandi", "Birinchi Puni urushi miloddan avvalgi 264-yilda boshlangan."],
  [5, "Miloddan avvalgi 146-yil", "Karfagenning vayron qilinishi", "Rim qo'shinlari Uchinchi Puni urushidan so'ng Karfagenni vayron qildi", "Karfagen miloddan avvalgi 146-yilda Rim tomonidan vayron qilingan."],
  [5, "Miloddan avvalgi 44-yil", "Yuliy Sezarning o'ldirilishi", "Rim siyosatchilari Yuliy Sezarni senat majlisida o'ldirdi", "Yuliy Sezar miloddan avvalgi 44-yil 15-martda o'ldirilgan."],
  [5, "Miloddan avvalgi 27-yil", "Oktavianning Avgust unvonini olishi", "Oktavian Avgust unvonini olib, Rimda imperatorlik davrini boshlab berdi", "Miloddan avvalgi 27-yil Oktavian Avgust hokimiyatining boshlanishi bilan bog'lanadi."],
  [5, "Milodiy 105-yil", "Tsay Lunning qog'oz tayyorlash usulini taqdim etishi", "Xitoy amaldori Tsay Lun takomillashtirilgan qog'oz tayyorlash usulini taqdim etdi", "Tsay Lun qog'oz tayyorlash usulini 105-yilda taqdim etgan deb qayd etiladi."],
  [5, "Milodiy 395-yil", "Rim imperiyasining Sharqiy va G'arbiy qismlarga ajralishi", "Feodosiy I vafotidan so'ng imperiya o'g'illari o'rtasida bo'lindi", "Rim imperiyasining Sharqiy va G'arbiy qismlarga bo'linishi 395-yil bilan bog'lanadi."],
  [6, "Milodiy 661-yil", "Umaviylar xalifaligining boshlanishi", "Muoviya I xalifa bo'lib, Umaviylar sulolasi hukmronligini boshladi", "Umaviylar xalifaligi 661-yilda tashkil topgan."],
  [6, "Milodiy 711-yil", "Umaviylarning Pireney yarimoroliga yurishi", "Toriq ibn Ziyod qo'shinlari Gibraltar bo'g'ozidan o'tdi", "Umaviylarning Pireney yarimoroliga yurishi 711-yilda boshlangan."],
  [6, "Milodiy 843-yil", "Verden shartnomasining tuzilishi", "Franklar imperiyasi Karl Buyukning nabiralari o'rtasida taqsimlandi", "Verden shartnomasi 843-yilda imzolangan."],
  [6, "Milodiy 962-yil", "Otto I ning imperator tojini kiyishi", "Papa Ioann XII Otto I ga imperator tojini kiydirdi", "Otto I 962-yilda imperator tojini kiygan."],
  [6, "Milodiy 1054-yil", "Buyuk ajralishning yuz berishi", "G'arbiy katolik va Sharqiy pravoslav cherkovlari o'rtasidagi bo'linish mustahkamlandi", "1054-yilgi Buyuk ajralish katolik va pravoslav cherkovlarining bo'linishi bilan bog'liq."],
  [6, "Milodiy 1071-yil", "Manzikert jangining bo'lib o'tishi", "Saljuqiylar Alp Arslon boshchiligida Vizantiya qo'shinini mag'lub etdi", "Manzikert jangi 1071-yilda bo'lib o'tgan."],
  [6, "Milodiy 1095-yil", "Urban II ning salib yurishiga chaqirig'i", "Rim papasi Urban II Klermon kengashida salib yurishiga chaqirdi", "Urban II 1095-yil Klermon kengashida salib yurishiga chaqirgan."],
  [6, "Milodiy 1204-yil", "Salibchilarning Konstantinopolni egallashi", "To'rtinchi salib yurishi qatnashchilari Konstantinopolni egallab, taladi", "Salibchilar Konstantinopolni 1204-yilda egallagan."],
  [6, "Milodiy 1291-yil", "Akkra shahrining salibchilardan tortib olinishi", "Mamluklar Akkra shahrini egallab, salibchilarning Levantdagi asosiy tayanchini tugatdi", "Akkra 1291-yilda Mamluklar tomonidan egallangan."],
  [7, "Milodiy 1302-yil", "Oltin shporlar jangining bo'lib o'tishi", "Flamand shahar qo'shinlari Kortrijk yaqinida fransuz ritsarlarini mag'lub etdi", "Oltin shporlar jangi 1302-yilda bo'lib o'tgan."],
  [7, "Milodiy 1348-yil", "Qora o'latning Yevropada keng tarqalishi", "Vabo epidemiyasi Yevropaning ko'plab hududlariga tarqaldi", "Qora o'lat Yevropada ayniqsa 1347–1351-yillarda keng tarqalgan."],
  [7, "Milodiy 1381-yil", "Angliyadagi dehqonlar qo'zg'oloni", "Uot Tayler boshchiligidagi dehqonlar Londonga yurish qildi", "Angliyadagi dehqonlar qo'zg'oloni 1381-yilda yuz bergan."],
  [7, "Milodiy 1415-yil", "Portugallarning Seutani egallashi", "Portugaliya qo'shinlari Shimoliy Afrikadagi Seuta shahrini egalladi", "Portugallar Seutani 1415-yilda egallab, dengiz ekspansiyasini boshlagan."],
  [7, "Milodiy 1431-yil", "Janna d'Arkning qatl etilishi", "Fransuz qahramoni Janna d'Ark Ruan shahrida qatl etildi", "Janna d'Ark 1431-yil 30-mayda qatl etilgan."],
  [7, "Milodiy 1453-yil", "Konstantinopolning Usmonlilar tomonidan egallanishi", "Mehmed II qo'shinlari Vizantiya poytaxtini egalladi", "Konstantinopol 1453-yil 29-mayda egallangan."],
  [7, "Milodiy 1494-yil", "Tordesilyas shartnomasining tuzilishi", "Ispaniya va Portugaliya yangi hududlarni taqsimlashga kelishdi", "Tordesilyas shartnomasi 1494-yilda tuzilgan."],
  [7, "Milodiy 1521-yil", "Tenochtitlanning egallanishi", "Ernan Kortes va uning ittifoqchilari atsteklar poytaxtini egalladi", "Tenochtitlan 1521-yilda egallangan."],
  [7, "Milodiy 1526-yil", "Birinchi Panipat jangi", "Bobur Ibrohim Lo'diy qo'shinini Panipat jangida mag'lub etdi", "Birinchi Panipat jangi 1526-yilda bo'lib o'tgan."],
  [7, "Milodiy 1571-yil", "Lepanto dengiz jangi", "Muqaddas Liga floti Usmonli flotiga qarshi g'alaba qozondi", "Lepanto jangi 1571-yilda bo'lib o'tgan."],
  [8, "Milodiy 1600-yil", "Britaniya Ost-Indiya kompaniyasining tuzilishi", "Angliya qirolichasi Yelizaveta I savdo kompaniyasiga nizom berdi", "Britaniya Ost-Indiya kompaniyasi 1600-yilda tuzilgan."],
  [8, "Milodiy 1618-yil", "O'ttiz yillik urushning boshlanishi", "Muqaddas Rim imperiyasi hududida O'ttiz yillik urush boshlandi", "O'ttiz yillik urush 1618-yilda boshlangan."],
  [8, "Milodiy 1642-yil", "Angliya fuqarolar urushining boshlanishi", "Qirol tarafdorlari va parlament qo'shinlari o'rtasida urush boshlandi", "Angliya fuqarolar urushi 1642-yilda boshlangan."],
  [8, "Milodiy 1648-yil", "Vestfaliya tinchligining imzolanishi", "O'ttiz yillik urushni yakunlagan tinchlik kelishuvlari tuzildi", "Vestfaliya tinchligi 1648-yilda imzolangan."],
  [8, "Milodiy 1689-yil", "Angliya Huquqlar to'g'risidagi billining qabul qilinishi", "Parlament monarx vakolatlarini cheklovchi qonunni qabul qildi", "Huquqlar to'g'risidagi bill Angliyada 1689-yilda qabul qilingan."],
  [8, "Milodiy 1707-yil", "Angliya va Shotlandiyaning birlashishi", "Ittifoq aktlari Buyuk Britaniya qirolligini tuzdi", "Angliya va Shotlandiya 1707-yilgi Ittifoq aktlari bilan birlashgan."],
  [8, "Milodiy 1756-yil", "Yetti yillik urushning boshlanishi", "Yevropa va mustamlakalarda yirik davlatlar o'rtasida urush boshlandi", "Yetti yillik urush 1756-yilda boshlangan."],
  [8, "Milodiy 1773-yil", "Boston choyxo'rligi", "Mustamlakachilar Britaniya choyini Boston bandargohiga tashladi", "Boston choyxo'rligi 1773-yilda sodir bo'lgan."],
  [8, "Milodiy 1775-yil", "Amerika mustaqillik urushining boshlanishi", "Britaniya qo'shinlari va Shimoliy Amerika mustamlakalari o'rtasida urush boshlandi", "Amerika mustaqillik urushi 1775-yilda boshlangan."],
  [8, "Milodiy 1783-yil", "Parij shartnomasining imzolanishi", "Buyuk Britaniya AQSh mustaqilligini shartnoma bilan tan oldi", "Parij shartnomasi 1783-yilda imzolangan."],
  [9, "Milodiy 1789-yil", "Fransuz inqilobining boshlanishi", "Fransiyada inqilob boshlandi va Bastiliya egallandi", "Fransuz inqilobi 1789-yilda boshlangan."],
  [9, "Milodiy 1791-yil", "Gaiti inqilobining boshlanishi", "Sen-Domingda qullikka qarshi inqilob boshlandi", "Gaiti inqilobi 1791-yilda boshlangan."],
  [9, "Milodiy 1799-yil", "Napoleonning 18 Bryumer to'ntarishi", "Napoleon Bonapart Fransiyada hokimiyatni qo'lga oldi", "18 Bryumer to'ntarishi 1799-yil noyabrida yuz bergan."],
  [9, "Milodiy 1804-yil", "Gaiti mustaqilligining e'lon qilinishi", "Gaiti Fransiyadan mustaqilligini e'lon qildi", "Gaiti 1804-yil 1-yanvarda mustaqil bo'lgan."],
  [9, "Milodiy 1815-yil", "Vaterloo jangi", "Napoleon Vaterloo jangida yakuniy mag'lubiyatga uchradi", "Vaterloo jangi 1815-yilda bo'lib o'tgan."],
  [9, "Milodiy 1825-yil", "Stockton–Darlington temiryo'lining ochilishi", "Angliyada bug' lokomotivlaridan foydalangan ommaviy temiryo'l liniyasi ochildi", "Stockton–Darlington temiryo'li 1825-yilda ochilgan."],
  [9, "Milodiy 1830-yil", "Belgiyaning mustaqillik e'lon qilishi", "Belgiya Niderlandiyadan ajralib chiqishini e'lon qildi", "Belgiya mustaqilligini 1830-yilda e'lon qilgan."],
  [9, "Milodiy 1830-yil", "Fransiyadagi Iyul inqilobi", "Parij qo'zg'oloni Burbonlar sulolasining hokimiyatdan ketishiga olib keldi", "Iyul inqilobi Fransiyada 1830-yilda yuz bergan."],
  [9, "Milodiy 1848-yil", "Kommunistik partiya manifestining nashr etilishi", "Karl Marks va Fridrix Engels manifestni nashr etdi", "Kommunistik partiya manifesti 1848-yilda chop etilgan."],
  [9, "Milodiy 1853-yil", "Qrim urushining boshlanishi", "Rossiya va Usmonli imperiyasi o'rtasida Qrim urushi boshlandi", "Qrim urushi 1853-yilda boshlangan."],
  [10, "Milodiy 1857-yil", "Hindistondagi qo'zg'olonning boshlanishi", "Hindistonda Britaniya hukmronligiga qarshi yirik qo'zg'olon boshlandi", "Hindistondagi 1857-yilgi qo'zg'olon Britaniya hukmronligiga qarshi ko'tarilgan."],
  [10, "Milodiy 1861-yil", "Italiya qirolligining e'lon qilinishi", "Italiya qirolligi e'lon qilindi", "Italiya qirolligi 1861-yilda e'lon qilingan."],
  [10, "Milodiy 1863-yil", "AQShdagi Emansipatsiya deklaratsiyasi", "Avraam Linkoln isyonchi shtatlardagi qullarni ozod deb e'lon qildi", "Emansipatsiya deklaratsiyasi 1863-yilda kuchga kirgan."],
  [10, "Milodiy 1865-yil", "AQShda qullikni bekor qilgan tuzatish", "Konstitutsiyaga O'n uchinchi tuzatish ratifikatsiya qilindi", "O'n uchinchi tuzatish 1865-yilda qullikni bekor qildi."],
  [10, "Milodiy 1867-yil", "Kanada konfederatsiyasining tashkil topishi", "Britaniya Shimoliy Amerikasi koloniyalari Kanada dominionini tuzdi", "Kanada konfederatsiyasi 1867-yil 1-iyulda tashkil topgan."],
  [10, "Milodiy 1870-yil", "Rimning Italiya qirolligiga qo'shilishi", "Italiya qo'shinlari Rimni egallab, shaharni qirollikka qo'shdi", "Rim 1870-yilda Italiya qirolligiga qo'shilgan."],
  [10, "Milodiy 1871-yil", "Germaniya imperiyasining e'lon qilinishi", "Germaniya imperiyasi Versal saroyida e'lon qilindi", "Germaniya imperiyasi 1871-yilda e'lon qilingan."],
  [10, "Milodiy 1884-yil", "Berlin konferensiyasining boshlanishi", "Yevropa davlatlari Afrikadagi mustamlakachilik qoidalarini muhokama qildi", "Berlin konferensiyasi 1884-yil noyabrida boshlangan."],
  [11, "Milodiy 1896-yil", "Zamonaviy Olimpiya o'yinlarining tiklanishi", "Birinchi zamonaviy Olimpiya o'yinlari Afinada o'tkazildi", "Birinchi zamonaviy Olimpiya o'yinlari 1896-yilda o'tkazilgan."],
  [11, "Milodiy 1903-yil", "Rayt aka-ukalarining motorli parvozi", "Orvill Rayt boshqaruvidagi samolyot boshqariladigan motorli parvozni amalga oshirdi", "Rayt aka-ukalarining motorli parvozi 1903-yilda bo'lgan."],
  [11, "Milodiy 1905-yil", "Rossiyadagi Qonli yakshanba", "Peterburgdagi namoyishchilar podsho qo'shinlari tomonidan o'qqa tutildi", "Qonli yakshanba Rossiyada 1905-yilda yuz bergan."],
  [11, "Milodiy 1910-yil", "Meksika inqilobining boshlanishi", "Porfirio Dias hukmronligiga qarshi Meksika inqilobi boshlandi", "Meksika inqilobi 1910-yilda boshlangan."],
  [11, "Milodiy 1911-yil", "Xitoydagi Sinxay inqilobining boshlanishi", "Uuchang qo'zg'oloni Sin sulolasiga qarshi inqilobni boshlab berdi", "Sinxay inqilobi 1911-yil 10-oktyabrda boshlangan."],
  [11, "Milodiy 1914-yil", "Birinchi jahon urushining boshlanishi", "Avstriya-Vengriya Serbiyaga urush e'lon qildi", "Birinchi jahon urushi 1914-yil iyulida boshlangan."],
  [11, "Milodiy 1916-yil", "Irlandiyadagi Pasxa qo'zg'oloni", "Irlandiya respublikachilari Dublinda Britaniya boshqaruviga qarshi qo'zg'olon ko'tardi", "Pasxa qo'zg'oloni 1916-yil aprelida bo'lib o'tgan."],
  [11, "Milodiy 1917-yil", "Rossiyadagi Oktyabr inqilobi", "Bolsheviklar Muvaqqat hukumatni ag'darib, hokimiyatni egalladi", "Oktyabr inqilobi 1917-yilda Rossiyada yuz bergan."],
  [11, "Milodiy 1945-yil", "Yevropada G'alaba kunining nishonlanishi", "Germaniya taslim bo'lgach, Yevropada Ikkinchi jahon urushi yakunlandi", "Yevropada G'alaba kuni 1945-yil 8-mayda nishonlanadi."]
]

const supplementalTimelineFacts = supplementalFacts.map((fact, index) => {
  const [sinf, year, eventPrompt, eventAnswer, izoh] = fact
  const sameGradeFacts = supplementalFacts.filter(item => item[0] === sinf)
  const gradeIndex = sameGradeFacts.indexOf(fact)
  const otherFacts = []

  for (let offset = 1; otherFacts.length < 2; offset += 1) {
    const candidate = sameGradeFacts[(gradeIndex + offset) % sameGradeFacts.length]
    if (candidate[1] !== year && !otherFacts.some(item => item[1] === candidate[1])) {
      otherFacts.push(candidate)
    }
  }

  return [
    sinf,
    year,
    eventPrompt,
    eventAnswer,
    otherFacts.map(item => item[1]),
    otherFacts.map(item => item[3]),
    izoh
  ]
})

const labelChoices = (answer, distractors, answerIndex) => {
  const choices = [...distractors]
  choices.splice(answerIndex, 0, answer)
  return choices.map((choice, index) => `${String.fromCharCode(65 + index)}) ${choice}`)
}

questions.push(...[...timelineFacts, ...supplementalTimelineFacts].flatMap((fact, index) => {
  const [sinf, year, eventPrompt, eventAnswer, otherYears, otherEvents, izoh] = fact
  const firstId = 369 + index * 2
  const yearAnswerIndex = firstId % 3
  const eventAnswerIndex = (firstId + 1) % 3
  const qiyinlik = sinf <= 6 ? 'oson' : sinf <= 8 ? 'orta' : 'qiyin'
  const common = { sinf, bolim: 'jahon', mavzu: 'Jahon xronologiyasi', qiyinlik, izoh }

  return [
    {
      ...common,
      id: firstId,
      savol: `${eventPrompt} qaysi yilda yuz berdi?`,
      variantlar: labelChoices(year, otherYears, yearAnswerIndex),
      togriJavob: yearAnswerIndex
    },
    {
      ...common,
      id: firstId + 1,
      savol: `Qaysi voqea ${year}da yuz berdi?`,
      variantlar: labelChoices(eventAnswer, otherEvents, eventAnswerIndex),
      togriJavob: eventAnswerIndex
    }
  ]
}))

const normalizeQuestionText = value => String(value)
  .toLocaleLowerCase('uz')
  .replaceAll('’', "'")
  .replaceAll('‘', "'")
  .replace(/\s+/g, ' ')
  .trim()

const seenQuestionAnswers = new Set()
const uniqueQuestions = questions.filter(question => {
  const correctAnswer = question.variantlar[question.togriJavob].replace(/^[A-C]\)\s*/, '')
  const key = [question.savol, correctAnswer, question.izoh]
    .map(normalizeQuestionText)
    .join('|')

  if (seenQuestionAnswers.has(key)) return false
  seenQuestionAnswers.add(key)
  return true
})

questions.splice(0, questions.length, ...uniqueQuestions)

questions.push(
  {
    id: 1003,
    sinf: 5,
    bolim: 'jahon',
    mavzu: 'Qadimgi sivilizatsiyalar',
    qiyinlik: 'oson',
    savol: 'Qadimgi Misrda papirus asosan nima uchun ishlatilgan?',
    variantlar: ['A) Yozuv materiali sifatida', 'B) Temir qurol tayyorlash uchun', 'C) Kema yelkanini bo‘yash uchun'],
    togriJavob: 0,
    izoh: 'Misrliklar papirus o‘simligidan yozuv uchun varaqlar tayyorlagan.'
  },
  {
    id: 1004,
    sinf: 5,
    bolim: 'jahon',
    mavzu: 'Qadimgi dunyo',
    qiyinlik: 'oson',
    savol: 'Qadimgi Rimdagi Kolizeyda asosan qanday tomoshalar o‘tkazilgan?',
    variantlar: ['A) Olimpiya suzish musobaqalari', 'B) Gladiatorlar janglari', 'C) Parlament majlislari'],
    togriJavob: 1,
    izoh: 'Kolizey Rimdagi katta amfiteatr bo‘lib, unda gladiatorlar janglari va boshqa ommaviy tomoshalar o‘tkazilgan.'
  },
  {
    id: 1005,
    sinf: 5,
    bolim: 'jahon',
    mavzu: 'Qadimgi sivilizatsiyalar',
    qiyinlik: 'orta',
    savol: 'Finikiyaliklarning O‘rta yer dengizi bo‘ylab ta’siri kuchayishiga nima yordam bergan?',
    variantlar: ['A) Dengiz savdosi va kemachilik', 'B) Dashtlarda otliq qo‘shin yurishlari', 'C) Katta daryolarda to‘g‘on qurilishi'],
    togriJavob: 0,
    izoh: 'Finikiyaliklar mohir dengizchilar va savdogarlar bo‘lib, O‘rta yer dengizi bo‘ylab savdo tarmoqlarini rivojlantirgan.'
  },
  {
    id: 1006,
    sinf: 6,
    bolim: 'jahon',
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: 'orta',
    savol: 'Feodal munosabatlarda vassalning senyorga bergan asosiy majburiyati qaysi edi?',
    variantlar: ['A) Harbiy xizmat va sadoqat', 'B) Dengiz savdosini boshqarish', 'C) Har yili saylov o‘tkazish'],
    togriJavob: 0,
    izoh: 'Vassal yer yoki himoya evaziga senyorga sadoqat va ko‘pincha harbiy xizmat bilan javob bergan.'
  },
  {
    id: 1007,
    sinf: 6,
    bolim: 'jahon',
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: 'orta',
    savol: 'O‘rta asr Yevropasidagi monastirlar bilim tarixida qanday rol o‘ynagan?',
    variantlar: ['A) Faqat harbiy qal’a vazifasini bajargan', 'B) Qo‘lyozmalarni saqlash va ko‘chirishga yordam bergan', 'C) Dengiz xaritalarini taqiqlagan'],
    togriJavob: 1,
    izoh: 'Monastirlardagi yozuvchilar ko‘plab diniy va qadimgi asarlarni ko‘chirib, saqlab qolgan.'
  },
  {
    id: 1008,
    sinf: 7,
    bolim: 'jahon',
    mavzu: "Uyg'onish davri",
    qiyinlik: 'orta',
    savol: 'Uyg‘onish davri humanistlari qaysi g‘oyaga alohida e’tibor bergan?',
    variantlar: ['A) Inson salohiyati va qadimgi madaniyat merosiga', 'B) Ilmiy izlanishlarni butunlay taqiqlashga', 'C) Shaharlarni bo‘shatib, faqat qal’alarda yashashga'],
    togriJavob: 0,
    izoh: 'Renessans humanizmi inson, uning qobiliyatlari va qadimgi Yunon-Rim merosini o‘rganishga katta e’tibor qaratgan.'
  },
  {
    id: 1009,
    sinf: 7,
    bolim: 'jahon',
    mavzu: "Uyg'onish davri",
    qiyinlik: 'orta',
    savol: 'Mikelanjelo tomonidan ishlangan Sistina kapellasi shiftidagi mashhur tasvirlar qaysi shaharda joylashgan?',
    variantlar: ['A) Madrid', 'B) Vatikan', 'C) London'],
    togriJavob: 1,
    izoh: 'Sistina kapellasi Vatikanda joylashgan; Mikelanjelo uning shiftiga mashhur freskalarni ishlagan.'
  },
  {
    id: 1010,
    sinf: 8,
    bolim: 'jahon',
    mavzu: 'Yangi davr',
    qiyinlik: 'orta',
    savol: 'Ma’rifatparvarlik davrida Monteskyening qaysi siyosiy g‘oyasi mashhur bo‘lgan?',
    variantlar: ['A) Hokimiyatni qonun chiqaruvchi, ijro etuvchi va sud tarmoqlariga ajratish', 'B) Barcha davlatlarni yagona imperiyaga birlashtirish', 'C) Parlamentlarni tugatish'],
    togriJavob: 0,
    izoh: 'Monteskyening hokimiyatlar bo‘linishi haqidagi qarashi zamonaviy konstitutsiyaviy tizimlarga ta’sir ko‘rsatgan.'
  },
  {
    id: 1011,
    sinf: 8,
    bolim: 'jahon',
    mavzu: 'Sanoat inqilobi',
    qiyinlik: 'orta',
    savol: 'Sanoatlashuv davrida fabrikalarning ko‘payishi aholining qaysi jarayonini tezlashtirdi?',
    variantlar: ['A) Shaharlarga ko‘chib kelishini', 'B) Yozuvdan voz kechishini', 'C) Dengiz sathining pasayishini'],
    togriJavob: 0,
    izoh: 'Fabrika va ish o‘rinlari ko‘payishi ko‘plab odamlarning qishloqlardan sanoat shaharlariga ko‘chishiga sabab bo‘lgan.'
  },
  {
    id: 1012,
    sinf: 9,
    bolim: 'jahon',
    mavzu: 'Birinchi jahon urushi',
    qiyinlik: 'orta',
    savol: 'Millatlar Ligasi tashkilotining asosiy maqsadi nima edi?',
    variantlar: ['A) Xalqaro hamkorlik va tinchlikni saqlash', 'B) Yevropada yagona pulni joriy etish', 'C) Mustamlakalarni kengaytirish'],
    togriJavob: 0,
    izoh: 'Birinchi jahon urushidan keyin tuzilgan Millatlar Ligasi xalqaro nizolarni hamkorlik va muzokara orqali hal etishni ko‘zlagan.'
  },
  {
    id: 1013,
    sinf: 9,
    bolim: 'jahon',
    mavzu: 'Ikkinchi jahon urushi',
    qiyinlik: 'orta',
    savol: '1938-yilgi Myunxen kelishuvining bevosita natijasi nima bo‘lgan?',
    variantlar: ['A) Sudet viloyatining Germaniyaga berilishiga rozilik bildirilgan', 'B) Germaniya BMTga a’zo bo‘lgan', 'C) Berlin devori ochilgan'],
    togriJavob: 0,
    izoh: 'Myunxen kelishuvida Buyuk Britaniya, Fransiya va Italiya Chexoslovakiyaning Sudet hududini Germaniyaga berishga rozi bo‘lgan.'
  },
  {
    id: 1014,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Sovuq urush',
    qiyinlik: 'orta',
    savol: 'Marshall rejasi nimani ko‘zlagan?',
    variantlar: ['A) G‘arbiy Yevropani iqtisodiy tiklashga yordam berishni', 'B) NATOni tarqatib yuborishni', 'C) AQShni BMTdan chiqarishni'],
    togriJavob: 0,
    izoh: 'AQShning Marshall rejasi Ikkinchi jahon urushidan keyin G‘arbiy Yevropa iqtisodiyotini tiklashga ko‘maklashgan.'
  },
  {
    id: 1015,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Dekolonizatsiya',
    qiyinlik: 'orta',
    savol: '1955-yilgi Bandung konferensiyasi qaysi mintaqalarning davlatlarini birlashtirgan?',
    variantlar: ['A) Osiyo va Afrika', 'B) Shimoliy Amerika va Yevropa', 'C) Janubiy Amerika va Avstraliya'],
    togriJavob: 0,
    izoh: 'Bandung konferensiyasida Osiyo va Afrikaning mustaqil davlatlari hamkorlik hamda mustamlakachilikdan keyingi masalalarni muhokama qilgan.'
  },
  {
    id: 1016,
    sinf: 11,
    bolim: 'jahon',
    mavzu: 'Globallashuv',
    qiyinlik: 'orta',
    savol: 'Schengen kelishuvlari Yevropada asosan qaysi o‘zgarishga olib keldi?',
    variantlar: ['A) Ishtirokchi mamlakatlar orasidagi ichki chegara tekshiruvlarining kamayishiga', 'B) Barcha davlatlarda yagona hukumat tuzilishiga', 'C) Yevropa Ittifoqining tugatilishiga'],
    togriJavob: 0,
    izoh: 'Schengen hududida ishtirokchi mamlakatlar o‘rtasida muntazam ichki chegara tekshiruvlari bekor qilingan yoki kamaytirilgan.'
  },
  {
    id: 1017,
    sinf: 11,
    bolim: 'jahon',
    mavzu: 'Globallashuv',
    qiyinlik: 'orta',
    savol: 'Jahon sog‘liqni saqlash tashkiloti qaysi yilda tashkil etilgan?',
    variantlar: ['A) 1919-yilda', 'B) 1948-yilda', 'C) 1967-yilda'],
    togriJavob: 1,
    izoh: 'Jahon sog‘liqni saqlash tashkiloti 1948-yil 7-aprelda tashkil etilgan.'
  },
  {
    id: 1018,
    sinf: 11,
    bolim: 'jahon',
    mavzu: 'Zamonaviy dunyo',
    qiyinlik: 'qiyin',
    savol: 'Rim statutiga ko‘ra Xalqaro jinoiy sud qaysi turdagi jinoyatlarni ko‘rib chiqadi?',
    variantlar: ['A) Faqat savdo nizolarini', 'B) Genotsid, insoniyatga qarshi jinoyatlar va urush jinoyatlarini', 'C) Faqat davlatlararo soliq nizolarini'],
    togriJavob: 1,
    izoh: 'Xalqaro jinoiy sud genotsid, insoniyatga qarshi jinoyatlar, urush jinoyatlari va tajovuz jinoyati bo‘yicha shaxsning javobgarligini ko‘rib chiqadi.'
  },
  {
    id: 1019,
    sinf: 5,
    bolim: 'jahon',
    mavzu: 'Qadimgi sivilizatsiyalar',
    qiyinlik: 'oson',
    savol: 'Qadimgi Misr fuqarolik taqvimi bir yilni taxminan necha kun deb hisoblagan?',
    variantlar: ['A) 300 kun', 'B) 365 kun', 'C) 400 kun'],
    togriJavob: 1,
    izoh: 'Qadimgi Misr fuqarolik taqvimi 12 ta 30 kunlik oy va yil oxiridagi 5 qo‘shimcha kundan iborat bo‘lgan.'
  },
  {
    id: 1020,
    sinf: 5,
    bolim: 'jahon',
    mavzu: 'Qadimgi dunyo',
    qiyinlik: 'oson',
    savol: 'Qadimgi Olimpiya o‘yinlari an’anaga ko‘ra necha yilda bir o‘tkazilgan?',
    variantlar: ['A) Har ikki yilda', 'B) Har to‘rt yilda', 'C) Har o‘n yilda'],
    togriJavob: 1,
    izoh: 'Qadimgi Olimpiya o‘yinlari to‘rt yillik davrda, ya’ni olimpiada oralig‘ida o‘tkazilgan.'
  },
  {
    id: 1021,
    sinf: 6,
    bolim: 'jahon',
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: 'oson',
    savol: 'Feodal manor xo‘jaligi ko‘pincha qaysi xususiyati bilan ajralib turgan?',
    variantlar: ['A) Mahalliy ehtiyojlarning katta qismini o‘zi ta’minlagan', 'B) Faqat dengiz savdosiga tayangan', 'C) Barcha mahsulotlarni chetdan sotib olgan'],
    togriJavob: 0,
    izoh: 'O‘rta asr manor xo‘jaligi ko‘pincha dehqonchilik va hunarmandchilik orqali mahalliy ehtiyojlarning ko‘pini qoplagan.'
  },
  {
    id: 1022,
    sinf: 6,
    bolim: 'jahon',
    mavzu: "O'rta asrlar Yevropasi",
    qiyinlik: 'orta',
    savol: 'O‘rta asr hunarmandlar gildiyasining asosiy vazifalaridan biri nima bo‘lgan?',
    variantlar: ['A) Hunarmandchilik qoidalari va mahsulot sifatini nazorat qilish', 'B) Qirollarni saylash', 'C) Dehqonlardan harbiy xizmat talab qilish'],
    togriJavob: 0,
    izoh: 'Gildiyalar hunarmandlar manfaatlarini himoya qilgan, kasbga o‘rgatish va mahsulot sifatiga oid qoidalarni belgilagan.'
  },
  {
    id: 1023,
    sinf: 7,
    bolim: 'jahon',
    mavzu: "Uyg'onish davri",
    qiyinlik: 'oson',
    savol: 'Yevropada bosma kitoblarning ko‘payishi bilimlarning tarqalishiga qanday ta’sir ko‘rsatdi?',
    variantlar: ['A) Kitoblarni ko‘proq nusxada va tezroq tarqatishga yordam berdi', 'B) Yozuvdan foydalanishni to‘xtatdi', 'C) Universitetlarni darhol yopdi'],
    togriJavob: 0,
    izoh: 'Bosma dastgoh kitoblarni ko‘proq nusxada tayyorlashni osonlashtirib, g‘oya va bilimlarning kengroq tarqalishiga yordam berdi.'
  },
  {
    id: 1024,
    sinf: 7,
    bolim: 'jahon',
    mavzu: "Uyg'onish davri",
    qiyinlik: 'orta',
    savol: 'Uyg‘onish davri rassomlari chizmada chiziqli perspektivadan nima uchun foydalangan?',
    variantlar: ['A) Tasvirda chuqurlik va masofa hissini berish uchun', 'B) Barcha narsani bir xil kattalikda ko‘rsatish uchun', 'C) Ranglardan butunlay voz kechish uchun'],
    togriJavob: 0,
    izoh: 'Chiziqli perspektiva tekis yuzada masofa va hajmni ko‘rinadigan qilib tasvirlashga yordam beradi.'
  },
  {
    id: 1025,
    sinf: 8,
    bolim: 'jahon',
    mavzu: 'Yangi davr',
    qiyinlik: 'orta',
    savol: 'AQSh Konstitutsiyasida federal hokimiyatning qaysi uch tarmog‘i belgilangan?',
    variantlar: ['A) Harbiy, diniy va savdo', 'B) Qonun chiqaruvchi, ijro etuvchi va sud', 'C) Qirollik, ruhoniy va gildiya'],
    togriJavob: 1,
    izoh: 'AQSh Konstitutsiyasi federal hokimiyatni qonun chiqaruvchi, ijro etuvchi va sud tarmoqlariga ajratadi.'
  },
  {
    id: 1026,
    sinf: 8,
    bolim: 'jahon',
    mavzu: 'Yangi davr',
    qiyinlik: 'orta',
    savol: 'Napoleon kodeksi qaysi sohadagi qonunlarni yagona tizimga keltirgan?',
    variantlar: ['A) Fuqarolik huquqi', 'B) Dengiz navigatsiyasi', 'C) Cherkov marosimlari'],
    togriJavob: 0,
    izoh: '1804-yilda qabul qilingan Fransiya Fuqarolik kodeksi mulk, shartnoma va fuqarolik munosabatlariga oid qoidalarni tizimlashtirgan.'
  },
  {
    id: 1027,
    sinf: 9,
    bolim: 'jahon',
    mavzu: 'Birinchi jahon urushi',
    qiyinlik: 'orta',
    savol: 'Brest-Litovsk shartnomasi Rossiya uchun qanday oqibatga olib kelgan?',
    variantlar: ['A) Rossiya Birinchi jahon urushidan chiqdi', 'B) Rossiya NATOga a’zo bo‘ldi', 'C) Rossiya Millatlar Ligasini boshqardi'],
    togriJavob: 0,
    izoh: 'Bolsheviklar hukumati 1918-yilda Brest-Litovsk shartnomasini tuzib, Rossiyani Birinchi jahon urushidan chiqargan.'
  },
  {
    id: 1028,
    sinf: 9,
    bolim: 'jahon',
    mavzu: 'Ikkinchi jahon urushi',
    qiyinlik: 'orta',
    savol: 'Bretton-Vuds konferensiyasida qaysi ikki xalqaro moliyaviy institutni tuzish tamoyillari belgilangan?',
    variantlar: ['A) NATO va YUNESKO', 'B) Xalqaro valyuta jamg‘armasi va Jahon banki', 'C) Yevropa Ittifoqi va ASEAN'],
    togriJavob: 1,
    izoh: '1944-yilgi Bretton-Vuds konferensiyasi Xalqaro valyuta jamg‘armasi va Xalqaro tiklanish va taraqqiyot banki tizimiga asos soldi.'
  },
  {
    id: 1029,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Sovuq urush',
    qiyinlik: 'orta',
    savol: 'Marshall rejasi dastlab qaysi hududning urushdan keyingi tiklanishiga yordam bergan?',
    variantlar: ['A) G‘arbiy Yevropa', 'B) Janubiy Amerika', 'C) Markaziy Afrika'],
    togriJavob: 0,
    izoh: 'AQShning Marshall rejasi Ikkinchi jahon urushidan keyin G‘arbiy Yevropa mamlakatlariga iqtisodiy yordam ko‘rsatgan.'
  },
  {
    id: 1030,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Dekolonizatsiya',
    qiyinlik: 'orta',
    savol: 'Afrikada 1960-yilda ko‘plab davlatlarning mustaqillikka erishishi qanday nom bilan eslanadi?',
    variantlar: ['A) Afrika yili', 'B) Buyuk sakrash', 'C) Berlin bahori'],
    togriJavob: 0,
    izoh: '1960-yilda 17 ta Afrika davlati mustaqillikka erishgani sababli bu yil “Afrika yili” deb atalgan.'
  },
  {
    id: 1031,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Sovuq urush',
    qiyinlik: 'orta',
    savol: 'Yadro qurolini tarqatmaslik shartnomasining uch asosiy yo‘nalishidan biri qaysi?',
    variantlar: ['A) Yadro qurolini tarqatmaslik', 'B) Barcha yadroviy tadqiqotlarni taqiqlash', 'C) Atom energiyasidan tinch maqsadda foydalanishni bekor qilish'],
    togriJavob: 0,
    izoh: 'Shartnoma yadro qurolining tarqalishini cheklash, qurolsizlanish bo‘yicha muzokaralar va atom energiyasidan tinch foydalanishni ko‘zlaydi.'
  },
  {
    id: 1032,
    sinf: 11,
    bolim: 'jahon',
    mavzu: 'Zamonaviy dunyo',
    qiyinlik: 'orta',
    savol: 'YUNESKOning Jahon merosi ro‘yxati asosan nimani muhofaza qilishga qaratilgan?',
    variantlar: ['A) Umumjahon ahamiyatiga ega madaniy va tabiiy obyektlarni', 'B) Faqat zamonaviy sport inshootlarini', 'C) Davlatlarning valyuta zaxiralarini'],
    togriJavob: 0,
    izoh: 'Jahon merosi ro‘yxati insoniyat uchun alohida madaniy yoki tabiiy qiymatga ega obyektlarni muhofaza qilishga qaratilgan.'
  },
  {
    id: 1033,
    sinf: 11,
    bolim: 'jahon',
    mavzu: 'Globallashuv',
    qiyinlik: 'orta',
    savol: 'Monreal protokoli qaysi ekologik muammoni kamaytirishga qaratilgan?',
    variantlar: ['A) Ozon qatlamini yemiruvchi moddalarni cheklash', 'B) Dengiz sathini sun’iy pasaytirish', 'C) Barcha ko‘mir konlarini yopish'],
    togriJavob: 0,
    izoh: '1987-yilda qabul qilingan Monreal protokoli ozon qatlamini yemiruvchi moddalarni bosqichma-bosqich kamaytirishga qaratilgan.'
  },
  {
    id: 1034,
    sinf: 11,
    bolim: 'jahon',
    mavzu: 'Globallashuv',
    qiyinlik: 'orta',
    savol: '2012-yilda Yevropa Ittifoqiga Tinchlik bo‘yicha Nobel mukofoti nima uchun berilgan?',
    variantlar: ['A) Yevropada tinchlik, yarashuv va demokratiyani rivojlantirishdagi hissasi uchun', 'B) Birinchi sun’iy yo‘ldoshni uchirgani uchun', 'C) Jahon Savdo Tashkilotini tuzgani uchun'],
    togriJavob: 0,
    izoh: 'Nobel qo‘mitasi Yevropa Ittifoqini Yevropada tinchlik, yarashuv, demokratiya va inson huquqlarini rivojlantirgani uchun taqdirlagan.'
  },
  {
    id: 1035,
    sinf: 8,
    bolim: 'jahon',
    mavzu: 'Sanoat inqilobi',
    qiyinlik: 'orta',
    savol: 'XIX asr boshidagi Angliyada Ludditlar harakati vakillari asosan nimaga qarshi chiqqan?',
    variantlar: ['A) Yangi to‘qimachilik mashinalarining keng qo‘llanishiga', 'B) Temiryo‘l qurilishining kengayishiga', 'C) Savdo kemalarining okeanlarda suzishiga'],
    togriJavob: 0,
    izoh: 'Ludditlar yangi to‘qimachilik mashinalari ish o‘rinlariga tahdid soladi deb hisoblab, ayrim mashinalarni buzgan.'
  },
  {
    id: 1036,
    sinf: 8,
    bolim: 'jahon',
    mavzu: 'Sanoat inqilobi',
    qiyinlik: 'oson',
    savol: '1851-yilda Londonda o‘tkazilgan Buyuk ko‘rgazmada asosan nimalar namoyish etilgan?',
    variantlar: ['A) Qadimgi Misr maqbaralari', 'B) Sanoat, fan va texnika yutuqlari', 'C) Faqat harbiy qurollar'],
    togriJavob: 1,
    izoh: 'Londondagi Buyuk ko‘rgazma turli mamlakatlarning sanoat mahsulotlari, ixtirolari va texnologik yutuqlarini namoyish etgan.'
  },
  {
    id: 1037,
    sinf: 9,
    bolim: 'jahon',
    mavzu: 'Birinchi jahon urushi',
    qiyinlik: 'orta',
    savol: '1916-yilgi Somma jangida qaysi tomonlar o‘zaro jang qilgan?',
    variantlar: ['A) Fransiya va Italiya', 'B) Buyuk Britaniya hamda Fransiya boshchiligidagi ittifoqchilar va Germaniya', 'C) Rossiya va Yaponiya'],
    togriJavob: 1,
    izoh: 'Somma jangi 1916-yilda G‘arbiy frontda Britaniya va Fransiya qo‘shinlarining Germaniyaga qarshi hujumi sifatida kechgan.'
  },
  {
    id: 1038,
    sinf: 9,
    bolim: 'jahon',
    mavzu: 'Ikkinchi jahon urushi',
    qiyinlik: 'oson',
    savol: 'Ikkinchi El-Alameyn jangi Ikkinchi jahon urushining qaysi hududidagi muhim janglardan biri bo‘lgan?',
    variantlar: ['A) Shimoliy Afrika', 'B) Skandinaviya', 'C) Tinch okeanidagi orollar'],
    togriJavob: 0,
    izoh: '1942-yilda Misrda bo‘lib o‘tgan Ikkinchi El-Alameyn jangi Shimoliy Afrika frontida ittifoqchilar foydasiga muhim burilish yasagan.'
  },
  {
    id: 1039,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Dekolonizatsiya',
    qiyinlik: 'oson',
    savol: 'Gana Buyuk Britaniyadan qaysi yilda mustaqillikka erishgan?',
    variantlar: ['A) 1945-yilda', 'B) 1957-yilda', 'C) 1963-yilda'],
    togriJavob: 1,
    izoh: 'Gana 1957-yil 6-martda mustaqil bo‘lib, Sahroi Kabirdan janubdagi Afrikada mustamlaka boshqaruvidan ozod bo‘lgan ilk davlatlardan biri bo‘ldi.'
  },
  {
    id: 1040,
    sinf: 10,
    bolim: 'jahon',
    mavzu: 'Dekolonizatsiya',
    qiyinlik: 'orta',
    savol: 'Afrika Birligi Tashkiloti qaysi yilda tuzilgan?',
    variantlar: ['A) 1957-yilda', 'B) 2002-yilda', 'C) 1963-yilda'],
    togriJavob: 2,
    izoh: 'Afrika Birligi Tashkiloti 1963-yilda Addis-Abebada tuzilgan; uning o‘rnida 2002-yilda Afrika Ittifoqi faoliyat boshlagan.'
  }
)

questions.push(...grade5SupplementalQuestions)
questions.push(...grade5SupplementalQuestions2)
questions.push(...grade6SupplementalQuestions)
questions.push(...grade7SupplementalQuestions)
questions.push(...additionalQuestions)
questions.push(...additionalQuestions56)
questions.push(...additionalQuestions78)
questions.push(...additionalQuestions911)

export const SINFLAR = [5, 6, 7, 8, 9, 10, 11];

export const BOLIMLAR = [
  { id: 'uzbekiston', nomi: "O'zbekiston tarixi" },
  { id: 'jahon', nomi: "Jahon tarixi" }
];

export const QIYINLIK_DARAJALARI = [
  { id: 'oson', nomi: 'Oson' },
  { id: 'orta', nomi: "O'rta" },
  { id: 'qiyin', nomi: 'Qiyin' }
];

export const MAVZULAR = {
  5: {
    uzbekiston: ["Qadimgi O'zbekiston", "Ilk davlatlar"],
    jahon: ["Qadimgi dunyo", "Qadimgi sivilizatsiyalar", "Jahon xronologiyasi"]
  },
  6: {
    uzbekiston: ["O'rta asrlar", "Arab xalifaligi davri"],
    jahon: ["O'rta asrlar Yevropasi", "Sharq mamlakatlari", "Jahon xronologiyasi"]
  },
  7: {
    uzbekiston: ["Temuriylar davri", "Amir Temur davlati"],
    jahon: ["Uyg'onish davri", "Buyuk geografik kashfiyotlar", "Yangi davr", "Jahon xronologiyasi"]
  },
  8: {
    uzbekiston: ["Xonliklar davri", "Rossiya bosqini"],
    jahon: ["Yangi davr", "Sanoat inqilobi", "Jahon xronologiyasi"]
  },
  9: {
    uzbekiston: ["Jadidchilik harakati", "Sovet davri"],
    jahon: ["Birinchi jahon urushi", "Ikkinchi jahon urushi", "Jahon xronologiyasi"]
  },
  10: {
    uzbekiston: ["Mustaqillik sari", "Mustaqillik e'lon qilinishi", "Sovet davri", "Mustaqil O'zbekiston"],
    jahon: ["Sovuq urush", "Dekolonizatsiya", "Jahon xronologiyasi"]
  },
  11: {
    uzbekiston: ["Mustaqil O'zbekiston", "Zamonaviy taraqqiyot"],
    jahon: ["Zamonaviy dunyo", "Globallashuv", "Jahon xronologiyasi"]
  }
};
