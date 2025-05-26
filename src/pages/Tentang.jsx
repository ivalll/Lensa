import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Tentang = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <section className="text-center mb-5">
        <h1 className="fw-bold">Tentang UKM LENSA</h1>
        <p className="text-muted">
          Wadah bagi mahasiswa yang memiliki minat di bidang fotografi dan
          videografi.
        </p>
      </section>

      {/* Sejarah, Moto, dan Misi */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-4 bg-light rounded shadow-sm">
            <h3 className="fw-bold">Sejarah</h3>
            <p>
              UKM Lensa didirikan pada tahun 2010 sebagai wadah bagi mahasiswa
              yang memiliki minat di bidang fotografi dan videografi. Sejak awal
              berdiri, UKM Lensa telah menjadi tempat berkembangnya kreativitas
              dan keterampilan anggota dalam mendokumentasikan berbagai kegiatan
              kampus.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 bg-light rounded shadow-sm">
            <h3 className="fw-bold">Moto</h3>
            <blockquote className="blockquote">
              <p className="mb-0 fst-italic">
                "Mengabadikan Momen, Menginspirasi Generasi."
              </p>
            </blockquote>
            <h3 className="mt-4 fw-bold">Misi</h3>
            <ul className="list-unstyled">
              <li>
                📷 Meningkatkan keterampilan fotografi dan videografi anggota.
              </li>
              <li>🎬 Mendokumentasikan kegiatan kampus secara profesional.</li>
              <li>🤝 Membangun komunitas kreatif yang solid dan inspiratif.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Galeri Kegiatan */}
      <section className="mt-5">
        <h3 className="text-center fw-bold">Galeri Kegiatan</h3>
        <p className="text-center text-muted">
          Dokumentasi berbagai kegiatan yang telah dilakukan oleh UKM LENSA
        </p>
        <div className="row g-4">
          {Array(6)
            .fill()
            .map((_, idx) => (
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card shadow-sm">
                  <img
                    src={`https://source.unsplash.com/random/400x300?sig=${idx}`}
                    className="card-img-top img-fluid"
                    alt={`Kegiatan ${idx + 1}`}
                  />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Tentang;
