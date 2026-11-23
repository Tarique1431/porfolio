import { useRef, useState } from "react";
import {
  Boxes, ShoppingCart, LineChart, Wrench, ClipboardList, Truck,
  FileText, Coins, Users, FileCode2, Globe, Building2, Receipt,
  Clock, Settings2, ExternalLink, Lock, Play,
} from "lucide-react";

const ICONS = {
  Boxes, ShoppingCart, LineChart, Wrench, ClipboardList, Truck,
  FileText, Coins, Users, FileCode2, Globe, Building2, Receipt,
  Clock, Settings2, Lock,
};

export default function ProjectCard({ project }) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const Icon = ICONS[project.icon] || Boxes;

  const handleEnter = () => {
    setHovering(true);
    if (videoRef.current && !videoFailed) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    setHovering(false);
    if (videoRef.current && !videoFailed) videoRef.current.pause();
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121722] transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(77,141,255,0.35)]"
    >
      {/* MEDIA */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#1a2740] to-[#0e1420]">
        {!videoFailed && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <source src={`/media/${project.video}`} type="video/mp4" />
          </video>
        )}

        {/* Fallback / idle state icon tile */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            hovering && !videoFailed ? "opacity-0" : "opacity-100"
          }`}
        >
          <Icon className="h-10 w-10 text-[#4d8dff]/70" strokeWidth={1.5} />
        </div>

        {!videoFailed && (
          <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <Play className="h-2.5 w-2.5" fill="currentColor" /> live demo
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[15px] font-bold text-white">{project.name}</h3>
        <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-slate-400">
          {project.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-[#1a2740] px-2 py-1 text-[10.5px] font-semibold text-[#9db3dd]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#4d8dff] hover:underline"
            >
              Visit Live <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <Lock className="h-3 w-3" /> Internal / private only
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
