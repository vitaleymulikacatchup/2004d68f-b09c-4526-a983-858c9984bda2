"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart, Building, Circle, Dumbbell, Handshake, Heart, Linkedin, MessageCircle, Settings, Target, TrendingUp, Trophy, UserCheck, Users, Waves, Zap } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Facilities", id: "feature" },
            { name: "Equipment", id: "product" },
            { name: "Coaches", id: "team" },
            { name: "About", id: "about" }
          ]}
          logoSrc="https://images.pexels.com/photos/19737600/pexels-photo-19737600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Sport Facility Logo"
          brandName="SportZone Pro"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premier Sport Facility"
          description="State-of-the-art equipment, professional coaching, and world-class facilities designed to elevate your athletic performance"
          tag="Elite Training"
          tagIcon={Trophy}
          buttons={[
            { text: "Start Training", href: "contact" },
            { text: "View Facilities", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/9787275/pexels-photo-9787275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern sport facility interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Excellence in Sports"
          description={[
            "We provide world-class athletic facilities and professional training programs designed to help athletes at every level achieve their peak performance.",
            "Our state-of-the-art equipment, certified coaches, and comprehensive programs create the perfect environment for athletic excellence."
          ]}
          buttons={[
            { text: "Learn More", href: "feature" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Facilities"
          description="Experience premium athletic facilities designed for peak performance and training excellence"
          tag="Facilities"
          tagIcon={Building}
          features={[
            {
              title: "Cardio Center",
              description: "Modern cardio equipment with advanced monitoring systems and entertainment features",
              icon: Heart
            },
            {
              title: "Strength Training",
              description: "Professional-grade weight training equipment and free weights for all fitness levels",
              icon: Dumbbell
            },
            {
              title: "Swimming Pool",
              description: "Olympic-size pool with professional lane systems and aquatic training programs",
              icon: Waves
            },
            {
              title: "Basketball Courts",
              description: "Full-size professional courts with premium flooring and lighting systems",
              icon: Circle
            },
            {
              title: "Tennis Courts",
              description: "Championship-quality courts with professional surfaces and lighting",
              icon: Target
            },
            {
              title: "Recovery Zone",
              description: "Dedicated recovery areas with massage therapy and rehabilitation equipment",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Premium Equipment"
          description="Professional-grade fitness equipment and training tools for optimal performance"
          tag="Equipment"
          tagIcon={Settings}
          products={[
            {
              id: "treadmill-pro",
              name: "Professional Treadmill",
              price: "Available",
              imageSrc: "https://images.pexels.com/photos/6455910/pexels-photo-6455910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional treadmill machine"
            },
            {
              id: "weight-station",
              name: "Multi-Station Weight System",
              price: "Available",
              imageSrc: "https://images.pexels.com/photos/4793234/pexels-photo-4793234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Weight training equipment"
            },
            {
              id: "elliptical-pro",
              name: "Elliptical Trainer Pro",
              price: "Available",
              imageSrc: "https://images.pexels.com/photos/3888093/pexels-photo-3888093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional elliptical machine"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Impact"
          description="Performance metrics that showcase our commitment to athletic excellence"
          tag="Statistics"
          tagIcon={BarChart}
          metrics={[
            {
              id: "1",
              value: "5000+",
              title: "members",
              description: "Active athletes training daily",
              icon: Users
            },
            {
              id: "2",
              value: "50+",
              title: "coaches",
              description: "Certified professional trainers",
              icon: UserCheck
            },
            {
              id: "3",
              value: "15",
              title: "years",
              description: "Excellence in athletic training",
              icon: Award
            },
            {
              id: "4",
              value: "98%",
              title: "satisfaction",
              description: "Member satisfaction rate",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Expert Coaching Staff"
          description="Meet our certified coaches dedicated to helping you achieve your athletic goals"
          tag="Coaches"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Mike Johnson",
              role: "Head Strength Coach",
              description: "Former Olympic trainer with 15 years experience in strength and conditioning programs",
              imageSrc: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Johnson professional coach",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/mikejohnson" },
                { icon: "Twitter", url: "https://twitter.com/mikejohnsoncoach" }
              ]
            },
            {
              id: "2",
              name: "Sarah Davis",
              role: "Swimming Coach",
              description: "National champion swimmer and certified aquatic training specialist",
              imageSrc: "https://images.pexels.com/photos/6740339/pexels-photo-6740339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Davis professional coach",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarahdavis" },
                { icon: "Globe", url: "https://sarahdaviscoaching.com" }
              ]
            },
            {
              id: "3",
              name: "Alex Rodriguez",
              role: "Personal Trainer",
              description: "Certified personal trainer specializing in functional fitness and athletic performance",
              imageSrc: "https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Rodriguez professional coach",
              socialLinks: [
                { icon: "Instagram", url: "https://instagram.com/alexrodriguezfit" },
                { icon: "Twitter", url: "https://twitter.com/alexfitness" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Athletes Say"
          description="Real feedback from athletes who train at our premier sport facility"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emma Wilson",
              role: "Professional Athlete",
              company: "Track & Field",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/14037022/pexels-photo-14037022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Wilson athlete"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Fitness Enthusiast",
              company: "Marathon Runner",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Chen fitness member"
            },
            {
              id: "3",
              name: "Lisa Martinez",
              role: "Competitive Swimmer",
              company: "State Champion",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2157168/pexels-photo-2157168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Martinez swimmer"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Basketball Player",
              company: "College Team",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6292447/pexels-photo-6292447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Thompson basketball player"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="Professional sports teams and organizations choose our facility for training excellence"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Start Your Athletic Journey"
          description="Ready to train at our premier sport facility? Contact us to schedule your visit and discover what makes us the choice of champions."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "sport", type: "text", placeholder: "Sport/Interest", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your training goals and experience...",
            rows: 4,
            required: false
          }}
          imageSrc="https://images.pexels.com/photos/7821343/pexels-photo-7821343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sport facility reception area"
          buttonText="Schedule Visit"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Facilities",
              items: [
                { label: "Cardio Center", href: "feature" },
                { label: "Strength Training", href: "feature" },
                { label: "Swimming Pool", href: "feature" },
                { label: "Courts", href: "feature" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Personal Training", href: "team" },
                { label: "Group Classes", href: "about" },
                { label: "Athletic Programs", href: "about" },
                { label: "Recovery Services", href: "feature" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coaches", href: "team" },
                { label: "Contact", href: "contact" },
                { label: "Testimonials", href: "testimonial" }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/19737600/pexels-photo-19737600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 | SportZone Pro"
        />
      </div>
    </ThemeProvider>
  );
}