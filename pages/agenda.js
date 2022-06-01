import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';

const Agenda = ({agenda}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='fw-bold'>Kalender Akademik</h3>
                    <Image
                        className='mt-3'
                        src={getStrapiMedia(agenda.attributes.kalender_akademik)}
                        width={1080}
                        height={1920}
                        layout='intrinsic'
                        alt="Banner profil jurusan"
                    />
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
    const agenda = await fetchAPI("/agenda", {
        populate: "*"
    });

    return {
        props: {agenda: agenda.data}
    }
}

export default Agenda