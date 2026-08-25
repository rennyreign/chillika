import { Star } from "lucide-react"

type TestimonialCardProps = {
  source: string
  body: string
}

export default function TestimonialCard({
  source,
  body,
}: TestimonialCardProps) {
  return (
    <article
      className="flex flex-col"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E9E2D8",
        borderRadius: "12px",
        padding: "28px 24px 20px 24px",
        minHeight: "280px",
      }}
    >
      <div
        className="font-serif"
        style={{
          fontSize: "46px",
          lineHeight: 0.7,
          color: "#D85D18",
          marginBottom: "10px",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <p
        className="font-sans flex-1"
        style={{
          fontSize: "13px",
          lineHeight: 1.55,
          color: "#4F4B44",
          maxWidth: "42ch",
        }}
      >
        {body}
      </p>

      <div
        className="flex items-end justify-between"
        style={{ marginTop: "20px" }}
      >
        <span
          className="font-sans font-semibold"
          style={{ color: "#25241F", fontSize: "14px" }}
        >
          {source}
        </span>
        <div className="flex" style={{ gap: "2px" }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={15}
              fill="#D9971D"
              color="#D9971D"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
