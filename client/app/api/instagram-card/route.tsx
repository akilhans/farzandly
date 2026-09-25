import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const template = searchParams.get('template') || 'mehrli-tarbiya';
  const age = searchParams.get('age') || '3-5 yosh';
  const customHook = searchParams.get('hook');

  // Colors
  const bg = '#FAF7F2';
  const primaryEmerald = '#059669';
  const slate900 = '#0F172A';
  const slate600 = '#475569';

  if (template === 'platform-intro') {
    const hook = customHook || 'Farzand tarbiyasida o‘zingizni yolg‘iz his qilyapsizmi?';
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: bg,
            padding: '64px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #E2E8F0', paddingBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: primaryEmerald, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px', fontWeight: 'bold' }}>
                FZ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '28px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Raqamli Tarbiya Maktabi</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: '#fff', border: '2px solid #E2E8F0', borderRadius: '999px', padding: '8px 20px', fontSize: '15px', fontWeight: '800', color: '#334155' }}>
                {age}
              </div>
            </div>
          </div>

          {/* Hook */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>
              <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '6px 18px', borderRadius: '999px', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase' }}>
                Platforma bilan tanishuv
              </span>
            </div>
            <h1 style={{ fontSize: '50px', fontWeight: '900', color: slate900, lineHeight: 1.15, margin: 0 }}>
              {hook}
            </h1>
            <p style={{ fontSize: '20px', color: slate600, fontWeight: '500', margin: 0 }}>
              Bolaga baqirishdan charchadingizmi? Farzandly — zamonaviy psixologiya va islomiy qadriyatlarni birlashtirgan ilk mikro-ta’lim platformasi.
            </p>
          </div>

          {/* 3 Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: 'auto 0' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>1. Har kuni atigi 5 daqiqa</span>
                <span style={{ backgroundColor: '#D1FAE5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Mikro-ta’lim</span>
              </div>
              <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
                Qalin kitoblar o‘qishga vaqt yo‘qmi? Har kuni bitta amaliy, sinalgan va hayotiy qadam.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>2. Ilm va Fitrat uyg‘unligi</span>
                <span style={{ backgroundColor: '#CCFBF1', color: '#0F766E', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Ikki qanot</span>
              </div>
              <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
                Garvard bolalar neyropsixologiyasi va 14 asrlik sahih islomiy tarbiya odoblari bitta tizimda.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>3. Duolingo uslubida o‘rganish</span>
                <span style={{ backgroundColor: '#FEF3C7', color: '#B45309', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Gamifikatsiya</span>
              </div>
              <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
                Kunlik streak, XP ballari va vaziyatli mini-testlar orqali zerikmasdan odat shakllantiring.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #E2E8F0', paddingTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '16px', border: '2px solid #E2E8F0' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
              <span style={{ color: '#CBD5E1' }}>|</span>
              <span style={{ fontSize: '15px', fontWeight: '700', color: primaryEmerald }}>Har kuni 5 daqiqa</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>@farzandly.uz</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>Saqlab qo‘ying 🔖</span>
            </div>
          </div>
        </div>
      ),
      { width: 1080, height: 1350 }
    );
  }

  if (template === 'ekran-vaqti') {
    const hook = customHook || 'Smartfonni yig‘i-sig‘isiz cheklash mumkinmi?';
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: bg,
            padding: '64px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #E2E8F0', paddingBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: primaryEmerald, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px', fontWeight: 'bold' }}>
                FZ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '28px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Raqamli Tarbiya Maktabi</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: '#fff', border: '2px solid #E2E8F0', borderRadius: '999px', padding: '8px 20px', fontSize: '15px', fontWeight: '800', color: '#334155' }}>
                {age}
              </div>
            </div>
          </div>

          {/* Hook */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>
              <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', padding: '6px 18px', borderRadius: '999px', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase' }}>
                Ekran Vaqti • Odatlar
              </span>
            </div>
            <h1 style={{ fontSize: '50px', fontWeight: '900', color: slate900, lineHeight: 1.15, margin: 0 }}>
              {hook}
            </h1>
            <p style={{ fontSize: '20px', color: slate600, fontWeight: '500', margin: 0 }}>
              To‘satdan tortib olish — bolada dopamin inqirozini chaqiradi. 3 ta sokin va ilmiy yechim:
            </p>
          </div>

          {/* 3 Step Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: 'auto 0' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>1. Taymer bilan oldindan ogohlantirish</span>
                <span style={{ backgroundColor: '#FEF3C7', color: '#B45309', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>5 daqiqa oldin</span>
              </div>
              <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
                «Hoziroq ber!» deb emas, «Yana 5 daqiqadan so‘ng taymer jiringlaydi, video tugaydi» deb birga kelishing.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>2. «Dopamin ko‘prigi» (Ertak yoki o‘yin)</span>
                <span style={{ backgroundColor: '#D1FAE5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Muqobil quvonch</span>
              </div>
              <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
                Ekran o‘chgach darhol bo‘shliq qolmasin. Rangli qalamlar, ertak yoki kichik birgalikdagi faoliyat taklif qiling.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>3. Tanlash imkoniyatini bering</span>
                <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Avtonomiya</span>
              </div>
              <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
                «O‘chir» degan buyruq o‘rniga: «Xohlasang, birga kitob ko‘ramiz yoki lego teramiz». Bola o‘zini boshqaruvda his qilsin.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #E2E8F0', paddingTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '16px', border: '2px solid #E2E8F0' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
              <span style={{ color: '#CBD5E1' }}>|</span>
              <span style={{ fontSize: '15px', fontWeight: '700', color: primaryEmerald }}>Har kuni 5 daqiqa</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>@farzandly.uz</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>Saqlab qo‘ying 🔖</span>
            </div>
          </div>
        </div>
      ),
      { width: 1080, height: 1350 }
    );
  }

  if (template === 'gamification') {
    const hook = customHook || 'Farzand tarbiyasi — qalin kitoblar emas, 5 daqiqalik odat';
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: bg,
            padding: '64px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #E2E8F0', paddingBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: primaryEmerald, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px', fontWeight: 'bold' }}>
                FZ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '28px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Raqamli Tarbiya Maktabi</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: '#fff', border: '2px solid #E2E8F0', borderRadius: '999px', padding: '8px 20px', fontSize: '15px', fontWeight: '800', color: '#334155' }}>
                {age}
              </div>
            </div>
          </div>

          {/* Hook */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>
              <span style={{ backgroundColor: '#FEF3C7', color: '#B45309', padding: '6px 18px', borderRadius: '999px', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase' }}>
                🎮 Duolingo Uslubida • Gamifikatsiya
              </span>
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '900', color: slate900, lineHeight: 1.15, margin: 0 }}>
              {hook}
            </h1>
            <p style={{ fontSize: '20px', color: slate600, fontWeight: '500', margin: 0 }}>
              Farzandly — ota-onalar uchun ilk o‘yinlashtirilgan mikro-ta’lim. Har kuni bitta kichik amaliy qadam:
            </p>
          </div>

          {/* Duolingo HUD Row */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '20px', padding: '18px', border: '2px solid #FDE68A', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '32px' }}>🔥</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '26px', fontWeight: '900', color: slate900 }}>7 kun</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#D97706', textTransform: 'uppercase' }}>Streak odati</span>
              </div>
            </div>
            <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '20px', padding: '18px', border: '2px solid #A7F3D0', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '32px' }}>⭐</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '26px', fontWeight: '900', color: slate900 }}>+150 XP</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#059669', textTransform: 'uppercase' }}>Tajriba bali</span>
              </div>
            </div>
            <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '20px', padding: '18px', border: '2px solid #BAE6FD', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '32px' }}>🏆</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '26px', fontWeight: '900', color: slate900 }}>3-daraja</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0284C7', textTransform: 'uppercase' }}>Hushyor Ota-ona</span>
              </div>
            </div>
          </div>

          {/* Quiz Box */}
          <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '26px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: primaryEmerald, textTransform: 'uppercase' }}>
              Interaktiv mini-vaziyat (1 daqiqa)
            </span>
            <span style={{ fontSize: '22px', fontWeight: '800', color: slate900 }}>
              Bola do‘konda o‘yinchoq talab qilib qattiq yig‘lasa, birinchi to‘g‘ri qadam nima?
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ padding: '14px 18px', borderRadius: '16px', border: '2px solid #E2E8F0', backgroundColor: '#F8FAFC', fontSize: '16px', color: '#64748B', display: 'flex', gap: '12px' }}>
                <span style={{ fontWeight: 'bold' }}>A:</span> Darhol jahlingiz chiqib, do‘kondan sudrab olib chiqish
              </div>
              <div style={{ padding: '14px 18px', borderRadius: '16px', border: '2px solid #10B981', backgroundColor: '#ECFDF5', fontSize: '16px', color: '#065F46', fontWeight: 'bold', display: 'flex', gap: '12px' }}>
                <span>B:</span> Yoniga o‘tirib, xotirjam quchoqlash va hissiyotini tan olish (+20 XP ✓)
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #E2E8F0', paddingTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '16px', border: '2px solid #E2E8F0' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
              <span style={{ color: '#CBD5E1' }}>|</span>
              <span style={{ fontSize: '15px', fontWeight: '700', color: primaryEmerald }}>Har kuni 5 daqiqa</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>@farzandly.uz</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>Saqlab qo‘ying 🔖</span>
            </div>
          </div>
        </div>
      ),
      { width: 1080, height: 1350 }
    );
  }

  if (template === 'hikmat-va-ilm') {
    const hook = customHook || 'Go‘zal odob — eng katta sarmoya';
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: bg,
            padding: '64px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #E2E8F0', paddingBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: primaryEmerald, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px', fontWeight: 'bold' }}>
                FZ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '28px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Raqamli Tarbiya Maktabi</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: '#fff', border: '2px solid #E2E8F0', borderRadius: '999px', padding: '8px 20px', fontSize: '15px', fontWeight: '800', color: '#334155' }}>
                {age}
              </div>
            </div>
          </div>

          {/* Hook */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>
              <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '6px 18px', borderRadius: '999px', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase' }}>
                ✨ Hikmat va Ilm • Qadriyat
              </span>
            </div>
            <h1 style={{ fontSize: '50px', fontWeight: '900', color: slate900, lineHeight: 1.15, margin: 0 }}>
              {hook}
            </h1>
            <p style={{ fontSize: '20px', color: slate600, fontWeight: '500', margin: 0 }}>
              14 asrlik islomiy hikmat va bugungi zamonaviy neyropsixologiya bir nuqtada birlashadi:
            </p>
          </div>

          {/* Split Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: 'auto 0' }}>
            {/* Hadith */}
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #A7F3D0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#065F46' }}>🕌 Sahih Hadis & Islomiy Tarbiya</span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#047857' }}>Imom Termiziy</span>
              </div>
              <p style={{ fontSize: '21px', fontWeight: '800', color: slate900, fontStyle: 'italic', margin: 0, borderLeft: '4px solid #059669', paddingLeft: '16px' }}>
                «Hech bir ota o‘z farzandiga go‘zal odobdan afzalroq narsa bera olmaydi.»
              </p>
              <p style={{ fontSize: '16px', color: slate600, margin: 0 }}>
                Payg‘ambarimiz (s.a.v.) bolalar bilan so‘zlashganda ularning qo‘lidan ushlab, butun vujudlari bilan o‘girilib tinglaganlar.
              </p>
            </div>

            {/* Science */}
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #BAE6FD', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#0369A1' }}>🧠 Zamonaviy Bolalar Neyropsixologiyasi</span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#0284C7' }}>Harvard Child Development</span>
              </div>
              <p style={{ fontSize: '20px', fontWeight: '800', color: slate900, margin: 0, borderLeft: '4px solid #0284C7', paddingLeft: '16px' }}>
                Bola ota-onadan to‘liq ko‘z muloqoti va mehr olganda, miyaning empatiya va iroda markazlari ancha tez rivojlanadi.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #E2E8F0', paddingTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '16px', border: '2px solid #E2E8F0' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
              <span style={{ color: '#CBD5E1' }}>|</span>
              <span style={{ fontSize: '15px', fontWeight: '700', color: primaryEmerald }}>Har kuni 5 daqiqa</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>@farzandly.uz</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>Saqlab qo‘ying 🔖</span>
            </div>
          </div>
        </div>
      ),
      { width: 1080, height: 1350 }
    );
  }

  // Default: Mehrli Tarbiya
  const hook = customHook || 'Bolaga baqirmasdan gap uqtirishning 3 qoidasi';
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: bg,
          padding: '64px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #E2E8F0', paddingBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: primaryEmerald, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px', fontWeight: 'bold' }}>
              FZ
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Raqamli Tarbiya Maktabi</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#fff', border: '2px solid #E2E8F0', borderRadius: '999px', padding: '8px 20px', fontSize: '15px', fontWeight: '800', color: '#334155' }}>
              {age}
            </div>
          </div>
        </div>

        {/* Hook */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
          <div style={{ display: 'flex' }}>
            <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '6px 18px', borderRadius: '999px', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase' }}>
              Mehrli Tarbiya • Tantrum va Injiqlik
            </span>
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '900', color: slate900, lineHeight: 1.15, margin: 0 }}>
            {hook}
          </h1>
          <p style={{ fontSize: '20px', color: slate600, fontWeight: '500', margin: 0 }}>
            Baqirish bola miyasida «qo‘rquv» zonasini yoqadi, tushunishni emas. Mehr bilan ta’sir qilish yo‘li:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: 'auto 0' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>1. Ko‘z darajasiga tushing</span>
              <span style={{ backgroundColor: '#D1FAE5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Neyropsixologiya</span>
            </div>
            <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
              Yuqoridan buyruq bermang. Bola oldida cho‘qqayib, ko‘zlariga mehr bilan qarang. Bu unga xavfsizlik beradi.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>2. Hissini tan oling</span>
              <span style={{ backgroundColor: '#CCFBF1', color: '#0F766E', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Empatiya</span>
            </div>
            <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
              «Jahling chiqyapti, tushunaman... O‘yinchoqni berging kelmadi». Hislar inkor qilinmasa, agressiya so‘nadi.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '2px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: slate900 }}>3. Qat’iy chegara qo‘ying</span>
              <span style={{ backgroundColor: '#FEF3C7', color: '#B45309', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>Qat’iyat</span>
            </div>
            <p style={{ fontSize: '18px', color: slate600, margin: 0, lineHeight: 1.4 }}>
              Baqirmang, lekin yon bermang: «Lekin birovni urish yoki sindirish mumkin emas». Sokin ovoz — eng qudratli qurol.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #E2E8F0', paddingTop: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '16px', border: '2px solid #E2E8F0' }}>
            <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>farzandly.uz</span>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: primaryEmerald }}>Har kuni 5 daqiqa</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '18px', fontWeight: '900', color: slate900 }}>@farzandly.uz</span>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>Saqlab qo‘ying 🔖</span>
          </div>
        </div>
      </div>
    ),
    { width: 1080, height: 1350 }
  );
}
