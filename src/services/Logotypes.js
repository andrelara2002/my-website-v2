import { IoLogoHtml5, IoLogoCss3, } from "react-icons/io"
import { SiFlutter, SiDart, SiCplusplus, SiCsharp, SiJavascript } from 'react-icons/si'
import { FaReact, FaJava } from 'react-icons/fa'
import { DiCode, DiPython } from 'react-icons/di'

import isDark from "./ThemeDetector"

export const Logotypes = {
    'javascript': { icon: SiJavascript, color: '#FCBA28' },
    'css': { icon: IoLogoCss3, color: '#4682B4' },
    'c#': { icon: SiCsharp, color: '#A3568C' },
    'flutter': { icon: SiFlutter, color: '#3D9DD9' },
    'dart': { icon: SiDart, color: '#05AFF2' },
    'html': { icon: IoLogoHtml5, color: '#C70039' },
    'java': { icon: FaJava, color: '#FF7A19' },
    'react': { icon: FaReact, color: '' },
    'code': { icon: DiCode, color: isDark() ? '#fafafa' : '#0f0f0f' },
    'python': { icon: DiPython, color: '#EFCA33' },
    'c++': { icon: SiCplusplus, color: '#3987A3' },
}