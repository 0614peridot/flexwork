import { notFound } from "next/navigation";
import { getConversation } from "@/data/conversations";
import Sidebar from "@/components/sidebar/Sidebar";
import MessageContent from "@/components/chat/MessageContent";
import { Copy, ThumbsUp, ThumbsDown, Share2, RefreshCw, MoreHorizontal } from "lucide-react";

const ICONS = {
  chevronDown: "https://www.figma.com/api/mcp/asset/c5e71a01-f5f3-4540-9e0e-d36d797f44f6",
  attachIcon:  "https://www.figma.com/api/mcp/asset/277bb730-4942-4127-b010-4c233bde939d",
  micIcon:     "https://www.figma.com/api/mcp/asset/ad606957-0b9c-449c-b6b3-304d16dcae59",
  voiceIcon:   "https://www.figma.com/api/mcp/asset/5cc4aa9c-38c9-4047-8f4d-15b0c10b2272",
};

type Props = { params: Promise<{ id: string }> };

export default async function ConversationPage({ params }: Props) {
  const { id } = await params;
  const convo = getConversation(id);
  if (!convo) notFound();

  return (
    <div className="flex h-full bg-white">
      <Sidebar activeId={id} />

      {/* ── Main panel ── */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-x-hidden overflow-y-auto relative z-[1]">

        {/* Header */}
        <header className="flex items-center justify-between h-[52px] px-[16px] w-full shrink-0 sticky top-0 z-[2] bg-white">
          {/* Model selector */}
          <button className="flex items-center gap-[4px] px-[10px] py-[3px] rounded-[8px] min-h-[36px] hover:bg-[rgba(13,13,13,0.05)] transition-colors cursor-pointer">
            <span
              className="text-[18px] leading-[28px] font-semibold tracking-[-0.27px] whitespace-nowrap"
              style={{ color: "#0d0d0d" }}
            >
              ChatGPT
            </span>
            <div className="size-[16px] relative overflow-hidden shrink-0">
              <img alt="" src={ICONS.chevronDown} className="absolute inset-0 size-full object-contain" />
            </div>
          </button>

          {/* Right actions */}
          <div className="flex items-center gap-[4px] shrink-0">
            <button
              className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[1000px] text-[14px] leading-[20px] cursor-pointer transition-colors hover:bg-[rgba(13,13,13,0.05)]"
              style={{ border: "1px solid rgba(13,13,13,0.15)", color: "#0d0d0d" }}
            >
              <Share2 size={14} />
              Share
            </button>
            <button className="flex items-center justify-center size-[36px] rounded-full hover:bg-[rgba(13,13,13,0.05)] transition-colors cursor-pointer">
              <MoreHorizontal size={18} color="#0d0d0d" />
            </button>
          </div>
        </header>

        {/* ── Message thread ── */}
        <main className="flex flex-col flex-1 px-[16px] pb-[24px]">
          <div className="flex flex-col gap-[24px] w-full max-w-[768px] mx-auto pt-[16px]">
            {convo.messages.map((msg, i) => {
              if (msg.role === "user") {
                return (
                  <div key={i} className="flex justify-end">
                    <div
                      className="max-w-[85%] px-[16px] py-[12px] rounded-[18px] text-[15px] leading-[24px]"
                      style={{ backgroundColor: "#f0f0f0", color: "#0d0d0d" }}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              }

              return (
                <div key={i} className="flex flex-col gap-[8px]">
                  <div className="text-[15px] leading-[24px]" style={{ color: "#0d0d0d" }}>
                    <MessageContent content={msg.content} />
                  </div>

                  {/* Action icons */}
                  <div className="flex items-center gap-[4px]">
                    {[
                      { Icon: Copy,       label: "Copy"        },
                      { Icon: ThumbsUp,   label: "Good"        },
                      { Icon: ThumbsDown, label: "Bad"         },
                      { Icon: Share2,     label: "Share"       },
                      { Icon: RefreshCw,  label: "Regenerate"  },
                    ].map(({ Icon, label }) => (
                      <button
                        key={label}
                        title={label}
                        className="flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(13,13,13,0.05)] transition-colors cursor-pointer"
                      >
                        <Icon size={16} color="#8f8f8f" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* ── Composer ── */}
        <div className="shrink-0 sticky bottom-0 bg-white px-[16px] pb-[16px] pt-[8px]">
          <div className="w-full max-w-[768px] mx-auto flex flex-col gap-[8px]">
            <div
              className="flex items-center w-full h-[56px] px-[10px] rounded-[28px]"
              style={{
                backgroundColor: "#ffffff",
                boxShadow:
                  "0px 3px 6px 0px rgba(0,0,0,0.04), 0px 4px 80px 8px rgba(0,0,0,0.04), 0px 0px 1px 0px rgba(0,0,0,0.62)",
              }}
            >
              {/* Attach */}
              <button className="flex items-center justify-center size-[36px] rounded-full shrink-0 hover:bg-[rgba(13,13,13,0.05)] transition-colors cursor-pointer">
                <img alt="" src={ICONS.attachIcon} className="size-[20px] object-contain" />
              </button>

              {/* Placeholder */}
              <div className="flex-1 flex items-center h-[36px] px-[6px]">
                <span className="text-[16px] leading-[20px]" style={{ color: "#8f8f8f" }}>
                  Message ChatGPT
                </span>
              </div>

              {/* Mic + voice */}
              <div className="flex items-center gap-[6px] shrink-0">
                <button className="flex items-center justify-center size-[36px] rounded-full hover:bg-[rgba(13,13,13,0.05)] transition-colors cursor-pointer">
                  <img alt="" src={ICONS.micIcon} className="size-[20px] object-contain" />
                </button>
                <button
                  className="flex items-center justify-center size-[36px] rounded-full shrink-0 hover:bg-[#5d5d5d] transition-colors cursor-pointer"
                  style={{ backgroundColor: "#0d0d0d" }}
                >
                  <img alt="" src={ICONS.voiceIcon} className="size-[20px] object-contain" />
                </button>
              </div>
            </div>

            <p className="text-[12px] leading-[14px] text-center" style={{ color: "#8f8f8f" }}>
              ChatGPT can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
