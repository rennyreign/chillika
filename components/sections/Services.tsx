import SectionEyebrow from "../ui/SectionEyebrow"
import ServiceCard from "../cards/ServiceCard"

const services = [
  {
    iconSemantic: "balloons",
    title: "Party",
    body: "We pride ourselves on satisfying every event need, from customized menus to entertainment to decor.",
  },
  {
    iconSemantic: "serving_cloche",
    title: "Catering",
    body: "Our team recognized for our delicious, fresh food and friendly service.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#FFFFFF",
        paddingTop: "74px",
        paddingBottom: "78px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1030px" }}>
        {/* Header */}
        <div className="text-center">
          <SectionEyebrow text="OUR SERVICES" color="#426B58" />
          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(26px, 3vw, 31px)",
              color: "#25241F",
              marginTop: "8px",
            }}
          >
            Services that we would be happy to offer you
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ marginTop: "36px", gap: "24px" }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center" style={{ marginTop: "28px" }}>
          <a
            href="#footer"
            className="inline-flex items-center justify-center font-sans font-semibold transition-all duration-[180ms] ease-out hover:-translate-y-[1px] hover:bg-[#426B58] hover:text-white"
            style={{
              height: "38px",
              paddingLeft: "26px",
              paddingRight: "26px",
              background: "#FFFFFF",
              border: "1px solid #426B58",
              color: "#426B58",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
