"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowDownRight, ArrowRight, Activity, CloudSun, Droplets, MapPinned, Satellite, Thermometer, Wind, Menu, X, ShieldCheck, Waves, BrainCircuit, RadioTower, ChartNoAxesCombined } from "lucide-react";

const features = [
  {n:"01",title:"Pantau kondisi sekitar",desc:"Baca suhu udara, kelembapan, dan kecepatan angin dari satu stasiun cuaca portabel.",icon:CloudSun},
  {n:"02",title:"Lokasi lebih terarah",desc:"Tampilkan titik pengamatan pada peta melalui koordinat GPS dari perangkat.",icon:MapPinned},
  {n:"03",title:"Pahami pola cuaca",desc:"Jelajahi histori pengukuran dan amati perubahan parameter dari waktu ke waktu.",icon:ChartNoAxesCombined},
  {n:"04",title:"Lihat kecenderungan",desc:"Kembangkan prediksi berbasis data historis dengan model yang diuji dan dievaluasi.",icon:BrainCircuit},
];
const steps = [
  ["01","Sensor membaca","DS18B20, SHT20, dan anemometer mengukur parameter lingkungan."],
  ["02","ESP32 mengolah","Pembacaan sensor dirapikan dan disiapkan untuk dikirim."],
  ["03","Data terhubung","Koordinat dan hasil pengukuran ditampilkan di platform METEORA."],
  ["04","Analisis membantu","Grafik, klasifikasi, dan prediksi membantu memahami pola data."],
];
export default function LandingPage(){
 const [mobileOpen,setMobileOpen]=useState(false);
 useEffect(()=>{const nodes=document.querySelectorAll(".reveal-on-scroll");const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12});nodes.forEach(n=>observer.observe(n));return()=>observer.disconnect()},[]);
 const nav=[["Beranda","#beranda"],["Tentang","#tentang"],["Solusi","#solusi"],["Cara Kerja","#cara-kerja"],["Fitur","#fitur"]];
 return <main className="landing">
  <header className="landing-nav">
   <a href="#beranda" className="logo-lockup"><Image src="/images/meteora-logo.png" alt="Logo METEORA" width={190} height={55} priority/><span className="logo-fallback">METEORA</span></a>
   <nav className={`nav-pill ${mobileOpen?"nav-open":""}`}>{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMobileOpen(false)}>{label}</a>)}</nav>
   <Link className="nav-cta" href="/login">Masuk / Daftar <ArrowRight size={16}/></Link>
   <button className="mobile-menu" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Buka menu">{mobileOpen?<X/>:<Menu/>}</button>
  </header>
  <section id="beranda" className="hero-section">
   <div className="hero-backdrop"></div><div className="hero-grid"></div>
   <div className="hero-copy reveal-on-scroll">
    <div className="eyebrow"><span className="eyebrow-dot"/> STASIUN CUACA PORTABEL BERBASIS AIoT</div>
    <h1>Membaca cuaca.<br/><em>Memahami perubahan.</em></h1>
    <p>METEORA menghubungkan sensor lingkungan, geolokasi GPS, dan analisis data dalam satu platform untuk membantu memantau kondisi cuaca di sekitar.</p>
    <div className="hero-actions"><Link className="btn btn-primary" href="/login">Jelajahi Dashboard <ArrowRight size={17}/></Link><a className="btn btn-ghost" href="#solusi">Kenali Sistem <ArrowDownRight size={17}/></a></div>
    <div className="hero-trust"><span><ShieldCheck size={15}/> Data sensor terstruktur</span><span><MapPinned size={15}/> Berbasis lokasi</span><span><Activity size={15}/> Histori pengamatan</span></div>
   </div>
   <div className="hero-visual reveal-on-scroll" aria-label="Ilustrasi stasiun cuaca METEORA">
    <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
    <div className="weather-globe globe-spin"><div className="globe-land land-one"></div><div className="globe-land land-two"></div><div className="globe-line"></div><div className="globe-pin"><MapPinned size={24}/></div></div>
    <div className="floating-card card-temp"><div className="float-icon temp-icon"><Thermometer size={17}/></div><div><small>Suhu udara</small><strong>28.6 <i>°C</i></strong><span>Data berubah otomatis</span></div></div>
    <div className="floating-card card-humidity"><div className="float-icon humidity-icon"><Droplets size={17}/></div><div><small>Kelembapan</small><strong>76 <i>%</i></strong><span>Data berubah otomatis</span></div></div>
    <div className="floating-card card-wind"><div className="float-icon wind-icon"><Wind size={17}/></div><div><small>Kecepatan angin</small><strong>2.4 <i>m/s</i></strong><span>Data berubah otomatis</span></div></div>
    <div className="visual-caption"><span className="live-dot"/> PRATINJAU ANTARMUKA <small>SIMULASI</small></div>
   </div>
   <div className="hero-bottom-note"><span>01 / PLATFORM PENGAMATAN LINGKUNGAN</span><span>DIRANCANG UNTUK PENGUKURAN PORTABEL <ArrowDownRight size={15}/></span></div>
  </section>
  <section className="ticker"><span>MONITORING LINGKUNGAN</span><i>✳</i><span>GPS & PEMETAAN</span><i>✳</i><span>ANALISIS HISTORIS</span><i>✳</i><span>PREDIKSI BERBASIS DATA</span></section>
  <section id="tentang" className="about-section section-pad reveal-on-scroll">
   <div className="section-kicker">TENTANG METEORA <span>01 — 04</span></div>
   <div className="about-grid"><h2>Lingkungan berubah.<br/><em>Data membantu kita memahami.</em></h2><div className="about-copy"><p>METEORA adalah konsep stasiun cuaca portabel yang menggabungkan pengukuran multi-sensor dan geolokasi untuk menyajikan informasi lingkungan secara ringkas.</p><p>Dirancang sebagai prototipe akademik, METEORA dikembangkan bertahap dari pembacaan sensor, visualisasi web, hingga analisis dan prediksi yang dapat diuji.</p><a className="text-link" href="#cara-kerja">Lihat cara kerja <ArrowRight size={16}/></a></div></div>
   <div className="about-banner"><div className="banner-text"><span>VISI SISTEM</span><h3>Lebih dekat dengan kondisi nyata, lebih jelas dalam membaca data.</h3></div><div className="banner-art"><div className="banner-ring"></div><CloudSun size={88} strokeWidth={1}/><div className="banner-coordinate"><MapPinned size={15}/> PURWOKERTO, ID</div></div></div>
  </section>
  <section id="solusi" className="solutions-section section-pad reveal-on-scroll"><div className="section-kicker">SOLUSI PLATFORM <span>02 — 04</span></div><div className="center-heading"><h2>Satu sistem.<br/><em>Empat kemampuan utama.</em></h2><p>Dari pengukuran lapangan hingga pemahaman pola, dalam alur yang saling terhubung.</p></div>
   <div className="feature-grid">{features.map(f=>{const Icon=f.icon;return <article className="feature-card" key={f.n}><div className="feature-top"><span>{f.n}</span><Icon size={23}/></div><h3>{f.title}</h3><p>{f.desc}</p><div className="feature-arrow"><ArrowDownRight size={18}/></div></article>})}</div>
  </section>
  <section id="cara-kerja" className="workflow-section section-pad reveal-on-scroll"><div className="section-kicker">CARA KERJA <span>03 — 04</span></div><div className="workflow-heading"><h2>Dari sensor ke wawasan,<br/><em>melalui empat langkah.</em></h2><p>Alur yang dirancang untuk menjaga pembacaan, lokasi, dan visualisasi data tetap terhubung.</p></div>
   <div className="workflow-line">{steps.map(s=><article className="step-card" key={s[0]}><div className="step-number">{s[0]}</div><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div>
   <div className="sensor-strip"><div className="sensor-strip-title"><RadioTower size={20}/><span>RANCANGAN SENSOR</span></div><div className="sensor-chip"><Thermometer size={17}/> DS18B20 <small>Suhu</small></div><div className="sensor-chip"><Droplets size={17}/> SHT20 <small>Kelembapan</small></div><div className="sensor-chip"><Wind size={17}/> Anemometer <small>Angin</small></div><div className="sensor-chip"><Satellite size={17}/> GPS/GNSS <small>Lokasi</small></div></div>
  </section>
  <section id="fitur" className="cta-section reveal-on-scroll"><div className="cta-glow"></div><div className="cta-content"><span className="section-kicker">LANGKAH BERIKUTNYA</span><h2>Mulai jelajahi data<br/><em>bersama METEORA.</em></h2><p>Masuk ke dashboard prototipe untuk melihat rancangan monitoring, peta, histori, dan pratinjau prediksi.</p><Link className="btn btn-light" href="/login">Masuk / Daftar <ArrowRight size={17}/></Link></div><div className="cta-mark"><Image src="/images/meteora-logo.png" alt="" width={300} height={90}/><span>PORTABLE AIoT WEATHER STATION</span></div></section>
  <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Image src="/images/meteora-logo.png" alt="METEORA" width={190} height={55}/><p>Stasiun cuaca portabel untuk membaca kondisi lingkungan melalui sensor, GPS, dan analisis data.</p><span className="footer-status"><i className="live-dot"/> PROTOTIPE PENGEMBANGAN</span></div><div className="footer-col"><b>JELAJAHI</b>{nav.map(n=><a key={n[0]} href={n[1]}>{n[0]}</a>)}</div><div className="footer-col"><b>TEKNOLOGI</b><span>ESP32 & Multi-Sensor</span><span>Geolokasi GPS</span><span>Visualisasi Historis</span><span>Model Prediksi (pengembangan)</span></div><div className="footer-col"><b>AKSES</b><Link href="/dashboard/equipment">Tentang Alat</Link><Link href="/login">Masuk ke Platform</Link><a href="#solusi">Fitur Sistem</a><a href="#cara-kerja">Cara Kerja</a></div></div><div className="footer-bottom"><span>© 2026 METEORA · Prototipe akademik</span><span>Data sensor saat ini berupa simulasi yang berubah otomatis; belum terhubung ke perangkat lapangan.</span></div></footer>
 </main>
}
