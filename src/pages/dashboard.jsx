import React from "react";
import "./css/dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Heading */}
      <h1>Welcome to My Website</h1>

      {/* Paragraph */}
      <p>
        Ini adalah halaman dashboard sederhana untuk praktik matakuliah
        Pengenalan Struktur Frontend. Kita akan mempelajari dasar-dasar HTML,
        CSS, dan React.
      </p>

      {/* List */}
      <h2>Materi Praktik:</h2>
      <ul>
        <li>Heading dan Paragraph</li>
        <li>List, Link, dan Image</li>
        <li>Table dan Form</li>
        <li>CSS eksternal: warna, font, margin, padding</li>
        <li>Responsive Layout: Flexbox & Grid</li>
      </ul>

      {/* Link */}
      <p>
        Kunjungi{" "}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          Dokumentasi React
        </a>{" "}
        untuk mempelajari lebih lanjut.
      </p>

      {/* Image */}
      <div className="image-section">
        <img
            src="/assets/uns_logo.png"
            alt="Contoh Gambar"
            className="dashboard-image"
        />
        </div>

         {/* Table */}
      <h2>Jadwal Praktik</h2>
      <table>
        <thead>
          <tr>
            <th>Hari</th>
            <th>Materi</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Senin</td>
            <td>HTML & CSS</td>
            <td>09:00 - 10:30</td>
          </tr>
          <tr>
            <td>Rabu</td>
            <td>JavaScript & React</td>
            <td>09:00 - 10:30</td>
          </tr>
        </tbody>
      </table>
      
      {/* Form */}
      <h2>Form Pendaftaran</h2>
      <form className="form-section">
        <input type="text" placeholder="Nama Lengkap" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Pesan Anda"></textarea>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Dashboard;
