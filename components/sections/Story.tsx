import SectionEyebrow from "../ui/SectionEyebrow"
import { ArrowRight } from "lucide-react"

export default function Story() {
  return (
    <section
      id="story"
      className="relative"
      style={{
        background: "#FFFFFF",
        paddingTop: "104px",
        paddingBottom: "104px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{
          maxWidth: "1200px",
          columnGap: "78px",
        }}
      >
        {/* Left visual */}
        <div className="relative" style={{ width: "100%" }}>
          <img
            src="/chillika/images/home/story_restaurant_interior.webp"
            alt="Chillika restaurant interior"
            className="object-cover"
            style={{
              width: "88%",
              aspectRatio: "1.34 / 1",
              objectPosition: "50% 50%",
              borderRadius: "14px",
            }}
          />
          <img
            src="/chillika/images/home/story_food_inset.webp"
            alt="Chillika food inset detail"
            className="absolute object-cover"
            style={{
              right: "0",
              bottom: "-24px",
              width: "43%",
              aspectRatio: "1.25 / 1",
              borderRadius: "12px",
              border: "5px solid #FFFFFF",
              boxShadow: "0 12px 28px rgba(0,0,0,0.24)",
            }}
          />
        </div>

        {/* Right copy */}
        <div className="relative">
          <SectionEyebrow
            text="OUR STORY"
            color="#426B58"
            className="mb-3"
          />

          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(34px, 4vw, 44px)",
              lineHeight: 1.03,
              color: "#123D2D",
              maxWidth: "520px",
            }}
          >
            <span style={{ color: "#D85D18" }}>Chillika</span> – where every
            bite tells a story.
          </h2>

          <p
            className="font-sans"
            style={{
              marginTop: "22px",
              maxWidth: "550px",
              color: "#5E5A51",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            At Chillika, we bring the vibrant energy of India&rsquo;s bustling
            street food culture to life, right in the heart of your city.
            Inspired by the flavours of Odisha and the rich culinary traditions
            of India, Chillika is more than just a restaurant—it&rsquo;s a
            celebration of authentic taste, bold spices, and heartwarming
            hospitality.
          </p>

          <a
            href="#menu"
            className="inline-flex items-center font-sans font-semibold transition-colors duration-[180ms] hover:opacity-80"
            style={{
              marginTop: "26px",
              color: "#D85D18",
              fontSize: "15px",
            }}
          >
            Learn More
            <ArrowRight
              size={16}
              style={{ marginLeft: "6px" }}
              strokeWidth={2}
            />
          </a>

          {/* Faint botanical ornament */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-20px",
              right: "-10px",
              width: "180px",
              height: "60px",
              opacity: 0.12,
              color: "#D85D18",
            }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 180 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 50 Q60 10 110 30 Q160 50 170 20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M30 45 Q50 25 70 35"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none"
              />
              <circle cx="90" cy="32" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
