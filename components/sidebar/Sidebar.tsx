"use client";

import Link from "next/link";

// Figma asset URLs (valid 7 days from 2026-04-30 — replace with /icons/variant=N.svg if expired)
const ICONS = {
  chatgptLogo:   "https://www.figma.com/api/mcp/asset/5cc4aa9c-38c9-4047-8f4d-15b0c10b2272",
  closePanel:    "https://www.figma.com/api/mcp/asset/b0d45dc5-d07c-455d-b302-a8a278060898",
  newChat:       "https://www.figma.com/api/mcp/asset/75c5a0bf-68a7-4ad5-a497-eb01e30773f1",
  searchChats:   "https://www.figma.com/api/mcp/asset/ab80c21a-1a01-44a7-8580-b56f71efdb2f",
  apps:          "https://www.figma.com/api/mcp/asset/00d949d0-ab26-4400-9197-e61a4e485d16",
  newProject:    "/icons/variant=23.svg",
  projectFolder: "/icons/variant=22.svg",
  userAvatar:    "https://www.figma.com/api/mcp/asset/03eec1ce-34a4-437d-89b8-c0c26e47770a",
};

const MASK_GROUP = "https://www.figma.com/api/mcp/asset/5162ee1c-1deb-4daa-999b-91cc9f618bc8";

type NavItemProps = {
  icon?: string;
  label: string;
  selected?: boolean;
  useFolderMask?: boolean;
  href?: string;
};

function NavItem({ icon, label, selected = false, useFolderMask = false, href }: NavItemProps) {
  const inner = (
    <div
      className="flex items-center gap-[6px] w-full min-h-[36px] px-[10px] py-[8px] rounded-[10px] cursor-pointer group"
      style={{ backgroundColor: selected ? "#e8e8e8" : "transparent" }}
      onMouseEnter={(e) =>
        !selected && ((e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(13,13,13,0.05)")
      }
      onMouseLeave={(e) =>
        !selected && ((e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent")
      }
    >
      {icon && (
        <div className="shrink-0 size-[20px] relative overflow-hidden">
          {useFolderMask ? (
            <div
              className="absolute inset-0"
              style={{
                maskImage: `url('${MASK_GROUP}')`,
                maskSize: "20px 20px",
                maskRepeat: "no-repeat",
                backgroundColor: "#0d0d0d",
              }}
            />
          ) : (
            <img alt="" src={icon} className="absolute inset-0 size-full object-contain" />
          )}
        </div>
      )}
      <span
        className="flex-1 text-[14px] leading-[20px] truncate"
        style={{ color: "#0d0d0d", fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {label}
      </span>
    </div>
  );

  if (href) {
    return <Link href={href} className="w-full">{inner}</Link>;
  }
  return inner;
}

type SectionHeaderProps = { label: string };

function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="px-[12px] py-[4px]">
      <span
        className="text-[14px] leading-[20px] whitespace-nowrap"
        style={{ color: "#8f8f8f", fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

const PROJECTS = ["Vibe coding", "English Study", "IELTS", "Masters Application"];

const RECENTS: { id: string; title: string }[] = [
  { id: "masters-application",                        title: "Masters Application" },
  { id: "exploring-design-principles",                title: "Exploring Design Principles" },
  { id: "daily-ux-reflections",                       title: "Daily UX Reflections" },
  { id: "ai-in-education",                            title: "AI in Education: A Chat" },
  { id: "user-experience-case-studies",               title: "User Experience Case Studies" },
  { id: "learning-english-through-design",            title: "Learning English Through Design" },
  { id: "balancing-work-and-study",                   title: "Balancing Work and Study" },
  { id: "conversations-on-hci-trends",                title: "Conversations on HCI Trends" },
  { id: "feedback-from-peers",                        title: "Feedback from Peers" },
  { id: "visualizing-data-for-better-ux",             title: "Visualizing Data for Better UX" },
  { id: "daily-design-challenges",                    title: "Daily Design Challenges" },
  { id: "integrating-ai-into-user-experience",        title: "Integrating AI into User Experience" },
  { id: "english-vocabulary-in-tech",                 title: "English Vocabulary in Tech" },
  { id: "networking-with-fellow-designers",           title: "Networking with Fellow Designers" },
  { id: "critical-thinking-in-interaction-design",    title: "Critical Thinking in Interaction Design" },
  { id: "cultural-influences-on-ux",                  title: "Cultural Influences on UX" },
  { id: "your-favorite-design-tools",                 title: "Your Favorite Design Tools" },
  { id: "reflecting-on-user-research",                title: "Reflecting on User Research" },
];

type SidebarProps = { activeId?: string };

export default function Sidebar({ activeId }: SidebarProps) {
  return (
    <aside
      className="flex flex-col h-full shrink-0 w-[268px] relative z-[2]"
      style={{
        backgroundColor: "#f9f9f9",
        borderRight: "1px solid rgba(13,13,13,0.05)",
      }}
    >
      {/* ── Sticky top section ── */}
      <div className="flex flex-col gap-[8px] items-start px-[10px] shrink-0 w-full">

        {/* Header row: logo + close */}
        <div className="flex items-center justify-between w-full h-[52px] px-[2px]">
          <Link href="/">
            <button
              className="flex items-center justify-center size-[36px] rounded-[8px] shrink-0 cursor-pointer hover:bg-[#e8e8e8] transition-colors"
            >
              <div className="overflow-hidden size-[24px] relative">
                <img alt="ChatGPT" src={ICONS.chatgptLogo} className="absolute inset-0 size-full" />
              </div>
            </button>
          </Link>

          {/* Close sidebar */}
          <button
            className="flex items-center justify-center size-[36px] rounded-[8px] cursor-pointer hover:bg-[rgba(13,13,13,0.05)] transition-colors"
          >
            <img alt="close" src={ICONS.closePanel} className="size-[20px] object-contain" />
          </button>
        </div>

        {/* Sticky nav: New Chat + Search */}
        <div
          className="flex flex-col gap-[2px] items-center w-full pb-[2px]"
          style={{ borderBottom: "1px solid rgba(13,13,13,0.05)" }}
        >
          <NavItem icon={ICONS.newChat} label="New Chat" href="/" selected={!activeId} />
          <NavItem icon={ICONS.searchChats} label="Search chats" />
        </div>
      </div>

      {/* ── Scrollable history ── */}
      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-[10px]">

        {/* Apps + More */}
        <div className="flex flex-col gap-[2px] pb-[16px] shrink-0 w-full">
          <NavItem icon={ICONS.apps} label="Apps" />
          <NavItem icon={ICONS.newProject} label="More" />
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-[2px] pb-[16px] shrink-0 w-full">
          <SectionHeader label="Projects" />
          <NavItem icon={ICONS.newProject} label="New project" />
          {PROJECTS.map((name) => (
            <NavItem key={name} icon={ICONS.projectFolder} label={name} />
          ))}
          <NavItem icon={ICONS.newProject} label="More" />
        </div>

        {/* Recents */}
        <div className="flex flex-col gap-[2px] pb-[16px] shrink-0 w-full">
          <SectionHeader label="Recents" />
          {RECENTS.map((item) => (
            <NavItem
              key={item.id}
              label={item.title}
              href={`/c/${item.id}`}
              selected={activeId === item.id}
            />
          ))}
        </div>
      </div>

      {/* ── Profile section ── */}
      <div
        className="flex flex-col h-[65px] items-start px-[16px] py-[12px] shrink-0 w-full"
        style={{ borderTop: "1px solid rgba(13,13,13,0.15)" }}
      >
        <div className="flex gap-[8px] items-center w-full">
          {/* Avatar */}
          <div className="size-[24px] rounded-full overflow-hidden shrink-0">
            <img alt="Chanhee Shin" src={ICONS.userAvatar} className="size-full object-cover" />
          </div>

          {/* Name + plan */}
          <div className="flex flex-col flex-1 min-w-0 gap-[2px]">
            <span
              className="text-[16px] leading-[20px] truncate"
              style={{ color: "#0d0d0d", fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Chanhee Shin
            </span>
            <span
              className="text-[12px] leading-[14px]"
              style={{ color: "#8f8f8f", fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Free
            </span>
          </div>

          {/* Upgrade button */}
          <button
            className="flex items-center justify-center px-[10px] py-[6px] rounded-[1000px] shrink-0 cursor-pointer"
            style={{
              border: "1px solid rgba(13,13,13,0.15)",
              backgroundColor: "#ffffff",
            }}
          >
            <span
              className="text-[12px] leading-[14px] whitespace-nowrap tracking-[0.6px]"
              style={{ color: "#000000", fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Upgrade
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
