# Cara Membangun SaaS

Software as service merupakan evolusi lanjutan dari konsep ASP ( Application Service Provider). Software as service  adalah istilah terhadap  software  atau aplikasi tertentu berbasis internet yang  ditawarkan  oleh  provider  kepada  pengguna.  provider  sebagai  pemegang license atas software tersebut hanya memberikan service atau layanan kepada pengguna untuk menggunakannya  sesuai  kebutuhan  pengguna. License,  maintenance,  support, tingkat  kenyamanan  dan  keamanan  atas  software  tersebut  sepenuhnya  menjadi tanggung jawab dari provider.


== Keuntungan layanan SaaS ==

* Model  rancangan  dan  distribusi  software  lebih  menarik  dan  harga  terjangkau  karena memungkinkan membagi satu aplikasi kepada ratusan perusahaan dan berjalan dalam lingkungan  sistem  biasa.  Secara  luas  memberikan  improvisasi  kepada  model  client /server.
* Biaya pemakaian bandwidth untuk menjaga tingkat konektivitas relatif terjangkau.
* Mempermudah pengguna untuk melakukan migrasi aplikasi, dengan menghilangkan sisi pembayaran license software dan keharusan membayar upgrade.
* Meningkatkan produktivitas bagi pengguna.

Penjelasan ketika provider mempublikasikan suatu layanan SaaS di internet dan satu atau beberapa pengguna saling menggunakannya secara bersama – sama atau on demand di dalam internet.
![On Demand](https://github.com/Rohmatul1/p-tct/blob/master/minggu-02/images/1.jpg)

== Implementasi layanan SaaS ==

Implementasi cloud computing dapat diterapkan pada jaringan yang bersifat :

* Public 

Jaringan yang bersifat public adalah suatu jaringan yang dapat diakses dan digunakan secara umum oleh setiap orang selama orang tersebut terkoneksi dengan internet.

* Private

Jaringan yang bersifat private adalah suatu jaringan yang hanya dapat diakses dan digunakan oleh orang – orang tertentu meskipun melalui koneksi internet.

Ketika cloud computing diimplementasikan ke dalam jaringan public, maka seluruh sumber daya atau resources dari aplikasi sepenuhnya berada internet. Layanan SaaS yang bersifat public sering kita jumpai dalam bentuk aplikasi web atau web services.

Ketika provider meletakkan seluruh sumber daya atau resources dari aplkasi ke dalam internet tetapi hanya beberapa orang yang dapat menggunakannya maka layanan SaaS tersebut bersifat private.

SaaS yang ditawarkan provider kepada pengguna baik melalui jaringan public maupun jaringan private pada dasarnya mempunyai satu karakteristik yang sama yaitu mudah diakses dan berskala luas ( upgrade aplikasi, modifikasi aplikasi disesuaikan dengan kebutuhan dan keinginan pengguna ).

Berbagai SaaS yang dibuat oleh provider sering disebut dalam berbagai versi yaitu versi berbasis web, on demand dsb. Apapun versi yang dibuat oleh provider, yang diperlukan oleh pengguna adalah koneksi internet untuk dapat menggunakan SaaS tersebut.

Metodologi pengembangan dari SaaS memiliki kesamaan dengan pengembangan software desktop baik dari sisi :

* kemampuan aplikasi diakses dalam skala besar
* tingkat keamanan 
* aplikasi yang nyaman digunakan oleh pengguna.


== Faktor keberhasilan  dalam implementasi dan pengembangan SaaS ==

* Efisiensi  sumber  daya  komputer

SaaS  memiliki  kemampuan  memaksimalkan penggunaan sumber daya komputer seperti pemakaian memory  dan  bandwidth  secara bersamaan, penggunaan database berskala besar untuk berbagai pengguna di berbagai lokasi yang berbeda dalam waktu bersamaan.

* Optimasi data dan multi tenant

SaaS memiliki kemampuan untuk memilah data–data dan  menseleksi  data–data  berdasarkan  kepemilikan  pengguna  secara  bersamaan dalam satu aplikasi ( multi tenant ).

* Fleksibel  aplikasi

SaaS memiliki tingkat fleksible yang tinggi  dan  memungkinkan pengguna memodifikasi aplikasi sesuai kebutuhan pengguna.

== Secara arsitektur, SaaS memiliki kesamaan dengan SOA ( Service Oriented Architecture ) yang dimiliki oleh software desktop, SaaS memiliki dua lapisan tambahan yang tidak dimiliki oleh software desktop. Lapisan tersebut adalah : ==

* Meta data services

Lapisan ini memberikan kemudahan bagi pengguna untuk melakukan modifikasi terhadap aplikasi baik dari sisi memodifikasi tampilan aplikasi, memodifikasi fungsional aplikasi agar sesuai dengan konsep dan aturan bisnis di perusahaan pengguna, dan memodifikasi pengaturan atau kontrol terhadap data termasuk migrasi data yang tersedia. Kemudahan dalam memodifikasi aplikasi sepenuhnya di tangan pengguna.

* Security services

Lapisan keamanan ini mendelegasikan setiap pengguna untuk bertanggung jawab sepenuhnya terhadap apapun yang dibuat di dalam aplikasi ini termasuk mendelegasikan keamanan password dari masing – masing user account ( tenant ) yang dibuat oleh pengguna. Meskipun provider sebagai pemilik sepenuhnya atas SaaS yang ditawarkan, SaaS memberikan kemampuan kepada pengguna untuk membuat aturan bisnis terhadap aplikasi, dan kontrol akses terhadap aplikasi sesuai keinginan pengguna.

# Pada intinya :

SaaS merupakan evolusi dari pengembangan software dimana aplikasi tersebut diletakkan di cloud atau internet. Aplikasi tersebut tersedia di internet atau cloud sehingga pengguna tidak perlu melakukan instalasi atau menjalankan aplikasi tersebut di masing – masing komputernya. Sebagai hasilnya pengguna terbebaskan dari urusan maintenance aplikasi. Oleh provider SaaS ditawarkan sebagai pay as you use service , artinya pembayaran atas software atau aplikasi termasuk license didalamnya tidak diperlukan, pembayaran hanya dilakukan ketika aplikasi digunakan dan biaya tersebut dihitung berdasarkan periode biasanya per bulan, per tahun.
 
# Sumber :

* http://hohonugroho07.blogspot.com/2015/01/software-as-service-saas.html