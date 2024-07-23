import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section class="main">
            <div class="container">
                <div class="main_info flex">
                    <div class="main_info_info">
                        <h2 class="main_tit">Welcome to Baymax English, your premier destination for free English learning!</h2>
                        <p class="sec_txt main_txt"></p>
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
