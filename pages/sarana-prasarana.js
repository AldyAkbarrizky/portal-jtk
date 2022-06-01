import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const SaranaPrasarana = ({fasilitas}) => {
  console.log(fasilitas)
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3>Sarana dan Prasarana</h3>
                    <div className='row'>
                        {fasilitas.map((data, i) => {
                            return(
                                <div key={data.attributes.id} className='col-6'>
                                    <Image
                                        className='mt-3'
                                        src={getStrapiMedia(data.attributes.gambar_fasilitas)}
                                        width={1920}
                                        height={1366}
                                        layout='intrinsic'
                                        alt="Banner profil jurusan"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='col-4'>
                    <SideNav />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getServerSideProps() {
    const fasilitas = await fetchAPI("/sarana-prasaranas", {
        populate: "*"
    });

    return {
        props: {fasilitas: fasilitas.data}
    }
}

export default SaranaPrasarana