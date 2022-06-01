import Image from 'next/image'
import Footer from '../../components/footer';
import Header from '../../components/header';
import SideNav  from '../../components/sidenav';
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from '../../lib/media';
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
                <div className='fw-bold mb-2'><Link href='/profil-dosen'><a>&larr; Kembali ke daftar dosen</a></Link></div>
                    <div className='mb-3'>
                        <h3 className='fw-bold'>{profil.attributes.nama}</h3>
                    </div>
                    <div className='mb-3'>
                        <Image
                            src={getStrapiMedia(profil.attributes.profile_picture)}
                            width={280}
                            height={380}
                            layout='intrinsic'
                            alt="Banner Artikel"
                        />
                    </div>
                    <div>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className='dark-gray-text pb-2' style={{width: 200}}>Nama</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.nama}</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Perguruan Tinggi</td>
                                    <td className='fw-bold pb-2'>Politeknik Negeri Bandung</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Program Studi</td>
                                    <td className='fw-bold pb-2'>Teknik Informatika</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Jenis Kelamin</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.jenis_kelamin}</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Jabatan Fungsional</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.jabatan_fungsional}</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>KBK</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.kbk.data.attributes.nama_kbk}</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Pendidikan Tertinggi</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.pendidikan_tertinggi}</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Status Ikatan Kerja</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.status_ikatan_kerja}</td>
                                </tr>
                                <tr>
                                    <td className='dark-gray-text pb-2'>Status Aktivitas</td>
                                    <td className='fw-bold pb-2'>{profil.attributes.status_aktivitas}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h5 className='fw-bold my-3'>Expertise</h5>
                        <ol>
                        {profil.attributes.expertise.data.map((data, i) => {
                            return(
                                <li key={data.id} className='lh-lg'>
                                    {data.attributes.nama_expertise}
                                </li>
                            )
                        })}
                        </ol>
                    </div>
                    <div>
                        <h5 className='fw-bold my-3'>Riwayat Pendidikan</h5>
                        <ReactMarkdown className='lh-lg'>
                            {profil.attributes.riwayat_pendidikan}
                        </ReactMarkdown>
                    </div>
                    <div>
                        <h5 className='fw-bold my-3'>Daftar Publikasi</h5>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th className='text-center' style={{width: 10}}>No</th>
                                    <th className='text-center' style={{width: 500}}>Judul</th>
                                    <th className='text-center' style={{width: 75}}>Tahun</th>
                                </tr>
                            </thead>
                            <tbody>
                                {profil.attributes.publikasis.data.map((data, i) => {
                                    return (
                                        <tr key={data.id}>
                                            <td className='text-center'>{i + 1}</td>
                                            <td>{data.attributes.judul_publikasi}</td>
                                            <td className='text-center'>{data.attributes.tahun_publikasi}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
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

export async function getServerSideProps( context ) {
    const profilDosen = await fetchAPI("/profil-dosens", {
        populate: "*",
        filters: {
            id: context.params.id
        }
    });

    return {
        props: {profil: profilDosen.data[0]}
    }
}

export default ProfilDosen