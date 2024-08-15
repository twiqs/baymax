import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section class="main">
            <div class="container">
                <div class="main_info flex">
                    <div class="main_info_info">
                        <h2 class="main_tit">Our people <br /> Meet our Squad</h2>
                        <p class="sec_txt main_txt">Our team may be small, but our reach is big. The Girl Up staff is innovative, experienced, and passionate. We are deeply committed to working towards a world where all girls are empowered!

</p>
                        <button class="transition section_btn main_btn animation">Podrobnee</button>

                    </div>
                    <div className="main_robo animation-truck-car " style={{ transform: 'translateX(99.6667px)' }}>

                        <img className="robo animation" src={'/baymaxsvg.svg'} objectFit={'contain'} alt={'pizza'} />
                    </div>


                </div>
            </div>
        </section>
    );
}
