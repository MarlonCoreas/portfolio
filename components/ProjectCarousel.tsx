"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

type Project = { number: string; title: string; image: string; alt: string; height: number };
type Props = { projects: Project[]; lang: "en" | "es" };

export default function ProjectCarousel({ projects, lang }: Props) {
  const [current, setCurrent] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const es = lang === "es";
  const select = (index: number) => setCurrent((index + projects.length) % projects.length);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const target = event.key === "ArrowRight" ? current + 1
      : event.key === "ArrowLeft" ? current - 1
      : event.key === "Home" ? 0
      : event.key === "End" ? projects.length - 1 : null;
    if (target === null) return;
    event.preventDefault();
    // Keep focus on a stable element when the formerly active link moves away.
    root.current?.focus({ preventScroll: true });
    select(target);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    gesture.current = { x: event.clientX, y: event.clientY };
    suppressClick.current = false;
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!gesture.current) return;
    const dx = event.clientX - gesture.current.x;
    const dy = event.clientY - gesture.current.y;
    gesture.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      suppressClick.current = true;
      select(current + (dx < 0 ? 1 : -1));
    }
  };

  if (!projects.length) return null;
  const active = projects[current];

  return (
    <div className="project-carousel" ref={root} role="region" aria-roledescription={es ? "carrusel" : "carousel"}
      aria-label={es ? "Proyectos seleccionados" : "Selected projects"} tabIndex={0} onKeyDown={onKeyDown}>
      <div className="carousel-stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp}
        onPointerCancel={() => { gesture.current = null; }}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}>
        {projects.map((project, index) => {
          const offset = (index - current + projects.length) % projects.length;
          const position = offset === 0 ? "active" : offset === 1 ? "next" : "previous";
          return (
            <a className={`carousel-slide is-${position}`} href={`#project-${project.number}`} key={project.number}
              aria-hidden={index !== current} tabIndex={index === current ? 0 : -1}
              aria-label={`${es ? "Ver proyecto" : "View project"}: ${project.title}`}
              onDragStart={(event) => event.preventDefault()}
              onClick={(event) => {
                if (index !== current) { event.preventDefault(); select(index); }
              }}>
              <img src={project.image} alt={project.alt} width={1200} height={project.height}
                draggable={false} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" />
            </a>
          );
        })}
      </div>
      <a className="carousel-caption" href={`#project-${active.number}`}>{active.title} <span aria-hidden="true">↗</span></a>
      <div className="carousel-controls">
        <button type="button" className="carousel-arrow" onClick={() => select(current - 1)} aria-label={es ? "Proyecto anterior" : "Previous project"}>
          <span aria-hidden="true">‹</span>
        </button>
        <div className="carousel-dots" role="group" aria-label={es ? "Elegir proyecto" : "Choose a project"}>
          {projects.map((project, index) => (
            <button type="button" key={project.number} aria-label={`${es ? "Mostrar" : "Show"} ${project.title}`}
              aria-pressed={index === current} onClick={() => select(index)}><span /></button>
          ))}
        </div>
        <button type="button" className="carousel-arrow" onClick={() => select(current + 1)} aria-label={es ? "Proyecto siguiente" : "Next project"}>
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">{current + 1} {es ? "de" : "of"} {projects.length}: {active.title}</p>
    </div>
  );
}
