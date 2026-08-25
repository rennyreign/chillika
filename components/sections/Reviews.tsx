import TestimonialCard from "../cards/TestimonialCard"

const testimonials = [
  {
    source: "Google",
    body: "The shop's vibrant atmosphere immerses you in the spirit of India, with colorful décor and Bollywood options. Whether you're looking for a quick spicy fix, the menu boasts a wide array of roots and authentic Iran New varieties of flavourful taste of Indian street food. We ordered cheese naan, garlic naan, butter chicken, samosa chaat and masala chai. And my favorite was garlic naan and butter chicken, good portion. Affordable. Service is prompt and friendly, adding to the overall enjoyable experience.",
  },
  {
    source: "TripAdvisor",
    body: "Delicious Indian street food! A great place for chaat style comfort food and the best one I've tried so far in the South East London area.",
  },
  {
    source: "TripAdvisor",
    body: "Delicious Indian street food! A great place for chaat style comfort food and the best one I've tried so far in the South East London area. The flavours are bold, portions and super tasty, would highly recommend trying them, if you're looking for a great homestyle curry, then I would recommend the Goat Curry or the Chicken Kasha with a nice naan both fantastic dishes.",
  },
]

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative"
      style={{
        background: "#FBF9F4",
        paddingTop: "76px",
        paddingBottom: "82px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      {/* Subtle warm texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(216,93,24,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1120px" }}>
        {/* Header */}
        <div className="text-center">
          <h2
            className="font-sans font-bold uppercase"
            style={{
              fontSize: "18px",
              letterSpacing: "0.02em",
              color: "#123D2D",
            }}
          >
            WHAT PEOPLE SAY ABOUT CHILLIKA
          </h2>
          {/* Ornament */}
          <div
            className="mx-auto flex items-center justify-center"
            style={{ marginTop: "12px", width: "62px" }}
          >
            <div style={{ height: "1px", background: "#D85D18", flex: 1 }} />
            <div
              style={{
                width: "5px",
                height: "5px",
                background: "#D85D18",
                transform: "rotate(45deg)",
                margin: "0 4px",
              }}
            />
            <div style={{ height: "1px", background: "#D85D18", flex: 1 }} />
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ marginTop: "34px", gap: "22px" }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} source={t.source} body={t.body} />
          ))}
        </div>

        {/* Pagination dots */}
        <div
          className="flex items-center justify-center"
          style={{ marginTop: "25px", gap: "8px" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: i === 0 ? "#D85D18" : "#C5BEB4",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
