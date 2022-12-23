import Image from 'next/image';

import logo from '@/static/logo.svg'

const PrimaryNavbar = ({
    ...props
}) => {
    const baseSocialURL = '/static/socials/';

    return (
        <div {...props} className="">
            <Image 
                src={logo}
                width={55}
                height={55}
                alt="RateMyClass"
            />

            <div>
                <Image src={baseSocialURL + 'github.svg'} width={30} height={30} alt={'GitHub'} priority={true}/>
                <Image src={baseSocialURL + 'linkedin.svg'} width={30} height={30} alt={'LinkedIn'} priority={true}/>
                <Image src={baseSocialURL + 'instagram.svg'} width={30} height={30} alt={'Instagram'} priority={true}/>
            </div>

            <div>

            </div>

            <button>

            </button>
        </div>
    )
}

export default PrimaryNavbar;