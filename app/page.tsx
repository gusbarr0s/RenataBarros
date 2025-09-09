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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Educação Física Personalizada
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Treino Individualizado para <span className="text-primary">Todos os Níveis</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Orientação personalizada para potencializar seu treino e evolução. Com base em avaliação de movimento
                  3D e anos de experiência prática, elaboro programas sob medida respeitando seu ritmo, objetivos e
                  potencial.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Alunos Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/renata-profile.png"
                  alt="Renata de Barros - Personal Trainer"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Você Precisa de um Treino que <span className="text-primary">Funcione para Você</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Chega de treinos genéricos! Aqui, o foco é em movimento inteligente, performance com propósito e
                autonomia para você evoluir com consistência dentro ou fora da academia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Avaliação Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Análise detalhada do seu movimento, objetivos e necessidades específicas para criar um plano
                    realmente sob medida.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Flexibilidade Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Treine no seu ritmo, no seu espaço, com acompanhamento profissional de qualidade, seja você atleta
                    ou iniciante.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Suporte Contínuo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Orientações claras, vídeos dos exercícios, feedbacks contínuos e suporte direto para dúvidas e
                    ajustes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Total Body Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Metodologia Exclusiva
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Treino <span className="text-primary">Total Body</span>
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Um treino que ativa a parte superior e inferior do corpo na mesma sessão. Perfeito para quem quer
                  otimizar o tempo e melhorar o condicionamento de forma equilibrada.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Além da estética, o Total Body melhora:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Força para o dia a dia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Controle corporal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Postura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Concentração</span>
                  </div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-primary font-semibold">E o melhor: o treino é dinâmico e nada repetitivo!</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Tipos de Programa</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Modalidades</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Força</li>
                      <li>• Hipertrofia</li>
                      <li>• Resistência</li>
                      <li>• Potência</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Público</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Atletas profissionais</li>
                      <li>• Atletas amadores</li>
                      <li>• Não atletas</li>
                      <li>• Todos os níveis</li>
                    </ul>
                  </div>
                </div>
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

      {/* Planos Section */}
      <section id="planos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Conheça os <span className="text-primary">Planos</span>
              </h2>
              <p className="text-xl text-muted-foreground">Escolha o plano ideal para seus objetivos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Mais Completo</Badge>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl">Plano Premium</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">R$ 1.000</div>
                    <div className="text-muted-foreground">/mês</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Avaliação 3D mensal com ajustes dos corretivos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">2 encontros presenciais com ajustes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Acompanhamento online e ajustes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Tabela de controle personalizada</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-6">Escolher Plano Premium</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Plano Avulso</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">R$ 350</div>
                    <div className="text-muted-foreground">pagamento único</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Presencial + análise da avaliação</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Apresentação dos exercícios corretivos online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Reavaliação a cada 1 ou 2 meses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Presencial + análise e exercícios corretivos online</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    Escolher Plano Avulso
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Pronto para Transformar seu Treino?</h2>
              <p className="text-xl opacity-90 text-pretty leading-relaxed">
                Comece hoje mesmo sua jornada rumo a um treino mais inteligente, personalizado e eficiente. Agende sua
                avaliação inicial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Agendar Avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Falar no WhatsApp
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
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">contato@renatabarros.com</span>
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
