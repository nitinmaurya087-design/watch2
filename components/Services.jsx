'use client';

const services = [
  {
    title: 'Frontend Development',
    description: 'Responsive and interactive websites using modern frontend technologies.'
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, intuitive interfaces focused on usability and visual hierarchy.'
  },
  {
    title: 'Interactive Experiences',
    description: 'Smooth animations and engaging interactions using tools such as GSAP.'
  },
  {
    title: 'Website Development',
    description: 'Modern websites designed for performance, responsiveness and real-world use.'
  }
];

export default function Services() {
  return (
    <div className="mx-auto max-w-[1140px] px-6 pb-24 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">What I Build</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Services tailored for modern digital products.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-[32px] border border-white/10 bg-surface/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
