import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer';
import Header from '../../components/header';
import { fetchAPI } from "../../lib/api";
import { fetcher } from '../../lib/api_fetcher';
import { getStrapiMedia } from '../../lib/media';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Artikel = ({artikel, latest, kategori}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body' id='artikel-main'>
            <div className='row'>
                <div className='col-8'>
                    <div className='fw-bold mb-2'><Link href='/artikel'><a>&larr; Kembali ke daftar artikel</a></Link></div>
                    <h3 className='fw-bold'>Berita Seputar JTK Polban</h3>
                    <div className="card mt-4 mb-4">
                        <Image
                            src={getStrapiMedia(artikel.attributes.banner_konten)}
                            width={1920}
                            height={1080}
                            layout='intrinsic'
                            alt="Banner Artikel"
                        />
                        <div className="card-body p-5">
                             <h4 className='fw-bold'>{artikel.attributes.judul_konten}</h4>
                            <ReactMarkdown className='my-4'>
                                {artikel.attributes.body_konten}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='artikel-sideNav mt-5 ms-3'>
                        <div className='sidenav-section'>
                            <span className='fw-bold'>Berita Terbaru</span>
                            <div className='my-2'>
                                {latest.data.map((data, i) => {
                                    return(
                                        <div key={data.id} className='row bb-1-gray py-2'>
                                            <div className='col-3'>
                                            <Image
                                                src={getStrapiMedia(data.attributes.banner_konten)}
                                                width={1920}
                                                height={1080}
                                                layout='intrinsic'
                                                alt="Banner Artikel"
                                            />
                                            </div>
                                            <div className='col-9'>
                                                <span className='font-12'>{data.attributes.judul_konten}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='sidenav-section'>
                            <span className='fw-bold'>Kategori Berita</span>
                            <div className='my-3'>
                                {kategori.data.map((data, i) => {
                                    return(
                                        <div key={data.id} className='py-3 bb-1-gray'>
                                            <span>{data.attributes.nama_kategori}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getServerSideProps( context ) {
    const artikel = await fetchAPI("/beritas", {
        populate: "*",
        filters: {
            slug_artikel: context.params.slug
        }
    });

    console.log(artikel);

    const latestArtikel = await fetchAPI("/beritas", {
        populate: "*",
        sort: ['createdAt:desc'],
        pagination: {
            start: 0,
            limit: 3
        }
    });

    const kategori = await fetchAPI("/kategoris", {
        populate: "*"
    });

    return {
        props: {artikel: artikel.data[0], latest: latestArtikel, kategori: kategori}
    }
}

export default Artikel