import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchAPI } from "../lib/api";
import { fetcher } from '../lib/api_fetcher';
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const Artikel = ({artikel, latest, kategori}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body' id='artikel-main'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='fw-bold'>Berita Seputar JTK Polban</h3>
                    {artikel.data.map((data, i) => {
                        return (
                            <div key={data.attributes.id} className="card mt-4 mb-4">
                                <Image
                                    src={getStrapiMedia(data.attributes.banner_konten)}
                                    width={1920}
                                    height={1080}
                                    layout='intrinsic'
                                    alt="Banner Artikel"
                                />
                                <div className="card-body p-5">
                                    <h4 className='fw-bold'>{data.attributes.judul_konten}</h4>
                                    <ReactMarkdown className='my-4'>
                                        {data.attributes.body_excerpt}
                                    </ReactMarkdown>
                                    <button type="button" className="btn btn-blue">Baca Selengkapnya</button>
                                </div>

                            </div>
                        );
                    })}
                    {/* <div id='pagination-btn'>
                        <button
                          className="btn btn-blue me-2 page-btn"
                          disabled={artikel.meta.pagination.page === 1}>
                            Previous
                        </button>
                        <button
                          className="btn btn-blue me-2 page-btn"
                          disabled={artikel.meta.pagination.page === artikel.meta.pagination.pageCount}>
                            Next
                        </button>
                    </div> */}
                </div>
                <div className='col-4'>
                    <div className='artikel-sideNav mt-5 ms-3'>
                        <div className='sidenav-section'>
                            <span className='fw-bold'>Berita Terbaru</span>
                            <div className='my-2'>
                                {latest.data.map((data, i) => {
                                    return(
                                        <div key={data.attributes.id} className='row bb-1-gray py-2'>
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
                                        <div key={data.attributes.id} className='py-3 bb-1-gray'>
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

export async function getServerSideProps() {
    const artikel = await fetchAPI("/beritas", {
        populate: "*",
        sort: ['createdAt:desc']
    });

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
        props: {artikel: artikel, latest: latestArtikel, kategori: kategori}
    }
}

export default Artikel