export default function Footer() {
    return(
        <footer>
        <div class="container">
            <div class="footer_big flex">
                <div class="f_left">
                    <div class="f_logo">
                        Baymax
                    </div>
                    <div class="f_tit">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris.</div>
                </div>
                <div class="f_center flex">
                    <div class="f_c1">
                        <h3 class="b_tit">Menu</h3>
                        <ul class="f_list">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Blog post</a></li>
                            <li><a href="">Donate</a></li>
                            <li><a href="">Donate Single</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    {/* <div class="f_c2">
                        <h3 class="b_tit">Utility Pages</h3>
                        <ul class="f_list">
                            <li><a href="">Start here</a></li>
                            <li><a href="">Styleguide</a></li>
                            <li><a href="">Password Protected</a></li>
                            <li><a href="">404 Not found</a></li>
                            <li><a href="">Licenses</a></li>
                            <li><a href="">Changelog</a></li>
                        </ul>
                    </div> */}
                </div>
                <div class="f_right">
                    <div class="f_orange">
                        <div class="vec"><svg xmlns="http://www.w3.org/2000/svg" width="260" height="171"
                                viewBox="0 0 260 171" fill="none">
                                <path opacity="0.18" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M68.6487 -207.926C128.423 -210.098 176.482 -163.998 212.458 -116.195C246.944 -70.373 269.221 -14.5016 256.273 41.3751C243.373 97.0442 200.937 141.991 147.781 162.917C98.8826 182.166 47.4415 163.675 -0.664452 142.522C-51.9041 119.99 -111.788 97.1553 -125.324 42.8248C-139.032 -12.1948 -97.3221 -61.358 -62.633 -106.201C-26.9915 -152.275 10.4513 -205.812 68.6487 -207.926Z"
                                    fill="white" />
                            </svg></div>
                        <div class="right_tit">Join us and let’s make a better world, today</div>
                        <div class="btns">
                            <button class="btn1">Donate now</button>
                            <button class="btn2">More ways to help</button>
                        </div>
                        <div class="vect"><svg xmlns="http://www.w3.org/2000/svg" width="206" height="204"
                                viewBox="0 0 206 204" fill="none">
                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M196.649 0.0738093C256.423 -2.09778 304.482 44.0019 340.458 91.805C374.944 137.628 397.221 193.499 384.273 249.374C371.373 305.044 328.937 349.991 275.781 370.917C226.883 390.166 175.442 371.675 127.335 350.522C76.0959 327.99 16.2119 305.155 2.67555 250.825C-11.0323 195.805 30.6779 146.642 65.367 101.799C101.008 55.7254 138.451 2.18812 196.649 0.0738093Z"
                                    fill="white" />
                            </svg></div>
                    </div>
                </div>
            </div>
            
            <div class="footer_buttom">
                <div class="big_butt">
                    {/* <div class="butt_left">
                        <div class="but_text">Copyright © Philanthropy X | Designed by</div>
                        <div class="but_txt"><a href="#">BRIX Templates</a></div>
                        <div class="but_text">- Powered by</div>
                        <div class="but_txt"><a href="#">Webflow</a></div>
                    </div> */}
                    <div class="but_right flex">
                        <div class="footer_icons"><a href="https://www.whatsapp.com/?lang=ru_RU"></a></div>
                        <div class="footer_icons"><a href="https://www.whatsapp.com/?lang=ru_RU"></a></div>
                        <div class="footer_icons"><a href="https://www.facebook.com/?locale=ru_RU"></a></div>
                        <div class="footer_icons"><a href="https://ok.ru/"></a>
                        </div>
                        <div class="footer_icons"><a href="https://www.youtube.com/"></a>
                        </div>
                        <div class="footer_icons"><a href="https://www.tiktok.com/"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}