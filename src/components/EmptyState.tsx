import type { ReactNode } from "react";
import { Link } from "react-router";

type EmptyStateAction =
  | { label: string; to: string }
  | { label: string; onClick: () => void };

type EmptyStateProps = {
  message: ReactNode;
  action?: EmptyStateAction;
};

const actionClassName =
  "rounded-full border border-border px-4 py-2 text-sm font-medium text-text-brand transition-all hover:bg-surface-soft active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function EmptyState({ message, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <p className="text-center text-text-secondary">{message}</p>

      {action === undefined ? null : "to" in action ? (
        <Link to={action.to} className={actionClassName}>
          {action.label}
        </Link>
      ) : (
        <button
          type="button"
          onClick={action.onClick}
          className={actionClassName}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
