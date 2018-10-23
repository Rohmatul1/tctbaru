# Menampilkan data dari database dengan node js

Langkah-langkah yang dilakukan untuk menampilkan data tersebut sebagai berikut:
* Buka cmd node js kemudian gunakan folder pada pertemuan sebelumnya. Seperti dibawah ini :
![On Demand](https://github.com/Rohmatul1/tctbaru/blob/master/minggu-07/2.PNG)

* Kemudian jalankan terlebih dahulu pekerjaan pada pertemuan sebelumnya dengan perintah "node index.js". 
Apabila masih menampilkan error, instal express lagi terlebih dahulu. Ketika pertemuan sebelumnya sudah 
bisa diakses maka akan menampilkan seperti pada gambar dibawah ini :

![On Demand](https://github.com/Rohmatul1/tctbaru/blob/master/minggu-07/3.PNG)

* Selanjutnya untuk menampilkan data dari database maka, instal terlebih dahulu mysql body-parser 
dengan perintah "npm install --save express mysql body-parser". Setelah berhasil diinstal maka,
hasilnya seperti dibawah ini:
![On Demand](https://github.com/Rohmatul1/tctbaru/blob/master/minggu-07/4.PNG)

* Langkah berikutnya membuat tabel di xampp beserta datanya.
![On Demand](https://github.com/Rohmatul1/tctbaru/blob/master/minggu-07/6.PNG)

* Berikutnya buat file server.js, ini adalah file utama atau bisa dibilang sebagai index.php jika 
menggunakan bahasa pemrograman php.
* Selanjutnya buat sebuah file dan beri nama conn.js sebagai tempat mengkoneksikan aplikasi ke database.
Pada file conn.js untuk nama database diganti dengan nama database yang telah kita buat sebelumnya. Di data
saya nama databasenya "db07".
* Kemudian membuat file controller.js yaitu tempat untuk ngoding. Di file controller.js nama tabel diganti
sesuai dengan nama tabel yang tekah kita buat. "select * from barang" perintah tersebut yang saya gunakan.
* Selanjutnya membuat file res.js yang berfungsi untuk mengetahui parameter apa yang dikembalikan dan 
valuenya seperti apa aja. 
* Lalu, membuat file routes.js yang berguna untuk menulis routes atau endpoint apa saja yang ada di rest api.
* Ketika semua file telah dibuat maka, jalankan perintah "node server.js" di cmd node js. Maka, hasilnya
akan tampil seperti gambar dibawah ini :

![On Demand](https://github.com/Rohmatul1/tctbaru/blob/master/minggu-07/5.PNG)

* Langkah terakhir yaitu buka browser gunakan perintah "http://localhost:3000/users", maka hasilnya 
akan tampil seperti dibawah ini :
![On Demand](https://github.com/Rohmatul1/tctbaru/blob/master/minggu-07/1.PNG)
