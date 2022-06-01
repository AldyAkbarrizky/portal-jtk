import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const Galeri = ({galeri}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3>Galeri</h3>
                    <div className='row mb-3'>
                        <div className='col-4'>
                            <select className="form-select" aria-label="Semester D-3">
                                <option selected>Pertemuan Tatap Muka</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        {galeri.map((data, i) => {
                            return(
                                <div key={data.attributes.id} className='col-6'>
                                    <Image
                                        className='mt-3'
                                        src={getStrapiMedia(data.attributes.media)}
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
    const galeri = await fetchAPI("/galleries", {
        populate: "*"
    });

    return {
        props: {galeri: galeri.data}
    }
}

export default Galeri