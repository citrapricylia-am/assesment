// firebase.js - versi compat untuk digunakan langsung dari HTML via <script>
const firebaseConfig = {
  apiKey: "AIzaSyDYQBNT5Q-XFdqnDIWnBcSf3_8pBGspso8",
  authDomain: "assessment-madani.firebaseapp.com",
  databaseURL: "https://assessment-madani-default-rtdb.firebaseio.com",
  projectId: "assessment-madani",
  storageBucket: "assessment-madani.appspot.com",
  messagingSenderId: "341596545884",
  appId: "1:341596545884:web:69d0738cd72c54adc49799",
  measurementId: "G-2YCGQGEF9W",
};

// Inisialisasi Firebase compat
firebase.initializeApp(firebaseConfig);
// Inisialisasi database
const db = firebase.database();

// Fungsi bantu untuk simpan dan ambil data
const firebaseService = {
  simpanBagianData: (userId, bagian, data) => {
    return db.ref(`rekapUser/${userId}/${bagian}`).set(data);
  },
  ambilBagianData: (userId, bagian) => {
    return db.ref(`rekapUser/${userId}/${bagian}`).once("value");
  },
};
