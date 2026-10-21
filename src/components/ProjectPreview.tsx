import Image from 'next/image'
import { Project } from '@/types'

export default function ProjectPreview({
  preview,
  priority = false,
}: {
  preview: NonNullable<Project['preview']>
  priority?: boolean
}) {
  return (
    <figure className="project-preview">
      <a
        href={preview.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size screenshot: ${preview.alt}`}
      >
        <Image
          src={preview.src}
          alt={preview.alt}
          width={preview.width}
          height={preview.height}
          priority={priority}
          sizes="(max-width: 767px) 100vw, 1136px"
        />
      </a>
      <figcaption>{preview.caption} Open the image at full size ↗</figcaption>
    </figure>
  )
}
