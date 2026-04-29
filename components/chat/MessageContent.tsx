import React from "react";

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

export default function MessageContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/);

  return (
    <div className="flex flex-col gap-[14px]">
      {paragraphs.map((para, pi) => {
        const lines = para.split("\n").filter((l) => l.trim() !== "");

        const isBullet = lines.some((l) => l.trim().startsWith("- "));
        const isNumbered = lines.some((l) => /^\d+\./.test(l.trim()));

        if (isBullet) {
          return (
            <ul key={pi} className="flex flex-col gap-[6px] pl-[4px]">
              {lines.map((line, li) => {
                const trimmed = line.trim();
                if (trimmed.startsWith("- ")) {
                  return (
                    <li key={li} className="flex gap-[8px]">
                      <span className="shrink-0 mt-[2px]">–</span>
                      <span>{renderInline(trimmed.slice(2))}</span>
                    </li>
                  );
                }
                return (
                  <p key={li} className="text-[15px] leading-[24px]">
                    {renderInline(trimmed)}
                  </p>
                );
              })}
            </ul>
          );
        }

        if (isNumbered) {
          return (
            <ol key={pi} className="flex flex-col gap-[6px] pl-[4px]">
              {lines.map((line, li) => {
                const trimmed = line.trim();
                const match = trimmed.match(/^(\d+)\.\s+(.*)/);
                if (match) {
                  return (
                    <li key={li} className="flex gap-[8px]">
                      <span className="shrink-0 mt-[2px] tabular-nums">{match[1]}.</span>
                      <span>{renderInline(match[2])}</span>
                    </li>
                  );
                }
                return (
                  <p key={li} className="text-[15px] leading-[24px]">
                    {renderInline(trimmed)}
                  </p>
                );
              })}
            </ol>
          );
        }

        return (
          <p key={pi} className="text-[15px] leading-[24px]">
            {lines.map((line, li) => (
              <React.Fragment key={li}>
                {renderInline(line)}
                {li < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
