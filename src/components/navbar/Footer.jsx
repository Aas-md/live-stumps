import './Footer.css'
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {

    return (
        <div className='footer-box'>
            <div className='footer'>

                <div className="quic-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Live Scores</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li><a href="#">Results</a></li>
                        <li><a href="#">Rankings</a></li>
                    </ul>
                </div>

                <div className='teams'>
                    <h3>Teams</h3>
                    <ul>
                        <li><a href="#">India</a></li>
                        <li><a href="#">Australia</a></li>
                        <li><a href="#">England</a></li>
                        <li><a href="#">Pakistan</a></li>
                    </ul>
                </div>

                <div className="social">
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="#"><FaLinkedin /> &nbsp; LinkedIn</a></li>
                        <li><a href="#"><FaInstagram /> &nbsp;Instagram</a></li>
                        <li><a href="#"><FaFacebook /> &nbsp;Facsebook</a></li>
                    </ul>
                </div>

            </div>

            <hr />
            <div className='copy-right'>
                <p>© 2023 LiveStumps. All rights reserved.</p>
            </div>
        </div>
    )
}