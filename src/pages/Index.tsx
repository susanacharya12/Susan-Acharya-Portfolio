import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code, Database, Globe, Award, Star, Trophy, BookOpen, GraduationCap } from "lucide-react";
import ecommerceProject from "@/assets/ecommerce-project.jpg";
import studentManagement from "@/assets/student-management.jpg";
import egovernancePortal from "@/assets/egovernance-portal.jpg";
import pythonProject from "@/assets/python-project.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

// About Section Component with scroll animations
const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold mb-8 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        About Me
      </h2>
      <div 
        className={`w-20 h-1 bg-primary mx-auto mb-8 transition-all duration-1000 delay-300 ${
          titleVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-x-0'
        }`}
      />
      <p 
        ref={textRef as any}
        className={`text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
          textVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        Motivated junior Python and web developer with hands-on experience building scalable, 
        user-friendly web applications using Django and Python. Skilled in RESTful API design, 
        modern web technologies, and responsive design. Strong problem solver and team player. 
        Currently pursuing an undergraduate degree in BSc. CSIT. Seeking opportunities to 
        contribute and grow as a developer.
      </p>
    </>
  );
};

// Projects Section Component with stagger animations
const ProjectsSection = ({ projects }: { projects: any[] }) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(projects.length, 150);

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Featured Projects
      </h2>
      <div ref={containerRef as any} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className={`group hover:shadow-2xl transition-all duration-500 transform ${
              visibleItems[index] 
                ? 'animate-scale-in opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } hover:-translate-y-2 hover:scale-105`}
          >
            {project.image && (
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-6">
                  {project.icon}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </div>
              <CardDescription className="group-hover:text-foreground/80 transition-colors">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className={`hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
                      visibleItems[index] ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${techIndex * 100}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  disabled={project.demo === "Coming Soon"}
                  onClick={() => project.demo !== "Coming Soon" && window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {project.demo === "Coming Soon" ? "Coming Soon" : "Demo"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

// Skills Section Component with category animations
const SkillsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(6, 200);

  const skillCategories = [
    {
      title: "💻 Frontend",
      skills: [
        { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
        { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
        { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
        { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
        { name: "Responsive Design", icon: "https://img.icons8.com/fluency/48/responsive.png" }
      ]
    },
    {
      title: "🛠️ Backend",
      skills: [
        { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
        { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
        { name: "Django REST Framework", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
        { name: "RESTful APIs", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" }
      ]
    },
    {
      title: "🗄️ Databases",
      skills: [
        { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
        { name: "SQLite3", icon: "https://img.icons8.com/color/48/sqlite.png" }
      ]
    },
    {
      title: "🧰 Tools",
      skills: [
        { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
        { name: "GitHub", icon: "https://img.icons8.com/ios-glyphs/48/github.png" },
        { name: "Visual Studio Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
        { name: "PyCharm", icon: "https://img.icons8.com/color/48/pycharm.png" }
      ]
    },
    {
      title: "🔗 APIs",
      skills: [
        { name: "REST API Design", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" },
        { name: "API Integration", icon: "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/48/external-api-user-interface-icongeek26-linear-colour-icongeek26.png" }
      ]
    },
    {
      title: "💡 Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧠" },
        { name: "Team Collaboration", icon: "🤝" },
        { name: "Communication", icon: "🗣️" },
        { name: "Adaptability", icon: "🔄" }
      ]
    }
  ];

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Skills & Technologies
      </h2>
      <div ref={containerRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title} 
            className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
              visibleItems[index] 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold mb-4">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-muted transition-all duration-300 hover:scale-105 ${
                      visibleItems[index] ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill.icon.startsWith('http') ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-2xl">{skill.icon}</span>
                    )}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

// Education Section Component
const EducationSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, containerVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        🎓 Education
      </h2>
      
      <div ref={containerRef as any} className="max-w-4xl mx-auto">
        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          containerVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <GraduationCap className="h-8 w-8 text-primary animate-bounce-gentle" />
              <span>BSc. Computer Science and Information Technology</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Bhaktapur Multiple Campus, Tribhuvan University (IOST) • 📍 Currently Pursuing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
              <p className="text-base leading-relaxed mb-4">
                The BSc. CSIT program is a four-year undergraduate degree blending theoretical knowledge and practical skills in computing, software development, and IT. It prepares students for both advanced studies and professional careers in the tech industry.
              </p>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-primary">Core Subjects:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Data Structures & Algorithms",
                    "Web Technologies", 
                    "Database Management Systems",
                    "Operating Systems",
                    "Software Engineering",
                    "Object-Oriented Programming",
                    "Computer Networks",
                    "C Programming",
                    "Microprocessor",
                    "Java",
                    ".NET",
                    "Computer Architecture"
                  ].map((subject, index) => (
                    <div key={subject} className="flex items-center space-x-2 p-2 rounded-lg bg-background/50 hover:bg-muted transition-all duration-300">
                      <span className="text-primary">•</span>
                      <span className="text-sm font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-lg">
              <h4 className="font-bold text-lg mb-2">+2 Science</h4>
              <p className="text-muted-foreground">Sudurpaschimanchal Academy</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Certificates Section Component
const CertificatesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(4, 200);

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        📜 Certificates
      </h2>
      
      <div ref={containerRef as any} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">✅</span>
              <span>Python For Beginners – Learn All The Basics Of Python</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This course covers Python essentials like variables, data types, operators, conditional statements, loops, functions, and key data structures such as lists, tuples, dictionaries, and sets.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-fa0f1b21-29d8-4950-b675-abeaf438dbc7/", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">✅</span>
              <span>Python For Data Science – Real Time Exercises</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn Python for Data Science through real-time exercises. Practice with variables, control flow, data structures, NumPy, and basic statistics to analyze and manipulate data efficiently.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[2] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">✅</span>
              <span>Python Programming : Python Bootcamp For Beginners</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              An introductory course covering core Python concepts including variables, data types, operators, control flow, functions, and data structures to build a solid foundation in programming.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-0bffe5ad-cd58-40fd-ab5d-a536fd3c6837/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[3] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">🏆</span>
              <span>Hackathon Certificate</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Participated in a 48-hour hackathon organized by Code Yantra at Himalayan College of Engineering, showcasing problem-solving and teamwork skills under time constraints
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn Proof
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Languages & Achievements Section Component
const LanguagesAchievementsSection = () => {
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <div ref={containerRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Languages */}
      <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
      }`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary animate-float" />
            <span>Languages</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
              <span>English</span>
              <Badge className="animate-scale-in">Fluent</Badge>
            </div>
            <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
              <span>Nepali</span>
              <Badge className="animate-scale-in [animation-delay:100ms]">Native</Badge>
            </div>
            <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
              <span>Hindi</span>
              <Badge variant="secondary" className="animate-scale-in [animation-delay:200ms]">Intermediate</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
      }`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-primary animate-wiggle" />
            <span>Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow" />
              <span className="text-sm">Participated in a 48-hour hackathon organized by CodeYaatra</span>
            </div>
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow [animation-delay:200ms]" />
              <span className="text-sm">Successfully built and deployed multiple web applications using Django</span>
            </div>
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow [animation-delay:400ms]" />
              <span className="text-sm">Contributed to open-source projects on GitHub</span>
            </div>
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow [animation-delay:600ms]" />
              <span className="text-sm">Completed Python and Django certification programs</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Contact Section Component
const ContactSection = ({ handleContactSubmit }: { handleContactSubmit: (e: React.FormEvent) => void }) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Get In Touch
      </h2>
      
      <div ref={containerRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className={`transition-all duration-700 ${
          visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-muted-foreground mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <Mail className="h-5 w-5 text-primary animate-bounce-gentle" />
              <span>susanacharya.sp@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <Phone className="h-5 w-5 text-primary animate-bounce-gentle [animation-delay:200ms]" />
              <span>+977 9824562967</span>
            </div>
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <MapPin className="h-5 w-5 text-primary animate-bounce-gentle [animation-delay:400ms]" />
              <span>Nepal</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className={`transition-all duration-700 hover:shadow-xl ${
          visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="hover:border-primary/50 focus:border-primary transition-colors"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="hover:border-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <Input 
                placeholder="Subject" 
                required 
                className="hover:border-primary/50 focus:border-primary transition-colors"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                required 
                className="hover:border-primary/50 focus:border-primary transition-colors"
              />
              <Button 
                type="submit" 
                className="w-full hover:scale-105 transition-transform duration-300 animate-button-glow"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

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
      icon: <Globe className="h-6 w-6" />,
      image: ecommerceProject,
      github: "https://github.com/susanacharya12/django-ecommerce.git",
      demo: "Coming Soon"
    },
    {
      title: "Student Management System",
      description: "Comprehensive system for managing student records, grades, and academic information",
      technologies: ["Django", "SQLite3", "Bootstrap"],
      icon: <BookOpen className="h-6 w-6" />,
      image: studentManagement,
      github: "https://github.com/susanacharya12/student-management-system.git",
      demo: "Coming Soon"
    },
    {
      title: "E-Governance Portal",
      description: "Multi-language government portal with citizen services and document management",
      technologies: ["Django", "Bootstrap", "i18n"],
      icon: <Award className="h-6 w-6" />,
      image: egovernancePortal,
      github: "https://github.com/susanacharya12",
      demo: "Coming Soon"
    },
    {
      title: "Python Projects",
      description: "A collection of beginner-friendly projects built using pure Python (without any external frameworks or libraries), including: Password Generator, Random Number Game, Rock Paper Scissors, Treasure Island Game",
      technologies: ["Python"],
      icon: <Code className="h-6 w-6" />,
      image: pythonProject,
      github: "https://github.com/susanacharya12/Python-Project.git",
      demo: "Coming Soon"
    }
  ];

  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    Backend: ["Python", "Django", "Django REST Framework", "RESTful APIs"],
    Databases: ["MySQL", "SQLite3"],
    Tools: ["Git", "GitHub", "VS Code"],
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
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce [animation-delay:-1s] [animation-duration:3s]"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-bounce [animation-delay:-2s] [animation-duration:4s]"></div>
          <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-bounce [animation-delay:-3s] [animation-duration:5s]"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce [animation-delay:-4s] [animation-duration:3.5s]"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-500/10 rounded-full animate-bounce [animation-delay:-5s] [animation-duration:6s]"></div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-pink-500/10 rounded-full animate-bounce [animation-delay:-6s] [animation-duration:4.5s]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 animate-pulse [animation-duration:4s]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Photo */}
            <div className="mb-8 animate-scale-in-center [animation-delay:200ms]">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 transition-all duration-500 animate-float">
                <img 
                  src="/lovable-uploads/5058cdc6-c2f4-4cb1-b8cc-303bca9df609.png"
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
                href="https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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
            
            <div className="flex justify-center gap-4 animate-fade-in [animation-delay:1100ms]">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="hover:scale-105 transition-transform"
              >
                Get In Touch <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => window.open('https://drive.google.com/file/d/1PlTp-izUra0ZMO5jMdZZltMj5J-DxgxU/view?usp=share_link', '_blank')}
                className="hover:scale-105 transition-transform"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AboutSection />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <ProjectsSection projects={projects} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <SkillsSection />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <EducationSection />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <CertificatesSection />
        </div>
      </section>

      {/* Languages & Achievements */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <LanguagesAchievementsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <ContactSection handleContactSubmit={handleContactSubmit} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Susan Acharya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}