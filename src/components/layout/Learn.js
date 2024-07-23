import Image from "next/image"
export default function Learn() {
    return (
        <section className="learn">
            <div className="container">
                <h2 className="sec_tit">Чем отличается наш проект?</h2>
                <div className="learm-wrap flex">
                    <div className="learn-left">
                        <div className="learn-cards flex">
                            <div className="learn-card">
                                <span className="learn-num">01</span>
                                <div className="learn_txt">Use HDFS & Map Reduce for storing & analyzing data at scale.</div>
                            </div>

                            <div className="learn-card">
                                <span className="learn-num">02</span>
                                <div className="learn_txt">Use HDFS & Map Reduce for storing & analyzing data at scale.</div>
                            </div>

                            <div className="learn-card">
                                <span className="learn-num">03</span>
                                <div className="learn_txt">Use HDFS & Map Reduce for storing & analyzing data at scale.</div>
                            </div>
                            <div className="learn-card">
                                <span className="learn-num">04</span>
                                <div className="learn_txt">Use HDFS & Map Reduce for storing & analyzing data at scale.</div>
                            </div>
                        </div>
                    </div>
                    <div className="learn-right">
                    <div className="learn-img">
                            <img className="learn_img" src={'/learn.svg'} objectFit={'contain'} alt={'pizza'} />
                        </div>
                        <div className="border">

                        </div>
                        
                    </div>
                </div>

            </div>

        </section >
    )
}