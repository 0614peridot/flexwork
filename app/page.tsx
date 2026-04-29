import Sidebar from "@/components/sidebar/Sidebar";

// Figma asset URLs (valid 7 days from 2026-04-30)
const ICONS = {
  profileIcon: "https://www.figma.com/api/mcp/asset/e50cb4de-25b7-4671-9c67-4bdb053ea32c",
  editIcon:    "https://www.figma.com/api/mcp/asset/3a1a9182-a992-436d-8c9a-be882cafbf29",
  chevronDown: "https://www.figma.com/api/mcp/asset/c5e71a01-f5f3-4540-9e0e-d36d797f44f6",
  attachIcon:  "https://www.figma.com/api/mcp/asset/277bb730-4942-4127-b010-4c233bde939d",
  micIcon:     "https://www.figma.com/api/mcp/asset/ad606957-0b9c-449c-b6b3-304d16dcae59",
  voiceIcon:   "/icons/variant=19.svg",
  imageIcon:   "https://www.figma.com/api/mcp/asset/4d83142f-64d4-4c3d-b3b6-8cb6442ac88e",
};

const ACTION_BUTTONS = [
  "Create an image",
  "Write or edit",
  "Look something up",
];

export default function Home() {
  return (
    <div className="flex h-full bg-white">
      <Sidebar />

      {/* ── Main panel ── */}
      <div
        className="flex flex-col flex-1 min-w-0 h-full overflow-x-hidden overflow-y-auto px-[15px] relative z-[1]"
      >
        {/* Header */}
        <header className="flex items-center justify-between h-[52px] p-[8px] w-full shrink-0 sticky top-0 z-[2] bg-white">
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

          {/* Right icon buttons */}
          <div className="flex items-center gap-[4px] shrink-0">
            <button className="flex items-center justify-center size-[36px] rounded-full hover:bg-[rgba(143,143,143,0.2)] transition-colors cursor-pointer">
              <img alt="" src={ICONS.profileIcon} className="size-[20px] object-contain" />
            </button>
            <button className="flex items-center justify-center size-[36px] rounded-full hover:bg-[rgba(143,143,143,0.2)] transition-colors cursor-pointer">
              <img alt="" src={ICONS.editIcon} className="size-[20px] object-contain" />
            </button>
          </div>
        </header>

        {/* ── Centered content ── */}
        <main className="flex flex-col flex-1 items-center justify-center min-h-[326px]">
          <div className="flex flex-col items-center gap-[24px] pb-[40px] w-full px-[24px]">

            {/* Greeting */}
            <div className="flex items-center justify-center h-[72px]">
              <h1
                className="text-[28px] leading-[34px] text-center whitespace-nowrap font-normal"
                style={{ color: "#0d0d0d" }}
              >
                What&#39;s on the agenda today?
              </h1>
            </div>

            {/* Composer + actions */}
            <div className="flex flex-col gap-[24px] items-center w-full max-w-[768px]">

              {/* Composer bar */}
              <div
                className="flex items-start w-full h-[56px] p-[10px] rounded-[28px] overflow-hidden"
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
                    Ask anything
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
                    <img alt="" src={ICONS.voiceIcon} className="size-[20px] object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                  </button>
                </div>
              </div>

              {/* Action pill buttons */}
              <div className="flex flex-wrap justify-center gap-[12px]">
                {ACTION_BUTTONS.map((label) => (
                  <button
                    key={label}
                    className="flex items-center gap-[10px] px-[16px] py-[10px] rounded-[1000px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(13,13,13,0.05)]"
                    style={{ border: "1.2px solid rgba(143,143,143,0.2)" }}
                  >
                    <img alt="" src={ICONS.imageIcon} className="size-[16px] object-contain shrink-0" />
                    <span
                      className="text-[16px] leading-[20px] whitespace-nowrap"
                      style={{ color: "#5d5d5d" }}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="flex items-center justify-center min-h-[32px] px-[8px] py-[9px] shrink-0 sticky bottom-0 bg-white">
          <p className="text-[12px] leading-[14px] text-center" style={{ color: "#5d5d5d" }}>
            ChatGPT can make mistakes. Check important info. See Cookie Preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
