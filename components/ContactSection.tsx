import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Get In Touch</span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight">
            Let's Create Something <span className="text-gradient-primary">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're a startup looking to build your first product or an 
            established company wanting to reimagine your user experience, I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold font-body">Email</div>
                  <div className="text-muted-foreground font-body">ian@ianbetts.design</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold font-body">Phone</div>
                  <div className="text-muted-foreground font-body">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold font-body">Location</div>
                  <div className="text-muted-foreground font-body">San Francisco, CA</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Connect with me</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="w-12 h-12 p-0 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="sm" className="w-12 h-12 p-0 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="sm" className="w-12 h-12 p-0 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="text-center p-4 rounded-xl bg-gradient-accent/20">
                <div className="text-2xl font-heading text-gradient-primary">24h</div>
                <div className="text-sm text-muted-foreground font-body">Response Time</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-secondary/20">
                <div className="text-2xl font-heading text-gradient-primary">100%</div>
                <div className="text-sm text-muted-foreground font-body">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground font-body">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="border-2 border-border focus:border-primary transition-colors font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground font-body">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="border-2 border-border focus:border-primary transition-colors font-body"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground font-body">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="border-2 border-border focus:border-primary transition-colors font-body"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground font-body">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-[120px] border-2 border-border focus:border-primary transition-colors resize-none font-body"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary transition-all font-medium shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}