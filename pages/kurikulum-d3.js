import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const KurikulumD3 = ({kurikulum}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3>Daftar Mata Kuliah {kurikulum[0].attributes.nama_prodi}</h3>
                    <div className='row mb-3'>
                        <div className='col-3'>
                            <select className="form-select" aria-label="Semester D-3">
                                <option selected>Semester {kurikulum[0].attributes.semester}</option>
                            </select>
                        </div>
                        <div className='col-3'>
                            <select className="form-select" aria-label="Semester D-3">
                                <option selected>{kurikulum[0].attributes.kurikulum.data.attributes.nama_kurikulum}</option>
                            </select>
                        </div>
                    </div>
                    <table className='table table-bordered table-kurikulum'>
                        <thead>
                            <tr>
                                <th className='text-center' id="col-id">No</th>
                                <th className='text-center' id="col-nama">Nama Matkul</th>
                                <th className='text-center' id="col-desc">Deskripsi</th>
                                <th className='text-center' id="col-sks">Total SKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kurikulum[0].attributes.mata_kuliahs.data.map((data, i) => {
                                return(
                                    <tr key={data.id}>
                                        <td className='text-center'>{i + 1}</td>
                                        <td>{data.attributes.nama_matkul}</td>
                                        <td>{data.attributes.deskripsi_matkul}</td>
                                        <td className='text-center'>{data.attributes.sks_teori + data.attributes.sks_praktikum}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
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
    const KurikulumD3 = await fetchAPI("/kurikulum-prodis", {
        populate: "*",
        filters: {
            $and: [
                {
                    semester: {
                        $eq: '1'
                    }
                },
                {
                    nama_prodi: {
                        $eq: 'D-3'
                    }
                }
            ]
        }
    });

    return {
        props: {kurikulum: KurikulumD3.data}
    }
}

export default KurikulumD3