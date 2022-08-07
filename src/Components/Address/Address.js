
import mapMarker from '../../img/icons/map-marker.png'
import phone from '../../img/icons/phone.png'
import email from '../../img/icons/email.png'

import { address } from '../../store/address.js'


function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}

export default function Address() {
    var siteURLName = getURLUsername(window.location.pathname);

    return (
        <>
            {(typeof (address[siteURLName]) !== 'undefined')
                ?
                <section id="section1">
                    <div class="card-2 rounded-2xl p-5 m-2">
                        {(typeof (address[siteURLName]) !== 'undefined')
                            ?
                            <section id="section7" class="card-2 rounded-lg p-2">
                                <div class="mt-6 flex flex-wrap flex-row justify-center">

                                    <div class="p-5 text-center">
                                        <h2 className='text-5xl font-extrabold text-cyan-900'>Momin Elan's Location</h2>
                                        <p className='text-1xl font-bold text-cyan-800'>Situated right in the heart of Bengalore.
                                        </p>
                                        <ul className='text-white font-semibold text-left'>
                                            <li class="p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="pr-3">
                                                        <img src={mapMarker} />
                                                    </div>
                                                    <div class="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                                        {address[siteURLName]["street"]}<br /> {address[siteURLName]["city"]}
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="pr-3">
                                                        <img src={phone} />
                                                    </div>
                                                    <div class="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                                        +91 98450 41161<br /> +91 99453 16717<br /> +91 90943 64248
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="pr-3">
                                                        <img src={email} />
                                                    </div>
                                                    <div class="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                                        momindevelopers@gmail.com
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <iframe
                                        src={address[siteURLName]["src"]}
                                        width="100%" height="450"
                                        allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>

                                </div>
                            </section>
                            :
                            <div>
                            </div>
                        }
                    </div>
                </section>
                :
                <div>
                </div>
            }
        </>
    );
}