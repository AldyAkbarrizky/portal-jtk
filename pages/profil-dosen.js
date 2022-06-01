import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const ProfilDosen = ({profil}) => {
    console.log(profil)
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        {profil.map((data, i) => {
                            return (
                                <div key={data.id} className='col-4'>
                                    <Link href={`/profil-dosen/${data.id}`}>
                                    <div className="card mt-4 mb-4 curs-point">
                                        <Image
                                            src={getStrapiMedia(data.attributes.profile_picture)}
                                            width={1080}
                                            height={1360}
                                            layout='intrinsic'
                                            alt="Banner Artikel"
                                        />
                                        <div className="card-body p-2 text-center">
                                            <span className='fw-bold'>{data.attributes.nama}</span><br/>
                                            <span>{data.attributes.email}</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            );
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
    const profilTendiks = await fetchAPI("/profil-dosens", {
        populate: "*"
    });

    return {
        props: {profil: profilTendiks.data}
    }
}

export default ProfilDosen