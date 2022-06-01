import React from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';

const SideNav = () => {
    return(
        <>
            <div id="sidenav">
                <div className="sidenav-section">
                    <div className="sidenav-header">
                        Tentang JTK
                    </div>
                    <div className="sidenav-body">
                        <div className="sidenav-body-list">
                            <Link href="/profil-jurusan"><a className="blue-text">Profil Jurusan</a></Link>
                        </div>
                        <div className="sidenav-body-list">
                            <Link href="/profil-d3"><a className="blue-text">Profil Prodi D-3 Teknik Informatika</a></Link>
                        </div>
                        <div className="sidenav-body-list">
                            <Link href="/profil-d4"><a className="blue-text">Profil Prodi D-4 Teknik Informatika</a></Link>
                        </div>
                    </div>
                </div>
                <div className="sidenav-section">
                    <div className="sidenav-header">
                        Profil Pegawai
                    </div>
                    <div className="sidenav-body">
                        <div className="sidenav-body-list">
                            <Link href="/profil-dosen"><a className="blue-text">List Dosen</a></Link>
                        </div>
                        <div className="sidenav-body-list">
                            <Link href="/profil-tenaga-kependidikan"><a className="blue-text">List Tenaga Kependidikan</a></Link>
                        </div>
                    </div>
                </div>
                <div className="sidenav-section">
                    <div className="sidenav-header">
                        Kurikulum
                    </div>
                    <div className="sidenav-body">
                        <div className="sidenav-body-list">
                            <Link href="/kurikulum-d3"><a className="blue-text">Kurikulum D-3</a></Link>
                        </div>
                        <div className="sidenav-body-list">
                            <Link href="/kurikulum-d4"><a className="blue-text">Kurikulum D-4</a></Link>
                        </div>
                        <div className="sidenav-body-list">
                            <Link href="/profil-lulusan-d3"><a className="blue-text">Profil Lulusan D-3</a></Link>
                        </div>
                        <div className="sidenav-body-list">
                            <Link href="/profil-lulusan-d4"><a className="blue-text">Profil Lulusan D-4</a></Link>
                        </div>
                    </div>
                </div>
                <div className="sidenav-section">
                    <div className="sidenav-header">
                        Agenda
                    </div>
                    <div className="sidenav-body">
                        <div className="sidenav-body-list">
                            <Link href="/agenda"><a className="blue-text">Info Kalender Akademik</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav;