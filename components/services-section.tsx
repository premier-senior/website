const services = [
  {
    number: "01",
    title: "Placement service without any out of pocket expenses",
    description:
      "Premier Senior Solutions Placement Services assist families in finding the perfect senior care solution, based on their needs and budget, without any out of pocket expense to the family. Our service is always free; we are here to be your helping hand through what can be a difficult process to navigate.",
  },
  {
    number: "02",
    title: "Personalized consultations",
    description:
      "We meet with every family and client for a personalized consultation to place careful consideration on location, finances, level of care needed and more. We know that every situation is different and it is our goal to find the right solution for you.",
  },
  {
    number: "03",
    title: "Support of other ancillary services",
    description:
      "With over 20 years working in the senior care industry, I can here to be a vital resource for you in not only finding your perfect senior care placement, but also the additional ancillary services available in your area.",
  },
  {
    number: "04",
    title: "Here every step of the way",
    description:
      "I am here with you every step of the way. From scheduling initial appointments and tours to navigating the admissions process and more in.",
  },
  {
    number: "05",
    title: "Saving time and frustration for the family",
    description:
      "The family can focus on their loved one by SAVING TIME and FRUSTRATION of comparing communities that do not make sense in the long run.",
  },
  {
    number: "06",
    title: "Communities can count on us to pre qualify potential residents",
    description:
      "We pre-qualify based on CARE NEEDS, BUDGET and LOCATION serving the patient and their family needs accordingly.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Top divider diamond */}
      <div className="flex justify-center mb-2">
        <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "#8B1A4A" }} />
      </div>

      <div className="text-center mb-12 px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-8 bg-gray-300" />
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">HERE FOR YOU 24/7</span>
          <div className="h-px w-8 bg-gray-300" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
          Services We&apos;re Offering
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          We help you find the perfect senior living community for your loved one. We work with only high-quality senior care communities, making sure they provide the best care possible at an affordable price.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.number} className="flex gap-5 p-4">
              {/* Number circle */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "#8B1A4A" }}
              >
                {service.number}
              </div>
              {/* Content */}
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider diamond */}
      <div className="flex justify-center mt-12">
        <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "#8B1A4A" }} />
      </div>
    </section>
  )
}
