import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Image, Briefcase, Mail, User, X, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const skills = [{
    name: 'Adobe CC (Ai, Id, Ps)',
    level: 90
  }, {
    name: 'HTML',
    level: 75
  }, {
    name: 'CSS',
    level: 70
  }, {
    name: 'Fotografie',
    level: 85
  }, {
    name: 'Unreal Engine',
    level: 60
  }];

  return <div className="min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <nav className={`navbar-glass rounded-full py-2 px-4 md:px-6 max-w-4xl mx-auto transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
          <ul className="flex items-center space-x-1 md:space-x-2">
            <li>
              <button onClick={() => scrollToSection('home')} className={`px-3 py-2 rounded-full text-sm md:text-base transition-colors ${activeSection === 'home' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('lebenslauf')} className={`px-3 py-2 rounded-full text-sm md:text-base transition-colors ${activeSection === 'lebenslauf' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}>
                Lebenslauf
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projekte')} className={`px-3 py-2 rounded-full text-sm md:text-base transition-colors ${activeSection === 'projekte' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}>
                Projekte
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('kontakt')} className={`px-3 py-2 rounded-full text-sm md:text-base transition-colors ${activeSection === 'kontakt' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}>
                Kontakt
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-20 max-w-6xl">
        <section id="home" className="mb-24 relative">
          <div className="absolute inset-0 w-screen h-full overflow-hidden -z-10 left-1/2 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover" style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}>
              <source src="https://9nk.de/neu/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh] relative z-10">
            <div className="animate-fade-in">
              <div className="bg-secondary/50 text-primary rounded-full px-4 py-1 inline-flex items-center text-sm mb-4">
                <span className="mr-2">Design</span>
                <span className="mx-2">•</span>
                <span className="mr-2">Photography</span>
                <span className="mx-2">•</span>
                <span>Web</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Hi, Ich bin <span className="text-gradient">Niklas</span>,
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">schau Dich mal um!</p>
              <button onClick={() => scrollToSection('about')} className="bg-primary text-white rounded-full px-6 py-3 flex items-center font-medium hover:bg-primary/90 transition-colors">
                Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="glass rounded-3xl overflow-hidden">
              <img src="https://nkmd.de/placeholder/600x400" alt="Niklas Koskowski" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <h2 className="section-title">Über mich</h2>
          <div className="bento-box">
            <p className="text-lg mb-4">
              Hey, ich bin Niklas und komme aus Pfarrkirchen in Niederbayern.
            </p>
            <p className="text-lg mb-4">
              Ich bin 23 Jahre alt und habe bisher 5 Semester Medientechnik (B.Eng.) an der Technischen Hochschule Deggendorf studiert. Begonnen mich mit dem Thema Medien zu beschäftigen habe ich vor 5 Jahren, als ich die Fotografie für mich entdeckt habe. Kurz danach kam mir auch das Thema Design, beziehungsweise Gestaltung in den Sinn.
            </p>
            <p className="text-lg mb-4">
              In meinem letzten Semester an der Hochschule haben wir die Live-Show, doschauher.tv produziert. Dort war ich im ersten Teil für die Studiobeleuchtung zuständig und danach dann im Grafik-Team tätig. Aktuell habe ich meine Ausbildung zum Mediengestalter abgeschlossen und bin bei der Einhell Germany AG als Marketing Systems Manager tätig.
            </p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['3D Druck', 'Motorsport', 'Fotografie', 'Design', 'Musik'].map((hobby, index) => <div key={index} className="bento-box h-24 flex items-center justify-center text-center">
                  <span>{hobby}</span>
                </div>)}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => <div key={index} className="skill-item">
                  <span className="w-32 md:w-40 font-medium">{skill.name}</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                  <span className="text-sm">{skill.level}%</span>
                </div>)}
            </div>
          </div>
        </section>

        <section id="lebenslauf" className="mb-24">
          <h2 className="section-title">Lebenslauf</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Praxiserfahrungen</h3>
              
              <div className="experience-item">
                <h4 className="font-medium">Head of Media - TH Deggendorf</h4>
                <span className="text-sm text-muted-foreground">2019 – 2022</span>
                <p className="mt-2">
                  Leitung (2020-2022) des 5-köpfigen Marketing/Media Teams des Formula Student Teams Fast Forest der TH Deggendorf.
                  Während der Tätigkeit war ich zuständig für die gesamte Umsetzung und Konzeptionierung des Medialen Auftritts des Teams.
                </p>
              </div>
              
              <div className="experience-item">
                <h4 className="font-medium">Formula Student Germany - Video</h4>
                <span className="text-sm text-muted-foreground">2021 - Hockenheimring</span>
                <p className="mt-2">
                  2021 war ich für die Formula Student Germany GmbH ehrenamtlich tätig um kurze "Daily-Recap" Videos der einzelnen Eventtage zu erstellen.
                </p>
              </div>
              
              <div className="experience-item">
                <h4 className="font-medium">Formula Student Austria - Aftermovie</h4>
                <span className="text-sm text-muted-foreground">2022 – heute - RedBull Ring</span>
                <p className="mt-2">
                  Seit 2022 bin ich mitunter für die Formula Student Austria mit einem 4-köpfigen Video-Team für die Erstellung eines Aftermovies zuständig, welcher die Highlights des 1-wöchigen Events am RedBull Ring in Spielberg festhält.
                </p>
                <a href="#" className="text-blue-600 mt-1 inline-block hover:underline">Link zum Video</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Ausbildung</h3>
              
              <div className="experience-item">
                <h4 className="font-medium">Gymnasium Pfarrkirchen - Abitur</h4>
                <span className="text-sm text-muted-foreground">2012 - 2019</span>
                <p className="mt-2">
                  Abitur schriftlich: Deutsch, Französisch, Mathematik – mündlich: Geographie, Biologie
                </p>
              </div>
              
              <div className="experience-item">
                <h4 className="font-medium">Studium Medientechnik B.Eng - TH Deggendorf</h4>
                <span className="text-sm text-muted-foreground">2019 - 2022 (nicht abgeschlossen)</span>
                <p className="mt-2">
                  Studium im Bereich Medientechnik, mit Schwerpunkt Mediendesign für 5 Semester.
                </p>
              </div>
              
              <div className="experience-item">
                <h4 className="font-medium">Ausbildung Mediengestalter (IHK | 1,8)</h4>
                <span className="text-sm text-muted-foreground">2022 - 2025 - Einhell Germany AG</span>
                <p className="mt-2">
                  Ausbildung zum Mediengestalter Digital und Print, mit Schwerpunkt auf Print, Fachrichtung Gestaltung und Technik bei der Einhell Germany AG in Landau/Isar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projekte" className="mb-24">
          <h2 className="section-title">Projekte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="project-card">
              <img alt="Aftermovie Formula Student Austria 2024" src="https://img.youtube.com/vi/Drb7kUK75zA/maxresdefault.jpg" />
              <div className="project-overlay" style={{
                backgroundImage: 'url(https://nkmd.de/placeholder/1200x800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-white">
                  <h3 className="text-xl font-medium mb-2">Aftermovie Formula Student Austria 2024</h3>
                  <Button variant="outline" onClick={() => setShowVideoModal(true)} className="border-white/60 text-white hover:bg-white/20 hover:text-white">
                    <Eye className="mr-2 h-4 w-4" />
                    Video ansehen
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <img src="https://nkmd.de/placeholder/600x400" alt="Fast Forest – Rendering" />
              <div className="project-overlay" style={{
                backgroundImage: 'url(https://nkmd.de/placeholder/1200x800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-white">
                  <h3 className="text-xl font-medium mb-2">Fast Forest – Rendering</h3>
                  <Button variant="outline" onClick={() => openImageModal("https://nkmd.de/placeholder/1200x800")} className="border-white/60 text-white hover:bg-white/20 hover:text-white">
                    <Image className="mr-2 h-4 w-4" />
                    Bild öffnen
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <img src="https://nkmd.de/placeholder/600x400" alt="Logodesign – niklaskoskowski.de" />
              <div className="project-overlay" style={{
                backgroundImage: 'url(https://nkmd.de/placeholder/1200x800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-white">
                  <h3 className="text-xl font-medium mb-2">Logodesign – niklaskoskowski.de</h3>
                  <Button variant="outline" onClick={() => openImageModal("https://nkmd.de/placeholder/1200x800")} className="border-white/60 text-white hover:bg-white/20 hover:text-white">
                    <Image className="mr-2 h-4 w-4" />
                    Bild öffnen
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <img src="https://nkmd.de/placeholder/600x400" alt="Muster Lybecker Institut Raahe – Finnland" />
              <div className="project-overlay" style={{
                backgroundImage: 'url(https://nkmd.de/placeholder/1200x800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-white">
                  <h3 className="text-xl font-medium mb-2">Muster Lybecker Institut Raahe</h3>
                  <Button variant="outline" onClick={() => openImageModal("https://nkmd.de/placeholder/1200x800")} className="border-white/60 text-white hover:bg-white/20 hover:text-white">
                    <Image className="mr-2 h-4 w-4" />
                    Bild öffnen
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Fotogalerie</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => <div key={item} className="aspect-square overflow-hidden rounded-xl">
                  <img src={`https://nkmd.de/placeholder/400x400`} alt={`Foto ${item}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>)}
            </div>
          </div>
        </section>

        <section id="kontakt" className="mb-12">
          <h2 className="section-title">Kontakt</h2>
          <div className="bento-box">
            <p className="text-lg mb-6">Schreiben Sie mir einfach eine kurze Nachricht.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ihr Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ihre Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Betreff</label>
                <input type="text" id="subject" className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Betreff" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Nachricht</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ihre Nachricht"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white rounded-full px-6 py-3 flex items-center font-medium hover:bg-primary/90 transition-colors">
                Los geht's!
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2020 - 2025 Niklas Koskowski</p>
          <a href="#" className="text-primary hover:underline text-sm mt-2 inline-block">Impressum</a>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ArrowRight className="h-5 w-5 rotate-[270deg]" />
      </button>

      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black overflow-hidden">
          <DialogClose className="absolute right-2 top-2 rounded-full z-10 bg-black/50 p-2 text-white hover:bg-black/80">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative pb-[56.25%] h-0">
            <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/Drb7kUK75zA?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px] p-0 bg-black overflow-hidden">
          <DialogClose className="absolute right-2 top-2 rounded-full z-10 bg-black/50 p-2 text-white hover:bg-black/80">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative">
            <img src={selectedImage} alt="Project image" className="w-full h-auto max-h-[90vh] object-contain" />
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};

export default Index;
