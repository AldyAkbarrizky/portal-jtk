import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const Kontak = ({kontak}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='fw-bold'>Kontak</h3>
                    <Image
                        className='mt-3'
                        src={`https://res.cloudinary.com/web-jtk/image/upload/v1653908065/Banner_Landing_Page_4764e1e7f0.jpg`}
                        width={1920}
                        height={1080}
                        layout='intrinsic'
                        alt="Placeholder untuk map"
                    />
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
    const kontak = await fetchAPI("/kontak", {
        populate: "*"
    });

    return {
        props: {kontak: kontak.data}
    }
}

export default Kontak