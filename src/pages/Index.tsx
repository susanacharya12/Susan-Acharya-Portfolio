import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code, Database, Globe, Award, Star, Trophy, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const { toast } = useToast();
  
  const fullText = "Susan Acharya";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);
    
    return () => clearInterval(typewriterInterval);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard",
      technologies: ["Django", "DRF", "MySQL", "PostgreSQL"],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Student Management System",
      description: "Comprehensive system for managing student records, grades, and academic information",
      technologies: ["Django", "SQLite3", "Bootstrap"],
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "E-Governance Portal",
      description: "Multi-language government portal with citizen services and document management",
      technologies: ["Django", "Bootstrap", "i18n"],
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Urban Mobility App",
      description: "Smart transportation app with real-time tracking and route optimization",
      technologies: ["MongoDB", "Mongoose", "OpenCage API"],
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    Backend: ["Python", "Django", "Django REST Framework", "RESTful APIs"],
    Databases: ["MySQL", "PostgreSQL", "SQLite3", "MongoDB"],
    Tools: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"]
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Susan Acharya</h1>
            <div className="hidden md:flex space-x-6">
              {["about", "projects", "skills", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Photo */}
            <div className="mb-8 animate-fade-in [animation-delay:200ms]">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Susan Acharya" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name with Typewriter */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">{typewriterText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6 animate-fade-in [animation-delay:500ms]">
              Junior Django & Python Developer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:700ms]">
              Motivated Python developer building scalable web applications with Django. 
              Passionate about clean code and innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8 animate-fade-in [animation-delay:900ms]">
              <a 
                href="https://linkedin.com/in/susan-acharya1618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/susanacharya12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:susanacharya.sp@gmail.com"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="animate-fade-in [animation-delay:1100ms] hover:scale-105 transition-transform"
            >
              Get In Touch <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 animate-fade-in [animation-delay:200ms]" />
            <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in [animation-delay:400ms]">
              Motivated junior Python and web developer with hands-on experience building scalable, 
              user-friendly web applications using Django and Python. Skilled in RESTful API design, 
              modern web technologies, and responsive design. Strong problem solver and team player. 
              Currently pursuing an undergraduate degree in BSc. CSIT. Seeking opportunities to 
              contribute and grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {project.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Education & Certificates</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">BSc. Computer Science and Information Technology</h3>
                    <p className="text-muted-foreground">Bhaktapur Multiple Campus, Tribhuvan University</p>
                    <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="animate-fade-in [animation-delay:400ms]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certificates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Python Bootcamp</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Django Web Framework</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages & Achievements */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Languages */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <Badge>Fluent</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nepali</span>
                    <Badge>Native</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hindi</span>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Successfully built and deployed multiple web applications using Django</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Contributed to open-source projects on GitHub</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Completed Python and Django certification programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="animate-fade-in [animation-delay:200ms]">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to discuss a project or just say hello!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>susanacharya.sp@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+977 9824562967</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Nepal</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-fade-in [animation-delay:400ms]">
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <Input placeholder="Subject" required />
                  <Textarea placeholder="Your Message" rows={5} required />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Susan Acharya. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}