function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto mb-10 flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-red-800">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-black leading-tight text-stone-950 sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-7 text-stone-600 sm:text-lg">{description}</p>}
    </div>
  )
}

export default SectionHeader
