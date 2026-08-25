type SectionEyebrowProps = {
  text: string
  color?: string
  className?: string
}

export default function SectionEyebrow({
  text,
  color = "#D85D18",
  className = "",
}: SectionEyebrowProps) {
  return (
    <span
      className={`inline-block text-[12px] font-semibold uppercase tracking-[0.13em] ${className}`}
      style={{ color }}
    >
      {text}
    </span>
  )
}
