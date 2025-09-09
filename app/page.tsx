import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, Zap, Clock, Phone, Mail, Instagram } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-xl font-bold text-foreground">Renata de Barros</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#planos" className="text-sm font-medium hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Agendar Consulta</Button>
        </div>
      </header>

      {/* Hero minimalista */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">Consultoria Personalizada</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Treinamento individualizado com acompanhamento presencial e online
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avaliação 3D, exercícios corretivos e planos mensais sob medida para você evoluir com segurança e constância.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="#planos">Conhecer os planos</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contato">Falar com a Renata</a>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden">
                <Image src="/images/renata-profile.png" alt="Renata de Barros" width={720} height={720} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encontros presenciais */}
      <section id="sobre" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Nos encontros presenciais <span className="text-primary">(duração de 1 hora)</span>
              </h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Explicação, execução e filmagem dos exercícios para consulta.</li>
              <li>• Avaliações 3D.</li>
              <li>• Sugestão de equipamentos acessíveis.</li>
              <li>• Adaptação do treino à sua rotina e ambiente (academia de rede, em casa ou no espaço do seu prédio).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tipos de programa */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Tipos de Programa</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Modalidades</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Força</li>
                  <li>• Potência</li>
                  <li>• Hipertrofia</li>
                  <li>• Resistência</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Para quem</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Atletas profissionais</li>
                  <li>• Não atletas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Modalidades de <span className="text-primary">Atendimento</span>
              </h2>
              <p className="text-xl text-muted-foreground">Escolha a opção que melhor se adapta à sua rotina</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    100% Online
                  </CardTitle>
                  <CardDescription>Flexibilidade total para treinar onde e quando quiser</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Orientações claras</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Vídeos dos exercícios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Feedbacks contínuos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Suporte direto com a Renata</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Users className="h-4 w-4 text-secondary" />
                    </div>
                    Acompanhamento Híbrido
                  </CardTitle>
                  <CardDescription>Combine online com encontros presenciais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Até 2 encontros presenciais por mês</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Otimização de resultados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Ajustes finos na execução</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Acompanhamento online completo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Conheça os <span className="text-primary">Planos</span></h2>
              <p className="text-lg text-muted-foreground">Escolha o formato que faz sentido para o seu momento</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Plano 1</CardTitle>
                  <CardDescription>
                    <span className="font-semibold">R$800</span> no 1º mês • <span className="font-semibold">R$600/mês</span> a partir do 2º
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Avaliação 3D inicial, corretivos e análise de composição corporal.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Treino personalizado mensal (aplicativo).</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">2 encontros presenciais por mês.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Acompanhamento via aplicativo.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Tabela de controle.</span></div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Plano 2</CardTitle>
                  <CardDescription><span className="font-semibold">R$520/mês</span></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">1 encontro presencial por mês.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Treino personalizado mensal (aplicativo).</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Acompanhamento via aplicativo.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Tabela de controle.</span></div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Plano 3</CardTitle>
                  <CardDescription><span className="font-semibold">R$1000/mês</span></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Avaliação 3D inicial, corretivos e análise de composição corporal.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Treino personalizado mensal.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">2 encontros presenciais com ajustes.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Acompanhamento via aplicativo.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Tabela de controle.</span></div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Plano 4</CardTitle>
                  <CardDescription><span className="font-semibold">R$350</span> (avulso)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Presencial + análise da avaliação 3D.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Apresentação dos exercícios corretivos.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Reavaliação a cada 1 ou 2 meses.</span></div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader className="pb-4">
                  <CardTitle>Plano 5</CardTitle>
                  <CardDescription><span className="font-semibold">R$300</span></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Treino personalizado mensal.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">100% online.</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1"/><span className="text-sm">Acompanhamento via aplicativo.</span></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Vamos começar?</h2>
              <p className="text-xl opacity-90 text-pretty leading-relaxed">Entre em contato agora e tire suas dúvidas. Será um prazer te atender.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="tel:+5541999217689">Ligar: (41) 99921-7689</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent" asChild>
                <a href="mailto:renatabarros1212@gmail.com">Enviar e-mail</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
                <span className="text-xl font-bold">Renata de Barros</span>
              </div>
              <p className="text-muted-foreground">
                Educadora física especializada em treinos personalizados e movimento inteligente para todos os níveis.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">(41) 99921-7689</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">renatabarros1212@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-primary" />
                  <span className="text-sm">@renatabarros</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#sobre" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </a>
                <a href="#planos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </a>
                <a href="#contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2024 Renata de Barros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
