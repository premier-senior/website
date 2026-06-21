export default function ContactMap() {
  return (
    <section aria-label="Service area map">
      <iframe
        title="Greater Cleveland service area map"
        src="https://www.google.com/maps?q=Cleveland,Ohio&z=9&output=embed"
        className="w-full h-[400px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  )
}
