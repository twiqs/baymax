import Image from "next/image";
import Link from "next/link";

export default function Works() {
    return (
        <section class="works">
        <div class="container">
            <h2 class="sec_tit works_tit">Наша миссия</h2>
            <p class="sec_p">Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis.</p>
            <div class="works_cards">
                <div class="works_card">
                    <div class="card">
                        <i class="works_ic"><span class="material-symbols-outlined">
                            home</span>
                        </i>
                        <h2 class="works_tit">Find property</h2>
                        <p class="works_p">Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
                    </div>
                </div>
                <div class="works_card"  data-text="receipt">
                    <div class="card">
                        <i class="works_ic"><span class="material-symbols-outlined">
                            receipt
                        </span></i>
                        <h2 class="works_tit">Make a deal</h2>
                        <p class="works_p">Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.</p>
                    </div>
                </div>
                
                <div class="works_card"  data-text="key">
                    <div class="card">
                        <i class="works_ic"><span class="material-symbols-outlined">
                            key
                        </span></i>
                        <h2 class="works_tit">Get your keys</h2>
                        <p class="works_p">Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat.</p>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </div>
    </section>
    );
}
