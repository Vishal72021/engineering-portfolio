import { ArrowDown, ArrowRight } from "lucide-react";

type Node = {
  label: string;
  detail?: string;
  tone?: "accent" | "neutral" | "success";
};

type ArchitectureDiagramProps = {
  title: string;
  caption: string;
  columns: Node[][];
  flow?: "horizontal" | "vertical";
};

export function ArchitectureDiagram({
  title,
  caption,
  columns,
  flow = "horizontal",
}: ArchitectureDiagramProps) {
  return (
    <figure className={`architecture-visual architecture-visual--${flow}`}>
      <div className="architecture-visual__header">
        <span className="mono-label muted">SYSTEM MAP</span>
        <span className="architecture-visual__title">{title}</span>
      </div>

      <div className="architecture-visual__canvas">
        {columns.map((column, columnIndex) => (
          <div className="architecture-visual__column" key={columnIndex}>
            {column.map((node) => (
              <div
                className={`architecture-node architecture-node--${node.tone ?? "neutral"}`}
                key={node.label}
              >
                <strong>{node.label}</strong>
                {node.detail ? <span>{node.detail}</span> : null}
              </div>
            ))}
            {columnIndex < columns.length - 1 ? (
              <div className="architecture-visual__connector" aria-hidden="true">
                {flow === "horizontal" ? <ArrowRight size={15} /> : <ArrowDown size={15} />}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <figcaption>{caption}</figcaption>
    </figure>
  );
}
