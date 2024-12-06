"use client"

import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, FileIcon, FolderIcon } from 'lucide-react'
import Image from "next/image"
import { Highlight, themes, type Language } from "prism-react-renderer"
import * as React from "react"

export default function CodeEditor() {
  const [activeTab, setActiveTab] = React.useState("main.rs")
  const [expandedFolders, setExpandedFolders] = React.useState<string[]>(["src"])

  const files: Record<string, { content: string; language: Language }> = {
    "main.rs": {
      language: "rust",
      content: `use anyhow::Result;
use cli::app::App;
use human_panic::setup_panic;

pub mod cli;
pub mod core;
pub mod utils;

/// Entrypoint to the CLI application
fn main() -> Result<()> {
    // Human panic messages are only shown in release builds
    setup_panic!();

    #[cfg(windows)]
    let _ = ansi_term::enable_ansi_support();

    App::new().run()
}`
    },
    "mod.rs": {
      language: "rust",
      content: `// Module contents here...                                `
    }
  }

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const FileTree = ({ name, isFolder, children, icon, isRust }: { name: string, isFolder: boolean, children?: React.ReactNode, icon?: string, isRust?: boolean }) => {
    const isExpanded = expandedFolders.includes(name)
    return (
      <div>
        <div
          className={`flex items-center gap-1 px-2 py-1 text-sm text-zinc-300 ${isFolder ? 'cursor-pointer hover:bg-white/10' : ''}`}
          onClick={() => isFolder && toggleFolder(name)}
        >
          {isFolder ? (
            isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
          ) : null}
          {icon ? <Image src={icon} alt="" width={20} height={20} /> : null}
          {!icon && isFolder ? <FolderIcon className="w-4 h-4" /> : null}
          {!icon && !isRust && !isFolder ? <FileIcon className="w-4 h-4" /> : null}
          {isRust && <Image src="/icons/rust-svgrepo-com.svg" alt="" width={28} height={28}/>}
          {name}
        </div>
        {isExpanded && children && <div className="pl-4">{children}</div>}
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl h-[500px] rounded-2xl border border-blue-500/30 bg-blue-950/50 text-white overflow-hidden flex backdrop-blur-sm p-2 translucent-gradient">
      {/* File Explorer */}
      <div className="min-w-60 border border-r-0 border-blue-500/30 p-2 flex flex-col gap-1 overflow-auto bg-blue-900/40 rounded-2xl">
        <div className="text-sm text-zinc-300 px-2 py-1 flex items-center gap-2">
          <Image src="/logo/github-logo.svg" alt="" width={16} height={16}/>
          flexcode/fleet
        </div>
        <FileTree name=".github" isFolder icon="/icons/dir-github.svg">
          <FileTree name="src" isFolder icon="/icons/dir-src.svg">
            <FileTree name="utils" isFolder icon="/icons/dir-utils.svg"/>
            <FileTree name="core" isFolder icon="/icons/dir-core.svg"/>
            <FileTree name="cli" isFolder icon="/icons/dir-cli.svg"/>
            <FileTree name="main.rs" isFolder={false} isRust />
          </FileTree>
        </FileTree>
      </div>



      {/* Editor Area */}
      <div className="flex-1 flex flex-col  p-2 px-0 border rounded-lg mx-2 border-blue-500/30">
        {/* File Info */}
        <div className="text-xs text-zinc-400 p-2 py-1 border-blue-500/30 border-b font-space-mono">
          <p className="relative bottom-1">{activeTab === "main.rs" ? "18 lines (14 sloc) · 338 bytes" : "1 line (1 sloc) · 28 bytes"}</p>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 border-b border-blue-500/30 p-2 pt-4 pb-0 ml-2">
          {Object.keys(files).map((filename) => (
            <button
              key={filename}
              onClick={() => setActiveTab(filename)}
              className={cn(
                "px-4 py-1 text-sm border-blue-500/30 flex items-center w-52 rounded-lg mb-2",
                activeTab === filename ? "bg-blue-800/50 border" : ""
              )}
            >
              <Image src="/icons/rust-svgrepo-com.svg" alt="" width={32} height={32}/>
              {filename}
            </button>
          ))}
        </div>


        {/* Code Content with Syntax Highlighting */}
        <div className="flex-1 p-4 text-sm overflow-auto">
          <Highlight theme={themes.vsDark} code={files[activeTab].content} language={files[activeTab].language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={cn(className, "bg-transparent")} style={{ ...style, background: 'transparent' }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })} className="table-row font-space-mono">
                    <span className="table-cell pr-4 text-right select-none opacity-50 text-zinc-400 w-12">
                      {i + 1}
                    </span>
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  )
}
