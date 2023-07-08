## Use Case Netflix Clone

### User

All use case

<details>

<summary> Click to expand</summary>

- User bisa melihat list film
- User bisa melihat detail film
- User bisa melihat series
- User bisa melihat detail series
- User bisa login dan logout
- User bisa menambahkan film ke favorite
- User bisa menambahkan series ke favorite
- User bisa menghapus film dari favorite
- User bisa menghapus series dari favorite
- User bisa melihat list film yang sudah ditambahkan ke favorite
- User bisa melihat list series yang sudah ditambahkan ke favorite
- User bisa mencari film dan series berdasarkan judul
- User bisa berlangganan premium
- User bisa berhenti berlangganan premium
- User bisa melihat list film dan series yang sudah ditonton
- User bisa mengunduh film dan series
- Menggunakan fitur Multiple Profile
- Menggunakan fitur Parental Control
- User dapat membuat profil pengguna baru
- User dapat mengatur preferensi bahasa subtitle dan audio
- User dapat membuat daftar tontonan pribadi
- User dapat membuat ulasan dan memberikan rating pada film dan series
- User dapat melihat rekomendasi konten berdasarkan preferensi tontonan sebelumnya
- User dapat mengatur notifikasi pengingat untuk rilis film atau episode series baru
- User dapat melihat daftar film dan series yang sedang populer
- User dapat membagikan konten yang mereka sukai ke media sosial
- User dapat melihat daftar film dan series yang akan datang
</details>

Prioritas use case user

<details>
<summary>Click to expand</summary>

- User bisa melihat list film = DONE - Class 'models/abstract/Movie.tsx' , 'screens/Homescreen.tsx' , & 'models/inheritance/Loader.tsx'
- User bisa melihat detail film = DONE - Class 'models/abstract/Movie.tsx' & 'screens/DetailScreen.tsx'

- User bisa melihat list series = DONE - Class 'models/abstract/TVShow.tsx' & 'screens/Homescreen.tsx' & 'models/inheritance/Loader.tsx'
- User bisa melihat detail series = DONE - Class 'models/abstract/TVShow.tsx' & 'screens/DetailScreen.tsx'

- User bisa login dan logout = DONE - Class 'models/inheritance/NetflixUser.tsx' , 'screens/LoginScreen.tsx' & 'screens/ProfileScreen.tsx'

- User bisa berlangganan premium = DONE - Class 'models/inheritance/NetflixUser.tsx' , 'models/abstract/Subscription' , 'screens/ProfileScreen.tsx'
- User bisa berhenti berlangganan premium = DONE - Class 'models/inheritance/NetflixUser.tsx' , 'models/abstract/Subscription' , 'screens/ProfileScreen.tsx'

</details>

### Film & Series

All use case

<details>
<summary> Click to expand</summary>

- Menonton film dan series dengan kualitas 4K
- Menonton dengan fitur PIP (Pictrue in Picture)
- Menggunakan fitur Dolby Atmos
- Menggunakan fitur Skip Intro
- Menggunakan fitur Auto Play
- Menggunakan fitur Subtitle
- Menggunakan fitur Dubbing
- Menggunakan fitur Download
- Menggunakan fitur Rating
- Menggunakan fitur Review
- Menggunakan fitur Comment
- Menggunakan fitur Share
- Menggunakan fitur Like
- Menambahkan film dan series ke favorite / watchlist / daftar tonton
- Menonton dengan fitur chromecast
- Menonton film dan series dengan fitur pemutaran mundur dan maju
- Menonton film dan series dengan fitur resume dari titik terakhir yang ditonton
- Menonton film dan series dengan fitur rekomendasi berdasarkan genre atau kategori tertentu
- Menonton film dan series dengan fitur maraton (memutar semua episode secara berurutan)

</details>

Prioritas use case film & series

<details>
<summary>Click to expand</summary>

- Menggunakan fitur Skip Intro
- Menggunakan fitur Auto Play
- Menggunakan fitur Subtitle
- Menggunakan fitur Dubbing
- Menggunakan fitur Download
- Menggunakan fitur Rating
- Menggunakan fitur Review
- Menggunakan fitur Comment
- Menggunakan fitur Share
- Menggunakan fitur Like

</details>

### Pihak Manajemen Netflix

All use case

<details>
<summary>Click to expand</summary>

- Manajemen Konten seperti menambahkan film dan series
- Analisis data seperti melihat jumlah user yang berlangganan premium, preferensi tontonan user, statistik user, dll
- Manajemen User seperti melihat data user, menghapus user, dll
- Manajemen Keuangan seperti melihat laporan keuangan, melihat laporan pajak, melihat laporan keuangan, dll
- Manajemen promosi, iklan, kampanye, dll
- Manajemen mitra konten
- Manajemen tindakan perbaikan seperti melacak bug, melihat laporan bug, dll
- Manajemen konten internasional, termasuk penambahan konten lokal yang disesuaikan dengan wilayah tertentu
- Analisis data perilaku pengguna untuk memahami tren konsumsi konten dan preferensi regional
- Pengembangan dan pengujian fitur baru untuk meningkatkan pengalaman pengguna
- Kolaborasi dengan produser dan pembuat konten untuk pengembangan konten orisinal Netflix
- Melakukan riset pasar dan analisis kompetitif untuk menginformasikan strategi bisnis Netflix
- Manajemen dan pengembangan program afiliasi untuk mitra distribusi konten
- Mengelola dan mengoptimalkan infrastruktur teknis dan kapasitas server untuk mendukung peningkatan pengguna dan streaming yang lancar

</details>

Prioritas use case manajemen

<details>
<summary>Click to expand</summary>

- Manajemen Konten seperti menambahkan film dan series
- Analisis data seperti melihat jumlah user yang berlangganan premium, preferensi tontonan user, statistik user, dll
- Manajemen User seperti melihat data user, menghapus user, dll
- Manajemen Keuangan seperti melihat laporan keuangan, melihat laporan pajak, melihat laporan keuangan, dll
- Manajemen promosi, iklan, kampanye, dll
- Manajemen mitra konten

</details>

### Pihak Supervisor

All use case

<details>
<summary>Click to expand</summary>
- Monitoring kualitas konten
- Manajemen penilaian dan ulasan
- Pengawasan konten yang dilaporkan
- Pemantauan dan penanganan masalah teknis
- Koordinasi dengan pihak manajemen Netflix & pihak internal lainnya
- Melakukan pemeriksaan rutin terhadap konten yang ada di platform untuk mengidentifikasi dan menangani konten yang melanggar pedoman atau standar
- Memantau laporan pengguna terkait konten yang melanggar atau tidak pantas
- Meninjau dan menangani keluhan atau masalah teknis yang dilaporkan oleh pengguna
- Mengawasi proses moderasi ulasan dan komentar pengguna untuk mencegah penyalahgunaan atau konten yang tidak pantas
- Melakukan evaluasi dan audit rutin terhadap konten yang dilaporkan untuk memastikan tindakan yang diambil sesuai dengan pedoman internal

</details>

Prioritas use case supervisor

<details>
<summary>Click to expand</summary>

- Monitoring kualitas konten
- Manajemen penilaian dan ulasan
- Pengawasan konten yang dilaporkan
- Pemantauan dan penanganan masalah teknis
- Melakukan pemeriksaan rutin terhadap konten yang ada di platform untuk mengidentifikasi dan menangani konten yang melanggar pedoman atau standar

</details>
