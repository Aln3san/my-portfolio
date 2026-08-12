# تخصيص الموقع — تعليمات بالعربية

هذا الملف يشرح بالتفصيل كيفية تعديل المحتوى والبيانات الأساسية في هذا الـportfolio المبني على Astro + React + Tailwind (باستخدام Bun كـpackage manager). مذكور أين توجد القيم الملفوفة وما تغيّر لتخصيص الموقع لِـAnas.

ملاحظات عامة
- لا حاجة لتعديل الملفات داخل مجلد `.astro/` أو `dist/` أو ملفات المولدات الأخرى.
- استخدم `bun` كما هو محدد في المشروع (لا تغيّر package manager).

أوامر تشغيل وبناء
- تثبيت الحزم:
  bun install
- تشغيل بيئة التطوير:
  bun run dev
  ثم افتح: http://localhost:4321
- فحص الأنواع (TypeScript) وAstro:
  bun run typecheck
- فحص التنسيق:
  bun run format:check
- تشغيل linters:
  bun run lint
- بناء نسخة الإنتاج:
  bun run build
- معاينة نسخة الإنتاج محليًا:
  bun run preview

أين توجد البيانات التي يجب تعديلها؟
المركز الرئيسي للبيانات القابلة للتعديل هو ملف TypeScript واحد:

ملف: `src/lib/data.ts`
هذا الملف يحتوي على كائنات قابلة للتعديل مثل:
- `personalInfo` — الاسم، البريد، GitHub، LinkedIn، profile picture، hero text
- `workExperience` — خبرات العمل (في هذا الإصدار تم إفراغها لأنك لم تزود بيانات العمل)
- `education` — التعليم (فارغ هنا)
- `skills` — التقنيات والمهارات (مقسمة إلى مجموعات)
- `selectedWork` — المشاريع المعروضة في قسم Projects
- `awards` — الجوائز (فارغ هنا)

كيفية تغيير:

1) تغيير اسمي
- الملف: `src/lib/data.ts`
- المفتاح: `personalInfo.name`
- مثال: `name: "Anas Aln3san",`

2) تغيير نص الـHero
- الملف: `src/lib/data.ts`
- المفتاح: `personalInfo.heroDescription`
- يفضل كتابة جملة قصيرة ومهنية تذكر فيها أنك "build APIs, backend systems, ...".

3) تغيير About (الفقرة التمهيدية في قسم الخبرة)
- الملف: `src/components/ExperienceSection.tsx`
- النص الافتراضي في أعلى القسم مأخوذ من داخل المكون. لتعديله بسرعة يمكنك:
  - تعديل السطر في `ExperienceSection.tsx` عند الفقرة الأولى (البيان النصي تحت عنوان "Work Experience")
  - أو وضع نص مختصر في `src/lib/data.ts` وإنشاء حقل جديد لربطه إن أردت (الحل البسيط: تعديل `ExperienceSection.tsx`).

4) إضافة مشروع جديد
- الملف: `src/lib/data.ts`
- المصفوفة: `selectedWork`
- كل مشروع ككائن يحتوي على المفاتيح التالية:
  - `title` (string)
  - `context` (string) — نوع المشروع أو وصف قصير مثل "Laravel Backend / API"
  - `summary` (string)
  - `stack` (string[]) — قائمة التقنيات
  - `description` (string[]) — نقاط قصيرة توضح الدور أو المهام
  - (اختياري) أضف رابط GitHub داخل `description` أو ضمن نص الـsummary؛ لا تنشئ أزرار Live Demo إذا لم يكن موجودًا
- بعد التعديل احفظ ثم شغّل `bun run dev` وتأكد أن القسم يظهر بشكلٍ صحيح.

5) حذف مشروع
- احذف الكائن المطلوب من مصفوفة `selectedWork` في `src/lib/data.ts`، ثم حفظ وإعادة تحميل الصفحة.

6) تعديل مشروع موجود
- افتح `src/lib/data.ts` وعدّل الحقول في كائن المشروع.

7) تغيير رابط GitHub
- الملف: `src/lib/data.ts` — في `personalInfo.github` غيّر الرابط
- بعض المكونات قد تعرض روابط المشاريع ضمن `selectedWork`; حرّر هناك أيضاً.

8) تغيير LinkedIn
- الملف: `src/lib/data.ts` — في `personalInfo.linkedin`

9) تغيير Email
- الملف: `src/lib/data.ts` — في `personalInfo.email`

10) تغيير Tech Stack
- الملف: `src/lib/data.ts` — في المصفوفة `skills` عدّل أو أضف مجموعات وتقنيات

11) تغيير ألوان الموقع
- الألوان مُدارة عبر ملفات CSS / Tailwind الموجودة داخل المشروع (الافتراضي في `src/styles` وملفات Tailwind config إذا وُجِدت).
- سريع: ابحث في `src/styles` وملفات `tailwind.config` (إن وُجدت) — لكن في هذا القالب معظم الألوان تأتي من متغيرات CSS.
- إن أردت تغيير لون رئيسي (مثل `--coral` أو `--hero-background`) ابحث عنها في ملفات CSS داخل `src/styles` وعدّل القيمة.

12) تغيير الخطوط
- تحقق من ملفات الـCSS في `src/styles` حيث تُعرّف قواعد الخطوط. يمكن تعديل استدعاء الخطوط في `src/layouts` أو ملف CSS الرئيسي.

13) تغيير Navbar
- الملف: `src/components/GlassHeader.tsx`
- اسم العرض في أعلى الملف يُعرض من `personalInfo.name` لذلك لتغييره عدّل `src/lib/data.ts` أو غيّر النص هنا.
- لإضافة/حذف روابط التنقل عدّل الثابت `NAV_ITEMS` داخل `GlassHeader.tsx`.

14) تغيير Footer
- الملف: `src/components/Footer.tsx`
- يحتوي على روابط التواصل وسنقوم بتعديل البيانات من `src/lib/data.ts` حيثما أمكن.

15) إضافة/تغيير صورة شخصية
- المسار الافتراضي: `public/profile.jpg`
- لاستبدال الصورة: ضع اسم الملف الجديد داخل `public/` ثم عدّل `personalInfo.profilePicture` في `src/lib/data.ts` إلى المسار (مثال: `/me.jpg`).
- تأكد من أن الصورة ليست كبيرة جدًا للحفاظ على سرعة التحميل.

16) تشغيل المشروع محليًا
- تعليمات التشغيل: انظر أعلى الملف (الأوامر)
  - bun install
  - bun run dev

17) عمل production build
- bun run build
- bun run preview (لمعاينة)

18) أهم المكونات (أين توجد):
- Layout component: `src/layouts/Layout.astro`
- Hero: `src/components/HeroSection.tsx`
- Header / Navbar: `src/components/GlassHeader.tsx`
- Projects: `src/components/ProjectsSection.tsx`
- Skills: `src/components/SkillsSection.tsx`
- Experience/About: `src/components/ExperienceSection.tsx`
- Footer: `src/components/Footer.tsx`
- البيانات المركزية: `src/lib/data.ts`
- SEO helpers: `src/lib/seo.ts`

19) تغيير صورة في Header (Portrait)
- الملف: `src/lib/data.ts` — حقل `personalInfo.profilePicture`
- ضع الصورة داخل مجلد `public/` ثم حدّث القيمة (مثال: `/my-photo.jpg`).

ملاحظات عن التخصيص والتصميم
- لا تضف معلومات زائفة (خبرات، سنوات، عملاء، شهادات) — هذا الأمر متعمد هنا.
- الحفاظ على الـfocus على Backend: عند كتابة وصف المشاريع استخدم مصطلحات Backend (API, DB, Authentication, Laravel, PHP).
- عند إضافة روابط GitHub، ضع الروابط الحقيقية فقط.

أخيرًا
- إن احتجت مساعدة في إضافة مشروع أو رفع صورة أو تنسيق محتوى الـAbout، اذكر ما تريد تحديدًا وسأقوم بالتغيير.

---

## تحميل الـCV (ملف PDF)

- مكان الملف داخل المشروع: `public/cv/lastes_cv_Anas_Alnaasan_Back-End Developer_resume.pdf`
  - تم وضع نسخة من الـCV داخل مجلد `public/cv/`، وهذا يضمن أن الملف سيكون متاحًا بعد عملية البناء (production build).
- كيف يستعمل الموقع الملف:
  - رابط التحميل في الـHero يظهر كزر "Download CV" ويشير إلى المسار أعلاه ويستخدم خاصية `download` ليؤدي إلى تنزيل الملف بدلاً من فتحه.
  - كما تم ضبط الحقل `personalInfo.resume` في `src/lib/data.ts` إلى نفس المسار ليظهر رابط "Resume" في الـheader.
- إذا أردت استبدال الملف بملف جديد:
  1. انسخ الملف الجديد إلى مجلد `public/cv/` بنفس الاسم أو احذف/أعد تسمية الملف القديم ثم ضع الملف الجديد.
  2. إن غيرت اسم الملف، حدّث المسار في `src/lib/data.ts` (الحقل `personalInfo.resume`) وإذا رغبت بتغيير سلوك التحميل أو اسم الزر قم بتعديل `src/components/HeroSection.tsx`.

## Education (أين تُعدل بيانات التعليم)

- الملف المسؤول عن بيانات التعليم: `src/lib/data.ts`
  - افتح الملف وابحث عن المصفوفة `education`.
  - تحتوي كل مدخلة تعليمية على الحقول: `degree`, `institution`, `location`, `period`, (اختياري) `achievements`.
  - المثال المُضاف من الـCV:
    - degree: "Middle School Student"
    - institution: "Mansoura Preparatory School for Boys"
    - location: "Mansoura, Dakahlia, Egypt"
    - period: "September 2026 - Present"
- الملف/المكوّن الذي يعرض قسم التعليم: `src/components/EducationSection.tsx`.
  - لتغيير عرض أو ترتيب العناصر البصرية عدّل هذا المكون، لكن الأفضل تعديل البيانات في `src/lib/data.ts` فقط.
- ملاحظة: تمت إزالة كلمة "Leadership" من عنوان قسم التعليم كما طُلِب؛ إن كان هناك حقول أخرى متعلقة بالـLeadership استخدمها خارج هذا القسم.

## Hackathons (أين تضيف أو تعدل الـHackathons)

- البيانات موجودة في: `src/lib/data.ts` — المصفوفة `hackathons`.
  - كل مدخلة تتضمن عادة: `name`, `date`, `description`.
  - المثال المُضاف:
    - name: "Red Dev Hackathon"
    - date: "August 2026"
    - description: "Participated in the hackathon as part of a team."
- المكون الذي يعرضها: `src/components/HackathonsSection.tsx`.
  - لإضافة hackathon جديد: أضف كائنًا جديدًا إلى `hackathons` في `src/lib/data.ts`، ثم احفظ.
  - لتغيير النص أو التاريخ، عدّل الحقول المناسبة في تلك المصفوفة.

---

(انتهت التعديلات التوضيحية الخاصة بتحميل الـCV والتعليم وHackathons.)
