import React from 'react';
import '../assets/scss/contactUs.scss';

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <span class="heading">
                <h1>CONTACTEZ-NOUS</h1>
                <h2>CONTACTEZ-NOUS</h2>
            </span>
            <div class="container my-0 mx-auto md:px-6">
                <section class="mb-32 text-center">
                    <div class="py-12 md:px-12">
                        <div class="container mx-auto xl:px-32">
                            <div class="grid items-center lg:grid-cols-2">
                                <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                    <div
                                        class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[#ffffff3d] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                        <form>
                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleInput90"
                                                    placeholder="Name" />
                                                <label
                                                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                    for="exampleInput90"
                                                >Nom
                                                </label>
                                            </div>
                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                <input
                                                    type="email"
                                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleInput91"
                                                    placeholder="Email address" />
                                                <label
                                                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                    for="exampleInput91"
                                                >Address email
                                                </label>
                                            </div>
                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                <textarea
                                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    placeholder="Your message"></textarea>
                                                <label
                                                    for="exampleFormControlTextarea1"
                                                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                >Message</label
                                                >
                                            </div>
                                            <input
                                                type="submit" value="Envoyer" />
                                        </form>
                                    </div>
                                </div>
                                <div class="md:mb-12 lg:mb-0">
                                    <div
                                        class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                                        <iframe
                                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Villa MAHI Lot II U 89 Bis E, Cité Planton, Antananarivo 101&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                            class="absolute left-0 top-0 h-full w-full rounded-lg"
                                            frameborder="0"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;