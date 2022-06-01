import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProfilLulusanD4 = ({profilProdiD4}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='fw-bold'>{profilProdiD4.attributes.judul_konten}</h3>
                    <Image
                        className='mt-3'
                        src={getStrapiMedia(profilProdiD4.attributes.banner_konten)}
                        width={1920}
                        height={1080}
                        layout='intrinsic'
                        alt="Banner profil jurusan"
                    />
                    <ReactMarkdown className='mt-3 lh-lg' remarkPlugins={remarkGfm}>
                        {profilProdiD4.attributes.profil_lulusan}
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
    const profilProdiD4 = await fetchAPI("/profil-prodi-d4", {
        populate: "*"
    });

    return {
        props: {profilProdiD4: profilProdiD4.data}
    }
}

export default ProfilLulusanD4;