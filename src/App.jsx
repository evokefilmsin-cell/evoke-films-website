export default function EvokeFilmsServicesWebsite() {
  const services = [
    {
      title: 'Commercial Films',
      description:
        'High-end ad films and branded campaigns crafted for digital, TV, and social media.',
    },
    {
      title: 'Corporate Videos',
      description:
        'Professional company profiles, factory films, founder stories, and internal communication videos.',
    },
    {
      title: 'Restaurant & Hospitality Content',
      description:
        'Cinematic food, ambience, chef, and customer experience videos for restaurants, cafes, and hotels.',
    },
    {
      title: 'Social Media Reels',
      description:
        'Fast-paced short-form content optimized for Instagram, YouTube Shorts, and TikTok.',
    },
    {
      title: 'Event Coverage',
      description:
        'Coverage for launches, weddings, corporate events, concerts, and private celebrations.',
    },
    {
      title: 'Podcast Studio Production',
      description:
        'Multi-camera podcast recording, editing, sound design, and studio setup support.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f2f1] text-black font-sans">
      {/* Hero */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
  <div className="text-2xl font-bold tracking-wide">
  <span className="text-red-500">EVOKE</span>
  <span className="text-black">FILMS</span>
</div>

  <div className="hidden md:flex items-center gap-8 text-sm font-medium">
    <a href="#services" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">Services</a>
    <a href="#portfolio" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">Portfolio</a>
    <a href="#about" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">About</a>
    <a href="#contact" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">Contact</a>
  </div>

  <a
  href="#contact"
  className="px-6 py-3 rounded-full bg-red-500 text-white font-medium hover:bg-red-400 transition shadow-[0_12px_30px_rgba(255,59,59,0.25)] inline-flex items-center"
>
  Book Now
</a>
  </div>
</nav>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,59,59,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,59,59,0.08),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 min-h-[85vh] py-16 lg:py-24 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">

<p className="text-sm uppercase tracking-[0.35em] text-red-500 mb-6">
  Premium Video Production Studio
</p>
            <h1 className="text-[3.8rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[0.9] tracking-[-0.05em] mb-8">
  Cinematic
  <span className="block text-red-500 italic">Stories</span>
  <span className="block text-black">That Move Brands</span>
</h1>

            <p className="text-lg md:text-xl text-zinc-500 max-w-xl leading-9 mb-10">
  Premium ad films, restaurant content, podcasts, and branded videos crafted to make your business unforgettable.
</p>

            <div className="flex flex-wrap items-center gap-5">
              <a
  href="#contact"
  className="px-8 py-4 rounded-full bg-red-500 hover:bg-red-400 transition text-white font-semibold text-lg shadow-[0_20px_40px_rgba(255,59,59,0.25)] inline-flex items-center"
>
  Book a Project
</a>
              <a
  href="#portfolio"
  className="px-8 py-4 rounded-full border border-black/10 bg-white hover:border-red-500 hover:text-red-500 transition text-lg font-medium shadow-sm inline-flex items-center"
>
  View Portfolio
</a>
            </div>
          </div>

          <div className="relative lg:pl-8 lg:-mt-8">
  <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/20 blur-[100px] rounded-full" />
            <div className="group relative aspect-[4/3] lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.18)] rotate-[-2deg] hover:rotate-0 transition duration-700">
              <img
  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
  alt="Film production studio"
  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] px-7 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
  <p className="text-3xl font-bold text-red-500">100+</p>
  <p className="text-sm text-zinc-500 mt-1">Projects Delivered</p>
</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-14">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-[2.8rem] md:text-[4rem] font-bold leading-[1] tracking-[-0.03em] mb-6">
  What We
  <span className="block text-red-500 italic">Create</span>
</h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-9 max-w-xl">
  From cinematic brand films to podcasts and restaurant content, we create visuals designed to make people stop and remember.
</p>
   </div>
</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-[2rem] border border-black/10 bg-white p-8 md:p-10 hover:-translate-y-3 hover:border-red-500/20 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(255,59,59,0.08)] overflow-hidden ${
  services.indexOf(service) % 2 === 1 ? 'md:translate-y-8' : ''
}`}
            >
              <div className="absolute top-6 right-6 text-[5rem] font-bold text-black/[0.03] leading-none">
  0{services.indexOf(service) + 1}
</div>
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-8 text-xl font-bold">
  0{services.indexOf(service) + 1}
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-transparent mb-6" />
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-500 transition">
                {service.title}
              </h3>

              <p className="text-zinc-500 leading-8 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
{/* Portfolio Preview */}
<section id="portfolio" className="py-32 bg-[#faf7f6]">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-red-500 mb-4">
          Selected Work
        </p>

        <h2 className="text-[2.8rem] md:text-[4rem] font-bold leading-[1] tracking-[-0.03em]">
          Recent
          <span className="block text-red-500 italic">Projects</span>
        </h2>
      </div>

      <p className="text-zinc-500 text-lg leading-8 max-w-xl">
        A glimpse into the films, campaigns, restaurant shoots, and content we’ve created for brands.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {[
        {
          title: 'Restaurant Launch Film',
          image:
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
        },
        {
          title: 'Podcast Studio Production',
          image:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
        },
        {
          title: 'Commercial Ad Campaign',
          image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
        },
      ].map((project) => (
        <div
          key={project.title}
          className={`group relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
  project.title === 'Podcast Studio Production'
    ? 'h-[500px] lg:-mt-8'
    : 'h-[420px]'
}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8">
  <p className="text-white text-2xl font-semibold leading-tight max-w-xs mb-4">
    {project.title}
  </p>

  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition">
    <span className="text-sm uppercase tracking-[0.2em]">
      View Project
    </span>
    <span className="group-hover:translate-x-1 transition">→</span>
  </div>
</div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Process */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-2xl mb-14">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
              How We Work
            </p>
            <h2 className="text-[2.8rem] md:text-[4rem] font-bold leading-[1] tracking-[-0.03em] mb-6">
  How We
  <span className="block text-red-500 italic">Work</span>
</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
  {
    title: 'Brief & Strategy',
    description: 'We understand your brand, goals, audience, and the story you want to tell.',
  },
  {
    title: 'Shoot Planning',
    description: 'Our team plans locations, shots, scripts, moodboards, and production details.',
  },
  {
    title: 'Production Day',
    description: 'We film everything with cinematic quality, lighting, direction, and precision.',
  },
  {
    title: 'Editing & Delivery',
    description: 'Your film is edited, polished, and delivered ready for every platform.',
  },
].map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-black/10 bg-[#faf7f6] p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-lg mb-6">
  0{index + 1}
</div>
                <h3 className="text-2xl font-semibold text-black leading-tight">
  {step.title}
</h3>
<p className="mt-4 text-zinc-500 leading-8">
  {step.description}
</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="contact" className="py-32 bg-[#faf7f6]">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-red-500 mb-4">
          Contact
        </p>

        <h2 className="text-[2.8rem] md:text-[4rem] font-bold leading-[1] tracking-[-0.03em] mb-6">
          Let’s Build
          <span className="block text-red-500 italic">Something Great</span>
        </h2>

        <p className="text-zinc-500 text-lg leading-9 max-w-xl mb-10">
          Tell us about your project, brand, restaurant, campaign, or podcast. We’ll get back to you and plan the perfect production.
        </p>

        <div className="space-y-6 text-zinc-600">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-2">
              Email
            </p>
            <p className="text-xl font-medium">evokefilmsin@gmail.com</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-2">
              Phone
            </p>
            <p className="text-xl font-medium">+91 9066346316 +91 9959663666</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-2">
              Location
            </p>
            <p className="text-xl font-medium">Hyderabad, India</p>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-[2.5rem] border border-black/10 p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
  <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-[80px] rounded-full" />
        <form
  name="contact"
  method="POST"
  data-netlify="true"
  action="/?success=true"
  className="space-y-5"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="subject" value="New Evoke Films Inquiry" />
  <div>
    <label className="block text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">
      Name
    </label>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-red-500 transition"
    />
  </div>

  <div>
    <label className="block text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">
      Email
    </label>
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-red-500 transition"
    />
  </div>

  <div>
    <label className="block text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">
      Project Details
    </label>
    <textarea
      name="message"
      placeholder="Tell us about your project"
      rows="5"
      required
      className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-red-500 transition resize-none"
    />
  </div>

  <button
  type="submit"
  className="w-full rounded-full bg-red-500 hover:bg-red-400 text-white py-4 font-semibold text-lg transition shadow-[0_20px_40px_rgba(255,59,59,0.2)]"
>
  Send Inquiry
</button>
</form>
      </div>
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="relative py-32">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,59,59,0.06),transparent_35%)]" />
  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-[3rem] border border-black/10 bg-[radial-gradient(circle_at_top_left,rgba(255,59,59,0.12),transparent_40%),#fff] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
          <div>
            <h2 className="text-[2.8rem] md:text-[4.5rem] font-bold leading-[0.95] tracking-[-0.04em] mb-6">
  Ready To Tell
  <span className="block text-red-500 italic">Your Story?</span>
</h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-9 max-w-2xl">
  Let’s create a film, campaign, or podcast that makes your brand impossible to ignore.
</p>
          </div>
          <a
  href="#contact"
  className="px-10 py-5 rounded-full bg-red-500 hover:bg-red-400 text-white font-semibold text-lg transition shadow-[0_20px_40px_rgba(255,59,59,0.25)] whitespace-nowrap inline-flex items-center"
>
  Contact Evoke Films
</a>
        </div>
       </div>
      </section>
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
  </div>
</section>
      <footer className="border-t border-black/10">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="text-xl font-bold tracking-wide">
      <span className="text-red-500">EVOKE</span>
      <span className="text-black">FILMS</span>
    </div>

    <div className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
      <a href="#" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
        Instagram
      </a>
      <a href="#" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
        Behance
      </a>
      <a href="#" className="hover:text-red-500 transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
        YouTube
      </a>
    </div>

    <p className="text-sm text-zinc-400">
      © 2026 Evoke Films. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
}
