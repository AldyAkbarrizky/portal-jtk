import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const TracerStudy = () => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h3>Tracer Study</h3>
                    <div className='row mb-3'>
                        <div className='col-4'>
                            <select className="form-select" aria-label="Semester D-3">
                                <option selected>D-4 Teknik Informatika</option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <select className="form-select" aria-label="Semester D-3">
                                <option selected>2022</option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <select className="form-select" aria-label="Semester D-3">
                                <option selected>Fresh Graduate</option>
                            </select>
                        </div>
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

export default TracerStudy