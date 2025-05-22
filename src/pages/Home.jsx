import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Camera from "../assets/images/kamera.png";
import Tripod from "../assets/images/tripod.png";
import Photographer from "../assets/images/photographer.png";
import Meetup from "../assets/images/meetup.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-dark text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-5 bg-dark min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://ugc.production.linktr.ee/04ff6ae5-a5ca-460c-ac78-afc80f00f0e0_dcf5ddb046d2cf67a25df08f30119ffd-tplv-tiktokx-cropcenter-1080-1080.jpeg?io=true&size=avatar-v3_0"
          alt=""
          className="rounded-circle mb-3"
          style={{ height: "128px", width: "128px" }}
        />
        <h2 className="display-4 fw-bold mb-2">UKM LENSA</h2>
        <p className="lead mb-4">
          Unit Kegiatan Mahasiswa | Universitas Ahmad Dahlan
        </p>
        <div className="d-flex justify-content-center gap-3 mb-4 fs-4">
          <a
            href="https://www.instagram.com/lensauad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@lensauad_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </section>

      {/* Tentang UKM */}
      <section
        className="container text-center py-5"
        id="section2"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          src={Meetup}
          alt=""
          className="rounded mb-4"
          style={{ height: "200px", width: "200px" }}
        />
        <h3 className="h2 fw-bold mb-3">Kami adalah UKM LENSA</h3>
        <p className="text-white mb-4">
          Tempat mahasiswa berbakat mengasah kreativitas dalam bidang fotografi,
          videografi, desain grafis, dan dunia multimedia. Kami percaya bahwa
          setiap momen layak untuk ditangkap dan dibagikan dengan dunia.
        </p>
      </section>

      {/* Layanan */}
      <section className="bg-light text-dark py-5">
        <div className="container">
          <h3
            className="text-center display-6 fw-bold mb-5"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Layanan Kami
          </h3>
          <div className="row text-center">
            {/* Item 1 */}
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card h-100 shadow">
                <div className="card-body d-flex flex-column align-items-center">
                  <img
                    src={Camera}
                    alt=""
                    className="mb-3"
                    style={{ height: "96px", width: "96px" }}
                  />
                  <h5 className="card-title">Penyewaan Kamera Profesional</h5>
                  <p className="card-text text-muted">
                    Sediakan berbagai jenis kamera DSLR & mirrorless untuk
                    menunjang karya visual.
                  </p>
                  <a href="/layanan/kamera" className="btn btn-dark mt-auto">
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card h-100 shadow">
                <div className="card-body d-flex flex-column align-items-center">
                  <img
                    src={Tripod}
                    alt=""
                    className="mb-3"
                    style={{ height: "96px", width: "96px" }}
                  />
                  <h5 className="card-title">
                    Penyewaan Perlengkapan Multimedia
                  </h5>
                  <p className="card-text text-muted">
                    Tripod, lighting, dan perlengkapan lain untuk mendukung
                    produksi kontenmu.
                  </p>
                  <a
                    href="/layanan/perlengkapan"
                    className="btn btn-dark mt-auto"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card h-100 shadow">
                <div className="card-body d-flex flex-column align-items-center">
                  <img
                    src={Photographer}
                    alt=""
                    className="mb-3"
                    style={{ height: "96px", width: "96px" }}
                  />
                  <h5 className="card-title">Jasa Fotografi & Videografi</h5>
                  <p className="card-text text-muted">
                    Abadikan momen spesial dengan tim dokumentasi profesional
                    kami.
                  </p>
                  <a href="/layanan/fotografi" className="btn btn-dark mt-auto">
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pengurus Inti */}
      <section
        className="container text-center py-5"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h3 className="h3 fw-bold mb-4">Pengurus Inti</h3>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/images/jamaludin.jpg"
              className="rounded-circle mb-2"
              style={{ width: "128px", height: "128px", objectFit: "cover" }}
            />
            <p className="fw-semibold mb-0">Ketua</p>
            <p className="text-muted small">Raniyah Putri</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/images/jamaludin.jpg"
              className="rounded-circle mb-2"
              style={{ width: "128px", height: "128px", objectFit: "cover" }}
            />
            <p className="fw-semibold mb-0">Wakil</p>
            <p className="text-muted small">Dani Pratama</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-dark text-center py-5"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h3 className="h4 fw-bold mb-3">Anda Penasaran?</h3>
        <p className="text-muted mb-4">Cari tahu yuk, mengenai UKM LENSA.</p>
        <a href="/about" className="btn btn-light fw-semibold">
          Tentang Kami{" "}
          <i className="fas fa-arrow-up-right-from-square ms-2"></i>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-muted small py-3 border-top">
        © {new Date().getFullYear()} UKM LENSA - Universitas Ahmad Dahlan
      </footer>
    </div>
  );
}
