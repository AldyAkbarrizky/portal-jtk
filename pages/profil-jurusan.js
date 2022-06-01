import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const ProfilJurusan = ({profil}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='fw-bold'>{profil.attributes.judul_konten}</h3>
                    <Image
                        className='mt-3'
                        src={getStrapiMedia(profil.attributes.banner_konten)}
                        width={1920}
                        height={1080}
                        layout='intrinsic'
                        alt="Banner profil jurusan"
                    />
                    <ReactMarkdown className='mt-3 lh-lg'>
                        {profil.attributes.body_konten}
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
    const profilJurusan = await fetchAPI("/profil-jurusan", {
        populate: "*"
    });

    return {
        props: {profil: profilJurusan.data}
    }
}

export default ProfilJurusan