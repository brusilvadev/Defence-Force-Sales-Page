import Logo from "../assets/images/Logo.png"
import BannerDesktop from "../assets/images/Banner_Desktop.png"
import BannerMobile from "../assets/images/Banner_Mobile.png"
import Button from "./Button"

function Banner() {
  return (
    <div className="relative w-full">
      {/* Imagem do banner (desktop ou mobile) */}
      <picture>
        <source media="(max-width: 768px)" srcSet={BannerMobile} />
        <img 
          src={BannerDesktop} 
          alt="Banner Krav Maga" 
          className="w-full h-auto object-cover"
        />
      </picture>

      {/* Conteúdo em cima da imagem */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 md:py-16 text-white">
        <div className="max-w-lg text-center md:text-left bg-black/40 md:bg-transparent p-4 md:p-0 rounded-lg">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-32 md:w-40 mb-6 mx-auto md:mx-0"
          />

          <p className="text-xl md:text-2xl  leading-snug mb-4">
            Aprenda a se defender de forma prática e real com o <strong>Krav Maga</strong> mesmo começando <strong>do zero</strong>
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-6">
            Curso online completo de fundamentos de defesa pessoal, com aulas explicativas, exercícios práticos e os segredos do Krav Maga
          </p>

          <Button>QUERO GARANTIR MINHA VAGA</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
