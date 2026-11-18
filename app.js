(() => {
  const STORAGE_KEY = 'vocabrecall_webapp_store_v10';
  const PEER_ID_KEY = 'vocabrecall_peer_id';
  const PERMANENT_BONJOUR_URL = window.__PERMANENT_BONJOUR_URL__ || 'http://sakulpongs-macbook-air.local:3457';
  const CLOUD_APP_URL = 'https://potae13.github.io/vocabrecall/webapp.html';

  const INITIAL_SEED_WORDS = [
  {
    "id": "voc-standards",
    "word": "standards",
    "meanings": [
      "มาตรฐาน"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Our engineering team strictly follows international security standards.",
    "exampleTh": "ทีมวิศวกรของเราปฏิบัติตามมาตรฐานความปลอดภัยระดับสากลอย่างเคร่งครัด",
    "collocation": "meet standards / high standards (ผ่านเกณฑ์มาตรฐาน)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383167411,
    "updatedAt": 1792780131288,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-assign",
    "word": "assign",
    "meanings": [
      "กำหนด",
      "มอบหมาย"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "The project manager will assign specific tasks to each developer today.",
    "exampleTh": "ผู้จัดการโปรเจกต์จะมอบหมายงานเฉพาะเจาะจงให้แก่นักพัฒนาแต่ละคนในวันนี้",
    "collocation": "assign a task to someone (มอบหมายงานให้)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383259017,
    "updatedAt": 1792780102924,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-unique",
    "word": "Unique",
    "meanings": [
      "เอกลักษณ์"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Every record in the database table must have a unique identifier.",
    "exampleTh": "ทุกเรคคอร์ดในตารางฐานข้อมูลจะต้องมีรหัสระบุตัวตนที่มีเอกลักษณ์ไม่ซ้ำกัน",
    "collocation": "unique to / unique identifier (มีเอกลักษณ์เฉพาะ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383293726,
    "updatedAt": 1792780064149,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-duplicate",
    "word": "Duplicate",
    "meanings": [
      "ซ้ำซ้อน"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Please remove any duplicate entries before importing the customer list.",
    "exampleTh": "กรุณาลบรายการที่ซ้ำซ้อนออกทั้งหมดก่อนนำเข้ารายชื่อลูกค้า",
    "collocation": "duplicate record / duplicate data (ข้อมูลที่ซ้ำซ้อน)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383270619,
    "updatedAt": 1792780164864,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-design",
    "word": "Design",
    "meanings": [
      "ออกแบบ"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "We need to design a clean user interface that works smoothly on iPad.",
    "exampleTh": "เราต้องออกแบบหน้าจอผู้ใช้งานที่สะอาดตาและทำงานได้อย่างลื่นไหลบน iPad",
    "collocation": "design for / system design (การออกแบบระบบ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383261610,
    "updatedAt": 1792780098590,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-relational",
    "word": "Relational",
    "meanings": [
      "ความสัมพันธ์"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "A relational database links information across multiple tables using keys.",
    "exampleTh": "ฐานข้อมูลเชิงความสัมพันธ์จะเชื่อมโยงข้อมูลข้ามหลายตารางโดยใช้คีย์",
    "collocation": "relational database (ฐานข้อมูลเชิงสัมพันธ์)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383291028,
    "updatedAt": 1792780149907,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-prevent",
    "word": "Prevent",
    "meanings": [
      "ป้องกัน"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Proper input validation helps prevent unauthorized access to the server.",
    "exampleTh": "การตรวจสอบข้อมูลนำเข้าอย่างถูกต้องช่วยป้องกันการเข้าถึงเซิร์ฟเวอร์โดยไม่ได้รับอนุญาต",
    "collocation": "prevent someone from doing (ป้องกันไม่ให้เกิด)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383226732,
    "updatedAt": 1792780119156,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-choose",
    "word": "Choose",
    "meanings": [
      "เลือก"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "You can choose the review mode that best fits your learning style.",
    "exampleTh": "คุณสามารถเลือกโหมดการทบทวนที่เหมาะกับสไตล์การเรียนรู้ของคุณมากที่สุด",
    "collocation": "choose between / choose to (เลือกที่จะ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383266410,
    "updatedAt": 1792779965055,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-correct",
    "word": "Correct",
    "meanings": [
      "ถูกต้อง"
    ],
    "category": "สอบ & วิชาการ",
    "exampleEn": "Make sure you select the correct meaning based on the sentence context.",
    "exampleTh": "ตรวจสอบให้แน่ใจว่าคุณเลือกความหมายที่ถูกต้องตามบริบทของประโยค",
    "collocation": "correct answer / politically correct (คำตอบที่ถูกต้อง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793383159274,
    "updatedAt": 1792780036007,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-space",
    "word": "Space",
    "meanings": [
      "พื้นที่"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Compressing old log files will free up valuable storage space on your disk.",
    "exampleTh": "การบีบอัดไฟล์ล็อกเก่าจะช่วยเพิ่มพื้นที่จัดเก็บข้อมูลที่มีค่าบนดิสก์ของคุณ",
    "collocation": "storage space / save space (พื้นที่จัดเก็บ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 6,
    "wrongCount": 1,
    "nextReviewAt": 1793383164717,
    "updatedAt": 1792780146308,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-organize",
    "word": "Organize",
    "meanings": [
      "จัดให้เป็นระเบียบ",
      "จัดระเบียบ"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Categories help you organize hundreds of vocabulary words systematically.",
    "exampleTh": "หมวดหมู่ช่วยให้คุณจัดระเบียบคำศัพท์หลายร้อยคำได้อย่างเป็นระบบ",
    "collocation": "organize into / well-organized (จัดให้เป็นระเบียบ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793384968741,
    "updatedAt": 1792780513047,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-command",
    "word": "Command",
    "meanings": [
      "คำสั่ง"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Run this terminal command to restart the background sync service.",
    "exampleTh": "รันคำสั่งเทอร์มินัลนี้เพื่อเริ่มต้นการทำงานของบริการซิงค์เบื้องหลังใหม่อีกครั้ง",
    "collocation": "execute a command / command line (ชุดคำสั่ง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 10,
    "wrongCount": 5,
    "nextReviewAt": 1793612037615,
    "updatedAt": 1793180713588,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-grow",
    "word": "Grow",
    "meanings": [
      "เติบโต"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "As your vocabulary bank continues to grow, reading English becomes effortless.",
    "exampleTh": "เมื่อคลังคำศัพท์ของคุณเติบโตขึ้นอย่างต่อเนื่อง การอ่านภาษาอังกฤษก็จะกลายเป็นเรื่องง่าย",
    "collocation": "grow rapidly / grow into (เติบโตขึ้น)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385412339,
    "updatedAt": 1792868797452,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-divide",
    "word": "Divide",
    "meanings": [
      "แบ่ง"
    ],
    "category": "สอบ & วิชาการ",
    "exampleEn": "It is easier to divide a complex software project into smaller modules.",
    "exampleTh": "มันง่ายกว่าที่จะแบ่งโปรเจกต์ซอฟต์แวร์ที่ซับซ้อนออกเป็นโมดูลย่อยๆ",
    "collocation": "divide into / divide between (แบ่งออกเป็น)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385452805,
    "updatedAt": 1792868758670,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-efficient",
    "word": "Efficient",
    "meanings": [
      "มีประสิทธิภาพ"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Indexing the table makes searching through millions of rows much more efficient.",
    "exampleTh": "การทำดัชนีให้ตารางช่วยให้การค้นหาข้อมูลนับล้านแถวมีประสิทธิภาพมากขึ้นอย่างมาก",
    "collocation": "efficient at / cost-efficient (มีประสิทธิภาพคุ้มค่า)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 4,
    "totalAttempts": 8,
    "wrongCount": 4,
    "nextReviewAt": 1793558624071,
    "updatedAt": 1793007105869,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-normalization",
    "word": "Normalization",
    "meanings": [
      "การลดความซ้ำซ้อน"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Database normalization reduces data redundancy and improves data integrity.",
    "exampleTh": "การลดความซ้ำซ้อนของฐานข้อมูลช่วยลดข้อมูลซ้ำและเพิ่มความถูกต้องสมบูรณ์ของข้อมูล",
    "collocation": "database normalization (การลดความซ้ำซ้อนของข้อมูล)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385369820,
    "updatedAt": 1792868537002,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-called",
    "word": "Called",
    "meanings": [
      "เรียกว่า"
    ],
    "category": "ทั่วไป",
    "exampleEn": "This memory technique is called spaced repetition.",
    "exampleTh": "เทคนิคการจำแบบนี้ถูกเรียกว่าการทบทวนแบบเว้นระยะห่าง",
    "collocation": "be called / so-called (ที่เรียกว่า)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385448996,
    "updatedAt": 1792868534564,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-keep",
    "word": "Keep",
    "meanings": [
      "เก็บ"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Always keep a backup copy of your important project files.",
    "exampleTh": "ควรเก็บสำเนาสำรองของไฟล์โปรเจกต์สำคัญของคุณไว้เสมอ",
    "collocation": "keep track of / keep in mind (เก็บรักษา, จำไว้)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385343427,
    "updatedAt": 1792868550780,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-fix",
    "word": "Fix",
    "meanings": [
      "แก้ไข"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The developer managed to fix the layout bug before the product launch.",
    "exampleTh": "นักพัฒนาสามารถแก้ไขบั๊กหน้าจอได้สำเร็จก่อนการเปิดตัวผลิตภัณฑ์",
    "collocation": "fix an issue / quick fix (แก้ไขปัญหา)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385415260,
    "updatedAt": 1792868662190,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-information",
    "word": "Information",
    "meanings": [
      "ข้อมูล"
    ],
    "category": "ทั่วไป",
    "exampleEn": "All sensitive user information is encrypted before being stored.",
    "exampleTh": "ข้อมูลของผู้ใช้ที่ละเอียดอ่อนทั้งหมดจะถูกเข้ารหัสก่อนนำไปจัดเก็บ",
    "collocation": "piece of information / detailed information (ข้อมูลข่าวสาร)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385347813,
    "updatedAt": 1792868619124,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-quickly",
    "word": "Quickly",
    "meanings": [
      "อย่างรวดเร็ว"
    ],
    "category": "ทั่วไป",
    "exampleEn": "The system quickly syncs your latest progress across both devices.",
    "exampleTh": "ระบบจะซิงค์ความคืบหน้าล่าสุดของคุณข้ามทั้งสองอุปกรณ์อย่างรวดเร็ว",
    "collocation": "respond quickly / adapt quickly (อย่างรวดเร็ว)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 4,
    "totalAttempts": 8,
    "wrongCount": 4,
    "nextReviewAt": 1793473498654,
    "updatedAt": 1792953668969,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-without",
    "word": "Without",
    "meanings": [
      "ปราศจาก",
      "โดยไม่มี"
    ],
    "category": "ทั่วไป",
    "exampleEn": "You can review your vocabulary offline without needing an internet connection.",
    "exampleTh": "คุณสามารถทบทวนคำศัพท์แบบออฟไลน์ได้โดยปราศจากการเชื่อมต่ออินเทอร์เน็ต",
    "collocation": "without a doubt / do without (ปราศจาก, โดยไม่มี)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 10,
    "wrongCount": 5,
    "nextReviewAt": 1793785289626,
    "updatedAt": 1794670307377,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-build",
    "word": "Build",
    "meanings": [
      "สร้าง"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Consistent daily practice helps you build a strong foundation in English.",
    "exampleTh": "การฝึกฝนอย่างสม่ำเสมอทุกวันช่วยให้คุณสร้างรากฐานภาษาอังกฤษที่แข็งแกร่ง",
    "collocation": "build up / build on (สร้างขึ้น, ต่อยอด)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473543205,
    "updatedAt": 1792953704868,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-security",
    "word": "Security",
    "meanings": [
      "ความปลอดภัย"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Two-factor authentication adds an essential layer of account security.",
    "exampleTh": "การยืนยันตัวตนสองชั้นช่วยเพิ่มเกราะป้องกันที่สำคัญให้กับความปลอดภัยของบัญชี",
    "collocation": "cyber security / security measure (มาตรการความปลอดภัย)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473492323,
    "updatedAt": 1792953776918,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-variable",
    "word": "Variable",
    "meanings": [
      "ตัวแปร"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Declare a descriptive variable name so the code is easy to read.",
    "exampleTh": "จงตั้งชื่อตัวแปรที่สื่อความหมายชัดเจนเพื่อให้โค้ดอ่านเข้าใจง่าย",
    "collocation": "environment variable / local variable (ตัวแปร)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385836555,
    "updatedAt": 1792868548507,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-fail",
    "word": "Fail",
    "meanings": [
      "ล้มเหลว"
    ],
    "category": "ทั่วไป",
    "exampleEn": "If the network connection happens to fail, the app saves everything locally.",
    "exampleTh": "หากการเชื่อมต่อเครือข่ายเกิดล้มเหลว ตัวแอปจะบันทึกทุกอย่างไว้ในเครื่องโดยอัตโนมัติ",
    "collocation": "fail to do / without fail (ล้มเหลว, อย่างไม่พลาด)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473379630,
    "updatedAt": 1792953751707,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-successful",
    "word": "Successful",
    "meanings": [
      "สำเร็จ"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "After a successful login, the user is redirected to the main dashboard.",
    "exampleTh": "หลังจากการเข้าสู่ระบบสำเร็จ ผู้ใช้จะถูกนำไปยังหน้าแดชบอร์ดหลัก",
    "collocation": "successful in / highly successful (ประสบความสำเร็จ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385833202,
    "updatedAt": 1792868554601,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-need",
    "word": "need",
    "meanings": [
      "ต้องการ"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "You only need ten minutes a day to review your pending flashcards.",
    "exampleTh": "คุณเพียงแค่ต้องการเวลาวันละสิบนาทีเพื่อทบทวนบัตรคำศัพท์ที่รออยู่",
    "collocation": "in need of / need to (ต้องการ, จำเป็นต้อง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385839720,
    "updatedAt": 1792868751356,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-these",
    "word": "these",
    "meanings": [
      "เหล่านี้"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Please review these technical terms before tomorrow's meeting.",
    "exampleTh": "กรุณาทบทวนคำศัพท์เทคนิคเหล่านี้ก่อนการประชุมในวันพรุ่งนี้",
    "collocation": "these days / all of these (สิ่งเหล่านี้)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473394530,
    "updatedAt": 1792953843891,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-secure",
    "word": "Secure",
    "meanings": [
      "ปลอดภัย"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Using parameterized queries keeps your database secure from SQL injection.",
    "exampleTh": "การใช้คำสั่งคิวรีแบบพารามิเตอร์ช่วยให้ฐานข้อมูลของคุณปลอดภัยจากการโจมตีแบบ SQL Injection",
    "collocation": "secure against / keep secure (ปลอดภัย, มั่นคง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 4,
    "totalAttempts": 9,
    "wrongCount": 5,
    "nextReviewAt": 1793611921547,
    "updatedAt": 1793180499922,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-access",
    "word": "Access",
    "meanings": [
      "การเข้าถึง"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Only authorized administrators have access to the production server.",
    "exampleTh": "มีเพียงผู้ดูแลระบบที่ได้รับอนุญาตเท่านั้นที่มีสิทธิ์ในการเข้าถึงเซิร์ฟเวอร์ใช้งานจริง",
    "collocation": "have access to / grant access (การเข้าถึงข้อมูล)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793385379808,
    "updatedAt": 1792868683640,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-error",
    "word": "Error",
    "meanings": [
      "ข้อผิดพลาด"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The compiler reported a syntax error on line forty-two.",
    "exampleTh": "ตัวคอมไพเลอร์รายงานข้อผิดพลาดทางไวยากรณ์ที่บรรทัดที่สี่สิบสอง",
    "collocation": "trial and error / syntax error (ข้อผิดพลาด)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473538880,
    "updatedAt": 1792953566608,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-things",
    "word": "things",
    "meanings": [
      "สิ่งของ"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Breaking big goals into small steps makes things much easier to manage.",
    "exampleTh": "การย่อยเป้าหมายใหญ่เป็นขั้นตอนเล็กๆ ทำให้สิ่งต่างๆ จัดการได้ง่ายขึ้นมาก",
    "collocation": "first things first / make things easier (สิ่งของ, เรื่องราว)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473618553,
    "updatedAt": 1792953617095,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-usually",
    "word": "usually",
    "meanings": [
      "โดยปกติ"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "I usually review my English vocabulary on my iPad before going to bed.",
    "exampleTh": "โดยปกติฉันมักจะทบทวนคำศัพท์ภาษาอังกฤษบน iPad ก่อนเข้านอน",
    "collocation": "usually happen / as usual (โดยปกติ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 4,
    "totalAttempts": 7,
    "wrongCount": 3,
    "nextReviewAt": 1793473605313,
    "updatedAt": 1792953868644,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-separate",
    "word": "Separate",
    "meanings": [
      "เรียงลำดับ",
      "แยกออกจากกัน"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "It is good practice to keep configuration files separate from source code.",
    "exampleTh": "ถือเป็นแนวทางที่ดีในการแยกและเรียงลำดับไฟล์ตั้งค่าออกจากซอร์สโค้ด",
    "collocation": "separate from / separate into (แยกออก, เรียงลำดับแยก)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612159265,
    "updatedAt": 1793180834504,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-own",
    "word": "own",
    "meanings": [
      "เป็นเจ้าของ"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Each device maintains its own local copy of the vocabulary database.",
    "exampleTh": "อุปกรณ์แต่ละเครื่องจะดูแลรักษาสำเนาฐานข้อมูลคำศัพท์ที่เป็นเจ้าของในเครื่องตัวเอง",
    "collocation": "on your own / own a business (เป็นเจ้าของ, ด้วยตัวเอง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793473567536,
    "updatedAt": 1792953770512,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-credentials",
    "word": "credentials",
    "meanings": [
      "คุณสมบัติ"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Never hardcode your database login credentials directly inside the script.",
    "exampleTh": "ห้ามฝังข้อมูลรับรองคุณสมบัติการเข้าสู่ระบบฐานข้อมูลไว้ในสคริปต์โดยตรงเด็ดขาด",
    "collocation": "login credentials / verify credentials (ข้อมูลรับรอง / คุณสมบัติ)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 11,
    "wrongCount": 10,
    "nextReviewAt": 1794954535308,
    "updatedAt": 1794932935308,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-fetch",
    "word": "Fetch",
    "meanings": [
      "ดึงข้อมูล"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The web application will fetch the updated vocabulary list from the server.",
    "exampleTh": "เว็บแอปพลิเคชันจะดึงข้อมูลรายการคำศัพท์ที่อัปเดตล่าสุดมาจากเซิร์ฟเวอร์",
    "collocation": "fetch data from API (ดึงข้อมูลจากระบบ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612174530,
    "updatedAt": 1793180564988,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-query",
    "word": "Query",
    "meanings": [
      "การสอบถามข้อมูล"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Optimizing the SQL query reduced the page loading time by half.",
    "exampleTh": "การปรับแต่งการสอบถามข้อมูล SQL ช่วยลดเวลาโหลดหน้าเว็บลงได้ครึ่งหนึ่ง",
    "collocation": "run a query / search query (การสอบถามข้อมูล)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612069825,
    "updatedAt": 1793180730971,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-result",
    "word": "Result",
    "meanings": [
      "ผลลัพธ์"
    ],
    "category": "สอบ & วิชาการ",
    "exampleEn": "The experiment produced a very promising result for the research team.",
    "exampleTh": "การทดลองได้ให้ผลลัพธ์ที่น่าพึงพอใจอย่างยิ่งสำหรับทีมวิจัย",
    "collocation": "as a result / result in (ผลลัพธ์, ส่งผลให้)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793611983497,
    "updatedAt": 1793180742355,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-row",
    "word": "Row",
    "meanings": [
      "แถวแนวนอน"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Each row in the spreadsheet represents a single vocabulary item.",
    "exampleTh": "แต่ละแถวแนวนอนในตารางสเปรดชีตแทนข้อมูลคำศัพท์หนึ่งรายการ",
    "collocation": "in a row / table row (แถวแนวนอน)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793611986266,
    "updatedAt": 1793180435954,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-contains",
    "word": "contains",
    "meanings": [
      "ประกอบด้วย"
    ],
    "category": "ทั่วไป",
    "exampleEn": "This JSON file contains all your mastered words and review history.",
    "exampleTh": "ไฟล์ JSON นี้ประกอบด้วยคำศัพท์ที่คุณจำแม่นแล้วและประวัติการทบทวนทั้งหมด",
    "collocation": "contain information (ประกอบด้วย, บรรจุ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612184719,
    "updatedAt": 1793180470104,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-fill",
    "word": "fill",
    "meanings": [
      "กรอก"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Please fill in the blank with the word that best matches the sentence.",
    "exampleTh": "กรุณากรอกคำศัพท์ที่ตรงกับบริบทของประโยคมากที่สุดลงในช่องว่าง",
    "collocation": "fill in the blank / fill out a form (กรอกข้อมูล, เติมคำ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612052852,
    "updatedAt": 1793180908938,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-then",
    "word": "Then",
    "meanings": [
      "จากนั้น"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Listen carefully to the pronunciation first, and then type the spelling.",
    "exampleTh": "จงฟังเสียงอ่านออกเสียงอย่างตั้งใจก่อน จากนั้นจึงพิมพ์ตัวสะกด",
    "collocation": "since then / back then (จากนั้น, แล้วจึง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793611910669,
    "updatedAt": 1793180547076,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-submit",
    "word": "Submit",
    "meanings": [
      "ส่งข้อมูล"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Press Enter to submit your answer and check if the translation is accurate.",
    "exampleTh": "กดปุ่ม Enter เพื่อส่งข้อมูลคำตอบของคุณและตรวจดูว่าคำแปลถูกต้องหรือไม่",
    "collocation": "submit a form / submit an assignment (ส่งข้อมูล, ยื่นส่ง)",
    "status": "learning",
    "srsStage": 3,
    "correctStreak": 1,
    "totalAttempts": 8,
    "wrongCount": 5,
    "nextReviewAt": 1794756592851,
    "updatedAt": 1794674629426,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-insert",
    "word": "Insert",
    "meanings": [
      "เพิ่ม"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Use the INSERT statement to insert a new customer record into the table.",
    "exampleTh": "ใช้คำสั่ง INSERT เพื่อเพิ่มเรคคอร์ดลูกค้าใหม่เข้าไปในตารางข้อมูล",
    "collocation": "insert into (เพิ่มข้อมูลแทรกเข้าไป)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793611992064,
    "updatedAt": 1793180953203,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-record",
    "word": "Record",
    "meanings": [
      "บันทึก"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The system will automatically record the timestamp of your latest review.",
    "exampleTh": "ระบบจะบันทึกเวลาของการทบทวนครั้งล่าสุดของคุณโดยอัตโนมัติ",
    "collocation": "keep a record / record data (บันทึกข้อมูล)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612094065,
    "updatedAt": 1793180578475,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-success",
    "word": "Success",
    "meanings": [
      "ความสำเร็จ"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Persistence and daily review are the keys to long-term success.",
    "exampleTh": "ความสม่ำเสมอและการทบทวนทุกวันคือกุญแจสำคัญสู่ความสำเร็จในระยะยาว",
    "collocation": "achieve success / key to success (ความสำเร็จ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 4,
    "totalAttempts": 8,
    "wrongCount": 4,
    "nextReviewAt": 1795274999020,
    "updatedAt": 1794674636126,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-existing",
    "word": "existing",
    "meanings": [
      "ที่มีอยู่เดิม"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "The sync engine merges new words without overwriting your existing progress.",
    "exampleTh": "ระบบซิงค์จะรวมคำศัพท์ใหม่เข้าด้วยกันโดยไม่ทับความคืบหน้าที่มีอยู่เดิมของคุณ",
    "collocation": "existing data / existing customer (ที่มีอยู่เดิม)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612189521,
    "updatedAt": 1793180409571,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-modify",
    "word": "modify",
    "meanings": [
      "ปรับเปลี่ยน"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "You can easily modify the Thai meanings or example sentence at any time.",
    "exampleTh": "คุณสามารถปรับเปลี่ยนแก้ไขคำแปลภาษาไทยหรือประโยคตัวอย่างได้ตลอดเวลาอย่างง่ายดาย",
    "collocation": "modify settings / slightly modify (ปรับเปลี่ยน, แก้ไข)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612034959,
    "updatedAt": 1793180391575,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-condition",
    "word": "condition",
    "meanings": [
      "เงื่อนไข"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The WHERE clause filters records that match a specific condition.",
    "exampleTh": "คำสั่ง WHERE ใช้คัดกรองเฉพาะข้อมูลที่ตรงตามเงื่อนไขที่กำหนด",
    "collocation": "under the condition / meet a condition (เงื่อนไข, สภาพ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612200299,
    "updatedAt": 1793180675776,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-might",
    "word": "might",
    "meanings": [
      "อาจ"
    ],
    "category": "ทั่วไป",
    "exampleEn": "A single English word might have different meanings depending on the context.",
    "exampleTh": "คำศัพท์ภาษาอังกฤษคำเดียวอาจมีความหมายที่แตกต่างกันไปขึ้นอยู่กับบริบท",
    "collocation": "might as well (อาจจะ)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 8,
    "wrongCount": 8,
    "nextReviewAt": 1794934544150,
    "updatedAt": 1794932744150,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-whole",
    "word": "whole",
    "meanings": [
      "ทั้งหมด"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Reading the whole sentence helps you understand how the word is naturally used.",
    "exampleTh": "การอ่านทั้งประโยคทั้งหมดช่วยให้คุณเข้าใจว่าคำศัพท์นั้นถูกใช้งานจริงอย่างไร",
    "collocation": "as a whole / the whole picture (ทั้งหมดทั้งมวล)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 9,
    "wrongCount": 8,
    "nextReviewAt": 1794693393673,
    "updatedAt": 1794671793673,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-important",
    "word": "important",
    "meanings": [
      "สำคัญ"
    ],
    "category": "ทั่วไป",
    "exampleEn": "It is important to review difficult words just before you forget them.",
    "exampleTh": "เป็นสิ่งสำคัญมากที่จะต้องทบทวนคำศัพท์ยากๆ ก่อนที่คุณจะลืมมันไป",
    "collocation": "play an important role (สำคัญอย่างยิ่ง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612168130,
    "updatedAt": 1793180964473,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-directly",
    "word": "directly",
    "meanings": [
      "โดยตรง"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Your iPad syncs directly with your MacBook whenever both are on the same Wi-Fi.",
    "exampleTh": "iPad ของคุณจะซิงค์โดยตรงกับ MacBook ทันทีเมื่อทั้งคู่อยู่ในวง Wi-Fi เดียวกัน",
    "collocation": "directly related to (โดยตรง)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612252068,
    "updatedAt": 1793180919688,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-attack",
    "word": "Attack",
    "meanings": [
      "โจมตี"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Firewalls and prepared statements protect the web server from a malicious attack.",
    "exampleTh": "ไฟร์วอลล์และคำสั่งที่เตรียมไว้ล่วงหน้าช่วยปกป้องเว็บเซิร์ฟเวอร์จากการโจมตีประสงค์ร้าย",
    "collocation": "cyber attack / under attack (การโจมตี)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612100513,
    "updatedAt": 1793180480304,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-danger",
    "word": "Danger",
    "meanings": [
      "อันตราย"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Exposing raw database ports to the public internet puts your data in danger.",
    "exampleTh": "การเปิดพอร์ตฐานข้อมูลทิ้งไว้บนอินเทอร์เน็ตสาธารณะทำให้ข้อมูลของคุณตกอยู่ในอันตราย",
    "collocation": "in danger / out of danger (ตกอยู่ในอันตราย)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612171147,
    "updatedAt": 1793180746442,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-different",
    "word": "different",
    "meanings": [
      "แตกต่าง"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Try practicing with different quiz modes to strengthen your active recall.",
    "exampleTh": "ลองฝึกฝนด้วยโหมดทดสอบที่แตกต่างกันเพื่อเสริมสร้างการดึงความจำออกมาใช้",
    "collocation": "different from (แตกต่างจาก)",
    "status": "learning",
    "srsStage": 4,
    "correctStreak": 2,
    "totalAttempts": 7,
    "wrongCount": 3,
    "nextReviewAt": 1795276611572,
    "updatedAt": 1794671811572,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-carries",
    "word": "carries",
    "meanings": [
      "แบกรับ"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Each network packet carries a small piece of data across the internet.",
    "exampleTh": "แพ็กเก็ตเครือข่ายแต่ละชิ้นจะแบกรับข้อมูลขนาดเล็กวิ่งผ่านอินเทอร์เน็ต",
    "collocation": "carry out / carry on (แบกรับ, ดำเนินการ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612055402,
    "updatedAt": 1793181002788,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-request",
    "word": "Request",
    "meanings": [
      "คำขอ"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The browser sends an HTTP request to the server to load the vocabulary list.",
    "exampleTh": "เบราว์เซอร์จะส่งคำขอ HTTP ไปยังเซิร์ฟเวอร์เพื่อโหลดรายการคำศัพท์",
    "collocation": "make a request / upon request (คำขอ, การร้องขอ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612196998,
    "updatedAt": 1793180475469,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-response",
    "word": "Response",
    "meanings": [
      "การตอบกลับ"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "The server returned a fast JSON response containing all updated items.",
    "exampleTh": "เซิร์ฟเวอร์ส่งการตอบกลับในรูปแบบ JSON ที่รวดเร็วซึ่งบรรจุรายการที่อัปเดตทั้งหมด",
    "collocation": "in response to / server response (การตอบกลับ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612165466,
    "updatedAt": 1793180872604,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-lightweight",
    "word": "Lightweight",
    "meanings": [
      "มีน้ำหนักเบา"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "JSON is a lightweight data format that is easy for both humans and machines to read.",
    "exampleTh": "JSON เป็นรูปแบบข้อมูลที่มีน้ำหนักเบาซึ่งอ่านเข้าใจง่ายทั้งสำหรับมนุษย์และคอมพิวเตอร์",
    "collocation": "lightweight app / lightweight format (มีน้ำหนักเบา, กะทัดรัด)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612191952,
    "updatedAt": 1793180632153,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-arrive",
    "word": "arrive",
    "meanings": [
      "มาถึง"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "What time will your flight arrive at the airport tomorrow morning?",
    "exampleTh": "เที่ยวบินของคุณจะเดินทางมาถึงสนามบินกี่โมงในเช้าวันพรุ่งนี้?",
    "collocation": "arrive at (จุดเล็ก) / arrive in (เมือง/ประเทศ)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 8,
    "wrongCount": 7,
    "nextReviewAt": 1794954715671,
    "updatedAt": 1794933115671,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-just",
    "word": "just",
    "meanings": [
      "แค่"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "I just finished reviewing twenty vocabulary words on my iPad.",
    "exampleTh": "ฉันเพิ่งทบทวนคำศัพท์ยี่สิบคำบน iPad เสร็จเมื่อสักครู่นี้เอง (แค่เพิ่งจะ)",
    "collocation": "just in time / just a moment (แค่, เพิ่งจะ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612156399,
    "updatedAt": 1793180819641,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-busy",
    "word": "busy",
    "meanings": [
      "ยุ่ง"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Even on a busy workday, five minutes of vocabulary review makes a big difference.",
    "exampleTh": "แม้ในวันทำงานที่ยุ่งมาก การทบทวนคำศัพท์เพียงห้านาทีก็สร้างความแตกต่างที่ยิ่งใหญ่ได้",
    "collocation": "busy with / busy schedule (ยุ่งอยู่กับ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793611995048,
    "updatedAt": 1793180923303,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-hang-out",
    "word": "hang out",
    "meanings": [
      "เที่ยวเล่น"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Do you want to hang out at the coffee shop after we finish our project?",
    "exampleTh": "คุณอยากไปเที่ยวเล่นพักผ่อนที่ร้านกาแฟหลังจากที่เราทำโปรเจกต์เสร็จไหม?",
    "collocation": "hang out with friends (ไปเที่ยวเล่น / ใช้เวลาสบายๆ กับเพื่อน)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793612015348,
    "updatedAt": 1793180779479,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-let",
    "word": "let",
    "meanings": [
      "อนุญาติ",
      "อนุญาต"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Please let me know if you need any help setting up the Wi-Fi sync.",
    "exampleTh": "กรุณาอนุญาตแจ้งให้ฉันทราบหากคุณต้องการความช่วยเหลือในการตั้งค่าซิงค์ Wi-Fi",
    "collocation": "let someone do / let me know (อนุญาตให้ทำ, บอกให้รู้)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 6,
    "wrongCount": 5,
    "nextReviewAt": 1794691843966,
    "updatedAt": 1794670243966,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-grab",
    "word": "grab",
    "meanings": [
      "คว้าไว้"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Let's grab a quick cup of coffee before the afternoon session starts.",
    "exampleTh": "แวะคว้ากาแฟสักแก้วแบบด่วนๆ กันเถอะก่อนที่เซสชันช่วงบ่ายจะเริ่มขึ้น",
    "collocation": "grab a bite / grab an opportunity (คว้าไว้, แวะซื้อเร็วๆ)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793611928782,
    "updatedAt": 1793180657087,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-tired",
    "word": "tired",
    "meanings": [
      "เหนื่อย"
    ],
    "category": "บุคลิก & ความรู้สึก",
    "exampleEn": "If you feel tired, switch to the hands-free audio mode and just listen.",
    "exampleTh": "หากคุณรู้สึกเหนื่อยล้า ลองสลับไปใช้โหมดฟังเสียงอัตโนมัติแล้วฟังสบายๆ ได้เลย",
    "collocation": "tired of / feel tired (รู้สึกเหนื่อย)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 8,
    "wrongCount": 7,
    "nextReviewAt": 1794693466864,
    "updatedAt": 1794671866864,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-still",
    "word": "still",
    "meanings": [
      "ยังคง"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Even after several weeks, I can still remember the exact meaning of this word.",
    "exampleTh": "แม้จะผ่านไปหลายสัปดาห์แล้ว ฉันก็ยังคงจำความหมายที่แม่นยำของคำนี้ได้",
    "collocation": "still remaining (ยังคงอยู่)",
    "status": "learning",
    "srsStage": 2,
    "correctStreak": 0,
    "totalAttempts": 7,
    "wrongCount": 5,
    "nextReviewAt": 1794756563254,
    "updatedAt": 1794670163254,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-straight",
    "word": "straight",
    "meanings": [
      "ตรง"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Walk straight ahead for two blocks and you will see the library on your left.",
    "exampleTh": "เดินตรงไปข้างหน้าอีกสองช่วงตึกแล้วคุณจะเห็นห้องสมุดอยู่ทางซ้ายมือ",
    "collocation": "straight ahead / go straight to the point (ตรงไป, ตรงประเด็น)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 9,
    "wrongCount": 4,
    "nextReviewAt": 1793785584726,
    "updatedAt": 1794670185623,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-rest",
    "word": "rest",
    "meanings": [
      "การพักผ่อน"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Taking a short rest after studying helps your brain consolidate new memories.",
    "exampleTh": "การพักผ่อนสั้นๆ หลังจากการเรียนช่วยให้สมองของคุณจัดเก็บความจำใหม่ได้ดีขึ้น",
    "collocation": "take a rest / the rest of (การพักผ่อน, ส่วนที่เหลือ)",
    "status": "learning",
    "srsStage": 2,
    "correctStreak": 1,
    "totalAttempts": 8,
    "wrongCount": 6,
    "nextReviewAt": 1794758186615,
    "updatedAt": 1794671786615,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-invite",
    "word": "invite",
    "meanings": [
      "เชิญ"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "We would like to invite you to join our English speaking practice group.",
    "exampleTh": "เราอยากจะเชิญคุณมาร่วมกลุ่มฝึกพูดภาษาอังกฤษด้วยกัน",
    "collocation": "invite someone to (เชิญชวนให้มา)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 7,
    "wrongCount": 7,
    "nextReviewAt": 1794672086911,
    "updatedAt": 1794670286911,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-schedule",
    "word": "Schedule",
    "meanings": [
      "ตารางเวลา"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "The spaced repetition algorithm will schedule your next review automatically.",
    "exampleTh": "อัลกอริทึมทบทวนแบบเว้นระยะจะจัดตารางเวลาการทบทวนรอบถัดไปให้คุณโดยอัตโนมัติ",
    "collocation": "on schedule / ahead of schedule (ตามตารางเวลา)",
    "status": "learning",
    "srsStage": 4,
    "correctStreak": 2,
    "totalAttempts": 7,
    "wrongCount": 3,
    "nextReviewAt": 1795537452865,
    "updatedAt": 1794932652865,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-reasonable",
    "word": "reasonable",
    "meanings": [
      "เหตุผล"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "The supplier offered a very reasonable price for the new equipment.",
    "exampleTh": "ซัพพลายเออร์ได้เสนอราคาที่สมเหตุสมผลมากสำหรับอุปกรณ์ชุดใหม่",
    "collocation": "reasonable price / reasonable explanation (สมเหตุสมผล)",
    "status": "learning",
    "srsStage": 3,
    "correctStreak": 1,
    "totalAttempts": 6,
    "wrongCount": 3,
    "nextReviewAt": 1794931001065,
    "updatedAt": 1794671801065,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-shipping",
    "word": "shipping",
    "meanings": [
      "การส่งสินค้า"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Orders over fifty dollars qualify for free express shipping nationwide.",
    "exampleTh": "คำสั่งซื้อที่มียอดเกินห้าสิบดอลลาร์จะได้รับสิทธิ์การส่งสินค้าด่วนฟรีทั่วประเทศ",
    "collocation": "free shipping / shipping address (การส่งสินค้า)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793785770125,
    "updatedAt": 1794670226699,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-found",
    "word": "found",
    "meanings": [
      "พบ"
    ],
    "category": "ทั่วไป",
    "exampleEn": "Researchers found that active recall is far more effective than passive reading.",
    "exampleTh": "นักวิจัยพบว่าการดึงความจำออกมาใช้มีประสิทธิภาพมากกว่าการอ่านทวนเฉยๆ อย่างมาก",
    "collocation": "be found in (ค้นพบ, พบว่า)",
    "status": "learning",
    "srsStage": 3,
    "correctStreak": 1,
    "totalAttempts": 6,
    "wrongCount": 3,
    "nextReviewAt": 1794756576492,
    "updatedAt": 1794674640309,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-great",
    "word": "great",
    "meanings": [
      "เยี่ยมมาก"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Practicing with full sentences is a great way to master English naturally.",
    "exampleTh": "การฝึกฝนด้วยประโยคเต็มเป็นวิธีที่เยี่ยมมากในการเก่งภาษาอังกฤษอย่างเป็นธรรมชาติ",
    "collocation": "great deal of / great job (เยี่ยมมาก, ยิ่งใหญ่)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 7,
    "wrongCount": 7,
    "nextReviewAt": 1794935179585,
    "updatedAt": 1794933379585,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-offer",
    "word": "offer",
    "meanings": [
      "เสนอ"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "The company decided to offer him a senior software engineer position.",
    "exampleTh": "บริษัทตัดสินใจเสนอตำแหน่งวิศวกรซอฟต์แวร์อาวุโสให้แก่เขา",
    "collocation": "make an offer / special offer (เสนอ, ข้อเสนอพิเศษ)",
    "status": "learning",
    "srsStage": 3,
    "correctStreak": 1,
    "totalAttempts": 6,
    "wrongCount": 3,
    "nextReviewAt": 1794931008544,
    "updatedAt": 1794671808544,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-gadget",
    "word": "Gadget",
    "meanings": [
      "อุปกรณ์"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "He bought a neat new gadget that tracks his daily sleep quality.",
    "exampleTh": "เขาซื้ออุปกรณ์แกดเจ็ตชิ้นใหม่สุดเจ๋งที่ช่วยติดตามคุณภาพการนอนหลับรายวัน",
    "collocation": "electronic gadget / smart gadget (อุปกรณ์อิเล็กทรอนิกส์พกพา)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793785415802,
    "updatedAt": 1794670323179,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-phase",
    "word": "phase",
    "meanings": [
      "ระยะ"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "The project is now entering the final testing phase before deployment.",
    "exampleTh": "ขณะนี้โปรเจกต์กำลังเข้าสู่ระยะการทดสอบขั้นสุดท้ายก่อนนำไปใช้งานจริง",
    "collocation": "initial phase / next phase (ระยะ, ช่วงขั้นตอน)",
    "status": "learning",
    "srsStage": 3,
    "correctStreak": 1,
    "totalAttempts": 6,
    "wrongCount": 3,
    "nextReviewAt": 1794931053743,
    "updatedAt": 1794671853743,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-hesitate",
    "word": "hesitate",
    "meanings": [
      "ลังเล"
    ],
    "category": "บุคลิก & ความรู้สึก",
    "exampleEn": "Please do not hesitate to contact us if you have any questions.",
    "exampleTh": "กรุณาอย่าลังเลที่จะติดต่อเราหากคุณมีคำถามหรือข้อสงสัยใดๆ",
    "collocation": "hesitate to do / without hesitation (ลังเลที่จะทำ)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 6,
    "wrongCount": 5,
    "nextReviewAt": 1794954298117,
    "updatedAt": 1794932698117,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-brainstorm",
    "word": "Brainstorm",
    "meanings": [
      "การระดมสมอง"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Let's gather the team tomorrow morning to brainstorm creative solutions.",
    "exampleTh": "พรุ่งนี้เช้าเรามารวมทีมเพื่อทำการระดมสมองหาทางออกที่สร้างสรรค์กันเถอะ",
    "collocation": "brainstorm ideas (การระดมสมองคิดไอเดีย)",
    "status": "mastered",
    "srsStage": 4,
    "correctStreak": 5,
    "totalAttempts": 5,
    "wrongCount": 0,
    "nextReviewAt": 1793785340407,
    "updatedAt": 1794670233788,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-reach-out",
    "word": "Reach out",
    "meanings": [
      "ติดต่อหา"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Feel free to reach out to the support team whenever you need assistance.",
    "exampleTh": "สามารถติดต่อหาทีมสนับสนุนได้ตลอดเวลาเมื่อใดก็ตามที่คุณต้องการความช่วยเหลือ",
    "collocation": "reach out to someone (ติดต่อหา, ยื่นมือช่วยเหลือ)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 7,
    "wrongCount": 7,
    "nextReviewAt": 1794935485220,
    "updatedAt": 1794933685220,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-serendipity",
    "word": "Serendipity",
    "meanings": [
      "ความบังเอิญที่น่ายินดี",
      "โชคดีโดยบังเอิญ"
    ],
    "category": "ชีวิตประจำวัน",
    "exampleEn": "Finding that rare programming book at a small café was pure serendipity.",
    "exampleTh": "การได้พบหนังสือเขียนโปรแกรมหายากเล่มนั้นในร้านกาแฟเล็กๆ ถือเป็นความบังเอิญที่น่ายินดีอย่างแท้จริง",
    "collocation": "pure serendipity / by serendipity (ความบังเอิญที่น่ายินดี)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 2,
    "wrongCount": 2,
    "nextReviewAt": 1794934788438,
    "updatedAt": 1794932988438,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-meticulous",
    "word": "Meticulous",
    "meanings": [
      "พิถีพิถัน",
      "ละเอียดรอบคอบ"
    ],
    "category": "บุคลิก & ความรู้สึก",
    "exampleEn": "She is meticulous about testing every edge case before releasing the code.",
    "exampleTh": "เธอเป็นคนพิถีพิถันและละเอียดรอบคอบมากในการทดสอบทุกกรณีพิเศษก่อนปล่อยโค้ด",
    "collocation": "meticulous about / meticulous attention (พิถีพิถัน, ละเอียดรอบคอบ)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 1,
    "totalAttempts": 1,
    "wrongCount": 0,
    "nextReviewAt": 1794693373769,
    "updatedAt": 1794671773769,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-ubiquitous",
    "word": "Ubiquitous",
    "meanings": [
      "มีอยู่ทุกหนทุกแห่ง",
      "พบเห็นได้ทั่วไป"
    ],
    "category": "เทคโนโลยี & วิทย์",
    "exampleEn": "Smartphones and wireless networks have become ubiquitous in modern life.",
    "exampleTh": "สมาร์ตโฟนและเครือข่ายไร้สายได้กลายเป็นสิ่งที่มีอยู่ทุกหนทุกแห่งในชีวิตยุคปัจจุบัน",
    "collocation": "become ubiquitous (มีอยู่ทุกหนทุกแห่ง, พบเห็นได้ทั่วไป)",
    "status": "learning",
    "srsStage": 1,
    "correctStreak": 0,
    "totalAttempts": 3,
    "wrongCount": 2,
    "nextReviewAt": 1794695106917,
    "updatedAt": 1794673506917,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-ephemeral",
    "word": "Ephemeral",
    "meanings": [
      "ชั่วคราว",
      "ไม่จีรัง",
      "สั้นๆ"
    ],
    "category": "สอบ & วิชาการ",
    "exampleEn": "Viral trends on social media are often ephemeral and fade within days.",
    "exampleTh": "กระแสไวรัลบนโซเชียลมีเดียมักเป็นสิ่งชั่วคราวไม่จีรังและจางหายไปภายในไม่กี่วัน",
    "collocation": "ephemeral nature / ephemeral fame (ชั่วคราว, ไม่จีรัง)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 1,
    "wrongCount": 1,
    "nextReviewAt": 1794673562294,
    "updatedAt": 1794671762294,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-resilient",
    "word": "Resilient",
    "meanings": [
      "ยืดหยุ่น",
      "ฟื้นตัวเร็ว",
      "เข้มแข็ง"
    ],
    "category": "บุคลิก & ความรู้สึก",
    "exampleEn": "A resilient cloud architecture recovers quickly from unexpected server failures.",
    "exampleTh": "สถาปัตยกรรมคลาวด์ที่ยืดหยุ่นและฟื้นตัวเร็วจะสามารถกู้คืนตัวเองได้อย่างรวดเร็วเมื่อเซิร์ฟเวอร์ล่ม",
    "collocation": "resilient to change (ยืดหยุ่น, ฟื้นตัวเร็ว, เข้มแข็ง)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 2,
    "wrongCount": 2,
    "nextReviewAt": 1794673605662,
    "updatedAt": 1794671805662,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-devoid",
    "word": "Devoid",
    "meanings": [
      "ปราศจาก",
      "ไร้ซึ่ง",
      "ไม่มีเลย"
    ],
    "category": "สอบ & วิชาการ",
    "exampleEn": "The remote desert plateau was completely devoid of vegetation and surface water.",
    "exampleTh": "ที่ราบสูงในทะเลทรายอันห่างไกลนั้นปราศจากพืชพรรณและน้ำบนผิวดินโดยสิ้นเชิง",
    "collocation": "devoid of + Noun (ปราศจาก, ไร้ซึ่ง)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 1,
    "wrongCount": 0,
    "nextReviewAt": 1794980000000,
    "updatedAt": 1794980000000,
    "device": "MacBook",
    "deleted": false
  },
  {
    "id": "voc-lucrative",
    "word": "Lucrative",
    "meanings": [
      "ทำกำไรได้ดี",
      "สร้างรายได้งาม"
    ],
    "category": "ธุรกิจ & การทำงาน",
    "exampleEn": "Building specialized enterprise software proved to be a lucrative business.",
    "exampleTh": "การสร้างซอฟต์แวร์เฉพาะทางสำหรับองค์กรพิสูจน์แล้วว่าเป็นธุรกิจที่ทำกำไรได้ดีและสร้างรายได้งาม",
    "collocation": "lucrative market / lucrative career (ทำกำไรได้ดี, สร้างรายได้งาม)",
    "status": "learning",
    "srsStage": 0,
    "correctStreak": 0,
    "totalAttempts": 1,
    "wrongCount": 0,
    "nextReviewAt": 1794980000000,
    "updatedAt": 1794980000000,
    "device": "MacBook",
    "deleted": false
  }
];

  // Built-in Smart Dictionary for instant offline suggestions + Collocations
  const BUILTIN_DICT = {
    "devoid": { meanings: ["ปราศจาก", "ไร้ซึ่ง", "ไม่มีเลย"], cat: "สอบ & วิชาการ", en: "The remote desert plateau was completely devoid of vegetation and surface water.", th: "ที่ราบสูงในทะเลทรายอันห่างไกลนั้นปราศจากพืชพรรณและน้ำบนผิวดินโดยสิ้นเชิง", col: "devoid of + Noun (ปราศจาก)" },
    "ephemeral": { meanings: ["ชั่วคราว", "ไม่จีรัง", "สั้นๆ"], cat: "สอบ & วิชาการ", en: "Viral trends on social media are often ephemeral and fade within days.", th: "กระแสไวรัลบนโซเชียลมีเดียมักเป็นสิ่งชั่วคราวไม่จีรังและจางหายไปภายในไม่กี่วัน", col: "ephemeral fame / ephemeral nature" },
    "ubiquitous": { meanings: ["มีอยู่ทุกหนทุกแห่ง", "พบเห็นได้ทั่วไป"], cat: "เทคโนโลยี & วิทย์", en: "Smartphones and wireless networks have become ubiquitous in modern life.", th: "สมาร์ตโฟนและเครือข่ายไร้สายได้กลายเป็นสิ่งที่มีอยู่ทุกหนทุกแห่งในชีวิตยุคปัจจุบัน", col: "become ubiquitous (พบเห็นได้ทั่วไป)" },
    "serendipity": { meanings: ["ความบังเอิญที่น่ายินดี", "โชคดีโดยบังเอิญ"], cat: "ชีวิตประจำวัน", en: "Finding that rare programming book at a small café was pure serendipity.", th: "การได้พบหนังสือเขียนโปรแกรมหายากเล่มนั้นในร้านกาแฟเล็กๆ ถือเป็นความบังเอิญที่น่ายินดีอย่างแท้จริง", col: "pure serendipity / by serendipity" },
    "resilient": { meanings: ["ยืดหยุ่น", "ฟื้นตัวเร็ว", "เข้มแข็ง"], cat: "บุคลิก & ความรู้สึก", en: "A resilient cloud architecture recovers quickly from unexpected server failures.", th: "สถาปัตยกรรมคลาวด์ที่ยืดหยุ่นและฟื้นตัวเร็วจะสามารถกู้คืนตัวเองได้อย่างรวดเร็วเมื่อเซิร์ฟเวอร์ล่ม", col: "resilient to change" },
    "meticulous": { meanings: ["พิถีพิถัน", "ละเอียดรอบคอบ"], cat: "บุคลิก & ความรู้สึก", en: "She is meticulous about testing every edge case before releasing the code.", th: "เธอเป็นคนพิถีพิถันและละเอียดรอบคอบมากในการทดสอบทุกกรณีพิเศษก่อนปล่อยโค้ด", col: "meticulous about / meticulous attention" },
    "lucrative": { meanings: ["ทำกำไรได้ดี", "สร้างรายได้งาม"], cat: "ธุรกิจ & การทำงาน", en: "Building specialized enterprise software proved to be a lucrative business.", th: "การสร้างซอฟต์แวร์เฉพาะทางสำหรับองค์กรพิสูจน์แล้วว่าเป็นธุรกิจที่ทำกำไรได้ดีและสร้างรายได้งาม", col: "lucrative business / lucrative career" },
    "inevitable": { meanings: ["หลีกเลี่ยงไม่ได้", "เกิดขึ้นอย่างแน่นอน"], cat: "สอบ & วิชาการ", en: "Technological change is inevitable in the software industry.", th: "การเปลี่ยนแปลงทางเทคโนโลยีเป็นสิ่งที่หลีกเลี่ยงไม่ได้ในอุตสาหกรรมซอฟต์แวร์", col: "inevitable consequence" },
    "ambiguous": { meanings: ["กำกวม", "คลุมเครือ", "ตีความได้หลายแง่"], cat: "สอบ & วิชาการ", en: "The contract wording was ambiguous and needed clarification.", th: "ถ้อยคำในสัญญามีความกำกวมและจำเป็นต้องได้รับการชี้แจงให้ชัดเจน", col: "ambiguous statement" },
    "pragmatic": { meanings: ["เน้นปฏิบัติจริง", "ตามความเป็นจริง"], cat: "ธุรกิจ & การทำงาน", en: "We need a pragmatic approach to solve this engineering problem on time.", th: "เราต้องการแนวทางที่เน้นปฏิบัติได้จริงเพื่อแก้ปัญหาวิศวกรรมนี้ให้ทันเวลา", col: "pragmatic approach" }
  };

  function detectDeviceProfile() {
    const ua = navigator.userAgent || '';
    const isIPad = /iPad/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isIphone = /iPhone/i.test(ua);
    if (isIPad) return { name: 'iPad', type: 'ipad' };
    if (isIphone) return { name: 'iPhone', type: 'ipad' };
    return { name: 'MacBook', type: 'macbook' };
  }

  const deviceProfile = detectDeviceProfile();
  let peerId = localStorage.getItem(PEER_ID_KEY);
  if (!peerId) {
    peerId = 'vr-peer-' + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(PEER_ID_KEY, peerId);
  }

  function createDefaultCategories() {
    const now = Date.now();
    return [
      { id: 'cat_tech', name: 'เทคโนโลยี & วิทย์', icon: '💻', color: '#4F46E5', updatedAt: now, deleted: false },
      { id: 'cat_biz', name: 'ธุรกิจ & การทำงาน', icon: '💼', color: '#0284C7', updatedAt: now, deleted: false },
      { id: 'cat_daily', name: 'ชีวิตประจำวัน', icon: '☕', color: '#059669', updatedAt: now, deleted: false },
      { id: 'cat_exam', name: 'สอบ & วิชาการ', icon: '🎓', color: '#7C3AED', updatedAt: now, deleted: false },
      { id: 'cat_feel', name: 'บุคลิก & ความรู้สึก', icon: '✨', color: '#D97706', updatedAt: now, deleted: false },
      { id: 'cat_gen', name: 'ทั่วไป', icon: '📚', color: '#475569', updatedAt: now, deleted: false }
    ];
  }

  let state = {
    activeView: 'quiz',
    learningCatFilter: 'ทุกหมวดหมู่',
    masteredCatFilter: 'ทุกหมวดหมู่',
    searchLearning: '',
    searchMastered: '',

    quizQueue: [],
    currentIndex: 0,
    combo: 0,
    choiceLocked: false,
    selectedChoice: null,
    correctChoice: null,
    currentChoices: [],
    sentenceSubMode: 'cloze_en', // 'cloze_en' or 'context_th'
    revealWordInListening: false,
    typingFeedback: null,
    speakingStatus: '',
    radioLoopActive: false,
    radioTimer: null,

    wifiConnected: false,
    lastSyncedAt: null,
    lastActiveDevice: deviceProfile.name,

    store: {
      version: 10,
      resetEpoch: 0,
      lastUpdated: Date.now(),
      settings: {
        syncRoomCode: 'VR-8899',
        speechRate: 0.88,
        voiceURI: 'auto',
        autoSpeak: true,
        quizMode: 'choices4',
        quizPool: 'due_or_learning',
        categoryFilter: 'ทุกหมวดหมู่',
        updatedAt: Date.now()
      },
      categories: createDefaultCategories(),
      words: JSON.parse(JSON.stringify(INITIAL_SEED_WORDS))
    }
  };

  const localChannel = typeof BroadcastChannel !== 'undefined'
    ? new BroadcastChannel('vocabrecall_local_channel_v10')
    : null;

  if (localChannel) {
    localChannel.onmessage = ev => {
      if (ev.data && ev.data.type === 'LOCAL_STORE_UPDATED' && ev.data.store) {
        state.store = ev.data.store;
        renderAll(false);
      }
    };
  }

  function loadLocalStore() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.version >= 10 && Array.isArray(parsed.words)) {
          state.store = parsed;
        }
      }
      // Ensure all seed words exist and have sentences/translations
      const map = new Map();
      for (const w of state.store.words || []) {
        if (w && w.word) map.set(w.word.trim().toLowerCase(), w);
      }
      for (const seed of INITIAL_SEED_WORDS) {
        const k = seed.word.trim().toLowerCase();
        const existing = map.get(k);
        if (!existing) {
          map.set(k, seed);
        } else {
          if (!existing.exampleEn) existing.exampleEn = seed.exampleEn;
          if (!existing.exampleTh) existing.exampleTh = seed.exampleTh;
          if (!existing.collocation) existing.collocation = seed.collocation;
          if (!existing.category || existing.category === 'ทั่วไป') existing.category = seed.category;
        }
      }
      state.store.words = Array.from(map.values());
      saveLocalStore(false);
    } catch (e) {
      console.warn('Error loading local store:', e);
    }
  }

  function saveLocalStore(broadcast = true) {
    try {
      state.store.lastUpdated = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
      if (broadcast && localChannel) {
        localChannel.postMessage({ type: 'LOCAL_STORE_UPDATED', store: state.store });
      }
    } catch (e) {}
  }

  function activeWords() {
    return (state.store.words || []).filter(w => !w.deleted);
  }

  function learningWords() {
    return activeWords().filter(w => w.status !== 'mastered');
  }

  function dueWords() {
    const now = Date.now();
    return learningWords().filter(w => (w.nextReviewAt || 0) <= now);
  }

  function masteredWords() {
    return activeWords().filter(w => w.status === 'mastered');
  }

  function leechWords() {
    return activeWords().filter(w => (w.wrongCount || 0) >= 2 || ((w.totalAttempts || 0) >= 6 && w.status !== 'mastered'));
  }

  function getAvailableCategoryNames() {
    const set = new Set(['เทคโนโลยี & วิทย์', 'ธุรกิจ & การทำงาน', 'ชีวิตประจำวัน', 'สอบ & วิชาการ', 'บุคลิก & ความรู้สึก', 'ทั่วไป']);
    for (const w of activeWords()) {
      if (w.category) set.add(w.category);
    }
    return Array.from(set);
  }

  // ============================================================================
  // SMART THAI PHONETIC HOMOPHONE & MULTI-CONTEXT ANSWER EVALUATOR
  // ============================================================================
  const THAI_SYNONYM_GROUPS = [
    ['ปราศจาก', 'ปราดจาก', 'ไร้ซึ่ง', 'ไม่มี', 'ไม่มีเลย', 'ขาด', 'โดยไม่มี'],
    ['อนุญาต', 'อนุญาติ', 'ยอมให้', 'เปิดโอกาสให้'],
    ['สังเกต', 'สังเกตุ', 'เฝ้าดู', 'จับตาดู'],
    ['สมบูรณ์', 'สมบูน', 'ครบถ้วน', 'เต็มเปี่ยม'],
    ['ชั่วคราว', 'ไม่จีรัง', 'สั้นๆ', 'ประเดี๋ยวประด๋าว', 'ชั่วครู่'],
    ['มีอยู่ทุกหนทุกแห่ง', 'พบเห็นได้ทั่วไป', 'แพร่หลาย', 'มีอยู่ทั่วไป'],
    ['พิถีพิถัน', 'ละเอียดรอบคอบ', 'ประณีต', 'ถี่ถ้วน', 'ใส่ใจรายละเอียด'],
    ['ยืดหยุ่น', 'ฟื้นตัวเร็ว', 'เข้มแข็ง', 'อดทน', 'ปรับตัวเก่ง'],
    ['ทำกำไรได้ดี', 'สร้างรายได้งาม', 'กำไรงาม', 'ผลตอบแทนสูง'],
    ['ความบังเอิญที่น่ายินดี', 'โชคดีโดยบังเอิญ', 'ความบังเอิญที่ดี'],
    ['จัดให้เป็นระเบียบ', 'จัดระเบียบ', 'จัดการ', 'รวบรวม'],
    ['การลดความซ้ำซ้อน', 'ลดความซ้ำซ้อน', 'จัดโครงสร้างข้อมูล'],
    ['การสอบถามข้อมูล', 'สอบถามข้อมูล', 'คิวรี', 'ค้นข้อมูล'],
    ['ดึงข้อมูล', 'นำข้อมูลมา', 'เรียกข้อมูล']
  ];

  function normalizeText(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/\(.*?\)/g, '')
      .replace(/[^a-z0-9\u0E00-\u0E7F\s]/g, '')
      .replace(/^(การ|ความ|อย่าง|ที่|ซึ่ง|อัน|ผู้|ของ|ใน|โดย)\s*/, '')
      .replace(/\s+/g, '')
      .trim();
  }

  function thaiPhoneticKey(str) {
    let s = normalizeText(str);
    // Remove silent marks (การันต์) and tone marks for phonetic comparison
    s = s.replace(/[\u0E47-\u0E4E]/g, '');
    s = s.replace(/ศ|ษ|ส|ซ/g, 'ส');
    s = s.replace(/ฎ|ฏ|ฐ|ฑ|ฒ|ด|ต|ถ|ท|ธ/g, 'ด');
    s = s.replace(/ณ|ญ|น/g, 'น');
    s = s.replace(/ภ|พ|ผ|ป|บ/g, 'บ');
    s = s.replace(/ฤ|ร|ล|ฬ/g, 'ล');
    s = s.replace(/ไอ|ใอ|ัย/g, 'ัย');
    s = s.replace(/ำ/g, 'าม');
    return s;
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    return dp[m][n];
  }

  function evaluateAnswer(userRaw, acceptedMeanings, isEnglishSpelling = false) {
    const cleanUser = normalizeText(userRaw);
    if (!cleanUser) return { isCorrect: false, matchType: 'wrong', matched: '' };

    if (isEnglishSpelling) {
      const target = normalizeText(acceptedMeanings[0] || '');
      if (cleanUser === target) return { isCorrect: true, matchType: 'exact', matched: acceptedMeanings[0] };
      const dist = levenshtein(cleanUser, target);
      if (target.length >= 5 && dist <= 1) {
        return { isCorrect: true, matchType: 'close', matched: acceptedMeanings[0] };
      }
      return { isCorrect: false, matchType: 'wrong', matched: acceptedMeanings[0] };
    }

    // 1. Direct or normalized match
    for (const m of acceptedMeanings) {
      const normM = normalizeText(m);
      if (cleanUser === normM) {
        return { isCorrect: true, matchType: 'exact', matched: m };
      }
    }

    // 2. Phonetic homophone or synonym group match
    const userPhonetic = thaiPhoneticKey(userRaw);
    for (const m of acceptedMeanings) {
      const normM = normalizeText(m);
      const mPhonetic = thaiPhoneticKey(m);
      if (userPhonetic && userPhonetic === mPhonetic) {
        return { isCorrect: true, matchType: 'phonetic', matched: m };
      }
      // Partial core meaning (e.g. typing "บังเอิญ" for "ความบังเอิญที่น่ายินดี")
      if (cleanUser.length >= 3 && (normM.includes(cleanUser) || cleanUser.includes(normM))) {
        return { isCorrect: true, matchType: 'context', matched: m };
      }
      const dist = levenshtein(cleanUser, normM);
      const maxAllowed = normM.length >= 6 ? 2 : (normM.length >= 4 ? 1 : 0);
      if (maxAllowed > 0 && dist <= maxAllowed) {
        return { isCorrect: true, matchType: 'typo', matched: m };
      }
      const pDist = levenshtein(userPhonetic, mPhonetic);
      if (mPhonetic.length >= 4 && pDist <= 1) {
        return { isCorrect: true, matchType: 'phonetic', matched: m };
      }
    }

    // 3. Synonym group expansion
    for (const group of THAI_SYNONYM_GROUPS) {
      const normGroup = group.map(g => normalizeText(g));
      const phoneticGroup = group.map(g => thaiPhoneticKey(g));
      const itemHasGroup = acceptedMeanings.some(m => normGroup.includes(normalizeText(m)) || phoneticGroup.includes(thaiPhoneticKey(m)));
      if (itemHasGroup) {
        if (normGroup.includes(cleanUser) || phoneticGroup.includes(userPhonetic)) {
          return { isCorrect: true, matchType: 'synonym', matched: acceptedMeanings[0] };
        }
      }
    }

    return { isCorrect: false, matchType: 'wrong', matched: acceptedMeanings.join(', ') };
  }

  // ============================================================================
  // SPEECH SYNTHESIS (VOICE & SPEED) + SPEECH RECOGNITION
  // ============================================================================
  let availableVoices = [];

  function populateVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = window.speechSynthesis.getVoices() || [];
    const enVoices = all.filter(v => /^en[-_]/i.test(v.lang));
    availableVoices = enVoices;

    const sel = document.getElementById('voiceSelect');
    if (!sel) return;
    const currentVal = (state.store.settings && state.store.settings.voiceURI) || 'auto';
    let html = '<option value="auto">🌟 สำเนียงชัดอัตโนมัติ (Samantha / Daniel)</option>';
    for (const v of enVoices) {
      html += `<option value="${v.voiceURI}" ${v.voiceURI === currentVal ? 'selected' : ''}>🗣️ ${v.name} (${v.lang})</option>`;
    }
    sel.innerHTML = html;
  }

  if ('speechSynthesis' in window) {
    populateVoices();
    window.speechSynthesis.onvoiceschanged = populateVoices;
  }

  function speakText(text, lang = 'en-US', customRate = null, onEndCallback = null) {
    if (!('speechSynthesis' in window) || !text) {
      if (onEndCallback) setTimeout(onEndCallback, 400);
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      const rate = customRate || Number((state.store.settings && state.store.settings.speechRate) || 0.88);
      u.rate = rate;

      if (lang.startsWith('en')) {
        const prefURI = state.store.settings && state.store.settings.voiceURI;
        let chosen = null;
        if (prefURI && prefURI !== 'auto') {
          chosen = availableVoices.find(v => v.voiceURI === prefURI);
        }
        if (!chosen) {
          chosen = availableVoices.find(v => /Samantha|Daniel|Alex|Google US English|Moira|Karen/i.test(v.name)) || availableVoices[0];
        }
        if (chosen) u.voice = chosen;
      }
      if (onEndCallback) {
        u.onend = () => onEndCallback();
        u.onerror = () => onEndCallback();
      }
      window.speechSynthesis.speak(u);
    } catch (e) {
      if (onEndCallback) onEndCallback();
    }
  }

  function spellOutWord(word) {
    if (!word) return;
    const letters = word.trim().split('').filter(c => /[a-zA-Z]/.test(c)).join('. ');
    speakText(`${word}. ... ${letters}. ... ${word}`, 'en-US', 0.72);
  }

  // ============================================================================
  // SRS PROGRESSION LOGIC
  // ============================================================================
  const SRS_INTERVALS_MS = [
    1 * 3600 * 1000,       // Stage 0 -> 1 hr
    6 * 3600 * 1000,       // Stage 1 -> 6 hrs
    24 * 3600 * 1000,      // Stage 2 -> 1 day
    3 * 24 * 3600 * 1000,  // Stage 3 -> 3 days
    7 * 24 * 3600 * 1000   // Stage 4 -> 7 days
  ];

  function recordWordReview(wordItem, isCorrect) {
    if (!wordItem) return false;
    const now = Date.now();
    wordItem.totalAttempts = Number(wordItem.totalAttempts || 0) + 1;
    wordItem.updatedAt = now;
    wordItem.device = deviceProfile.name;

    let graduated = false;
    if (isCorrect) {
      wordItem.correctStreak = Number(wordItem.correctStreak || 0) + 1;
      if (Number(wordItem.srsStage || 0) >= 4) {
        wordItem.status = 'mastered';
        wordItem.srsStage = 4;
        graduated = true;
      } else {
        wordItem.srsStage = Number(wordItem.srsStage || 0) + 1;
        const waitMs = SRS_INTERVALS_MS[Math.min(wordItem.srsStage, 4)];
        wordItem.nextReviewAt = now + waitMs;
      }
    } else {
      wordItem.correctStreak = 0;
      wordItem.wrongCount = Number(wordItem.wrongCount || 0) + 1;
      const curStage = Number(wordItem.srsStage || 0);
      wordItem.srsStage = curStage >= 3 ? 1 : 0;
      wordItem.status = 'learning';
      wordItem.nextReviewAt = now + (15 * 60 * 1000); // Retry in 15 mins
    }

    state.lastActiveDevice = `${deviceProfile.name} (เมื่อสักครู่)`;
    saveLocalStore();
    syncWithWifiServer(false);
    return graduated;
  }

  // ============================================================================
  // QUIZ QUEUE & QUESTION PREPARATION
  // ============================================================================
  function buildQuizQueue(resetIndex = true) {
    const catFilter = (state.store.settings && state.store.settings.categoryFilter) || 'ทุกหมวดหมู่';
    const poolMode = (state.store.settings && state.store.settings.quizPool) || 'due_or_learning';

    let pool = activeWords();
    if (catFilter !== 'ทุกหมวดหมู่') {
      pool = pool.filter(w => (w.category || 'ทั่วไป') === catFilter);
    }

    if (poolMode === 'due_or_learning') {
      const due = pool.filter(w => w.status !== 'mastered' && (w.nextReviewAt || 0) <= Date.now());
      const learn = pool.filter(w => w.status !== 'mastered');
      if (due.length >= 3) {
        pool = due;
      } else if (learn.length > 0) {
        pool = learn;
      }
    } else if (poolMode === 'leech_only') {
      const leeches = pool.filter(w => (w.wrongCount || 0) >= 2 || ((w.totalAttempts || 0) >= 6 && w.status !== 'mastered'));
      if (leeches.length > 0) pool = leeches;
    } else if (poolMode === 'mastered_only') {
      const mast = pool.filter(w => w.status === 'mastered');
      if (mast.length > 0) pool = mast;
    }

    // Shuffle nicely
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    state.quizQueue = shuffled;
    if (resetIndex) {
      state.currentIndex = 0;
    } else if (state.currentIndex >= state.quizQueue.length) {
      state.currentIndex = 0;
    }
    prepareCurrentQuestion();
  }

  function getEffectiveMode(wordItem) {
    const mode = (state.store.settings && state.store.settings.quizMode) || 'choices4';
    if (mode !== 'adaptive') return mode;
    const st = Number((wordItem && wordItem.srsStage) || 0);
    if (st === 0) return 'choices4';
    if (st === 1) return 'sentence';
    if (st === 2) return 'listening';
    if (st === 3) return 'reverse';
    return 'typing';
  }

  function maskWordInSentence(sentence, word) {
    if (!sentence || !word) return '_______';
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}(?:s|es|ed|ing|d)?\\b`, 'gi');
    if (regex.test(sentence)) {
      return sentence.replace(regex, '_______');
    }
    return sentence.replace(new RegExp(escaped, 'gi'), '_______');
  }

  function maskThaiMeaningInSentence(thaiSentence, meanings) {
    if (!thaiSentence) return '';
    let masked = thaiSentence;
    for (const m of meanings || []) {
      if (m && masked.includes(m)) {
        masked = masked.replace(m, '[ ...?... ]');
        return masked;
      }
    }
    return thaiSentence;
  }

  function pickNuancedChoices(targetItem, isEnglishTarget = false) {
    const all = activeWords().filter(w => w.word.toLowerCase() !== targetItem.word.toLowerCase());
    // Prefer words in the same category and similar length so distractors are contextually close!
    const sameCat = all.filter(w => w.category === targetItem.category);
    const otherCat = all.filter(w => w.category !== targetItem.category);

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const candidates = [...shuffle(sameCat), ...shuffle(otherCat)];

    const correctText = isEnglishTarget
      ? targetItem.word
      : (targetItem.meanings || []).slice(0, 2).join(', ');

    const distractors = [];
    const usedSet = new Set([correctText.toLowerCase()]);

    for (const c of candidates) {
      const text = isEnglishTarget
        ? c.word
        : (c.meanings || []).slice(0, 2).join(', ');
      if (text && !usedSet.has(text.toLowerCase())) {
        usedSet.add(text.toLowerCase());
        distractors.push(text);
        if (distractors.length >= 3) break;
      }
    }

    const fallbacks = isEnglishTarget
      ? ['Resilient', 'Efficient', 'Consistent', 'Essential']
      : ['มีความสม่ำเสมอ', 'จัดการอย่างเป็นระบบ', 'ตรวจสอบความถูกต้อง', 'ปรับปรุงประสิทธิภาพ'];

    for (const fb of fallbacks) {
      if (distractors.length >= 3) break;
      if (!usedSet.has(fb.toLowerCase())) {
        usedSet.add(fb.toLowerCase());
        distractors.push(fb);
      }
    }

    return shuffle([correctText, ...distractors.slice(0, 3)]);
  }

  function prepareCurrentQuestion() {
    state.choiceLocked = false;
    state.selectedChoice = null;
    state.typingFeedback = null;
    state.revealWordInListening = false;
    state.speakingStatus = '';

    const item = state.quizQueue[state.currentIndex];
    if (!item) return;

    const effMode = getEffectiveMode(item);
    if (effMode === 'sentence') {
      state.sentenceSubMode = Math.random() < 0.55 ? 'cloze_en' : 'context_th';
      const isEnChoice = state.sentenceSubMode === 'cloze_en';
      state.correctChoice = isEnChoice ? item.word : (item.meanings || []).slice(0, 2).join(', ');
      state.currentChoices = pickNuancedChoices(item, isEnChoice);
    } else if (effMode === 'reverse') {
      state.correctChoice = item.word;
      state.currentChoices = pickNuancedChoices(item, true);
    } else {
      state.correctChoice = (item.meanings || []).slice(0, 2).join(', ');
      state.currentChoices = pickNuancedChoices(item, false);
    }

    // Auto-speak if enabled
    if (state.activeView === 'quiz' && state.store.settings.autoSpeak && effMode !== 'radioloop') {
      if (effMode === 'sentence') {
        speakText(item.exampleEn || item.word, 'en-US');
      } else if (effMode !== 'reverse') {
        speakText(item.word, 'en-US');
      }
    }
  }

  function nextQuestion() {
    if (state.quizQueue.length === 0) return;
    state.currentIndex = (state.currentIndex + 1) % state.quizQueue.length;
    prepareCurrentQuestion();
    renderQuizSection();
  }

  // ============================================================================
  // HANDS-FREE AUDIO RADIO LOOP MODE
  // ============================================================================
  function stopRadioLoop() {
    state.radioLoopActive = false;
    if (state.radioTimer) {
      clearTimeout(state.radioTimer);
      state.radioTimer = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    renderQuizSection();
  }

  function runRadioStep() {
    if (!state.radioLoopActive) return;
    const item = state.quizQueue[state.currentIndex];
    if (!item) return;

    renderQuizSection();
    // Step 1: Speak English word
    speakText(item.word, 'en-US', null, () => {
      if (!state.radioLoopActive) return;
      // Pause 1.6s for active recall in mind
      state.radioTimer = setTimeout(() => {
        if (!state.radioLoopActive) return;
        // Step 2: Speak Thai meaning
        speakText((item.meanings || []).join(', '), 'th-TH', 1.0, () => {
          if (!state.radioLoopActive) return;
          // Step 3: Speak English example sentence
          state.radioTimer = setTimeout(() => {
            if (!state.radioLoopActive) return;
            speakText(item.exampleEn || item.word, 'en-US', null, () => {
              if (!state.radioLoopActive) return;
              state.radioTimer = setTimeout(() => {
                if (!state.radioLoopActive) return;
                state.currentIndex = (state.currentIndex + 1) % state.quizQueue.length;
                runRadioStep();
              }, 1400);
            });
          }, 600);
        });
      }, 1600);
    });
  }

  // ============================================================================
  // SPEAKING PRONUNCIATION CHECK (WEB SPEECH RECOGNITION)
  // ============================================================================
  function startSpeakingPractice(targetText) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      showToast('เบราว์เซอร์นี้ไม่รองรับการรับเสียงไมโครโฟน แนะนำให้เปิดผ่าน Safari หรือ Chrome ครับ', '🎤');
      return;
    }
    try {
      const rec = new SpeechRec();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 3;

      state.speakingStatus = '🎙️ กำลังฟังเสียงพูดของคุณ... พูดคำศัพท์หรือประโยคได้เลย!';
      renderQuizSection();

      rec.onresult = ev => {
        const transcripts = [];
        for (let i = 0; i < ev.results[0].length; i++) {
          transcripts.push(ev.results[0][i].transcript);
        }
        const heard = transcripts[0] || '';
        const cleanTarget = normalizeText(targetText);
        const matched = transcripts.some(t => {
          const ct = normalizeText(t);
          return ct.includes(cleanTarget) || cleanTarget.includes(ct) || levenshtein(ct, cleanTarget) <= 2;
        });

        const item = state.quizQueue[state.currentIndex];
        if (matched) {
          state.speakingStatus = `✅ ออกเสียงชัดเจนมาก! ระบบได้ยินว่า "${heard}"`;
          state.combo += 1;
          recordWordReview(item, true);
          showToast(`ออกเสียงถูกต้อง! "${heard}"`, '🗣️');
        } else {
          state.speakingStatus = `💡 ระบบได้ยินว่า "${heard}" — ลองกดฟังเสียงต้นฉบับแล้วพูดซ้ำอีกครั้งครับ`;
        }
        renderQuizSection();
      };

      rec.onerror = () => {
        state.speakingStatus = '⚠️ ไม่ได้ยินเสียงพูด หรือยังไม่ได้อนุญาตไมโครโฟน ลองกดปุ่มไมโครโฟนอีกครั้งครับ';
        renderQuizSection();
      };

      rec.start();
    } catch (e) {
      state.speakingStatus = '⚠️ ไม่สามารถเปิดไมโครโฟนได้';
      renderQuizSection();
    }
  }

  // ============================================================================
  // UI RENDERING
  // ============================================================================
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderNavAndKpis() {
    const dueCount = dueWords().length;
    const learnCount = learningWords().length;
    const mastCount = masteredWords().length;
    const leechCount = leechWords().length;

    document.getElementById('navDueBadge').textContent = dueCount;
    document.getElementById('navLearningBadge').textContent = learnCount;
    document.getElementById('navMasteredBadge').textContent = mastCount;
    document.getElementById('navLeechBadge').textContent = leechCount;

    document.getElementById('kpiDueCount').textContent = dueCount;
    document.getElementById('kpiLearningCount').textContent = learnCount;
    document.getElementById('kpiMasteredCount').textContent = mastCount;
  }

  function renderQuizSection() {
    // 1. Update mode buttons
    const curMode = (state.store.settings && state.store.settings.quizMode) || 'choices4';
    document.querySelectorAll('[data-quiz-mode]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.quizMode === curMode);
    });

    // 2. Update speed buttons & autoSpeak checkbox
    const curSpeed = Number((state.store.settings && state.store.settings.speechRate) || 0.88);
    document.querySelectorAll('[data-speed]').forEach(btn => {
      btn.classList.toggle('active', Math.abs(Number(btn.dataset.speed) - curSpeed) < 0.04);
    });
    const autoChk = document.getElementById('autoSpeakCheckbox');
    if (autoChk) autoChk.checked = Boolean(state.store.settings.autoSpeak);

    // 3. Render Category Filter Bar
    const cats = ['ทุกหมวดหมู่', ...getAvailableCategoryNames()];
    const curCat = (state.store.settings && state.store.settings.categoryFilter) || 'ทุกหมวดหมู่';
    const catBar = document.getElementById('quizCategoryBar');
    if (catBar) {
      catBar.innerHTML = cats.map(c => {
        const count = c === 'ทุกหมวดหมู่'
          ? activeWords().length
          : activeWords().filter(w => (w.category || 'ทั่วไป') === c).length;
        return `<button type="button" class="cat-chip-btn ${c === curCat ? 'active' : ''}" data-quiz-cat="${escapeHtml(c)}">
          📁 ${escapeHtml(c)} (${count})
        </button>`;
      }).join('');
    }

    const arena = document.getElementById('quizArenaContainer');
    if (!arena) return;

    if (state.quizQueue.length === 0) {
      arena.innerHTML = `
        <div class="quiz-hero-box" style="padding:48px 24px;">
          <div style="font-size:3rem;margin-bottom:10px;">🎉</div>
          <h3 style="font-size:1.4rem;font-weight:900;margin-bottom:6px;">ไม่มีคำศัพท์ในตัวกรองนี้</h3>
          <p style="color:var(--text-secondary);margin-bottom:16px;">ลองเปลี่ยนหมวดหมู่เป็น "ทุกหมวดหมู่" หรือเพิ่มคำศัพท์ใหม่เข้าคลังได้เลยครับ</p>
          <button type="button" class="btn-primary" id="btnResetQuizFilter">🎲 สุ่มคำศัพท์ทั้งหมดในคลัง (${activeWords().length} คำ)</button>
        </div>
      `;
      const resetBtn = document.getElementById('btnResetQuizFilter');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.store.settings.categoryFilter = 'ทุกหมวดหมู่';
          state.store.settings.quizPool = 'all_words';
          document.getElementById('quizPoolSelect').value = 'all_words';
          buildQuizQueue(true);
          renderAll(false);
        });
      }
      return;
    }

    const item = state.quizQueue[state.currentIndex] || state.quizQueue[0];
    const effMode = getEffectiveMode(item);

    document.getElementById('comboBadge').textContent = `🔥 คอมโบ ${state.combo}`;
    document.getElementById('progressCounterBadge').textContent = `ข้อ ${state.currentIndex + 1} / ${state.quizQueue.length}`;

    // Mode: Hands-Free Radio Loop
    if (effMode === 'radioloop') {
      arena.innerHTML = `
        <div class="quiz-hero-box">
          <div class="badge-tag badge-indigo" style="margin-bottom:10px;">📻 โหมดวิทยุท่องศัพท์อัตโนมัติ (Hands-Free Audio Loop)</div>
          <div class="quiz-main-word">${escapeHtml(item.word)}</div>
          <div style="font-size:1.45rem;font-weight:900;color:var(--success-color);margin-bottom:12px;">
            คำแปล: ${escapeHtml((item.meanings || []).join(', '))}
          </div>
          <div class="sentence-context-box">
            <div class="sentence-en-text">"${escapeHtml(item.exampleEn || '')}"</div>
            <div class="sentence-th-box">🇹🇭 แปลทั้งประโยค: ${escapeHtml(item.exampleTh || '')}</div>
          </div>
          <div style="margin-top:20px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
            <button type="button" class="btn-primary" id="btnToggleRadioLoop">
              ${state.radioLoopActive ? '⏸️ หยุดเล่นวิทยุท่องศัพท์' : '▶️ เริ่มเล่นวนอัตโนมัติ (อ่านศัพท์ → คำแปล → ประโยค)'}
            </button>
            <button type="button" class="btn-secondary" id="btnSkipRadioNext">⏭️ ข้ามไปคำถัดไป</button>
          </div>
        </div>
      `;
      document.getElementById('btnToggleRadioLoop').addEventListener('click', () => {
        if (state.radioLoopActive) {
          stopRadioLoop();
        } else {
          state.radioLoopActive = true;
          runRadioStep();
        }
      });
      document.getElementById('btnSkipRadioNext').addEventListener('click', () => {
        state.currentIndex = (state.currentIndex + 1) % state.quizQueue.length;
        if (state.radioLoopActive) runRadioStep();
        else renderQuizSection();
      });
      return;
    }

    // Build Prompt Header
    let promptBodyHtml = '';
    const srsDots = [0, 1, 2, 3, 4].map(s =>
      `<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${s <= (item.srsStage || 0) ? '#4F46E5' : '#CBD5E1'};margin-right:3px;"></span>`
    ).join('');

    if (effMode === 'sentence') {
      const isCloze = state.sentenceSubMode === 'cloze_en';
      const displayedEn = isCloze ? maskWordInSentence(item.exampleEn, item.word) : (item.exampleEn || item.word);
      const displayedTh = (state.choiceLocked || !isCloze)
        ? (item.exampleTh || '')
        : maskThaiMeaningInSentence(item.exampleTh || '', item.meanings);

      promptBodyHtml = `
        <div class="badge-tag badge-indigo" style="margin-bottom:8px;">
          ${isCloze ? '📖 เติมคำศัพท์ลงในช่องว่างของประโยคให้ตรงบริบท' : '📖 เลือกความหมายภาษาไทยที่ตรงกับคำศัพท์ในบริบทประโยคนี้'}
        </div>
        ${!isCloze ? `<div class="quiz-main-word" style="font-size:2.3rem;">${escapeHtml(item.word)}</div>` : ''}
        <div class="sentence-context-box">
          <div class="sentence-en-text">"${escapeHtml(displayedEn)}"</div>
          <div class="sentence-th-box">
            🇹🇭 คำแปลทั้งประโยค: ${escapeHtml(displayedTh)}
          </div>
        </div>
        ${isCloze ? `<div style="margin-top:8px;font-size:0.95rem;font-weight:800;color:var(--brand-primary);">💡 ความหมายที่ต้องการเติม: "${escapeHtml((item.meanings || []).join(', '))}"</div>` : ''}
      `;
    } else if (effMode === 'reverse') {
      promptBodyHtml = `
        <div class="badge-tag badge-indigo" style="margin-bottom:8px;">🔄 ทายคำศัพท์ภาษาอังกฤษจากความหมายภาษาไทย</div>
        <div class="quiz-main-word" style="color:var(--brand-primary);font-size:2.4rem;">
          "${escapeHtml((item.meanings || []).join(', '))}"
        </div>
        ${item.exampleTh ? `<div style="font-size:0.98rem;font-weight:700;color:var(--text-secondary);margin-top:6px;">🇹🇭 บริบทประโยค: "${escapeHtml(maskThaiMeaningInSentence(item.exampleTh, item.meanings))}"</div>` : ''}
      `;
    } else if (effMode === 'listening' || effMode === 'spelling') {
      const showWordNow = state.choiceLocked || state.revealWordInListening || Boolean(state.typingFeedback);
      promptBodyHtml = `
        <div class="badge-tag badge-indigo" style="margin-bottom:8px;">
          ${effMode === 'spelling' ? '✍️ ฟังเสียงอ่าน + ดูคำแปล แล้วพิมพ์สะกดคำศัพท์ภาษาอังกฤษ' : '🎧 ฟังเสียงอ่านภาษาอังกฤษ แล้วเลือกคำแปลที่ถูกต้อง'}
        </div>
        <div class="quiz-main-word" style="font-size:2.4rem;">
          ${showWordNow ? escapeHtml(item.word) : '🔊 ฟังเสียงคำศัพท์'}
        </div>
        ${effMode === 'spelling' ? `<div style="font-size:1.3rem;font-weight:900;color:var(--success-color);margin-bottom:8px;">ความหมาย: ${escapeHtml((item.meanings || []).join(', '))}</div>` : ''}
        ${!showWordNow && effMode === 'listening' ? `<button type="button" class="btn-secondary" id="btnPeekWord" style="padding:5px 12px;font-size:0.8rem;">👁️ แอบดูตัวสะกดภาษาอังกฤษ</button>` : ''}
      `;
    } else {
      // choices4, typing, speaking
      promptBodyHtml = `
        <div class="quiz-main-word">${escapeHtml(item.word)}</div>
        ${item.collocation ? `<div style="font-size:0.86rem;font-weight:800;color:var(--brand-primary);margin-bottom:6px;">🧩 คำที่ใช้คู่กัน: ${escapeHtml(item.collocation)}</div>` : ''}
      `;
    }

    // Audio Buttons Row + Sentence Preview
    const showExampleBox = effMode !== 'sentence' && effMode !== 'reverse' && effMode !== 'listening' && effMode !== 'spelling';
    const exampleHtml = (showExampleBox && item.exampleEn) ? `
      <div class="sentence-context-box" style="margin-top:10px;padding:12px 16px;">
        <div style="font-size:1.02rem;font-weight:800;color:#1E1B4B;">"💬 ${escapeHtml(item.exampleEn)}"</div>
        ${(state.choiceLocked || state.typingFeedback || effMode === 'speaking') ? `<div class="sentence-th-box" style="font-size:0.94rem;">🇹🇭 แปลทั้งประโยค: ${escapeHtml(item.exampleTh || '')}</div>` : ''}
      </div>
    ` : '';

    // Answer Interaction Area (4 Choices vs Typing vs Speaking)
    let interactionHtml = '';
    const isTypingMode = effMode === 'typing' || effMode === 'spelling';

    if (effMode === 'speaking') {
      interactionHtml = `
        <div style="text-align:center;padding:18px;background:#F8FAFC;border:1.5px solid var(--border-color);border-radius:18px;">
          <div style="font-size:1.25rem;font-weight:900;color:var(--success-color);margin-bottom:8px;">
            ความหมาย: ${escapeHtml((item.meanings || []).join(', '))}
          </div>
          <div style="margin-bottom:14px;font-size:0.95rem;color:var(--text-secondary);">
            กดปุ่มไมโครโฟนด้านล่าง แล้วออกเสียงคำว่า <b>"${escapeHtml(item.word)}"</b> หรืออ่านทั้งประโยค
          </div>
          <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
            <button type="button" class="btn-primary" id="btnStartMicWord">🎙️ กดพูดคำศัพท์ "${escapeHtml(item.word)}"</button>
            <button type="button" class="btn-secondary" id="btnStartMicSentence">🗣️ กดพูดทั้งประโยค</button>
            <button type="button" class="btn-secondary" id="btnNextFromSpeaking">ไปข้อถัดไป →</button>
          </div>
          ${state.speakingStatus ? `<div style="margin-top:14px;font-weight:800;color:var(--brand-primary);">${escapeHtml(state.speakingStatus)}</div>` : ''}
        </div>
      `;
    } else if (isTypingMode) {
      const isSpelling = effMode === 'spelling';
      if (state.typingFeedback) {
        const fb = state.typingFeedback;
        interactionHtml = `
          <div class="feedback-banner ${fb.isCorrect ? 'correct' : 'wrong'}">
            <div>
              <div style="font-size:1.15rem;font-weight:900;color:${fb.isCorrect ? '#065F46' : '#9F1239'};">
                ${fb.isCorrect
                  ? (fb.matchType === 'exact' ? '✅ ถูกต้องแม่นยำ!' : '✨ ถูกต้อง! (ตรงความหมายบริบท / คำพ้องเสียง / คำใกล้เคียง)')
                  : `❌ ยังไม่ตรง — คำตอบที่ถูกต้องคือ "${escapeHtml(isSpelling ? item.word : (item.meanings || []).join(', '))}"`}
              </div>
              <div style="font-size:0.92rem;font-weight:700;color:var(--text-secondary);margin-top:4px;">
                📖 "${escapeHtml(item.exampleEn || '')}" — 🇹🇭 <b>${escapeHtml(item.exampleTh || '')}</b>
              </div>
            </div>
            <button type="button" class="btn-primary" id="btnNextAfterTyping">ไปข้อถัดไป →</button>
          </div>
        `;
      } else {
        interactionHtml = `
          <form id="quizTypingForm" style="background:#FFFFFF;border:1.5px solid var(--border-color);border-radius:18px;padding:18px;">
            <label class="form-label">
              ${isSpelling
                ? '✍️ พิมพ์ตัวสะกดคำศัพท์ภาษาอังกฤษ แล้วกดปุ่มตรวจคำตอบ (หรือกด Enter):'
                : '⌨️ พิมพ์คำแปลภาษาไทย (รองรับคำพ้องเสียง เช่น ปราดจาก/ปราศจาก, อนุญาติ/อนุญาต และหลายบริบท):'}
            </label>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <input type="text" id="quizTypingInput" class="form-input" style="flex:1;font-size:1.2rem;" placeholder="${isSpelling ? 'พิมพ์ภาษาอังกฤษ...' : 'พิมพ์คำแปลภาษาไทย...'}" autocomplete="off" required />
              <button type="submit" class="btn-primary">✔️ ตรวจคำตอบ</button>
            </div>
          </form>
        `;
      }
    } else {
      // 4 Choices Grid (Immediately locks on first answer! Never forces clicking all 4 choices!)
      const choicesHtml = state.currentChoices.map((ch, idx) => {
        let cls = 'choice-card-btn';
        if (state.choiceLocked) {
          if (ch === state.correctChoice) cls += ' correct';
          else if (ch === state.selectedChoice) cls += ' wrong';
        }
        return `
          <button type="button" class="${cls}" data-choice-idx="${idx}" ${state.choiceLocked ? 'disabled' : ''}>
            <span class="choice-keycap">${idx + 1}</span>
            <span style="flex:1;">${escapeHtml(ch)}</span>
          </button>
        `;
      }).join('');

      let wrongFeedbackHtml = '';
      if (state.choiceLocked && state.selectedChoice !== state.correctChoice) {
        wrongFeedbackHtml = `
          <div class="feedback-banner wrong">
            <div>
              <div style="font-size:1.1rem;font-weight:900;color:#9F1239;">
                💡 เฉลย: ${escapeHtml(item.word)} = "${escapeHtml((item.meanings || []).join(', '))}"
              </div>
              <div style="font-size:0.92rem;font-weight:700;color:var(--text-secondary);margin-top:4px;">
                📖 "${escapeHtml(item.exampleEn || '')}"<br/>
                🇹🇭 <b>แปลทั้งประโยค: ${escapeHtml(item.exampleTh || '')}</b>
              </div>
            </div>
            <button type="button" class="btn-primary" id="btnNextAfterWrongChoice">ไปข้อถัดไป →</button>
          </div>
        `;
      } else if (state.choiceLocked && state.selectedChoice === state.correctChoice) {
        wrongFeedbackHtml = `
          <div class="feedback-banner correct">
            <div style="font-size:1.05rem;font-weight:900;color:#065F46;">
              ✅ ถูกต้อง! (${escapeHtml(item.word)} = ${escapeHtml((item.meanings || []).join(', '))}) — กำลังไปข้อถัดไป...
            </div>
          </div>
        `;
      }

      interactionHtml = `
        <div class="choices-grid">${choicesHtml}</div>
        ${wrongFeedbackHtml}
      `;
    }

    arena.innerHTML = `
      <div class="quiz-hero-box">
        <div class="quiz-meta-row">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span>${srsDots}</span>
            <span class="badge-tag badge-indigo">SRS ระดับ ${item.srsStage || 0}/4</span>
            <span class="badge-tag" style="background:#F1F5F9;color:#334155;">📁 ${escapeHtml(item.category || 'ทั่วไป')}</span>
            ${(item.wrongCount || 0) >= 2 ? `<span class="badge-tag badge-rose">⚠️ เคยผิด ${item.wrongCount} ครั้ง</span>` : ''}
          </div>
          <button type="button" class="btn-secondary" id="btnInstantMaster" style="padding:5px 12px;font-size:0.78rem;color:var(--success-color);border-color:var(--success-border);background:var(--success-bg);">
            🏆 จำได้แม่นแล้ว (ย้ายเข้าคลังทันที)
          </button>
        </div>

        ${promptBodyHtml}

        <div class="audio-action-row">
          <button type="button" class="btn-audio-pill" id="btnSpeakWordNow">🔊 ฟังคำศัพท์</button>
          <button type="button" class="btn-audio-pill" id="btnSpeakSlowNow">🐢 ฟังช้าๆ ชัดๆ (0.55x)</button>
          <button type="button" class="btn-audio-pill" id="btnSpellOutNow">🔤 สะกดทีละตัว (A-B-C)</button>
          ${item.exampleEn ? `<button type="button" class="btn-audio-pill" id="btnSpeakSentenceNow">💬 ฟังทั้งประโยค</button>` : ''}
        </div>

        ${exampleHtml}
      </div>

      ${interactionHtml}
    `;

    // Bind events inside Quiz Arena
    const btnSpeakWord = document.getElementById('btnSpeakWordNow');
    if (btnSpeakWord) btnSpeakWord.addEventListener('click', () => speakText(item.word, 'en-US'));

    const btnSpeakSlow = document.getElementById('btnSpeakSlowNow');
    if (btnSpeakSlow) btnSpeakSlow.addEventListener('click', () => speakText(item.word, 'en-US', 0.55));

    const btnSpell = document.getElementById('btnSpellOutNow');
    if (btnSpell) btnSpell.addEventListener('click', () => spellOutWord(item.word));

    const btnSpeakSent = document.getElementById('btnSpeakSentenceNow');
    if (btnSpeakSent) btnSpeakSent.addEventListener('click', () => speakText(item.exampleEn, 'en-US'));

    const btnPeek = document.getElementById('btnPeekWord');
    if (btnPeek) {
      btnPeek.addEventListener('click', () => {
        state.revealWordInListening = true;
        renderQuizSection();
      });
    }

    const btnInstant = document.getElementById('btnInstantMaster');
    if (btnInstant) {
      btnInstant.addEventListener('click', () => {
        item.status = 'mastered';
        item.srsStage = 4;
        item.updatedAt = Date.now();
        item.device = deviceProfile.name;
        saveLocalStore();
        syncWithWifiServer(false);
        showToast(`ย้าย "${item.word}" เข้าคลังจำแม่นเรียบร้อย!`, '🏆');
        nextQuestion();
        renderNavAndKpis();
      });
    }

    // Bind 4-choices buttons
    arena.querySelectorAll('[data-choice-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.choiceLocked) return;
        const idx = Number(btn.dataset.choiceIdx);
        const chosen = state.currentChoices[idx];
        state.choiceLocked = true;
        state.selectedChoice = chosen;

        const isCorrect = chosen === state.correctChoice;
        if (isCorrect) {
          state.combo += 1;
        } else {
          state.combo = 0;
        }
        recordWordReview(item, isCorrect);
        renderNavAndKpis();
        renderQuizSection();

        if (isCorrect) {
          setTimeout(() => {
            nextQuestion();
          }, 680);
        }
      });
    });

    const btnNextWrong = document.getElementById('btnNextAfterWrongChoice');
    if (btnNextWrong) btnNextWrong.addEventListener('click', () => nextQuestion());

    const typingForm = document.getElementById('quizTypingForm');
    if (typingForm) {
      const inputEl = document.getElementById('quizTypingInput');
      if (inputEl) setTimeout(() => inputEl.focus(), 40);
      typingForm.addEventListener('submit', e => {
        e.preventDefault();
        const val = inputEl.value.trim();
        if (!val) return;
        const isSpelling = effMode === 'spelling';
        const res = evaluateAnswer(val, isSpelling ? [item.word] : (item.meanings || []), isSpelling);
        state.typingFeedback = res;
        if (res.isCorrect) state.combo += 1;
        else state.combo = 0;
        recordWordReview(item, res.isCorrect);
        renderNavAndKpis();
        renderQuizSection();
      });
    }

    const btnNextTyping = document.getElementById('btnNextAfterTyping');
    if (btnNextTyping) btnNextTyping.addEventListener('click', () => nextQuestion());

    const btnMicWord = document.getElementById('btnStartMicWord');
    if (btnMicWord) btnMicWord.addEventListener('click', () => startSpeakingPractice(item.word));

    const btnMicSent = document.getElementById('btnStartMicSentence');
    if (btnMicSent) btnMicSent.addEventListener('click', () => startSpeakingPractice(item.exampleEn || item.word));

    const btnNextSpeak = document.getElementById('btnNextFromSpeaking');
    if (btnNextSpeak) btnNextSpeak.addEventListener('click', () => nextQuestion());
  }

  function renderAddVocabSection() {
    const cats = getAvailableCategoryNames();
    const curVal = document.getElementById('addCategoryInput').value || 'ทั่วไป';
    const container = document.getElementById('addCategoryChips');
    if (!container) return;
    container.innerHTML = cats.map(c => `
      <button type="button" class="cat-chip-btn ${c === curVal ? 'active' : ''}" data-pick-add-cat="${escapeHtml(c)}">
        📁 ${escapeHtml(c)}
      </button>
    `).join('');
  }

  function renderVocabListSection(isMastered) {
    const listContainer = document.getElementById(isMastered ? 'masteredListContainer' : 'learningListContainer');
    const catBar = document.getElementById(isMastered ? 'masteredCategoryBar' : 'learningCategoryBar');
    if (!listContainer || !catBar) return;

    const baseItems = isMastered ? masteredWords() : learningWords();
    const activeCat = isMastered ? state.masteredCatFilter : state.learningCatFilter;
    const query = (isMastered ? state.searchMastered : state.searchLearning).trim().toLowerCase();

    const cats = ['ทุกหมวดหมู่', ...getAvailableCategoryNames()];
    catBar.innerHTML = cats.map(c => {
      const cnt = c === 'ทุกหมวดหมู่'
        ? baseItems.length
        : baseItems.filter(w => (w.category || 'ทั่วไป') === c).length;
      return `<button type="button" class="cat-chip-btn ${c === activeCat ? 'active' : ''}" data-list-cat="${escapeHtml(c)}" data-is-mastered="${isMastered ? '1' : '0'}">
        📁 ${escapeHtml(c)} (${cnt})
      </button>`;
    }).join('');

    let filtered = activeCat === 'ทุกหมวดหมู่'
      ? baseItems
      : baseItems.filter(w => (w.category || 'ทั่วไป') === activeCat);

    if (query) {
      filtered = filtered.filter(w =>
        w.word.toLowerCase().includes(query) ||
        (w.meanings || []).join(', ').toLowerCase().includes(query) ||
        (w.exampleEn || '').toLowerCase().includes(query) ||
        (w.category || '').toLowerCase().includes(query)
      );
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center;padding:40px 20px;color:var(--text-secondary);font-weight:700;">
          ยังไม่มีคำศัพท์ในหมวดนี้
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(item => `
      <div class="vocab-item-card">
        <div style="flex:1;min-width:250px;">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <span class="vocab-word-title">${escapeHtml(item.word)}</span>
            <button type="button" class="btn-audio-pill" data-speak-word="${escapeHtml(item.word)}" style="padding:4px 10px;font-size:0.78rem;">🔊 ฟังเสียง</button>
            <span class="badge-tag badge-indigo">📁 ${escapeHtml(item.category || 'ทั่วไป')}</span>
            <span class="badge-tag ${item.status === 'mastered' ? 'badge-emerald' : 'badge-amber'}">
              ${item.status === 'mastered' ? '🏆 จำแม่นแล้ว' : `SRS ระดับ ${item.srsStage || 0}/4`}
            </span>
          </div>
          <div class="vocab-meaning-text">คำแปล: ${escapeHtml((item.meanings || []).join(', '))}</div>
          ${item.exampleEn ? `<div style="font-size:0.94rem;font-weight:700;color:var(--text-main);margin-top:4px;">💬 "${escapeHtml(item.exampleEn)}"</div>` : ''}
          ${item.exampleTh ? `<div style="font-size:0.88rem;font-weight:700;color:var(--brand-primary);margin-top:2px;">🇹🇭 แปลทั้งประโยค: ${escapeHtml(item.exampleTh)}</div>` : ''}
          ${item.collocation ? `<div style="font-size:0.8rem;color:var(--text-secondary);margin-top:3px;">🧩 ${escapeHtml(item.collocation)}</div>` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          ${isMastered
            ? `<button type="button" class="btn-secondary" data-relearn-id="${escapeHtml(item.id)}" style="font-size:0.82rem;">🔄 นำกลับมาฝึกใหม่</button>`
            : `<button type="button" class="btn-secondary" data-promote-id="${escapeHtml(item.id)}" style="font-size:0.82rem;color:var(--success-color);">🏆 ย้ายเข้าคลังจำแม่น</button>`
          }
          <button type="button" class="btn-secondary" data-edit-id="${escapeHtml(item.id)}" style="font-size:0.82rem;">✏️ แก้ไข</button>
          <button type="button" class="btn-secondary" data-delete-id="${escapeHtml(item.id)}" style="font-size:0.82rem;color:var(--danger-color);">🗑️ ลบ</button>
        </div>
      </div>
    `).join('');
  }

  function renderStatsSection() {
    const container = document.getElementById('statsDashboardContainer');
    if (!container) return;

    const all = activeWords();
    const learn = learningWords();
    const mast = masteredWords();
    const leeches = leechWords();

    const cats = getAvailableCategoryNames();
    const catRows = cats.map(c => {
      const totalC = all.filter(w => (w.category || 'ทั่วไป') === c).length;
      const mastC = mast.filter(w => (w.category || 'ทั่วไป') === c).length;
      const pct = totalC > 0 ? Math.round((mastC / totalC) * 100) : 0;
      return `
        <div style="margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;font-size:0.9rem;font-weight:800;margin-bottom:4px;">
            <span>📁 ${escapeHtml(c)}</span>
            <span>จำแม่น ${mastC} / ${totalC} คำ (${pct}%)</span>
          </div>
          <div style="height:10px;background:#E2E8F0;border-radius:999px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#4F46E5,#10B981);"></div>
          </div>
        </div>
      `;
    }).join('');

    const leechHtml = leeches.length === 0
      ? `<div style="color:var(--success-color);font-weight:800;">🎉 ยอดเยี่ยม! ตอนนี้ไม่มีคำศัพท์ที่เป็นจุดอ่อนเลย</div>`
      : leeches.slice(0, 12).map(w => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border:1px solid var(--danger-border);background:var(--danger-bg);border-radius:12px;margin-bottom:8px;">
            <div>
              <span style="font-weight:900;font-size:1.05rem;color:#9F1239;">${escapeHtml(w.word)}</span>
              <span style="font-weight:800;color:#065F46;margin-left:8px;">= ${escapeHtml((w.meanings || []).join(', '))}</span>
              <div style="font-size:0.8rem;color:var(--text-secondary);">🇹🇭 ${escapeHtml(w.exampleTh || '')}</div>
            </div>
            <button type="button" class="btn-audio-pill" data-speak-word="${escapeHtml(w.word)}" style="padding:5px 10px;font-size:0.78rem;">🔊 ฟัง</button>
          </div>
        `).join('');

    container.innerHTML = `
      <div class="form-grid" style="margin-bottom:20px;">
        <div style="background:#EEF2FF;border:1.5px solid #C7D2FE;border-radius:18px;padding:18px;">
          <div style="font-size:0.85rem;font-weight:800;color:#4F46E5;">คลังคำศัพท์ทั้งหมด</div>
          <div style="font-size:2.2rem;font-weight:900;color:#1E1B4B;">${all.length} คำ</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);">ซิงค์ร่วมกันระหว่าง MacBook ⇄ iPad</div>
        </div>
        <div style="background:#ECFDF5;border:1.5px solid #A7F3D0;border-radius:18px;padding:18px;">
          <div style="font-size:0.85rem;font-weight:800;color:#059669;">จำแม่นขึ้นใจแล้ว (Mastered)</div>
          <div style="font-size:2.2rem;font-weight:900;color:#065F46;">${mast.length} คำ</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);">คิดเป็น ${all.length ? Math.round((mast.length / all.length) * 100) : 0}% ของคลังทั้งหมด</div>
        </div>
        <div style="background:#FFF1F2;border:1.5px solid #FECDD3;border-radius:18px;padding:18px;">
          <div style="font-size:0.85rem;font-weight:800;color:#E11D48;">กำลังฝึก &amp; คำที่ต้องเน้นย้ำ</div>
          <div style="font-size:2.2rem;font-weight:900;color:#9F1239;">${learn.length} คำ</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);">จุดอ่อนที่ควรทบทวนซ้ำ ${leeches.length} คำ</div>
        </div>
      </div>

      <div class="form-grid">
        <div style="background:#FFFFFF;border:1.5px solid var(--border-color);border-radius:18px;padding:18px;">
          <h4 style="font-size:1rem;font-weight:900;margin-bottom:12px;">📈 ความแม่นยำแยกตามหมวดหมู่</h4>
          ${catRows}
        </div>
        <div style="background:#FFFFFF;border:1.5px solid var(--border-color);border-radius:18px;padding:18px;">
          <h4 style="font-size:1rem;font-weight:900;margin-bottom:12px;">⚠️ คำศัพท์ที่ตอบผิดบ่อย / ควรเน้นย้ำ (${leeches.length} คำ)</h4>
          ${leechHtml}
        </div>
      </div>
    `;
  }

  function renderSyncStatusUI() {
    const dot = document.getElementById('syncDot');
    const txt = document.getElementById('syncStatusText');
    const peerBadge = document.getElementById('syncPeerCountBadge');

    if (dot && txt) {
      if (state.wifiConnected) {
        dot.className = 'sync-dot';
        txt.textContent = `ซิงค์ Wi-Fi อัตโนมัติแล้ว • ล่าสุด: ${state.lastActiveDevice}`;
      } else {
        dot.className = 'sync-dot offline';
        txt.textContent = `โหมดออฟไลน์ในเครื่อง (${activeWords().length} คำ) • รอเจอ Wi-Fi เดียวกัน`;
      }
    }
    if (peerBadge) {
      peerBadge.textContent = `(${activeWords().length} คำ)`;
    }

    const qrImg = document.getElementById('syncQrImg');
    if (qrImg) {
      const targetUrl = window.location.protocol.startsWith('http') ? window.location.href : CLOUD_APP_URL;
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(targetUrl)}`;
    }

    const roomInput = document.getElementById('syncRoomCodeInput');
    if (roomInput && document.activeElement !== roomInput) {
      roomInput.value = (state.store.settings && state.store.settings.syncRoomCode) || 'VR-8899';
    }
  }

  function renderAll(rebuildQueue = false) {
    if (rebuildQueue || state.quizQueue.length === 0) {
      buildQuizQueue(rebuildQueue);
    }
    renderNavAndKpis();
    renderSyncStatusUI();
    renderQuizSection();
    renderAddVocabSection();
    renderVocabListSection(false);
    renderVocabListSection(true);
    renderStatsSection();
  }

  // ============================================================================
  // ZERO-IP AUTO-DISCOVERY & SAME-WI-FI P2P AUTO-SYNC ENGINE (NO ICLOUD NEEDED)
  // ============================================================================
  let currentWifiGatewayIp = null;
  let currentP2pTopic = null;
  let p2pWifiEventSource = null;

  async function detectWifiGatewayIp() {
    try {
      const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace', { cache: 'no-store' });
      const text = await res.text();
      const match = text.match(/^ip=(.+)$/m);
      if (match && match[1]) return match[1].trim();
    } catch (e) {}
    return null;
  }

  function getSameWifiP2pTopic(wifiIp) {
    if (!wifiIp) return null;
    const roomCode = (state.store.settings && state.store.settings.syncRoomCode) || 'VR-8899';
    const cleanRoom = roomCode.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanIp = wifiIp.replace(/[^a-zA-Z0-9]/g, '_');
    return `vocabrecall_wifi_v10_${cleanRoom}_${cleanIp}`;
  }

  function mergeIncomingStore(incomingStore) {
    if (!incomingStore || !Array.isArray(incomingStore.words)) return false;
    let updatedCount = 0;

    const map = new Map();
    for (const w of state.store.words || []) {
      if (w && w.word) map.set(w.word.trim().toLowerCase(), w);
    }

    for (const remoteW of incomingStore.words) {
      if (!remoteW || !remoteW.word) continue;
      const k = remoteW.word.trim().toLowerCase();
      const localW = map.get(k);
      if (!localW) {
        map.set(k, remoteW);
        updatedCount += 1;
      } else {
        const rTime = Number(remoteW.updatedAt || 0);
        const lTime = Number(localW.updatedAt || 0);
        if (rTime > lTime) {
          map.set(k, remoteW);
          updatedCount += 1;
        }
      }
    }

    if (updatedCount > 0) {
      state.store.words = Array.from(map.values());
      saveLocalStore(true);
    }
    return updatedCount > 0;
  }

  async function pushToSameWifiP2pChannel(msgType = 'WIFI_P2P_SYNC') {
    const wifiIp = currentWifiGatewayIp || (await detectWifiGatewayIp());
    if (!wifiIp) return false;
    currentWifiGatewayIp = wifiIp;
    const topic = getSameWifiP2pTopic(wifiIp);
    if (!topic) return false;

    try {
      await fetch(`https://ntfy.sh/${topic}`, {
        method: 'POST',
        body: JSON.stringify({
          type: msgType,
          originPeerId: peerId,
          deviceName: deviceProfile.name,
          deviceType: deviceProfile.type,
          wifiIp,
          timestamp: Date.now(),
          store: state.store
        })
      });
      state.wifiConnected = true;
      state.lastSyncedAt = Date.now();
      renderSyncStatusUI();
      return true;
    } catch (e) {
      return false;
    }
  }

  async function initSameWifiP2pChannel() {
    const wifiIp = await detectWifiGatewayIp();
    if (!wifiIp) return;
    currentWifiGatewayIp = wifiIp;
    const topic = getSameWifiP2pTopic(wifiIp);
    if (!topic) return;

    try {
      const pollRes = await fetch(`https://ntfy.sh/${topic}/json?poll=1&since=12h`);
      if (pollRes.ok) {
        const text = await pollRes.text();
        const lines = text.trim().split('\n').filter(Boolean);
        let anyMerged = false;
        for (const line of lines) {
          try {
            const outer = JSON.parse(line);
            if (outer && outer.event === 'message' && outer.message) {
              const payload = JSON.parse(outer.message);
              if (payload && payload.store) {
                if (mergeIncomingStore(payload.store)) {
                  anyMerged = true;
                  state.lastActiveDevice = payload.deviceName || 'อุปกรณ์ในวง Wi-Fi เดียวกัน';
                }
              }
            }
          } catch (e) {}
        }
        state.wifiConnected = true;
        if (anyMerged) renderAll(false);
        else renderSyncStatusUI();
      }
    } catch (e) {}

    if (p2pWifiEventSource && currentP2pTopic === topic) return;
    if (p2pWifiEventSource) {
      try { p2pWifiEventSource.close(); } catch (e) {}
    }
    currentP2pTopic = topic;

    try {
      p2pWifiEventSource = new EventSource(`https://ntfy.sh/${topic}/sse`);
      p2pWifiEventSource.onmessage = event => {
        try {
          const outer = JSON.parse(event.data);
          if (!outer || !outer.message) return;
          const payload = JSON.parse(outer.message);
          if (!payload || payload.originPeerId === peerId) return;
          if (payload.store) {
            const changed = mergeIncomingStore(payload.store);
            state.wifiConnected = true;
            state.lastActiveDevice = payload.deviceName || 'อุปกรณ์ในวง Wi-Fi เดียวกัน';
            if (changed) {
              renderAll(false);
              showToast(`ซิงค์ข้อมูลล่าสุดจาก ${state.lastActiveDevice} (Wi-Fi เดียวกัน) อัตโนมัติแล้ว!`, '📲');
            } else {
              renderSyncStatusUI();
            }
          }
          if (payload.type === 'WIFI_PEER_HELLO') {
            pushToSameWifiP2pChannel('WIFI_P2P_SYNC');
          }
        } catch (e) {}
      };
      pushToSameWifiP2pChannel('WIFI_PEER_HELLO');
    } catch (e) {}
  }

  async function syncWithWifiServer(showFeedback = false) {
    pushToSameWifiP2pChannel('WIFI_P2P_SYNC').catch(() => {});

    if (window.location.protocol === 'http:') {
      try {
        const res = await fetch('/api/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            peerId,
            deviceName: deviceProfile.name,
            deviceType: deviceProfile.type,
            roomCode: state.store.settings.syncRoomCode,
            store: state.store
          })
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.store) {
            mergeIncomingStore(data.store);
            state.wifiConnected = true;
            renderSyncStatusUI();
          }
        }
      } catch (e) {}
    }

    if (showFeedback) {
      showToast('ซิงค์คำศัพท์ล่าสุดผ่าน Wi-Fi เรียบร้อยแล้ว!', '🔄');
    }
  }

  function showToast(msg, icon = '✅') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(msg)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.25s';
      setTimeout(() => toast.remove(), 250);
    }, 2600);
  }

  function switchView(viewName) {
    if (viewName !== 'quiz' && state.radioLoopActive) {
      stopRadioLoop();
    }
    state.activeView = viewName;
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === `view-${viewName}`);
    });
    document.querySelectorAll('[data-nav-view]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.navView === viewName);
    });
    renderAll(false);
  }

  // ============================================================================
  // SMART AUTO-TRANSLATE & SENTENCE BUILDER FOR NEW WORDS
  // ============================================================================
  async function autoFillWordDetails(rawWord) {
    const w = (rawWord || '').trim();
    if (!w) return;
    const lower = w.toLowerCase();

    // 1. Check built-in curated dictionary or existing store first
    const existing = activeWords().find(item => item.word.toLowerCase() === lower);
    if (existing) {
      document.getElementById('addMeaningsInput').value = (existing.meanings || []).join(', ');
      document.getElementById('addCategoryInput').value = existing.category || 'ทั่วไป';
      document.getElementById('addExampleEnInput').value = existing.exampleEn || '';
      document.getElementById('addExampleThInput').value = existing.exampleTh || '';
      document.getElementById('addCollocationInput').value = existing.collocation || '';
      renderAddVocabSection();
      showToast(`ดึงข้อมูลคำว่า "${w}" เรียบร้อย!`, '✨');
      return;
    }

    if (BUILTIN_DICT[lower]) {
      const d = BUILTIN_DICT[lower];
      document.getElementById('addMeaningsInput').value = d.meanings.join(', ');
      document.getElementById('addCategoryInput').value = d.cat;
      document.getElementById('addExampleEnInput').value = d.en;
      document.getElementById('addExampleThInput').value = d.th;
      document.getElementById('addCollocationInput').value = d.col;
      renderAddVocabSection();
      showToast(`ดึงคำแปลและประโยคของ "${w}" เรียบร้อย!`, '✨');
      return;
    }

    showToast(`กำลังค้นหาคำแปลและแต่งประโยคสำหรับ "${w}"...`, '🔍');
    let enSentence = `Understanding how to use "${w}" in context makes communication clearer.`;

    try {
      const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(lower)}`);
      if (dictRes.ok) {
        const dictData = await dictRes.json();
        for (const entry of dictData || []) {
          for (const m of entry.meanings || []) {
            for (const def of m.definitions || []) {
              if (def.example && def.example.length > 12) {
                enSentence = def.example;
                break;
              }
            }
          }
        }
      }
    } catch (e) {}

    document.getElementById('addExampleEnInput').value = enSentence;

    try {
      const trWordRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(w)}&langpair=en|th`);
      if (trWordRes.ok) {
        const trWordData = await trWordRes.json();
        const meaningsSet = new Set();
        if (trWordData.responseData && trWordData.responseData.translatedText) {
          meaningsSet.add(trWordData.responseData.translatedText.trim());
        }
        for (const match of (trWordData.matches || []).slice(0, 4)) {
          if (match.translation && /[\u0E00-\u0E7F]/.test(match.translation)) {
            meaningsSet.add(match.translation.trim());
          }
        }
        const mArr = Array.from(meaningsSet).slice(0, 3);
        if (mArr.length > 0 && !document.getElementById('addMeaningsInput').value) {
          document.getElementById('addMeaningsInput').value = mArr.join(', ');
        }
      }

      const trSentRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(enSentence)}&langpair=en|th`);
      if (trSentRes.ok) {
        const trSentData = await trSentRes.json();
        if (trSentData.responseData && trSentData.responseData.translatedText) {
          document.getElementById('addExampleThInput').value = trSentData.responseData.translatedText.trim();
        }
      }
      showToast(`ดึงคำแปลและแปลทั้งประโยคของ "${w}" เรียบร้อยแล้ว!`, '✨');
    } catch (e) {
      showToast('เติมประโยคตัวอย่างให้แล้ว สามารถพิมพ์คำแปลไทยเพิ่มเติมได้เลยครับ', '💡');
    }
  }

  // ============================================================================
  // EVENT BINDINGS & IPAD TOUCH BRIDGE
  // ============================================================================
  function initEvents() {
    // Synchronous iPadOS Touch Bridge
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTarget = null;
    let lastTouchTriggeredAt = 0;

    document.addEventListener('click', e => {
      if (e.isTrusted && Date.now() - lastTouchTriggeredAt < 400) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }, true);

    document.addEventListener('touchstart', e => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTarget = e.target.closest('button');
      } else {
        touchStartTarget = null;
      }
    }, { passive: true });

    document.addEventListener('touchend', e => {
      if (!touchStartTarget || !e.changedTouches || e.changedTouches.length !== 1) return;
      const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
      const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
      const targetBtn = touchStartTarget;
      touchStartTarget = null;
      if (dx < 16 && dy < 16 && !targetBtn.disabled) {
        lastTouchTriggeredAt = Date.now();
        targetBtn.click();
      }
    }, { passive: true });

    // Navigation Tabs
    document.querySelectorAll('[data-nav-view]').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.navView));
    });

    document.getElementById('btnTopSyncPill').addEventListener('click', () => switchView('sync'));
    document.getElementById('kpiDueBtn').addEventListener('click', () => {
      state.store.settings.quizPool = 'due_or_learning';
      document.getElementById('quizPoolSelect').value = 'due_or_learning';
      switchView('quiz');
      buildQuizQueue(true);
      renderQuizSection();
    });
    document.getElementById('kpiLearningBtn').addEventListener('click', () => switchView('learning'));
    document.getElementById('kpiMasteredBtn').addEventListener('click', () => switchView('mastered'));

    document.getElementById('btnForceReloadApp').addEventListener('click', () => {
      window.location.replace(window.location.pathname + '?v=' + Date.now());
    });

    // Quiz Mode Bar
    document.getElementById('quizModeBar').addEventListener('click', e => {
      const btn = e.target.closest('[data-quiz-mode]');
      if (!btn) return;
      if (state.radioLoopActive) stopRadioLoop();
      state.store.settings.quizMode = btn.dataset.quizMode;
      saveLocalStore();
      prepareCurrentQuestion();
      renderQuizSection();
    });

    // Quiz Category Bar
    document.getElementById('quizCategoryBar').addEventListener('click', e => {
      const btn = e.target.closest('[data-quiz-cat]');
      if (!btn) return;
      state.store.settings.categoryFilter = btn.dataset.quizCat;
      saveLocalStore();
      buildQuizQueue(true);
      renderQuizSection();
    });

    document.getElementById('quizPoolSelect').addEventListener('change', e => {
      state.store.settings.quizPool = e.target.value;
      saveLocalStore();
      buildQuizQueue(true);
      renderQuizSection();
    });

    document.getElementById('btnShuffleQuiz').addEventListener('click', () => {
      buildQuizQueue(true);
      renderQuizSection();
      showToast('สุ่มลำดับคำศัพท์รอบใหม่เรียบร้อย!', '🔀');
    });

    // Voice & Speed Controls
    document.getElementById('voiceSelect').addEventListener('change', e => {
      state.store.settings.voiceURI = e.target.value;
      saveLocalStore();
      speakText('Voice updated', 'en-US');
    });

    document.getElementById('autoSpeakCheckbox').addEventListener('change', e => {
      state.store.settings.autoSpeak = e.target.checked;
      saveLocalStore();
    });

    document.querySelectorAll('[data-speed]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.store.settings.speechRate = Number(btn.dataset.speed);
        saveLocalStore();
        renderQuizSection();
        const curItem = state.quizQueue[state.currentIndex];
        if (curItem) speakText(curItem.word, 'en-US');
      });
    });

    // Keyboard shortcuts 1-4 for 4-choices
    window.addEventListener('keydown', e => {
      if (state.activeView !== 'quiz') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((document.activeElement && document.activeElement.tagName) || '')) return;
      if (['1', '2', '3', '4'].includes(e.key) && !state.choiceLocked) {
        const idx = Number(e.key) - 1;
        const btn = document.querySelector(`[data-choice-idx="${idx}"]`);
        if (btn) btn.click();
      } else if (e.key === 'Enter' && state.choiceLocked && state.selectedChoice !== state.correctChoice) {
        nextQuestion();
      }
    });

    // Add Word Form
    document.getElementById('btnAutoFillDict').addEventListener('click', () => {
      autoFillWordDetails(document.getElementById('addWordInput').value);
    });

    document.getElementById('btnSpeakPreviewAdd').addEventListener('click', () => {
      speakText(document.getElementById('addWordInput').value || 'Vocabulary', 'en-US');
    });

    document.getElementById('addCategoryChips').addEventListener('click', e => {
      const btn = e.target.closest('[data-pick-add-cat]');
      if (!btn) return;
      document.getElementById('addCategoryInput').value = btn.dataset.pickAddCat;
      renderAddVocabSection();
    });

    document.getElementById('addVocabForm').addEventListener('submit', e => {
      e.preventDefault();
      const word = document.getElementById('addWordInput').value.trim();
      const meaningsRaw = document.getElementById('addMeaningsInput').value.trim();
      const category = document.getElementById('addCategoryInput').value.trim() || 'ทั่วไป';
      const exampleEn = document.getElementById('addExampleEnInput').value.trim();
      const exampleTh = document.getElementById('addExampleThInput').value.trim();
      const collocation = document.getElementById('addCollocationInput').value.trim();
      const initStage = document.getElementById('addInitialStageSelect').value;

      if (!word || !meaningsRaw) return;
      const meanings = meaningsRaw.split(/[,/;]/).map(s => s.trim()).filter(Boolean);
      const now = Date.now();

      const newItem = {
        id: 'voc-' + word.toLowerCase().replace(/\s+/g, '-') + '-' + now.toString(36),
        word,
        meanings,
        category,
        exampleEn: exampleEn || `Let's use the word "${word}" in a clear English sentence.`,
        exampleTh: exampleTh || `ประโยคตัวอย่างการใช้คำว่า ${word} (${meanings.join(', ')})`,
        collocation,
        status: initStage === 'mastered' ? 'mastered' : 'learning',
        srsStage: initStage === 'mastered' ? 4 : 0,
        correctStreak: initStage === 'mastered' ? 5 : 0,
        totalAttempts: 0,
        wrongCount: 0,
        nextReviewAt: initStage === 'wait_1h' ? (now + 3600000) : now,
        updatedAt: now,
        device: deviceProfile.name,
        deleted: false
      };

      const existingIdx = state.store.words.findIndex(w => w.word.toLowerCase() === word.toLowerCase());
      if (existingIdx >= 0) {
        state.store.words[existingIdx] = { ...state.store.words[existingIdx], ...newItem };
      } else {
        state.store.words.unshift(newItem);
      }

      document.getElementById('addWordInput').value = '';
      document.getElementById('addMeaningsInput').value = '';
      document.getElementById('addExampleEnInput').value = '';
      document.getElementById('addExampleThInput').value = '';
      document.getElementById('addCollocationInput').value = '';

      saveLocalStore();
      syncWithWifiServer(false);
      renderAll(true);
      showToast(`บันทึกคำศัพท์ "${word}" เข้าคลังเรียบร้อยแล้ว!`, '💾');
    });

    // Learning & Mastered List Interactions
    const handleListClick = e => {
      const speakBtn = e.target.closest('[data-speak-word]');
      if (speakBtn) {
        speakText(speakBtn.dataset.speakWord, 'en-US');
        return;
      }

      const promoteBtn = e.target.closest('[data-promote-id]');
      if (promoteBtn) {
        const w = state.store.words.find(x => x.id === promoteBtn.dataset.promoteId);
        if (w) {
          w.status = 'mastered';
          w.srsStage = 4;
          w.updatedAt = Date.now();
          saveLocalStore();
          syncWithWifiServer(false);
          renderAll(true);
          showToast(`ย้าย "${w.word}" เข้าคลังจำแม่นแล้ว!`, '🏆');
        }
        return;
      }

      const relearnBtn = e.target.closest('[data-relearn-id]');
      if (relearnBtn) {
        const w = state.store.words.find(x => x.id === relearnBtn.dataset.relearnId);
        if (w) {
          w.status = 'learning';
          w.srsStage = 0;
          w.correctStreak = 0;
          w.nextReviewAt = Date.now();
          w.updatedAt = Date.now();
          saveLocalStore();
          syncWithWifiServer(false);
          renderAll(true);
          showToast(`นำ "${w.word}" กลับมาเข้าคิวฝึกจำใหม่แล้ว`, '🔄');
        }
        return;
      }

      const editBtn = e.target.closest('[data-edit-id]');
      if (editBtn) {
        const w = state.store.words.find(x => x.id === editBtn.dataset.editId);
        if (w) {
          document.getElementById('editIdInput').value = w.id;
          document.getElementById('editWordInput').value = w.word;
          document.getElementById('editMeaningsInput').value = (w.meanings || []).join(', ');
          document.getElementById('editCategoryInput').value = w.category || 'ทั่วไป';
          document.getElementById('editExampleEnInput').value = w.exampleEn || '';
          document.getElementById('editExampleThInput').value = w.exampleTh || '';
          document.getElementById('editCollocationInput').value = w.collocation || '';
          document.getElementById('editVocabModalBackdrop').classList.add('open');
        }
        return;
      }

      const delBtn = e.target.closest('[data-delete-id]');
      if (delBtn) {
        const w = state.store.words.find(x => x.id === delBtn.dataset.deleteId);
        if (w) {
          w.deleted = true;
          w.updatedAt = Date.now();
          saveLocalStore();
          syncWithWifiServer(false);
          renderAll(true);
          showToast(`ลบคำศัพท์ "${w.word}" แล้ว`, '🗑️');
        }
      }
    };

    document.getElementById('learningListContainer').addEventListener('click', handleListClick);
    document.getElementById('masteredListContainer').addEventListener('click', handleListClick);
    document.getElementById('statsDashboardContainer').addEventListener('click', handleListClick);

    const handleCatBarClick = e => {
      const btn = e.target.closest('[data-list-cat]');
      if (!btn) return;
      if (btn.dataset.isMastered === '1') {
        state.masteredCatFilter = btn.dataset.listCat;
        renderVocabListSection(true);
      } else {
        state.learningCatFilter = btn.dataset.listCat;
        renderVocabListSection(false);
      }
    };
    document.getElementById('learningCategoryBar').addEventListener('click', handleCatBarClick);
    document.getElementById('masteredCategoryBar').addEventListener('click', handleCatBarClick);

    document.getElementById('searchLearningInput').addEventListener('input', e => {
      state.searchLearning = e.target.value;
      renderVocabListSection(false);
    });
    document.getElementById('searchMasteredInput').addEventListener('input', e => {
      state.searchMastered = e.target.value;
      renderVocabListSection(true);
    });

    // Edit Modal
    document.getElementById('btnCloseEditModal').addEventListener('click', () => {
      document.getElementById('editVocabModalBackdrop').classList.remove('open');
    });

    document.getElementById('editVocabForm').addEventListener('submit', e => {
      e.preventDefault();
      const id = document.getElementById('editIdInput').value;
      const w = state.store.words.find(x => x.id === id);
      if (w) {
        w.word = document.getElementById('editWordInput').value.trim();
        w.meanings = document.getElementById('editMeaningsInput').value.split(/[,/;]/).map(s => s.trim()).filter(Boolean);
        w.category = document.getElementById('editCategoryInput').value.trim() || 'ทั่วไป';
        w.exampleEn = document.getElementById('editExampleEnInput').value.trim();
        w.exampleTh = document.getElementById('editExampleThInput').value.trim();
        w.collocation = document.getElementById('editCollocationInput').value.trim();
        w.updatedAt = Date.now();
        document.getElementById('editVocabModalBackdrop').classList.remove('open');
        saveLocalStore();
        syncWithWifiServer(false);
        renderAll(false);
        showToast(`บันทึกการแก้ไข "${w.word}" เรียบร้อย!`, '✏️');
      }
    });

    // Practice Leech Words button
    document.getElementById('btnPracticeLeechNow').addEventListener('click', () => {
      state.store.settings.quizPool = 'leech_only';
      state.store.settings.categoryFilter = 'ทุกหมวดหมู่';
      document.getElementById('quizPoolSelect').value = 'leech_only';
      buildQuizQueue(true);
      switchView('quiz');
      showToast('เริ่มโหมดฝึกซ่อมจุดอ่อนเฉพาะคำที่ผิดบ่อย!', '🎯');
    });

    // Sync & Export Controls
    document.getElementById('btnForceSyncNow').addEventListener('click', () => {
      initSameWifiP2pChannel();
      syncWithWifiServer(true);
    });

    document.getElementById('btnSaveRoomCode').addEventListener('click', () => {
      const code = document.getElementById('syncRoomCodeInput').value.trim() || 'VR-8899';
      state.store.settings.syncRoomCode = code;
      state.store.settings.updatedAt = Date.now();
      saveLocalStore();
      currentP2pTopic = null;
      initSameWifiP2pChannel();
      showToast(`บันทึกรหัสห้องซิงค์ ${code} เรียบร้อย!`, '📡');
    });

    document.getElementById('btnCopyCloudUrl').addEventListener('click', () => {
      navigator.clipboard.writeText(CLOUD_APP_URL).then(() => {
        showToast(`คัดลอกลิงก์ ${CLOUD_APP_URL} แล้ว!`, '📋');
      });
    });

    document.getElementById('btnCopyLanUrl').addEventListener('click', () => {
      navigator.clipboard.writeText(PERMANENT_BONJOUR_URL + '/webapp.html').then(() => {
        showToast(`คัดลอกลิงก์ ${PERMANENT_BONJOUR_URL}/webapp.html แล้ว!`, '🏠');
      });
    });

    document.getElementById('btnExportCsv').addEventListener('click', () => {
      const rows = [['Word', 'Meanings', 'Category', 'Status', 'SRS_Stage', 'Example_EN', 'Example_TH', 'Collocation']];
      for (const w of activeWords()) {
        rows.push([
          w.word,
          (w.meanings || []).join(', '),
          w.category || 'ทั่วไป',
          w.status || 'learning',
          String(w.srsStage || 0),
          w.exampleEn || '',
          w.exampleTh || '',
          w.collocation || ''
        ]);
      }
      const csvContent = '\uFEFF' + rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'VocabRecall_Export.csv';
      a.click();
      URL.revokeObjectURL(url);
      showToast('ส่งออกไฟล์ VocabRecall_Export.csv เรียบร้อย!', '📥');
    });

    document.getElementById('btnExportJson').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state.store, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'VocabRecall_Backup.json';
      a.click();
      URL.revokeObjectURL(url);
      showToast('สำรองข้อมูล VocabRecall_Backup.json เรียบร้อย!', '💾');
    });

    document.getElementById('importFileInput').addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const text = String(ev.target.result || '');
        if (file.name.endsWith('.json')) {
          try {
            const parsed = JSON.parse(text);
            if (parsed && Array.isArray(parsed.words)) {
              mergeIncomingStore(parsed);
              renderAll(true);
              showToast(`นำเข้าคำศัพท์จากไฟล์ JSON เรียบร้อย!`, '📤');
            }
          } catch (err) {}
        } else {
          const lines = text.split(/\r?\n/).filter(Boolean);
          let added = 0;
          for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split(',').map(c => c.replace(/^"|"$/g, '').trim());
            if (cols[0] && cols[1]) {
              state.store.words.push({
                id: 'voc-imp-' + Date.now() + '-' + i,
                word: cols[0],
                meanings: cols[1].split(/[,/;]/).map(s => s.trim()).filter(Boolean),
                category: cols[2] || 'ทั่วไป',
                status: cols[3] === 'mastered' ? 'mastered' : 'learning',
                srsStage: Number(cols[4] || 0),
                exampleEn: cols[5] || '',
                exampleTh: cols[6] || '',
                collocation: cols[7] || '',
                updatedAt: Date.now()
              });
              added++;
            }
          }
          if (added > 0) {
            saveLocalStore();
            syncWithWifiServer(false);
            renderAll(true);
            showToast(`นำเข้าคำศัพท์ใหม่ ${added} คำเรียบร้อย!`, '📤');
          }
        }
      };
      reader.readAsText(file);
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        initSameWifiP2pChannel();
        syncWithWifiServer(false);
      }
    });
  }

  function init() {
    loadLocalStore();
    buildQuizQueue(true);
    renderAll(false);
    initEvents();

    initSameWifiP2pChannel();
    syncWithWifiServer(false);

    setInterval(() => {
      syncWithWifiServer(false);
    }, 6000);

    setInterval(() => {
      initSameWifiP2pChannel();
    }, 15000);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
