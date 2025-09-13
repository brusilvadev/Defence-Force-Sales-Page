import { Shield, Zap, Users, Check } from "lucide-react"

function AboutCourse() {
  return (
    <>
      <section className="w-full bg-[#080707] px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-center">
            Sobre o Curso
          </h2>

          {/* Texto principal */}
          <p className="text-xl text-white mb-10 leading-relaxed text-center md:text-left">
            Este é o mais novo lançamento da{" "}
            <span className="font-semibold">Krav Maga Defense Force</span>, trazendo a experiência das aulas presenciais para qualquer pessoa, em qualquer lugar.
          </p>

          {/* Lista de benefícios */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-[#F6BC42] text-[#4F3E11] rounded-2xl p-6 flex flex-col items-center md:items-start shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Shield className="w-10 h-10 mb-4" />
              <p className="text-lg font-semibold text-center md:text-left">
                Aprenda os movimentos básicos para autodefesa
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F6BC42] text-[#4F3E11] rounded-2xl p-6 flex flex-col items-center md:items-start shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Zap className="w-10 h-10 mb-4" />
              <p className="text-lg font-semibold text-center md:text-left">
                Descubra os primeiros golpes de resposta em situações reais
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F6BC42] text-[#4F3E11] rounded-2xl p-6 flex flex-col items-center md:items-start shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Users className="w-10 h-10 mb-4" />
              <p className="text-lg font-semibold text-center md:text-left">
                Tenha a confiança de proteger você e sua família
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção O que você vai aprender */}
      <section className="w-full bg-white px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Coluna Esquerda */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
              O que você irá aprender conosco?
            </h2>

            <ul className="space-y-5">
              {[
                "Introdução ao Krav Maga e fundamentos",
                "Movimentação básica e postura",
                "Primeiros golpes de defesa e ataque",
                "Pontos vitais e respostas rápidas",
                "Condicionamento físico e biomecânica aplicada",
                "Alongamento e prevenção de lesões",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Direita */}
          <div className="flex justify-center">
            <img
              src="/src/assets/images/luva_boxe.png"
              alt="Luva de boxe"
              width={450}
              height={450}
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCourse
