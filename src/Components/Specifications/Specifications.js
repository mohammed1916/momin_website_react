import { Specifications } from '../../store/specifications.js'

function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}

export default function Specification() {
    var siteURLName = getURLUsername(window.location.pathname);

    return (
        <>
            {(typeof (Specifications[siteURLName]) !== 'undefined')
                ?
                <div className="bg-gray-100 pb-7">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <section id="section1" class="topOff">
                            <div class="container">
                                <div class="main-container">
                                    <div class="heading">
                                        <h1 class="text-center text-cyan-800 text-4xl pt-12">Project Specifications</h1>
                                        <p class="text-center text-cyan-500 text-2xl pt-1 font-extralight">Bringing it all together!</p>
                                    </div>


                                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">

                                        {Specifications[siteURLName].map((object, index) => (

                                            <div class={`card-${index % 5} rounded-lg p-5`}>
                                                <p class="card__title text-cyan-900 text-xl pb-3">
                                                    <a class="card__link" href="#">{object["title"]}</a>
                                                </p>
                                                <h2 class="card__description text-white">{object["description"]} </h2>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                :
                <div>
                </div>
            }
        </>
    );
}