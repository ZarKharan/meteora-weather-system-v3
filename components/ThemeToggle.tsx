"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const saved=localStorage.getItem("meteora-theme");const next=saved? saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;setDark(next);document.documentElement.dataset.theme=next?"dark":"light";},[]);function toggle(){const next=!dark;setDark(next);document.documentElement.dataset.theme=next?"dark":"light";localStorage.setItem("meteora-theme",next?"dark":"light");}return <button className="theme-toggle" onClick={toggle} aria-label={dark?"Aktifkan mode terang":"Aktifkan mode gelap"}>{dark?<Sun size={16}/>:<Moon size={16}/>}<span>{dark?"Mode terang":"Mode gelap"}</span></button>}
