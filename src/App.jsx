import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Facebook,
  Goal,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Image,
  Instagram,
  Landmark,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MonitorSmartphone,
  NotebookPen,
  PenTool,
  Phone,
  School,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Trophy,
  UsersRound,
  X,
  Youtube,
  Brain,
} from 'lucide-react'

const navItems = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Profil', id: 'profil' },
  { label: 'Visi', id: 'visi' },
  { label: 'Misi', id: 'misi' },
  { label: 'Program', id: 'program' },
  { label: 'Akademik', id: 'akademik' },
  { label: 'PPDB', id: 'ppdb' },
  { label: 'Kontak', id: 'kontak' },
]

const heroHighlights = [
  'Pembelajaran menarik dan menyenangkan',
  'Lingkungan religius, ramah anak, dan berbudaya',
  'Komitmen membina potensi akademik serta non-akademik',
]

const aboutHighlights = [
  {
    title: 'Pembelajaran Menyenangkan',
    description:
      'Kegiatan belajar dirancang aktif, partisipatif, dan berpusat pada peserta didik agar anak lebih percaya diri dan senang belajar.',
    Icon: BookOpenCheck,
    tone: 'blue',
  },
  {
    title: 'Lingkungan Religius',
    description:
      'Pembiasaan imtak, akhlak mulia, dan interaksi santun menjadi fondasi budaya sekolah sehari-hari.',
    Icon: Sparkles,
    tone: 'amber',
  },
  {
    title: 'Budaya Gotong Royong',
    description:
      'Sekolah menumbuhkan kepedulian sosial, toleransi, dan semangat bekerja bersama melalui budaya kebersamaan.',
    Icon: HeartHandshake,
    tone: 'green',
  },
  {
    title: 'Ramah Anak dan Lingkungan',
    description:
      'Program sekolah mendukung suasana yang aman, rindang, sehat, dan nyaman bagi tumbuh kembang peserta didik.',
    Icon: Trees,
    tone: 'blue',
  },
]

const visionValues = [
  {
    title: 'Sehat',
    description: 'Mendorong kebiasaan hidup bersih, aktif, dan menjaga kesehatan jasmani serta rohani.',
    Icon: HeartPulse,
    tone: 'green',
  },
  {
    title: 'Religius',
    description: 'Menumbuhkan kekuatan spiritual, pembiasaan ibadah, dan akhlak yang baik dalam keseharian.',
    Icon: Sparkles,
    tone: 'amber',
  },
  {
    title: 'Berbudaya',
    description: 'Membiasakan nilai Profil Pelajar Pancasila, cinta budaya lokal, dan sikap menghargai kebhinekaan.',
    Icon: Landmark,
    tone: 'blue',
  },
  {
    title: 'Cerdas',
    description: 'Menguatkan nalar, literasi, numerasi, dan rasa ingin tahu agar peserta didik terus berkembang.',
    Icon: Brain,
    tone: 'blue',
  },
  {
    title: 'Mandiri',
    description: 'Melatih keberanian mengambil inisiatif, mengelola diri, dan mengembangkan potensi secara bertahap.',
    Icon: Goal,
    tone: 'green',
  },
  {
    title: 'Amanah',
    description: 'Membentuk pribadi yang jujur, bertanggung jawab, dan mampu menjalankan kepercayaan dengan baik.',
    Icon: ShieldCheck,
    tone: 'amber',
  },
]

const visionIndicators = [
  {
    title: 'Pembelajar Sepanjang Hayat',
    description:
      'Menumbuhkan motivasi belajar, rasa ingin tahu, dan kebiasaan mengembangkan diri secara berkelanjutan.',
    Icon: Lightbulb,
    tone: 'blue',
  },
  {
    title: 'Sehat Jasmani dan Rohani',
    description:
      'Membiasakan pola hidup bersih, sehat, aktif, serta menjaga keseimbangan fisik dan mental-spiritual.',
    Icon: HeartPulse,
    tone: 'green',
  },
  {
    title: 'Religius dan Berakhlak',
    description:
      'Menguatkan praktik ajaran agama, keteladanan, kesantunan, disiplin, dan tanggung jawab dalam interaksi sehari-hari.',
    Icon: Sparkles,
    tone: 'amber',
  },
  {
    title: 'Berbudaya Pancasila',
    description:
      'Mengimplementasikan gotong royong, toleransi, cinta budaya lokal, dan penghargaan terhadap kebhinekaan.',
    Icon: Landmark,
    tone: 'blue',
  },
  {
    title: 'Cerdas, Mandiri, dan Amanah',
    description:
      'Mengembangkan talenta, kecakapan hidup, kreativitas, kemandirian, dan sikap dapat dipercaya.',
    Icon: ShieldCheck,
    tone: 'green',
  },
]

const missions = [
  {
    text: 'Merancang pembelajaran yang menarik dan menyenangkan yang mampu memotivasi peserta didik untuk selalu belajar dan menemukan pembelajaran.',
    Icon: BookOpenCheck,
    tone: 'blue',
  },
  {
    text: 'Membangun lingkungan sekolah yang membentuk peserta didik memiliki akhlak mulia melalui rutinitas kegiatan keagamaan dan menerapkan ajaran agama melalui cara berinteraksi di sekolah.',
    Icon: Sparkles,
    tone: 'amber',
  },
  {
    text: 'Membangun lingkungan sekolah yang bertoleransi dalam kebhinekaan global, mencintai budaya lokal, dan menjunjung nilai gotong royong.',
    Icon: HeartHandshake,
    tone: 'green',
  },
  {
    text: 'Mengembangkan kemandirian, nalar kritis, dan kreativitas yang memfasilitasi keragaman minat dan bakat peserta didik.',
    Icon: PenTool,
    tone: 'blue',
  },
  {
    text: 'Mengembangkan program sekolah yang membentuk ide dan gagasan cepat tanggap terhadap perubahan yang terjadi untuk merancang inovasi.',
    Icon: Lightbulb,
    tone: 'amber',
  },
  {
    text: 'Mengembangkan dan memfasilitasi peningkatan prestasi peserta didik sesuai minat dan bakatnya melalui proses pendampingan dan kerja sama dengan orang tua.',
    Icon: UsersRound,
    tone: 'green',
  },
]

const goalGroups = [
  {
    title: 'Tujuan Jangka Pendek',
    period: '1 tahun ke depan',
    tone: 'blue',
    items: [
      'Terlaksananya kegiatan pembinaan imtak.',
      'Tertanamnya karakter religius pada diri peserta didik.',
      'Peserta didik bertingkah laku sesuai norma agama, norma sosial, dan norma masyarakat.',
      'Meningkatkan perolehan nilai ujian satuan pendidikan dari tahun sebelumnya.',
      'Terlaksananya pembelajaran yang berpusat pada siswa.',
      'Terlaksananya program Ijo Nol Dedoro.',
      'Terjalinnya kerja sama yang harmonis antara sekolah dengan orang tua untuk mendukung kreativitas dan inovasi peserta didik.',
    ],
  },
  {
    title: 'Tujuan Jangka Menengah',
    period: '2-3 tahun ke depan',
    tone: 'green',
    items: [
      'Terlaksananya kegiatan imtak.',
      'Terlaksananya pembelajaran dengan Kurikulum Merdeka.',
      'Meraih kejuaraan berbagai lomba bidang akademik dan non-akademik tingkat kabupaten dan provinsi.',
      'Meningkatkan kemampuan peserta didik yang cakap di bidang komputer, ilmu pengetahuan, dan teknologi.',
      'Menjadi sekolah rindang, ramah lingkungan, ramah anak, dan ramah pembelajaran dengan didukung program Ijo Nol Dedoro.',
    ],
  },
]

const programItems = [
  {
    title: 'Pembinaan Imtak',
    description: 'Pembiasaan kegiatan keagamaan untuk membentuk karakter religius, santun, dan berakhlak mulia.',
    Icon: Sparkles,
    tone: 'amber',
  },
  {
    title: 'Pembelajaran Berpusat pada Siswa',
    description: 'Anak didorong aktif bertanya, mencoba, berdiskusi, dan menemukan pengalaman belajar yang bermakna.',
    Icon: BookOpenCheck,
    tone: 'blue',
  },
  {
    title: 'Kurikulum Merdeka',
    description: 'Pembelajaran diarahkan lebih fleksibel, kontekstual, dan berfokus pada perkembangan peserta didik.',
    Icon: ScrollText,
    tone: 'blue',
  },
  {
    title: 'Literasi dan Numerasi',
    description: 'Penguatan kemampuan dasar membaca, menulis, berhitung, dan bernalar untuk bekal belajar sepanjang hayat.',
    Icon: NotebookPen,
    tone: 'green',
  },
  {
    title: 'Pengembangan Minat dan Bakat',
    description: 'Pendampingan bertahap untuk membantu peserta didik mengenali dan mengembangkan potensi terbaiknya.',
    Icon: Trophy,
    tone: 'amber',
  },
  {
    title: 'Ijo Nol Dedoro',
    description: 'Program lingkungan untuk mewujudkan sekolah bersih, rindang, sehat, dan nyaman bagi anak.',
    Icon: Leaf,
    tone: 'green',
  },
  {
    title: 'Budaya Gotong Royong',
    description: 'Kolaborasi antara siswa, guru, dan orang tua dibangun melalui kebiasaan saling membantu dan peduli.',
    Icon: HeartHandshake,
    tone: 'blue',
  },
  {
    title: 'Ramah Anak dan Lingkungan',
    description: 'Sekolah menata suasana belajar yang aman, inklusif, tertib, dan mendukung tumbuh kembang peserta didik.',
    Icon: Trees,
    tone: 'green',
  },
]

const academicItems = [
  {
    title: 'Kurikulum Merdeka',
    description: 'Pendekatan pembelajaran yang adaptif, kontekstual, dan memberi ruang diferensiasi sesuai kebutuhan siswa.',
    Icon: ScrollText,
    tone: 'blue',
  },
  {
    title: 'Pembelajaran Aktif dan Menyenangkan',
    description: 'Metode belajar dibuat interaktif agar siswa lebih terlibat, percaya diri, dan antusias di kelas.',
    Icon: BookOpen,
    tone: 'green',
  },
  {
    title: 'Literasi dan Numerasi',
    description: 'Fokus penguatan kompetensi dasar membaca, memahami, berhitung, dan memecahkan masalah sehari-hari.',
    Icon: NotebookPen,
    tone: 'amber',
  },
  {
    title: 'Penilaian Berbasis Perkembangan Siswa',
    description: 'Penilaian diarahkan untuk memotret proses, kemajuan, dan kebutuhan belajar peserta didik secara utuh.',
    Icon: ClipboardCheck,
    tone: 'blue',
  },
  {
    title: 'Pendampingan Minat dan Bakat',
    description: 'Sekolah membuka ruang pembinaan untuk potensi akademik maupun non-akademik sesuai kecenderungan siswa.',
    Icon: Trophy,
    tone: 'green',
  },
  {
    title: 'Pengenalan Komputer, Ilmu Pengetahuan, dan Teknologi',
    description: 'Peserta didik diperkenalkan pada keterampilan dasar teknologi sebagai bekal menghadapi perkembangan zaman.',
    Icon: MonitorSmartphone,
    tone: 'amber',
  },
]

const achievementItems = [
  {
    title: 'Akademik',
    description: 'Ruang untuk menampilkan capaian lomba, hasil pembinaan, atau prestasi belajar sesuai data terbaru sekolah.',
    Icon: GraduationCap,
    tone: 'blue',
  },
  {
    title: 'Keagamaan',
    description: 'Dapat diisi dokumentasi capaian kegiatan imtak, pembiasaan akhlak, atau ajang keagamaan peserta didik.',
    Icon: Sparkles,
    tone: 'amber',
  },
  {
    title: 'Seni dan Budaya',
    description: 'Tempat menampilkan prestasi atau partisipasi peserta didik dalam kegiatan seni, budaya, dan kreativitas.',
    Icon: PenTool,
    tone: 'green',
  },
  {
    title: 'Olahraga',
    description: 'Dapat digunakan untuk merangkum perkembangan pembinaan kebugaran dan capaian lomba olahraga siswa.',
    Icon: Goal,
    tone: 'blue',
  },
  {
    title: 'Pramuka',
    description: 'Bagian ini siap menampung dokumentasi prestasi, kegiatan regu, dan pembinaan karakter melalui pramuka.',
    Icon: BadgeCheck,
    tone: 'green',
  },
  {
    title: 'Lingkungan Sekolah',
    description: 'Cocok untuk menampilkan dampak program Ijo Nol Dedoro dan budaya sekolah bersih, rindang, dan tertib.',
    Icon: Leaf,
    tone: 'amber',
  },
]

const galleryItems = [
  {
    title: 'Kegiatan Belajar',
    subtitle: 'Suasana kelas aktif, menyenangkan, dan berpusat pada peserta didik.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Imtak dan Keagamaan',
    subtitle: 'Pembiasaan nilai religius dan akhlak mulia dalam keseharian sekolah.',
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Upacara Bendera',
    subtitle: 'Momen pembinaan disiplin, nasionalisme, dan tanggung jawab bersama.',
    image:
      'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Budaya Gotong Royong',
    subtitle: 'Kolaborasi warga sekolah dalam menjaga kebersamaan dan kepedulian.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kegiatan Lingkungan',
    subtitle: 'Aktivitas pendukung sekolah rindang, bersih, sehat, dan nyaman.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Minat dan Bakat',
    subtitle: 'Ruang tumbuh untuk kreativitas, keberanian tampil, dan pengembangan potensi anak.',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
  },
]

const newsItems = [
  {
    title: 'Kegiatan Pembinaan Imtak SD Negeri 1 Sembung',
    excerpt:
      'Sekolah terus menguatkan pembiasaan keagamaan sebagai bagian dari pembentukan karakter religius peserta didik.',
    label: 'Kegiatan Sekolah',
    date: '19 Mei 2026',
  },
  {
    title: 'Penerapan Pembelajaran Berpusat pada Siswa',
    excerpt:
      'Guru menghadirkan suasana kelas yang lebih aktif, menyenangkan, dan mendorong siswa untuk berani berpendapat.',
    label: 'Akademik',
    date: '17 Mei 2026',
  },
  {
    title: 'Program Ijo Nol Dedoro untuk Sekolah Bersih dan Rindang',
    excerpt:
      'Komitmen menjaga lingkungan sekolah terus diperkuat melalui budaya bersih, hijau, sehat, dan ramah anak.',
    label: 'Program Sekolah',
    date: '15 Mei 2026',
  },
  {
    title: 'Kegiatan Literasi dan Numerasi Peserta Didik',
    excerpt:
      'Penguatan kemampuan dasar membaca, menulis, berhitung, dan bernalar menjadi fokus pembelajaran harian.',
    label: 'Pembelajaran',
    date: '12 Mei 2026',
  },
  {
    title: 'Penguatan Profil Pelajar Pancasila di Lingkungan Sekolah',
    excerpt:
      'Nilai gotong royong, toleransi, tanggung jawab, dan cinta budaya lokal ditanamkan melalui kegiatan keseharian.',
    label: 'Karakter',
    date: '10 Mei 2026',
  },
]

const ppdbRequirements = [
  'Fotokopi Akta Kelahiran',
  'Fotokopi Kartu Keluarga',
  'Fotokopi KTP Orang Tua/Wali',
  'Pas Foto Calon Siswa',
  'Surat Keterangan TK/PAUD jika ada',
]

const whatsappDisplayNumber = '081936720051'
const whatsappNumber = '6281936720051'

const contactDetails = [
  {
    label: 'Alamat',
    value: 'Desa Sembung, Kecamatan Narmada, Kabupaten Lombok Barat, NTB',
    Icon: MapPin,
  },
  {
    label: 'Email',
    value: 'sdn1sembung@email.com',
    Icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: whatsappDisplayNumber,
    Icon: WhatsAppIcon,
  },
  {
    label: 'Jam Operasional',
    value: 'Senin - Sabtu, 07.00 - 13.00 WITA',
    Icon: Clock3,
  },
]

const quickLinks = [
  { label: 'Profil Sekolah', href: '#profil' },
  { label: 'Visi SERIBU CANDA', href: '#visi' },
  { label: 'Program Sekolah', href: '#program' },
  { label: 'Informasi PPDB', href: '#ppdb' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'YouTube', href: '#', Icon: Youtube },
]

const toneClasses = {
  blue: {
    icon: 'bg-blue-600/10 text-blue-700 ring-blue-100',
    badge: 'bg-blue-600 text-white',
    surface: 'border-blue-100 bg-blue-50/70',
  },
  green: {
    icon: 'bg-green-500/10 text-green-700 ring-green-100',
    badge: 'bg-green-500 text-white',
    surface: 'border-green-100 bg-green-50/80',
  },
  amber: {
    icon: 'bg-amber-400/15 text-amber-700 ring-amber-100',
    badge: 'bg-amber-400 text-slate-900',
    surface: 'border-amber-100 bg-amber-50/80',
  },
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.05 4.94A9.86 9.86 0 0 0 12 2a9.93 9.93 0 0 0-8.62 14.87L2 22l5.3-1.39A9.99 9.99 0 0 0 12 22a10 10 0 0 0 7.05-17.06Zm-7.05 15.38a8.27 8.27 0 0 1-4.22-1.15l-.3-.18-3.15.83.84-3.06-.2-.31A8.32 8.32 0 1 1 12 20.32Zm4.56-6.23c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.23-.73-.64-1.22-1.43-1.36-1.67-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.42 1.02 2.58c.12.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.51.59.19 1.12.16 1.54.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}

function IconBadge({ Icon, tone = 'blue', className = '' }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${toneClasses[tone].icon} ${className}`}
    >
      <Icon className="h-5 w-5" />
    </div>
  )
}

function SectionHeader({ eyebrow, title, description, light = false, descriptionClassName = '' }) {
  return (
    <div className="max-w-3xl">
      <span className={light ? 'section-kicker-light' : 'section-kicker'}>{eyebrow}</span>
      <h2 className={light ? 'section-heading-light' : 'section-heading'}>{title}</h2>
      <p className={`${light ? 'section-copy-light' : 'section-copy'} ${descriptionClassName}`}>{description}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  })

  const isContactFormValid = Object.values(contactForm).every((value) => value.trim())

  const handleContactFieldChange = ({ target }) => {
    const { name, value } = target

    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()

    if (!isContactFormValid) {
      return
    }

    const whatsappMessage = [
      'Halo SD Negeri 1 Sembung, saya ingin menyampaikan pesan melalui website.',
      '',
      `Nama: ${contactForm.name.trim()}`,
      `Kontak: ${contactForm.contact.trim()}`,
      `Subjek: ${contactForm.subject.trim()}`,
      'Pesan:',
      contactForm.message.trim(),
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <nav className="container-shell flex items-center justify-between py-4">
          <a href="#beranda" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-200">
              <School className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Website Resmi</p>
              <p className="text-base font-extrabold text-blue-950 sm:text-lg">SD Negeri 1 Sembung</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#kontak" className="btn-secondary">
              Hubungi Sekolah
            </a>
            <a href="#ppdb" className="btn-primary">
              Info PPDB
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            className="inline-flex rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-200/80 bg-white/95 lg:hidden">
            <div className="container-shell grid gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#ppdb" className="btn-primary mt-2 text-center" onClick={() => setMenuOpen(false)}>
                Info PPDB
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="beranda"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.15),_transparent_30%),linear-gradient(180deg,_#eff6ff_0%,_#ffffff_55%,_#f0fdf4_100%)] pt-32 scroll-mt-28"
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),transparent)]" />
          <div className="container-shell relative grid gap-12 pb-20 pt-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-24">
            <div>
              <span className="section-kicker">
                <Building2 className="h-4 w-4" />
                Sekolah Dasar Negeri • Narmada, Lombok Barat
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                Selamat Datang di SD Negeri 1 Sembung
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Mewujudkan Generasi <span className="font-extrabold text-blue-700">SERIBU CANDA</span>: Sehat,
                Religius, Berbudaya, Cerdas, Mandiri, dan Amanah.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#profil" className="btn-primary inline-flex items-center justify-center gap-2">
                  Lihat Profil Sekolah
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#kontak" className="btn-secondary inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Hubungi Sekolah
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div key={item} className="soft-card py-4">
                    <div className="flex items-start gap-3">
                      <IconBadge Icon={CheckCircle2} tone="blue" className="h-10 w-10 rounded-xl" />
                      <p className="text-sm font-medium leading-6 text-slate-600">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:px-8 lg:pb-10 lg:pt-8">
              <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-full bg-amber-300/35 blur-2xl md:block" />
              <div className="absolute -right-8 bottom-10 hidden h-28 w-28 rounded-full bg-green-300/35 blur-2xl md:block" />

              <div className="soft-card relative overflow-hidden rounded-[32px] p-4 sm:p-5">
                <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-blue-200/30 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
                    alt="Suasana pembelajaran anak sekolah dasar"
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />
                  <div className="absolute left-5 right-5 top-5 flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-[68%] rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur">
                      Profil Sekolah Dasar Negeri
                    </div>
                    <div className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg">
                      SERIBU CANDA
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-[28px] border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                      <div className="flex flex-wrap gap-2">
                        {visionValues.map((item) => (
                          <span
                            key={item.title}
                            className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide"
                          >
                            {item.title}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-lg font-bold">Generasi sehat, religius, berbudaya, cerdas, mandiri, dan amanah.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-[-70px] top-[-40px] z-10 hidden w-full max-w-[240px] rounded-[26px] border border-white/80 bg-white/95 p-4 shadow-[0_22px_60px_-28px_rgba(37,99,235,0.35)] backdrop-blur lg:block">
                <div className="flex items-center gap-3">
                  <IconBadge Icon={Leaf} tone="green" />
                  <div>
                    <p className="text-sm font-bold text-blue-950">Ijo Nol Dedoro</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">Program lingkungan bersih, rindang, sehat, dan ramah anak.</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-[-10px] right-[-100px] z-10 hidden w-full max-w-[260px] rounded-[26px] border border-white/80 bg-white/95 p-4 shadow-[0_22px_60px_-28px_rgba(15,23,42,0.28)] backdrop-blur lg:block">
                <div className="flex items-center gap-3">
                  <IconBadge Icon={UsersRound} tone="amber" />
                  <div>
                    <p className="text-sm font-bold text-blue-950">Kolaborasi dengan Orang Tua</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">Komunikasi sekolah dan wali murid diarahkan untuk mendukung tumbuh kembang siswa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profil" className="section-shell scroll-mt-28">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow="Tentang Sekolah"
                  title="Sekolah dasar negeri yang tumbuh dengan karakter, kualitas belajar, dan kepedulian lingkungan."
                  description="SD Negeri 1 Sembung merupakan sekolah dasar negeri yang berkomitmen menghadirkan pembelajaran yang menarik, menyenangkan, religius, berbudaya, dan berpusat pada peserta didik. Melalui visi SERIBU CANDA, sekolah berupaya membentuk peserta didik yang sehat, berakhlak mulia, cerdas, mandiri, kreatif, serta mampu mengemban amanah dengan penuh tanggung jawab."
                />
              </div>

              <div className="soft-card relative overflow-hidden">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <IconBadge Icon={School} tone="blue" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Komitmen Sekolah</p>
                      <p className="mt-1 text-lg font-bold text-blue-950">Belajar yang bermakna, budaya yang kuat, dan lingkungan yang sehat.</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4">
                    {[
                      'Mendorong kebiasaan belajar aktif, kreatif, dan menyenangkan.',
                      'Menumbuhkan karakter religius, santun, dan bertanggung jawab.',
                      'Menciptakan sekolah resmi yang rapi, ramah anak, dan mudah dipercaya masyarakat.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-600">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-600" />
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {aboutHighlights.map(({ title, description, Icon, tone }) => (
                <article key={title} className="outline-card">
                  <IconBadge Icon={Icon} tone={tone} />
                  <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="visi"
          className="section-shell scroll-mt-28 bg-[linear-gradient(180deg,_#1d4ed8_0%,_#1e3a8a_100%)] text-white"
        >
          <div className="container-shell">
            <SectionHeader
              eyebrow="Visi Sekolah"
              title="Visi SD Negeri 1 Sembung dirangkum dalam identitas SERIBU CANDA."
              description='“Terwujudnya generasi yang Sehat, Religius, Berbudaya, Cerdas, Mandiri, dan Amanah (SERIBU CANDA).”'
              light
              descriptionClassName="hidden"
            />

            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
              Identitas ini membantu sekolah menyampaikan visi secara lebih jelas, ringkas, dan mudah diingat oleh
              peserta didik, orang tua, guru, serta masyarakat.
            </p>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-white/12 p-6 shadow-[0_24px_70px_-38px_rgba(15,23,42,0.42)] backdrop-blur xl:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-semibold text-blue-50">
                  <Star className="h-4 w-4 text-amber-300" />
                  Rumusan Visi Resmi
                </div>
                <div className="mt-6 rounded-[28px] border border-white/14 bg-white/10 p-5 md:p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-100">Visi SD Negeri 1 Sembung</p>
                  <blockquote className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight text-white md:text-[2rem]">
                    &ldquo;Terwujudnya generasi yang Sehat, Religius, Berbudaya, Cerdas, Mandiri, dan Amanah
                    <span className="text-amber-200"> (SERIBU CANDA)</span>.&rdquo;
                  </blockquote>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-100 md:text-base">
                    Visi ini menjadi arah utama sekolah dalam membentuk peserta didik yang unggul secara karakter,
                    pembelajaran, tanggung jawab, dan kepedulian terhadap lingkungan sekitar.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-white/10 p-6 shadow-[0_24px_70px_-38px_rgba(15,23,42,0.42)] backdrop-blur xl:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-semibold text-blue-50">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Makna SERIBU CANDA
                </div>
                <p className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">SERIBU CANDA</p>
                <p className="mt-4 text-base leading-8 text-blue-100">
                  Akronim ini memudahkan warga sekolah dan masyarakat memahami nilai utama yang ingin diwujudkan
                  dalam proses pendidikan di SD Negeri 1 Sembung.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {visionValues.map(({ title }, index) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/14 bg-white/12 px-4 py-4 shadow-sm"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">Nilai {String(index + 1).padStart(2, '0')}</p>
                      <p className="mt-2 text-lg font-bold text-white">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visionValues.map(({ title, description, Icon, tone }) => (
                <article
                  key={title}
                  className="rounded-[30px] border border-white/14 bg-white/12 p-6 shadow-[0_20px_55px_-36px_rgba(15,23,42,0.5)] backdrop-blur-md"
                >
                  <IconBadge Icon={Icon} tone={tone} className='bg-white'/>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                      Nilai Inti
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-blue-50/90">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell scroll-mt-28 bg-blue-50">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Indikator Visi"
              title="Arah pembinaan peserta didik diterjemahkan ke dalam indikator yang konkret dan mudah dipahami."
              description="Setiap indikator membantu sekolah menjaga konsistensi antara visi, budaya belajar, pembinaan karakter, dan program pengembangan siswa."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {visionIndicators.map(({ title, description, Icon, tone }, index) => (
                <article key={title} className="outline-card h-full">
                  <div className="flex items-center justify-between">
                    <IconBadge Icon={Icon} tone={tone} />
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${toneClasses[tone].badge}`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-blue-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="misi" className="section-shell scroll-mt-28">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Misi Sekolah"
              title="Enam misi utama sekolah ditampilkan dalam format yang rapi, jelas, dan mudah dipindai."
              description="Susunan misi ini menjadi penggerak pembelajaran, budaya sekolah, inovasi program, dan kerja sama dengan orang tua."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {missions.map(({ text, Icon, tone }, index) => (
                <article key={text} className="outline-card relative overflow-hidden">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-slate-100/60 blur-2xl" />
                  <div className="relative flex gap-4">
                    <div className="flex flex-col items-center gap-3">
                      <span className={`rounded-2xl px-3 py-2 text-sm font-extrabold ${toneClasses[tone].badge}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <IconBadge Icon={Icon} tone={tone} />
                    </div>
                    <p className="pt-1 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell scroll-mt-28 bg-green-50">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Tujuan Sekolah"
              title="Target jangka pendek dan menengah disusun untuk menjaga langkah sekolah tetap terarah."
              description="Tujuan berikut menegaskan penguatan imtak, pembelajaran yang berpihak pada siswa, peningkatan prestasi, serta lingkungan belajar yang sehat dan ramah anak."
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {goalGroups.map(({ title, period, items, tone }) => (
                <article key={title} className={`outline-card border ${toneClasses[tone].surface}`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">{period}</p>
                      <h3 className="mt-2 text-2xl font-bold text-blue-950">{title}</h3>
                    </div>
                    <span className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${toneClasses[tone].badge}`}>
                      Prioritas
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {items.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-600" />
                        <p className="text-sm leading-7 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[30px] border border-green-100 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(34,197,94,0.3)]">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <IconBadge Icon={Leaf} tone="green" className="h-14 w-14 rounded-3xl" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-700">Program Highlight</p>
                    <h3 className="mt-2 text-2xl font-bold text-blue-950">Ijo Nol Dedoro</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                      Program ini menjadi penguat identitas sekolah sebagai lingkungan yang bersih, rindang, sehat,
                      ramah anak, dan nyaman untuk pembelajaran.
                    </p>
                  </div>
                </div>
                <a href="#program" className="btn-primary inline-flex items-center justify-center gap-2 md:flex-none">
                  Lihat Program Sekolah
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="section-shell scroll-mt-28">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Program Sekolah"
              title="Program unggulan disusun selaras dengan visi, tujuan, dan kebutuhan peserta didik."
              description="Semua program berikut masih berbentuk front-end statis sehingga sangat mudah disesuaikan kembali saat sekolah ingin memperbarui isi secara manual."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {programItems.map(({ title, description, Icon, tone }) => (
                <article key={title} className="outline-card">
                  <IconBadge Icon={Icon} tone={tone} />
                  <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="akademik" className="section-shell scroll-mt-28 bg-blue-50">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow="Akademik"
                  title="Penyajian akademik dibuat lebih profesional agar mudah dipahami orang tua, guru, dan pihak dinas."
                  description="Fokus akademik menonjolkan kualitas proses belajar, asesmen perkembangan siswa, penguatan kompetensi dasar, serta kesiapan menghadapi perkembangan ilmu pengetahuan dan teknologi."
                />

                <div className="mt-8 rounded-[30px] border border-blue-100 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(37,99,235,0.28)]">
                  <div className="flex items-start gap-4">
                    <IconBadge Icon={BookOpen} tone="blue" className="h-14 w-14 rounded-3xl" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Arah Pembelajaran</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Kurikulum dan pendekatan belajar di SD Negeri 1 Sembung dirancang agar peserta didik tumbuh
                        aktif, percaya diri, berkarakter, dan siap mengembangkan potensi terbaiknya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {academicItems.map(({ title, description, Icon, tone }) => (
                  <article key={title} className="outline-card h-full">
                    <IconBadge Icon={Icon} tone={tone} />
                    <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="prestasi" className="section-shell scroll-mt-28">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Prestasi"
              title="Bagian prestasi dibuat positif, resmi, dan aman tanpa mengarang data capaian spesifik."
              description="SD Negeri 1 Sembung terus mendorong peserta didik untuk mengembangkan potensi akademik dan non-akademik melalui pendampingan, pembinaan, dan kerja sama dengan orang tua."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {achievementItems.map(({ title, description, Icon, tone }) => (
                <article key={title} className="outline-card">
                  <div className="flex items-start justify-between gap-4">
                    <IconBadge Icon={Icon} tone={tone} />
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      Mudah diedit
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeri" className="section-shell scroll-mt-28 bg-green-50">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Galeri"
              title="Galeri kegiatan tampil lebih modern dengan overlay ringan dan komposisi yang rapi."
              description="Foto masih berupa placeholder yang relevan sehingga nanti dapat diganti mudah sesuai dokumentasi asli sekolah."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map(({ title, subtitle, image }) => (
                <article key={title} className="group relative overflow-hidden rounded-[30px] bg-white shadow-[0_18px_50px_-32px_rgba(15,23,42,0.28)]">
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur">
                    Dokumentasi
                  </div>
                  <img src={image} alt={title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="rounded-[26px] border border-white/15 bg-white/12 p-5 backdrop-blur-md">
                      <div className="flex items-start gap-3">
                        <IconBadge Icon={Image} tone="blue" className="h-10 w-10 rounded-xl bg-white/15 text-white ring-white/20" />
                        <div>
                          <h3 className="text-xl font-bold text-white">{title}</h3>
                          <p className="mt-2 text-sm leading-6 text-blue-100">{subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="berita" className="section-shell scroll-mt-28">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Berita dan Pengumuman"
              title="Informasi sekolah disusun dalam kartu berita yang bersih, resmi, dan nyaman dibaca."
              description="Kontennya masih dummy yang aman dan relevan, sehingga bisa diperbarui kapan saja tanpa perlu sistem backend atau CMS."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {newsItems.map(({ title, excerpt, label, date }) => (
                <article key={title} className="outline-card group relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-green-400" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                      <Megaphone className="h-3.5 w-3.5" />
                      {label}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <CalendarDays className="h-4 w-4" />
                      {date}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-blue-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt}</p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-blue-800"
                  >
                    Baca Ringkasan
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ppdb"
          className="section-shell scroll-mt-28 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.18),_transparent_25%),linear-gradient(180deg,_#eff6ff_0%,_#ffffff_100%)]"
        >
          <div className="container-shell">
            <div className="rounded-[34px] border border-blue-100 bg-white p-6 shadow-[0_24px_70px_-36px_rgba(37,99,235,0.35)] sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div>
                  <SectionHeader
                    eyebrow="PPDB"
                    title="Informasi PPDB dibuat lebih menonjol agar orang tua mudah menemukan langkah awal pendaftaran."
                    description="Informasi Penerimaan Peserta Didik Baru SD Negeri 1 Sembung dapat diperoleh dengan menghubungi pihak sekolah. Kami siap membantu orang tua/wali dalam proses pendaftaran dan kelengkapan administrasi."
                  />

                  <div className="mt-8 rounded-[28px] border border-blue-100 bg-blue-50/80 p-5">
                    <div className="flex items-start gap-4">
                      <IconBadge Icon={Phone} tone="blue" className="h-14 w-14 rounded-3xl" />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Butuh bantuan cepat?</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Orang tua/wali dapat langsung menghubungi pihak sekolah atau panitia PPDB untuk informasi jadwal,
                          persyaratan, dan kelengkapan administrasi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <IconBadge Icon={ClipboardCheck} tone="green" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-700">Persyaratan Umum</p>
                      <h3 className="mt-1 text-2xl font-bold text-blue-950">Dokumen yang disiapkan</h3>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {ppdbRequirements.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white bg-white px-4 py-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green-600" />
                        <p className="text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Halo%20Panitia%20PPDB%20SD%20Negeri%201%20Sembung`}
                      className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Hubungi Panitia PPDB
                    </a>
                    <a href="#kontak" className="btn-secondary inline-flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Kontak Sekolah
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontak" className="section-shell scroll-mt-28">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Kontak"
              title="Bagian kontak dibuat lebih profesional dengan informasi penting dan form statis yang rapi."
              description="Form di bawah ini tetap berbasis front-end, tetapi sekarang bisa langsung menyiapkan isi pesan ke WhatsApp sekolah dari data yang diinput pengunjung."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="soft-card overflow-hidden">
                <div className="grid gap-5">
                  <div className="rounded-[28px] border border-blue-100 bg-blue-50/80 p-6">
                    <div className="flex items-start gap-4">
                      <IconBadge Icon={School} tone="blue" className="h-14 w-14 rounded-3xl" />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Informasi Sekolah</p>
                        <h3 className="mt-2 text-2xl font-bold text-blue-950">SD Negeri 1 Sembung</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          Desa Sembung, Kecamatan Narmada, Kabupaten Lombok Barat, NTB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactDetails.map(({ label, value, Icon }) => (
                      <div key={label} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-start gap-3">
                          <IconBadge Icon={Icon} tone="green" className="h-10 w-10 rounded-xl" />
                          <div>
                            <p className="text-sm font-bold text-blue-950">{label}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[30px] border border-slate-200">
                    <iframe
                      title="Peta lokasi SD Negeri 1 Sembung"
                      className="h-72 w-full"
                      src="https://maps.google.com/maps?q=narmada%20lombok%20barat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                  </div>
                </div>
              </div>

              <div className="soft-card lg:self-start">
                <div className="flex items-center gap-3">
                  <IconBadge Icon={WhatsAppIcon} tone="amber" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">Form Kontak WhatsApp</p>
                    <h3 className="mt-1 text-2xl font-bold text-blue-950">Sampaikan pesan atau pertanyaan</h3>
                  </div>
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFieldChange}
                      className="input-field"
                      placeholder="Nama lengkap"
                      required
                    />
                    <input
                      type="text"
                      name="contact"
                      value={contactForm.contact}
                      onChange={handleContactFieldChange}
                      className="input-field"
                      placeholder="Email / No. HP"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFieldChange}
                    className="input-field"
                    placeholder="Subjek pesan"
                    required
                  />
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFieldChange}
                    className="input-field min-h-40 resize-none"
                    placeholder="Tulis pesan Anda di sini"
                    required
                  />
                  <div className="rounded-[26px] border border-blue-100 bg-blue-50/70 p-4">
                    <div className="flex items-start gap-3">
                      <IconBadge Icon={WhatsAppIcon} tone="blue" className="h-10 w-10 rounded-xl" />
                      <div>
                        <p className="text-sm font-bold text-blue-950">Pesan akan dibuka di WhatsApp</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Setelah tombol ditekan, isi form otomatis dimasukkan ke chat menuju nomor {whatsappDisplayNumber}.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-slate-500">
                      Pastikan data kontak dan isi pesan sudah benar sebelum melanjutkan ke WhatsApp.
                    </p>
                    <button
                      type="submit"
                      className="btn-whatsapp inline-flex w-full items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      disabled={!isContactFormValid}
                    >
                      <span className="btn-whatsapp__icon">
                        <WhatsAppIcon className="h-4 w-4" />
                      </span>
                      <span className="whitespace-nowrap">Kirim ke WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-slate-200">
        <div className="container-shell grid gap-8 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <School className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Website Resmi</p>
                <h3 className="text-xl font-extrabold text-white">SD Negeri 1 Sembung</h3>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">
              SERIBU CANDA: Sehat, Religius, Berbudaya, Cerdas, Mandiri, dan Amanah.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-blue-200/90">
              Website front-end statis yang dirancang lebih modern, resmi, dan siap dipresentasikan sebagai wajah digital sekolah.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Link Cepat</p>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((item) => (
                <a key={item.href} href={item.href} className="footer-link">
                  <ChevronRight className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Kontak</p>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-blue-100">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-none text-blue-200" />
                <span>Desa Sembung, Kecamatan Narmada, Kabupaten Lombok Barat, NTB</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 flex-none text-blue-200" />
                <span>sdn1sembung@email.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 flex-none text-blue-200" />
                <span>{whatsappDisplayNumber}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Sosial Media</p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-blue-300 hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-shell py-5 text-sm text-blue-200/90">&copy; 2026 SD Negeri 1 Sembung. All Rights Reserved.</div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}?text=Halo%20SD%20Negeri%201%20Sembung`}
        aria-label="Hubungi sekolah melalui WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_22px_50px_-22px_rgba(34,197,94,0.8)] transition hover:scale-[1.03] hover:bg-green-600"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  )
}

export default App
