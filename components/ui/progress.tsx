type ProgressProps = {
  value: number;
  max?: number;
  label?: string;
};

export function Progress({ value, max = 100, label }: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), max);
  const percentage = max === 0 ? 0 : (safeValue / max) * 100;

  return (
    <div className="ui-progress-wrap">
      {label ? <span className="ui-progress-label">{label}</span> : null}
      <div
        className="ui-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={safeValue}
        aria-label={label}
      >
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
