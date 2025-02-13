import clsx from "clsx";
import React from "react";

interface HelpProps {
  help: string;
  elemId: string;
  helpClassName?: string;
}

export function Help({ help, elemId, helpClassName }: HelpProps) {
  return (
    <div className={clsx("formbricks-help", helpClassName)} id={`help-${elemId}`}>
      {help}
    </div>
  );
}
