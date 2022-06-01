import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProfilLulusanD3 = ({profilProdiD3}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='fw-bold'>{profilProdiD3.attributes.judul_konten}</h3>
                    <Image
                        className='mt-3'
                        src={getStrapiMedia(profilProdiD3.attributes.banner_konten)}
                        width={1920}
                        height={1080}
                        layout='intrinsic'
                        alt="Banner profil jurusan"
                    />
                    <ReactMarkdown className='mt-3 lh-lg' remarkPlugins={remarkGfm}>
                        {profilProdiD3.attributes.profil_lulusan}
                    </ReactMarkdown>
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
    const profilProdiD3 = await fetchAPI("/profil-prodi-d3", {
        populate: "*"
    });

    return {
        props: {profilProdiD3: profilProdiD3.data}
    }
}

export default ProfilLulusanD3;