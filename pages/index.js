import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const Home = ({landingPage, news, partnership, kontak}) => {
  return (
    <>
      <Header />
      <div id="landing-page-banner" style={{backgroundImage: `url(${getStrapiMedia(landingPage.attributes.banner_konten)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div id='landing-page-title-wrapper'>
          <div className='landing-page-title'>
            <div id="title-text">
              {landingPage.attributes.judul_content}
            </div>
            <button id="title-see-more">Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
      <div className='container-fluid gray-bg'>
        <div className='row padd-200'>
          <div className='col-6 white-bg highlight-detail my-5'>
            <h1 className='fw-bold mb-4'>{landingPage.attributes.judul_highlight}</h1>
            <div className='mb-4'>
              {landingPage.attributes.body_highlight}
            </div>
            <button id="highlight-btn">Lihat Selengkapnya</button>
          </div>
          <div className='col-6 my-5 p-0' style={{backgroundImage: `url(${getStrapiMedia(landingPage.attributes.banner_highlight)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className='blue-alpha-bg'></div>
          </div>
        </div>
        <div className='padd-200'>
          <h2 className='fw-bold text-center'>JTK News</h2>
          <div className='row'>
            {news.map((data, i) => {
              return(
                <div key={data.attributes.id} className='col-4'>
                  <div className="card mt-4 mb-4">
                    <Image
                      src={getStrapiMedia(data.attributes.banner_konten)}
                      width={1920}
                      height={1080}
                      layout='intrinsic'
                      alt="Banner Artikel"
                    />
                    <div className="card-body p-5 landing-page-news">
                      <h5 className='fw-bold'>{data.attributes.judul_konten}</h5><br/>
                      <div className='lp-read-more'>
                        <button type="button" className="btn btn-blue">Baca Selengkapnya</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='padd-200'>
          <h2 className='fw-bold text-center mb-5'>Partnership</h2>
          <div className='row'>
            {partnership.map((data, i) => {
              return(
                <div key={data.attributes.id} className='col-3 mx-auto mb-5'>
                  <Image
                      src={getStrapiMedia(data.attributes.logo_perusahaan)}
                      width={480}
                      height={100}
                      layout='responsive'
                      alt="Banner Artikel"
                    />
                </div>
              )
            })}
          </div>
          <div className='join-partner'>
            <button type="button" className="btn btn-blue">Join Partnership</button>
          </div>
        </div>
        <div className='row padd-200'>
          <div className='col-6 white-bg highlight-detail my-5'>
            <h1 className='fw-bold mb-4'>Kontak</h1>
            <div className='mb-4'>
              <div id='kontak-body'>
                <div id='kontak-profil' className='my-4'>
                  Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung
                </div>
                <div id='kontak-alamat' className='mb-4'>
                  {kontak.attributes.alamat}
                </div>
                <div id='kontak-telp'>
                  Telp. {kontak.attributes.no_telp}
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 my-5 p-0' style={{backgroundImage: `url(${getStrapiMedia(landingPage.attributes.banner_highlight)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className='blue-alpha-bg'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const landingPage = await fetchAPI("/landing-page", {
      populate: "*"
  });

  const latestArtikel = await fetchAPI("/beritas", {
    populate: "*",
    sort: ['createdAt:desc'],
    pagination: {
        start: 0,
        limit: 3
    }
  });

  const partnership = await fetchAPI("/kerja-samas", {
    populate: "*"
  });

  const kontak = await fetchAPI("/kontak", {
    populate: "*"
  });

  return {
      props: {landingPage: landingPage.data, news: latestArtikel.data, partnership: partnership.data, kontak: kontak.data}
  }
}

export default Home;