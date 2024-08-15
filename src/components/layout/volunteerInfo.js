import Image from "next/image"
export default function VolunteerInfo () {
    return(
        <div className="volunteer-info">
            <h2>Volunteer Information</h2>
            <Image src="/org1.jpg" alt="Volunteer" width={300} height={300} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc ac dolor rutrum faucibus. Nulla facilisi. Nulla facilisi.</p>
        </div>
    )
}