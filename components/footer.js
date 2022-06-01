import React from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container-fluid" id="footer-top">
                <div className="row">
                    <div className="col">
                        <div className="footer-top-header">
                            Akreditas Program Studi
                        </div>
                        <div className="footer-top-body mt-3">
                            <table className="table">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="nama-prodi">
                                            PRODI D3 TEKNIK INFORMATIKA
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=".bot-table akreditasi">A</td>
                                        <td className=".bot-table tenggat px-1">terakreditasi tahun 2018 berlaku hingga 09-07-2023</td>
                                    </tr>
                                </tbody> 
                            </table>
                            <table className="table">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="nama-prodi">
                                            PRODI D4 TEKNIK INFORMATIKA
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=".bot-table akreditasi">A</td>
                                        <td className=".bot-table tenggat px-1">terakreditasi tahun 2018 berlaku hingga 21-10-2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-top-header">
                            Kontak
                        </div>
                        <div className="footer-top-body mt-2">
                            <p className="pe-5 white-text">
                                Jurusan Teknik Komputer dan Informatika<br/>
                                Politeknik Negeri Bandung
                            </p>
                            <p className="pe-5 white-text">
                                Jl. Gegerkalong Hilir, Ds. Ciwaruga Bandung 40559, Kotak Pos 1234 Jawa Barat
                            </p>
                            <p className="pe-5 white-text">
                                Telp. (022) 2013789 ext. 301 
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-top-header">
                            Akademik
                        </div>
                        <div className="footer-top-body mt-2">
                            <Link href="/"><a className="link-a">Himpunan Mahasiswa Komputer</a></Link><br/>
                            <Link href="/"><a className="link-a">Portal Akademik Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">Kemahasiswaan Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">PMDK Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">SMB Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">JPAC Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">Aptikom</a></Link><br/>
                            <Link href="/"><a className="link-a">Uptime IP Publik JTK</a></Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-top-header">
                            Artikel
                        </div>
                        <div className="footer-top-body mt-2">
                            <Link href="/"><a className="link-a">PMDK Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">SMB Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">JPAC Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">Aptikom</a></Link><br/>
                            <Link href="/"><a className="link-a">Uptime IP Publik JTK</a></Link>
                            <Link href="/"><a className="link-a">Himpunan Mahasiswa Komputer</a></Link><br/>
                            <Link href="/"><a className="link-a">Portal Akademik Polban</a></Link><br/>
                            <Link href="/"><a className="link-a">Kemahasiswaan Polban</a></Link><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-text" id="footer-bot">
                © 2012—2022 Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung.
            </div>
        </div>
    )
}

export default Footer;