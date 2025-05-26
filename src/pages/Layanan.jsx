import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Camera from "../assets/images/kamera.png";
import Tripod from "../assets/images/tripod.png";
import Photographer from "../assets/images/photographer.png";
import Meetup from "../assets/images/meetup.jpg";
import CustomerService from "../assets/images/customer-service.png";
import { PropagateLoader } from "react-spinners";
import SplitText from "../components/SplitText";
import "../index.css";

export default function Layanan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbzGolSqSHp-hI-0lnnqg55E4n3Lt2xki4Twu2_5SZDGWt7F9UaxPVUxPXopifEUCprh/exec"
      )
      .then((response) => {
        // Pastikan response.data berbentuk array
        if (response.data && Array.isArray(response.data)) {
          setData(response.data);
          // console.log("Data diterima:", response.data);
        } else {
          console.error("Format data tidak sesuai:", response.data);
        }
        setLoading(false);
      })
      .catch((error) => console.error("Failed to fetch data:", error));
  }, []);

  // Karena pada Apps Script key diubah menjadi lowercase,
  // properti yang tersedia: nama, foto, harga, satuan, deskripsi, kalangan, kategori
  const Section = ({ title, description, items, image }) => (
    <section className="mb-5" id="services">
      <div className="text-center mb-4">
        <img src={image} alt={title} className="mb-3" height="96" width="96" />
        <h2 className="text-orange">{title}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="row">
        {items.map((item, idx) => (
          <div className="col-sm-6 col-lg-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              {item.foto && (
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="card-img-top img-fluid rounded"
                  style={{ height: "200px" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title text-orange">{item.nama}</h5>
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify" }}
                >
                  {item.deskripsi}
                </p>
                <div className="fw-bold text-orange">
                  Rp {parseInt(item.harga, 10).toLocaleString()}{" "}
                  <span className="text-secondary">{item.satuan}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const filterItems = (kalangan, kategori) =>
    data.filter(
      (item) =>
        item.kalangan?.toLowerCase() === kalangan.toLowerCase() &&
        item.kategori?.toLowerCase() === kategori.toLowerCase()
    );

  return (
    <div className="bg-light text-dark min-vh-100">
      <header className="text-center text-white bg-dark py-5 mb-5">
        <img
          src={CustomerService}
          alt="Customer Service"
          height="96"
          className="mb-3"
        />
        <h1 className="text-orange">Layanan UKM LENSA</h1>
        <p className="mx-3 text-justify ">
          Kami menyediakan berbagai layanan terbaik untuk kebutuhan fotografi
          dan videografi Anda. Temukan paket terbaik yang sesuai dengan
          kebutuhan dan budget Anda.
        </p>
        {/* <a href="#services" className="btn btn-light mt-3">
          Jelajahi Katalog{" "}
          <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
        </a> */}
      </header>

      <div className="container">
        {loading ? (
          <div className="d-flex flex-column justify-content-center align-items-center vh-25">
            <PropagateLoader color="#F4631E" loading={loading} size={30} />
            <br />
            <SplitText
              text="Loading layanan..."
              className="text-2xl font-semibold text-center mt-4"
              delay={130}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        ) : (
          <>
            <Section
              image={Camera}
              title="Paket Kamera Umum"
              description="Paket kamera dengan kualitas tinggi untuk acara resmi, dokumentasi, atau produksi konten."
              items={filterItems("Umum", "Kamera")}
            />
            <Section
              image={Camera}
              title="Paket Kamera Mahasiswa"
              description="Solusi hemat dan fleksibel untuk mahasiswa yang ingin mendokumentasikan kegiatan kampus atau pribadi."
              items={filterItems("Mahasiswa", "Kamera")}
            />
            <Section
              image={Tripod}
              title="Paket Perlengkapan Fotografi"
              description="Dari lighting hingga tripod—lengkapi pengalaman fotografi Anda dengan perlengkapan terbaik."
              items={filterItems("Umum", "Perlengkapan").concat(
                filterItems("Mahasiswa", "Perlengkapan")
              )}
            />
            <Section
              image={Photographer}
              title="Paket Sewa Photographer"
              description="Tim fotografer profesional kami siap mengabadikan momen terbaik Anda dengan hasil terbaik."
              items={filterItems("Umum", "Jasa").concat(
                filterItems("Mahasiswa", "Jasa")
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}
